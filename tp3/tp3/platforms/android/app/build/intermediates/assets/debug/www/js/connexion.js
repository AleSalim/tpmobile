
document.addEventListener("deviceready", function(e){
            var phoneModel = device.model;
            var phonePlatform = device.platform;
            var phoneUUID = device.uuid;
            var phoneBattery;
            var phoneLanguage;
            navigator.globalization.getPreferredLanguage(
                function (language) { 
                    phoneLanguage = language.value; 
                    
                    window.addEventListener("batterystatus", function(status){
                        phoneBattery = status.level;
                        console.log("Modèle : " + phoneModel +" \nSysteme : "+ phonePlatform + " \nLangage : " + phoneLanguage + " \nUUID : " + phoneUUID + " Batterie : "+ phoneBattery);
                        alert("Modèle : " + phoneModel +" \nSysteme : "+ phonePlatform + " \nLangage : " + phoneLanguage + " \nUUID : " + phoneUUID + " \nBatterie : "+ phoneBattery +"%");
                    }, false);
                                    },
                function () {alert('Error getting language\n');}
            );
    
        document.addEventListener("offline", function(e){
        }, false);
    
        document.addEventListener("online", checkConnection(), false);
}, false); 


function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Type de connexion: ' + states[networkState]);
}


function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options = new ContactFindOptions();
options.filter = "Bob";
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;
var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);

