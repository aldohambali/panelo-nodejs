# Nodejs Panelo

Nodejs CRUD

## Installation

```bash
npm i
# then import mysql database from sql file 'panelo (with-data).sql'
```
## Usage


```bash
npm start
```

## Screenshot


![Screenshot1](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_1.png)

![Screenshot2](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_2.png)

![Screenshot3](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_3.png)

![Screenshot4](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_4.png)

![Screenshot5](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_5.png)

![Screenshot6](https://github.com/aldohambali/panelo-nodejs/blob/main/Screenshot_6.png)


## Basic Data

get response from API [https://portal.panelo.co/paneloresto/api/productlist/18](https://portal.panelo.co/paneloresto/api/productlist/18)

```json
{
  "products": [
    {
      "id": 21,
      "name": "Makanan",
      "user_id": 18,
      "products": [
        {
          "id": 34,
          "title": "nasi goreng",
          "slug": "nasi-goreng",
          "lang": "en",
          "auth_id": 18,
          "status": 1,
          "type": 6,
          "count": 0,
          "created_at": "2020-12-07T08:26:15.000000Z",
          "updated_at": "2020-12-07T08:26:15.000000Z",
          "pivot": {
            "category_id": 21,
            "term_id": 34
          },
          "price": {
            "id": 6,
            "term_id": 34,
            "price": 12000
          },
          "preview": {
            "id": 55,
            "term_id": 34,
            "type": "preview",
            "content": "//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg"
          },
          "addons": [],
          "stock": {
            "id": 6,
            "term_id": 34,
            "stock": 10
          }
        },
        {
          "id": 29,
          "title": "Nasi Goreng Pedas Sekali",
          "slug": "nasi-goreng",
          "lang": "en",
          "auth_id": 18,
          "status": 1,
          "type": 6,
          "count": 0,
          "created_at": "2020-10-21T03:29:27.000000Z",
          "updated_at": "2022-07-12T07:52:36.000000Z",
          "pivot": {
            "category_id": 21,
            "term_id": 29
          },
          "price": {
            "id": 1,
            "term_id": 29,
            "price": 15000
          },
          "preview": {
            "id": 45,
            "term_id": 29,
            "type": "preview",
            "content": "//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg"
          },
          "addons": [],
          "stock": {
            "id": 1,
            "term_id": 29,
            "stock": 1
          }
        },
        {
          "id": 33,
          "title": "Pop Mie kuah",
          "slug": "pop-mie",
          "lang": "en",
          "auth_id": 18,
          "status": 1,
          "type": 6,
          "count": 0,
          "created_at": "2020-12-07T07:10:19.000000Z",
          "updated_at": "2022-07-13T02:38:27.000000Z",
          "pivot": {
            "category_id": 21,
            "term_id": 33
          },
          "price": {
            "id": 5,
            "term_id": 33,
            "price": 6000
          },
          "preview": {
            "id": 53,
            "term_id": 33,
            "type": "preview",
            "content": "//portal.panelo.co/paneloresto/uploads/20/12/07122016073250025fcdd54a7e85b.jpg"
          },
          "addons": [],
          "stock": {
            "id": 5,
            "term_id": 33,
            "stock": 1
          }
        }
      ]
    },
    {
      "id": 22,
      "name": "Snack",
      "user_id": 18,
      "products": [
        {
          "id": 31,
          "title": "Tahu",
          "slug": "tahu",
          "lang": "en",
          "auth_id": 18,
          "status": 1,
          "type": 6,
          "count": 0,
          "created_at": "2020-12-07T07:05:35.000000Z",
          "updated_at": "2020-12-07T07:05:35.000000Z",
          "pivot": {
            "category_id": 22,
            "term_id": 31
          },
          "price": {
            "id": 3,
            "term_id": 31,
            "price": 2000
          },
          "preview": {
            "id": 49,
            "term_id": 31,
            "type": "preview",
            "content": "//portal.panelo.co/paneloresto/uploads/20/12/07122016073247255fcdd4354c14a.jpg"
          },
          "addons": [],
          "stock": {
            "id": 3,
            "term_id": 31,
            "stock": 20
          }
        },
        {
          "id": 30,
          "title": "Beng Beng",
          "slug": "beng-beng",
          "lang": "en",
          "auth_id": 18,
          "status": 1,
          "type": 6,
          "count": 0,
          "created_at": "2020-12-07T07:03:33.000000Z",
          "updated_at": "2020-12-07T07:03:33.000000Z",
          "pivot": {
            "category_id": 22,
            "term_id": 30
          },
          "price": {
            "id": 2,
            "term_id": 30,
            "price": 2000
          },
          "preview": {
            "id": 47,
            "term_id": 30,
            "type": "preview",
            "content": "//portal.panelo.co/paneloresto/uploads/20/12/07122016073215155fcdc7ab18dd9.jpg"
          },
          "addons": [],
          "stock": {
            "id": 2,
            "term_id": 30,
            "stock": 10
          }
        }
      ]
    }
  ]
}
```
## Future development
- pagination
- unlink image
- clear uploads on reset

## License

[MIT](https://choosealicense.com/licenses/mit/)