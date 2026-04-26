// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // Fechar o menu mobile automaticamente ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if(window.innerWidth < 992) { bsCollapse.hide(); }
        });
    });

    // Pequeno ajuste para garantir que o link "Livros" no mobile abra com clique
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                // No mobile, o comportamento padrão do Bootstrap é mantido
            }
        });
    }
});


// Efeito de revelação ao rolar a página
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});