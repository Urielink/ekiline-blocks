<?php
/*
 * Ekiline Blocks
 *
 * @package           ekiline-blocks
 * @author            Uri Lazcano
 * @copyright         2020 BIXNIA
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Ekiline Blocks
 * Plugin URI:        https://bixnia.com
 * Description:       Complementary action blocks and theme design templates (carousel, collapse, and more).
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Uri Lazcano
 * Author URI:        https://bixnia.com
 * Text Domain:       ekiline-blocks
 * Domain Path:       /languages
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
/*
Ekiline Blocks is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Ekiline Blocks is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Ekiline Blocks. If not, see {URI to Plugin License}.
*/

/**
 * Idioma
 */
function ekiline_blocks_textdomain() {
    load_plugin_textdomain( 'ekiline-blocks', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'ekiline_blocks_textdomain' );

/**
 * Bloques por entidad (MVC).
 * Estas pruebas modifican cosas como el estilo, en cada caso se registra un script y un estilo.
 * No hace más.
 */
require plugin_dir_path( __FILE__ ) . '/ekiline-carousel/shortcode-ekiline-carousel.php';
require plugin_dir_path( __FILE__ ) . '/ekiline-carousel/ekiline-carousel.php';
