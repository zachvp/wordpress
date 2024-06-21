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
    function log(message) {
        console.log(`ZVP: ${message}`);
    }

    jQuery(document).ready(function($) {
        log('JQuery Ready');

        const PLUGIN_NAME = 'the-words-appear';
        const DIV_CONTENT = `${PLUGIN_NAME}-content-0`;
        const DIV_RENDER  = `${PLUGIN_NAME}-render-0`;

        let divContent = $(`#${DIV_CONTENT}`);
        // todo: customize the verse block on the server to use newlines instead of breaks.
        // divContent = divContent.replace(/<br\s*\/?>/gi, '\n');
        // $(`#${DIV_CONTENT}`).html(divContent);

        log(`div content: ${JSON.stringify(divContent.text(), null, 2)}`);

        let divRender = $(`#${DIV_RENDER}`);

        let intervalID = 0;
        let wordIndex = 0;
        let renderContent = '';

        /** functions */
        function renderNext(words) {
            // log('render next');
            if (wordIndex < words.length) {
                // if ()
                renderContent += words[wordIndex];
                // divRender.append(words[wordIndex]);
                divRender.html(renderContent);
                // divRender.innerHTML += words[wordIndex];
                // log(`div render: ${JSON.stringify($(`#${DIV_RENDER}`).text(), null, 2)}`);
            } else {
                clearInterval(intervalID);
            }
        }

        /** main script */
        let words = divContent.html().split('');
        //             const replacedArray = textArray.map(item => item === '\n' ? '<br>' : item);
        divContent.html('');
        //textWithNewlines.replace(/\n/g, '<br>');
        log(JSON.stringify(words, null, 2));
        intervalID = setInterval(function() {
            renderNext(words);
            wordIndex += 1;
        },
        100); // in MS

            // intervalId = setInterval(function() {
            //     renderNextWord(words);
            // }, 500); // Change 500 to the desired interval in milliseconds

        // let divContent = document.getElementById(`${DIV_CONTENT}`);
        // $(`#${DIV_CONTENT}`).text('');
                // const textContent = $('#custom-div').text();

    });
})(jQuery);
