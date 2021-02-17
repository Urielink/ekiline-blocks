<?php
/**
 * @package ekiline
 */

/**
 * JS principal para quote.
 */
function ekiline_bootstrap_gallery() {
	// Identificador, ruta, grupo de scripts a donde pertenece.
    wp_enqueue_script( 'ekiline-bootstrap-gallery', plugins_url( '../gallery/gallery.js', __FILE__ ), array( 'wp-blocks' ) );
}
add_action( 'enqueue_block_editor_assets', 'ekiline_bootstrap_gallery' );

function ekiline_bootstrap_gallery_stylesheet() {
    wp_enqueue_style( 'ekiline-bootstrap-gallery-style', plugins_url( '../gallery/gallery.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'ekiline_bootstrap_gallery_stylesheet' );
