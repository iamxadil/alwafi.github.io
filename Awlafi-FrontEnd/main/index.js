const homeButton = document.querySelector('.home-button');
const sideMenu = document.querySelector('.side-menu');
const twoBars = document.querySelector('.two-bars-menu');
const cancelButton = document.querySelector('.cancel-btn');
const texts = document.querySelectorAll('h1, a, .bi-person, p, span');
const allButtons = document.querySelectorAll('button');
const allInputs = document.querySelectorAll('input');
const pageBody = document.querySelector('body');
const SearchButton = document.querySelector('.search-button');
const theTwoBars = document.querySelectorAll('.first-bar, .second-bar');
const wafiLogo = document.querySelector('.wafi-logo');
const darkModeButton = document.querySelector('.dark-mode');



//Home Button Referesh 


  //Preloader Animation
  function runPreloaderAnimation() {
    window.addEventListener("load", function () {
      // Hide preloader after 2s
      setTimeout(() => {
        document.querySelectorAll('.logo-stroke').forEach(path => {
          path.classList.add('filled'); // trigger fill color
        });

        const preloader = document.getElementById("preloader");
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";

        setTimeout(() => {
          preloader.style.display = "none";
        }, 500); // after fade out
      }, 2000); // matches stroke animation
    });
  }

  runPreloaderAnimation();

  
//Side menu toggle with animation
twoBars.addEventListener('click', () => {
  if (sideMenu.style.display === 'none' || !sideMenu.style.display) {
    sideMenu.style.display = 'flex';
    sideMenu.style.opacity = '0';
    sideMenu.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      sideMenu.style.opacity = '1';
    }, 10); // Slight delay to trigger transition
  }
});

cancelButton.addEventListener('click', () => {
  sideMenu.style.transition = 'opacity 0.5s ease';
  sideMenu.style.opacity = '0';
  setTimeout(() => {
    sideMenu.style.display = 'none';
  }, 500); // Matches the fade-out duration
});

document.querySelector('.products-toggle').addEventListener('click', () => {
  document.querySelector('.products-menu').classList.toggle('active');
});


//Dark Mode Toggles
darkModeButton.addEventListener('click', () => {
  pageBody.classList.toggle('dark-mode-style');

  texts.forEach(text => text.classList.toggle('dark-text'));

  allButtons.forEach(button => button.classList.toggle('dark-button'));

  allInputs.forEach(input => input.classList.toggle('dark-button'));

  theTwoBars.forEach(bar => bar.classList.toggle('dark-bars'));

  if (pageBody.classList.contains('dark-mode-style')) {
    homeButton.style.color = 'white';
  } else {
    homeButton.style.color = 'black';
  }

  SearchButton.classList.toggle('dark-search-button');

  if(pageBody.classList.contains('dark-mode-style')) {
    wafiLogo.src = '../Assests/Icons/wafi-logo-outline-white.svg';
  }
  else {
    wafiLogo.src = '../Assests/Icons/wafi-logo-outline.svg';
  }

  
});




// Export variables for use in other ES6 modules
export { wafiLogo, pageBody, darkModeButton, runPreloaderAnimation, SearchButton };


