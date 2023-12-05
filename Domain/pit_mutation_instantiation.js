import {pitMutationTestTextBank} from '../DataSource/pit_mutation_test_information.js';
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';
import {GO_BACK_BUTTON_LINK} from '../DataSource/page_information.js';

function init(){
	handleDefaultTextFieldAssignments(pitMutationTestTextBank);
	initializeAllPageListeners();
}

function initializeAllPageListeners(){
	var submit_button = document.getElementById("submit_button");
	var button_go_back = document.getElementById("button_go_back");


	submit_button.addEventListener("click", function() {
		runPitMutationTest();
		submit_button.innerHTML = pitMutationTestTextBank.get("submit_response_text");
		submit_button.setAttribute("disabled", "disabled");

		var end_observation = document.getElementById("end_observation");
		end_observation.innerHTML = pitMutationTestTextBank.get("end_observation_done");
	});

	button_go_back.addEventListener("click", function() {
		window.location.href = GO_BACK_BUTTON_LINK;
	});

}

function runPitMutationTest(){
	var firstVal = 3;
	var secondVal = 4;

	// Expected Outcome
	var finalVal = firstVal + secondVal;

	// PIT Mutation Simulation of switching + to a -
	finalVal = firstVal - secondVal;

	if(finalVal == 7){
		console.log("This should not be seen!");
	} else {
		if(finalVal == -1){
			console.log("\nMutation: [finalVal = firstVal - secondVal]\nThis would be a successful catch of the mutation. The program SHOULD crash or handle when a mutation like this occurs.");
		} else {
			console.log("FAIL: We didn't account for a PIT Mutation!");
		}
	}

	// Revert Operator Mutation

	finalVal = firstVal + secondVal;

	// Mutation on IF Conditional

	if(finalVal != 7){
		console.log("This should not be seen!");
	} else {
		if(finalVal == 7){
			console.log("\nMutation: [finalVal =! 7]\nThis would be a successful catch of the mutation. The program SHOULD crash or handle when a mutation like this occurs.");
		} else {
			console.log("FAIL: We didn't account for a PIT Mutation!");
		}
	}

	console.log("Simulated mutations ran successfully.");
}

window.onload = init();