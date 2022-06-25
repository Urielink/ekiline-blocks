<?php
/**
 * Plugin Name:       Ekiline Toast
 * Description:       Muestra avisos con estilo Toast de bootstrap
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Uri Lazcano (Urielink)
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ekiline-toast
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
function ekiline_blocks_ekiline_toast_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ekiline_blocks_ekiline_toast_block_init' );

/**
 * Javascript en linea para tast.
 *
 * @link https://developer.wordpress.org/reference/functions/wp_script_is/
 */

function ekiline_block_toast_inline_script() {
	// Condición para mostrar js en front.
	if ( !is_admin() && is_singular() && ! has_block( 'ekiline-blocks/ekiline-toast' ) ) {
		return;
	}
	// Si existe Ekiline Theme, apoyar de su manejador, o ocupar nuevo manejador.
	$script_handle = ( wp_script_is( 'ekiline-layout', 'enqueued' ) ) ? 'ekiline-layout' : 'ekiline-blocks-inline' ;
	wp_add_inline_script( $script_handle, ekiline_block_toast_scripts_code(), 'after' );
}
add_action( 'wp_enqueue_scripts', 'ekiline_block_toast_inline_script', 100 );

/**
 * Código JS complementario.
 */
function ekiline_block_toast_scripts_code() {
$code = '
// Abrir un toast programado.
function ekiline_launch_toast(){
	// Bucar un toast programado.
	var toastProgramado = document.querySelectorAll(\'[data-ek-launch-time]\');
	// Si existe ejecutar.
	if(0!==toastProgramado.length){
		toastProgramado.forEach(function (toastItem) {
			// Toast programado.
			var nuevoToast = new bootstrap.Toast(toastItem, {
				autohide: false
			});
			// Tiempo de lanzado.
			var toastData = toastItem.dataset.ekLaunchTime;
			setTimeout(
				function() {
					// Mostrar.
					nuevoToast.show();
				},
				// tiempo.
				toastData
			);
		});
	}
}
ekiline_launch_toast();

// Abrir un toast con scroll.
function ekiline_scroll_toast(){
	// Buscar un toast programado.
	var toastScroll = document.querySelectorAll(\'.launch-scroll\');
	// Si existe ejecutar.
	if(0!==toastScroll.length){
		toastScroll.forEach(function (toastItem) {
			// Toast programado.
			var nuevoToast = new bootstrap.Toast(toastItem, {
				autohide: false
			});
			// Activacion por scroll.
			window.addEventListener(\'scroll\',
				function() {
					if( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) ) {
						nuevoToast.show();
					} 
				}
			);

		});
	}
}
ekiline_scroll_toast();
';
return $code;
}

?>
