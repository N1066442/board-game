var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------

var food_list = require('./routes/food_list');
var food_add = require('./routes/food_add');
var food_add_form = require('./routes/food_add_form');
var food_remove = require('./routes/food_remove');
var food_remove_form = require('./routes/food_remove_form');
var stafflist = require('./routes/stafflist');
var staffadd = require('./routes/staffadd');
var staffaddform = require('./routes/staffaddform');
var staffremoveform = require('./routes/staffremoveform');
var staffremove = require('./routes/staffremove');
var staffupdateno = require('./routes/staffupdateno');
var staffupdateform = require('./routes/staffupdateform');
var staffupdate = require('./routes/staffupdate');
var storelist = require('./routes/storelist');
var storeadd = require('./routes/storeadd');
var storeaddform = require('./routes/storeaddform');
var storeremove = require('./routes/storeremove');
var storeremoveform = require('./routes/storeremoveform');
var orderlist = require('./routes/orderlist');
var checkoutlist = require('./routes/checkoutlist');



//------------------------------------------------------------


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------

app.use('/food/list', food_list);
app.use('/food/add', food_add);
app.use('/food/add/form', food_add_form);
app.use('/food/remove', food_remove);
app.use('/food/remove/form', food_remove_form);
app.use('/staff/list', stafflist);
app.use('/staff/add', staffadd);
app.use('/staff/add/form', staffaddform);
app.use('/store/list', storelist);
app.use('/store/add', storeadd);
app.use('/store/add/form', storeaddform);
app.use('/store/remove', storeremove);
app.use('/store/remove/form', storeremoveform);
app.use('/staff/remove/form', staffremoveform);
app.use('/staff/remove', staffremove)
app.use('/staff/update/no', staffupdateno);
app.use('/staff/update/form', staffupdateform);
app.use('/staff/update', staffupdate);
app.use('/order/list', orderlist);
app.use('/checkout/list', checkoutlist);


//-----------------------------------------

//----------------------------------------
// 可由外部直接取用資料夾
//----------------------------------------
app.use(express.static('public/picture'));
//-----------------------------------------



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;





