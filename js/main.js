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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// uf.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://mindicador.cl/api/uf')
        .then(response => response.json())
        .then(data => {
            const valorUF = data.serie[0].valor;
            localStorage.setItem('valorUF', valorUF);
        })
        .catch(error => console.error('Error al obtener el valor de la UF:', error));
});
// precio.js
document.addEventListener('DOMContentLoaded', function() {
    const valorUF = localStorage.getItem('valorUF');

    if (valorUF) {
        document.querySelectorAll('.product-item').forEach(item => {
            const ufMultiplier = parseFloat(item.getAttribute('data-uf-multiplier'));
            const precioEnCLP = ufMultiplier * valorUF;
            const precioUFElement = item.querySelector('.precio-uf');
            const precioProductoElement = item.querySelector('.precio-producto');

            precioUFElement.innerText = `${ufMultiplier} UF`;
            precioProductoElement.innerText = `Valor en CLP ${precioEnCLP.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })}`;
        });
    }
});




