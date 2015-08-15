/**
 * データベースの基本設定
 */
var mongoose = require('mongoose');
var database = exports;


// *******************************************************

/**
 * データベース基本クラス
 */
var Database = function () {};


/**
 * データベースを開く
 */
Database.prototype._open = function(database, callback){

};


/**
 * データベースを閉じる
 */
Database.prototype.close = function(){

};


/**
 * コレクションの取得
 */
Database.prototype._getCollection = function(){

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

};


/**
 * 一覧表示
 */
Posts.prototype.getLatest = function () {

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
 * ポストの削除
 */
Users.prototype.destroy = function () {

};
