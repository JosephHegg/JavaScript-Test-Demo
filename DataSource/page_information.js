export const GO_BACK_BUTTON_LINK = "./mainPage.html";
export const GO_BACK_BUTTON_TEXT = "Go Back to Main Page!";
export const pageInfoBank = new Map();
const GITHUB_LINK = "GitHub";

function buildPageInfoBank() {
	pageInfoBank.set("page_title", "JavaScript Interview Demo Test Suite");
	pageInfoBank.set("github_message", "The source code for everything can be found here: " + GITHUB_LINK);
}


function buildInformationMap(){
	for(var i = 0; i < buttonKeyList.length; i++){
		var currKey = buttonKeyList[i];
		buttonInformationMap.set(currKey, buildInnerMap(i));
	}
};

function buildInnerMap(currKeyIndex){
	let innerMap = new Map();

	innerMap.set(innerMapKeys[0], buttonTextList[currKeyIndex]);
	innerMap.set(innerMapKeys[1], buttonLinkList[currKeyIndex]);

	return innerMap;
	
	/*
	would be great if i could work this out
	for(const currKey of innerMapKeys){
		var appropriateValue = Object.keys({currKey})
	} */
};

export const buttonInformationMap = new Map();
const buttonKeyList = [
	"button_ascii",
	"button_basisPath",
	"button_bva",
	"button_pit_mutation",
	"button_sql_injection_attack"
];
const buttonTextList = [
	"ASCII Entry Workaround",
	"Basis Path Coverage",
	"Boundary Value Analysis",
	"PIT Mutation Testing",
	"SQL Injection Attack"
];
const buttonLinkList = [
	"ascii_test_display.html",
	"basis_path_test_display.html",
	"bva_test_display.html",
	"pit_mutation_test_display.html",
	"sql_injection_attack_test_display.html"
];
const innerMapKeys = [
	"buttonText",
	"buttonLink"
];

buildInformationMap();
buildPageInfoBank();