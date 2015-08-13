$(function(){

/**
 * 現在地の緯度経度を取得
 */

// グローバル変数（現在地の緯度軽度）
 var lat,lng;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition (
    // 取得成功
    function (pos) {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
      console.log(lat, lng);
    },
    // 取得失敗
    function (error) {
      var message = '';
      switch (error.code) {
      case error.POSITION_UNAVAILABLE:
           message = '位置が取得ができません';
           break;
      case error.PERMISSION_DENIED:
           message = '位置の使用許可がありせん';
           break;
      case error.PERMISSION_DENIED_TIMEOUT:
           message = 'タイムアウトしました';
      break;
      }
      window.alert(message);
    }
  );
} else {
  window.alert('本ブラウザではGeolocationが使えません');
}


// ***********************************************************

/**
 * Clickアクション
 */

// function clickAction() {

//   // Mapリンクをクリックで地図を描画
//   $('.showMap').each(function () {
//     $(this).on('click', function() {

//       var pageUrl = $(this).attr('href'),
//           imgLat  = $(this).attr('imgLat'),
//           imgLng  = $(this).attr('imgLng'),
//           imgUrl  = $(this).attr('imgUrl'),
//           imgName = $(this).attr('username');

//       // トップへ移動
//       $("html,body").animate({scrollTop:0},"fast");

//       // マップを開く
//       $('.photoMap').slideDown(400, showMap);

//       // マップを描画
//       function showMap () {
//         // 現在地の緯度経度
//         var latlng = new google.maps.LatLng(lat, lng);
//         // マップオプション
//         var opts = {
//           zoom: 16,
//           center: latlng,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         // マップを出力
//         var photoMap = new google.maps.Map(document.getElementById("photoMapView"), opts);
//         // マーカー
//         var marker = new google.maps.Marker({position: latlng, map: photoMap});

//         // 地図上に表示するコンテンツの生成
//         var photoCnt = '<p><a href="' + pageUrl + '" target="_blank"><img src="' + imgUrl + '" width="100px"></a></p><p>' + imgName + '</p>';

//         // 地図上に写真を表示
//         var photolatlng = new google.maps.LatLng(imgLat, imgLng);
//         var infoPhoto = new google.maps.InfoWindow({
//           content: photoCnt,
//           position: photolatlng
//         });
//         infoPhoto.open(photoMap);
//       }

//       return false;
//     });
//   });

//   // マップを閉じる
//   $('.closeMap').each(function () {
//     $(this).on('click', function() {
//       $('.photoMap').slideUp(400);
//       return false;
//     });
//   });

// }


// ***********************************************************


});
