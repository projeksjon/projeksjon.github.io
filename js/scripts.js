(function ($) {
    "use strict";

    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function (event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 55)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#collapsingNavbar li a').click(function () {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });


    var mymap = L.map('mapid', {scrollWheelZoom: false, zoomControl: false }).setView([63.41496229070672, 10.406123399734497], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/rubenschmidt/ciz43wpii006y2sphxc4ncvpo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnViZW5zY2htaWR0IiwiYSI6IkdCcEs1bmsifQ.P9JtpvSJRJ4eKgCBu5AvfA', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

})(jQuery);