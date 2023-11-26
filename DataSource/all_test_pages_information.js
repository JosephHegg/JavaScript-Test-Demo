export const asciiTestTextBank = new Map();
export const basisPathTestTextBank = new Map();
export const bvaTestTextBank = new Map();
export const pitMutationTestTextBank = new Map(); 
export const securityDataTestTextBank = new Map();
export const sqlAttackTestTextBank = new Map();

function buildTextBanks(){
	buildAsciiTextBank();
	buildBasisPathTextBank();
	buildBvaTextBank();
	buildPitMutationTextBank();
	buildSecurityDataTextBank();
	buildSqlAttackTextBank();
}

function buildAsciiBank(){
	var initialSavingsAmount = 1000;

	asciiTestTextBank.set("savings-text", "Savings");
	asciiTestTextBank.set("savings-amount-text", initialSavingsAmount);
	asciiTestTextBank.set("payment-value-prompt-text", "Enter a payment value:");
	asciiTestTextBank.set("submit-button-text", "Submit Payment");
	asciiTestTextBank.set("payment-response-text", "Waiting for a payment...");
}