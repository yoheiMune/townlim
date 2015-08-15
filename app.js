/**
 * Module dependencies.
 */

var express = require('express');

// ルーティング設定
var routes = require('./routes');
var towns = require('./routes/towns');
// var user = require('./routes/user');

// モジュールの読込み
var http = require('http');
var path = require('path');

var app = express();

// 環境設定
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ミドルウェアの読込み
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// エラーハンドリング用ミドルウェア
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ルーティング
app.get('/', routes.index);
app.get('/towns', towns.index);
app.get('/towns/:town', towns.town);
// app.get('/users', user.list);


// サーバーの起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
