var login1 = require("login");
var ui2 = require("ui2");





var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#222222',
    navBarHidden: true,
    modal:true,
});

var win2 = Titanium.UI.createWindow({  
    title: "Projects",
    backgroundColor:'#222222',
    navBarHidden: false,
    modal:true,
   
});

var add = Titanium.UI.createWindow({  
    title: "Add Project",
    backgroundColor:'#222222',
    navBarHidden: false,
    modal:true,
   
});

var loginScreen = function(){
	var loginStatus = false;
		if(loginStatus == false){
			ui2.login();
		} else{
			
		}
};

exports.loginScreen = loginScreen;

//If there is a network This function will run
var  userInterface = function(forecast, data){
	var colors = ["#617eff","#8c128b","#72c2e7","#65d84a","#ffc500","#fd925c","#fc554c"];
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var data1 = [1,2,3,4,5,6,7];



var tableData = Ti.UI.createTableView({
	width:"85%",
	height: 240,
	top: 60,
});


var profilesTable = function(profilesData,currentView){
	var rowData = [];
	var row = Ti.UI.createScrollView({
			top: 40,
			contentWidth: "100%",
			contentHeight: "auto",
			showVerticalScrollIndicator: true,
			layout: "vertical",
		    width: "auto",
		    height: "auto",
		    data: profilesData,
		});
		
		if(Ti.Platform.osname == "ipad"){
		row.top = 130;
};
	for (i=0, j=profilesData.length; i<j; i++){
	
		var test = Titanium.UI.createView({
			height:60,
			width:320,
			top:30,
			backgroundColor: "#fff",
			borderRadius:0,
		});
		
		var hide = Titanium.UI.createView({
			height:60,
			width:200,
			top:150,
			backgroundColor: colors[currentView],
			borderRadius:0,
		});
		
		if(Ti.Platform.osname == "ipad"){
			hide.top = 260;
			hide.width = 300;
		};
		var projectClient = Ti.UI.createLabel({
			text: profilesData[i].clientName,
			color: "#afafae",
			top: 10,
			left: 25,
			font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "light"}
		});
		
		var projectName1 = Ti.UI.createLabel({
			text: profilesData[i].projectName,
			color: "#616161",
			left: 25,
			top: 25,
			font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "Bold"}
		});
		
		
		test.add(projectClient);
		test.add(projectName1);
		row.add(test);
		rowData.push(row);
	};
	
		scrollableView.views[currentView].add(hide,row);

};

var tblData = [];
var Cloud = require("ti.cloud");
Cloud.debug = true;
var createArray = function(name,projects,day){
	var current;
	if(day == "Saturday"){
		current = null;
		current = "5467892944f2450e5607d3aa";
	}
	if(day == "Sunday"){
		current = null;
		current = "5467897540f2edfe1007cd5f";
	};
	Cloud.Events.update({
	    event_id: current,
	    custom_fields: {
		    "client": name,
		    "project": projects, 
	},
	    project: projects,
	}, function (e) {
	    if (e.success) {
	        var event = e.events[0];
	    tblData.data = null;
	       tblData.push({
				clientName: event.custom_fields.client,
				projectName: event.custom_fields.project,
			});
			profilesTable(tblData,currentView);
			if(Ti.Platform.osname == "android"){
				add.close();
			}else{
			navWindow.closeWindow(add);
			};
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};

exports.profilesTable = profilesTable;

i = forecast.length - 1;
	var a = forecast[i].temp;
	var c = a;
	var b = Math.round(c);

var background = Ti.UI.createView({
	backgroundColor: "#222222",
});

var locationIcon = Ti.UI.createImageView({
	image: "icons/location.png",
	left: 20,
	top: 35,
	height: 25,
});

var city = Ti.UI.createLabel({
	text: forecast,
	color: "#acabab",
	top: ".5%",
	left: "5%",
	font: {fontSize: "25%", fontFamily: "Helvetica", fontWeight: "light"}
});



var scrollableView = Ti.UI.createScrollableView({
  views:[],
  showPagingControl:true
});
var currentView = 0;
scrollableView.addEventListener('scrollend', function (e) {
		    currentView = e.currentPage;
		});
	exports.currentView = currentView;	
var addProject = function(day){
	console.log(day);
		var clientName = Titanium.UI.createTextField({
		    color: "#484949",
		    top: 20,
		    height:50,
		    width:"240",
		    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		    hintText:"Client Name", 
		});
		
		var projectName = Titanium.UI.createTextField({
		    color: "#484949",
		    top: 80,
		    height:50,
		    width:"240",
		    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		    hintText:"Project Name", 
		});
		
		var start = Ti.UI.createView({
			backgroundColor: "#eae8e8",
			top: 150,
			width: "80%",
			height: 50,
			borderRadius: 5,
			
		});
		
		
		var city = Ti.UI.createLabel({
			text: "Add Project",
			color: "#acabab",
			font: {fontSize: "25%", fontFamily: "Helvetica", fontWeight: "light"}
		});
		var tblData = [];
		start.addEventListener("click", function(e){
			createArray(clientName.value,projectName.value,day);
		});
		exports.tblData = tblData;
		start.add(city);
		add.add(start);
		add.add(clientName);
		add.add(projectName);
	
		if(Ti.Platform.osname == "android"){
			add.open();
		}else{
		navWindow.openWindow(add);
		};
	};




for(var i=0, j=data.length; i<7; i++){
var purple = Ti.UI.createView({
	backgroundColor: colors[i],
	top: "10%",
	height: "80%",
	width: "90%",
	borderRadius: 6,
});

var day = Ti.UI.createLabel({
	text: data[i].title,
	color: "#eae8e8",
	top: 15,
	font: {fontSize: "30%", fontFamily: "Helvetica", fontWeight: "Bold"}
});

if(Ti.Platform.osname == "android"){
	scrollableView.height = "80%";
	scrollableView.width = "90%";
	city.left = "15%";
	city.top = 10;
	locationIcon.top = 15;
	
};

var divider = Ti.UI.createView({
	backgroundColor: "#eae8e8",
	top: 320,
	width: "80%",
	height: 1,
	
});



var degree = Ti.UI.createLabel({
	text: data[i].temp.fahrenheit+"°",
	color: "#eae8e8",
	bottom: 15,
	left: 30,
	font: {fontSize: "90%", fontFamily: "Roboto", fontWeight: "Bold"}
});

var precipitation = Ti.UI.createLabel({
	text: data[i].humidity+"%",
	color: "#eae8e8",
	bottom: 70,
	right: 30,
	font: {fontSize: "34%", fontFamily: "Roboto", fontWeight: "Bold"}
});

var wind = Ti.UI.createLabel({
	text: data[i].wind,
	color: "#eae8e8",
	bottom: 31,
	right: 30,
	font: {fontSize: "34%", fontFamily: "Roboto", fontWeight: "Bold"}
});
var mph = Ti.UI.createLabel({
	text: "mph",
	color: "#eae8e8",
	bottom: 31,
	right: 15,
	font: {fontSize: "15%", fontFamily: "Roboto", fontWeight: "Bold"}
});

var plus = Ti.UI.createLabel({
	text: "+",
	color: "#eae8e8",
	top:0,
	right: 15,
	font: {fontSize: "34%", fontFamily: "Roboto", fontWeight: "light"}
});

var noJobs = Ti.UI.createLabel({
	text: "No Current Jobs",
	color: "#eae8e8",
	top: 150,
	font: {fontSize: "15%", fontFamily: "Roboto", fontWeight: "light"}
});

if(Ti.Platform.osname == "ipad"){
	
	win1.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    add.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    city.top = 30;
    city.left = 100;
    city.font = {fontSize: 50};
    locationIcon.left = 50;
    locationIcon.top = 45;
    locationIcon.height = 40;
	precipitation.font = {fontSize: 80};
	precipitation.right = 70;
	precipitation.bottom =100;
	wind.font = {fontSize:80};
	wind.right = 150;
	wind.bottom = 35;
	mph.right = 65;
	mph.bottom = 45;
	mph.font = {fontSize:"40%"};
	
	day.font = {fontSize: 60};
	plus.font = {fontSize:"60%"};
	plus.top = -10;
	degree.font = {fontSize: 160};
	degree.left = 60;
	noJobs.font = {fontSize: 30};
	noJobs.top = 260;
	divider.top = 600;
	
}
if(Ti.Platform.osname == "iphone"){
    	win1.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	add.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	city.top = 33;
    	city.left = 45;
    	purple.top = "14%";
    	wind.right = 65;
    	mph.right = 30;
    	mph.bottom = 35;
   };
  
  if(Ti.Platform.osname == "android"){
    	wind.right = 80;
    	mph.right = 30;
   };
   
   purple.add(mph);
   purple.add(wind);
	purple.add(precipitation);
	purple.add(degree);
	purple.add(divider);
	purple.add(day);
	purple.add(plus);
	purple.add(noJobs);
   scrollableView.addView(purple);

	plus.addEventListener("click", function(e){
		addProject(data[currentView].title);
	});
	win2.addEventListener("click", function(e){
		
	});
};




background.add(scrollableView);
background.add(locationIcon);
background.add(city);
win1.add(background);
if(Ti.Platform.osname == "iphone"){
    	win1.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	add.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    	city.top = 33;
    	city.left = 45;
    	purple.top = "14%";
   };

if (Ti.Platform.osname == "android"){
	win1.open();
}else{
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win1,
});
navWindow.open();
};	
};



//exports user interface functions to be called in data.js
exports.userInterface = userInterface;





