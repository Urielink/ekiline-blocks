<?php
/**
 * Plugin Name:       Ekiline Accordion
 * Description:       Show your content as an accordion.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Uri Lazcano (Urielink)
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ekiline-accordion
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
function ekiline_blocks_ekiline_accordion_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ekiline_blocks_ekiline_accordion_block_init' );
