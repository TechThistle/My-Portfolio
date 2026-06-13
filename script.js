// Target Render for Lucide System Icons
lucide.createIcons();

// Responsive Navigation Dropdown Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Auto-collapse responsive navbar layout upon viewport selection transitions
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});