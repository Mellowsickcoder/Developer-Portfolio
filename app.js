document.addEventListener('DOMContentLoaded', () => {

    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px" 
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('card-visible');

            observer.unobserve(entry.target);
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.classList.add('card-hidden');
        appearanceObserver.observe(card);
    });

});


git add app.js