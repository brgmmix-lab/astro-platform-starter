// Dynamic Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.98)';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.height = '80px';
    }
});

// Mobile Menu Toggle (Simplified)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        // Here you could add a mobile menu toggle logic
        alert('القائمة قيد التطوير - استخدم الحاسوب لأفضل تجربة');
    });
}

// Simple Scroll Animation for items
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Visual feedback
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'جاري الإرسال...';
        btn.style.background = '#444';
        
        setTimeout(() => {
            alert('شكراً لتواصلك! تم استلام رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت.');
            btn.innerText = originalText;
            btn.style.background = '#8a2be2';
            contactForm.reset();
        }, 1500);
    });
}

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});