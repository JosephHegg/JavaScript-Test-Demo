export const basisPathTestTextBank = new Map();

var if_else_string = "if (entryValue == \"yes\"){\n\tconsole.log(1);\n} else {\n\tconsole.log(0);\n}";

function buildBasisPathTextBank(){

	basisPathTestTextBank.set("page_title", "Basis Path Coverage Demonstration");
	basisPathTestTextBank.set("if_else_statement", if_else_string);
	basisPathTestTextBank.set("statement_message", "Enter a value to see our tests catch it.");
	basisPathTestTextBank.set("submit_button_text", "Submit Entry");
	basisPathTestTextBank.set("result_message", buildSubmitResponseBank());
}

function buildSubmitResponseBank(){
	const submitResponseMap = new Map();

	// could make a finite state machine but that seems a bit much for this example
	// better for real world uses

	submitResponseMap.set("standby", "Waiting for a submission...");
	submitResponseMap.set("yes_entered", "if conditional path made: observe console for output of test.");
	submitResponseMap.set("else_entered", "else conditional path made: observe console for output of test");

	return submitResponseMap;
}

buildBasisPathTextBank();