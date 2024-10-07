chrome.commands.onCommand.addListener(function(command) {
    if (command === "switch-tab-left") {
        switchTab(-1);
    } else if (command === "switch-tab-right") {
        switchTab(1);
    }
});

function switchTab(direction) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        if (tabs.length <= 1) return;
        
        chrome.tabs.query({currentWindow: true, active: true}, function(currentTab) {
            var currentIndex = currentTab[0].index;
            var newIndex = (currentIndex + direction + tabs.length) % tabs.length;
            chrome.tabs.update(tabs[newIndex].id, {active: true});
        });
    });
}