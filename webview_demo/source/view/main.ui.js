//related to login.ui
var page = sm("do_Page");
var app = sm("do_App");
////
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})