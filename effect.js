const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('init-visible');
            observer.unobserve(entry.target);
        }
    });             
}, {
    threshold: 0.1
});

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element);
});