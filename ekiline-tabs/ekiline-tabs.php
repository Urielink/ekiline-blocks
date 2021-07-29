<?php
/**
 * Plugin Name:       Ekiline Tabs
 * Description:       Add tab modules to your content.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Uri Lazcano (Urielink)
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ekiline-tabs
 *
 * @package           ekiline-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function ekiline_blocks_ekiline_tabs_block_init() {

	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "ekiline-blocks/ekiline-tabs" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'ekiline-blocks-ekiline-tabs-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'ekiline-blocks-ekiline-tabs-block-editor', 'ekiline-tabs' );

	$style_css = 'build/style-index.css';
	wp_register_style(
		'ekiline-blocks-ekiline-tabs-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	// register_block_type( __DIR__ );
	// Esta clase, se agrega por registrar con el package.json (wp-block-ekiline-blocks-ekiline-tabs).
	// Solo me funciona al desarrollar.

	register_block_type(
		'ekiline-blocks/ekiline-tabs',
		array(
			'apiVersion'      => 2,
			'editor_script'   => 'ekiline-blocks-ekiline-tabs-block-editor',
			'editor_style'    => 'ekiline-blocks-ekiline-tabs-block-editor',
			'style'           => 'ekiline-blocks-ekiline-tabs-block',
		)
	);
}
add_action( 'init', 'ekiline_blocks_ekiline_tabs_block_init' );
