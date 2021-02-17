<?php
/**
 * Plugin Name: Sidebar plugin
 */

function sidebar_plugin_register() {

    wp_register_script(
        'plugin-sidebar-js',
        plugins_url( '../sidebar/sidebar.js', __FILE__ ),
        array(
            'wp-plugins',
            'wp-edit-post',
            'wp-element',
            'wp-components'
        )
    );

    wp_register_style(
        'plugin-sidebar-css',
        plugins_url( '../sidebar/sidebar.css', __FILE__ )
    );

	register_post_meta(
		// 'post', // afecta solo a las entradas.
		'', // afecta todo tipo de contenidos. // https://developer.wordpress.org/reference/functions/register_post_meta/
		'sidebar_plugin_meta_block_field',
		array(
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
		)
	);
	// add_post_type_support( 'page', 'excerpt', 'custom-fields' );
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
    wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );

function sidebar_plugin_style_enqueue() {
    wp_enqueue_style( 'plugin-sidebar-css' );
}
add_action( 'enqueue_block_assets', 'sidebar_plugin_style_enqueue' );