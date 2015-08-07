
/*
 * GET town page.
 */

exports.index = function(req, res){
  res.redirect('/');
};

exports.town = function(req, res){
  var town = req.params.town;
  var title = town.toUpperCase();
  res.render('town', { title: title });
};