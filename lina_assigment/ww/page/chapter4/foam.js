window.onload = function() {
    let slideshows = document.getElementsByClassName("slideshow-container");

    // Initialize every slideshow on the page
    for (let i = 0; i < slideshows.length; i++) {
        showSlides(1, i);
    }

    // Move these functions OUTSIDE the onload so the HTML buttons can see them
    window.plusSlides = function(n, s) {
        let current = getActiveIndex(s);
        showSlides(current + n, s);
    }

    function getActiveIndex(s) {
        let slides = slideshows[s].getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].style.display === "block") return i + 1;
        }
        return 1;
    }

    function showSlides(n, s) {
        let slides = slideshows[s].getElementsByClassName("mySlides");
        if (n > slides.length) n = 1;
        if (n < 1) n = slides.length;
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "block";
    }
};