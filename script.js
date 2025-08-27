// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Aquí iría la lógica para enviar el pedido
        // Por ahora, mostramos un mensaje de confirmación
        alert('¡Pedido enviado! Nos contactaremos contigo pronto para confirmar.');
        form.reset();
    });
}

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});
