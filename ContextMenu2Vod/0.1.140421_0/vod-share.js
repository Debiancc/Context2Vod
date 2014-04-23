(function() {
    debugger;
    var b = {
        style_1: "XL_CLOUD_VOD_BUTTON_yunyulan_btn",
        style_2: "XL_CLOUD_VOD_BUTTON_duyan_btn",
        style_3: "XL_CLOUD_VOD_BUTTON_yunyulan_btn",
        style_4: "XL_CLOUD_VOD_BUTTON_duyan_btn"
    };
    if (typeof(window.TD_CLOUD_VOD_JS_EXIST) != "undefined") {
        return
    }
    window.TD_CLOUD_VOD_JS_EXIST = true;
    var e = function(f, g) {
        if (f.readyState) {
            f.onreadystatechange = function() {
                if (f.readyState == "loaded" || f.readyState == "complete") {
                    f.onreadystatechange = null;
                    g && g()
                }
            }
        } else {
            f.onload = function() {
                g()
            }
        }
    };
    var d = function(i) {
        var m = i.attr("url") || "";
        var f = i.attr("filename") || "";
        var l = i.attr("from") || location.hostname;
        var h = i.attr("filesize") || "";
        var k = i.attr("cid") || "";
        var j = i.attr("gcid") || "";
        m = encodeURIComponent(m);
        var g = ["http://vod.xunlei.com/share.html?", "&url=", m];
        g = g.join("");
        if (f) {
            g += "&filename=" + encodeURIComponent(f)
        }
        if (h) {
            g += "&filesize=" + encodeURIComponent(h)
        }
        if (l) {
            g += "&from=" + encodeURIComponent(l)
        }
        if (k) {
            k += "&cid=" + encodeURIComponent(k)
        }
        if (j) {
            g += "&gcid=" + encodeURIComponent(j)
        }
        window.open(g, "TD_CLOUD_VOD")
    };
    var c = function() {
        $.noConflict();
        jQuery(document).ready(function(h) {
            var i = document.createElement("link");
            i.rel = "stylesheet";
            i.type = "text/css";
            i.href = "/stylesheets/share.css";
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(i);
            var g = h("a[name=TD_CLOUD_VOD_BUTTON]");
            g.attr("title", "迅雷云预览");
            g.addClass("XL_CLOUD_VOD_BUTTON_btn_b");
            g.each(function(l) {
                var k = h(this).attr("tclass") || "";
                if (typeof(b[k]) == "undefined") {
                    k = b.style_1
                } else {
                    k = b[k]
                }
                var m = h(this).attr("sclass");
                if (!m) {
                    m = "normal"
                }
                if (m == "big") {
                    k += "_big"
                } else {
                    if (m == "small") {
                        k += "_small"
                    } else {
                        k += "_normal"
                    }
                }
                h(this).addClass(k);
                var j = h(this).text() || "";
                if (j) {}
            });
            g.live("click", function() {
                var j = h(this).attr("td_vod_url");
                d(h(this))
            })
        })
    };
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "http://vod.xunlei.com/library/jquery-1.7.2.min.js";
    e(a, c);
    document.body.appendChild(a);
})();