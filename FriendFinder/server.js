var express = require("express");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//   server to listen
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
});