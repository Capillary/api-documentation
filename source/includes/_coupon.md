# Coupon
Coupon represents store promotions or discounts created through Capillary Campaign Manager. A single campaign could contain one or more coupons or coupon series. Coupons are issued to loyalty or non-loyalty customers through SMS or email.

You cannot create new coupons using coupon APIs. You can just send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id to use coupon APIs.

The V2 coupon entity just allows you to:

* Redeem coupons in batch 
* Check whether specific coupons can be redeemed or not

For any other coupon related APIs, please use v1.1 APIs. 


## Redeem Coupons

> Sample Request

```html
http://api.capillary.co.in/v2/coupon/redeem 

```

> Sample POST Request

```json
{
   "billAmount":"2000",
   "transactionNumber":"numbr9227550121",
   "user":{
      "mobile":"9177121900000"
   },
   "redemptionTime":"2019-04-04 11:49:59",
   "redemptionRequestList":[
      {
         "code":"9NUF8THR"
      }
   ]
}
```


> Sample Response

```json
{
    "redemption": [
        {
            "id": 33138363,
            "warnings": [],
            "appendedErrorMessage": "",
            "code": "JL07UAZ3",
            "discountCode": "MobilePush",
            "seriesCode": 14162,
            "isAbsolute": false,
            "couponValue": 10.0
        }
    ],
    "redemptionStatus": {
        "status": true,
        "code": 700,
        "message": "Coupon processing successful"
    },
    "customer": {
        "id": 342963216,
        "profiles": [
            {
                "firstName": "Tom",
                "lastName": "Sawyer",
                "fields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919999000000"
                    }
                ],
                "commChannels": [],
                "userId": 342963216,
                "accountId": "",
                "autoUpdateTime": "2019-10-31T17:41:25+05:30"
            }
        ]
    },
    "warnings": []
}
```


This API allows you to redeem active coupons of a loyalty customer. You can pass multiple coupons at once.

### Resource Information
| | |
--------- | ----------- |
URI | `/redeem`
Authentication  | Yes
HTTP Method  | POST
Batch Support  | No

### Request URL
`http://{host}/v2/coupon/redeem`

### Request Parameters
Parameter | Description
--------- | -----------
billAmount* | float | Transaction amount of the bill.
transactionNumber* | string | Transaction number against which the coupon needs to be redeemed
user* | enum | Specify any identifier of the user who wants to redeem coupons. Values: mobile, email, externalId
redemptionTime | Date and time when the coupon has to be redeemed.
code* | Coupon code to be redeemed.

<aside class="warning"> You need to pass either code or id as applicable </aside>




## Check if Coupon is Redeemable
```html
# Sample Request
http://us.intouch.capillarytech.com/v2/coupon/is_redeemable?mobile=917601000000&code=6B88U6ED,V080OLI6&details=false
```
> Sample Response

```json
{
   "customer":{
      "id":325666373,
      "profiles":[
         {
            "accountId":"",
            "autoUpdateTime":"2019-04-04T11:47:28+05:30",
            "commChannels":[

            ],
            "fields":{

            },
            "firstName":"firstName_667095",
            "identifiers":[
               {
                  "type":"email",
                  "value":"autoemail7601667095@gmail.com"
               },
               {
                  "type":"externalId",
                  "value":"ext_id7601667095"
               },
               {
                  "type":"mobile",
                  "value":"917601667095"
               }
            ],
            "lastName":"lastName_667095",
            "userId":325666373
         }
      ]
   },
   "redemption":[
      {
         "appendedErrorMessage":"",
         "code":"6B88U6ED",
         "isAbsolute":false,
         "isRedeemable":true,
         "numberOfRedemptionsByUser":0,
         "redemptionsLeft":-1,
         "warnings":[

         ]
      },
      {
         "appendedErrorMessage":"",
         "code":"V080OLI6",
         "isAbsolute":false,
         "isRedeemable":true,
         "numberOfRedemptionsByUser":0,
         "redemptionsLeft":-1,
         "warnings":[

         ]
      }
   ],
   "redemptionStatus":{
      "code":700,
      "message":"Coupon isRedeem successful",
      "status":true
   },
   "warnings":[

   ]
}
```

Lets you check whether a set of coupons can be redeemed or not.

### Resource Information
| | |
--------- | ----------- |
URI | `/is_redeemable?{customerIdentifier}&code={value1},{value2}...&details={true/extended}`
Authentication  | Yes
HTTP Method  | GET
Batch Support  | Yes

### Request URL
`http://{host}/v2/coupon/is_redeemable?{customerIdentifier}&code={value1},{value2}...&details={true/extended}`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the identifier of the customer for whom you want to check whether the coupon is redeemable
code* | Pass the coupon codes that you want to check separating each with a comma (,)
details=true | Retrieves the details of the coupon series
details=extended | Retrieves the details of coupon configurations (set on campaign) of that specific coupon series

<aside class="warning"> You can pass either coupon id or code. Any one parameter is required</aside>



