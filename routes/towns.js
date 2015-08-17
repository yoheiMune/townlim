/**
 * 街一覧ページ
 */
var database = require('../models/database');

exports.index = function (req, res) {
  res.redirect('/');
};


/**
 * 街ごとのポスト一覧を取得
 */
exports.town = function (req, res) {

  var townName  = req.params.town;
  var townTitle = townName.toUpperCase();
  var posts     = database.getPosts();

  posts.getLatest(townName, 0, 10, function (err, datas) {
    posts.close();
    if (err) {
      res.send(500);
      return;
    }
    res.render('town', {
      title: townTitle,
      datas: datas,
      pretty: true
    });
    // res.json(200, datas);
    return;
  });
};