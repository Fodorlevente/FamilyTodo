var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var tasks = require("./routes/tasks");

//const cors = require("cors");

var port = process.env.PORT || 5000;

var app = express();
/*
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
*/
//View Engine
app.set("views", path.join(__dirname,"../" ,"react-ui/public"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname,"../","react-ui")));
app.use(express.static(path.join(__dirname,"../","react-ui/src")));
app.use(express.static(path.join(__dirname,"../")));
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", tasks);

app.listen(port, function() {
  console.log("Server started on port " + port);
});