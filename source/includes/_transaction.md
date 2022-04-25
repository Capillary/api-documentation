# Transaction
A transaction represents a purchase or return event. 

Transactions are classified into the following types:

* **Regular**: Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and not-interested.
* **Return** : Transactions that are returned at the PoS. Return transactions need an identifier reference. Hence, only loyalty and non-loyalty transactions can be returned through APIs. See Transaction Return API for more details.
* **Mixed**: A transaction that involves both regular and return is termed as mixed transaction.





## Add/Return Transaction (Bulk)

Lets you add or return one or more transactions to the Capillary system. It supports both loyalty and not-interested transactions.

* If CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.


<aside class="notice">You cannot register a customer with this API. Hence, you need to pass only registered identifiers for regular transactions.</aside>

### Prerequisites
Before using transaction APIs, understand the transaction configurations of your organization. You can see the transaction related settings on InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing**.

* Mandatory parameters required to submit a transaction.
* Scope of transaction number uniqueness (store level or TILL level) and duration for which repetition is not allowed (20 days, 30 days etc.).
* Maximum and minimum amount allowed per transaction.
* Maximum and minimum amount allowed per line-item.

The `transaction/add` API lets you do the following.

* Supports transactions with Product Variant and Product Bundle details.
* Adds product variant to the database when a new variant product is passed with an existing base product.
* Adds  base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant .
* Adds custom field and extended field details both at the transaction and line-item level.

**Variant Product**: A same product having different variations in terms of common properties such as size, and color.

**Product Bundle**: A group of items that are sold as a single pack. This can include Combo items (Example: pack of 2, combo offers), Split items (Example: a necklace having gold rate, store rate, making charge, wastage charge and so on) and add-on items (Example: Pizza with extra cheese, and personalized toppings) 

<aside class="notice">
* To add variant details, pass the variant id at the line-item level. For bundle products, pass each line item details in the respective bundle type (split/combo/add-on).* 
</aside>



> Sample Request

```html
https://eu.intouch.capillarytech.com/v2/transactions/bulk
```

> Sample POST Request (of Add Transaction)

```json
[
   {
      "identifierType":"id",
      "identifierValue":"98662653",
      "source":"INSTORE",
      "accountId":"",
      "type":"REGULAR",
      "billNumber":"num-668288857749",
      "billingDate":"2021-09-05T20:01:51+05:30",
      "discount":"10.0",
      "billAmount":"4800.0",
      "note":"this is test",
      "grossAmount":"110",
      "deliveryStatus":"SHIPPED",
	  "userGroup2Id":1949,
	  "userGroup2PrimaryUserId":414936033,
	  "userGroup2ExternalId": "",
	  "userGroup2PrimaryUserIdentifierType":"email",
      "userGroup2PrimaryUserIdentifierVale": "example@example.com",
      "userGroup2PrimaryUserSource":"WEB_ENGAGE",
      "userGroup2PrimaryUserAccountId":""
      "paymentModes":[
         {
            "mode":"CardPayment",
            "value":"5100.0",
            "notes":"SPay",
            "attributes":{
               "card_type":"Visa"
            }
         },
         {
            "mode":"NetBanking",
            "value":"4800.0",
            "notes":"Net Banking"
         }
      ],
      "redemptions":{
         "pointsRedemptions":[
            123453,
            345673
         ],
         "couponRedemptions":[
            727272,
            237878
         ]
      },
      "extendedFields":{
         "ship_first_name":"Sam",
         "ship_last_name":"Sundar"
      },
      "customFields":{
         "booking_ota":"Website",
         "trans_cf_a":"abc"
      },
      "lineItemsV2":[
         {
            "itemCode":"sku_486741_2",
            "amount":100.5,
            "description":"sample description",
            "discount":0,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_2",
            "amount":100.5,
            "description":"sample description",
            "discount":0,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_3",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "gender":"Male",
               "marital_status":"Married"
            },
            "customFields":{
               "cashierid":"jim2345",
               "city":"Bangalore"
            }
         },
         {
            "itemCode":"sku_486741_4",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_5",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_6",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_7",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_8",
            "amount":100.5,
            "discount":0,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_9",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_10",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         }
      ]
   },
   {
      "identifierType":"mobile",
      "identifierValue":"919740000000",
      "source":"INSTORE",
      "accountId":"",
      "type":"REGULAR",
      "billNumber":"num-668288857765",
      "discount":"10",
      "billAmount":"200",
      "note":"this is test",
      "grossAmount":"110",
      "deliveryStatus":"SHIPPED",
      "paymentModes":[
         {
            "attributes":{
               "BankNameAPI":"value_6555444"
            },
            "notes":"notes_6555444",
            "mode":"CHECKAPI",
            "value":"500"
         }
      ],
      "extendedFields":{
         "ship_first_name":"22.02",
         "ship_last_name":"10.50"
      },
      "customFields":{
         "trans_cf_a":"abc"
      },
      "lineItemsV2":[
         {
            "itemCode":"sku_486741_2",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_2",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_3",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_4",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_5",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_6",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_7",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_8",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "gender":"Male",
               "marital_status":"Married"
            },
            "customFields":{
               "cashierid":"jim2345",
               "city":"Bangalore"
            }
         },
         {
            "itemCode":"sku_486741_9",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         },
         {
            "itemCode":"sku_486741_10",
            "amount":100.5,
            "rate":100.5,
            "qty":1,
            "extendedFields":{
               "MetalRate":"22.02",
               "GrossWeight":"10.50"
            }
         }
      ],
      "loyaltyPromotionIdentifiers":[
         "ABC-12345",
         "Diwali_Promotion_2020",
         "New_Year_Promotion_2020"
      ],
      "promotionEvaluationId":"60f5713c4c5cb92ab2da320e",
      "appliedPromotionIdentifiers":[
         "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn0=",
         "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn1="
      ]
   }
]
```

> Sample POST Request (Return Transaction)

```json
[
  {
    "identifierType": "id",
    "identifierValue": "919035000000",
    "source": "INSTORE",
    "type": "RETURN",
    "returnType": "LINE_ITEM",
    "billNumber": "num-6682818",
	"billingDate": "2020-12-28T10:18:01.534Z",
    "discount": "10",
    "billAmount": "210",
    "paymentModes": [
      {
        "attributes": {
          "CASH": "200"
        }
      }
    ],
    "redemptions": {
      "pointsRedemptions": [
        123453,
        345673
      ],
      "couponRedemptions": [
        727272,
        237878
      ]
    },
    "extendedFields": {
      "ship_first_name": "22.02",
      "ship_last_name": "10.50"
    },
    "customFields": {
      "trans_cf_a": "abc"
    },
    "lineItemsV2": [
      {
        "itemCode": "sku_486741_2",
        "description": "ribon box",
        "amount": 50,
        "rate": 100,
        "qty": 1,
        "value": 100,
        "discount": 50
      },
      {
        "itemCode": "sku_486741_2",
        "description": "Lower",
        "amount": 100,
        "rate": 100,
        "qty": 1,
        "value": 100,
        "discount": 0
      },
      {
        "itemCode": "sku_486741_3",
        "description": "Upper T-shirt",
        "amount": 60,
        "rate": 100,
        "qty": 1,
        "value": 100,
        "discount": 40
      }
    ]
  },
]
```


> Sample Response

```json
{
  "response": [
    {
      "entityId": 360744866,
      "result": {
        "identifierType": "id",
        "identifierValue": "98662653",
        "source": "INSTORE",
		"accountId": "",
        "extendedFields": {
          "flight_count": 1
        },
		"deliveryStatus": "SHIPPED",
        "type": "REGULAR",
        "billAmount": 4808,
        "billNumber": "Test144e79c384598f5f9a265581d52a0a1471747957",
        "discount": 0,
		"grossAmount": 110.0,
        "note": "this is test",
		"redemptions":{
         "pointsRedemptions":[
            123453,
            345673
         ],
         "couponRedemptions":[
            727272,
            237878
         ]
      },
        "lineItemsV2": [
          {
            "amount": 8,
            "itemCode": "CGST",
            "qty": 1,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {
              "GrossWeight": "10.50",
              "MetalRate": "22.02"
            }
          },
          {
            "amount": 334,
            "itemCode": "CONA",
            "qty": 1,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 98,
            "itemCode": "SGST",
            "qty": 1,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          }
        ],
        "customFields": {
          "booking_ota": "Website",
          "conf_no": "508705538",
          "fare_class": "X",
          "flight_destination": "CCU",
          "flight_number": "550",
          "flight_source": "DEL",
          "seat_number": "27B",
          "trip_type": "1"
        },
        "notInterestedReason": "",
        "sideEffects": [
          {
            "entityType": "USER",
            "rawAwardedPoints": 480.8,
            "awardedPoints": 480,
            "type": "points"
          },
	      {
            "id": 397760089,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "2AWZSLSN",
            "validTill": "2029-09-01T23:59:59+05:30",
            "description": "NewCouponForAll",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "2AWZSLSN",
            "type": "coupon"
          }
        ],
        "paymentModes": [
          {
            "mode": "NetBanking",
            "value": 4808,
            "notes": "Internet banking"
          },
          {
            "mode": "UPI",
            "value": 4808,
            "notes": "UPI Pay",
            "attributes": {
              "name": "BankNameAPI",
              "value": "value_6555444"
            }
          }
        ],
        "billingDate": "2021-07-05T14:10:00Z",
        "useDefaultFleetGroup": false
      },
      "errors": [],
      "warnings": [
        {}
      ]
    },
    {
      "entityId": 360744868,
      "result": {
        "identifierType": "id",
        "identifierValue": "98662653",
        "source": "INSTORE",
        "extendedFields": {},
        "deliveryStatus": "SHIPPED",
        "type": "REGULAR",
        "billAmount": 4808,
        "billNumber": "test244e79c384598f5f9a265581d652a010a14717465",
        "currency": "INR",
        "discount": 0,
        "lineItemsV2": [
          {
            "amount": 8,
            "itemCode": "CGST",
            "qty": 1,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 98,
            "itemCode": "SGST",
            "qty": 1,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          }
        ],
        "customFields": {
          "booking_ota": "Website",
          "conf_no": "508705535",
          "fare_class": "X",
          "flight_destination": "CCU",
          "flight_number": "550",
          "flight_source": "DEL",
          "seat_number": "28B",
          "trip_type": "1"
        },
        "notInterestedReason": "",
        "sideEffects": [
          {
            "entityType": "USER",
            "rawAwardedPoints": 480.8,
            "awardedPoints": 480,
            "type": "points"
          }
        ],
        "paymentModes": [
          {
            "mode": "Card Payment",
            "value": 4808,
            "notes": "CardPay",
            "attributes": {
              "card_type": "Debit Card"
            }
          }
        ],
        "billingDate": "2021-07-05T14:10:00Z",
        "useDefaultFleetGroup": false
      },
      "errors": [
	   {
            "status": false,
            "code": 8084,
            "message": "Customer details not sent"
        }
	  ],
      "warnings": [
        {
		 "status": false,
         "code": 91016,
         "message": "Extended field name gender is invalid."
		}
      ]
    }
  ],
  "totalCount": 2,
  "failureCount": 0
}

```

### Resource Information

| | |
--------- | ----------- |
URI | `/v2/transactions/bulk`
HTTP Method | POST
API Version | v2
Batch Support | Yes
Rate Limited | Yes


### Request Header (Optional)

Header | Description
------ | -----------
X-CAP-DIRECT-REPLAY | Pass `true` to add the call to the event execution queue (reply event) - in this case, transaction is added and other events will be executed later. Pass `false` to directly execute the event - you will get response along with other event details (side effects).
X-CAP-DIRECT-REPLAY | Pass `true` to add the transaction but enable loyalty events to trigger at a later point of time. The events will be pushed to queue and will be executed.


### Request URL

`{host}/v2/transactions/bulk`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Pass any of the registered identifier name of the customer. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, or `fbId` (Facebook ID), `id`.
identifierValue* | string | Pass the respective identifier value. For example if `identifierType` is mobile, `identifierValue` is mobile number.
source* | enum | Pass the source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID.
extendedFields | obj | Valid transaction level extended field details in name and value pairs.
currencyCode | string | ISO currency code of the transaction to add transaction with local currency. For example, `INR` for Indian Rupee, SGD for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar. Pass the currency code that are supported for your org (InTouch > Organization Setup) and ensure the currency conversion ratio is set using `v2/currencyratio`.
addWithLocalCurrency | boolean | Pass `true` to add a transaction in local currency.  
deliveryStatus | enum | Delivery status of the item. Values: `PLACED`, `PROCESSED`, `SHIPPED`, `DELIVERED`, `RETURNED`. You can update the status using `v2/transaction/update`.
userGroup2Id | int | Unique ID of the user group to which the transaction needs to be associated with. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
userGroup2PrimaryUserId | long | Unique user ID of the primary member of group to which the transaction needs to be associated with. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
userGroup2ExternalId | string | Unique external ID of the user group to which the transaction needs to be associated with. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
userGroup2PrimaryUserIdentifierType | enum | Identifier type  used to identify group primary member. Value: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, or `fbId` (Facebook ID), `id`.
userGroup2PrimaryUserIdentifierValue | string | Value of the specified group identifier type.
userGroup2PrimaryUserSource | enum | Source in which the identifier of the group primary member is registered. Value: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
userGroup2PrimaryUserAccountId | string | Account ID for sources with multiple accounts such as WECHAT. 
type* | enum | Type of transaction. Supported value: `REGULAR` for loyalty transactions. `RETURN` for return transactions. `NOT_INTERESTED`, `RETURN,NOT_INTERESTED_RETURN`.
notInterestedReason | string | Notes on why the customer is not interested to enroll into the loyalty (`type`=`NOT_INTERESTED`). Max characters supported - 255. 
returnType** | enum | For a return transaction, pass the return type. Value: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.
billAmount* | double | Net transaction amount.
billNumber* |  string | Unique transaction number. For a return transaction, this is the original transaction number of the return item. In transaction add the uniqueness of the `billNumber` is either at till, store, or org, depends on the configuration. `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set on InTouch **Settings** > **System & Deployment** > **InTouch POS Configuration** > **Billing**.  
billingDate | date-time | Date and time of the transaction in the ISO  8601 format - `YYYY-MM-DDTHH:MM:SSZ`.
discount | double | Discount availed for the transaction or line item (discount amount).
grossAmount | double | Transaction amount before discount.
outlierStatus | enum | Transaction level outlier status. Values: `NORMAL`, `INTERNAL`, `FRAUD`, `OUTLIER`, `TEST`, `DELETED`, `FAILED`, `OTHER`. This overrides the outlier status of the configured outlier settings.
note | string | Additional information about the transaction.
lineItemsV2 | obj | Details of line-items.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount | double | Net line item amount. value-discount=amount
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | One or two liner description of the line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discount | int | Discount received on the line item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemCode | string | Unique code of the transaction line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qty | double | Quantity of the current line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate | double | Price of each line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serial | string | Serial number of the line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Gross amount of the item. Usually, rate*qty=value. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnable | boolean | Pass `true` if the item can be returned post purchase.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnableDays | int | Maximum number of days the item is allowed to return. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customFields | obj | Transaction or line-item level custom field details.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgUrl | string | URL of the product image.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributes | obj | Attributes of the product in name-value pairs.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comboDetails | obj | Details of combo, bundle, or split items.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemCode | string | Unique line-item code.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | double | Quantity of the current combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | One or two liner description of add-on, split, or combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate | double | Price of the combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Item price excluding discount.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comboType | string | Type of the combo. Value: `COMBO_PARENT`, `COMBO_ITEM`, `ADD_ON_ITEM`, `SPLIT`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addOnDetails | obj | Details of add-on item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;splitDetails | obj | Details of split item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentBillNumber | string | Actual transaction number of the return item. Applicable only for mixed transaction (involves both transaction and return).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;purchaseTime | date-time | Actual date and time of purchase in ISO 6801 format (ex: 2021-09-09T19:50:07+05:30).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnType | enum | Return type of the line item. Value: `AMOUNT`, `FULL`, `LINE_ITEM`. Not applicable if the transaction level returnType is `FULL` or `AMOUNT`. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the line item. Value: `REGULAR` (for regular line item purchase), `NOT_INTERESTED` (for line item purchase with no customer tagging), `RETURN` (to return a regular line item ), `NOT_INTERESTED_RETURN` (to return a line item of no-interested transaction).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;appliedPromotionIdentifiers | array | Based 64 encoded format Cart or catalog promotions applied to the transaction.<br>It will have the details mentioned here `{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extendedFields | obj | Valid transaction line-item level extended field details.
customFields | obj | Details of transaction level or transaction line-item level custom fields.
attribution | obj | Mapping to tag the transaction to a different user or till (other than the current user) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createDate | date-time | Date of the transaction in ISO 8601 standard format. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdBy | obj | User ID or store entity (like TILL ID, store ID) associated with the transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code | string | Unique code of the entity.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the attribution entity. Value: `ZONE`, `CONCEPT`, `STORE`, `TILL`, `STR_SERVER`, `ADMIN_USER`, `ASSOCIATE`, `RULE`, `OU`.
purchaseTime | date-time | Actual date of transaction of the returning bill in Date and time of the transaction in ISO 8601 standard - `YYYY-MM-DDTHH:MM:SSZ`.
redemptions | obj | Details of points and coupon redemptions for the  transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
paymentModes | obj | Payment details used for the transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode | string | Mode of payment.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Amount paid through the current mode.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;notes |string | Additional information related to the payment mode. Max characters - 250.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributes | obj | Attributes of the payment mode as name-value pairs.
promotionEvaluationId | string | Promotion evaluation code (cart/catalog) applied for the transaction.
appliedPromotionIdentifiers | array | Base 64 encoded string of Cart/catalog promotion identifiers that are applied to the transaction.<br>It will have the details mentioned here `{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}`
loyaltyPromotionIdentifiers | array | Identifier(s) of loyalty promotion(s) that you want to tag to the transaction.






<aside class="notice">Parameters marked with * are mandatory. </aside>


### Response Headers

Header | Description
------ | -----------
X-CAP-REQUEST-ID | Unique API request ID generated. This is used for tracing and debugging purposes.
org_id | Unique ID of the current org.
till | Till code associated with the transaction.


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
entityId | long | Unique transaction ID generated.
billingDate | date-time | Date and time of the transaction in `HH-MM-DDThh:mm:ssTZD`



## Add Transaction (Single)

Lets you add a new transaction or return an existing transaction. It supports both loyalty and not-interested transactions.


> Sample Request

```html
https://us.api.capillarytech.com/v2/transactions?source=instore&identifierValue=GOLD400000000000000022020&identifierName=cardnumber&rawSideEffects=true&accountId=
```

> Sample POST Request (REGULAR)

```json
{
  "type": "REGULAR",
  "billNumber": "num-1234",
  "discount": "10",
  "billAmount": "200",
  "note": "This is test",
  "grossAmount": "110",
  "deliveryStatus": "SHIPPED",
  "userGroup2Id":1949,
  "userGroup2PrimaryUserId":414936033,
  "userGroup2ExternalId": "",
    "paymentModes": [
        {
          "mode": "Card Payment",
          "value": 5104,
		  "notes": "Sample notes",
          "attributes": {
             "card_type": "Visa"
           }
        }
    ], 
  "extendedFields": {
    "ship_first_name": "Ram",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "paymentmode": "cash"
  },
  "lineItemsV2": [
    {
      "itemCode": "sku_234_2",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    },
    {
      "itemCode": "sku_sdf_10",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    }
  ],
  "promotionEvaluationId":"60f5713c4c5cb92ab2da320e", 
  "loyaltyPromotionIdentifiers":[
	"ABC-12345",
    "Diwali_Promotion_2020",
    "New_Year_Promotion_2020"
  ],
  "appliedPromotionIdentifiers": ["eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn0=", "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn1="
   ]
}  
```
> Sample POST Request (Mixed Transaction)

```json
{
  "type": "REGULAR",
  "billNumber": "bill00076",
  "discount": "100",
  "billAmount": "1900",
  "note": "this is test",
  "grossAmount": "2000",
  "deliveryStatus": "DELIVERED",
  "userGroup2Id":98765,
  "userGroup2PrimaryUserId":"",
  "userGroup2ExternalId": "",
  "lineItemsV2": [
      {
        "amount": 1200,
        "parentBillNumber": "bill00075",
        "returnType":"LINE_ITEM",
        "type":"RETURN",
        "description": "blue large jeans",
        "discount": 0,
        "itemCode": "ITEMJEANS0005",
        "qty": 1,
        "rate": 1200,
        "serial": 1,
        "value": 1200,
        "returnable": false,
        "returnableDays": 0,
        "customFields": {},
        "imgUrl": ""
      },
      {
        "amount": 6570,
        "type":"REGULAR",
        "description": "blue large jeans",
        "discount": 0,
        "itemCode": "ITEMJEANS0ih05",
        "qty": 1,
        "rate": 1200,
        "serial": 1,
        "value": 1200,
        "returnable": false,
        "returnableDays": 0,
        "customFields": {},
        "imgUrl": ""
      }
    ],
  "promotionEvaluationId":"",
  "appliedPromotionIdentifiers":[""]
}
```


> Sample Request (NOT_INTERESTED)

```json
{
  "type": "NOT_INTERESTED",
  "billNumber": "bill12345",
  "purchaseTime": "",
  "discount": "100",
  "billAmount": "1900",
  "note": "this is test",
  "grossAmount": "2000",
  "deliveryStatus": "DELIVERED",
  "lineItemsV2": [
      {
        "amount": 1200000000,
        "parentBillNumber": "",
        "returnType":"",
        "type":"",
        "description": "blue large jeans",
        "discount": 0,
        "itemCode": "ITEMJEANS0005",
        "qty": 1,
        "rate": 1200,
        "serial": 1,
        "value": 1200,
        "returnable": false,
        "returnableDays": 0,
        "customFields": {},
        "imgUrl": ""
      },
      {
        "amount": 6570,
        "type":"",
        "description": "blue large jeans",
        "discount": 0,
        "itemCode": "ITEMJEANS0ih05",
        "qty": 1,
        "rate": 1200,
        "serial": 1,
        "value": 1200,
        "returnable": false,
        "returnableDays": 0,
        "customFields": {},
        "imgUrl": ""
      }
    ],
    "paymentModes": [
        {
        }
    ],
  "promotionEvaluationId":"",
  "appliedPromotionIdentifiers":[""]
}
```

> Sample Response

```json
{
    "createdId": 2147939409,
    "warnings": [],
    "errors": [],
    "sideEffects": [
		{
            "entityType": "USER",
            "rawAwardedPoints": 1700.000,
            "awardedPoints": 1700,
            "type": "points"
        },
        {
            "id": 399000028,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "KNRYHMRW",
            "validTill": "2029-09-01T23:59:59+05:30",
            "description": "NewCouponForAll",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "KNRYHMRW",
            "type": "coupon"
        }
    ],
	"rawSideEffects": [
        {
            "awardOn": "BILL",
            "awardStrategyId": "35637",
            "awardedOn": "23rd Sep, 2021",
            "awardedOnMillis": "1632397476258",
            "billNumber": "bill00017",
            "evaluatedEntity": "USER",
            "expiryDate": "24th Sep, 2021",
            "expiryDateMillis": "1632508199999",
            "expiryStrategyId": "79650",
            "lineItemId": "-1",
            "pointTypeId": "6463",
            "pointTypeIsRedeemable": "true",
            "pointTypeName": "Main",
            "points": "1500.000",
            "programId": "1016",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "sourceId": "2147876300",
            "sourceType": "Bill",
            "tenderCodeId": "-1",
            "type": "AWARD"
        },
        {
            "awardOn": "BILL",
            "awardStrategyId": "60025",
            "awardedOn": "23rd Sep, 2021",
            "awardedOnMillis": "1632397476258",
            "billNumber": "bill00017",
            "evaluatedEntity": "USER",
            "expiryDate": "23rd Sep, 2021",
            "expiryDateMillis": "1632421799999",
            "expiryStrategyId": "60024",
            "lineItemId": "-1",
            "pointTypeId": "6463",
            "pointTypeIsRedeemable": "true",
            "pointTypeName": "Main",
            "points": "200.000",
            "programId": "1016",
            "promoId": "-1",
            "promoIdentifier": "",
            "promoName": "",
            "sourceId": "2147876300",
            "sourceType": "Bill",
            "tenderCodeId": "-1",
            "type": "AWARD"
        },
        {
            "amount": "0.000",
            "delayInSec": "0",
            "emailDelayInSec": "0",
            "emailTemplateId": "0",
            "expiryDate": "1882981799000",
            "issueDate": "Thu Sep 23 17:14:37 IST 2021",
            "maxRedemptionDivisor": "0.000",
            "mobilePushDelayInSecs": "0",
            "orgId": "50074",
            "programId": "1016",
            "shortenUrlCheck": "0",
            "smsSenderId": "7022012384",
            "smsTemplate": "hi, please enjoy this offer: {{voucher_code}}",
            "sourceId": "2147876300",
            "sourceType": "Bill",
            "sourceTypeId": "1",
            "type": "PE_ISSUE_VOUCHER",
            "userId": "416670898",
            "voucherCode": "OKN8J3L6",
            "voucherId": "398995893",
            "voucherSeriesId": "363653",
            "weChatDelay": "0"
        },
        {
            "amount": "0.000",
            "delayInSec": "0",
            "emailDelayInSec": "0",
            "emailTemplateId": "0",
            "expiryDate": "1882981799000",
            "issueDate": "Thu Sep 23 17:14:37 IST 2021",
            "maxRedemptionDivisor": "0.000",
            "mobilePushDelayInSecs": "0",
            "orgId": "50074",
            "programId": "1016",
            "shortenUrlCheck": "0",
            "smsTemplate": "Hi, your coupon: {{voucher_code}}",
            "sourceId": "2147876300",
            "sourceType": "Bill",
            "sourceTypeId": "1",
            "type": "PE_ISSUE_VOUCHER",
            "userId": "416670898",
            "voucherCode": "0X7UFW20",
            "voucherId": "398995894",
            "voucherSeriesId": "363653",
            "weChatDelay": "0"
        }
    ]
    "customerInfo": {
        "firstName": "Tom",
        "lastName": "Sawyer"
    }
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `/v2/transactions?{queryParams}`
HTTP Method | POST
API Version | v2
Batch Support | No
Rate Limited | Yes

### Request Header (optional)

Header | Description
------ | -----------
X-CAP-DIRECT-REPLAY | Pass `true` to add the call to the event execution queue (reply event) - in this case, transaction is added and other events will be executed later. Pass `false` to directly execute the event.




### Request URL

`{host}/v2/transactions?source={source}&identifierName={identifierName}&identifierValue={identifierValue}&accountId={accountId}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Pass any of the registered identifier name of the customer. Values: `mobile`, `email`, `externalId`, `id`, `wechat`,`martjackId`,  `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
identifierValue* | string | Pass the respective identifier value. For example if `identifierType` is mobile, `identifierValue` is mobile number.
source* | enum | Pass the source from which the transaction is made. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for `INSTORE` source.
use_async | boolean | Pass `true` to run Loyalty activities in the background, side effects will not be returned in the API response. If `false`, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response.
rawSideEffects | boolean | Pass `true` to get complete details of incentives such as awardOn, expiryDate, strategyIds and so on. See `rawSideEffects` in response for more details. 


<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
extendedFields | obj | Valid transaction level extended field details in name and value pairs.
currencyCode | string | ISO currency code of the transaction to add transaction with local currency. For example, `INR` for Indian Rupee, SGD for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar. Pass the currency code that are supported for your org (InTouch > Organization Setup) and ensure the currency conversion ratio is set using `v2/currencyratio`.
addWithLocalCurrency | boolean | Pass `true` to add a transaction in local currency. 
deliveryStatus | enum | Delivery status of the item. Values: `PLACED`, `PROCESSED`, `SHIPPED`, `DELIVERED`, `RETURNED`. You can update the status using You can update the status using v2 PUT `/transactions`.
userGroup2Id | int | External ID of the user group to be associated with the transaction. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
userGroup2PrimaryUserId | long | ID of the primary user of the group to be associated with the transaction. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
userGroup2ExternalId | string | External ID of the user group to be associated with the transaction. Any one among the parameters with `userGroup2` is required to associate the transaction with a group.
type* | enum | Type of transaction. Supported value: `REGULAR` for loyalty transactions. `RETURN` for return transactions. `NOT_INTERESTED`, `RETURN,NOT_INTERESTED_RETURN`.
notInterestedReason | string | Notes on why the customer is not interested to enroll into the loyalty (`type`=`NOT_INTERESTED`). Max characters supported - 255. 
returnType** | enum | For a return transaction, pass the return type. Value: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.
billAmount* | double | Net transaction amount.
billNumber* |  string | Unique transaction number for normal or mixed transactions and original transaction number for return transactions. The uniqueness either at till, store, or org, depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set on InTouch **Settings** > **System & Deployment** > **InTouch POS Configuration** > **Billing**.  
billingDate | date-time | Date and time of the transaction in the ISO  8601 format - `YYYY-MM-DDTHH:MM:SSZ`.
discount | double | Discount availed for the transaction or line item (discount amount) .
grossAmount | double | Transaction amount before discount.
outlierStatus | enum | Transaction level outlier status. Values: `NORMAL`, `INTERNAL`, `FRAUD`, `OUTLIER`, `TEST`, `DELETED`, `FAILED`, `OTHER`. This overrides the outlier status of the configured outlier settings.
note | string | Additional information about the transaction.
lineItemsV2 | obj | Details of line-items.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount | double | Net line item amount. value-discount=amount.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | One or two liner description of the line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discount | int | Discount received on the line item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemCode | string | Unique code of the transaction line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qty | double | Quantity of the current line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate | double | Price of each line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serial | string | Serial number of the line-item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Gross amount of the item. Usually, rate*qty=value. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnable | boolean | Pass `true` if the item can be returned post purchase.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnableDays | int | Maximum number of days the item is allowed to return. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customFields | obj | Transaction or line-item level custom field details.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgUrl | string | URL of the product image.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributes | obj | Attributes of the product in name-value pairs.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comboDetails | obj | Details of combo, bundle, or split items.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemCode | string | Unique line-item code.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | double | Quantity of the current combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | One or two liner description of add-on, split, or combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate | double | Price of the combo item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Item price excluding discount.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comboType | string | Type of the combo. Value: `COMBO_PARENT`, `COMBO_ITEM`, `ADD_ON_ITEM`, `SPLIT`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addOnDetails | obj | Details of add-on item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;splitDetails | obj | Details of split item.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentBillNumber | string | Actual transaction number. Applicable only for mixed transaction (transaction that involves both purchaase and return - exchange).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;purchaseTime | date-time | Actual date of transaction of the return item in ISO 8601 format - `YYYY-MM-DDTHH:MM:SSZ`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returnType | enum | Return type of the line item. Value: `AMOUNT`, `FULL`, `LINE_ITEM`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the line item. Value: `REGULAR` (for regular line item purchase), `NOT_INTERESTED` (for line item purchase with no customer tagging), `RETURN` (to return a regular line item ), `NOT_INTERESTED_RETURN` (to return a line item of no-interested transaction).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;appliedPromotionIdentifiers | array | Cart or catalog promotions applied to the transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extendedFields | obj | Valid transaction line-item level extended field details.
customFields | obj | Details of transaction level or transaction line-item level custom fields.
attribution | obj | Mapping to tag the transaction to a different user or till (other than the current user) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createDate | date-time | Date of the transaction in ISO 8601 standard format. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdBy | obj | User ID or store entity (like TILL ID, store ID) associated with the transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code | string | Unique code of the entity.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the attribution entity. Value: `ZONE`, `CONCEPT`, `STORE`, `TILL`, `STR_SERVER`, `ADMIN_USER`, `ASSOCIATE`, `RULE`, `OU`.
purchaseTime | date-time | Actual date of transaction of the returning bill in Date and time of the transaction in ISO 8601 standard - `YYYY-MM-DDTHH:MM:SSZ`.
redemptions | obj | Details of points and coupon redemptions for the  transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
paymentModes | obj | Payment details used for the transaction.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode | string | Mode of payment.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | double | Amount paid through the current mode.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;notes |string | Additional information related to the payment mode. Max characters - 250.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributes | obj | Attributes of the payment mode as name-value pairs.
promotionEvaluationId | string | Promotion evaluation code (cart/catalog) applied for the transaction.
appliedPromotionIdentifiers | array | Base 64 encoded string of Cart/catalog promotion identifiers that are applied to the transaction.<br>It will have the details mentioned here `{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}`
loyaltyPromotionIdentifiers | array | Identifier(s) of loyalty promotion(s) that you want to tag to the transaction.



<aside class="notice">Parameters marked with * are mandatory. Pass `enum` values as strings</aside>



### Response Headers

Header | Description
------ | -----------
X-CAP-REQUEST-ID | Unique API request ID generated. This is used for tracing and debugging purposes.
org_id | Unique ID of the current org.
till | Till code associated with the transaction.


## Update Transaction


Lets you update deliveryStatus, custom fields, and extended field details of a transaction.


> Sample Request

```html
https://us.api.capillarytech.com/v2/transactions?identifierName=id&identifierValue=401031250&points=MLP
```


> Sample PUT Request

```json
{
  "id": 2148327179,
  "number": "bill00009",
  "customFields": {},
  "extendedFields": {},
  "loyaltyPromotionIdentifiers": [
    
  ],
  "deliveryStatus": "PLACED",
  "tillCode": "mobilepush.1"
}
```

> Sample Response

```json
{
    "warnings": [],
    "errors": [],
    "loyaltyDetails": [
        {
            "redeemed": 0.0,
            "expired": 298400.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 298440.0,
            "loyaltyPoints": 40.0,
            "cumulativePurchases": -1.1996371E9,
            "loyaltyId": 92523645,
            "currentSlab": "bronze",
            "nextSlab": "silver",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "silver",
            "slabSNo": 1,
            "slabExpiryDate": "2121-03-02T23:59:59+05:30",
            "programId": 1016,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 40.0,
            "totalReturnedPoints": 0.0,
            "programTitle": "mobile pushDefaultProgram",
            "programDescription": "Default program for mobile push",
            "programPointsToCurrencyRatio": 0.75
        },
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "cumulativePurchases": 207400.0,
            "loyaltyId": 92523645,
            "currentSlab": "NONE",
            "nextSlab": "GOLD",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "GOLD",
            "slabSNo": 1,
            "slabExpiryDate": "2121-03-02T23:59:59+05:30",
            "programId": 1273,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 0.0,
            "totalReturnedPoints": 0.0,
            "programTitle": "www",
            "programDescription": " ",
            "programPointsToCurrencyRatio": 1.0
        }
    ]
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `/v2/transactions?{queryParams}`
HTTP Method | PUT
API Version | v2
Batch Support | No
Rate Limited | Yes

### Request Header (optional)

Header | Description
------ | -----------
X-CAP-DIRECT-REPLAY | Pass `true` to add the call to the event execution queue (reply event) - in this case, transaction is added and other events will be executed later. Pass `false` to directly execute the event.




### Request URL

`{host}/v2/transactions?source={source}&identifierName={identifierName}&identifierValue={identifierValue}&accountId={accountId}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Pass any of the registered identifier name of the customer. Values: `mobile`, `email`, `externalId`, `id`, `wechat`,`martjackId`,  `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
identifierValue* | string | Pass the respective identifier value. For example if `identifierType` is mobile, `identifierValue` is mobile number.
source* | enum | Pass the source from which the transaction is made. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for `INSTORE` source.


<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | long | Unique ID of the transaction generated internally.
number** | string | Unique transaction number that needs to be updated.
extendedFields | obj | Valid transaction level extended field details in name and value pairs.
deliveryStatus | enum | Delivery status of the item. Values: `PLACED`, `PROCESSED`, `SHIPPED`, `DELIVERED`, `RETURNED`.

<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>



## Get Transaction Details

> Sample Request

```html
https://eu.api.capillarytech.com/v2/transactions/38236823?type=REGULAR
```

> Sample Response

```json
{
   "useDefaultFleetGroup":false,
   "attribution":{
      "createDate":"2021-09-09T11:49:14+05:30",
      "createdBy":{
         "id":50006796,
         "code":"mobilepush.1",
         "description":"",
         "name":"mobilepush.1",
         "type":"TILL",
         "adminType":"GENERAL",
         "isActive":true,
         "isOuEnabled":false,
         "timeZoneId":191,
         "currencyId":216,
         "languageId":1
      },
      "modifiedBy":{
         
      },
      "modifiedDate":"2021-09-09T11:49:17+05:30"
   },
   "billDetails":{
      "amount":200.0,
      "billingStore":{
         "id":50006795,
         "code":"storecode",
         "description":"webenagestore",
         "name":"webstore1",
         "type":"STORE",
         "adminType":"GENERAL",
         "isActive":true,
         "isOuEnabled":false,
         "timeZoneId":191,
         "currencyId":216,
         "languageId":1
      },
      "billNumber":"num-6682855857799",
      "billingTime":"2021-09-09T11:49:14+05:30",
      "discount":10.0,
      "grossAmount":110.0,
      "note":"this is test",
      "returnDetails":{
         "canceled":false
      },
      "niReturnDetails":{
         
      },
      "invalidBill":false
   },
   "creditNote": {
        "amount": 1800.0,
        "notes": "Reason for credit",
        "number": "numbr9959104543",
        "validity": "2022-09-09",
        "updateAmount": false
    },
   "customFields":{
      "gender": "male"
   },
   "addWithLocalCurrency":false,
   "async":false,
   "useV2":false,
   "customerId":316726161,
   "id":2147866485,
   "lineItems":[
      {
         "id":2153881142,
         "customerId":0,
         "details":{
            "amount":100.5,
            "description":"",
            "discount":0.0,
            "itemCode":"sku_486741_2",
            "qty":1.0,
            "rate":100.5,
            "serial":0,
            "value":0.0,
            "returnable":true,
            "returnableDays":-1,
            "attributes":{
               
            },
            "extendedFields":{
                "paymentmode": "cash"
            },
            "attributesSet":[
               
            ]
         },
         "outlierStatus":"NORMAL",
         "returnDetails":{
            
         },
         "valid":true,
         "returnLineItemsDtos":[
            
         ],
         "niReturnLineItemsDtos":[
            
         ],
         "addonDetails":[
            
         ],
         "splitItemsDetails":[
            
         ],
         "niReturn":false
      },
      {
         "id":2153881151,
         "customerId":0,
         "details":{
            "amount":100.5,
            "description":"",
            "discount":0.0,
            "itemCode":"sku_486741_10",
            "qty":1.0,
            "rate":100.5,
            "serial":0,
            "value":0.0,
            "returnable":true,
            "returnableDays":-1,
            "attributes":{
               "POINTS_ELIGIBILITY":"Yes",
               "pathy_name":"",
               "product_form":""
            },
            "extendedFields":{
               
            },
            "attributesSet":[
               {
                  "product_form":""
               },
               {
                  "POINTS_ELIGIBILITY":"Yes"
               },
               {
                  "pathy_name":""
               }
            ]
         },
         "outlierStatus":"NORMAL",
         "returnDetails":{
            
         },
         "valid":true,
         "returnLineItemsDtos":[
            
         ],
         "niReturnLineItemsDtos":[
            
         ],
         "addonDetails":[
            
         ],
         "splitItemsDetails":[
            
         ],
         "niReturn":false
      }
   ],
   "outlierStatus":"NORMAL",
   "paymentModes": [
        {
            "amount": 1000.0,
            "attributes": [],
            "id": 24074480,
            "mode": "UPI",
            "notes": "",
            "orgPaymentModeId": 8976
        }
    ],
   "type":"REGULAR",
   "lifeTimePurchases":0,
   "ignorePoints":false,
   "extendedFields":{
      "boarding_status":"Boarded",
      "product_class":"EP"
   },
   "autoUpdateTime":"2021-09-09T11:49:17+05:30",
   "niReturnDetails":{
      
   },
   "basketSize":10.0,
   "returnDetails":{
      "canceled":false
   },
   "warnings":[
      
   ]
}
```

Retrieves the details of a specific transaction.

### Resource Information

| | |
--------- | ----------- |
URI | `v2/transactions/{id}`
HTTP Method | GET
API Version | v2
Rate Limited | Yes
Batch Support | NA

### Request URL
`{host}/v2/transactions/{id}?{queryParams}`


### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* (path) | long | Unique transaction id to fetch details.
type (query)| enum | Type of transaction to fetch. Value: `REGULAR`, `RETURN`, NOT_INTERESTED`, `NOT_INTERESTED_RETURN`. Default value is `REGULAR`.
tenders (query)| boolean | Pass `true` to retrieve payment mode details. Default value is `false`.
credit_notes | boolean | Pass `true` to retrieve credit notes details (added through v1.1 transaction/add). Default value is `false`.


<aside class="notice">The parameter marked with * is mandatory. Path stands for path parameter and query stands for query parameter.</aside>


## Response Codes

600 | Transaction added successfully.<br>Transaction retrieved successfully.
1630 | Transaction retrospectively marked REGULAR. Transaction added successfully.


### Error Codes

Code | Description
---- | ----------
500 | Unable to retrieve transaction.
601 | Invalid transaction transaction amount.
602 | Invalid transaction number.
603 | Points are already used (Deprecated).
604 | Transaction number already exists.
605 | Invalid transaction type passed. Only `regular`, `return`, `not_interested`, and `not_interested_return` are supported.
606 | Customer identifier is not passed. Please enter customer’s mobile or email or external id to process.
607 | No transaction id passed. Please pass the transaction id to process.
608 | Unable to add transaction.
609 | Update failed. Please verify all the fields.
610 | Unable to register. Please verify all the fields.
611 | Customer not found.
614 | Transaction is already cancelled.
615 | Transaction details are not passed.
616 | Item code already exists.
617 | Invalid attribute for the item.
618 | Customer is marked as fraud.
619 | Transaction id is not provided.
620 | Transaction id is invalid.
621 | Transaction date is invalid. Transaction date should be within the accepted past or future date range limit.
622 | Unable to add line-item.
623 | Unable to trigger other related events for the transaction.
624 | Unable to process return-transaction. You can make a return only after adding a transaction.
625 | Transaction number does not exist.
626 | Unable to return transaction. The quantity of returned items are more than purchased items.
627 | Quantity cannot be negative.
628 | Invalid return transaction type.
629 | The return quantity of the item is more than available quantity.
630 | The return amount is more than the transaction/line-item amount.
631 | Transaction amount cannot be negative.
632 | Cannot return the transaction with return type LINE_ITEM because the type AMOUNT has already been used for returning the same transaction.
633 | The entire transaction is already returned.
634 | This transaction is already returned.
635 | Cannot return the transaction with the return type AMOUNT because the type LINE_ITEM has been used for returning the same transaction.
636 | The transaction is already returned with the return type as LINE_ITEM. You can process return for other items only with return type LINE_ITEM.
637 | Unable to revert points issued to the customer (for return transaction). Please try again later.
638 | Unable to return transaction. The transaction is already returned with type LINE_ITEM. Hence, you cannot use the type AMOUNT for the same transaction.
639 | Unable to return full transaction. A part of the transaction or complete transaction is already returned.
640 | Points or coupons are not redeemed for this transaction.
641 | No customer found.
642 | Redemption failed. An error occurred in points/coupon redemption.
643 | Invalid transaction. The transaction date exceeds the accepted future date limit.
644 | Invalid transaction. The transaction date cannot be less than the accepted past date limit.
645 | Transaction addition failed for not interested.
646 | Customer registration failed. The email id is invalid.
647 | Customer registration failed. Email id is already assigned to another customer.
648 | Customer registration failed. Mobile number is already assigned to another customer.
649 | Customer registration failed. Mobile number is invalid.
650 | Customer registration failed. Mobile number is not accepted as a unique identifier.
651 | Customer registration failed. Mobile number is required for registration.
652 | Customer registration failed. Mobile number/email id/external id is invalid.
653 | Customer registration failed. External id is already assigned to another customer.
654 | Customer registration failed. External id is not accepted as a unique identifier.
655 | Customer registration failed. Customer is not registered in loyalty program.
656 | No customer found.
657 | Customer registration failed. Registration in EUP failed.
658 | Customer registration failed. Only email id is not sufficient for registration.
659 | Customer registration failed. Please enter email id to register.
660 | Customer registration failed. Registration date exceeds the accepted past or future date limit.
661 | Amount of the line-item amount cannot be negative.
662 | Value of a line cannot be negative.
663 | Rate of a line-item cannot be negative
664 | Discount of a line-item cannot be negative.
665 | Gross amount of the transaction cannot be negative.
666 | Discount cannot be negative.
667 | Unable to find the transaction ID for this customer.
668 | Unable to find the transaction number for this customer.
669 | Unable to update custom field.
670 | Transaction id/number is not provided.
671 | Invalid Store or TILL code.
672 | Batch limit exceeded.
673 | Returning of transactions is not allowed.
674 | Returning of line item is not allowed.
675 | Returning of transaction amount is not allowed.
676 | Returning of a complete transaction amount is not allowed.
677 | Unable to process. Please enter a transaction number for returning a transaction.
678 | Amount of returned item is more than purchased item.
679 | Line-item(s) to be returned is not specified.
680 | No transactions of the specific customer were found.
681 | Transactions are blocked for this customer.
682 | Currency conversion is disabled for the org.
685 | Field length too long.
686 | Unable to add transaction.
687 | Points activities are queued and will be updated later.
688 | No matching line-item found for return.
689 | Points processing failed
690 | Points processing failed
691 | Points processing failed
692 | Points processing failed
693 | Points processing failed
694 | Points processing failed
695 | Invalid configuration. Please report to the Capillary Support.
696 | Points processing failed
697 | Points processing failed
698 | Points processing failed.
699 | Invalid configuration. Please report to the Capillary Support.
820 | Current operation is not allowed. The customer is marked as fraud.
1101 | Invalid loyalty program ID passed.
1102 | Invalid currency conversion ratio passed.
1103 | Invalid shipping store code passed.
1623 | Transaction type is invalid.
1624 | Insufficient parameters passed to fetch transaction.
1625 | Target type is not specified.
1626 | The requested transaction type cannot be changed.
1627 | The transaction is already marked as retro.
1628 | Transaction id is invalid.
1629 | Client signature is required to perform this action.
1631 | Retro transaction is not enabled for your organization.
1632 | Registration date is too older than the transaction date. See the retro configuration set for your organization.
1633 | The duration between registration and transaction mapping exceeds the limit set.
1634 | Return type is invalid.
1635 | Please pass line-items that need to be returned.
1636 | Transaction status is invalid.
3045 | Transaction is not allowed for the customer with ID {x} as the customer is marked as fraud.
8015 | No customer found for the given identifiers.
8084 | Unable to send customer details.
9601 | Failed to add line-item.
9602 | Failed to add credit notes.
9603 | Failed to add payment more details (tender).
9604 | Failed to add custom fields
9605 | Base currency is not set for the org.
9606 | Currency not passed for the transaction.
9607 | Payment mode (tender) not found.
9608 | Line-item with the item code {x} passed is marked as outlier.
9609 | Invalid payment attribute passed.
9610 | New bill event failed. Points are not awarded.
9611 | Transaction is marked as outlier.
9612 | Unable to save credit notes.
9613 | Invalid payment attribute.
9614 | Multiple loyalty bills found to be returned.
9615 | Validity (in days) for return policy is not defined.
9616 | Single loyalty bill found. Allowing regular return.




### Warnings

Code | Description
---- | -----------
625 | Transaction number does not exist. If the config `CONF_ALLOW_NOT_EXISTING_BILL_RETURN`is enabled, the transaction is saved with a warning.
683 | Failed to call new bill event EMF.
684 | Failed EMF new bill DVS event.
687 | Points activities are queued and will be updated later.
688 | No line item found matching for return.
669 | Invalid custom field.
710 | Return bill event failed from EMF.
1105 | Returnable days should be greater than -1.
9601 | Unable to add line item. 
9602 | Unable to add credit note.
9603 | Unable to add payment mode details.
9604 | Unable to add custom fields.
9605 | Base currency is not set for the org.
9606 | Transaction currency is not passed.
9607 | Payment mode (tender) is not found.
9608 | Line item with item code {x} is marked as outlier. 
9609 | Invalid payment attribute value.
9610 | New bill event is failed. Points are not awarded.
9611 | Transaction is marked as outlier.
9612 | Unable to save the credit notes
9613 | Invalid payment attribute.
9614 | Multiple loyalty transactions found to be returned.
9615 | Return policy days are not defined.
9616 | Single loyalty transaction found. Allowing regular return.


<aside class="notice"> The error code `625` could also appear in warning if the configuration `CONF_ALLOW_NOT_EXISTING_BILL_RETURN` is enabled. However, this is a very special case for a code that could appear as a error or warning.</aside>



# Earning

## Get Transaction Earning

Retrieves the details of all points earned for a transaction.

> Sample Request

```html
https://us.api.capillarytech.com/v2/earning/167111742
```


> Sample Response

```json
{
   "useDefaultFleetGroup":false,
   "attribution":{
      "createDate":"2021-07-28T17:08:40+05:30",
      "createdBy":{
         "id":12995129,
         "code":"aa.website",
         "description":"",
         "name":"aa.website",
         "type":"TILL",
         "adminType":"GENERAL",
         "isActive":true,
         "isOuEnabled":false,
         "timeZoneId":-1,
         "currencyId":-1,
         "languageId":-1
      },
      "modifiedBy":{
         
      },
      "modifiedDate":"2021-07-28T17:08:41+05:30"
   },
   "billDetails":{
      "amount":8000.0,
      "billingStore":{
         "id":12995128,
         "code":"aa.website",
         "description":"",
         "name":"AirAsia",
         "type":"STORE",
         "adminType":"GENERAL",
         "isActive":true,
         "isOuEnabled":false,
         "timeZoneId":-1,
         "currencyId":-1,
         "languageId":-1
      },
      "billNumber":"0101611121021-aa2",
      "billingTime":"2021-07-28T17:08:40+05:30",
      "discount":0.0,
      "grossAmount":0.0,
      "note":"",
      "returnDetails":{
         "canceled":false
      },
      "niReturnDetails":{
         
      },
      "invalidBill":false,
      "pointsEarningEntities":{
         "entityId":481191985,
         "entityType":"customer",
         "billPoints":[
            {
               "programId":1414,
               "currentPointsSummary":{
                  "availablePoints":0,
                  "expiredPoints":0,
                  "redeemedPoints":0,
                  "promisedPoints":0,
                  "returnedPromisedPoints":0,
                  "returnedPoints":0,
                  "promisedPointsConverted":0
               },
               "issuedPointsSummary":{
                  "redeemablePointsIssued":0,
                  "promisedPointsIssued":0
               },
               "currentPointsBreakup":{
                  "regularPointsInfo":null,
                  "promotionalPointsInfo":null
               }
            },
            {
               "programId":1550,
               "currentPointsSummary":{
                  "availablePoints":0,
                  "expiredPoints":0,
                  "redeemedPoints":0,
                  "promisedPoints":0,
                  "returnedPromisedPoints":0,
                  "returnedPoints":0,
                  "promisedPointsConverted":0
               },
               "issuedPointsSummary":{
                  "redeemablePointsIssued":0,
                  "promisedPointsIssued":0
               },
               "currentPointsBreakup":{
                  "regularPointsInfo":null,
                  "promotionalPointsInfo":null
               }
            }
         ]
      }
   },
   "customFields":{
      "flight_destination":"DEL",
      "flight_source":"BOM"
   },
   "addWithLocalCurrency":false,
   "async":false,
   "useV2":false,
   "customerId":481191985,
   "id":167111742,
   "lineItems":[
      {
         "id":502374973,
         "customerId":481191985,
         "details":{
            "amount":4000.0,
            "description":"",
            "discount":0.0,
            "itemCode":"PBAC",
            "qty":1.0,
            "rate":4000.0,
            "serial":0,
            "value":0.0,
            "returnable":true,
            "returnableDays":-1,
            "attributes":{
               "POINTS_ELIGIBILITY":"Yes",
               "pathy_name":"",
               "product_form":""
            },
            "extendedFields":{
               "charge_type":"0"
            },
            "attributesSet":[
               {
                  "product_form":""
               },
               {
                  "POINTS_ELIGIBILITY":"Yes"
               },
               {
                  "pathy_name":""
               }
            ]
         },
         "outlierStatus":"NORMAL",
         "returnDetails":{
            
         },
         "valid":true,
         "returnLineItemsDtos":[
            
         ],
         "niReturnLineItemsDtos":[
            
         ],
         "addonDetails":[
            
         ],
         "splitItemsDetails":[
            
         ],
         "pointsEarningEntities":{
            "entityId":481191985,
            "entityType":"customer",
            "lineItemPoints":[
               {
                  "programId":1414,
                  "currentPointsSummary":{
                     "availablePoints":0,
                     "expiredPoints":0,
                     "redeemedPoints":0,
                     "promisedPoints":0,
                     "returnedPromisedPoints":0,
                     "returnedPoints":0,
                     "promisedPointsConverted":0
                  },
                  "issuedPointsSummary":{
                     "redeemablePointsIssued":0,
                     "promisedPointsIssued":0
                  },
                  "currentPointsBreakup":{
                     "regularPointsInfo":null,
                     "promotionalPointsInfo":null
                  }
               },
               {
                  "programId":1550,
                  "currentPointsSummary":{
                     "availablePoints":320.000,
                     "expiredPoints":0,
                     "redeemedPoints":0,
                     "promisedPoints":0,
                     "returnedPromisedPoints":0,
                     "returnedPoints":0,
                     "promisedPointsConverted":0
                  },
                  "issuedPointsSummary":{
                     "redeemablePointsIssued":320.000,
                     "promisedPointsIssued":0
                  },
                  "currentPointsBreakup":{
                     "regularPointsInfo":{
                        "availablePointsInfo":[
                           {
                              "points":320.000,
                              "expiryDate":"2022-08-31T23:59:59+05:30",
                              "expiryType":"rolling",
                              "actionSourceDetails":[
                                 {
                                    "actionId":27229,
                                    "sourceType":"lineItem",
                                    "actionType":"BILL_POINTS_ACTION",
                                    "actionPointsDetail":[
                                       {
                                          "points":320.000,
                                          "sourceValue":4000.000,
                                          "sourceIdentifiers":[
                                             {
                                                "key":"tracker",
                                                "value":"AirAsiaSpends2"
                                             }
                                          ]
                                       }
                                    ]
                                 }
                              ]
                           }
                        ],
                        "promisedPointsInfo":null
                     },
                     "promotionalPointsInfo":null
                  }
               }
            ]
         },
         "niReturn":false
      },
      {
         "id":502374974,
         "customerId":481191985,
         "details":{
            "amount":4000.0,
            "description":"",
            "discount":0.0,
            "itemCode":"FAREPRICE",
            "qty":1.0,
            "rate":4000.0,
            "serial":0,
            "value":0.0,
            "returnable":true,
            "returnableDays":-1,
            "attributes":{
               "POINTS_ELIGIBILITY":"Yes",
               "pathy_name":"",
               "product_form":""
            },
            "extendedFields":{
               "charge_type":"0"
            },
            "attributesSet":[
               {
                  "product_form":""
               },
               {
                  "POINTS_ELIGIBILITY":"Yes"
               },
               {
                  "pathy_name":""
               }
            ]
         },
         "outlierStatus":"NORMAL",
         "returnDetails":{
            
         },
         "valid":true,
         "returnLineItemsDtos":[
            
         ],
         "niReturnLineItemsDtos":[
            
         ],
         "addonDetails":[
            
         ],
         "splitItemsDetails":[
            
         ],
         "pointsEarningEntities":{
            "entityId":481191985,
            "entityType":"customer",
            "lineItemPoints":[
               {
                  "programId":1414,
                  "currentPointsSummary":{
                     "availablePoints":0,
                     "expiredPoints":0,
                     "redeemedPoints":0,
                     "promisedPoints":0,
                     "returnedPromisedPoints":0,
                     "returnedPoints":0,
                     "promisedPointsConverted":0
                  },
                  "issuedPointsSummary":{
                     "redeemablePointsIssued":0,
                     "promisedPointsIssued":0
                  },
                  "currentPointsBreakup":{
                     "regularPointsInfo":null,
                     "promotionalPointsInfo":null
                  }
               },
               {
                  "programId":1550,
                  "currentPointsSummary":{
                     "availablePoints":160.000,
                     "expiredPoints":0,
                     "redeemedPoints":0,
                     "promisedPoints":0,
                     "returnedPromisedPoints":0,
                     "returnedPoints":0,
                     "promisedPointsConverted":0
                  },
                  "issuedPointsSummary":{
                     "redeemablePointsIssued":160.000,
                     "promisedPointsIssued":0
                  },
                  "currentPointsBreakup":{
                     "regularPointsInfo":{
                        "availablePointsInfo":[
                           {
                              "points":160.000,
                              "expiryDate":"2022-08-31T23:59:59+05:30",
                              "expiryType":"rolling",
                              "actionSourceDetails":[
                                 {
                                    "actionId":27229,
                                    "sourceType":"lineItem",
                                    "actionType":"BILL_POINTS_ACTION",
                                    "actionPointsDetail":[
                                       {
                                          "points":160.000,
                                          "sourceValue":2000.000,
                                          "sourceIdentifiers":[
                                             {
                                                "key":"tracker",
                                                "value":"AirAsiaSpends2"
                                             }
                                          ]
                                       }
                                    ]
                                 }
                              ]
                           }
                        ],
                        "promisedPointsInfo":null
                     },
                     "promotionalPointsInfo":null
                  }
               }
            ]
         },
         "niReturn":false
      }
   ],
   "outlierStatus":"NORMAL",
   "type":"REGULAR",
   "warnings":[
      
   ],
   "lifeTimePurchases":0,
   "ignorePoints":false,
   "extendedFields":{
      "boarding_status":"Boarded",
      "flight_count":1,
      "product_class":"EP"
   },
   "autoUpdateTime":"2021-07-28T17:08:41+05:30",
   "niReturnDetails":{
      
   },
   "basketSize":2.0,
   "returnDetails":{
      "canceled":false
   },
   "warnings":[
      
   ]
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/earning/{transactionId}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`https://{host}/v2/earning/{transactionId}`


