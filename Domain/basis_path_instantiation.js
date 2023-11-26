import {basisPathTestTextBank} from '../DataSource/basis_path_test_information.js'
import {GO_BACK_BUTTON_LINK, GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';

function init(){
	initializeTextFields();
	initalizeAllPageListeners();
}

function initializeTextFields(){
	var page_title = document.getElementById("page_title");

	var if_else_statement = document.getElementById("if_else_statement");
	var statement_message = document.getElementById("statement_message");

	var submit_button = document.getElementById("submit_button");
	var result_message = document.getElementById("result_message");	

	page_title.innerHTML = basisPathTestTextBank.get("page_title");
	
	if_else_statement.innerHTML = basisPathTestTextBank.get("if_else_statement");
	statement_message.innerHTML = basisPathTestTextBank.get("statement_message");

	submit_button.innerHTML = basisPathTestTextBank.get("submit_button_text");
	result_message.innerHTML = basisPathTestTextBank.get("result_message").get("standby");

	var button_go_back = document.getElementById("button_go_back");
	button_go_back.innerHTML = GO_BACK_BUTTON_TEXT;
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
		result_message.innerHTML = basisPathTestTextBank.get("result_message").get("yes_entered");
	} else {
		console.log(0);
		result_message.innerHTML = basisPathTestTextBank.get("result_message").get("else_entered");
	}
}

window.onload = init();