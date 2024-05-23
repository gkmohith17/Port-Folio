function changeBg() {
    var scrollValue = window.scrollY;
    var navbar = document.getElementById('navbar');
    var buttons = document.querySelectorAll('.but');

    if (scrollValue < 650) {
        navbar.classList.remove('bgcolor');
        buttons.forEach(button => button.classList.remove('bgcolor'));
    } else {
        navbar.classList.add('bgcolor');
        buttons.forEach(button => button.classList.add('bgcolor'));
    }
}

function navigateToSectionOne() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


function navigateToSectionTwo() {
    const targetSection2 = document.getElementById("second-page");
    targetSection2.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

function navigateToSectionFive() {
    const targetSection5 = document.getElementById("fifth-page");
    targetSection5.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
}

function navigateToSectionSix() {
    const targetSection6 = document.getElementById("sixth-page");
    targetSection6.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const smallBoxes = document.querySelectorAll('.small-box');
  
    function animateSmallBoxes() {
      smallBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (boxTop < windowHeight * 0.8) {
          box.classList.add('animate');
        } else {
          box.classList.remove('animate');
        }
      });
    }
  
    window.addEventListener('scroll', animateSmallBoxes);
    animateSmallBoxes();
  });


window.addEventListener('scroll', changeBg);



