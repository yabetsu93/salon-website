var express = require("express"),
    path = require("path"),
    app = express();

app.use(express.static(path.join(__dirname, "src")));


app.get('/', function(req, res) {
    res.render("components/home/index.html")
});

var server = app.listen(8085, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Node is listening to http = ${host} with port ${port}`)
});