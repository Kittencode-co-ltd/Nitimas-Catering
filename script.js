/* ============================================================
   script.js — Nitimas Catering
   Author: Antigravity AI
   Description: Main JavaScript for Nitimas Catering website.
   ============================================================ */

// ---- Update current year in footer copyright ----
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ---- Navbar: Add shadow/compact class on scroll ----
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ---- Mobile Menu: Toggle open/close ----
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Swap hamburger ↔ close icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// ---- Mobile Menu: Close when any nav link is clicked ----
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');

            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});
