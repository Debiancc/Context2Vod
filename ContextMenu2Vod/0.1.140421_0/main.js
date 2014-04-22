chrome.contextMenus.create({
    "title": "Context2VOD",
    "onclick": function(info, original_tab) {
        chrome.tabs.create({
            "url": "http://www.google.com",
            "openerTabId": original_tab.index + 1,
            "openerTabId": original_tab.id,
            "active": true
        });
    }
});