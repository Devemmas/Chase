// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image carousel for hero section
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("hero-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Form submission
const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Send form data via email
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "mailto:eligibilityresult@gmail.com");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formDataObject));

    // Reset form fields
    this.reset();
});
// Form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Name and email are required fields.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Add form validation to form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Send form data via email
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "mailto:eligibilityresult@gmail.com");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formDataObject));

    // Reset form fields
    this.reset();
  // Smooth scrolling effect for event containers
document.querySelectorAll('.event-container').forEach(container => {
    container.addEventListener('click', function() {
        this.scrollIntoView({
            behavior: 'smooth'
        });
});
