
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Townlim',
    msg: '送信してください',
    pretty: true
  });
};