const express = require("express");

// to use the express module, set it equal to a const variable. Usually, it is called "app"
const app = express();

// If someone goes to our home route, it will respond with hello
app.get("/", function(req, res) {
    res.send("hello");
});

// if someone goes to our contact route, it will respond with "Contact me at yeec327@gmail.com"
app.get("/contact", function(req, res) {
    res.send("Contact me at yeec327@gmail.com");
});

// create a new route for an About section
app.get("/about", function(req, res) {
    res.send("My name is Cameron Yee and I am a full-stack software engineer");
});


// Use one if its methods called "listen". Tell it to listen on a specific port for any HTTP request that is sent to this server.
app.listen(3000, function() {
    console.log("Server is running!!!!!");
});