function toonWinnaars(){
	var winnaars=["Frankrijk","Kroatië","België"];
	var lengte= winnaars.length;
	for (var i=0;  i <lengte; i++) {
		document.write("<p>Op plaats " + (i+1) + " staat : " + winnaars[i] + ".</p>")
	}
}

toonWinnaars();