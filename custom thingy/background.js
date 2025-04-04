chrome.contextMenus.create({
    id: "addNote",
    title: "Add to Notey",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "addNote" && info.selectionText) {
        chrome.storage.sync.get('notes', function(data) {
            let notes = data.notes || [];
            notes.push(info.selectionText);
            chrome.storage.sync.set({
                'notes': notes
            }, function() {
                chrome.scripting.executeScript({
                    target: {
                        tabId: tab.id
                    },
                    function: function() {
                        alert('Note saved to Notey!');
                    }
                });
            });
        });
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "save-note") {
        saveCurrentNote();
    } else if (command === "new-note") {
        createNewNote();
    }
});

function saveCurrentNote() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        let currentTab = tabs[0];
        chrome.scripting.executeScript({
            target: {
                tabId: currentTab.id
            },
            function: function() {
                let selection = window.getSelection().toString();
                if (selection) {
                    chrome.storage.sync.get('notes', function(data) {
                        let notes = data.notes || [];
                        notes.push(selection);
                        chrome.storage.sync.set({
                            'notes': notes
                        }, function() {
                            alert('Note saved to Notey!');
                        });
                    });
                } else {
                    alert('No text selected!');
                }
            }
        });
    });
}

function createNewNote() {
    chrome.action.openPopup();
}
