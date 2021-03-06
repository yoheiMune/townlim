# Townlim（仮）

ジーズアカデミーTOKYO Labコース 第1期  
Webサービスディベロッパーコース 卒業制作


<!-- /// -->


## ①企画の目的とビジョン

### 目的

「街で過ごす時間をもっと楽しく」

### 目的を達成するためのビジョン

「その街の『今』を共有する」


<!-- /// -->


## ②企画の背景

街歩きが楽しくない&効率が悪い

#### 普段の僕のしょーもない休日編

適当なお店でご飯を食べる→本屋に行く→喫茶店でコーヒーを飲む→帰る  
↓  
マンネリ  
↓  
このイベント楽しそうだな。ちょっとよっていこう。  
みたいな気軽に街の最新情報を見つけるツールが欲しい。


#### 気張ってグルメ編

ネットで見つけたお店に行く→長蛇の列→妥協して適当なお店を探し直す  
↓  
効率が悪い  
↓  
リアルタイムにお店の混雑状況や在庫状況が知りたい。


<!-- /// -->


## ③現状分析と課題点

様々なお出かけ系&位置情報系アプリを試した結果

#### 目的地に着くまでは役に立つけど、到着後はいらない

* Foursquare
* Yelp
* Sonomy
* 食べログ
* OpenTable
* Plat


#### リアルタイム性があるけど場所の情報は探しづらい

* Twitter
* Facebook


#### 友達がいないと意味ない…

* Swarm


<!-- /// -->


## ④コンセプト

### Townlimとは

今、『街』で起こっている『様々な出来事』を1つに集約するWebアプリケーション

__Townlim = Town + Limit（極限）__

#### 『街』とは

主要都市（渋谷、新宿、銀座、横浜）のランドマーク（駅など）から半径1000m〜2000m以内の範囲。


#### 『様々な出来事』とは

* その街の天気、交通状況
* みんなが食べているもの
* お店の混雑状況や在庫状況
* イベント、タイムセール
* 事件、事故、災害情報


具体的に言うと…

<span style="font-size:10px">twitter + Instagram + Sonomy みたいなサービス</span>


<!-- /// -->


## ⑤機能

#### 1.投稿

『街』に入ると、位置情報付きで現在の状況（写真、テキスト）を投稿できる。  
SNS認証している場合は他のサービスにマルチポストできる。


#### 2.タイムライン

Twitter、Instagram、Foursquareの位置情報付きポストとTownlimの投稿をタイムライン上に表示。投稿がマッピングされた地図も表示される


#### 3.お気に入り

気になる投稿、ユーザー（ショップ）をお気に入りに登録できる。


#### 4.シティ オブ ピープル（ショップ）

被お気に入り数が多いユーザーまたはショップをランキングし、その街の代表になってもらう。  
「吉祥寺の太尊、渋谷の鬼塚」みたいな。


#### 5.カテゴリー（タグ）

投稿にタグを付加しカテゴリー別に表示する。  
グルメ、ショップ、セール、イベント、ハプニングなど


<!-- /// -->


## ⑥プロトタイプと開発環境（現在制作中）


#### JUSTINMIND  
> https://www.justinmind.com/usernote/tests/16395376/16395810/16395812/

#### GitHub  
> https://github.com/taquaki-satwo/townlim

#### Heroku
> https://townlim.herokuapp.com/


<!-- /// -->


## ⑦スケジュール

#### 7/24〜8/6

* 環境構築
* タイムラインの実装

Twitter、Instagram、Foursquareから定期的に情報をダウンロードしDBに格納、それをフロントに表示。


#### 8/７〜8/16

* 投稿機能の実装

位置情報、テキスト、写真を入力しDBに格納、タイムラインに表示


#### 8/17〜8/26

* SNSログイン機能実装
* ユーザーページの実装


#### 8/27〜9/5

* お気に入り機能実装
* ランキングの実装


#### 9/6〜9/19

* フロントデザイン微調整


#### 9/20〜10/5

予備日


<!-- /// -->


## ⑧使ってみたい技術・ツール

#### DB

* MongoDB

#### サーバーサイド

* Node.js
* Express

#### フロントエンド

* jQuery
* CSS3
* CSSフレームワーク
    - Bootstrap または Materialize
* CSS設計
    - FLOCSS

#### PaaS

* Heroku

#### 開発環境

* Bower
* gulp
* Jade
* Sass
* CoffeeScript

#### コミュニケーション

* GitHub
* Slack

余力があれば、Socket.IO、React.js、AWSに挑戦したい…。


<!-- /// -->


## ⑨メンターにお願いしたいこと

* 小さい機能を少しずつ作ってデプロイしていくような、短いサイクルを何度も繰り返すフローで作っていきたい。
* いきなり作り始めるのではなく、仕様書等で固めてからの方が良いのか指導していただきたい。
* MongoDB、Node.js、Expressがさっぱりなので、そのあたりを教えていただきたい…。
* あと、セキュリティ関係も教えてほしい…。
