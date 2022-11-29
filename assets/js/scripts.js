// Mobile Menu
var checkbox = document.querySelector("#side-menu");
var container = document.querySelector(".mobile-nav");
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        container.classList.add("open-menu");
    } else {
        container.classList.remove("open-menu");
    }
});
// Mobile Dropdowns
document.querySelectorAll("[data-open-dropdown]").forEach(
    function(e){
      e.addEventListener("click", function()
        document.querySelector('[data-dropdown="' + e.getAttribute("data-open-dropdown") + '"]').classList.toggle("submenu-open");
      })
  });
// Search Bar
var searchGo = document.querySelector('#searchGo');
searchGo.addEventListener("click", function(){
    var searchIndustry = document.getElementById('searchIndustry').value;
    var searchCategory = document.getElementById('searchCategory').value;
    // Google Tracking Event
    gtag('event', 'heroSearch', {
        'event_action': 'Click',
        'event_label': searchIndustry,
        'event_category': searchCategory
    });
    window.location.href = 'https://employsure.com.au/guides/' + searchCategory + '/';
});

// Lazy Loading
  if ('loading' in HTMLImageElement.prototype) {
      var images = document.querySelectorAll("img.lazyload");
      images.forEach(img => {
          img.src = img.dataset.src;
      });
  } else {
      // Dynamically import the LazySizes library
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
    document.body.appendChild(script);
  };

// Start of Async Drift Code
!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('b75uimmz3n9i');

// Gravity Form Scripts
function resizeIframe(height){
  document.getElementById('gForm').height = parseInt(height);
}
