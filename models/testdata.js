/**
 * test data for townlim
 * JavaScritp for mongo
 * 実行: mongo townlim testdata.js
 */

var posts = [
  {
    post_id: 0,
    post_comment: 'ポスト1のコメント',
    post_picture: 'https://pbs.twimg.com/media/CK_Oh9eUsAA9CBm.jpg:large',
    post_date: new Date(2015, 8, 10, 9, 0, 0),
    post_user_id: 2,
    post_lat: 38.83514,
    post_lng: 99.59865,
    post_liked_by: [0, 1],
    post_category: ['sale'],
    post_town: 'shibuya',
    post_reference: ['Townlim'],
    post_url: '/posts/0'
  },
  {
    post_id: 1,
    post_comment: 'ポスト2のコメント',
    post_picture: 'https://pbs.twimg.com/media/CLu3rm6UwAAAN_N.jpg',
    post_date: new Date(2015, 8, 10, 10, 0, 0),
    post_user_id: 0,
    post_lat: 38.832,
    post_lng: 99.599,
    post_liked_by: [],
    post_category: ['food'],
    post_town: 'shinjuku',
    post_reference: ['Twitter'],
    post_url: 'https://twitter.com/goto_yuuka/status/629298581925539840'
  },
  {
    post_id: 2,
    post_comment: 'ポスト3のコメント',
    post_picture: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-15/11192570_1583603518562249_163160949_n.jpg',
    post_date: new Date(2015, 8, 10, 11, 0, 0),
    post_user_id: 1,
    post_lat: 38.836,
    post_lng: 99.5987,
    post_liked_by: [2],
    post_category: [],
    post_town: 'ginza',
    post_reference: ['Instagram'],
    post_url: 'https://instagram.com/p/2GfipKHoUe/'
  },
  {
    post_id: 3,
    post_comment: 'ポスト4のコメント',
    post_picture: 'https://pbs.twimg.com/media/CLcYpekUEAAikbX.jpg',
    post_date: new Date(2015, 8, 10, 12, 0, 0),
    post_user_id: 2,
    post_lat: 38.833,
    post_lng: 99.5989,
    post_liked_by: [],
    post_category: ['food', 'sale'],
    post_town: 'yokohama',
    post_reference: ['Townlim'],
    post_url: '/posts/3'
  },
  {
    post_id: 4,
    post_comment: 'ポスト5のコメント',
    post_picture: 'https://pbs.twimg.com/media/CK_Oh9eUsAA9CBm.jpg:large',
    post_date: new Date(2015, 8, 20, 9, 0, 0),
    post_user_id: 0,
    post_lat: 38.83514,
    post_lng: 99.59865,
    post_liked_by: [],
    post_category: ['sale'],
    post_town: 'shibuya',
    post_reference: ['Townlim'],
    post_url: '/posts/4'
  },
  {
    post_id: 5,
    post_comment: 'ポスト6のコメント',
    post_picture: 'https://pbs.twimg.com/media/CK_Oh9eUsAA9CBm.jpg:large',
    post_date: new Date(2015, 8, 30, 9, 0, 0),
    post_user_id: 1,
    post_lat: 38.83514,
    post_lng: 99.59865,
    post_liked_by: [0],
    post_category: ['sale'],
    post_town: 'shibuya',
    post_reference: ['Townlim'],
    post_url: '/posts/5'
  }
];


var users = [
  {
    user_id: 0,
    user_name: 'ユーザー1名前',
    user_fullname: 'ユーザー1フルネーム',
    user_picture: 'https://pbs.twimg.com/profile_images/378800000518278248/d58bb02729c5b3190eb77532ad4fd6ff.jpeg',
    user_profile: 'ユーザー1プロフィール',
    user_url: 'users/0',
    user_twitter_url: '',
    user_instagram_url: 'https://instagram.com/goto_yuuka/',
    user_liked_by: [1]
  },
  {
    user_id: 1,
    user_name: 'ユーザー2名前',
    user_fullname: 'ユーザー2フルネーム',
    user_picture: 'https://pbs.twimg.com/profile_images/519676245638787072/_YyLdv6O.png',
    user_profile: 'ユーザー2プロフィール',
    user_url: 'users/1',
    user_twitter_url: 'https://twitter.com/goto_yuuka',
    user_instagram_url: '',
    user_liked_by: [1, 2]
  },
  {
    user_id: 2,
    user_name: 'ユーザー3名前',
    user_fullname: 'ユーザー3フルネーム',
    user_picture: 'https://pbs.twimg.com/profile_images/710544043/Lollipops_an_bs.jpg',
    user_profile: 'ユーザー3プロフィール',
    user_url: 'users/2',
    user_twitter_url: '',
    user_instagram_url: '',
    user_liked_by: []
  }
];


db.posts.remove({});
for (var i = 0; i < posts.length; i++) {
  db.posts.save(posts[i]);
}

db.users.remove({});
for (var i = 0; i < users.length; i++) {
  db.users.save(users[i]);
}

db.counters.remove({});
db.counters.save({name: 'posts', count: 4});
db.counters.save({name: 'users', count: 3});
