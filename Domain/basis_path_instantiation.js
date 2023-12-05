import {basisPathTestTextBank} from '../DataSource/basis_path_test_information.js'
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';
import {GO_BACK_BUTTON_LINK} from '../DataSource/page_information.js';


function init(){
	handleDefaultTextFieldAssignments(basisPathTestTextBank);
	initalizeAllPageListeners();
}

function initalizeAllPageListeners(){
	var submit_button = document.getElementById("submit_button");
	var button_go_back = document.getElementById("button_go_back");

	submit_button.addEventListener("click", function() {
		var value_submission = document.getElementById("value_submission");
		processStatementInput(value_submission.value);
	});

	button_go_back.addEventListener("click", function() {
		window.location.href = GO_BACK_BUTTON_LINK;
	});
}

function processStatementInput(value = ""){
	var result_message = document.getElementById("result_message");

	// could make 'yes' a CONST ACCEPTED_VALUE = 'yes' but this is fine for demo purposes
	
	if (value === 'yes'){
		console.log(1);
		result_message.innerHTML = basisPathTestTextBank.get("result_message_options").get("yes_entered");
	} else {
		console.log(0);
		result_message.innerHTML = basisPathTestTextBank.get("result_message_options").get("else_entered");
	}
}

window.onload = init();