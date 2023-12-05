export function handleDefaultTextFieldAssignments(pageInfoMap){
	for(const [key, value] of pageInfoMap.entries()){
		if(typeof value === 'object'){
			handleDefaultTextFieldAssignments(value);
			continue;
		}
		try {
			var currentElement = document.getElementById(key);
			currentElement.innerHTML = value;
		}
		catch(err){
			if(!document.getElementById(key) === 'null'){
				console.log("Issue with element id: " + key);
			}
		}
	}
}