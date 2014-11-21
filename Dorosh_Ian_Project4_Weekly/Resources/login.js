var geo = require("geo");
var Cloud = require("ti.cloud");
Cloud.debug = true;
var loginApp = function(user1,password){
		if (Ti.Network.online) {
			Cloud.Users.login({
			    login: user1,
			    password: password,
			}, function (e) {
			    if (e.success) {
			    	var user = e.users[0];
			        geo.currentLocation();
			        alert.show();
			        
			        
			    }else{
			var alert2 = Ti.UI.createAlertDialog({
			        	message: "Invalid username/password\nPlease try again",
			        	title: "Login Error",
			        });
			        alert2.show();
			      };
			});
		
		};
		
		
		
		Cloud.Events.query(function (e) {
	    if (e.success) {
	       
	        for (var i = 0; i < e.events.length; i++) {
	            var event = e.events[i];
	           
	            var post = {
						name: event.name,
						id: event.id,
						desc: event.custom_fields.description,
					};	
					if(event.details == "Wednesday"){
						weekdays.week.Wednesday.push(post);
					};
					if(event.details == "Thursday"){
						weekdays.week.Thursday.push(post);
					};
					if(event.details == "Friday"){
						weekdays.week.Friday.push(post);
					};
					if(event.details == "Saturday"){
						weekdays.week.Saturday.push(post);
					};
					if(event.details == "Sunday"){
						weekdays.week.Sunday.push(post);
					};
					if(event.details == "Monday"){
						weekdays.week.Monday.push(post);
					};
					if(event.details == "Tuesday"){
						weekdays.week.Tuesday.push(post);
					};
		
			};
			console.log(weekdays.week.Thursday);
			
	    } else {
	        alert("No Network:\nPlease connect to a network and try again" );
	    }
	   
	});
	
	
};


exports.loginApp = loginApp;


	
	
