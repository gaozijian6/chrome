chrome.commands.onCommand.addListener((command) => {
    if (command === "switch-tab-left") {
        switchTab(-1);
    } else if (command === "switch-tab-right") {
        switchTab(1);
    } else if (command === "open-console") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs?.[0];
            if (currentTab?.id) {
                chrome.debugger.attach({tabId: currentTab.id}, "1.2")
                    .then(() => {
                        return chrome.debugger.sendCommand({tabId: currentTab.id}, "Runtime.evaluate", {
                            expression: "inspect()",
                            contextId: 1
                        });
                    })
                    .catch((error) => {
                        console.error("打开开发者工具失败:", error);
                    });
            } else {
                console.error("未找到当前标签页");
            }
        });
    }
});

function switchTab(direction) {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
        tabs?.length > 1 && chrome.tabs.query({currentWindow: true, active: true}, (currentTab) => {
            const currentIndex = currentTab?.[0]?.index;
            const newIndex = (currentIndex + direction + tabs.length) % tabs.length;
            chrome.tabs.update(tabs[newIndex]?.id, {active: true});
        });
    });
}