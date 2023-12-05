import {GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';
export const bvaTestTextBank = new Map();

function buildBvaTextBank(){
	var initialSavingsAmount = 1000;

	bvaTestTextBank.set("button_go_back", GO_BACK_BUTTON_TEXT);
	bvaTestTextBank.set("page_title", "Boundary Value Analysis Demonstration");
	bvaTestTextBank.set("statement_message", "Enter an INTEGER value from [0, 100]:");
	bvaTestTextBank.set("submit_button", "Submit Integer Value");
	bvaTestTextBank.set("submit_response_text", "Waiting for a submission...");
	bvaTestTextBank.set("submit_response_text_options", buildSubmitResponseBank());
}

function buildSubmitResponseBank(){
	const submitResponseMap = new Map();

	// Could make limits unable to be breached by setting input min and max in html element
	// But we will make it possible to show how we've tested for it!

	submitResponseMap.set("negative_infinity", "Negative absurd amount caught:");
	submitResponseMap.set("positive_infinity", "Positive absurd amount caught:");
	submitResponseMap.set("exact_value", "Exact valid amount detected:");
	submitResponseMap.set("standard_value_in_range", "Acceptable normal entry in range detected:");
	submitResponseMap.set("standard_value_out_of_range", "Invalid non-absurd entry caught:")
	submitResponseMap.set("one_off_value_accepted", "Just inside range case detected:");
	submitResponseMap.set("one_off_value_rejected", "Just outside range case caught:");

	// Invalid Type is Caught by setting input type to number, still good to have if this can't be an option!
	submitResponseMap.set("invalid_type", "Invalid data type entered. Must be a number with type INTEGER.");

	submitResponseMap.set("numeric_non_integer", "We are only accepting full number integers.");

	return submitResponseMap;
}

buildBvaTextBank();