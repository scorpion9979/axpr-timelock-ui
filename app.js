const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

setInterval(function() {
    http.get(`http://${process.env.HEROKU_NAME}.herokuapp.com`);
    console.log("Prevented app from sleeping");
}, 300000);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 3000);