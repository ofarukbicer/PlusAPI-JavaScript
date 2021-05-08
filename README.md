# 🗄️ PlusAPI-nodejs

## 📥 Kurulum

`git clone https://www.github.com/ofarukbicer/PlusAPI-nodejs`

ya da

`npm i plusapi`

### CDN

```html
<script src="https://unpkg.com/plusapi/dist/plusapi.js"></script>
```

Örnek:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PlusAPI</title>
</head>
<body>
  <script src="https://unpkg.com/plusapi/dist/plusapi.js"></script>
  <script>
    const plusapi = new PlusAPI("token")
    plusapi.hisse_ver("sasa")
    .then(
      data => console.log(data)
    )
  </script>
</body>
</html>
```

## 📒 Kullanım

Kütüphaneyi projenize dahil etme

```js
const PlusAPI = require("plusapi");
```

Sınıfı başlatma 1. parametreye [PlusAPI.org](https://www.plusapi.org)'dan aldığınız tokeni giriniz

```js
const PlusAPI = require("plusapi");

let plusapi = new PlusAPI("xxx");
```

Artık hazırsınız :).

```js
const PlusAPI = require("plusapi");

let plusapi = new PlusAPI("xxx");

/* Hisseler'den istediğiniz sembolün bilgilerini alma */
plusapi.hisse_ver("SASA").then(
    hisse => console.log(hisse)
  )

/* BIST Top-10 */
plusapi.hisse_sepet().then(
    hisse_sepet => console.log(hisse_sepet)
  )

/* Kriptolar'dan istediğiniz sembolün bilgilerini alma */
plusapi.kripto_ver("BTC").then(
    kripto => console.log(kripto)
  )

/* Kriptolar Hakkında Güncel Haberleri Çevirir */
plusapi.kripto_haber().then(
    haberler => console.log(haberler)
  )

/* Kripto Top-10 Çevirir */
plusapi.kripto_sepet().then(
    kripto_sepet => console.log(kripto_sepet)
  )
```
## 🌐 Telif Hakkı ve Lisans

* *Copyright (C) 2021 by* [@ofarukbicer](https://github.com/ofarukbicer) ❤️️
* [MIT LICENSE](https://github.com/ofarukbicer/plusapi/blob/master/LICENSE) *Koşullarına göre lisanslanmıştır..*

## ♻️ İletişim

*Bizimle iletişime geçmek isterseniz, **Telegram**'dan mesaj göndermekten çekinmeyin;* [@PlusAPI](https://t.me/PlusAPI)


> **[PlusAPI](https://plusapi.org)** *için yazılmıştır..*
