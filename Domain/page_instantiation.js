import {buttonInformationMap} from '../DataSource/page_information.js';

loadButtons();

function loadButtons(){
	for(const [key, innerInformationMap] of buttonInformationMap.entries()){
		var currButton = document.getElementById(key);
		currButton.innerHTML = innerInformationMap.get("buttonText");
		currButton.addEventListener("click", function() {
			window.location.href = ('./' + innerInformationMap.get("buttonLink"));
		});
	}


}
