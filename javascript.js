document.addEventListener("copy", function(evt){
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this Exam! you are suspended!");

      // Prevent the default copy action
      evt.preventDefault();
  }, false);




  // Set the date we're counting down to
  let countDownDate = new Date("Nov 8, 2020 04:40:00").getTime();
  // Update the count down every 1 second
  let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime().toLocaleString({timeZone: "Asia/Dhaka"});

  let rComma = parseFloat(`${now}`. replace(/,/g, ''));
  // Find the distance between now and the count down date
  let distance = countDownDate - rComma;
    
  // Time calculations for days, hours, minutes and seconds

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds
https://pastebin.ubuntu.com/p/dMwFHbC3Pg/
