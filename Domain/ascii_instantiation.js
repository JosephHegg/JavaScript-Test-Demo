import {asciiTestTextBank} from '../DataSource/ascii_test_information.js';
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';
import {GO_BACK_BUTTON_LINK} from '../DataSource/page_information.js';

function init(){
	handleDefaultTextFieldAssignments(asciiTestTextBank);
	initializeAllPageListeners();
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
		if(isNaN(parseFloat(entry))){
			throw new Error('Not a number.');
		}
		processSavingsPayment(entry);
	}
	catch(err){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("failure");
	}
}

function processEntryRefinedNoAscii(entry = ""){
	var payment_response_text = document.getElementById("payment_response_text");


	if(isNaN(parseFloat(entry))){
		console.log("Not a number.");
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("failure");
		return;
	}

	processSavingsPayment(entry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("refund_ascii_missed");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("success");
	}
}

function processEntryRefinedAscii(entry = ""){
	var filteredEntry = entry.replace(/[\D]/g, "");
	var payment_response_text = document.getElementById("payment_response_text");

	if(isNaN(parseFloat(filteredEntry))){
		console.log("Not a number.");
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("failure");
		return;
	}

	processSavingsPayment(filteredEntry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("refund_ascii_caught");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text_options").get("success");
	}

}

function processSavingsPayment(filteredEntry){
	var savings_amount_text = document.getElementById("savings_amount_text");
	var savings_amount = parseFloat(savings_amount_text.innerHTML.slice(1));

	savings_amount -= filteredEntry;
	savings_amount_text.innerHTML = "$" + savings_amount.toString();

}


window.onload = init();

