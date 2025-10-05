// Configuration file
// Sensitive information is now loaded from environment variables
// Make sure to set these environment variables before running the application:
// - API_KEY: Your API key
// - DATABASE_URL: Your database connection string

const config = {
  apiKey: process.env.API_KEY,
  databaseUrl: process.env.DATABASE_URL
};

// Validate that environment variables are set
if (!config.apiKey) {
  console.error('API_KEY environment variable is not set');
  process.exit(1);
}

if (!config.databaseUrl) {
  console.error('DATABASE_URL environment variable is not set');
  process.exit(1);
}

module.exports = config;
