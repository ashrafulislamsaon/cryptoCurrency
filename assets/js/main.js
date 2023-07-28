// responsive navbar
const navMenu = document.getElementsByClassName("navbar-menu")[0];
const navBtn = document.getElementById("mobile-btn");

navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle("active")
})

// tabs
$(function(){
    $('#accordion-left').accordiom(
        {
            showFirstItem: false,
        }
    );
});
$(function(){
    $('#accordion-right').accordiom(
        {
            showFirstItem: false,
        }
    );
});

// animation
$(document).ready(function(){

    $('#navbar').fuwatto({
        duration: 2000,
        slide:'top-bottom',
        distance: 50,
      });
      $('.banner-left').fuwatto({
        duration: 2000,
        slide:'left-right',
        distance: 50,
      });
      $('.banner-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 50,
      });
      $('.footer-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 50,
      });

      $('.footer-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 50,
      });
    //   testimonial
      $('.sc-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
      $('.sc-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 600,
      });
    //   latest news
    $('.ln-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
      $('.ln-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
  });
