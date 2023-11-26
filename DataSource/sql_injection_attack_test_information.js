export const sqlInjectionAttackTestTextBank = new Map();

function buildSqlInjectionAttackBank(){
	sqlInjectionAttackTestTextBank.set("page_title", "SQL Injection Attack Demonstration");
	sqlInjectionAttackTestTextBank.set("sql_injection_list_header", "SQL Injection Attack Gallery");

	sqlInjectionAttackTestTextBank.set("sql_attack_insert", "This attack will attempt to insert a new customer with $1,000,000 in our fictional database.");
	sqlInjectionAttackTestTextBank.set("sql_attack_insert_content", "Hello; INSERT INTO Customers (FirstName, LastName, Savings)\nVALUES ('John', 'Smith', 100000);");

	sqlInjectionAttackTestTextBank.set("sql_attack_read", "This attack will attempt to read all of the customers information.");
	sqlInjectionAttackTestTextBank.set("sql_attack_read_content", "Hello; SELECT * FROM Customers;");

	sqlInjectionAttackTestTextBank.set("sql_attack_update", "This attack will attempt to set all customers savings to $0.");
	sqlInjectionAttackTestTextBank.set("sql_attack_update_content", "Hello; UPDATE Customers\nSET savings = 0;");

	sqlInjectionAttackTestTextBank.set("sql_attack_delete", "This attack will attempt to delete all customers with the first name John.");
	sqlInjectionAttackTestTextBank.set("sql_attack_delete_content", "Hello; DELETE FROM Customers WHERE FirstName = 'John';");

	sqlInjectionAttackTestTextBank.set("sql_attack_drop_db", "This attack will attempt to delete the entire database.");
	sqlInjectionAttackTestTextBank.set("sql_attack_drop_db_content", "Goodbye; DROP DATABASE CustomerDatabase;")

	sqlInjectionAttackTestTextBank.set("output_standby", "Awaiting output...");
	sqlInjectionAttackTestTextBank.set("output_read", "READ attack caught and stopped.");
	sqlInjectionAttackTestTextBank.set("output_insert", "INSERT attack caught and stopped.");
	sqlInjectionAttackTestTextBank.set("output_update", "UPDATE attack caught and stopped.");
	sqlInjectionAttackTestTextBank.set("output_delete", "DELETE attack caught and stopped.");
	sqlInjectionAttackTestTextBank.set("output_drop", "DB DROP attack caught and stopped.");
	
	sqlInjectionAttackTestTextBank.set("button_text", "Attack");
	sqlInjectionAttackTestTextBank.set("fictional_database_info", "This is a fictional database with customers and their savings, all attacks are prevented by\nPrepared Statements (with Parameterized Queries)");
}

buildSqlInjectionAttackBank();