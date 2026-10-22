/* =====================================
   1. PROJECT GALLERY FILTER
===================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Find the selected category
        const selectedCategory = button.dataset.filter;

        // Update the active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Show matching projects
        projectCards.forEach(function (card) {

            const projectCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =====================================
   2. TESTIMONIAL CAROUSEL
===================================== */

const testimonials = [
    {
        text: "The design feels thoughtful, clear and easy to use.",
        name: "Alex Morgan",
        role: "Sample Client · Northstar Studio"
    },
    {
        text: "A clean visual identity that communicates our ideas beautifully.",
        name: "Jamie Taylor",
        role: "Sample Client · Rooted Organics"
    },
    {
        text: "The website concept is simple, engaging and easy to navigate.",
        name: "Sam Rivera",
        role: "Sample Client · Somewhere Travel"
    }
];

let currentIndex = 0;

const testimonialText = document.querySelector("#testimonial-text");
const testimonialName = document.querySelector("#testimonial-name");
const testimonialRole = document.querySelector("#testimonial-role");
const testimonialCount = document.querySelector("#testimonial-count");

const previousButton = document.querySelector("#prev-btn");
const nextButton = document.querySelector("#next-btn");


function showTestimonial(index) {

    // Get the selected testimonial
    const testimonial = testimonials[index];

    // Update the webpage
    testimonialText.textContent = testimonial.text;
    testimonialName.textContent = testimonial.name;
    testimonialRole.textContent = testimonial.role;

    // Display the current position
    testimonialCount.textContent =
        String(index + 1).padStart(2, "0") +
        " / " +
        String(testimonials.length).padStart(2, "0");
}


// Show the previous testimonial
previousButton.addEventListener("click", function () {

    currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;

    showTestimonial(currentIndex);

});


// Show the next testimonial
nextButton.addEventListener("click", function () {

    currentIndex =
        (currentIndex + 1) % testimonials.length;

    showTestimonial(currentIndex);

});


// Display the initial testimonial
showTestimonial(currentIndex);