/**
 * script.js
 * Interactive scripts for Ayush Kumar Jha's Portfolio Website.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // Set Current Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 1. Custom Interactive Cursor
  // ==========================================
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  
  // Only enable custom cursor on non-touch devices with screen width > 768px
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouchDevice && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    });

    // Add hover states
    const hoverElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .project-card, .tech-item, .contact-method-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
      });
    });
  } else {
    // Hide cursor elements on mobile/touch
    if (cursor) cursor.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
  }

  // ==========================================
  // 2. Floating Navbar & Scroll-To-Top Button
  // ==========================================
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Shrink Nav
    if (scrollPos > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Show Scroll-to-Top Button
    if (scrollPos > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active Nav Link highlight on scroll
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Scroll to Top action
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 3. Mobile Hamburger Menu Toggle
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ==========================================
  // 4. Hero Section Canvas Particle System
  // ==========================================
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const maxParticles = 60;
    
    // Set Canvas Dimensions
    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle Blueprint Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // small particles
        this.speedX = Math.random() * 0.4 - 0.2; // slow drift
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(16, 185, 129, 0.4)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce back inside canvas limits
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize Particles array
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();

    // Draw lines between particles that are close
    function connectParticles() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            opacityValue = 1 - (distance / 110);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ==========================================
  // 5. Scroll Reveal & Progress Fill Trigger
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If about section card is visible, trigger stat progress bar loading
        if (entry.target.classList.contains('about-card-art')) {
          entry.target.classList.add('active');
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================
  // 6. Stats Counter Animation Trigger
  // ==========================================
  const counterCards = document.querySelector('.achievements-grid');
  const counterNums = document.querySelectorAll('.metric-num');
  let hasCountersRun = false;

  const runCounter = (el) => {
    const target = parseInt(el.getAttribute('data-val'), 10);
    const speed = 120; // higher = slower
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        if (target === 600) {
          el.innerText = Math.floor(count) + '+';
        } else if (target === 3) {
          el.innerText = Math.floor(count) + 'rd';
        } else {
          el.innerText = Math.floor(count);
        }
        setTimeout(updateCount, 10);
      } else {
        if (target === 600) {
          el.innerText = target + '+';
        } else if (target === 3) {
          el.innerText = target + 'rd';
        } else {
          el.innerText = target + '/100';
        }
      }
    };
    updateCount();
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCountersRun) {
        counterNums.forEach(num => runCounter(num));
        hasCountersRun = true;
      }
    });
  }, {
    threshold: 0.5
  });

  if (counterCards) {
    counterObserver.observe(counterCards);
  }

  // ==========================================
  // 7. Interactive Projects Filtering Logic
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-categories').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // ==========================================
  // 8. Contact Form Validation & Submission Mock
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const successOverlay = document.getElementById('form-success');
  const successCloseBtn = document.getElementById('success-close-btn');
  const submitText = document.getElementById('submit-text');
  const formLoader = document.getElementById('form-loader');
  const submitIcon = document.getElementById('submit-icon');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasErrors = false;

    // Grab form elements
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    const inputs = [nameInput, emailInput, subjectInput, messageInput];

    // Reset error styling
    inputs.forEach(input => {
      input.classList.remove('error');
    });

    // Check empty inputs
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        hasErrors = true;
      }
    });

    // Check email syntax specifically
    if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
      hasErrors = true;
    }

    // If validations pass, show loading and trigger success simulation
    if (!hasErrors) {
      // Toggle submit button loader
      submitText.textContent = 'Sending...';
      formLoader.style.display = 'block';
      submitIcon.style.display = 'none';
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      // Prepare payload to save in LocalStorage (mock database storage)
      const submission = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Retrieve existing logs or initialize new array
      const existingSubmissions = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('portfolio_messages', JSON.stringify(existingSubmissions));

      // Simulate a network delay of 1.5s
      setTimeout(() => {
        // Reset submit button state
        submitText.textContent = 'Send Message';
        formLoader.style.display = 'none';
        submitIcon.style.display = 'block';
        submitBtn.disabled = false;

        // Show Success Overlay Card
        successOverlay.classList.add('active');
        
        // Reset form inputs
        contactForm.reset();
      }, 1500);
    }
  });

  // Close Success Overlay and return to empty form
  successCloseBtn.addEventListener('click', () => {
    successOverlay.classList.remove('active');
  });

});
