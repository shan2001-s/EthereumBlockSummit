//  // Calculate the time difference between the current date and the target end dates
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

//   if (timeDiff.days < 0) {
//     // Ticket end date has passed
//     disableTicket(ticketType);
//     hideCountdown(ticketType);
//     activateNextTicket(ticketType);
//   } else {
//     document.getElementById(`active-${ticketType}`).style.background='white'
//     document.getElementById(`active-${ticketType}`).style.boxShadow=  "0px 5px 13px 5px hsl(41, 100%, 65%)";
//     document.getElementById(`notAvaliableBtn-${ticketType}`).textContent= 'Buy Now'
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
//     early: "May 24, 2023 17:08:00",
//     regular: "May 25, 2023 17:10:00",
//     late: "June 26, 2023 17:11:00"
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


