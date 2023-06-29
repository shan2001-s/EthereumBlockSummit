/**
* Template Name: TheEvent
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      
        backtotop.classList.add('active')
      
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on('show.bs.modal', '#buy-ticket-modal', function(event) {
    select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

 // Get the target date (November 1st)
 const targetDate = new Date('2023-11-01');

 // Function to calculate the time remaining
 function calculateTimeRemaining() {
   const currentTime = new Date();
   const timeDifference = targetDate.getTime() - currentTime.getTime();
   
   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
   return {
     days,
     hours,
     minutes,
     seconds
   };
 }

 // Update the countdown elements with the time remaining
 function updateCountdown() {
   const countdownElement = document.getElementById('countdown');
   const timeRemaining = calculateTimeRemaining();
   
   document.getElementById('days').textContent = formatTime(timeRemaining.days);
   document.getElementById('hours').textContent = formatTime(timeRemaining.hours);
   document.getElementById('minutes').textContent = formatTime(timeRemaining.minutes);
   document.getElementById('seconds').textContent = formatTime(timeRemaining.seconds);
 }

 // Add leading zeros to the time units if they are less than 10
 function formatTime(time) {
   return time < 10 ? '0' + time : time;
 }

 // Call the updateCountdown function initially
 updateCountdown();

 // Update the countdown every second
 setInterval(updateCountdown, 1000);


//  // *********** Start buy ticket 


 
//     // Calculate the time difference between the current date and the target end dates
// function getTimeDifference(endDate) {
//   const totalSeconds = (new Date(endDate) - new Date()) / 1000;
//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const minutes = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;
//   return { days, hours, minutes, seconds };
// }

// // Update the countdown timer display for the specified ticket
// function updateCountdown(ticketType, endDate) {
//   const timeDiff = getTimeDifference(endDate);

//   if (timeDiff.days < 0) {
//     // Ticket end date has passed
//     disableTicket(ticketType);
//     hideCountdown(ticketType);
//     activateNextTicket(ticketType);
//   } else {
//     document.getElementById(`days-${ticketType}`).textContent = timeDiff.days+' d';
//     document.getElementById(`hours-${ticketType}`).textContent = timeDiff.hours+' hr';
//     document.getElementById(`minutes-${ticketType}`).textContent = timeDiff.minutes+' min';
//     document.getElementById(`seconds-${ticketType}`).textContent = timeDiff.seconds+' sec';
//   }
// }

// // Disable a ticket card and its Buy Now button
// function disableTicket(ticketType) {
//   const ticketCard = document.querySelector(`.ticket.${ticketType}`);
//   const buyNowBtn = ticketCard.querySelector("button");

//   ticketCard.classList.remove("active");
//   buyNowBtn.removeEventListener("click", handleBuyNow);
//   buyNowBtn.disabled = true;
// }

// // Hide the countdown for the specified ticket
// function hideCountdown(ticketType) {
//   const countdown = document.querySelector(`.ticket.${ticketType} .countdown`);
//   countdown.style.display = "none";
// }

// // Enable a ticket card and its Buy Now button
// function enableTicket(ticketType) {
//   const ticketCard = document.querySelector(`.ticket.${ticketType}`);
//   const buyNowBtn = ticketCard.querySelector("button");

//   ticketCard.classList.add("active");
//   buyNowBtn.addEventListener("click", handleBuyNow);
//   buyNowBtn.disabled = false;
// }

// // Activate the next ticket and start the countdown timer
// function activateNextTicket(currentTicketType) {
//   const ticketTypes = ["early", "regular", "late"];
//   const currentTicketIndex = ticketTypes.indexOf(currentTicketType);
//   const nextTicketType = ticketTypes[currentTicketIndex + 1];

//   if (nextTicketType) {
//     enableTicket(nextTicketType);
//     const endDate = getEndDateByTicketType(nextTicketType);
//     updateCountdown(nextTicketType, endDate);
//     setInterval(() => updateCountdown(nextTicketType, endDate), 1000);
//   }
// }

// // Get the end date for the specified ticket type
// function getEndDateByTicketType(ticketType) {
//   const endDates = {
//     early: "May 22, 2023 16:02:00",
//     regular: "May 25, 2023 16:03:00",
//     late: "May 26, 2023 16:04:00"
//   };

//   return endDates[ticketType];
// }

// // Handle the Buy Now button click
// function handleBuyNow() {
//   alert("You've purchased a ticket!");
//   // Additional logic for the purchase can be added here
// }

// // On page load, activate the Early Bird ticket
// window.onload = function () {
//   enableTicket("early");
//   const endDate = getEndDateByTicketType("early");
//   updateCountdown("early", endDate);
//   setInterval(() => updateCountdown("early", endDate), 1000);
// };

 
// // ******* End buy ticket



// Start Show Speaker Model




// End Show speaker Model