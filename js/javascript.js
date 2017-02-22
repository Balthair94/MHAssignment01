function showHide(id) {

	var proj = ['app_description_01', 'app_description_02', 'app_description_03', 'app_description_04', 'app_description_05'];

	//Getting the current class of the element
	var cName = document.getElementById(id).getAttribute("class");

	//Element is visible
	if (cName == "table-tr-hide") {
		for (var i = 0; i < proj.length; i++) {
			document.getElementById(proj[i]).className = "table-tr-hide"
		}
		//Hide element
		document.getElementById(id).className = "table-tr-show"
	} 
	//Element is hide
	else {
		//Show element
		document.getElementById(id).className = "table-tr-hide"
	}
}

function moveTo(id){
	//Getting the element
	element = document.getElementById(id)
	//Scrilling to the element
	element.scrollIntoView(true);
}


//CODE FROM THE LIBRARY USEDED
$('.avatar-container').hover(function(){
  
  if ($(this).find('.info').length <= 0) {
    $(this).append('<div class="info"><div class="info-inner"></div></div>');
  }
  
  var $info = $(this).find('.info'),
      $inner= $(this).find('.info-inner'),
      $p    = $(this).attr("class").match(/p-\w+/).toString().substring(2);
  
  $inner.text($p+'%');
  $info.toggleClass('js-active');
});