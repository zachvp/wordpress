console.log('ZVP: sanity check: script load');

(function($) {
    function log(message) {
        console.log(`ZVP: ${message}`);
    }

    jQuery(document).ready(function($) {
        log('JQuery Ready');

        const PLUGIN_NAME = 'the-words-appear';
        let divIndex = 0;
        let divContentList = [];
        let divRenderList = [];

        /** functions */
        // let loop = true;
        while (true) {
            let divContentID = `${PLUGIN_NAME}-content-${divIndex}`;
            let divRenderID  = `${PLUGIN_NAME}-render-${divIndex}`;
            let divContent = $(`#${divContentID}`);
            let divRender = $(`#${divRenderID}`);
            let divLoopIndex = divIndex;

            if (!divContent.length || !divRender.length) {
                break;
            }

            divContentList.push(divContent);
            divRenderList.push(divRender);

            // clear the main content
            // divContent.html('');

            let previousH2 = divContent.prevAll('h2').first();
            // log(`previousH2: ${JSON.stringify(previousH2, null, 2)}`);

            // handle main content title click
            previousH2.click(function(event) {
                log('handle click');

                // log(`div content: ${JSON.stringify(divContent.text(), null, 2)}`);
                let intervalID = 0;
                let renderContent = '';

                /** main script */
                let words = divContentList[divLoopIndex].html().split('');
                let wordIndex = 0;

                divContentList[divLoopIndex].html('');
                // render the words at the given speed
                intervalId = setInterval(function() {
                    if (wordIndex < words.length) {
                        renderContent += words[wordIndex];
                        divRenderList[divLoopIndex].html(renderContent);
                    } else {
                        clearInterval(intervalID);
                    }
                    wordIndex += 1;
                },
                50); // in MS
                // log(JSON.stringify(words, null, 2));
            });

            divIndex += 1;
        }
    });
})(jQuery);
