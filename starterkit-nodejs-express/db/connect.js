const { connect } = require("surrealdb");

const connectDB = (url) => {
  return connect(url, {
    apiKey: "YOUR_API_KEY",
  });
};

module.exports = connectDB;
