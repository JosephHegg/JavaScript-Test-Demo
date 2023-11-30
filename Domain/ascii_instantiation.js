import {asciiTestTextBank} from '../DataSource/ascii_test_information.js';
import {GO_BACK_BUTTON_LINK, GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';

function init(){
	initializeTextFields();
	initializeAllPageListeners();
}

function initializeTextFields(){
	var page_title = document.getElementById("page_title");
	var savings_text_value = document.getElementById("savings_text_value");
	var savings_amount_text = document.getElementById("savings_amount_text");

	var payment_value_prompt_naive = document.getElementById("payment_value_prompt_naive");
	var payment_value_prompt_check_no_ascii = document.getElementById("payment_value_prompt_check_noascii");
	var payment_value_prompt_check_ascii = document.getElementById("payment_value_prompt_check_ascii");
	
	var payment_button_naive = document.getElementById("payment_submission_button_naive");
	var payment_button_decent = document.getElementById("payment_submission_button_decent");
	var payment_button_great = document.getElementById("payment_submission_button_great");

	var payment_response_text = document.getElementById("payment_response_text");
	
	var button_go_back = document.getElementById("button_go_back");

	page_title.innerHTML = asciiTestTextBank.get("page_title");
	savings_text_value.innerHTML = asciiTestTextBank.get("savings_text_value");
	savings_amount_text.innerHTML = "$" + asciiTestTextBank.get("savings_amount_text");

	payment_value_prompt_naive.innerHTML = asciiTestTextBank.get("payment_value_prompt_naive");
	payment_value_prompt_check_no_ascii.innerHTML = asciiTestTextBank.get("payment_value_prompt_check_noascii");
	payment_value_prompt_check_ascii.innerHTML = asciiTestTextBank.get("payment_value_prompt_check_ascii");

	payment_button_naive.innerHTML = asciiTestTextBank.get("submit_button_text");
	payment_button_decent.innerHTML = asciiTestTextBank.get("submit_button_text");
	payment_button_great.innerHTML = asciiTestTextBank.get("submit_button_text");

	payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("standby");

	button_go_back.innerHTML = GO_BACK_BUTTON_TEXT;
}

function initializeAllPageListeners(){
	var payment_submission_great = document.getElementById("payment_submission_great");

	const INPUT_FIELD_INPUT_REGEX = new RegExp('/[0-9]+$/');

	// naive method uses input type of text
	// decent method uses input type of number
	// great method has active listener an input type to prevent alt-entries

	payment_submission_great.addEventListener("keypress", event => {
		
		// source https://stackoverflow.com/questions/13607278/html5-restricting-input-characters

		var e = event || window.event;  
	    var key = e.keyCode || e.which; 

	    if (key < 48 || key > 57) { 
	        if (e.preventDefault) e.preventDefault(); 
	        e.returnValue = false; //IE
	    }

	});
	

	initializeButtonListeners();
}

function initializeButtonListeners(){
	var payment_submission_naive = document.getElementById("payment_submission_naive");
	var payment_submission_decent = document.getElementById("payment_submission_decent");
	var payment_submission_great = document.getElementById("payment_submission_great");

	var button_go_back = document.getElementById("button_go_back");

	payment_submission_button_naive.addEventListener("click", function() {
		var payment_submission_button_naive = document.getElementById("payment_submission_button_naive");
		var naive_text = payment_submission_naive.value;
		processEntryUnrefined(naive_text);
	});

	payment_submission_button_decent.addEventListener("click", function() {
		var payment_submission_button_decent = document.getElementById("payment_submission_button_decent");
		var decent_text = payment_submission_decent.value;
		processEntryRefinedNoAscii(decent_text);
	});

	payment_submission_button_great.addEventListener("click", function() {
		var payment_submission_button_great = document.getElementById("payment_submission_button_great");
		var great_text = payment_submission_great.value;
		processEntryRefinedAscii(great_text);
	});

	button_go_back.addEventListener("click", function() {
		window.location.href = GO_BACK_BUTTON_LINK;
	});
}





function processEntryUnrefined(entry = ""){
	var payment_response_text = document.getElementById("payment_response_text");
	try{
		processSavingsPayment(entry);
	}
	catch(err){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("failure");
	}
}

function processEntryRefinedNoAscii(entry = ""){
	var payment_response_text = document.getElementById("payment_response_text");

	processSavingsPayment(entry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("refund_ascii_missed");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("success");
	}
}

function processEntryRefinedAscii(entry = ""){
	var filteredEntry = entry.replace(/[\D]/g, "");
	var payment_response_text = document.getElementById("payment_response_text");

	processSavingsPayment(filteredEntry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("refund_ascii_caught");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("success");
	}

}

function processSavingsPayment(filteredEntry){
	var savings_amount_text = document.getElementById("savings_amount_text");
	var savings_amount = parseFloat(savings_amount_text.innerHTML.slice(1));

	console.log(filteredEntry);

	if(isNaN(parseFloat(filteredEntry))){
		throw new Error("Not a number.");
	}

	savings_amount -= filteredEntry;
	savings_amount_text.innerHTML = "$" + savings_amount.toString();

	console.log(filteredEntry);
}


window.onload = init();

