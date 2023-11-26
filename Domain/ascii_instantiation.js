import asciiTestTextBank from '../DataSource/ascii_test_information.js';
import GO_BACK_BUTTON_LINK from '../DataSource/page_information.js';

function init(){
	initializeTextFields();
	initializeAllPageListeners();
}

function initializeTextFields(){
	var page_title = document.getElementById("page_title");
	var savings_text = document.getElementById("savings_text");
	var savings_amount_text = document.getElementById("savings_amount_text");

	var payment_value_prompt_naive = document.getElementById("payment_value_prompt_naive");
	var payment_value_prompt_check_no_ascii = document.getElementById("payment_value_prompt_check_noascii");
	var payment_value_prompt_check_ascii = document.getElementById("payment_value_prompt_check_ascii");
	
	var payment_button_naive = document.getElementById("payment_submission_naive");
	var payment_button_decent = document.getElementById("payment_submission_decent");
	var payment_button_great = document.getElementById("payment_submission_great");

	var payment_response_text = document.getElementById("payment_response_text");

	page_title.innerHTML = asciiTestTextBank.get("page_title");
	savings_text.innerHTML = asciiTestTextBank.get("savings_text");
	savings_amount_text.innerHTML = asciiTestTextBank.get("savings_amount_text");

	payment_value_prompt_naive.innerHTML = asciiTestTextBank.get("payment_value_prompt_naive");
	payment_value_prompt_check_no_ascii = asciiTestTextBank.get("payment_value_prompt_check_noascii");
	payment_value_prompt_check_ascii = asciiTestTextBank.get("payment_value_prompt_check_ascii");

	payment_button_naive.innerHTML = asciiTestTextBank.get("submit_button_text");
	payment_button_decent.innerHTML = asciiTestTextBank.get("submit_button_text");
	payment_button_great.innerHTML = asciiTestTextBank.get("submit_button_text");

	payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("standby");
}

function initializeAllPageListeners(){
	var payment_submission_naive = document.getElementById("payment_submission_naive");
	var payment_submission_decent = document.getElementById("payment_submission_decent");
	var payment_submission_great = document.getElementById("payment_submission_great");

	const INPUT_FIELD_INPUT_REGEX = /[^0-9\.]+/;

	var inputs = [payment_submission_naive, payment_submission_decent, payment_submission_great];
	for (input in inputs){
		input.addEventListener("keypress", event => {
			if(!INPUT_FIELD_INPUT_REGEX.test(event.key)){
				event.preventDefault();
			}
		});
	}

	initializeButtonListeners();
}

function initializeButtonListeners(){
	var payment_button_naive = document.getElementById("payment_submission_naive");
	var payment_button_decent = document.getElementById("payment_submission_decent");
	var payment_button_great = document.getElementById("payment_submission_great");

	var button_go_back = document.getElementById("button_go_back");

	var naive_text = payment_button_naive.innerHTML;
	var decent_text = payment_submission_decent.innerHTML;
	var great_text = payment_submission_great.innerHTML;

	payment_button_naive.addEventListener("onclick", processEntryUnrefined(naive_text));
	payment_button_decent.addEventListener("onclick", processEntryRefinedNoAscii(decent_text));
	payment_button_great.addEventListener("onclick", processEntryRefinedAscii(great_text));

	button_go_back.addEventListener("onclick", function() {
		button_go_back.location.href = GO_BACK_BUTTON_LINK;
	});
}





function processEntryUnrefined(entry){
	var payment_response_text = document.getElementById("payment_response_text");

	try{
		processSavingsPayment(filteredEntry);
	}
	catch(err){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("failure");
	}
}

function processEntryRefinedNoAscii(entry){
	var payment_response_text = document.getElementById("payment_response_text");

	processSavingsPayment(filteredEntry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("refund_ascii_missed");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("success");
	}
}

function processEntryRefinedAscii(entry){
	var filteredEntry = entry.replace(/[^0-9\.]/, "");
	var payment_response_text = document.getElementById("payment_response_text");

	processSavingsPayment(filteredEntry);

	if(entry.charAt(0) === '-'){
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("refund_ascii_caught");
	} else {
		payment_response_text.innerHTML = asciiTestTextBank.get("payment_response_text").get("success");
	}

}

function processSavingsPayment(filteredEntry){
	var savings_amount_text = document.getElementById("savings_text");
	var payment_response_text = document.getElementById("payment_response_text");
	var savings_amount = parseInt(savings_amount_text);

	savings_amount = filteredEntry;
	savings_amount_text.innerHTML = savings_amount.toString();
}


window.onload = init();

