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
      e.addEventListener("click", function(){
        document.querySelector('[data-dropdown="' + e.getAttribute("data-open-dropdown") + '"]').classList.toggle("submenu-open");
      })
  });
// Search Bar
var searchGo = document.querySelector('#searchGo');
searchGo.addEventListener("click", function(){
    var searchIndustry = document.getElementById('searchIndustry').value;
    var searchCategory = document.getElementById('searchCategory').value;
    
    //gtag('event', 'heroSearch', {
    //    'event_label': searchIndustry,
    //    'event_category': searchCategory
    //  });
    window.location.href = 'https://employsure.com.au/guides/' + searchCategory + '/';
});

