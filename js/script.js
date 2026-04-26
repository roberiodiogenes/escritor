document.addEventListener("DOMContentLoaded", function() {
    
    // Fechar o menu mobile ao clicar em links (exceto no dropdown)
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const menuToggle = document.getElementById('navbarNav');
    
    // Verifica se o menu está visível (aberto) antes de tentar fechar
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            const isOpened = menuToggle.classList.contains('show');
            if(window.innerWidth < 992 && isOpened) { 
                // Usa o seletor de dados do Bootstrap para fechar com segurança
                const bCollapse = bootstrap.Collapse.getInstance(menuToggle);
                if (bCollapse) { bCollapse.hide(); }
            }
        });
    });

    // Remova aquele listener manual do dropdownToggle, 
    // o Bootstrap já faz isso sozinho via data-bs-toggle="dropdown"
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