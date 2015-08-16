/**
 * データベースの基本設定
 */
var mongodb = require('mongodb');
var database = exports;


// *******************************************************

/**
 * データベース基本クラス
 */
var Database = function () {};


/**
 * データベースを開く
 */
Database.prototype._open = function (database, callback) {
  var self = this;

  // 既存データベースオブジェクトの確認
  if (this._db && !this._db.close) {
    callback(null, this._db);
    return;
  }

  // 接続設定
  // var server = new mongodb.Server('127.0.0.1', 27017, {});
  var server = new mongodb.Server('mongodb://heroku_35wzrs0m:equd19g5los28301uj34hvgm6e@ds031903.mongolab.com', '31903/heroku_35wzrs0m', {});
  var db_connector = new mongodb.Db(database, server, {safe: true});

  // データベースを開く
  db_connector.open(function (err, db) {
    if (err) {
      callback(err);
      return;
    }
    self._db = db; // データベースオブジェクト
    callback(null, db);
  });
};


/**
 * データベースを閉じる
 */
Database.prototype.close = function () {
  if (this._db) {
    this._db.close();
    delete this._db;
  }
};


/**
 * コレクションの取得
 */
Database.prototype._getCollection = function (collectionName, callback) {
  this._open('townlim', function (err, db) {
    if (err) {
      callback(err);
      return;
    }
    db.createCollection(collectionName, callback);
  });
};


// *******************************************************


/**
 * Postsクラスの生成
 */
var Posts = function () {};
Posts.prototype = new Database();


/**
 * Postsクラスのインスタンス
 */
database.getPosts = function () {
  return new Posts();
};


/**
 * 町ごとの一覧表示
 */
Posts.prototype.getLatest = function (townName, start, end, callback) {
  // postsコレクションの取得
  this._getCollection('posts', function (err, collection) {
    if (err) {
      callback(err);
      return;
    }
    var cursor = collection.find({post_town: townName});
    cursor.sort({post_date: -1}).limit(end - start).skip(start);
    cursor.toArray(callback);
  });
};


/**
 * ポスト単体の表示
 */
Posts.prototype.findById = function () {

};


/**
 * ポストの追加
 */
Posts.prototype.insert = function () {

};


/**
 * ポストの削除
 */
Posts.prototype.destroy = function () {

};


// *******************************************************


/**
 * Usersクラスの生成
 */
var Users = function () {};
Users.prototype = new Database();


/**
 * Postsクラスのインスタンス
 */
database.getUsers = function () {

};


/**
 * 固有ユーザーの表示
 */
Users.prototype.findById = function () {

};


/**
 * ユーザーの追加
 */
Users.prototype.insert = function () {

};


/**
 * ユーザーの削除
 */
Users.prototype.destroy = function () {

};
