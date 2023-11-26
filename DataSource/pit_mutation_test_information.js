export const pitMutationTestTextBank = new Map();

function buildPitMutationTextBank(){

	pitMutationTestTextBank.set("page-title", "PIT Mutation Demonstration");
	pitMutationTestTextBank.set("page-message", "PIT Mutation Testing is a technique where the code is " 
		+ "purposely changed at runtime to ensure any unplanned changes are immediately caught by tests.\n"
		+ "Observe this idea in action: we always want this value to be added to by a positive number.");
	pitMutationTestTextBank.set("pit-statement", "var firstVal = 3;\nvar secondVal = 4;\n var finalVal = firstVal + secondVal;\n(finalVal == 7);");
	pitMutationTestTextBank.set("submit-button-text", "Run PIT Mutation Test");
	pitMutationTestTextBank.set("submit-response-text", "PIT Mutation Test ran.");
	pitMutationTestTextBank.set("end-observation", "Case caught. Our tests identified when a bad case of subtraction occured.");
	pitMutationTestTextBank.set("end-disclaimer", "This is a simulated small example. The real technique is much more in-depth. A good use of PIT Mutation testing is to avoid freak accidents (like the sun's rays flipping bits in space equipment).")
}

buildPitMutationTextBank();