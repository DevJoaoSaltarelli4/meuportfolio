document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("studyModal"); // aqui esta buscando o elemento Id por nome de studyModal
    const openBtn = document.querySelector(".btn");  //Está sendo selecionado o primeiro elemento com a classe .btn e armazenado na variável openBtn.
    const closeBtns = document.querySelectorAll(".close");// Está sendo selecionada uma NodeList com todos os elementos que possuem a classe .close e armazenada na variável closeBtns.

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

// js calculadora

document.addEventListener("DOMContentLoaded", function () {
    const botaoCalculadora = document.getElementById("abrirCalculadora");

    botaoCalculadora.addEventListener("click", function () {
        window.open("calculadora.html", "_blank"); // abre em nova aba
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const resultado = document.querySelector(".resultado");
    const botoes = document.querySelectorAll(".botao-generico");
    let expressao = "";

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const valor = botao.textContent;

            if (valor === "C") {
                expressao = "";
                resultado.textContent = "";
            } else if (valor === "<") {
                expressao = expressao.slice(0, -1);
                resultado.textContent = expressao;
            } else if (valor === "=") {
                try {
                    expressao = expressao.replace(/X/g, "*");
                    resultado.textContent = eval(expressao);
                    expressao = resultado.textContent;
                } catch (error) {
                    resultado.textContent = "Erro";
                    expressao = "";
                }
            } else {
                expressao += valor;
                resultado.textContent = expressao;
            }
        });
    });
});

const powerButton = document.getElementById('botaoPower');
const calculadora = document.querySelector('.calculadora');

let ligada = true;

powerButton.addEventListener('click', () => {
    ligada = !ligada;

    if (ligada) {
        calculadora.classList.remove('desligada');
        powerButton.textContent = 'OFF';
        powerButton.classList.remove('off');
    } else {
        calculadora.classList.add('desligada');
        powerButton.textContent = 'ON';
        powerButton.classList.add('off');
    }
});

