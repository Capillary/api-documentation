# Transaction
A transaction represents a purchase or return event. 

Transactions are classified into the following types:

* **Regular**: Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and not-interested.
* **Return** : Transactions that are returned at the PoS. Return transactions need an identifier reference. Hence, only loyalty and non-loyalty transactions can be returned through APIs. See Transaction Return API for more details.
* **Mixed**: A transaction that involves both regular and return is termed as mixed transaction.





## Add or Return Transaction

Lets you add or return one or more loyalty transactions to the Capillary system.

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

> Sample POST Request (POST Transaction)

```json
[
  {
    "identifierType": "mobile",
    "identifierValue": "919740000000",
    "source": "INSTORE",
    "accountId": "",
    "type": "REGULAR",
    "billNumber": "num-668288857749",
	"billingDate": "2020-12-28T10:18:01.534Z",
    "discount": "10",
    "billAmount": "200",
    "note": "this is test",
    "grossAmount": "110",
    "deliveryStatus": "SHIPPED",
    "paymentModes": [
      {
        "attributes": {
          "name": "BankNameAPI",
          "value": "value_6555444"
        },
        "notes": "notes_6555444",
        "mode": "CHECKAPI",
        "value": "500"
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
        "amount": 100.5,
		"description": "sample description",
		"discount": 0,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_2",
        "amount": 100.5,
		"description": "sample description",
		"discount": 0,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_3",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "gender": "Male",
          "marital_status": "Married"
        },
        "customFields": {
          "cashierid": "jim2345",
          "city": "Bangalore"
        }
      },
      {
        "itemCode": "sku_486741_4",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_5",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_6",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_7",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_8",
        "amount": 100.5,
		"discount": 0,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_9",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_10",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      }
    ]
  },
  {
    "identifierType": "mobile",
    "identifierValue": "919740000000",
    "source": "INSTORE",
    "accountId": "",
    "type": "REGULAR",
    "billNumber": "num-668288857765",
    "discount": "10",
    "billAmount": "200",
    "note": "this is test",
    "grossAmount": "110",
    "deliveryStatus": "SHIPPED",
    "paymentModes": [
      {
        "attributes": {
          "name": "BankNameAPI",
          "value": "value_6555444"
        },
        "notes": "notes_6555444",
        "mode": "CHECKAPI",
        "value": "500"
      }
    ],
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
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_2",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_3",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_4",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_5",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_6",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_7",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_8",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "gender": "Male",
          "marital_status": "Married"
        },
        "customFields": {
          "cashierid": "jim2345",
          "city": "Bangalore"
        }
      },
      {
        "itemCode": "sku_486741_9",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      },
      {
        "itemCode": "sku_486741_10",
        "amount": 100.5,
        "rate": 100.5,
        "qty": 1,
        "extendedFields": {
          "MetalRate": "22.02",
          "GrossWeight": "10.50"
        }
      }
    ]
  }
]
```

> Sample POST Request (Return Transaction)

```json
[
  {
    "identifierType": "mobile",
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
          "name": "CASH",
          "value": "210"
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
  }
]

```


> Sample Response

```json
{
  "response": [
    {
      "result": {
        "identifierType": "mobile",
        "identifierValue": "919740390065",
        "source": "INSTORE",
        "accountId": "",
        "extendedFields": {
          "ship_first_name": "22.02",
          "ship_last_name": "10.50"
        },
        "deliveryStatus": "SHIPPED",
        "type": "REGULAR",
        "billAmount": 200,
        "billNumber": "num-668288857749",
        "discount": 10,
        "grossAmount": 110,
        "note": "this is test",
        "lineItemsV2": [
          {
            "amount": 100.5,
            "itemCode": "sku_486741_2",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_2",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_3",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_4",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_5",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_6",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_7",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_8",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_9",
            "qty": 1,
            "rate": 100.5,
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
            "amount": 100.5,
            "itemCode": "sku_486741_10",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {
              "GrossWeight": "10.50",
              "MetalRate": "22.02"
            }
          }
        ],
        "customFields": {
          "trans_cf_a": "abc"
        },
        "paymentModes": [
          {
            "mode": "CHECKAPI",
            "value": "500",
            "notes": "notes_6555444",
            "attributes": {
              "name": "BankNameAPI",
              "value": "value_6555444"
            }
          }
        ],
        "billingDate": "2020-04-28T10:44:15+05:30"
      },
      "errors": [
        {
          "status": false,
          "code": 8015,
          "message": "Customer not found for the given identifiers"
        }
      ],
      "warnings": []
    },
    {
      "entityId": 38236696,
      "result": {
        "identifierType": "mobile",
        "identifierValue": "919740390055",
        "source": "INSTORE",
        "accountId": "",
        "extendedFields": {},
        "deliveryStatus": "SHIPPED",
        "type": "REGULAR",
        "billAmount": 200,
        "billNumber": "num-668288857765",
        "discount": 10,
        "grossAmount": 110,
        "note": "this is test",
        "lineItemsV2": [
          {
            "amount": 100.5,
            "itemCode": "sku_486741_2",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_2",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_3",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_4",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_5",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_6",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_7",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_8",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_9",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          },
          {
            "amount": 100.5,
            "itemCode": "sku_486741_10",
            "qty": 1,
            "rate": 100.5,
            "returnable": true,
            "returnableDays": -1,
            "comboDetails": [],
            "addOnDetails": [],
            "splitDetails": [],
            "extendedFields": {}
          }
        ],
        "customFields": {
          "trans_cf_a": "abc"
        },
        "paymentModes": [
          {
            "mode": "CHECKAPI",
            "value": "500",
            "notes": "notes_6555444",
            "attributes": {
              "name": "BankNameAPI",
              "value": "value_6555444"
            }
          }
        ],
        "billingDate": "2020-04-28T10:44:15+05:30"
      },
      "errors": [],
      "warnings": []
    }
  ],
  "totalCount": 2,
  "failureCount": 1
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


### Request URL

`https://{host}/v2/transactions/bulk`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Pass any of the registered identifier name of the customer. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, or `fbId` (Facebook ID).
identifierValue* | string | Pass the respective identifier value. For example if `identifierType` is mobile, `identifierValue` is mobile number.
source* | enum | Pass the source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID.
extendedFields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
currencyCode | string | ISO currency code of the transaction. For example, `INR` for Indian Rupee, SGD for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar.
addWithLocalCurrency | boolean | Pass `true` to add a transaction in local currency.
deliveryStatus | enum | Delivery status of the item. Values: DELIVERED, SHIPPED.
type* | enum | Type of transaction. Supported value: `REGULAR` for loyalty transactions. 'RETURN' for return transactions. Currently, there is no not-interested transactions support in V2.
returnType** | enum | For a return transaction, pass the return type. Value: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.
billAmount* | double | Net transaction amount.
billNumber* |  string | Unique transaction number. The uniqueness either at till, store, or org, depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set on InTouch **Settings** > **System & Deployment** > **InTouch POS Configuration** > **Billing**.  
billingDate | date-time | Date and time of the transaction in the `YYYY-MM-DDTHH:MM:SSZ` format.
currency | string | ISO currency code of the transaction. Org's base currency is considered by default. For example, `INR` for Indian Rupee, `SGD` for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar.
discount | double | Discount availed for the transaction or line item (discount amount) .
grossAmount | double | Transaction amount before discount.
note | string | Additional information about the transaction.
lineItemsV2 | obj | Details of line-items.
amount | double | Net transaction amount
description | string | One or two liner description of the line-item.
itemCode | string | Unique code of the transaction line-item.
qty | double | Quantity of the current line-item.
rate | double | Price of each line-item.
serial | string | Serial number of the line-item.
returnable | boolean | Pass `true` if the item can be returned.
returnableDays | int | Maximum number of days in which the item is allowed to return. 
customFields | obj | Transaction or line-item level custom field details.
imgUrl | string | URL of the product image.
attributes | obj | Attributes of the product in name-value pairs.
comboDetails | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps
itemCode | string | Unique line-item code.
quantity | double | Quantity of the current combo item.
description | string | One or two liner description of add-on, split, or combo item.
value | double | Item price excluding discount.
comboType | string | Type of the combo. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps.
addOnDetails | obj | Details of add-on item.
splitDetails | obj | Details of split item.
parentBillNumber | string | Details of the actual transaction number. This is applicable only for return transactions.
purchaseTime | date-time | Date and time of purchase in `YYYY-MM-DDTHH:MM:SS` format.
customFields | obj | Details of transaction level or transaction line-item level custom fields.
redemptions | obj | Details of points and coupon redemptions for the  transaction.
pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]
paymentModes | obj | Payment details used for the transaction. 
mode | string | Mode of payment.
value | double | Amount paid through the current mode.
notes |string | Additional information related to the payment mode.
attributes | obj | Attributes of the payment mode in names and value pairs.
loyaltyPromotionIdentifiers | array | 
id | - | --
      

<aside class="notice">Parameters marked with * are mandatory. </aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
entityId | long | Unique transaction ID generated.
billingDate | date-time | Date and time of the transaction in `HH-MM-DDThh:mm:ssTZD`



## Get Transaction Details

> Sample Request

```html
https://eu.api.capillarytech.com/v2/transactions/38236823?type=REGULAR
```

> Sample Response

```json
{
    "attribution": {
        "createDate": "2020-04-28T17:04:13+05:30",
        "createdBy": {
            "id": 50006796,
            "code": "mobilepush.1",
            "description": "",
            "name": "mobilepush.1",
            "type": "TILL",
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 0,
            "currencyId": 216,
            "languageId": 1
        },
        "modifiedBy": {},
        "modifiedDate": "2020-04-28T17:04:13+05:30"
    },
    "billDetails": {
        "amount": 200.0,
        "billingStore": {
            "id": 50006795,
            "code": "storecode",
            "description": "webenagestore",
            "name": "webstore1",
            "type": "STORE",
            "adminType": "GENERAL",
            "isActive": true,
            "isOuEnabled": false,
            "timeZoneId": 0,
            "currencyId": 216,
            "languageId": 1
        },
        "billNumber": "num-6682858599",
        "billingTime": "2020-04-28T17:04:13+05:30",
        "discount": 10.0,
        "grossAmount": 110.0,
        "note": "this is test",
        "returnDetails": {
            "canceled": false
        },
        "niReturnDetails": {},
        "invalidBill": false
    },
    "customFields": {
        "cashierid": "jim2345"
    },
    "addWithLocalCurrency": false,
    "async": false,
    "useV2": false,
    "customerId": 316726161,
    "id": 38236823,
    "lineItems": [
        {
            "id": 2151509718,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_2",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509719,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_2",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509720,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_3",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509721,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_4",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509722,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_5",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509723,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_6",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509724,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_7",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509725,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_8",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509726,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_9",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        },
        {
            "id": 2151509727,
            "customerId": 0,
            "details": {
                "amount": 100.5,
                "description": "",
                "discount": 0.0,
                "itemCode": "sku_486741_10",
                "qty": 1.0,
                "rate": 100.5,
                "serial": 0,
                "value": 0.0,
                "returnable": true,
                "returnableDays": -1,
                "attributes": {},
                "extendedFields": {},
                "rateSupportingNull": 100.5,
                "valueSupportingNull": 0.0,
                "qtySupportingNull": 1.0,
                "attributesSet": [],
                "discountSupportingNull": 0.0,
                "extendedFieldsSet": []
            },
            "outlierStatus": "NORMAL",
            "returnDetails": {},
            "valid": true,
            "returnLineItemsDtos": [],
            "niReturnLineItemsDtos": [],
            "addonDetails": [],
            "splitItemsDetails": [],
            "niReturn": false
        }
    ],
    "outlierStatus": "NORMAL",
    "type": "REGULAR",
    "warnings": [],
    "lifeTimePurchases": 0,
    "ignorePoints": false,
    "extendedFields": {},
    "autoUpdateTime": "2020-04-28T17:04:13+05:30",
    "returnDetails": {
        "canceled": false
    },
    "extendedFieldsSet": [],
    "customFieldsSet": [
        {
            "cashierid": "jim2345"
        }
    ],
    "niReturnDetails": {},
    "basketSize": 10.0,
    "warnings": []
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
`https://{host}/v2/transactions/{id}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Unique transaction id to fetch details.
type* | enum | Type of transaction to fetch. Value: REGULAR, RETURN.

<aside class="notice">The parameter marked with * is mandatory.</aside>


