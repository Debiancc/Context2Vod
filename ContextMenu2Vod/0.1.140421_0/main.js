vodHref = "http://vod.xunlei.com/share.html?&url={url}&from={from}";
chrome.contextMenus.create({
    "title": "Context2VOD",
    "contexts": ["selection"],
    "onclick": function(info, original_tab) {

        vodHref=vodHref.replace("{url}", info.selectionText);
        vodHref=vodHref.replace("{from}","vodHome");
        
        debugger;
        chrome.tabs.create({
            "url": vodHref,
            "openerTabId": original_tab.index + 1,
            "openerTabId": original_tab.id,
            "active": true
        });
    }
});