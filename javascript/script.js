// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

// SEARCH
let search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function() {
        let filter = search.value.toLowerCase();
        let items = document.querySelectorAll("#list p");

        items.forEach(item => {
            item.style.display =
                item.textContent.toLowerCase().includes(filter)
                ? "block" : "none";
        });
    });
}

// FORM
let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (!name || !email) {
            alert("Fill all fields");
            e.preventDefault();
        }
    });
}
