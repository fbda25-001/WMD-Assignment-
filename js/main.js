// ============================================
// Excel Tutors - Main JavaScript File
// Description: Interactive features for the website
// ============================================

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.backgroundColor = '#2C3E50';
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .subject-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.feature-card, .subject-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
    
    // Form Validation Helper (will be used in contact/feedback pages)
    window.validateForm = function(formId) {
        const form = document.getElementById(formId);
        if (!form) return true;
        
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#E74C3C';
                
                // Add error message if not exists
                let errorMsg = input.nextElementSibling;
                if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                    errorMsg = document.createElement('small');
                    errorMsg.classList.add('error-message');
                    errorMsg.style.color = '#E74C3C';
                    errorMsg.style.fontSize = '0.8rem';
                    errorMsg.style.display = 'block';
                    errorMsg.textContent = 'This field is required';
                    input.parentNode.insertBefore(errorMsg, input.nextSibling);
                }
            } else {
                input.style.borderColor = '#27AE60';
                const errorMsg = input.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });
        
        return isValid;
    };
    
    // Email validation helper
    window.validateEmail = function(email) {
        const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return re.test(email);
    };
    
    // Phone number validation helper (Botswana format)
    window.validatePhone = function(phone) {
        const re = /^(\+267)?[7-9]\d{7}$/;
        return re.test(phone);
    };
    
    // Display success message
    window.showSuccessMessage = function(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success';
        successDiv.style.position = 'fixed';
        successDiv.style.top = '100px';
        successDiv.style.right = '20px';
        successDiv.style.zIndex = '9999';
        successDiv.style.padding = '15px 20px';
        successDiv.style.borderRadius = '8px';
        successDiv.style.backgroundColor = '#27AE60';
        successDiv.style.color = 'white';
        successDiv.style.fontWeight = '500';
        successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.opacity = '0';
            setTimeout(() => successDiv.remove(), 300);
        }, 3000);
    };
    
    // Display error message
    window.showErrorMessage = function(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.style.position = 'fixed';
        errorDiv.style.top = '100px';
        errorDiv.style.right = '20px';
        errorDiv.style.zIndex = '9999';
        errorDiv.style.padding = '15px 20px';
        errorDiv.style.borderRadius = '8px';
        errorDiv.style.backgroundColor = '#E74C3C';
        errorDiv.style.color = 'white';
        errorDiv.style.fontWeight = '500';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.opacity = '0';
            setTimeout(() => errorDiv.remove(), 300);
        }, 3000);
    };
    
    // Preloader (optional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.remove(), 500);
            }, 500);
        }
    });
    
    // Log website load for analytics (optional)
    console.log('Excel Tutors website loaded successfully');
    console.log('Page URL:', window.location.href);
    console.log('Viewport size:', window.innerWidth, 'x', window.innerHeight);
});

// Add some interactive hover effects for subject cards (handled by CSS mostly)
// Additional functionality can be added as needed


 // Mobile Navigation Toggle
    const toggler = document.getElementById('navbarToggler');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (toggler) {
        toggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.backgroundColor = '#2C3E50';
        }
    });
    
    // Animated Statistics Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const current = parseInt(stat.innerText);
            const increment = Math.ceil(target / 50);
            
            if (current < target) {
                let newValue = current + increment;
                if (newValue > target) newValue = target;
                stat.innerText = newValue;
                setTimeout(animateNumbers, 30);
            }
        });
    };
    
    const statsSection = document.querySelector('.stats-section');
    
    const checkStatsView = () => {
        if (statsSection) {
            const sectionPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (sectionPosition < screenPosition - 100 && !animated) {
                animated = true;
                animateNumbers();
            }
        }
    };
    
    window.addEventListener('scroll', checkStatsView);
    checkStatsView();
    
    // Add animation on scroll for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.mv-card, .value-item, .team-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.mv-card, .value-item, .team-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Team member click interaction
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('h4').innerText;
            const role = this.querySelector('.team-role').innerText;
            const bio = this.querySelector('.team-bio').innerText;
            alert(`${name}\n${role}\n\n${bio}`);
        });
    });
    
    console.log('About Us page loaded successfully - Pure CSS, No Bootstrap');


    