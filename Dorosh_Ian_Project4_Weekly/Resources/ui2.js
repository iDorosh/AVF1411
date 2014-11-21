var login1 = require("login");
var loginWin = Titanium.UI.createWindow({  
	    backgroundColor:'#0f70b8',
	    navBarHidden: true,
	    modal:true,
	});

var login = function(){
	
	var createScrollMain = Ti.UI.createScrollView({
		contentWidth: "auto",
		contentHeight: "400",
		showVerticalScrollIndicator: true,
		height: "100%",
	    width: "100%"
	});

	var weekly = Ti.UI.createLabel({
		top: 40,
		text: "Weekly",
		color: "fff",
		font: {fontSize: 64, fontFamily: "Helvetica", fontWeight: "bold"},
	});
	
	var logInBG = Ti.UI.createView({
		top: 140,
		backgroundColor: "#0f70b8",
		height: 40,
		width: 90,
	});
	
	var logIn = Ti.UI.createLabel({
		text: "Login",
		color: "#fff",
		top: 147,
		font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "regular"},
	});
	
	var logInBars = Ti.UI.createView({
		top: 160,
		backgroundColor: "#fff",
		height: 1,
		width: "240",
	});
	
	var userName = Titanium.UI.createTextField({
		top:210,
	    color: "#484949",
	    height:50,
	    width:"240",
	    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, 
	    hintText:"username", 
	    autoCorrect: false,
		autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	});
	
	var password = Titanium.UI.createTextField({
		top:280,
	    color: "#484949",
	    height:50,
	    width:"240",
	    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	    hintText:"password",
	    passwordMask:true,
	    autoCorrect: false,
		autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	});
	
	var logInButton = Ti.UI.createLabel({
		top: password.top+70,
		text: "Sign In",
		color: "#fff",
		font: {fontSize: 28, fontFamily: "Helvetica", fontWeight: "Lite"},
	});
	
	var bottomBars = Ti.UI.createView({
		bottom: 70,
		backgroundColor: "#fff",
		height: 1,
		width: "240",
	});
	
	var create = Ti.UI.createLabel({
		bottom: 25,
		text: "Create",
		color: "#fff",
		font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "lite"},
	});

if(Ti.Platform.osname == "iphone"){
    	loginWin.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
   };
   
   if(Ti.Platform.osname == "ipad"){
   		createScrollMain.top = 200;
    	loginWin.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
   };
   
  logInButton.addEventListener("click", function(){
  	login1.loginApp(userName.value,password.value);
  	
  });
	createScrollMain.add(weekly);
	createScrollMain.add(logInBars);
	createScrollMain.add(logInBG);
	createScrollMain.add(logIn);
	createScrollMain.add(userName);
	createScrollMain.add(password);
	createScrollMain.add(logInButton);
	loginWin.add(createScrollMain);
	loginWin.open();
};

exports.loginWin = loginWin;
exports.login = login;