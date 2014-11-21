var network = require("network");
//Gets users current location
var currentLocation = function(){
		if(Titanium.Network.online==true){
			Ti.Geolocation.purpose = "To find weather conditions near you.";
			if(Ti.Platform.osname === "android" ){
				network.netCheck2("122.0375", "37.3711");
			}else{
				Titanium.Geolocation.getCurrentPosition( function(e) {
				    if (!e.success) {
				        alert('Could not retrieve location');
				        return;
				    }else{
				    var longitude = e.coords.longitude;
				    var latitude = e.coords.latitude;
					network.netCheck2(longitude, latitude);
					
					};
				
				});
			};
		}else{
			var netWork = Ti.UI.createAlertDialog({
				    message: 'Could not retrieve location',
				    title: 'Network Unavailable',
				  });
			netWork.show();
		};
	};
exports.currentLocation = currentLocation;