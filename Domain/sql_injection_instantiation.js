import {sqlInjectionAttackTestTextBank} from '../DataSource/sql_injection_attack_test_information.js'
import {handleDefaultTextFieldAssignments} from './shared_function_handler.js';
import {GO_BACK_BUTTON_LINK} from '../DataSource/page_information.js';

function init(){
	handleDefaultTextFieldAssignments(sqlInjectionAttackTestTextBank);
	initalizeAllPageListeners();
}

function runInsertAttack(){
	var sql_attack_insert_content = sqlInjectionAttackTestTextBank.get("sql_attack_insert_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting)\nWHERE Customer.ID = userID\nVALUES (\n" + sql_attack_insert_content + "\n);";

	// run query in back end DB - if real case

	var insert_attack_button = document.getElementById("insert_attack_button");
	var output_insert = document.getElementById("output_insert");

	output_insert.innerHTML = sqlInjectionAttackTestTextBank.get("output_insert_caught");

	insert_attack_button.setAttribute("disabled", "disabled");

	logAttack("Insert", query);
}

function runReadAttack(){
	var sql_attack_read_content = sqlInjectionAttackTestTextBank.get("sql_attack_read_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting)\nWHERE Customer.ID = userID\nVALUES (\n" + sql_attack_read_content + "\n);";

	// run query in back end DB - if real case

	var read_attack_button = document.getElementById("read_attack_button");
	var output_read = document.getElementById("output_read");

	output_read.innerHTML = sqlInjectionAttackTestTextBank.get("output_read_caught");

	read_attack_button.setAttribute("disabled", "disabled");

	logAttack("Read", query);
}

function runUpdateAttack(){
	var sql_attack_update_content = sqlInjectionAttackTestTextBank.get("sql_attack_update_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting)\nWHERE Customer.ID = userID\nVALUES (\n" + sql_attack_update_content + "\n);";

	// run query in back end DB - if real case

	var update_attack_button = document.getElementById("update_attack_button");
	var output_update = document.getElementById("output_update");

	output_update.innerHTML = sqlInjectionAttackTestTextBank.get("output_update_caught");

	update_attack_button.setAttribute("disabled", "disabled");

	logAttack("Update", query);
}

function runDeleteAttack(){
	var sql_attack_delete_content = sqlInjectionAttackTestTextBank.get("sql_attack_delete_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting)\nWHERE Customer.ID = userID\nVALUES (\n" + sql_attack_delete_content + "\n);";

	// run query in back end DB - if real case

	var delete_attack_button = document.getElementById("delete_attack_button");
	var output_delete = document.getElementById("output_delete");

	output_delete.innerHTML = sqlInjectionAttackTestTextBank.get("output_delete_caught");

	delete_attack_button.setAttribute("disabled", "disabled");

	logAttack("Delete", query);
}

function runDropAttack(){
	var sql_attack_drop_db_content = sqlInjectionAttackTestTextBank.get("sql_attack_drop_db_content");

	// any attacks are inserted into an already structured query
	// in this case their greeting is given the text entry of the attack, but the attack is not conducted

	var query = "INSERT INTO Customers (Greeting)\nWHERE Customer.ID = userID\nVALUES (\n" + sql_attack_drop_db_content + "\n);";

	// run query in back end DB - if real case

	var drop_db_attack_button = document.getElementById("drop_attack_button");
	var output_drop_db = document.getElementById("output_drop");

	output_drop_db.innerHTML = sqlInjectionAttackTestTextBank.get("output_drop_caught");

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
	console.log("\n" + type + "Attack:\n" + query);
}

window.onload = init();