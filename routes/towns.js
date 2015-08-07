
/*
 * GET town page.
 */

// ダミー
var towns = {
  shibuya : [
    {
      userid : 'shibuya-1',
      username : 'shibuya-1',
      userpage : 'shibuya-1',
      photo : 'shibuya-1',
      posttime : 'shibuya-1',
      postpage : 'shibuya-1',
      comment : 'shibuya-1',
      postsource : 'shibuya-1',
      like : 'shibuya-1',
      townname : 'shibuya-1',
      lnt : 'shibuya-1',
      lng : 'shibuya-1',
      tag : 'shibuya-1'
    },
    {
      userid : 'shibuya-2',
      username : 'shibuya-2',
      userpage : 'shibuya-2',
      photo : 'shibuya-2',
      posttime : 'shibuya-2',
      postpage : 'shibuya-2',
      comment : 'shibuya-2',
      postsource : 'shibuya-2',
      like : 'shibuya-2',
      townname : 'shibuya-2',
      lnt : 'shibuya-2',
      lng : 'shibuya-2',
      tag : 'shibuya-2'
    },
    {
      userid : 'shibuya-3',
      username : 'shibuya-3',
      userpage : 'shibuya-3',
      photo : 'shibuya-3',
      posttime : 'shibuya-3',
      postpage : 'shibuya-3',
      comment : 'shibuya-3',
      postsource : 'shibuya-3',
      like : 'shibuya-3',
      townname : 'shibuya-3',
      lnt : 'shibuya-3',
      lng : 'shibuya-3',
      tag : 'shibuya-3'
    }],
  shinjuku : [
    {
      userid : 'shinjuku-1',
      username : 'shinjuku-1',
      userpage : 'shinjuku-1',
      photo : 'shinjuku-1',
      posttime : 'shinjuku-1',
      postpage : 'shinjuku-1',
      comment : 'shinjuku-1',
      postsource : 'shinjuku-1',
      like : 'shinjuku-1',
      townname : 'shinjuku-1',
      lnt : 'shinjuku-1',
      lng : 'shinjuku-1',
      tag : 'shinjuku-1'
    },
    {
      userid : 'shinjuku-2',
      username : 'shinjuku-2',
      userpage : 'shinjuku-2',
      photo : 'shinjuku-2',
      posttime : 'shinjuku-2',
      postpage : 'shinjuku-2',
      comment : 'shinjuku-2',
      postsource : 'shinjuku-2',
      like : 'shinjuku-2',
      townname : 'shinjuku-2',
      lnt : 'shinjuku-2',
      lng : 'shinjuku-2',
      tag : 'shinjuku-2'
    },
    {
      userid : 'shinjuku-3',
      username : 'shinjuku-3',
      userpage : 'shinjuku-3',
      photo : 'shinjuku-3',
      posttime : 'shinjuku-3',
      postpage : 'shinjuku-3',
      comment : 'shinjuku-3',
      postsource : 'shinjuku-3',
      like : 'shinjuku-3',
      townname : 'shinjuku-3',
      lnt : 'shinjuku-3',
      lng : 'shinjuku-3',
      tag : 'shinjuku-3'
    }],
  ginza : [
    {
      userid : 'ginza-1',
      username : 'ginza-1',
      userpage : 'ginza-1',
      photo : 'ginza-1',
      posttime : 'ginza-1',
      postpage : 'ginza-1',
      comment : 'ginza-1',
      postsource : 'ginza-1',
      like : 'ginza-1',
      townname : 'ginza-1',
      lnt : 'ginza-1',
      lng : 'ginza-1',
      tag : 'ginza-1'
    },
    {
      userid : 'ginza-2',
      username : 'ginza-2',
      userpage : 'ginza-2',
      photo : 'ginza-2',
      posttime : 'ginza-2',
      postpage : 'ginza-2',
      comment : 'ginza-2',
      postsource : 'ginza-2',
      like : 'ginza-2',
      townname : 'ginza-2',
      lnt : 'ginza-2',
      lng : 'ginza-2',
      tag : 'ginza-2'
    },
    {
      userid : 'ginza-3',
      username : 'ginza-3',
      userpage : 'ginza-3',
      photo : 'ginza-3',
      posttime : 'ginza-3',
      postpage : 'ginza-3',
      comment : 'ginza-3',
      postsource : 'ginza-3',
      like : 'ginza-3',
      townname : 'ginza-3',
      lnt : 'ginza-3',
      lng : 'ginza-3',
      tag : 'ginza-3'
    }],
  yokohama : [
    {
      userid : 'yokohama-1',
      username : 'yokohama-1',
      userpage : 'yokohama-1',
      photo : 'yokohama-1',
      posttime : 'yokohama-1',
      postpage : 'yokohama-1',
      comment : 'yokohama-1',
      postsource : 'yokohama-1',
      like : 'yokohama-1',
      townname : 'yokohama-1',
      lnt : 'yokohama-1',
      lng : 'yokohama-1',
      tag : 'yokohama-1'
    },
    {
      userid : 'yokohama-2',
      username : 'yokohama-2',
      userpage : 'yokohama-2',
      photo : 'yokohama-2',
      posttime : 'yokohama-2',
      postpage : 'yokohama-2',
      comment : 'yokohama-2',
      postsource : 'yokohama-2',
      like : 'yokohama-2',
      townname : 'yokohama-2',
      lnt : 'yokohama-2',
      lng : 'yokohama-2',
      tag : 'yokohama-2'
    },
    {
      userid : 'yokohama-3',
      username : 'yokohama-3',
      userpage : 'yokohama-3',
      photo : 'yokohama-3',
      posttime : 'yokohama-3',
      postpage : 'yokohama-3',
      comment : 'yokohama-3',
      postsource : 'yokohama-3',
      like : 'yokohama-3',
      townname : 'yokohama-3',
      lnt : 'yokohama-3',
      lng : 'yokohama-3',
      tag : 'yokohama-3'
    }
  ]
};

exports.index = function(req, res){
  res.redirect('/');
};

exports.town = function(req, res){
  var town = req.params.town;
  var title = town.toUpperCase();
  var data = towns[town];

  res.render('town', {
    title: title,
    datas: data
  });
};