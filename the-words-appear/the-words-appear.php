<?php

/**
 * Plugin Name: The Words Appear
 * Description: Renders words at a pace consistent with the written style.
 * Version: 0.1
 * Author: zachvp
 */


global $PLUGIN_NAME; // the plugin name
global $ID_COUNTER;

$PLUGIN_NAME = 'the-words-appear';
$ID_COUNTER = 0;

function handle_render_block(string $block_content, array $block)
{
    global $PLUGIN_NAME;
    global $ID_COUNTER;

    if ('core/verse' === $block['blockName'])
    {
        $content = "
            <div id='{$PLUGIN_NAME}-content-{$ID_COUNTER}'> {$block_content} </div>
            <div id='{$PLUGIN_NAME}-render-{$ID_COUNTER}'> </div>
        ";

        $ID_COUNTER += 1;
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
