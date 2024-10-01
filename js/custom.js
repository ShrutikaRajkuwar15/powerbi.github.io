// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Popup box

// Display popup when the page loads
window.onload = function() {
    document.getElementById("popupForm").style.display = "flex";
};

// Close the popup when the close button is clicked
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popupForm").style.display = "none";
};


// Form submission and validation
document.getElementById("submit").onsubmit = function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number=document.getElementById("number").value;
    
    // Check if fields are empty
    if (name === "" || email === "" || number==="") {
        alert("Please enter your information.");
    } else {
        alert("Your form has been submitted.");
        document.getElementById("popupForm").style.display = "none"; 
    }
};

// data aos js

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
  });
