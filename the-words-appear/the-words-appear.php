<?php

/**
 * Plugin Name: The Words Appear
 * Description: Renders words at a pace consistent with the written style.
 * Version: 0.1
 * Author: zachvp
 */


global $PLUGIN_NAME; // the plugin name
$PLUGIN_NAME = 'the-words-appear';

function handle_render_block(string $block_content, array $block)
{
    global $PLUGIN_NAME;

    if ('core/verse' === $block['blockName'])
    {
        $content = "
            <div class='{$PLUGIN_NAME}-content'> {$block_content} </div>
            <div class='{$PLUGIN_NAME}-render'> </div>
        ";

        return trim($content);
    }

    return $block_content;
}

add_filter('render_block', 'handle_render_block', 10, 2);


function handle_enqueue_scripts()
{
    // wp_enqueue_style( 'the-words-appear-style', plugins_url('style.css', __FILE__) );
    // wp_enqueue_style( 'the-words-appear-script', plugins_url( 'script.js', __FILE__ ));
    $script_path = plugins_url( 'script.js', __FILE__ );

    wp_register_script('script', $script_path, array('jquery'));
    wp_enqueue_script('script');
}

add_action('wp_enqueue_scripts', 'handle_enqueue_scripts');

?>
