// DOM Elements
const menuIcon = document.getElementById('menuIcon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const header = document.querySelector('.header');
const skillBars = document.querySelectorAll('.skill-level');
const typingText = document.querySelector('.typing-text');

// Text for typing animation
const roles = [
    "Full Stack Developer",
    "Tech Entrepreneur",
    "Mentor",
    "Tech Leader"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

// Typing Animation
function typeEffect() {
    if (isPaused) return;
    
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentRole.length) {
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
            }, 2000);
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Mobile Menu Toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// Back to Top Button
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate skill bars on scroll
function animateSkillBars() {
    skillBars.forEach(skill => {
        const level = skill.getAttribute('data-level');
        const rect = skill.parentElement.getBoundingClientRect();
        
        if (rect.top < window.innerHeight - 100) {
            skill.style.width = `${level}%`;
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formValues);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Start typing effect
    setTimeout(typeEffect, 1000);
    
    // Initialize skill bars
    animateSkillBars();
    
    // Add scroll event for skill bars
    window.addEventListener('scroll', animateSkillBars);
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate__animated');
        observer.observe(section);
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});