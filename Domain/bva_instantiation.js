import {bvaTestTextBank} from '../DataSource/bva_test_information.js';
import {GO_BACK_BUTTON_LINK, GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';

function init(){
	initializeTextFields();
	initializePageListeners();
}

function initializeTextFields(){
	var page_title = document.getElementById("page_title");
	var statement_message = document.getElementById("statement_message");
	var submit_button = document.getElementById("submit_button");
	
	var submit_response_text = document.getElementById("submit_response_text");
	var button_go_back = document.getElementById("button_go_back");

	page_title.innerHTML = bvaTestTextBank.get("page_title");
	statement_message.innerHTML = bvaTestTextBank.get("statement_message");
	submit_button.innerHTML = bvaTestTextBank.get("submit_button_text");

	submit_response_text.innerHTML = bvaTestTextBank.get("submit_response_text").get("standby");
	button_go_back.innerHTML = GO_BACK_BUTTON_TEXT;
}

function initializePageListeners(){
	var submit_button = document.getElementById("submit_button");
	var button_go_back = document.getElementById("button_go_back");

	submit_button.addEventListener("click", function() {
		var int_submission_value = document.getElementById("int_submission").value;
		processUserSubmission(int_submission_value);
	});

	button_go_back.addEventListener("click", function() {
		window.location.href = GO_BACK_BUTTON_LINK;
	});
}

function processUserSubmission(userValue){
	var submit_response_text = document.getElementById("submit_response_text");
	var submit_response_bank = bvaTestTextBank.get("submit_response_text");

	var negativeInfinity = "-INFINITY"; // minInt
	var positiveInfinity = "+INFINITY"; // maxInt

	const MIN_VALUE = 0;
	const MAX_VALUE = 100;

	if(userValue === negativeInfinity){
		submit_response_text.innerHTML = submit_response_bank.get("negative_infinity") + " " + userValue;
		return;
	}

	if(userValue === positiveInfinity){
		submit_response_text.innerHTML = submit_response_bank.get("positive_infinity") + " " + userValue;
		return;
	}

	if(Number(userValue).toString() === 'NaN'){
		submit_response_text.innerHTML = submit_response_bank.get("invalid_type");
		return;
	}

	var stringUserValue = userValue;
	userValue = Number(userValue);

	if(!Number.isInteger(userValue) || stringUserValue.indexOf(".") != -1){
		submit_response_text.innerHTML = submit_response_bank.get("numeric_non_integer");
		return;
	}

	if(userValue == MIN_VALUE || userValue == MAX_VALUE){
		submit_response_text.innerHTML = submit_response_bank.get("exact_value") + " " + userValue;
		return;
	}

	if(userValue == MIN_VALUE + 1 || userValue == MAX_VALUE - 1){
		submit_response_text.innerHTML = submit_response_bank.get("one_off_value_accepted") + " " + userValue;
		return;
	}

	if(userValue == MIN_VALUE - 1 || userValue == MAX_VALUE + 1){
		submit_response_text.innerHTML = submit_response_bank.get("one_off_value_rejected") + " " + userValue;
		return;
	}

	if(MIN_VALUE < userValue && userValue < MAX_VALUE){
		submit_response_text.innerHTML = submit_response_bank.get("standard_value_in_range") + " " + userValue;
		return;
	}

	submit_response_text.innerHTML = submit_response_bank.get("standard_value_out_of_range") + " " + userValue;
	return;
}

window.onload = init();