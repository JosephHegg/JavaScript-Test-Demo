import {buttonInformationMap, pageInfoBank} from '../DataSource/page_information.js';


function init(){
	loadTextFields();
	loadButtons();
}

function loadTextFields(){
	var page_title = document.getElementById("page_title");
	var github_message = document.getElementById("github_message");

	page_title.innerHTML = pageInfoBank.get("page_title");
	github_message.innerHTML = pageInfoBank.get("github_message");
}

function loadButtons(){
	for(const [key, innerInformationMap] of buttonInformationMap.entries()){
		var currButton = document.getElementById(key);
		currButton.innerHTML = innerInformationMap.get("buttonText");
		currButton.addEventListener("click", function() {
			window.location.href = ('./' + innerInformationMap.get("buttonLink"));
		});
	}
}

window.onload = init();
