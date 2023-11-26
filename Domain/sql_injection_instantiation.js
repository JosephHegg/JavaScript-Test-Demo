import {sqlInjectionAttackTestTextBank} from '../DataSource/sql_injection_attack_test_information.js'
import {GO_BACK_BUTTON_LINK, GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';

function init(){
	initializeTextFields();
	initalizeAllPageListeners();
}

function initializeTextFields(){
	initializeInformativeMessages();
	initializeButtonText();
	initializeOutputMessages();
}

function initializeInformativeMessages(){
	var page_title = document.getElementById("page_title");
	var sql_injection_list_header = document.getElementById("sql_injection_list_header");

	var sql_attack_insert = document.getElementById("sql_attack_insert");
	var sql_attack_insert_content = document.getElementById("sql_attack_insert_content");

	var sql_attack_read = document.getElementById("sql_attack_read");
	var sql_attack_read_content = document.getElementById("sql_attack_read_content");

	var sql_attack_update = document.getElementById("sql_attack_update");
	var sql_attack_update_content = document.getElementById("sql_attack_update_content");

	var sql_attack_delete = document.getElementById("sql_attack_delete");
	var sql_attack_delete_content = document.getElementById("sql_attack_delete_content");

	var sql_attack_drop_db = document.getElementById("sql_attack_drop_db");
	var sql_attack_drop_db_content = document.getElementById("sql_attack_drop_db_content");

	var fictional_database_info = document.getElementById("fictional_database_info");

	// === //

	page_title.innerHTML = sqlInjectionAttackTestTextBank.get("page_title");
	sql_injection_list_header.innerHTML = sqlInjectionAttackTestTextBank.get("sql_injection_list_header");

	sql_attack_insert.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_insert");
	sql_attack_insert_content.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_insert_content");

	sql_attack_read.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_read");
	sql_attack_read_content.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_read_content");

	sql_attack_update.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_update");
	sql_attack_update_content.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_update_content");

	sql_attack_delete.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_delete");
	sql_attack_delete_content.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_delete_content");

	sql_attack_drop_db.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_drop_db");
	sql_attack_drop_db_content.innerHTML = sqlInjectionAttackTestTextBank.get("sql_attack_drop_db_content");
}

function initializeButtonText(){
	var button_list = [];
	button_list.push(document.getElementById("read_attack_button"));
	button_list.push(document.getElementById("insert_attack_button"));
	button_list.push(document.getElementById("update_attack_button"));
	button_list.push(document.getElementById("delete_attack_button"));
	button_list.push(document.getElementById("drop_attack_button"));

	var test_bank_button_string = sqlInjectionAttackTestTextBank.get("button_text");
	var button_go_back = document.getElementById("button_go_back");

	for (var button of button_list){
		button.innerHTML = test_bank_button_string;
	}

	button_go_back.innerHTML = GO_BACK_BUTTON_TEXT;
}

function initializeOutputMessages(){
	var output_list = [];
	output_list.push(document.getElementById("output_read"));
	output_list.push(document.getElementById("output_insert"));
	output_list.push(document.getElementById("output_update"));
	output_list.push(document.getElementById("output_delete"));
	output_list.push(document.getElementById("output_drop"));


	var fictional_database_info = document.getElementById("fictional_database_info");

	var output_standby = sqlInjectionAttackTestTextBank.get("output_standby");

	for (var output of output_list){
		output.innerHTML = output_standby;
	}

	fictional_database_info.innerHTML = sqlInjectionAttackTestTextBank.get("fictional_database_info");
}

function runInsertAttack(){
	var sql_attack_insert_content = sqlInjectionAttackTestTextBank.get("sql_attack_insert_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting) WHERE Customer.ID = userID VALUES (" + sql_attack_insert_content + ");";

	// run query in back end DB - if real case

	var insert_attack_button = document.getElementById("insert_attack_button");
	var output_insert = document.getElementById("output_insert");

	output_insert.innerHTML = sqlInjectionAttackTestTextBank.get("output_insert");

	insert_attack_button.setAttribute("disabled", "disabled");

	logAttack("Insert", query);
}

function runReadAttack(){
	var sql_attack_read_content = sqlInjectionAttackTestTextBank.get("sql_attack_read_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting) WHERE Customer.ID = userID VALUES (" + sql_attack_read_content + ");";

	// run query in back end DB - if real case

	var read_attack_button = document.getElementById("read_attack_button");
	var output_read = document.getElementById("output_read");

	output_read.innerHTML = sqlInjectionAttackTestTextBank.get("output_read");

	read_attack_button.setAttribute("disabled", "disabled");

	logAttack("Read", query);
}

function runUpdateAttack(){
	var sql_attack_update_content = sqlInjectionAttackTestTextBank.get("sql_attack_update_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting) WHERE Customer.ID = userID VALUES (" + sql_attack_update_content + ");";

	// run query in back end DB - if real case

	var update_attack_button = document.getElementById("update_attack_button");
	var output_update = document.getElementById("output_update");

	output_update.innerHTML = sqlInjectionAttackTestTextBank.get("output_update");

	update_attack_button.setAttribute("disabled", "disabled");

	logAttack("Update", query);
}

function runDeleteAttack(){
	var sql_attack_delete_content = sqlInjectionAttackTestTextBank.get("sql_attack_delete_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting) WHERE Customer.ID = userID VALUES (" + sql_attack_delete_content + ");";

	// run query in back end DB - if real case

	var delete_attack_button = document.getElementById("delete_attack_button");
	var output_delete = document.getElementById("output_delete");

	output_delete.innerHTML = sqlInjectionAttackTestTextBank.get("output_delete");

	delete_attack_button.setAttribute("disabled", "disabled");

	logAttack("Delete", query);
}

function runDropAttack(){
	var sql_attack_drop_db_content = sqlInjectionAttackTestTextBank.get("sql_attack_drop_db_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting) WHERE Customer.ID = userID VALUES (" + sql_attack_drop_db_content + ");";

	// run query in back end DB - if real case

	var drop_db_attack_button = document.getElementById("drop_attack_button");
	var output_drop_db = document.getElementById("output_drop");

	output_drop_db.innerHTML = sqlInjectionAttackTestTextBank.get("output_drop");

	drop_db_attack_button.setAttribute("disabled", "disabled");

	logAttack("Drop", query);
}

function initalizeAllPageListeners(){
	var read_attack_button = document.getElementById("read_attack_button");
	var insert_attack_button = document.getElementById("insert_attack_button");
	var update_attack_button = document.getElementById("update_attack_button");
	var delete_attack_button = document.getElementById("delete_attack_button");
	var drop_attack_button = document.getElementById("drop_attack_button");

	var button_go_back = document.getElementById("button_go_back");

	read_attack_button.addEventListener("click", function () {
		runReadAttack()
	});

	insert_attack_button.addEventListener("click", function () {
		runInsertAttack()
	});

	update_attack_button.addEventListener("click", function() {
		runUpdateAttack()
	});

	delete_attack_button.addEventListener("click", function() {
		runDeleteAttack()
	});

	drop_attack_button.addEventListener("click", function() {
		runDropAttack()
	});

	button_go_back.addEventListener("click", function() {
		window.location.href = GO_BACK_BUTTON_LINK;
	});
}

function logAttack(type, query){
	console.log(type + "Attack: " + query);
}

window.onload = init();