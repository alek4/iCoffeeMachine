const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static('public'));

app.route('/')
    
    .get(function(req, res) {
        res.send("test");
        console.log("test");
    });

app.listen(3000, function() {
    console.log('Server has started on port 3000 successfully');
});