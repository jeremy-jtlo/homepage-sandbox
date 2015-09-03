$( document ).ready();

// Allowing the search button to submit search form
$("#search-submit").click( function() {
    $("#search").trigger('submit');
});

// Printing the day
var month_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

var day_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

var today = new Date();
var month = today.getMonth();
var day_of_month = today.getDate();
var day_of_week = today.getDay();

var date_string = day_names[day_of_week] + ", " + month_names[month] + " " + day_of_month;

document.getElementById('date').innerHTML = date_string;

// Time Logic
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function startClock(){
    var hours = today.getHours();
    var minutes = today.getMinutes();
    minutes = checkTime(minutes);
    time_string = hours + ":" + minutes;
    document.getElementById('time').innerHTML = time_string;
};