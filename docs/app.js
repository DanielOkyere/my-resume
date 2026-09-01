const sections = document.querySelectorAll(".section");
const controlsWrapper = document.querySelector(".controlls");
const controls = document.querySelectorAll(".control");

function goToSection(id) {
    controls.forEach((btn) => {
        btn.classList.toggle("active-btn", btn.dataset.id === id);
    });

    sections.forEach((section) => {
        section.classList.toggle("active", section.id === id);
    });
}

function PageTransitions() {
    controlsWrapper.addEventListener("click", function (e) {
        const target = e.target.closest("[data-id]");
        if (target) {
            goToSection(target.dataset.id);
        }
    });

    document.querySelectorAll("[data-id]").forEach((el) => {
        if (el.closest(".controlls")) return;
        el.addEventListener("click", () => goToSection(el.dataset.id));
    });

    //Toggle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    })
}

const CONTACT_EMAIL = "daniel.kwame.okyere101@gmail.com";

function ContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const subject = form.elements["subject"].value.trim();
        const message = form.elements["message"].value.trim();

        const body = `${message}\n\nFrom: ${name} (${email})`;
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    });
}

PageTransitions();
ContactForm();
