import {bvaTestTextBank} from '../DataSource/bva_test_information.js';
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';
import {GO_BACK_BUTTON_LINK} from '../DataSource/page_information.js';

function init(){
	handleDefaultTextFieldAssignments(bvaTestTextBank);
	initializePageListeners();
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

	var negativeInfinity = "-INFINITY"; // minInt
	var positiveInfinity = "+INFINITY"; // maxInt

	const MIN_VALUE = 0;
	const MAX_VALUE = 100;

	if(userValue === negativeInfinity){
		updateResponseWithValue(submit_response_text, "negative_infinity", userValue);
		return;
	}

	if(userValue === positiveInfinity){
		updateResponseWithValue(submit_response_text, "positive_infinity", userValue);
		return;
	}

	if(Number(userValue).toString() === 'NaN'){
		updateResponseNoValue(submit_response_text, "invalid_type");
		return;
	}

	var stringUserValue = userValue;
	userValue = Number(userValue);

	if(!Number.isInteger(userValue) || stringUserValue.indexOf(".") != -1){
		updateResponseNoValue(submit_response_text, "numeric_non_integer");
		return;
	}

	if(userValue == MIN_VALUE || userValue == MAX_VALUE){
		updateResponseWithValue(submit_response_text, "exact_value", userValue);
		return;
	}

	if(userValue == MIN_VALUE + 1 || userValue == MAX_VALUE - 1){
		updateResponseWithValue(submit_response_text, "one_off_value_accepted", userValue);
		return;
	}

	if(userValue == MIN_VALUE - 1 || userValue == MAX_VALUE + 1){
		updateResponseWithValue(submit_response_text, "one_off_value_rejected", userValue);
		return;
	}

	if(MIN_VALUE < userValue && userValue < MAX_VALUE){
		updateResponseWithValue(submit_response_text, "standard_value_in_range", userValue);
		return;
	}

	updateResponseWithValue(submit_response_text, "standard_value_out_of_range", userValue);
	return;
}

function updateResponseWithValue(textField, key, value){
	const responseBank = bvaTestTextBank.get("submit_response_text_options");
	textField.innerHTML = responseBank.get(key) + " " + value;
}

function updateResponseNoValue(textField, key){
	const responseBank = bvaTestTextBank.get("submit_response_text_options");
	textField.innerHTML = responseBank.get(key);
}

window.onload = init();