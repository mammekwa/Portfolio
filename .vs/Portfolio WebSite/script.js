function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("formResponse").textContent = "Thank you! Your message has been sent.";
            document.getElementById("contactForm").reset();
        } else {
            document.getElementById("formResponse").textContent = "Oops! There was a problem submitting your form.";
        }
    }).catch(error => {
        document.getElementById("formResponse").textContent = "Oops! There was a problem submitting your form.";
    });
});

