<br />
<h1 align="center">E-Commerce API</h1>

<h4 align="center">E-commerce API built using NodeJS & MongoDB</h4>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#end-points">End points</a>
    </li>
  </ol>
</details>

## Key Features

* Authentication
    * Login [Public]
    * SignUp [Public]
    * Logout [User]
* Cart Services
    * Add Product to Cart [User]
    * Edit Cart [User]
    * Get Cart [User]
    * Delete Cart items [User]
* User
    * Role for Users [Admin]
* Roles
    * Create Role [Admin]
    * Edit Role [Admin]
    * Delete Role [Admin]
* Product Services
  * Create new product [Admin]
  * Update Product Details [Admin]
  * Update Product Cover Image [Admin]
  * Update Product Images [Admin]
  * Delete Product [Admin]
  * Product tags [Admin]
  * Product category [Admin]
  * Get All products and filter it [Public]
* Category Services
  * Create New Category [User]
  * Update Category Details [Admin]
  * Update Category Image [Admin]
  * Delete Category [Admin]

## Installation

You can fork the app or you can git-clone the app into your local machine.

```bash
git clone https://github.com/MrMiM-tfe/E-Commerce-API.git
```

Once done that, please install all the
dependencies by running

```bash
$ npm install
```

and then run API by running
```bash
$ npm start
```

## End Points

API Endpoint:
`http://example.com/api/v1/`
#### Shop:

|         Endpost        |  Mehtod  |               Usage              |               Returns               | Requires Auth |
|:----------------------:|:--------:|:--------------------------------:|:-----------------------------------:|:-------------:|
|         `/shop`        |   `GET`  | to get all product for shop page | paginated JSON list of All Products |       No      |
|      `/shop/:slug`     |   `GET`  |        get product details       |        JSON of Product detail       |       No      |
| `/shop/category/:slug` |   `GET`  |     Get all category Products    |      JSON list of All Products      |       No      |
|    `/shop/tag/:slug`   |   `GET`  |       Get all Tag Products       |      JSON list of All Products      |       No      |
|      `/shop/cart`      |   `GET`  |        Get User Cart Data        |             JSON of cart            |      Yes      |
|      `/shop/cart`      |  `POST`  |            Add to cart           |             JSON of cart            |      Yes      |
|      `/shop/cart`      |   `PUT`  |             Edit cart            |           JSON of old cart          |      Yes      |
|      `/shop/cart`      | `DELETE` |     Delete Product From Cart     |           JSON of new Cart          |      Yes      |
|      `/shop/order`     |  `POST`  |          To create Order         |            JSON of Order            |      Yes      |
|       `/shop/pay`      |  `POST`  |           To pay Order           |            payment Script           |      Yes      |

#### Auth:
|  Endpost  |  Mehtod  |      Usage     |       Returns      | Requires Auth |
|:---------:|:--------:|:--------------:|:------------------:|:-------------:|
| `/singup` |  `POST`  | to signup user |  JSON of new user  |       No      |
|  `login`  |  `POST`  |  to login user |    loged in user   |       No      |
| `/logout` | `DELETE` | to logout user | msg User loged out |      Yes      |

#### Dashboard:
|        Endpost       | Mehtod |       Usage       |        Returns        | Requires Auth |
|:--------------------:|:------:|:-----------------:|:---------------------:|:-------------:|
| `/dashboard/profile` |  `GET` |  to get user info |   JSON of User info   |      Yes      |
| `/dashboard/profile` | `POST` | to edit User info | json of old user info |      Yes      |

#### Admin:
|         Endpost         |  Mehtod  |        Usage       |        Returns       | Yes |
|:-----------------------:|:--------:|:------------------:|:--------------------:|:---:|
|    `/admin/products`    |   `GET`  |  get all products  | JSON of all products | Yes |
|    `/admin/products`    |  `POST`  |     new product    |  json of new product | Yes |
| `/admin/products/:slug` |   `GET`  | get single product |    json of product   | Yes |
| `/admin/products/:slug` |   `PUT`  |    edit product    |  json of old product | Yes |
| `/admin/products/:slug` | `DELETE` |   delete product   |          msg         | Yes |

and for admin this structure if for all other routes:

`/categories/products` , `/products/tags` , `/article` , `/roles`

