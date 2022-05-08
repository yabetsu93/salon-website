var express = require("express"),
    path = require("path"),
    app = express();

// render port number to 8085 temporary
const port = 8085;

// static path
app.use(express.static('public'));
app.use(express.static('views'))

// set the engine for the html and define the 
// views rendered to html
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', 'views');

// render the application html
app.get('/', function(req, res) {
    res.render("components/index.html")
});

// Render application with port number
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Node is listening to http = ${host} with port ${port}`)
});