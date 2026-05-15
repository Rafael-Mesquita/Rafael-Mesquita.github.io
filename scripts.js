// ==========================================
// ANIMAÇÃO AO ROLAR
// ==========================================

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.15
});

cards.forEach((card) => {

    card.classList.add('hidden');

    observer.observe(card);

});

// ==========================================
// EFEITO DIGITAÇÃO
// ==========================================

const subtitle = document.querySelector('.subtitle');

const text =
    "Tecnologia da Informação • Sistemas • Suporte Técnico";

let index = 0;

subtitle.innerHTML = "";

function typeEffect() {

    if (index < text.length) {

        subtitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 40);
    }

}

window.addEventListener('load', typeEffect);

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const backToTop = document.createElement('button');

backToTop.innerHTML = "↑";

backToTop.setAttribute('id', 'backToTop');

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {

        backToTop.classList.add('show-top');

    } else {

        backToTop.classList.remove('show-top');

    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'
    });

});

// ==========================================
// FEEDBACK FORMULÁRIO
// ==========================================

const form = document.querySelector('form');

form.addEventListener('submit', () => {

    const button = form.querySelector('button');

    button.innerHTML = "Enviando...";

    button.disabled = true;

});

// ==========================================
// ANO AUTOMÁTICO
// ==========================================

const footerText = document.getElementById('footer-text');

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} Rafael Teixeira Mesquita • Todos os direitos reservados`;