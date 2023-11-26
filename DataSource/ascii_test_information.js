export const asciiTestTextBank = new Map();

function buildAsciiBank(){
	var initialSavingsAmount = 1000;

	asciiTestTextBank.set("page_title", "ASCII Entry Demonstration");
	asciiTestTextBank.set("savings_text", "Savings");
	asciiTestTextBank.set("savings_amount_text", initialSavingsAmount);
	asciiTestTextBank.set("payment_value_prompt_naive", "Unwise Submission Check:");
	asciiTestTextBank.set("payment_value_prompt_check_noascii", "Submission Check Without ASCII Check:");
	asciiTestTextBank.set("payment_value_prompt_check_ascii", "Submission Check With ASCII Check:");
	asciiTestTextBank.set("submit_button_text", "Submit Payment");
	asciiTestTextBank.set("payment_response_text", buildPaymentResponseBank());
}

function buildPaymentResponseBank(){
	const var paymentResponseMap = new Map();

	// could make a finite state machine but that seems a bit much for this example
	// better for real world uses

	paymentResponseMap.set("standby", "Waiting for a payment...");
	paymentResponseMap.set("success", "Payment processed successfully.");
	paymentResponseMap.set("failure", "Payment unable to be processed.");
	paymentResponseMap.set("refund_ascii_missed", "Looks like I forgot to test for refund ascii entries!");
	paymentResponseMap.set("refund_ascii_caught", "I tested for ascii entries and caught the refund attempt!");
}

buildAsciiBank();