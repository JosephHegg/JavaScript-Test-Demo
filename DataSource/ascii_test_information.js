import {GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';
export const asciiTestTextBank = new Map();

function buildAsciiBank(){
	var initialSavingsAmount = 1000;

	asciiTestTextBank.set("button_go_back", GO_BACK_BUTTON_TEXT);
	asciiTestTextBank.set("page_title", "ASCII Entry Demonstration");
	asciiTestTextBank.set("savings_text_value", "Savings");
	asciiTestTextBank.set("savings_amount_text", "$" + initialSavingsAmount);
	asciiTestTextBank.set("payment_value_prompt_naive", "Unwise Submission Check:");
	asciiTestTextBank.set("payment_value_prompt_check_noascii", "Submission Check Without ASCII Check:");
	asciiTestTextBank.set("payment_value_prompt_check_ascii", "Submission Check With ASCII Check:");
	asciiTestTextBank.set("payment_submission_button_naive", "Submit Payment");
	asciiTestTextBank.set("payment_submission_button_decent", "Submit Payment");
	asciiTestTextBank.set("payment_submission_button_great", "Submit Payment");
	asciiTestTextBank.set("payment_response_text", "Waiting for a payment...");
	asciiTestTextBank.set("payment_response_text_options", buildPaymentResponseBank());
}

function buildPaymentResponseBank(){
	var paymentResponseMap = new Map();

	// could make a finite state machine but that seems a bit much for this example
	// better for real world uses

	paymentResponseMap.set("standby", "Waiting for a payment...");
	paymentResponseMap.set("success", "Payment processed successfully.");
	paymentResponseMap.set("failure", "Payment unable to be processed.");
	paymentResponseMap.set("refund_ascii_missed", "Looks like I forgot to test for refund ascii entries!");
	paymentResponseMap.set("refund_ascii_caught", "I tested for ascii entries and caught the refund attempt!");

	return paymentResponseMap;
}

buildAsciiBank();