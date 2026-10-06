const sobreJaden = document.querySelector(".sobre-jaden");

const observador = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            sobreJaden.classList.add("ativo");
        }

    });

}, {
    threshold: 0.5
});

observador.observe(sobreJaden);