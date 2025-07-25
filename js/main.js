(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    // Dark/Light Mode Toggle
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const navbar = document.getElementById('main-navbar');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('navTheme') || 'light';
    if (currentTheme === 'dark') {
        navbar.classList.add('dark-mode-nav');
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    modeToggle.addEventListener('click', function () {
        navbar.classList.toggle('dark-mode-nav');

        if (navbar.classList.contains('dark-mode-nav')) {
            localStorage.setItem('navTheme', 'dark');
            modeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('navTheme', 'light');
            modeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Accessibility Toolbar
    const toolbar = document.getElementById('accessibility-toolbar');
    const html = document.documentElement;

    toolbar.addEventListener('click', function (e) {
        const action = e.target.getAttribute('data-action');
        if (!action) return;

        switch (action) {
            case 'text-increase':
                const currentSize = parseFloat(getComputedStyle(html).fontSize);
                html.style.fontSize = (currentSize + 1) + 'px';
                break;
            case 'text-decrease':
                const currentSizeDec = parseFloat(getComputedStyle(html).fontSize);
                html.style.fontSize = (currentSizeDec - 1) + 'px';
                break;
            case 'high-contrast':
                document.body.classList.toggle('high-contrast');
                break;
            case 'negative-contrast':
                document.body.classList.toggle('negative-contrast');
                break;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    var tabElms = document.querySelectorAll('a[data-bs-toggle="pill"]');
    tabElms.forEach(function(tabEl) {
        tabEl.addEventListener('shown.bs.tab', function (event) {
            // Refresh animations when tab changes
            new WOW().init();
        });
    });

    // Initialize WOW.js for animations
    new WOW({
        offset: 100,
        mobile: true
    }).init();

    // Product image hover effect
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.fa-shopping-bag').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('h5').textContent;
            const productPrice = this.closest('.product-item').querySelector('.text-primary').textContent;
            
            // Here you would typically add to cart logic
            console.log(`Added to cart: ${productName} - ${productPrice}`);
            
            // Show a simple notification
            alert(`Added to cart: ${productName}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the search query
        const query = searchInput.value.trim();
        
        // Scroll to products section
        const productsSection = document.getElementById('products-section');
        if(productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
            
            // Here you would typically filter products based on the search query
            // For example:
            if(query) {
                filterProducts(query);
            }
        }
        
        return false;
    });
    
    function filterProducts(query) {
        // Implement your product filtering logic here
        console.log('Searching for:', query);
        // This would typically loop through your products and show/hide based on the query
    }
});
