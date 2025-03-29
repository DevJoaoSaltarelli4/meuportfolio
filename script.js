document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("studyModal"); // aqui esta buscando o elemento Id por nome de studyModal
    const openBtn = document.querySelector(".btn");
    const closeBtns = document.querySelectorAll(".close");

    // Abre a modal ao clicar no botão
    openBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Fecha a modal ao clicar nos botões de fechar
    closeBtns.forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "none";
        });
    });

    // Fecha a modal ao clicar fora dela
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
