import {GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';
export const basisPathTestTextBank = new Map();

var if_else_string = "if (entryValue == \"yes\"){\n\tconsole.log(1);\n} else {\n\tconsole.log(0);\n}";

function buildBasisPathTextBank(){

	basisPathTestTextBank.set("button_go_back", GO_BACK_BUTTON_TEXT);
	basisPathTestTextBank.set("page_title", "Basis Path Coverage Demonstration");
	basisPathTestTextBank.set("if_else_statement", if_else_string);
	basisPathTestTextBank.set("statement_message", "Enter a value to see our tests catch it.");
	basisPathTestTextBank.set("submit_button", "Submit Entry");
	basisPathTestTextBank.set("result_message", "Waiting for a submission...");
	basisPathTestTextBank.set("result_message_options", buildSubmitResponseBank());
}

function buildSubmitResponseBank(){
	const submitResponseMap = new Map();

	submitResponseMap.set("yes_entered", "if conditional path made: observe console for output of test.");
	submitResponseMap.set("else_entered", "else conditional path made: observe console for output of test");

	return submitResponseMap;
}

buildBasisPathTextBank();