<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package ekiline
 */

/**
 * Carrusel [ekiline-carousel] shortcode.
 *
 * Default posts, solo agregar ids, limites y columnas opcionales.
 * Extraer bloque con ubicacion y nombre.
 * [ekiline-carousel id=category amount=n block=location/name sort=@REF mixed=true]
 *
 * Opcional solo imagenes, agregar id, limites y columnas opcionales.
 * [ekiline-carousel type="images" id=image amount=n]
 *
 * Columnas: columns = 1,2,3,4 o 6
 * Controles de carrusel: control,indicators,auto = false
 * Transicion: time = 5000 (number)
 * Animacion: animation = vertical o fade
 *
 * @link ref: https://developer.wordpress.org/reference/classes/wp_query/#properties-and-methods
 * @param array $atts Shortcode attributes. Default empty.
 * @return string Full html.
 */
function ekiline_shortcode_carousel( $atts = [] ) {

	$atts = shortcode_atts(
		array(
			'type'       => 'posts', // Default posts, or images.
			'id'         => null, // Default none, image ids, category ids.
			'amount'     => '3', // Default 3.
			'orderby'    => null, // Default Date.
			'columns'    => null, // Default single view.
			'block'      => null, // Find a block.
			'mixed'      => null, // Dont load post if image or block not exist.
			'control'    => null, // Show carousel controls.
			'indicators' => null, // Show carousel indicators.
			'auto'       => null, // Show carousel indicators.
			'time'       => null, // Set time interval between slides.
			'animation'  => null, // Set time animation.
			'height'     => null, // Set min-height of carousel.
		),
		$atts,
		'ekiline-carousel'
	);

	// Obtener ids.
	$id_arr = explode( ',', $atts['id'] );
	// Default posts.
	$carousel = ekiline_carousel_posts( $atts['amount'], $id_arr, $atts['block'], $atts['orderby'], $atts['mixed'] );
	// Condicion para images.
	if ( 'images' === $atts['type'] ) {
		$carousel = ekiline_carousel_images( $id_arr );
	}
	// Numero de columnas.
	$columns = ( in_array( $atts['columns'], [ '2', '3', '4', '6' ], true ) ) ? ' carousel-multiple x' . $atts['columns'] : '';
	// Obtener HTML y combinar con funciones previas.
	ob_start();
	ekiline_carousel_html( $carousel, $columns, $atts['control'], $atts['indicators'], $atts['auto'], $atts['time'], $atts['animation'], $atts['height'] );
	return ob_get_clean();
}
// phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.plugin_territory_add_shortcode
add_shortcode( 'ekiline-carousel', 'ekiline_shortcode_carousel' );


/**
 * Funcion para carrusel de entradas, por default, ocupa 7 slides y todas las categorias.
 * En caso de no obtener informacion.
 *
 * @link ref: https://developer.wordpress.org/reference/functions/render_block/
 *
 * @param string $ppp number, of posts to show.
 * @param array  $cat category ids or slug.
 * @param string $findblock block/name, to find and parse in slide.
 * @param string $orderby date/rand/etc, sort slides.
 * @param string $mixed allow to show thumbnails and blocks.
 * @return array query data.
 */
function ekiline_carousel_posts( $ppp = 3, $cat = array(), $findblock = null, $orderby = 'date', $mixed = null ) {

	$carousel = array();

	$args = array(
		'orderby'        => $orderby,
		'posts_per_page' => $ppp,
		'cat'            => $cat,
	);

	$carousel_query = new WP_Query( $args );

	if ( $carousel_query->have_posts() ) {

		while ( $carousel_query->have_posts() ) {

			$carousel_query->the_post();

			$info            = array();
			$info['title']   = get_the_title();
			$info['plink']   = get_the_permalink();
			// $info['excerpt'] = get_the_excerpt();
			// junio 2, limitar el texto.
			$info['excerpt'] = ( has_excerpt() )?get_the_excerpt():'';
			$info['content'] = get_the_content();

			if ( has_post_thumbnail() ) {
				$thumb_id        = get_post_thumbnail_id();
				$thumb_url_array = wp_get_attachment_image_src( $thumb_id, 'full', true );
				$thumb_url       = $thumb_url_array[0];
				$info['image']   = $thumb_url;
				$info['alt']     = get_post_meta( $thumb_id, '_wp_attachment_image_alt', true );
			}

			if ( $findblock ) {

				if ( 'true' !== $mixed ) {
					// Reset array, ignorar la informacion acumulada, solo mantener la nueva.
					$info = array();
				}

				$blocks = parse_blocks( get_the_content() );
				foreach ( $blocks as $block ) {
					if ( $block['blockName'] === $findblock ) {
						$info['block'] = render_block( $block );
					}
				}
			}

			if ( $info ) {
				$carousel[] = $info;
			}
		}
		wp_reset_postdata();
	}

	return $carousel;
}

/**
 * Funcion para carrusel de entradas, por default, ocupa 7 slides y todas las categorias.
 * En caso de no obtener informacion.
 *
 * @link ref: https://developer.wordpress.org/reference/functions/wp_get_attachment_image/
 * @link ref: https://developer.wordpress.org/reference/functions/wp_get_attachment_image_src/
 * @link ref: https://developer.wordpress.org/reference/functions/get_post_mime_type/
 *
 * @param array $ids image ids.
 * @return array images data.
 */
function ekiline_carousel_images( $ids = array() ) {
	if ( ! $ids ) {
		return;
	}
	$carousel = array();
	foreach ( $ids as $index => $image ) {
		$info            = array();
		$info['title']   = get_the_title( $image );
		// 05-03-22: adicion de videos en el carrusel.
		// $info['image']   = wp_get_attachment_image_src( $image, 'full', true )[0]; // seleccion especifica url de imagen.
		$info['image']   = wp_get_attachment_url( $image ); // seleccion general de url de attachment.
		$info['mimetype']= get_post_mime_type($image); // conocer tipo de archivo llamado.
		$info['alt']     = get_post_meta( $image, '_wp_attachment_image_alt', true );
		$info['excerpt'] = get_post( $image )->post_excerpt; // Caption.
		$info['content'] = get_post( $image )->post_content; // Description.
		$carousel[]      = $info;
	}
	return $carousel;
}

/**
 * Marcado para el carrusel.
 *
 * @link https://www.php.net/manual/en/function.str-contains.php
 *
 * @param array  $carousel recibe los datos de loop previos.
 * @param string $columns obtiene la clase css que extiende la vista del carrusel.
 * @param string $control opcion, ocultar controles = false.
 * @param string $indicators opcion, ocultar indicadores = false.
 * @param string $auto opcion, no iniciar carrusel = false.
 * @param string $time opcion, milisegundos para las transiciones del carrusel = 5000.
 * @param string $animation opcion, = fade, vertical.
 */
function ekiline_carousel_html( $carousel, $columns, $control, $indicators, $auto, $time, $animation, $height ) {

	if ( $carousel ) {
		$uniq_id   = 'carousel_module_' . wp_rand( 1, 99 );
		$auto      = ( 'false' !== $auto ) ? ' data-bs-ride="carousel"' : '';
		$time      = ( $time ) ? ' data-bs-interval="' . $time . '"' : '';
		$animation = ( $animation ) ? ' carousel-' . $animation : '';
		if( null === $height ){
			$height = ' style="min-height:480px;"';
		} elseif ( '0' === $height ){
			$height = ' style="min-height:100vh;"';
		} else {
			$height = ' style="min-height:' . $height . 'px;"';
		}
		?>

		<div id="<?php echo esc_attr( $uniq_id ); ?>" class="carousel slide<?php echo esc_attr( $columns . $animation ); ?>"<?php echo wp_kses_post( $auto . $time . $height ); ?>>

			<?php if ( 'false' !== $indicators ) { ?>

				<div class="carousel-indicators">
					<?php
					foreach ( $carousel as $index => $indicator ) {
						$active = ( 0 === $index ) ? 'active' : '';
						?>
						<button type="button" data-bs-target="#<?php echo esc_html( $uniq_id ); ?>" data-bs-slide-to="<?php echo esc_attr( $index ); ?>" class="<?php echo esc_attr( $active ); ?>"></button>
					<?php } ?>
				</div>

			<?php } ?>

			<div class="carousel-inner">
				<?php
				foreach ( $carousel as $index => $slide ) {
					$active  = ( 0 === $index ) ? ' active' : '';
					$cap_img = ( !isset( $slide['image'] ) ) ? ' no-image' : '';
					?>

					<div class="carousel-item<?php echo esc_attr( $active ); ?>"<?php echo wp_kses_post( $height ); ?>>

						<?php if ( isset( $slide['block'] ) ) { ?>

							<?php echo wp_kses_post( $slide['block'] ); ?>

						<?php } else { ?>

							<?php if ( isset( $slide['image'] ) ) { ?>

								<?php // 05-03-22: adicion de videos en el carrusel. ?>
								<?php if ( isset( $slide['mimetype'] ) && str_contains( $slide['mimetype'], 'video') ) { ?>
									<video class="carousel-media wp-block-cover__video-background intrinsic-ignore" autoplay="" muted="" loop="" playsinline="" controls="" src="<?php echo esc_url( $slide['image'] ); ?>" data-object-fit="cover"></video>
								<?php } else { ?>
									<img class="carousel-media img-fluid" src="<?php echo esc_url( $slide['image'] ); ?>" alt="<?php echo esc_html( $slide['alt'] ); ?>" title="<?php echo esc_html( $slide['title'] ); ?>" loading="lazy">
								<?php } ?>

							<?php } ?>

							<div class="carousel-caption <?php echo esc_attr( $cap_img ); ?>">

								<?php if ( isset( $slide['title'] ) && $slide['title'] ) { ?>
									<h3>
										<?php if ( isset( $slide['plink'] ) ) { ?>
											<a href="<?php echo esc_html( $slide['plink'] ); ?>">
										<?php } ?>

										<?php echo esc_html( $slide['title'] ); ?>

										<?php if ( isset( $slide['plink'] ) ) { ?>
											</a>
										<?php } ?>

									</h3>
								<?php } ?>

								<?php if ( isset( $slide['excerpt'] ) && $slide['excerpt'] ) { ?>
									<p><?php echo wp_kses_post( $slide['excerpt'] ); ?></p>
								<?php } ?>

							</div>

						<?php } ?>

					</div>

				<?php } ?>
			</div>

			<?php if ( 'false' !== $control ) { ?>

				<button type="button" class="carousel-control-prev" data-bs-target="#<?php echo esc_html( $uniq_id ); ?>" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button type="button" class="carousel-control-next" data-bs-target="#<?php echo esc_html( $uniq_id ); ?>" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>

			<?php } ?>

		</div>
		<?php
	}
}
