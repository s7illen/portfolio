$(document).ready(function () {
    $('.headerContainer').addClass('fadeIn');

    $("form").trigger("reset");
    
    $(window).scroll(function () { 
        if (whereAreWe("#contact")) { 
            getDot(5, "navContact");
            $('.navText span').replaceWith('<span>Contact</span>');
            $('form').addClass('fadeIn');
        } else if (whereAreWe("#resume")) {
            getDot(4, "navResume");
            $('.navText span').replaceWith('<span>Experience</span>');
            $('.resumeContainer').addClass('resumeAnimation');
        } else if (whereAreWe("#project")) {
            getDot(3, "navProject");
            $('.navText span').replaceWith('<span>Work</span>');
            $('.work').addClass('fadeIn');
        } else if (whereAreWe("#mark")) {
            getDot(2, "navMark");
            $('.navText span').replaceWith('<span>Skillset</span>');
            $('.mark').addClass('fadeIn');
        } else {
            getDot(1 , "navHome");
            $('.navText span').replaceWith('<span>Home</span>');
        }
    });

    function whereAreWe(elem) {

        let $elem = $(elem);
        const $window = $(window);

        const topView = $window.scrollTop();
        const bottomView = topView + $window.height();

        const elemTop = $elem.offset().top;

        return elemTop <= bottomView;
    }
});

const getDot = function (x , className) {
    if ($('nav ul a:nth-child(' + x + ') li').hasClass('navSelected')) {
    }
    else {
        $('.navSelected').removeClass('navSelected')

        $('nav ul a:nth-child(' + x + ') li').replaceWith(
            function () {
                return $('<li class="navSelected ' + className + '"><i class="fas fa-dot-circle"></i></li>').hide().fadeIn('slow');
            }
        )
    }
}


$(".mouse, .skillTitle").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mark").offset().top
    }, 300);
});

$(".workTitle").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#project").offset().top
    }, 300);
});

$(".resumeTitle").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#resume").offset().top
    }, 300);
});

$(".contactTitle").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 300);
});

$(document).ready(function () {

    const dbRef = firebase.database().ref();

    $("form").submit(function (e) {
        e.preventDefault();
    });

    $(".send").click(function () {
        const name = $(".contactName").val();
        const email = $(".contactEmail").val();
        const phone = $(".contactPhone").val();
        const message = $(".message").val();
        if (name == '' || email == '' && phone =='') {
            Swal.fire("Please Fill Your Name and Contact")
        } else {
            $("form").trigger("reset");

            const contact = {
                contactName: name,
                contactEmail: email,
                contactPhone: phone,
                contactMessage: message,
            };

            dbRef.push(contact);

            Swal.fire('Thanks! I will follow up soon!')
        }
    });
});

const firebaseConfig = {
    apiKey: "AIzaSyD9boplY7t43pbYJS3PLtbfdo_oS26jcow",
    authDomain: "portfolio-e1e45.firebaseapp.com",
    databaseURL: "https://portfolio-e1e45.firebaseio.com",
    projectId: "portfolio-e1e45",
    storageBucket: "portfolio-e1e45.appspot.com",
    messagingSenderId: "975463387248",
    appId: "1:975463387248:web:e0eb86b2ec3b16dba024b5"
};
firebase.initializeApp(firebaseConfig);

