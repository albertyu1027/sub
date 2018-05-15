const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//if the database doesnt exist, mongod will create it.
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/subscribe";
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to Mongo DB
mongoose.connect(MONGODB_URI);

mongoose.connection.once('open', function(){
	console.log("Successfully Connected to MongoDB");
}).on("error", function(error){
	console.log("Did not connect to MongoDB".error)
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
