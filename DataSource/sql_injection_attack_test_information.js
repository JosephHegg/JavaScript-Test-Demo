import {GO_BACK_BUTTON_TEXT} from '../DataSource/page_information.js';
export const sqlInjectionAttackTestTextBank = new Map();

function buildSqlInjectionAttackBank(){

	sqlInjectionAttackTestTextBank.set("button_go_back", GO_BACK_BUTTON_TEXT);
	sqlInjectionAttackTestTextBank.set("page_title", "SQL Injection Attack Demonstration");
	sqlInjectionAttackTestTextBank.set("sql_injection_list_header", "SQL Injection Attack Gallery");

	sqlInjectionAttackTestTextBank.set("sql_attack_read", "This attack will attempt to read all of the customers information.");
	sqlInjectionAttackTestTextBank.set("sql_attack_read_content", "Hello;\nSELECT * FROM Customers;");

	sqlInjectionAttackTestTextBank.set("sql_attack_insert", "This attack will attempt to insert a new customer with $1,000,000 in our fictional database.");
	sqlInjectionAttackTestTextBank.set("sql_attack_insert_content", "Hello;\nINSERT INTO Customers (FirstName, LastName, Savings)\nVALUES ('John', 'Smith', 1000000);");

	sqlInjectionAttackTestTextBank.set("sql_attack_update", "This attack will attempt to set all customers savings to $0.");
	sqlInjectionAttackTestTextBank.set("sql_attack_update_content", "Hello;\nUPDATE Customers\nSET Customers.savings = 0;");

	sqlInjectionAttackTestTextBank.set("sql_attack_delete", "This attack will attempt to delete all customers with the first name John.");
	sqlInjectionAttackTestTextBank.set("sql_attack_delete_content", "Hello;\nDELETE FROM Customers\nWHERE Customers.FirstName = 'John';");

	sqlInjectionAttackTestTextBank.set("sql_attack_drop_db", "This attack will attempt to delete the entire database.");
	sqlInjectionAttackTestTextBank.set("sql_attack_drop_db_content", "Goodbye;\nDROP DATABASE CustomerDatabase;")

	sqlInjectionAttackTestTextBank.set("output_read", "Awaiting READ attack...");
	sqlInjectionAttackTestTextBank.set("output_insert", "Awaiting INSERT attack...");
	sqlInjectionAttackTestTextBank.set("output_update", "Awaiting UPDATE attack...");
	sqlInjectionAttackTestTextBank.set("output_delete", "Awaiting DELETE attack...");
	sqlInjectionAttackTestTextBank.set("output_drop", "Awaiting DROP attack...");
	
	sqlInjectionAttackTestTextBank.set("output_read_caught", "READ attack caught and mitigated.");
	sqlInjectionAttackTestTextBank.set("output_insert_caught", "INSERT attack caught and mitigated.");
	sqlInjectionAttackTestTextBank.set("output_update_caught", "UPDATE attack caught and mitigated.");
	sqlInjectionAttackTestTextBank.set("output_delete_caught", "DELETE attack caught and mitigated.");
	sqlInjectionAttackTestTextBank.set("output_drop_caught", "DB DROP attack caught and mitigated.");
	
	sqlInjectionAttackTestTextBank.set("read_attack_button", "Read Attack");
	sqlInjectionAttackTestTextBank.set("insert_attack_button", "Insert Attack");
	sqlInjectionAttackTestTextBank.set("update_attack_button", "Update Attack");
	sqlInjectionAttackTestTextBank.set("delete_attack_button", "Delete Attack");
	sqlInjectionAttackTestTextBank.set("drop_attack_button", "Drop Attack");

	sqlInjectionAttackTestTextBank.set("fictional_database_info", "This is a fictional database with customers and their savings.\nAll attacks are mitigated by Prepared Statements (with Parameterized Queries).\nCheck the console for the entire query.");
}

buildSqlInjectionAttackBank();