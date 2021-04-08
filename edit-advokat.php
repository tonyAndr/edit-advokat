<?php
/*
Plugin Name: Edit Advokat
Plugin URI: 
Description: Изменение данных адвокатов
Author: ME
Version: 1.0
Author URI: 
*/

// admin page assets
function edit_advokat_assets($suffix) {
    if ($suffix === "settings_page_edit-advokat") {
        wp_enqueue_script( 'edit-advokat-script', plugins_url( '/', __FILE__ ) . 'build/build.js', array( 'wp-api', 'wp-i18n', 'wp-components', 'wp-element', 'wp-notices', 'wp-blocks', 'wp-editor' ), '1.0', true );
        wp_enqueue_style( 'edit-advokat-style', plugins_url( '/', __FILE__ ) . 'build/build.css', array( 'wp-components' ) );
    }
}

add_action('admin_enqueue_scripts', 'edit_advokat_assets');

function edit_advokat_options_page(){
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'Не достаточно прав для доступа к странице.' ) );
	}
	?>
	<div id="edit-advokat-container"></div>
	<?php
}

add_action('admin_menu', 'edit_advokat_option_menu', 1);
function edit_advokat_option_menu() {
	add_options_page('Редактор адвокатов', 'Редактор адвокатов', 'manage_options', 'edit-advokat', 'edit_advokat_options_page');
	
}

add_action( 'admin_bar_menu', 'add_edit_advokat_link_to_admin_bar',9999 );
 
function add_edit_advokat_link_to_admin_bar($admin_bar) {
        if (is_single()) {
            $post_id = get_the_ID();            
            $args = array(
                'id'     => 'editadv',
                'title'  => 'Изменить данные',
                'href'   => esc_url( admin_url( 'options-general.php?page=edit-advokat&advid='.$post_id ) ),
                'meta'   => false        
            );
            $admin_bar->add_node( $args );                        
        }
}