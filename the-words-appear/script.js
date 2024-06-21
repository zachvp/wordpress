console.log('ZVP: sanity check: script load');

/*
(function($) {
    // Wait for the DOM to be ready
    $(document).ready(function() {
        let currentWordIndex = 0;
        let intervalId;

        function renderNextWord(words) {
            const targetTextContainer = $('#target-text-container');
            if (currentWordIndex < words.length) {
                targetTextContainer.append((currentWordIndex > 0 ? ' ' : '') + words[currentWordIndex]);
                currentWordIndex++;
            } else {
                clearInterval(intervalId);
            }
        }

        function startRendering() {
            // Reset the index and clear the target container
            currentWordIndex = 0;
            $('#target-text-container').html('');

            // Get the text from the source container
            const sourceText = $('#source-text-container').text();
            const words = sourceText.split(' ');

            // Start the interval to render text one word at a time
            intervalId = setInterval(function() {
                renderNextWord(words);
            }, 500); // Change 500 to the desired interval in milliseconds
        }

        // Bind the startRendering function to the button click
        $('#start-rendering').click(function() {
            startRendering();
        });
    });
})(jQuery);

*/
(function($) {
    jQuery(document).ready(function($) {
        console.log('ZVP: JQuery Ready');
        const PLUGIN_NAME = 'the-words-appear';
        const DIV_CONTENT = `${PLUGIN_NAME}-content`;
        const DIV_RENDER = `${PLUGIN_NAME}-render`;

        let divContent = document.getElementById('custom-div');
    });
})(jQuery);
