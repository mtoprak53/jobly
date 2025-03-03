
const db = require("../db");
const fs = require('fs');

// Read the SQL script file
const sqlScript = fs.readFileSync('jobly-auto.sql', 'utf8');

// Function to execute SQL script
async function runSqlScript() {
  try {
    // Execute the SQL script
    await db.query(sqlScript);
    console.log('SQL script executed successfully.');
  } catch (error) {
    console.error('Error executing SQL script:', error.message);
  } finally {
    // Disconnect from the PostgreSQL server
    await db.end();
  }
}

// Run the function
runSqlScript();
