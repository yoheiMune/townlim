/**
 * Module dependencies.
 */

var express = require('express');

// ルーティング設定
/**
 * トップページ : /
    - index.jade
    - index.js
        - routes.index
 * aboutページ : /about
    - about.jade
    - about.js
        - about.index
 * 各街の情報一覧ページ: /towns/:town
    - town.jade
    - towns.js
      - towns.town
 * ポスト作成ページ: /create
    - create.jade
    - create.js
      - create.index
 * 個別ポストページ: /posts/ID
    - posts.jade
    - posts.js
      - posts.post
 * 個別ユーザーページ: /users/ID
    - user.jade
      - users.js
        - users.user
  */
var
  routes = require('./routes'),
  about  = require('./routes/about'),
  towns  = require('./routes/towns'),
  create = require('./routes/create'),
  posts  = require('./routes/posts'),
  users  = require('./routes/users')
;


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
