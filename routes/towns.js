
/*
 * GET town page.
 */

exports.index = function(req, res){
  res.redirect('/');
};

exports.town = function(req, res){
  var town = req.params.town;
  var townName = town.toUpperCase();
  var data = require('../models/' + town + '.json');

  res.render('town', {
    townName: townName,
    datas: data
  });
};