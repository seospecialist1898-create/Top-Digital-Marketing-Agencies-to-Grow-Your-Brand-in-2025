// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for anchor links
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

    // Fade in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe agency cards and trend cards
    document.querySelectorAll('.agency-card, .trend-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Scroll to top button (simple implementation)
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            let btn = document.createElement('button');
            btn.innerHTML = '↑';
            btn.style.position = 'fixed';
            btn.style.bottom = '20px';
            btn.style.right = '20px';
            btn.style.background = '#3498DB';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.borderRadius = '50%';
            btn.style.width = '50px';
            btn.style.height = '50px';
            btn.style.cursor = 'pointer';
            btn.style.zIndex = '1000';
            btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            if (!document.querySelector('.scroll-top')) {
                btn.classList.add('scroll-top');
                document.body.appendChild(btn);
            }
        } else {
            const existingBtn = document.querySelector('.scroll-top');
            if (existingBtn) existingBtn.remove();
        }
    });
});