import {GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';
export const pitMutationTestTextBank = new Map();

function buildPitMutationTextBank(){

	pitMutationTestTextBank.set("button_go_back", GO_BACK_BUTTON_TEXT);
	pitMutationTestTextBank.set("page_title", "PIT Mutation Demonstration");
	pitMutationTestTextBank.set("page_message", "PIT Mutation Testing is a technique where the code is " 
		+ "purposely changed at runtime.\nThis is to ensure any unplanned changes are immediately caught by tests or the program crashes.\n"
		+ "Observe this idea in action: we always want [ (firstVal + secondVal) == 7 ]"
		+ "\n\nIF OUR PROGRAM DOES NOT UNDERSTAND A MUTATION HAS HAPPENED...\nTHEN THERE IS A PROBLEM!!!");
	pitMutationTestTextBank.set("pit_statement", "var firstVal = 3;\nvar secondVal = 4;\nvar finalVal = firstVal + secondVal;\nassertTrue(finalVal == 7));");
	pitMutationTestTextBank.set("submit_button", "Run PIT Mutation Test");
	pitMutationTestTextBank.set("submit_response_text", "PIT Mutation Test ran.");
	pitMutationTestTextBank.set("end_observation", "Awaiting PIT Mutation Test Run...");
	pitMutationTestTextBank.set("end_observation_done", "Cases caught.\nOur tests identified when a bad case of subtraction occured and an if conditional was changed.\nCheck the console for output.");
	pitMutationTestTextBank.set("end_disclaimer", "This is a simulated small example. The real technique is much more in-depth. A good use of PIT Mutation testing is to detect and account for freak accidents.\nA real-world example of this is the radiation from the sun's rays flipping bits in space equipment!");
}

buildPitMutationTextBank();