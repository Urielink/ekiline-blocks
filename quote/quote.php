<?php
/**
 * @package ekiline
 */

/**
 * JS principal para quote.
 */
function ekiline_quote() {
	// Identificador, ruta, grupo de scripts a donde pertenece.
    wp_enqueue_script( 'ekiline-quote', plugins_url( '../quote/quote.js', __FILE__ ), array( 'wp-blocks' ) );
}
add_action( 'enqueue_block_editor_assets', 'ekiline_quote' );

function ekiline_quote_stylesheet() {
    wp_enqueue_style( 'ekiline-quote-style', plugins_url( '../quote/quote.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'ekiline_quote_stylesheet' );