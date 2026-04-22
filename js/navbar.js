window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Show navbar after 100px scroll
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});