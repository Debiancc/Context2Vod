vodHref = "http://vod.xunlei.com/share.html?&url={url}&from={from}";
chrome.contextMenus.create({
    "title": "Context2VOD",
    "contexts": ["selection"],
    "onclick": function(info, original_tab) {

        vodHref=vodHref.replace("{url}", encodeURI(info.selectionText));
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


// ed2k://|file|The.Originals.S01E01.1080p.WEB-DL.DD5.1.H.264-KiNGS.mkv|
// 1594486167|
// 4D7A564B96135A17F9B4D43AE4D1C8F8|
// h=XN2SEC5FZ373BSNL3HO4KJCIJTU4AMPL|/


// ed2k://|file|The.Originals.S01E01.1080p.WEB-DL.DD5.1.H.264-KiNGS.mkv|
// 1594486167|
// 4D7A564B96135A17F9B4D43AE4D1C8F8|
// h=XN2SEC5FZ373BSNL3HO4KJCIJTU4AMPL|/





// http://vod.xunlei.com/share.html?&url=ed2k%3A%2F%2F%7Cfile%7CThe.Originals.S01E01.1080p.WEB-DL.DD5.1.H.264-KiNGS.mkv%7C1594486167%7C4D7A564B96135A17F9B4D43AE4D1C8F8%7Ch%3DXN2SEC5FZ373BSNL3HO4KJCIJTU4AMPL%7C%2F&from=un_5670