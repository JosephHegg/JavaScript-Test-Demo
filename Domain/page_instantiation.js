import {buttonInformationMap, pageInfoBank} from '../DataSource/page_information.js';
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';

function init(){
	handleDefaultTextFieldAssignments(pageInfoBank);
	loadButtons();
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
