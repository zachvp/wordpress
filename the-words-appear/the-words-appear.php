<?php

/**
 * Plugin Name: The Words Appear
 * Description: Renders words at a pace consistent with the written style.
 * Version: 0.1
 * Author: zachvp
 */


global $NAME; // the plugin name
$NAME = 'the-words-appear';

function handle_render_block(string $block_content, array $block)
{
    global $NAME;

    if ('core/verse' === $block['blockName'])
    {
        return "<div class='{$NAME}'>{$block_content}</div>";
    }

    return $block_content;
}

add_filter('render_block', 'handle_render_block', 10, 2);


function handle_enqueue_scripts()
{
    // wp_enqueue_style( 'the-words-appear-style', plugins_url('style.css', __FILE__) );
    // wp_enqueue_style( 'the-words-appear-script', plugins_url( 'script.js', __FILE__ ));
    wp_register_script('script', plugins_url( 'script.js', __FILE__ ));
    wp_enqueue_script( 'the-words-appear-script', plugins_url( 'script.js', __FILE__ ));
    
    // wp_enqueue_style( 'style',  plugin_dir_url( __FILE__ ) . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'handle_enqueue_scripts' );

?>
