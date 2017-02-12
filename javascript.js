function showHide(id) {
	var cName = document.getElementById(id).getAttribute("class");
	console.log(cName)
	if (cName == "table-tr-hide") {
		document.getElementById(id).className = "table-tr-show"
	} else {
		document.getElementById(id).className = "table-tr-hide"
	}
}

function moveTo(id){
	element = document.getElementById(id)
	element.scrollIntoView(true);
}