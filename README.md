# 家系ラーメン食べたい！

Cloudflare Workers と [Hono](https://github.com/yusukebe/hono)を使ったサンプルコンテンツです。

こちらの URL にデプロイしています（僕が消すまで見れます！）。

- <https://iekei.yusukebe.workers.dev/>

## Features

以下の特徴があります。

- [Hono](https://github.com/yusukebe/hono) を使っている。
- React SSR している（クライアントは何もしてない）。
- microCMS でコンテンツを管理。
- API レスポンスは KV でキャッシュ。
- Webhook を受け取って、キャッシュをパージ。
- 開発に mifnilare 2.x、デプロイには Wrangler 2.0 を使用。

## Usage

手元での立ち上げ方。

```
$ yarn install
$ yarn run dev
```

公開までしちゃう。

```
$ yarn run publish
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT
