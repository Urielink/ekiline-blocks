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
 * Scripts y estilos.
 * @link https://developer.wordpress.org/reference/functions/wp_script_is/
 */
function ekiline_blocks_required_scripts() {
	// Condicion: Si Ekiline no es su tema, habilitar complementos bootstrap.
	$theme = wp_get_theme();
	if ( 'Ekiline' !== $theme->name || 'Ekiline' !== $theme->parent_theme ) {
		wp_enqueue_style( 'ekiline-blocks-bootstrap-style', plugin_dir_url( __FILE__ ) . 'assets/css/bootstrap.min.css', array(), '5', 'all' );
		wp_enqueue_script( 'ekiline-blocks-bootstrap-script', plugin_dir_url( __FILE__ ) . 'assets/js/bootstrap.bundle.min.js', array(), '5', true );
		// Si no existe el manejador 'ekiline-layout' de Ekiline Theme, crear uno nuevo.
		wp_register_script( 'ekiline-blocks-inline', '', array(), '', true );
		wp_enqueue_script( 'ekiline-blocks-inline' );
	}
	if ( 'Ekiline' === $theme->name || 'Ekiline' === $theme->parent_theme ) {
		wp_dequeue_style( 'ekiline-blocks-bootstrap-style' );
		wp_dequeue_script( 'ekiline-blocks-bootstrap-script' );
		wp_dequeue_script( 'ekiline-blocks-inline' );
	}
}
add_action( 'wp_enqueue_scripts', 'ekiline_blocks_required_scripts', 1 );


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
 * Bloque Acordeon y Collapse
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-accordion/ekiline-accordion.php';
require plugin_dir_path( __FILE__ ) . '/ekiline-collapse/ekiline-collapse.php';

/**
 * Bloque Popovers
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-popovers/ekiline-popovers.php';
/**
 * Bloque Progress
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-progress/ekiline-progress.php';
/**
 * Bloque toast
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-toast/ekiline-toast.php';


/**
 * Personalizaciones
 **/
require plugin_dir_path( __FILE__ ) . '/ekiline-custom-features/ekiline-custom-features.php';





/*
* Auxiliar
* Para conocer la lista de bloques:
* @ref https://developer.wordpress.org/reference/functions/get_dynamic_block_names/
* @ref https://developer.wordpress.org/block-editor/reference-guides/core-blocks/ 
* get_dynamic_block_names();
*/

function show_registered_blocks(){
// Conocer los bloques existentes.
$bloques = get_dynamic_block_names();
$lista = '';
foreach($bloques as $key => $bloque) {
	$lista .= '(' . $key  . ') ' . $bloque . ( next($bloques) === true ? ', ' : '' ) ;
}
$aviso = '<div class="alert alert-success">' . $lista . '</div>';
	echo $aviso;
}
// add_action('wp_footer','show_registered_blocks',100);


/**
 * Detectar si un bloque esta en funcionamineto en los widgets.
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
