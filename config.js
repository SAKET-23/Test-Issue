// Configuration file
// Sensitive information is loaded from environment variables
// IMPORTANT: Set these environment variables before running the application:
// - API_KEY: Your Stripe API key
// - DATABASE_URL: Your MongoDB connection string

const config = {
  apiKey: process.env.API_KEY,
  databaseUrl: process.env.DATABASE_URL
};

// Validate that environment variables are set
if (!config.apiKey) {
  throw new Error('API_KEY environment variable is not set. Please set it to your Stripe API key.');
}

if (!config.databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set. Please set it to your MongoDB connection string.');
}

// Validate API key format (basic check for Stripe-like format)
if (!/^sk_live_[a-zA-Z0-9]{24,}$/.test(config.apiKey)) {
  throw new Error('API_KEY environment variable does not appear to be a valid Stripe live API key.');
}

// Validate database URL format (basic check for MongoDB-like format)
if (!/^mongodb:\/\/.+@.+\/.+$/.test(config.databaseUrl)) {
  throw new Error('DATABASE_URL environment variable does not appear to be a valid MongoDB connection string.');
}

module.exports = config;
