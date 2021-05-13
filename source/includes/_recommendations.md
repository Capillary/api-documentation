# Recommendations

The recommendation engine predicts the list of suitable products for a customer based on his/her previous orders, frequent orders, search items, trending products, cart items, and other user activities.

The following are the host URLs (rcmd_host) for `recommendations`. 


* India: `https://incrm.cc.capillarytech.com`
* Singapore: `https://sgcrm.cc.capillarytech.com`
* EU: `https://eucrm.cc.capillarytech.com`
* Testing: `https://crm-staging-new.cc.capillarytech.com`
* Staging: `https://crm-nightly-new.cc.capillarytech.com`








## GET User Recommendation

Retrieves the list of recommended products of a user based on past activities such as orders, frequent orders, search items, and trending items. 



> Sample Request

```html

https://incrm.cc.capillarytech.com/api_gateway/v1/recommendations/user/you-may-also-like?utype=user_id&uvalue=123456&limit=5&offset=0&categories

```



> Sample Response (for you-may-also-like model)


```json

{
   "status":{
      "success":true,
      "code":200
   },
   "group":"TEST",
   "boxType":"you-may-also-like",
   "totalResults":2,
   "recommendedItems":{
      "items":[
         {
            "sku":"564714",
            "score":10,
            "rank":1,
            "values":{
               "name":"T-Shirts",
               "description":"Reebok T-Shirts",
               "categories":[
                  "Shirts"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"564716",
            "score":9,
            "rank":2,
            "values":{
               "name":"Trackpants",
               "description":"Puma Trackpants",
               "categories":[
                  "Bottomwear"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         }
      ]
   }
}

```


### Resource Information


| | |
--------- | ----------- |
URI | `/api_gateway/v1/recommendations/user/{model}?{queryparam}`
HTTP Method | GET
API Version | v1
Batch Support | No
Rate Limited? | No

### Request URL


`https://{rcmd_host}/api_gateway/v1/recommendations/user/{model}?{queryparam}`




### Request Headers

Parameter | Datatype | Description
--------- | -------- | -----------
X-CAP-API-AUTH-ENTITY-ID* | string | Unique Till ID used for authentication.
X-CAP-API-AUTH-ORG-ID* | string | Unique Org ID used for authentication.



### Request Path Parameter 

Model | Datatype | Description
--------- | -------- | -----------
model* | enum  | Recommendation type to fetch results. <br> `you-may-also-like` to retrieve product recommendations on the user's currently viewing products (during online shopping). <br> `trending` to retrieve recommended products based on previous orders, searches, items viewed, and other user activities. <br>`buy-it-again` to retrieve products that were bought by the user earlier (for reordering).



<aside class="notice">Parameter marked with * is mandatory.</aside>

### Request Query Parameter 

Parameter | Datatype | Description
--------- | -------- | -----------
utype | enum | Identifier type to identify customer. Value: `user_id`, `mobile`, `email`.
uvalue* | string | The unique identifier value of the `utype`. For example, if `utype=mobile`, `uvalue=918484484484` (mobile number).
limit* | string | Limit the number of results to retrieve. You can retrieve a maximum of 25 results.
offset* | int | Number of results to ignore from top (where the recommendations array to start fetching). Set `0` to ignore the first result, `1` to ignore the first two results and so on.
categories | array | Filter recommended products by one or more categories. Pass comma separated category codes. Maximum of `10` categories are supported. Example: `categories=Shirts,Bottomwear`
stores | array | Filter products by stores. Pass comma separated store codes. Max limit is 10. Example: `stores=store.1,store.2`
deviceLocation | array | -NA-
deviceType | string | -NA-

<aside class="notice"> Parameters marked with * are mandatory. </aside>



## GET Item Recommendation

Retrieves product recommendations based on the product attribute. 


> Sample Request

```html

https://incrm.cc.capillarytech.com/api_gateway/v1/recommendations/item/similar-attribute/?sku=654123&limit=5&offset=0&categories

```



> Sample Response (of similar-attribute model)


```json

{
   "status":{
      "success":true,
      "code":200
   },
   "group":"TEST",
   "boxType":"similar-attribute",
   "totalResults":1,
   "recommendedItems":{
      "items":[
         {
            "sku":"654123",
            "score":20,
            "rank":1,
            "values":{
               "name":"Sports Shoes",
               "description":"Reebok Sports Shoes",
               "categories":[
                  "Shoes"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"654123",
            "score":10,
            "rank":2,
            "values":{
               "name":"Shorts",
               "description":"Reebok Shorts",
               "categories":[
                  "Bottomwear"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         }
      ]
   }
}

```



### Resource Information


| | |
--------- | ----------- |
URI | `/api_gateway/v1/recommendations/item/{model}?{queryparam}`
HTTP Method | GET
API Version | v1
Batch Support | No
Rate Limited? | No



### Request URL


`https://{rcmd_host}/api_gateway/v1/recommendations/item/{model}?{queryparam}`


### Request Headers

Parameter | Datatype | Description
--------- | -------- | -----------
X-CAP-API-AUTH-ENTITY-ID* | string | Unique `Till ID` used for the authentication.
X-CAP-API-AUTH-ORG-ID* | string | Unique `Org ID` used for the authentication.



### Request Path Parameter 

Model | Datatype | Description
--------- | -------- | -----------
model* | enum | `similar-attribute` to get products with similar product attributes as per the `SKU` item. <br> `similar-btab` to get products that are are frequently bought along with the `SKU` item passed.

<aside class="notice"> Parameter marked with * is mandatory. </aside>

### Request Query Parameter 

Parameter | Datatype | Description
--------- | -------- | -----------
sku* | string | The unique stock keeping unit code by which you want to fetch product recommendations.
limit* | string | Limit the number of results to retrieve. You can retrieve a maximum of 25 results.
offset* | int | Number of results to ignore from top (where the recommendations array to start fetching). Set `0` to ignore the first result, `1` to ignore the first two results and so on.
categories | array | Filter recommended products by one or more categories. Pass comma separated category codes. Maximum of `10` categories are supported. Example: `categories=Shirts,Bottomwear`
stores | array | Filter products by stores. Pass comma separated store codes. Max limit is 10. Example: `stores=store.1,store.2`.

<aside class="notice"> Parameters marked with * are mandatory. </aside>



## GET Cart Recommendation

Retrieves the recommended products of a specific cart items. 



> Sample Request

```html
https://incrm.cc.capillarytech.com/api_gateway/v1/recommendations/cart/frequently-bought-together/?cartparam={"000000000000010242": 1}&limit=5&offset=0&categories
```

> Sample Response (frequently-bought-together model)


```json

{
   "status":{
      "success":true,
      "code":200
   },
   "group":"TEST",
   "boxType":"frequently-bought-together",
   "totalResults":5,
   "recommendedItems":{
      "items":[
         {
            "sku":"000000000000010242",
            "score":652,
            "rank":1,
            "values":{
               "name":"SKU name Not Defined",
               "description":"SKU Description Not Defined",
               "categories":[
                  "Category Not Defined"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"000000000000010242",
            "score":644,
            "rank":2,
            "values":{
               "name":"SKU name Not Defined",
               "description":"SKU Description Not Defined",
               "categories":[
                  "Category Not Defined"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"000000000000010242",
            "score":607,
            "rank":3,
            "values":{
               "name":"SKU name Not Defined",
               "description":"SKU Description Not Defined",
               "categories":[
                  "Category Not Defined"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"000000000000010242",
            "score":590,
            "rank":4,
            "values":{
               "name":"SKU name Not Defined",
               "description":"SKU Description Not Defined",
               "categories":[
                  "Category Not Defined"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         },
         {
            "sku":"000000000000010242",
            "score":551,
            "rank":5,
            "values":{
               "name":"SKU name Not Defined",
               "description":"SKU Description Not Defined",
               "categories":[
                  "Category Not Defined"
               ],
               "image":{
                  "label":"",
                  "url":""
               },
               "smallImage":{
                  "label":"",
                  "url":""
               },
               "productUrl":""
            }
         }
      ]
   }
}

```


### Resource Information


| | |
--------- | ----------- |
URI | `api_gateway/v1/recommendations/cart/{model}?{queryparam}`
HTTP Method | GET
API Version | v1
Batch Support | No
Rate Limited? | No



### Request URL


`https://{rcmd_host}/api_gateway/v1/recommendations/cart/{model}?{queryparam}`


### Request Headers

Parameter | Datatype | Description
--------- | -------- | -----------
X-CAP-API-AUTH-ENTITY-ID* | string | Unique Till ID used for the authentication.
X-CAP-API-AUTH-ORG-ID* | string | Unique Org ID used for the authentication.



### Request Path Parameter 

Model | Datatype | Description
--------- | -------- | -----------
model* | enum | Pass `frequently-bought-together` to get products that were frequently bought along with the items in the cart. For example, if the cart has mobile, the recommended item could be mobile case. 

<aside class="notice"> The parameter marked with * is mandatory.</aside>

### Request Query Parameter 

Parameter | Datatype | Description
--------- | -------- | -----------
cartparam* | string |  Object type to identify the cart items in SKU:quantity pairs - {sku1:quantity,sku2:quantity}. For example,`cartparam={"000000000000010242":1,000000000000080246":5}`
limit* | string | Limit the number of results to retrieve. You can retrieve a maximum of 25 results.
offset* | int | Number of results to ignore from top (where the recommendations array to start fetching). Set `0` to ignore the first result, `1` to ignore the first two results and so on.
categories | array | Filter recommended products by one or more categories. Pass comma separated category codes. Maximum of `10` categories are supported. Example: `categories=Shirts,Bottomwear`
stores | array | Filter products by stores. Pass comma separated store codes. Max limit is 10. Example: `stores=store.1,store.2`.



<aside class="notice"> Parameters marked with * are mandatory. </aside>

## Status Codes

### Error Codes
 
Code | Description
--------- | -------- 
400  | Client sent an invalid request — such as lacking required request body or parameter. For example, SKU is an object that MUST use keys that match the regular expression: `^[a-zA-Z0-9\.\-_]+$`, the count is not a positive integer.
401  | Client failed to authenticate with the server due to invalid or missing authentication details.
403  | Forbidden error refers that the client is authenticated but does not have permission to access the requested resource.
404  | The requested resource does not exist. For example, SKU does not exist in the database.
405  | Invalid HTTP method.
501  | Currently, the Store filter is not implemented.

