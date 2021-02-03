//typewriter effect for my work title

// let i = 0;
// let txt = 'frontend developer / web designer';
// let speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typewriter").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();


// drop down menu for homepage

$(document).ready(() => {

  $('.dropdown-menu').hide();

  $('.mobile-menu').on('click', () => {
    $('.dropdown-menu').slideToggle(300);
  })


})



