// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});
// Calculate days since Dec 1st 2012
var initialDate = new Date(1990,1,1); // Dec 1st 2012
var now = Date.now();
var difference = (now - initialDate);
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay/365);

// Write result to HTML
document.getElementById('days_since').innerHTML = daysSince;
