var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')

var indexRouter = require('./routes/index');
var rosterRouter = require('./routes/roster');
var emailRouter = require('./routes/email');
var studentRouter = require('./routes/student');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/roster', rosterRouter)
app.use('/email', emailRouter);
app.use('/student', studentRouter);

app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})
