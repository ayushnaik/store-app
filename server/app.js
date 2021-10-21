var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var Store = require('./models/Store');

mongoose.connect('mongodb://localhost/store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to mongodb successful')).catch((err) => console.error(err));

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    Store.find(function(err, store) {
        if (err)
            return next(err);



        res.json(store);
    });
});

app.get('/store', (req, res) => {
    Store.find(function(err, store) {
        if (err) {
            return next(err);

        }
        res.json(store);
    });
});


app.get('/category/:category', function(req, res, next) {
    Store.find({
        category: req.params.category
    }, function(err, store) {
        if (err)
            return next(err);



        res.json(store);
    });
});

app.post('/uploads', function(req, res, next) {
    Store.create(req.body, function(err, store) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(store);
    });
});

app.listen(4000, () => {
    console.log("Server is running");
});

module.exports = app;