
const ready = require('../../js/utils/documentReady.js');

ready(function (){
  function initialize() {
    const x = 59.9386673;
    const y = 30.3230900;
    const mapOptions = {
      zoom: 17,
      // eslint-disable-next-line no-undef
      center: new google.maps.LatLng(x, y),
      scrollwheel: false,
      disableDefaultUI: true
    };
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(
      document.querySelector('.map__block'),
      mapOptions
    );
    const image = 'img/map-marker.png';
    // eslint-disable-next-line no-undef
    const myLatLng = new google.maps.LatLng(x, y);
    // eslint-disable-next-line no-unused-vars, no-undef
    const beachMarker = new google.maps.Marker({
      position: myLatLng,
      map,
      icon: image
    });
  }
  // eslint-disable-next-line no-undef
  google.maps.event.addDomListener(window, 'load', initialize);

});


