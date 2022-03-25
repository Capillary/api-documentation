# Cart & Catalog Promotions




## Set Promotion Settings (Org Level)

Lets you configure org level Cart and Catalog settings.

> Sample Request

```html
https://us.api.capillarytech.com/v1/promotion-management/promotions/settings/strategy
```



> Sample POST Request

```json
{
   "promotionRankingStrategy": "EXPIRY_BASED",
   "rewardStrategy": "PROMOTION_FIRST",
   "singlePromotionPerLineitem": true,
   "conditionBasedRankingStrategy": "LINE_ITEM_BASED_FIRST",
   "isActive": true
}
```

> Sample Response

```json

```


### Resource Information

| | |
--------- | ----------- |
URI | `v1/promotion-management/promotions/settings/strategy`
HTTP Method | POST
API Version | v1
Rate Limited | Yes
Batch Support | No



### Request URL

`{host}/v1/promotion-management/promotions/settings/strategy`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
conditionBasedRankingStrategy | enum | Whether to evaluate cart first (`CART_BASED_FIRST`), or line item first (`LINE_ITEM_BASED_FIRST`) when both promotions are applicable.
isActive | boolean | Pass `true` 
promotionRankingStrategy | enum | Define ranking of promotions when multiple promotions are applicable. Values: `EXPIRY_BASED` (to rank according to the early expiry date), `MAX_DISCOUNT` (to rank according to the maximum discount applicable), `PRIORITY` ().
rewardStrategy | enum | When both normal and reward promotions are applicable, pass `PROMOTION_FIRST` to prioritize normal promotions such as Loyalty, Loyalty earning and POS promotions. Pass `REWARDS_FIRST` to prioritize reward promotions. Default value `NO_STRATEGY`.
singlePromotionPerLineitem | boolean | Pass `false` to to allow multiple promotions on different quantities of a line items or SKUs; pass `true` to allow single promotion.




## Get Org Promotion Settings

Retrieves org level Cart and Catalog settings.

> Sample Request

```html
https://us.api.capillarytech.com/v1/promotion-management/promotions/settings/strategy
```




> Sample Response

```json

```


### Resource Information

| | |
--------- | ----------- |
URI | `v1/promotion-management/promotions/settings/strategy`
HTTP Method | GET
API Version | v1
Rate Limited | Yes
Batch Support | No



### Request URL

`{host}/v1/promotion-management/promotions/settings/strategy`









## Create Promotion

Lets you create a specific promotion program - Card or Catalog based. 

> Sample Request

```html
https://eucrm.cc.capillarytech.com/v1/promotion-management/promotions
```



> Sample POST Request for Generic Cart Promotion

```json
{
   "name":"POSdebug",
   "orgId":50672,
   "priority":0,
   "active":true,
   "messageLabel":"test!",
   "type":"POS",
   "timeCriteria":null,
   "storeCriteria":null,
   "condition":{
      "type":"CART",
      "cartCondition":{
         "kpi":"SUBTOTAL",
         "operator":"GREATER_THAN_OR_EQUAL",
         "value":"1500.000000"
      },
      "productCondition":null,
      "comboProductCondition":null
   },
   "action":{
      "type":"CART_BASED",
      "cartBasedAction":{
         "type":"PERCENTAGE",
         "value":"10.000000"
      },
      "productBasedAction":null,
      "fixedPriceAction":null,
      "freeProductAction":null
   },
   "createdBy":15000449,
   "createdOn":1625639059945,
   "lastUpdatedBy":15000449,
   "lastUpdatedOn":1625639059945,
   "startDate":1624256511786,
   "endDate":1627669800000,
   "campaignId":1036475,
   "loyaltyEarningExpiryDays":null,
   "maxEarningPerCustomer":null,
   "earningCriteria":null,
   "promotionRestrictions":null,
   "earnLimitedToSpecificAudience":false,
   "customFieldValues":null,
   "onEarnCommunicationChannels":null
}
```


> Sample POST for Normal Product Promotion

```json
{
...
   "condition":{
      "type":"PRODUCT",
      "cartCondition":null,
      "productCondition":{
         "criteriaList":[
            {
               "entity":"SKU",
               "operator":"IN",
               "values":[
                  "samosa",
                  "chai"
               ],
               "attributeName":null
            }
         ],
         "kpi":"QUANITITY",
         "value":"1.000000",
         "operator":"EQUALS"
      }
   }
...
}
```

> Sample Request for Free Product Promotion

```json
{
...
   "condition":{
      "type":"PRODUCT",
      "productCondition":{
         "criteriaList":[
            {
               "entity":"SKU",
               "operator":"IN",
               "values":[
                  "Fuel"
               ]
            }
         ],
         "kpi":"AMOUNT",
         "value":2000.0,
         "operator":"GREATER_THAN_OR_EQUAL"
      }
   },
   "action":{
      "type":"FREE_PRODUCT",
      "freeProductAction":{
         "productBasedCondition":{
            "type":"PRODUCT",
            "productCondition":{
               "criteriaList":[
                  {
                     "entity":"SKU",
                     "operator":"IN",
                     "values":[
                        "cappuccino",
                        "filtercoffee"
                     ]
                  }
               ],
               "kpi":"QUANTITY",
               "value":1.0,
               "operator":"EQUALS"
            }
         }
      }
   }
...
}
```

> Sample POST for Earning Promotion

```json
{
...
   "earningCriteria":{
      "criteriaName":"Transaction",
      "earnedFromType":"ACTIVITY",
      "milestoneId":0,
      "groupId":0,
      "eventType":"TransactionAdd",
      "storeCriteria":null,
      "timeCriteria":null,
      "criteriaDsl":"true",
      "criteriaDslJson":"{\"arity\":\"literal\",\"type\":\"boolean:primitive\",\"value\":\"true\"}",
      "active":true
   },
   "earnLimitedToSpecificAudience":true,
   "promotionRestrictions":{
      "Earn":[
         {
            "kpi":"TRANSACTION",
            "limit":1
         },
         {
            "kpi":"REDEMPTION",
            "limit":1
         },
         {
            "kpi":"DISCOUNT",
            "limit":1
         }
      ]
   }
...
}
```


> Sample POST for Milestone Promotion

```json
{
...
   "type": "EARNING",
   "earningCriteria":{
      "criteriaName":null,
      "earnedFromType":"MILESTONE",
      "milestoneId":301,
      "groupId":183,
      "eventType":null,
      "storeCriteria":null,
      "timeCriteria":null,
      "duration":null,
      "criteriaDsl":null,
      "criteriaDslJson":null,
      "active":true
   },
   "promotionRestrictions":{
      
   },
   "earnLimitedToSpecificAudience":true,
   "customFieldValues":{
      "Terms & conditions":"test",
      "Test":"test"
   }
}
```

> Sample POST for Customer Promotion

```json

{
...
   "condition":{
      "type":"PRODUCT",
      "cartCondition":null,
      "productCondition":{
         "criteriaList":[
            {
               "entity":"CATEGORY",
               "operator":"IN",
               "values":[
                  "50672_category1",
                  "My test2"
               ],
               "attributeName":null
            }
         ],
         "kpi":"AMOUNT",
         "value":"500.000000",
         "operator":"GREATER_THAN"
      },
      "comboProductCondition":null
   },
   "action":{
      "type":"PRODUCT_BASED",
      "cartBasedAction":null,
      "productBasedAction":{
         "productBasedCondition":{
            "type":"PRODUCT",
            "cartCondition":null,
            "productCondition":{
               "criteriaList":[
                  {
                     "entity":"CATEGORY",
                     "operator":"IN",
                     "values":[
                        "50672_category1",
                        "My test2"
                     ],
                     "attributeName":null
                  }
               ],
               "kpi":"NONE",
               "value":"0.000000",
               "operator":"NONE"
            },
            "comboProductCondition":null
         },
         "type":"ABSOLUTE",
         "value":"100.000000"
      }
  }
}
```

> Sample POST for Reward Promotion

```json
{
...
   "type": "REWARD",
   "condition":{
      "type":"PRODUCT",
      "cartCondition":null,
      "productCondition":{
         "criteriaList":[
            {
               "entity":"SKU",
               "operator":"IN",
               "values":[
                  "BOOK"
               ],
               "attributeName":null
            }
         ],
         "kpi":"AMOUNT",
         "value":"500.000000",
         "operator":"EQUALS"
      },
      "comboProductCondition":null
   },
   "action":{
      "type":"PRODUCT_BASED",
      "cartBasedAction":null,
      "productBasedAction":{
         "productBasedCondition":null,
         "type":"PERCENTAGE",
         "value":"10.000000"
      }
   }
}
```

> Sample POST for Combo Product Condition

```json
{
...
   "type":"POS",
   "condition":{
      "type":"COMBO_PRODUCT",
      "comboProductCondition":{
         "productConditions":[
            {
               "criteriaList":[
                  {
                     "entity":"SKU",
                     "operator":"IN",
                     "values":[
                        "samosa"
                     ]
                  }
               ],
               "kpi":"QUANTITY",
               "value":1,
               "operator":"EQUALS"
            },
            {
               "criteriaList":[
                  {
                     "entity":"SKU",
                     "operator":"IN",
                     "values":[
                        "chai"
                     ]
                  }
               ],
               "kpi":"QUANTITY",
               "value":1,
               "operator":"EQUALS"
            }
         ]
      }
   },
   "action":{
      "type":"PRODUCT_BASED",
      "cartBasedAction":null,
      "productBasedAction":{
         "productBasedCondition":{
            "type":"PRODUCT",
            "cartCondition":null,
            "productCondition":{
               "criteriaList":[
                  {
                     "entity":"CATEGORY",
                     "operator":"IN",
                     "values":[
                        "Fuel"
                     ],
                     "attributeName":null
                  }
               ],
               "kpi":"NONE",
               "value":"0.000000",
               "operator":"NONE"
            },
            "comboProductCondition":null
         },
         "type":"ABSOLUTE",
         "value":"10.000000"
      },
      "fixedPriceAction":null,
      "freeProductAction":null
   }
}
```

> Sample Response

```json
> Sample Response

```json
{
    "data": {
        "id": "623c3f73cc485e2e6ec80125",
        "name": "DemoPromotion",
        "orgId": 100528,
        "priority": 0,
        "active": true,
        "messageLabel": "test!",
        "type": "POS",
        "condition": {
            "type": "CART",
            "cartCondition": {
                "kpi": "SUBTOTAL",
                "operator": "GREATER_THAN_OR_EQUAL",
                "value": "1500.000000"
            }
        },
        "action": {
            "type": "CART_BASED",
            "cartBasedAction": {
                "type": "PERCENTAGE",
                "value": "10.000000"
            }
        },
        "createdBy": 75044302,
        "createdOn": 1648115571586,
        "lastUpdatedBy": 75044302,
        "lastUpdatedOn": 1648115571586,
        "startDate": 1624256511786,
        "endDate": 1627669800000,
        "campaignId": 1036475,
        "earnLimitedToSpecificAudience": false,
        "mode": "DISCOUNT",
        "maxIssuancePerCustomer": 1
    }
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v1/promotion-management/promotions`
HTTP Method | POST
API Version | v1
Rate Limited | Yes
Batch Support | No



### Request URL
`{host}/v1/promotion-management/promotions`





### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name* | string | Name of the promotion.
orgId | int | Unique ID of the org. 
priority | int | Priority of evaluating the cart promotion. Pass `0` for the highest priority and higher numbers for lower priorities.
active | boolean | Set `true` to make the promotion active, `false` to issue promotion in the deactivated state. Default value is `false`
messageLabel | string | A short description of the promotion.
type | enum | Type of the promotion. Value: `POS`, `CUSTOMER`, `EARNING`, `REWARD`.
timeCriteria | obj | Information related to Time based restriction for the offer.
storeCriteria | Obj | Information related to the store based restriction (store scope).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operator* | enum | Operator used to evaluate store condition. Value: `IN`, `NOT_IN`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type* | enum | Base store type to evaluate. Value: `CONCEPT`, `STORE`, `ZONE`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values* | int | Value of the selected store type. For example, store ID, zone ID, or concept ID.
condition | obj | Details of promotion availing condition.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the promotion. Value: `CATALOG`, `PRODUCT`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cartCondition | obj | Details of the cart promotion availing condition.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kpi | enum | On what basis you want to evaluate the availing condition. Values: `SUBTOTAL`, 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operator | enum | `GREATER_THAN_OR_EQUAL`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | float | Value of the condition expression
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productCondition | | Details of the product (catalog) promotion availing condition
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;criteriaList | array-obj | Details of the product condition.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity | enum | On what basis the product condition is defined. Values: `SKU`, 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operator | enum | Operator for the rule expression. Value:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; values | | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributeName | | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kpi | enum | Value: `QUANITITY`
comboProductCondition | | 
action | obj | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Sub-type of the promotion. Values: `CART_BASED`, `PRODUCT_BASED`, `FIXED_PRICE`, `FREE_PRODUCT`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cartBasedAction | obj | Benefit to be applied. It is applied when promo condition is matched.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | `PERCENTAGE`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | float | Discount or offer value according to the`type`. For example, Buy 10 liters of Petrol and get 10% off on it (`"type": "PERCENTAGE"`).  <br> Buy 10 ltrs of Petrol and get 100/- off (when `"type": "PERCENTAGE"`).Percentage discount (as amount), `ABSOLUTE` (Buy 2 products at $50). 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productBasedAction | | The benefit to be applied when promo condition (specific product in cart) is satisfied.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fixedPriceAction | obj | Details of the fixed price based benefit. For example, buy 1X get 1X with a discount, or buy 2X with fixed price.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;freeProductAction | obj | Details of free product based benefit. Example: buy 1X get 1Y free.
createdBy | long | Unique ID of the user creating the offer.
createdOn | string | Unique time-stamp (milliseconds) of when the promotion was created.
lastUpdatedBy | long | ID of the user who updated the promotion recently.
lastUpdatedOn | | string | Unix time-stamp (in milliseconds) of when the promotion was recently updated.
startDate* | string | Duration of the promotion in `startDate` and `endDate` in milliseconds. Unix time-stamp of the end date of the promotion in milliseconds.
endDate* | | Duration of the promotion in `startDate` and `endDate`. Unix time-stamp of the end date of the promotion in milliseconds.
campaignId | int | ID of the campaign associated with the promotion.	
loyaltyEarningExpiryDays | int | Number of days in which the Loyalty promotion earned should expire.	
maxEarningPerCustomer | int | Number of times a customer can earn the current promotion.	
earningCriteria | obj | Conditions that customers should fulfil to unlock the promotion. For example, unlock the promotion for the Transaction activity with amount more than $100.	
promotionRestrictions | | Restrictions applied to the promotion on Discount, Transaction, and/or Redemption.
earnLimitedToSpecificAudience | boolean | Pass `true` to enable the promotion to specific list of customers, `false` to enable any customer to earn the promotion. 
customFieldValues | string | Meta promotion of the promotion level custom field values.
onEarnCommunicationChannels | | Channel through which points a customer earn or expire needs to be communicated - SMS, Push notification or email.
 

<aside class="notice"> Parameter marked with * is mandatory. </aside>


## Update Promotion Details

Lets you update details of a promotion.

> Sample Request

```html
https://us.api.capillarytech.com/v1/promotion-management/promotions/60f13a5e4c5cb92ab2d9e7d7
```

> Sample PUT Request

```json
{
            "name": "Buy3spriteget2sprite",
            "priority": 0,
            "active": true,
            "messageLabel": "Buy one coke get one coke!!",
            "type": "POS",
            "condition": {
            "type": "PRODUCT",
            "cartCondition": null,
            "productCondition": {
                "criteriaList": [
                    {
                        "entity": "SKU",
                        "operator": "IN",
                        "values": [
                            "sprite"
                        ],
                        "attributeName": null
                    }
                ],
                "kpi": "QUANTITY",
                "value": "3.000000",
                "operator": "EQUALS"
            }
        },
    "action": {
        "type": "FREE_PRODUCT",
        "freeProductAction": {
            "productBasedCondition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "SKU",
                            "operator": "IN",
                            "values": [
                                
                                "sprite"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "value": 2.0,
                    "operator": "EQUALS"
                }
            }
        }
    },
            "createdBy": 123,
            "createdOn": 1615200585368,
            "lastUpdatedBy": 123,
            "lastUpdatedOn": 1619179294123,
            "startDate": 1621860079566,
            "endDate": 1627669800000,
            "campaignId": 2013
        }
```






## Get Promotion Details

Retrieves the promotion details.



> Sample Request

```html
https://api.capillary.co.in/api_gateway/loyalty/v1/programs/1745/promotions/12525
```



> Sample Response

```json

{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 12525,
            "name": "promo demo postman",
            "programId": 1745,
            "startDate": "2021-06-15T00:00+05:30",
            "endDate": "2022-01-01T23:59:59+05:30",
            "identifier": "new_test_promotion_for_119",
            "eventName": "TRANSACTIONADD",
            "metadata": [
                {
                    "key": "key",
                    "value": "value",
                    "isBrandDefined": "false"
                }
            ],
            "unsavedMetadataList": null,
            "allocatePointsOn": "BILL",
            "allocationActions": [
                {
                    "A1": {
                        "allocation": {
                            "type": "FIXED",
                            "value": 1.25
                        },
                        "expiry": {
                            "type": "DAYS",
                            "value": "2"
                        },
                        "rounding": "ROUND"
                    }
                }
            ],
            "qualifyingConditions": null,
            "conditionExpression": null,
            "allocationRule": null,
            "limits": {
                "pointsPerCustomer": -1,
                "numberOfTimesPerCustomer": -1,
                "totalPointsInPromotion": -1
            },
            "active": true
        }
    ]
}

```

### Resource Information

| | |
--------- | ----------- |
URI | `api_gateway/loyalty/v1/programs/(programId)/promotions/{promotionId}`
HTTP Method | GET
API Version | v1
Authentication | Yes
Rate Limited | Yes
Batch Support | No


### Request URL

`https://{host}/api_gateway/loyalty/v1/programs/(programId)/promotions/{promotionId}`


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
programId* | int | Unique ID of the loyalty program.You can fetch multiple promotions that run under a single loyalty program.
promotionId* | int | Unique ID of the loyalty promotion.
 
 
<aside class="notice"> Parameter marked with * is mandatory. </aside>




### Response Codes


Code | Description
---- | -----------
701 | Error while calling segmentation engine.
702 | Error while getting  org entities.
703 | Unable to fetch org time-zone.
704 | Invalid reward type passed.
705 | Exceeded maximum active promotions for an org.
706 | Promotion has expired.
707 | Unsupported promotion type passed.
708 | Exceeded max earn per customer limit
709 | Promotion not in running state.
710 | Error while saving earned promotion.
711 | Error while saving promotion.
711 | Could not get product details.
712 | Error while creating/updating EMF rules.
713 | Earned from type cannot be changed.
714 | Earn is not supported for the current promotion type.
715 | Promotion was not issued to current customer.
716 | Promotion name must be unique.
717 | Error while fetching org details.
718 | Promotion expiry reminder not active.
719 | Error while scheduling job.
720 | Unexpected error in subscription service.
721 | Unexpected error in communication engine.
722 | Unexpected error while creating web engage campaign ID.
723 | Error while creating communication detail entry.
724 | Activity type cannot be changed.
725 | Promotion id passed is not valid.
726 | Promotion earning validity expired for customer.
800 | Series Redemption failed. Promotion redemption already present.
801 | Promotion redemption transaction identifier not present.
802 | Redemption identifier is invalid.
803 | No valid cart evaluation id passed.