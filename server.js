var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('welcome');
});
app.get('/auth/google', function (req, res) {
    res.render('login');
});
app.get('/logged', function (req, res) {
    res.render('logged', {
        user: {
            name: req.query.login,
            email: req.query.email
        }
    });
});

app.listen(5000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you demand');
});