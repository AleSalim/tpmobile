// Clé API : AIzaSyA1kj15zWk_ubHEV58HygEzMqXVV-4m4jk

function initMap() {
    var map = new google.maps.Map(document.getElementById('maps'), {
        center: {lat: 12.6801237, lng: 108.0440484},
        zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Localisation trouvée.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Erreur : Le service de localisation a échoué.' :
        'Erreur : Votre navigateur ne supporte pas la géolocalisation.');
}


function hamburger_click()
{
  var menuElement = document.getElementById("menu");
    
    menuElement.style.display = "block";  
   
    $(document).on('click', function(){
       menuElement.style.display = "none"; 
        
    });

}


$(document).ready(function() {  
    
   function process(event) {
            /*var x = event.accelerationIncludingGravity.x;
            var y = event.accelerationIncludingGravity.y;
            var z = event.accelerationIncludingGravity.z;
            $('#theimage').css("rotate", x+y+z);*/
    }
    
    // Orientation de l'appareil
    if(window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", process, false);

    } else {
      alert("DeviceOrientation n'est pas supportée sur votre navigateur.");
    }
    
    
    // Détection du support
    if(typeof sessionStorage!='undefined') {
        
            // Ajout dans le cache
            document.getElementById('prenom').value = sessionStorage.getItem('prenom');
            document.getElementById('nom').value = sessionStorage.getItem('nom');
            document.getElementById('naissance').value = sessionStorage.getItem('naissance');
            document.getElementById('ville').value = sessionStorage.getItem('ville');
            document.getElementById('mail').value = sessionStorage.getItem('mail');
            document.getElementById('message').value = sessionStorage.getItem('message');
    } else {
      alert("sessionStorage n'est pas supporté");
    }
    
    // Quand on clique sur le bouton "Vider le cache"
    $('#clear').click(function(){
        sessionStorage.clear(); 
    });

});