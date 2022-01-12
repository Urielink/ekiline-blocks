<?php
/**
 * Funciones rescatadas de tema anterior.
 * Rescued functions from prevous development.
 */

/**
 * Meta KeyWords, extender, permitirlas en la páginas.
 * meta keywords, extend this to use in pages.
 **/
function ekiline_tags_support_all() {
	register_taxonomy_for_object_type( 'post_tag', 'page' );
}
add_action( 'init', 'ekiline_tags_support_all' );

/**
 * 2) Expirar la sesion que permite leer un contenido protegido
 * Expire post password
 *
 * @link https://developer.wordpress.org/reference/hooks/post_password_expires/
 *
 * @param string $time set time values.
 */
function ekiline_expire_cookie( $time ) {

	$session = '0';
	$stck    = '';

	if ( '0' === $session ) {
		// Set cookie to expire at the end of the session.
		$stck = 0;
	} elseif ( '5' === $session ) {
		// For 5 minutes (60 * 5).
		$stck = time() + 300;
	} elseif ( '10' === $session ) {
		// For 10 mn.
		$stck = time() + 600;
	}

	return $stck;

}
add_filter( 'post_password_expires', 'ekiline_expire_cookie' );


/**
 * Incorporar datos a sitemap.
 * Referencias:
 *
 * @link https://make.wordpress.org/core/2020/07/22/new-xml-sitemaps-functionality-in-wordpress-5-5/
 * @link https://www.sitemaps.org/protocol.html
 * @link https://developer.wordpress.org/reference/functions/get_the_date/
 * @link https://developer.wordpress.org/reference/functions/current_time/
 *
 * @param string $entry publicacion.
 * @param string $post tipo de publicacion.
 */
function ekiline_sitemap_more_atts( $entry, $post ) {

	$frec  = 'never';
	$prior = '0.6';
	$set_y = ( current_time( 'Y', true ) - get_the_modified_date( 'Y', $post ) );
	$set_m = ( current_time( 'm', true ) - get_the_modified_date( 'm', $post ) );
	$set_d = ( current_time( 'd', true ) - get_the_modified_date( 'd', $post ) );

	if ( 2 > $set_y ) {
		$frec  = 'yearly';
		$prior = '0.7';
	}

	if ( 0 === $set_y ) {
		if ( 2 > $set_m ) {
			$frec  = 'monthly';
			$prior = '0.8';
		}
		if ( 0 === $set_m ) {
			if ( 8 < $set_d ) {
				$frec  = 'weekly';
				$prior = '0.9';
			} elseif ( 7 > $set_d ) {
				$frec  = 'daily';
				$prior = '1.0';
			}
		}
	}

	if ( 3 < $set_y ) {
		$prior = '0.5';
	}

	$entry['lastmod']    = $post->post_modified_gmt;
	$entry['changefreq'] = $frec;
	$entry['priority']   = $prior;

	return $entry;
}
add_filter( 'wp_sitemaps_posts_entry', 'ekiline_sitemap_more_atts', 10, 2 );

/**
 * Estilo personalizado en sitemap.
 * Referencias:
 *
 * @param string $css estilos.
 */
function ekiline_sitemap_css( $css ) {
	$css = '
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		color: #444;
		font-size:.83rem;
	}

	#sitemap__table {
		border: solid 1px #ccc;
		border-collapse: collapse;
	}

	#sitemap__table tr td.loc {
		direction: ltr;
	}

	#sitemap__table tr th {
		text-align: left;
	}

	#sitemap__table tr td,
	#sitemap__table tr th {
		padding: 10px;
	}

	#sitemap__table tr:nth-child(odd) td {
		background-color: #eee;
	}

	#sitemap__table tr:hover td {
		background-color: #ddd;
	}

	a:hover {
		text-decoration: none;
	}
	';
	return $css;
}

add_filter( 'wp_sitemaps_stylesheet_css', 'ekiline_sitemap_css', 0, 1 );

/**
 * Shortcodes, compartir para redes sociales.
 * 1. Habilitar protocolos auxiliares, por ejemplo: whatsapp.
 * 2. Establecer valores predeterminados, los bloques no facilitan el uso de shortcodes anidados.
 * 3. Crear un shortcode por cada item.
 */
add_filter( 'kses_allowed_protocols', function( $protocols ) {
	$protocols[] = 'whatsapp';
	return $protocols;
});

function ekiline_share_network_url($network){
	// Obtener URL.
	global $wp;
	$wp_url = home_url( add_query_arg(array(),$wp->request) );
	$link = '';
	switch ( $network ) {
		case 'facebook':
			$link = 'facebook.com/sharer.php?u=';
			break;
		case 'twitter':
			$link = 'twitter.com/share?url=';
			break;
		case 'googleplus':
			$link = 'plus.google.com/share?url=';
			break;
		case 'linkedin':
			$link = 'linkedin.com/shareArticle?url=';
			break;
		case 'whatsapp':
			$link = 'whatsapp://send?text=';
			break;
	}
	return $link . $wp_url;
}

add_shortcode( 'ekiline_share_facebook', function() {
	return ekiline_share_network_url('facebook');
});
add_shortcode( 'ekiline_share_twitter', function() {
	return ekiline_share_network_url('twitter');
});
add_shortcode( 'ekiline_share_linkedin', function() {
	return ekiline_share_network_url('linkedin');
});
add_shortcode( 'ekiline_share_googleplus', function() {
	return ekiline_share_network_url('googleplus');
});
add_shortcode( 'ekiline_share_whatsapp', function() {
	return ekiline_share_network_url('whatsapp');
});