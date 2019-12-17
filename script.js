$(document).ready(function () {
    // window.scrollTo(0, 0);

    $(window).scroll(function () { 
        if (whereAreWe("#contact")) { 
            getDot(5, "navContact");
            $('.navText span').replaceWith('<span>Contact</span>');
        } else if (whereAreWe("#resume")) {
            getDot(4, "navResume");
            $('.navText span').replaceWith('<span>Experience</span>');
        } else if (whereAreWe("#project")) {
            getDot(3, "navProject");
            $('.navText span').replaceWith('<span>Work</span>');
        } else if (whereAreWe("#mark")) {
            getDot(2, "navMark");
            $('.navText span').replaceWith('<span>Skillset</span>');
        } else {
            getDot(1 , "navHome");
            $('.navText span').replaceWith('<span>Home</span>');
            // if ($('nav ul li:nth-child(1)').hasClass('navSelected')) {
            // } 
            // else {

            //     $('.navSelected').replaceWith(
            //         function() {
            //             return $('<li><i class="fas fa-circle"></i></li>').hide().fadeIn( 'slow' );
            //         }
            //     )

            //     $('nav ul li:nth-child(1)').replaceWith(
            //         function() {
            //             return $('<li class="navSelected"><i class="fas fa-dot-circle"></i></li>').hide().fadeIn( 'slow' );
            //         } 
            //     )
            // }
        }
        // $(".navHome").click(function () {
        //     $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#home").offset().top
        //      }, 300);
        // });
        // $(".navMark").click(function () {
        //     $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#mark").offset().top
        //      }, 300);
        // });
        // $(".navProject").click(function () {
        //     $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#project").offset().top
        //      }, 300);
        // });
        // $(".navResume").click(function () {
        //     $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#resume").offset().top
        //      }, 300);
        // });
        // $(".navContact").click(function () {
        //     $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#contact").offset().top
        //      }, 300);
        // });
    });

    //Function that returns true if the window has scrolled beyond the given element
    function whereAreWe(elem) {

        let $elem = $(elem);
        const $window = $(window);

        const topView = $window.scrollTop();
        const bottomView = topView + $window.height();

        const elemTop = $elem.offset().top;

        // console.log(elemTop, bottomView);

        return elemTop <= bottomView;
    }

    //show where windows postion is at the top now
    // console.log($(window).scrollTop())
    //show a certain section's postion
    // console.log ($('#contact').offset()) 

});

// $('.navProject').hover(console.log('hover'), console.log('not hover')
    // $('nav ul li:nth-child(' + x + ')').replaceWith(
    //     function () {
    //         return $('<li class="navSelected"><i class="fas fa-dot-circle"></i></li>').hide().fadeIn('slow');
    //     }
    // )

// )

const getDot = function (x , className) {
    if ($('nav ul a:nth-child(' + x + ') li').hasClass('navSelected')) {
    }
    else {

        $('.navSelected').removeClass('navSelected')

        // $('.navSelected').replaceWith(
        //     function () {
        //         return $('<li><i class="fas fa-circle"></i></li>').hide().fadeIn('slow');
        //     }
        // )

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

//submit form

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
        // $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' && phone =='') {
            Swal.fire("Please Fill Your Name and Contact")
        } else {
            // Returns successful data submission message when the entered information is stored in database.

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


// $(document).ready(function () {

//     const dbRef = firebase.database().ref();
    
//     let test = null;

//     dbRef.on('value',(response) => {
//         test = response.val();
//         console.log(test)
//     })
    


// });



const firebaseConfig = {
    apiKey: "AIzaSyD9boplY7t43pbYJS3PLtbfdo_oS26jcow",
    authDomain: "portfolio-e1e45.firebaseapp.com",
    databaseURL: "https://portfolio-e1e45.firebaseio.com",
    projectId: "portfolio-e1e45",
    storageBucket: "portfolio-e1e45.appspot.com",
    messagingSenderId: "975463387248",
    appId: "1:975463387248:web:e0eb86b2ec3b16dba024b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

