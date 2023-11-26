export const bvaTestTextBank = new Map();

function buildBvaTextBank(){
	var initialSavingsAmount = 1000;

	bvaTestTextBank.set("page-title", "Boundary Value Analysis Demonstration");
	bvaTestTextBank.set("statement-message", "Enter a INTEGER value from [0, 100]:");
	bvaTestTextBank.set("statement-value-prompt-text", "Enter a value:");
	bvaTestTextBank.set("submit-button-text", "Submit Integer Value:");
	bvaTestTextBank.set("submit-response-text", buildSubmitResponseBank());
}

function buildSubmitResponseBank(){
	const var submitResponseMap = new Map();

	// could make a finite state machine but that seems a bit much for this example
	// better for real world uses

	submitResponseMap.set("standby", "Waiting for a submission...");
	submitResponseMap.set("negative-infinity", "Negative absurd amount caught.");
	submitResponseMap.set("positive-infinity", "Positive absurd amount caught.");
	submitResponseMap.set("exact-value", "Exact Amount Caught:");
	submitResponseMap.set("one-off-value", "Just outside range case caught.");
	submitResponseMap.set("invalid-type", "Invalid data type entered. Must be an integer.");
}

buildBvaTextBank();