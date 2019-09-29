const navSlide = () => {
     const burger = document.querySelector('.nav__burger');
     const nav = document.querySelector('.nav__links');
     const navLinks = document.querySelectorAll('.nav__links li');
   
     burger.addEventListener('click', () => {
       // Toggle Navigaton
          nav.classList.toggle('nav-active');
   
       // Animate links
          navLinks.forEach((link, index) => {
               if (link.style.animation) {
                    link.style.animation = '';
               } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`; // This code copied from  Dav ed video comments. "    THIS IS NOT THE QUATATION MARK. THIS IS THE BACKTICK.
                    //     Jesus Kush
                    //     1 year ago
                    //     https://codepen.io/Alexander_Spremo/pen/EeJjLe"
               }
          });

          // Burger Animation
          burger.classList.toggle('toggle');
     });
}
   
navSlide();

// const navSlide = () => {
//      const burger = document.querySelector('.nav__burger');
//      const nav = document.querySelector('.nav__links');
//      const navLinks = document.querySelectorAll('.nav__links li');
     

//      burger.addEventListener('click', () => {
//           // Toggle Nav
//           nav.classList.toggle('nav-active');

//           navLinks.forEach((link, index) => {
//                if(link.style.animation) {
//                     link.style.animation = '';
//                } else {
               
//                link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 1.5}s` ;
//                }
//            });
//      });     
// }

// navSlide();

