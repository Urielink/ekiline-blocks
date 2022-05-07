<?php
/**
 * Plugin Name:       Ekiline Modal
 * Description:       Add modal window in your content.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Uri Lazcano (Urielink)
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ekiline-modal
 *
 * @package           ekiline-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ekiline_blocks_ekiline_modal_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ekiline_blocks_ekiline_modal_block_init' );


/**
 * Prueba, intentar mover el contenido de un bloque al final de la pagina con PHP.
 * https://developer.wordpress.org/reference/functions/parse_blocks/
 */
function wpdocs_display_post_ekiline_modal_block() {

	// global $post;
	// print_r($post);

	// necesita ser definido si el bloque esta en una publicacion, le afecta en el admin.
	// if ( is_singular() && in_the_loop() && is_main_query() ) {
		if ( !is_admin() && is_singular() ){

		if ( has_filter( 'the_content', 'remove_blocks' ) ){
			// echo 'remove_blocks() is active<br>';
			remove_filter( 'the_content', 'remove_blocks');
		}

		// $blocks = parse_blocks( $post->post_content );

		$blocks = parse_blocks( get_the_content() );
		// print_r($blocks);
		foreach ( $blocks as $block ) {
			if ( 'ekiline-blocks/ekiline-modal' === $block['blockName'] ) {
				echo apply_filters( 'the_content', render_block( $block ) );
				// break; // imprime solo uno y continua.
			}
		}
	}
}
add_action( 'wp_footer', 'wpdocs_display_post_ekiline_modal_block', 0 );


//If single block exists on page or post don't show it with the other blocks
function remove_blocks() {
	// Revisar si el bloque esta en el contenido. le afecta en el admin.
	//   if ( is_singular() && in_the_loop() && is_main_query() ) {
		if ( !is_admin() && is_singular() ){
		//parse the blocks so they can be run through the foreach loop
		$blocks = parse_blocks( get_the_content() );
		foreach ( $blocks as $block ) {
			//look to see if your block is in the post content -> if yes continue past it if no then render block as normal
			if ( 'ekiline-blocks/ekiline-modal' === $block['blockName'] ) {
				continue;
			} else {
				echo render_block( $block );
			}
		}
	  }
	}
add_filter( 'the_content', 'remove_blocks');



/**
 * Detectar si un bloque esta en funcionamineto.
 * @link https://wordpress.stackexchange.com/questions/392493/find-if-widget-block-is-active
 */
function is_active_block_widget_wpse( $blockname ){
	$widget_blocks = get_option( 'widget_block' );
	foreach( (array) $widget_blocks as $widget_block ) {
		if ( ! empty( $widget_block['content'] )
			&& has_block( $blockname, $widget_block['content'] )
		) {
			return true;
		}
	}
	return false;
}

function detectar_widget(){
	// Funcion para detectar widget.
	$resultado = is_active_block_widget_wpse( 'ekiline-blocks/ekiline-modal' );
	if ( true === $resultado ){
		echo 'widget activo';
	}
}
// add_action( 'wp_footer', 'detectar_widget', 0 );







/**
 * Prueba render block cambiar contenido tampoco.
 * @https://developer.wordpress.org/reference/hooks/render_block/
 */

/**
 * Otra prueba.
 * https://florianbrinkmann.com/en/display-specific-gutenberg-blocks-of-a-post-outside-of-the-post-content-in-the-theme-5620/
 */

