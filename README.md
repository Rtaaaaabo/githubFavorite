# 概要
* サーバーサイドはExpress.jsを使用して、フロントサイドはAngular、ionicを使用して作成
* Githubリポジトリを検索出来るモバイルWebアプリケーション
* 検索結果は、最もStarが多いアイテムから順にソートして表示
* （例） Reactで検索した場合、ReactのキーワードにマッチしたGithubリポジトリを表示
* 検索した結果をブックマークする機能の作成
  * ブックマークしたら検索結果をPostgresSQL DBに保存
  
# 検索結果の項目について
* Repository Name
* Github URL
* Description
* Language
* Owener Name


# 実行方法
## 前提
* Nodeのバージョンはv10以上
* Cloneでソースを落としてくる
## 事前準備
- PostgresSQLを実行
- PostgresSQLで下記を作成しておく
```
DB名 ： githubstar
ユーザー名： nodeuser
パスワード名： nodeuser
```

## フロントサイド
1. [Ionic CLIのインストール](https://ionicframework.com/docs/cli)
2. Frontディレクトリ内で下記を実行
```
npm install
```
3. 下記を実行する
```
ionic serve
```
4. 対象のプロジェクトが立ち上がる

## サーバーサイド
1. Expressディレクトリ内で下記を実行
```
knex migrate:latest
```
2. Expressディレクトリ内で下記を実行
```
node index.js
```
