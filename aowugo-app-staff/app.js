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
var stafflist = require('./routes/stafflist');
var staffadd = require('./routes/staffadd');
var staffaddform = require('./routes/staffaddform');
var storelist = require('./routes/storelist');
var storeadd = require('./routes/storeadd');
var storeaddform = require('./routes/storeaddform');
var orderlist = require('./routes/orderlist');
var checkoutlist = require('./routes/checkoutlist');
var staffremoveform = require('./routes/staffremoveform');
var staffremove = require('./routes/staffremove');
var staffupdateno = require('./routes/staffupdateno');
var staffupdateform = require('./routes/staffupdateform');
var staffupdate = require('./routes/staffupdate');
var product_one = require('./routes/product_one');
var product_page = require('./routes/product_page');
var product_query_form = require('./routes/product_query_form');
var product_query = require('./routes/product_query');
var product_add_form = require('./routes/product_add_form');
var product_add = require('./routes/product_add');
var product_remove_form = require('./routes/product_remove_form');
var product_remove = require('./routes/product_remove');
var product_update_no = require('./routes/product_update_no');
var product_update_form = require('./routes/product_update_form');
var product_update = require('./routes/product_update');

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
app.use('/staff/list', stafflist);
app.use('/staff/add', staffadd);
app.use('/staff/add/form', staffaddform);
app.use('/store/list', storelist);
app.use('/store/add', storeadd);
app.use('/store/add/form', storeaddform);
app.use('/order/list', orderlist);
app.use('/checkout/list', checkoutlist);
app.use('/staff/remove/form', staffremoveform);
app.use('/staff/remove', staffremove)
app.use('/staff/update/no', staffupdateno);
app.use('/staff/update/form', staffupdateform);
app.use('/staff/update', staffupdate);
app.use('/product/one', product_one);
app.use('/product/page', product_page);
app.use('/product/query/form', product_query_form);
app.use('/product/query', product_query);
app.use('/product/add/form', product_add_form);
app.use('/product/add', product_add);
app.use('/product/remove/form', product_remove_form);
app.use('/product/remove', product_remove);
app.use('/product/update/no', product_update_no);
app.use('/product/update/form', product_update_form);
app.use('/product/update', product_update);

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





