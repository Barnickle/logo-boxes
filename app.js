const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressProxy = require('express-http-proxy');

const index = require('./routes/index');
const apps = require('./routes/apps');
const data = require('./data/data');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add proxys
data.entries.forEach(function (entry) {
  const proxy = entry.proxy
  if (proxy) {
    app.use(proxy.path, expressProxy(proxy.website, {
      userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
        return proxyResData.toString('utf8').replace('<head>', `<head><base href="${proxy.website}" />`);
      }
    }));
  }
});

app.use('/', index);
app.use('/apps', apps);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
