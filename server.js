var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Added these 2 but it didnt work
app.use(express.static(__dirname, '/public/assets/css/styles.css'));
app.use(express.static(__dirname, '/public/assets/js/index.js'));

require("./Develop/routes/htmlRoutes")(app);
require("./Develop/routes/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("LOCALHOST:"+PORT);
});