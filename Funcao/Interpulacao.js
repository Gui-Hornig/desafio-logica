// Interpulacao de string

createStringConnection("db_products", "Guilherme", "222");

function createStringConnection(databaseName, user, pass) {
  console.log(
    `connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`
  );
}
