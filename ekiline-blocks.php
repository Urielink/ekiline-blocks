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
along with Ekiline Blocks. If not, see http://www.gnu.org/licenses/gpl-2.0.txt.
*/

/**
 * Idioma
 */
function ekiline_blocks_textdomain() {
    load_plugin_textdomain( 'ekiline-blocks', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'ekiline_blocks_textdomain' );

/**
 * Bloque Carrusel
 */
require plugin_dir_path( __FILE__ ) . '/ekiline-carousel/shortcode-ekiline-carousel.php';
require plugin_dir_path( __FILE__ ) . '/ekiline-carousel/ekiline-carousel.php';

/**
 * Bloque Tabs
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-tabs/ekiline-tabs.php';

/**
 * Bloque Modal
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-modal/ekiline-modal.php';


/**
 * Personalizaciones
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-custom-features/ekiline-custom-features.php';

/*
* Para conocer la lista de bloques:
* @ref https://developer.wordpress.org/reference/functions/get_dynamic_block_names/
* get_dynamic_block_names();
*/

// function show_registered_blocks(){
//    // Conocer los bloques existentes.
//    $bloques = get_dynamic_block_names();
//    $lista = '';
//    foreach($bloques as $key => $bloque) {
//        $lista .= '(' . $key  . ') ' . $bloque . ( next($bloques) === true ? ', ' : '' ) ;
//    }
//    $aviso = '<div class="alert alert-success">' . $lista . '</div>';
//    echo $aviso;
// }
// add_action('wp_footer','show_registered_blocks',100);