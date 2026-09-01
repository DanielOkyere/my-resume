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

PageTransitions();
