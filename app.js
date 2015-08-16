/**
 * Module dependencies.
 */

var express = require('express');


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


// ルーティング設定
/**
 * トップページ : /
    - index.js
        - routes.index
    - index.jade
 * aboutページ : /about
    - about.js
        - about.index
    - about.jade
 * 各街の情報一覧ページ: /towns/:town
    - towns.js
      - towns.town
    - town.jade
 * ポスト作成ページ: /create
    - create.js
      - create.index
    - create.jade
 * 個別ポストページ: /posts/ID
    - posts.js
      - posts.post
    - posts.jade
 * 個別ユーザーページ: /users/ID
      - users.js
        - users.user
    - user.jade
  */
var
  routes = require('./routes'),
  about  = require('./routes/about'),
  towns  = require('./routes/towns'),
  create = require('./routes/create'),
  posts  = require('./routes/posts'),
  users  = require('./routes/users')
;

app.get('/', routes.index);
app.get('/about', about.index);
app.get('/towns', towns.index);
app.get('/towns/:town', towns.town);
app.post('/create', create.index);
app.get('/posts/:postId', posts.post);
app.get('/users/:userId', users.user);


// サーバーの起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
