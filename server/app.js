const cors = require('cors');
const mongoose = require('mongoose');
const createError = require('http-errors')
const express = require('express');
const logger = require('morgan')

//import indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

//app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});


const CONNECTION_URL = '';
const PORT = process.env.PORT|| 5000;

app.listen(PORT,(() => console.log(`Server Running on Port: http://localhost:${PORT}`)));

/*mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));*/

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
