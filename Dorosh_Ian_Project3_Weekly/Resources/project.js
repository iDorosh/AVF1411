var cloud = require("cloud");
var addProject = function(day){
	console.log(day);
		var clientName = Titanium.UI.createTextField({
		    color: "#94bc5b",
		    top: 20,
		    height:50,
		    width:"240",
		    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		    hintText:"Client Name", 
		});
		
		var projectName = Titanium.UI.createTextField({
		    color: "#94bc5b",
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
			cloud.createArray(clientName.value,projectName.value,day);
		});
		exports.tblData = tblData;
		start.add(city);
		add.add(start);
		add.add(projectName);
		add.add(clientName);
		navWindow.openWindow(add);
	};
	
exports.addProject = addProject;