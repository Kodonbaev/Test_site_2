/**
 * Created by Актилек on 22.02.2017.
 */
 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-box'
});
$('.slider-box').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
function initMap() {
    var bishkek = {lat: 42.8463396, lng: 74.5975341};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: bishkek
    });
    var marker = new google.maps.Marker({
        position: bishkek,
        map: map
    });
};
$('#registration-form').validate({
    rules: {
        userPassword :{
            minlength: 6,
        }
    },
    messages: {
        userEmail :{
            email: "Please enter your email",
            required: "**"
        }
    }
});