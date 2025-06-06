document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark', modeToggle.checked);
    });

    // Language switch
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const lang = btn.dataset.lang;
            document.querySelectorAll('[data-en]').forEach(el => {
                el.textContent = el.dataset[lang];
            });
        });
    });

    // Intersection observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // FAQ toggle
    document.querySelectorAll('.faq-item .question').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('open');
        });
    });

    // Contact form validation
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !emailPattern.test(email)) {
            alert('Please enter your name and a valid email.');
            return;
        }
        alert('Thank you! We will reach out soon.');
        e.target.reset();
    });
});
