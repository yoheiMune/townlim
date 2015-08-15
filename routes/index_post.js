
/*
 * GET home page.
 */

var data = {
  taro: {mail: 'taro@mail'},
  jiro: {mail: 'jiro@mail'},
  sub: {mail: 'sub@mail'},
  hana: {mail: 'hana@mail'}
};

exports.index = function(req, res){
  var name = req.body.name;
  var result = data[name];
  if (result === undefined) {
    result = {mail: '見つかりませんでした。'};
  }
  res.send(result);
};
