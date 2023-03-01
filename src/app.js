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

// render the application html for the homepage
app.get('/', function(req, res) {
    res.render("components/index.html")
});

// render the application html for the services
app.get('/services', function(req, res) {
    res.render("components/services.html")
})

// render the application html for the contact 
app.get('/contact', function(req, res) {
    res.render("components/contact.html")
})

// Render application with port number
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Node is listening to http = ${host} with port ${port}`)
});