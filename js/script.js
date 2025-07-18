// Phone Number Generator - Main JavaScript

// Analytics tracking for button clicks
function trackCountryClick(country) {
    // Add your analytics tracking code here
    console.log(`User clicked on ${country} phone number generator`);
    
    // Example: Google Analytics event tracking
    // gtag('event', 'country_selection', {
    //     'event_category': 'generator',
    //     'event_label': country
    // });
}

// Add click tracking to all generator buttons
document.addEventListener('DOMContentLoaded', function() {
    const generatorButtons = document.querySelectorAll('.generator-btn');
    
    generatorButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const countryName = this.textContent.replace(' Phone Number Generator', '');
            trackCountryClick(countryName);
        });
    });
    
    // Add smooth scrolling for better UX
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation for better perceived performance
    window.addEventListener('beforeunload', function() {
        document.body.style.opacity = '0.7';
    });
});

// Lazy loading for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all country cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(card => {
        observer.observe(card);
    });
});