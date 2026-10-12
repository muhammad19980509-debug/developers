document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       8 & 9. BURGER MENU FUNCTIONALITY
    ========================================== */
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Scrollni to'xtatish
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Scrollni qayta yoqish
    }

    burgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Menyudagi istalgan link bosilganda menyu yopilishi
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* ==========================================
       10. TESTIMONIAL SLIDER (AUTO & MANUAL)
    ========================================== */
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto Slayd o'tishi (Sekin aylanib turishi)
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    startAutoSlide();

    /* ==========================================
       11. TEXT & ELEMENT ANIMATION ON SCROLL
    ========================================== */
    const animatedElements = document.querySelectorAll('.animate-text');

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    /* ==========================================
       CARD HEART INTERACTION (LIKE FUNCTION)
    ========================================== */
    const heartBtns = document.querySelectorAll('.icon-btn');
    heartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon && icon.classList.contains('fa-heart')) {
                icon.classList.toggle('fa-regular');
                icon.classList.toggle('fa-solid');
                this.classList.toggle('active-icon');
            }
        });
    });
});