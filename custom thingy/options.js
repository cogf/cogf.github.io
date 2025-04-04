document.addEventListener('DOMContentLoaded', function() {
    const backgroundColorInput = document.getElementById('backgroundColor');
    const textColorInput = document.getElementById('textColor');
    const saveOptionsBtn = document.getElementById('saveOptions');
    const statusDiv = document.getElementById('status');

    // Load saved options
    function loadOptions() {
        chrome.storage.sync.get(['backgroundColor', 'textColor'], function(result) {
            backgroundColorInput.value = result.backgroundColor || '#f4f4f4';
            textColorInput.value = result.textColor || '#333333';
        });
    }

    // Save options
    saveOptionsBtn.addEventListener('click', function() {
        const backgroundColor = backgroundColorInput.value;
        const textColor = textColorInput.value;

        chrome.storage.sync.set({
            'backgroundColor': backgroundColor,
            'textColor': textColor
        }, function() {
            statusDiv.textContent = 'Options saved.';
            setTimeout(function() {
                statusDiv.textContent = '';
            }, 2000);
        });
    });

    loadOptions();
});
