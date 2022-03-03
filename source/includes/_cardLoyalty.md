# Card Loyalty

Card enables orgs to run card based loyalty memberships with multiple card types. A customer can have multiple cards of a same or different series as intended by the org.

`Card Series` represents different types of cards of a brand. For example, Value Card, Premium card, Digital Card, and Physical Card. A card series stores information such as card series name, card type, card numbers, config details, and expiry details.

A card is either physical or digital and is associated with a Card Series. A card stores information such as issued date, expiry date, store or source account from which the card is issued, and current status.

Cards are specific to customers and not to source accounts. A customer can have multiple cards of the same card series. Issuing a card means linking a card to a customer. The following are the different types of cards supported.


* Create auto-generated physical/digital cards for a series.
 * Issue cards when a customer is registered (supports org level or OU level)
* Create manually generated physical/digital cards for a series.
* Issue external cards (that are not created in Capillary) 



## Create Card Series

Lets you create a new card series for the org. With this API, you can do the following:

* Create auto-generated physical/digital cards for a series.
* Create physical/digital card series with auto card generation disabled.
 


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series
```

> Sample Post Request

```json
{
  "code":"PLAPHY3",
  "name":"Gold Card",
  "type":"PHYSICAL",
  "expiryDays": 1000,
  "cardExpiryEnabled":true,
  "cardGenerationConfiguration":{
  	"prefix":"PLAT2",
  	"suffix":"2020",
    "length":16,
    "method" : "DEFAULT"
  },
    "cardGenerationEnabled":true,
    "isActive":true,
    "trigger":"SERIES_ID",
    "maxActiveCardsPerCustomer": 5
}

```

> Sample POST - Trigger on OU Events

```json
{
  "code":"GOLDDIF6",
  "name":"Gold Card 6",
  "type":"DIGITAL",
  "expiryDays": 1000,
  "cardExpiryEnabled":false,
  "cardGenerationConfiguration":{
  	"prefix":"GOLD6",
  	"suffix":"2020",
    "length":16,
    "method" : "DEFAULT"
  },
    "cardGenerationEnabled":true,
    "isActive":true,
    "trigger":"OU_ID",
    "conceptCode": "demo.brand",
    "maxActiveCardsPerCustomer": 5
}
```

> Sample Response

```json
{
   "entity":19,
   "warnings":[
      
   ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series`
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/series`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
code* | string | Unique code (supports up to 50 characters) for the card series. Only alpha-numeric is allowed.
name* | string | Name of the card series.
type* | enum | Type of the card. Value `PHYSICAL` (for physical cards), `DIGITAL` (for digital or soft copies)
expiryDays* | int | Validity of the card series in number of days from the issued date.
cardExpiryEnabled | boolean | Set `true` to enable card expiry. If this is `false`, `expiryDays` is not applicable.
cardGenerationConfiguration | obj | Configurations of the card series.
prefix | string | Starting characters for cards of the series.
suffix | string | Ending characters for cards of the series.
offset | int | Number of rows to be ignored from the top.
length | int | Length of the cards of the series.
method | enum | The card generation method. For now, only `DEFAULT` is supported.
cardGenerationEnabled | boolean | Pass `true` to auto-generate cards for the for the series, `false` to manually generate cards.
isActive | boolean | Pass `true` to activate the series. 
trigger | enum | When to generate cards from this series. Values `REGISTRATION` (to issue card automatically when a new customer is registered), `SERIES_ID` (to generate cards when the series code is passed during registration), `OU_ID` (to generate cards when a customer is registered at a specific OU, makes a transaction or updates profile for the first time and mention the desired `conceptCode`).
conceptCode** | string | Concept code associated with the card series. The concept is identified by the associated Till Code.
maxActiveCardsPerCustomer | int | Limit active cards per customer from the current card series.

 
<aside class="notice">Parameters marked with * are mandatory. conceptCode is required for the OU based trigger (OU_ID).</aside>




## Update Card Series

Lets you update the details of an existing card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/10
```

> Sample PUT Request

```json
{
  "code":"GOLDPHY23",
  "name":"Gold Card 23",
  "type":"PHYSICAL",
  "expiryDays": 500,
  "cardExpiryEnabled":true,
  "cardGenerationConfiguration":{
  	"prefix":"GOLD2",
  	"suffix":"2020",
    "length":16,
    "method" : "DEFAULT"
  },
    "cardGenerationEnabled":true,
    "isActive":true,
    "trigger":"SERIES_ID",
    "maxActiveCardsPerCustomer": 3
}

```

> Sample Response

```json
{
   "lastUpdateBy":50006796,
   "cardGenerationConfiguration":{
      "lastUpdatedBy":50006796,
      "orgId":50074,
      "seriesId":19,
      "suffix":"ZS",
      "prefix":"TTM00111",
      "length":10,
      "type":"LUHNAlGO"
   },
   "cardGenerationEnabled":true,
   "description":"Titanium Card for DemoOrg",
   "id":19,
   "orgId":50074,
   "type":"DIGITAL",
   "warnings":[
      
   ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series/{seriesId}`
HTTP Method | PUT
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/series/{seriesId}`

### Request Query Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to update.

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
code | string | Unique code (supports up to 50 characters) for the card series. Only alpha-numeric is allowed.
name | string | Name of the card series.
description | string | Description of the card series.
type* | enum | Type of the card series.  Values: `PHYSICAL` (physical card), `DIGITAL` (digital card or soft copy)
prefix | string | Characters to start with in a card number. 
suffix | string | Characters to end with in a card number. 
length* | int | Length of the card.
cardGenerationEnabled | boolean | Pass `true` to enable auto generating card, pass `false` to manually generate card numbers.
expiryDays* | int | Validity of the card series in number of days from the day of issual.
cardExpiryEnabled | boolean | Set `true` to enable card card expiry. If this is `false`, `expiryDays` is not applicable.
cardGenerationConfiguration | obj | Configurations of the card series.
prefix | string | Starting characters for cards of the series.
suffix | string | Ending characters for cards of the series.
offset | int | Number of rows to be ignored from the top.
length | int | Length of the cards of the series.
method | enum | The card generation method. For now, only `DEFAULT` is supported.
cardGenerationEnabled | boolean | Pass `true` enable generating automatically for the series, `false` to manually generate cards.
isActive | boolean | Pass `true` to activate the series, `false` to deactivate the series.
trigger | enum | When to generate cards from this series. Values `REGISTRATION` (to issue card automatically when a new customer is registered), `SERIES_ID` (to generate cards when the series code is passed during registration), `OU_ID` (to generate cards when a customer is registered at a specific OU, makes a transaction or update profile for the first time and mention the desired `conceptCode`).
conceptCode** | string | Concept code associated with the card series. The concept is identified by the associated Till Code.
maxActiveCardsPerCustomer | int | Limit active cards per customer from the current card series.
 
<aside class="notice"> All parameters marked with * are mandatory. </aside>


## Get All Card Series Details
 
Retrieves the details of all card series of the org.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/get/all
```

> Sample Response

```json
{
    "data": [
        {
            "lastUpdatedOn": "2021-04-02T17:53:27+05:30",
            "trigger": "REGISTRATION",
            "expiryDays": 1000,
            "cardExpiryEnabled": true,
            "lastUpdateBy": 50006796,
            "maxActiveCardsPerCustomer": 5,
            "cardGenerationConfiguration": {
                "lastUpdatedBy": 50006796,
                "orgId": 50074,
                "seriesId": 132,
                "suffix": "2020",
                "prefix": "GOLD5",
                "length": 16,
                "method": "DEFAULT"
            },
            "orgUnitId": 0,
            "cardGenerationEnabled": true,
            "code": "GOLDDIG5",
            "createdBy": 50006796,
            "createdOn": "2021-04-02T17:53:27+05:30",
            "name": "Gold Card 5",
            "id": 132,
            "isActive": true,
            "orgId": 50074,
            "type": "DIGITAL"
        },
        {
            "lastUpdatedOn": "2020-11-12T20:16:29+05:30",
            "trigger": "SERIES_ID",
            "expiryDays": 355,
            "cardExpiryEnabled": true,
            "lastUpdateBy": 50006796,
            "maxActiveCardsPerCustomer": 0,
            "orgUnitId": 0,
            "cardGenerationEnabled": false,
            "code": "goldseries",
            "createdBy": 50006796,
            "createdOn": "2020-11-12T20:16:30+05:30",
            "name": "card series create",
            "id": 28,
            "isActive": true,
            "orgId": 50074,
            "type": "DIGITAL"
        },
        {
            "lastUpdatedOn": "2021-03-30T17:28:45+05:30",
            "trigger": "SERIES_ID",
            "expiryDays": 1000,
            "cardExpiryEnabled": true,
            "lastUpdateBy": 50006796,
            "maxActiveCardsPerCustomer": 5,
            "cardGenerationConfiguration": {
                "lastUpdatedBy": 50006796,
                "orgId": 50074,
                "seriesId": 131,
                "suffix": "2020",
                "prefix": "PLAT2",
                "length": 16,
                "method": "DEFAULT"
            },
            "orgUnitId": 0,
            "cardGenerationEnabled": true,
            "code": "PLAPHY3",
            "createdBy": 50006796,
            "createdOn": "2021-03-30T17:28:45+05:30",
            "name": "Gold Card",
            "id": 131,
            "isActive": true,
            "orgId": 50074,
            "type": "PHYSICAL"
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series/get/all`
HTTP Method | GET
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/series/get/all`



 
## Get Card Series Details
 
Retrieves the details of a specific card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/10
```

> Sample Response

```json
{
    "expiryDays": 1000,
    "lastUpdateBy": 75029724,
    "maxActiveCardsPerCustomer": 0,
    "cardGenerationConfiguration": {
        "lastUpdatedBy": 75029724,
        "orgId": 100458,
        "seriesId": 6,
        "suffix": "2021",
        "prefix": "PETRON3",
        "length": 20,
        "type": "DEFAULT"
    },
    "cardGenerationEnabled": true,
    "code": "VAL3",
    "createdBy": 75029724,
    "createdOn": "2020-11-27T09:12:13Z",
    "name": "Petron Value Card 3.1",
    "id": 6,
    "isActive": false,
    "orgId": 100458,
    "type": "PHYSICAL",
    "warnings": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series/{seriesId}`
HTTP Method | GET
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/series/{seriesId}`


### Request Query Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the series to retrieve.

<aside class="notice"> The Parameter marked with * is mandatory. </aside>



## Deactivate Card Series

Lets you deactivate an active card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/132
```

> Sample PUT Request

```json
{
  "code":"",
  "name":"",
  "type":"PHYSICAL",
  "expiryDays": "",
  "cardExpiryEnabled":true,
  "cardGenerationConfiguration":{
  	"prefix":"",
  	"suffix":"",
    "length":"",
    "method" : "DEFAULT"
  },
    "cardGenerationEnabled":false,
    "isActive":false,
    "trigger":"SEIES_ID",
    "maxActiveCardsPerCustomer": 3
}
```

> Sample Response

```json
{
    "lastUpdateBy": 50006796,
    "cardGenerationConfiguration": {
        "suffix": "",
        "prefix": "",
        "length": 10
    },
    "cardGenerationEnabled": false,
    "description": "",
    "id": 132,
    "isActive": false,
    "orgId": 50074,
    "type": "DIGITAL",
    "warnings": []
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series/{seriesId}`
HTTP Method | PUT
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/series/{seriesId}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to deactivate (Path parameter).
isActive* | enum | Pass `0` to deactivate the card series. 
type* | enum | Type of cards of the series - `PHYSICAL`, `DIGITAL`.
 
<aside class="notice"> All parameters marked with * are mandatory. </aside>






## Generate Cards

Lets you generate cards for a card series in bulk.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/generate
```

> Sample POST Request

```json
{
   "seriesId":10,
   "count":6,
   "statusLabel":"NOT_ISSUED"
}
```

> Sample Response

```json
{
   "entity":[
      "TTM001113542235716ZS",
      "TTM001118022074654ZS",
      "TTM001113042076596ZS",
      "TTM001116982717633ZS",
      "TTM001118982988139ZS",
      "TTM001113572706062ZS"
   ],
   "warnings":[
      
   ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/generate`
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/generate`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to issue cards.
count* | int | Number of cards to generate.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired).
 
<aside class="notice"> All parameters marked with * are mandatory. </aside>





## Get Card Generation Log

Retrieves the log of cards generated for a specific card series. It also retrieves `fileHandle` using which you can download the history from S3 server.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/generation/logs/10
```

> Sample Response

```json
{
   "entity":[
      {
         "count":56,
         "createdBy":50006796,
         "date":"2020-11-04T12:47:53+05:30",
         "description":"",
         "fileHandle":"7aed5630-15ea-477c-bd35-d71200b22272",
         "id":46,
         "orgId":50074,
         "seriesId":10
      }
   ],
   "warnings":[
      
   ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/generation/logs/{seriesId}`
HTTP Method | GET
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card/generation/logs/{seriesId}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to retrieve log.
 
<aside class="notice"> The parameter marked with * is mandatory. </aside>



## Add Card Number to a Card Series

Lets you add a new card number to a card series. Once the card is added, you can issue it to a customer using customers `/changeIdentifier` API.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card
```

> Sample POST Request

```json
{
  "seriesId":15,
  "cardNumber":"EXTERNALCARD99123450233",
  "cardExternalId":"externalCardRe123",
  "statusLabel":"CARD_GENERATED",
  "customFields": {
	"city" : "Bangalore",
	"pincode" : "560056",
	"address" : "105, Brigade Road, "
  },
  "extendedFields":{
	"vehicle_make" : "ford"
   }
}
```

> Sample Response

```json
{
    "entity": 72453,
    "warnings": []
}
```




### Resource Information

| | |
--------- | ----------- |
URI | `v2/card`
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Card Series ID from which you want to generate card.
cardNumber* | string | Unique number of the card as per the card series configuration.
cardExternalId | string | External reference ID of the card.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). 
customFields | obj | Card level custom field details in key:value pair. 
extendedFields | obj | Card level extended field details in key:value pair. 

<aside class="notice"> Parameter marked with * is mandatory. </aside>




## Add Card Details (Single)

Lets you add/generate a new card number to a card series. Once the card is added, you can issue it to a customer using customers `/changeIdentifier` API.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card
```

> Sample POST Request

```json
{
  "seriesId":15,
  "cardNumber":"EXTERNALCARD99123450233",
  "cardExternalId":"externalCardRe123",
  "statusLabel":"CARD_GENERATED",
  "statusInfo": {
		"reason": "Card is generated"
	},
  "customFields": {
	"city" : "Bangalore",
	"pincode" : "560056",
	"address" : "105, Brigade Road, "
  },
  "extendedFields":{
	"vehicle_make" : "ford"
   }
}
```

> Sample Response

```json
{
    "entity": 72453,
    "warnings": []
}
```




### Resource Information

| | |
--------- | ----------- |
URI | `v2/card`
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Card Series ID from which you want to generate card.
cardNumber* | string | Unique number of the card as per the card series configuration.
cardExternalId | string | External reference ID of the card.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). 
customFields | obj | Card level custom field details to update in key:value pair. 
extendedFields | obj | Card level extended field details to update in key:value pair. 

<aside class="notice"> Parameter marked with * is mandatory. </aside>

## Update Card Details (Single)


Lets you update an existing card details such as card status label, and custom/extended field values.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card
```

> Sample PUT Request

```json

{
	"cardNumber": "warsawcustomc26",
    "seriesId": 23,
	"statusLabel": "new",
	"statusInfo": {
		"reason": "Change in card status"
	},
	 "mappedEntity": {
                    "type": "TILL",
                    "value": "paw1",
                    "id": 50016843
                },
     "customFields": {
		"budapest" : "field1",
		"type" : "type1",
		"name" : ""
  },
  "extendedFields":{
		"vehicle_make" : "2021"
    }
}
```

> Sample Response

```json
{
    "cardId": 204801,
    "customerId": 0,
    "extendedFields": {
        "vehicle_make": "2021"
    },
    "customFields": {
        "budapest": "field1",
        "name": "",
        "type": "type1"
    },
	"mappedEntity": {
        "type": "TILL",
        "value": "paw1",
        "id": 50016843
    },
    "cardNumber": "warsawcustomc26",
    "seriesId": 23,
    "orgId": 50740,
    "entityId": 50036987,
    "statusLabelInfo": {
        "createdOn": "2021-08-26",
        "entityStatusId": 1,
        "id": 225,
        "isActive": true,
        "label": "new",
        "orgId": 50740,
        "updatedOn": "2021-08-26",
        "status": "NOT_ISSUED",
        "type": "CARD",
        "actions": {},
        "default": true
    },
    "statusInfo": {
        "reason": "Change in card status",
        "actions": []
    },
    "transactionNotAllowed": false,
    "warnings": [
        {
            "status": false,
            "code": 3039,
            "message": "No update in status label"
        }
    ]
} 
```


### Resource Information

| | |
--------- | ----------- |
URI | `v2/card`
HTTP Method | PUT
API Version | v2
Batch Support | Yes

### Request URL
`{host}/v2/card`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Series ID of the card to update.
cardNumber** | string | Unique number of the card as per the card series configuration.
cardExternalId** | string | External reference ID of the card.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). 
customFields | obj | Card level custom field details to update in key:value pair. 
extendedFields | obj | Card level extended field details to update in key:value pair. 
mappedEntity | obj | Details of the TILL associated with the card issual.

<aside class="notice"> Parameter marked with * is mandatory. Either cardNumber or cardExternalId is mandatory.</aside>





## Update Card Details (Bulk)

Lets you update details of existing cards in bulk. You can update details such as card status label, and custom/extended field values.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card/bulk
```

> Sample PUT Request

```json
[
   {
      "cardNumber":"visasushi005",
      "statusLabel":"not_issued",
      "extendedFields":{
         "limit_set_by":"tom",
         "year_of_registration":2021
      },
      "mappedEntity":{
         "type":"TILL",
         "value":"paw1"
      },
      "customFields":{
         "cardstatus":"na",
         "carda1":"",
         "card_grade":"2"
      }
   },
   {
      "cardNumber":"visasushi007",
      "statusLabel":"not_issued",
      "extendedFields":{
         "limit_set_by":"som",
         "year_of_registration":2021
      },
      "mappedEntity":{
         "type":"TILL",
         "value":"paw1"
      },
      "customFields":{
         "carda1":"",
         "cardname":"sushi",
         "cardscope":"global",
         "cardstatus":"na",
         "cardtype":"silver"
      }
   }
]
```

> Sample Response

```json
{
    "response": [
        {
            "entityId": {
                "cardId": 417,
                "customerId": 0,
                "extendedFields": {
                    "limit_set_by": "tom",
                    "year_of_registration": 36
                },
                "customFields": {
                    "carda1": "",
                    "cardstatus": "na"
                },
                "mappedEntity": {
                    "type": "TILL",
                    "value": "paw1",
                    "id": 50016843
                },
                "cardNumber": "visasushi005",
                "orgId": 50247,
                "entityId": 50016843,
                "statusLabelInfo": {
                    "createdOn": "2021-11-23",
                    "entityStatusId": 1,
                    "id": 24,
                    "isActive": true,
                    "label": "not_issued",
                    "orgId": 50247,
                    "updatedOn": "2021-11-23",
                    "status": "NOT_ISSUED",
                    "type": "CARD",
                    "actions": {},
                    "default": true
                },
                "transactionNotAllowed": false
            },
            "errors": [],
            "warnings": [
                {
                    "status": false,
                    "message": "No update in status label",
                    "code": 3039
                },
                {
                    "status": false,
                    "message": "Invalid Custom-field name",
                    "code": 1022
                }
            ]
        },
        {
            "entityId": {
                "cardId": 419,
                "customerId": 0,
                "extendedFields": {
                    "limit_set_by": "som",
                    "year_of_registration": 36
                },
                "customFields": {
                    "carda1": "",
                    "cardname": "sushi",
                    "cardscope": "global",
                    "cardstatus": "na",
                    "cardtype": ""
                },
                "mappedEntity": {
                    "type": "TILL",
                    "value": "paw1",
                    "id": 50016843
                },
                "cardNumber": "visasushi007",
                "orgId": 50247,
                "entityId": 50016843,
                "statusLabelInfo": {
                    "createdOn": "2021-11-23",
                    "entityStatusId": 1,
                    "id": 24,
                    "isActive": true,
                    "label": "not_issued",
                    "orgId": 50247,
                    "updatedOn": "2021-11-23",
                    "status": "NOT_ISSUED",
                    "type": "CARD",
                    "actions": {},
                    "default": true
                },
                "transactionNotAllowed": false
            },
            "errors": [],
            "warnings": [
                {
                    "status": false,
                    "message": "No update in status label",
                    "code": 3039
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
URI | `v2/card/bulk`
HTTP Method | PUT
API Version | v2
Batch Support | Yes

### Request URL
`{host}/v2/card/bulk`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Card Series ID from which you want to generate card.
cardNumber** | string | Unique number of the card as per the card series configuration.
cardExternalId** | string | External reference ID of the card.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). 
customFields | obj | Card level custom field details to update in key:value pair. 
extendedFields | obj | Card level extended field details to update in key:value pair. 
mappedEntity | obj | Details of the TILL associated with the card issual.

<aside class="notice"> Parameter marked with * is mandatory. Either cardNumber or cardExternalId is mandatory.</aside>





## Get Card Details

Retrieves the details of a specific card.

> Sample Request

```html
https://us.api.capillarytech.com/v2/card?number=test123112121

```

> Sample Response

```json
{
    "cardId": 204802,
    "issuedDate": "2021-12-08T17:53:01+05:30",
    "createdDate": "2021-12-08",
    "expiryDays": 0,
    "seriesName": "14477448572684visa001",
    "customerId": 374395406,
    "maxActiveCards": 10,
    "entityCode": "paw1",
    "extendedFields": {
        "vehicle_make": "ford"
    },
    "customFields": {
        "city": "Bangalore",
        "address": "103, Richmond street ",
        "pincode": ""
    },
    "type": "DIGITAL",
    "cardNumber": "test123112121",
    "seriesId": 298,
    "seriesCode": "14477448572684",
    "orgId": 50740,
    "entityId": 50036987,
    "statusInfo": {
        "reason": "",
        "createdBy": 204802,
        "actions": [],
        "autoUpdateTime": "2021-12-08",
        "createdOn": "2021-12-08T17:53:01+05:30",
        "entityId": 204802,
        "id": 213779,
        "isActive": true,
        "labelId": 208,
        "label": "ACTIVE",
        "status": "ACTIVE"
    },
    "id": 204802,
    "transactionNotAllowed": true,
    "warnings": []
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/v2/card?number={cardNmber}`
HTTP Method | GET
API Version | v2
Batch Support | No

### Request URL
`{host}/v2/card?number={cardNumber}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
cardNmber* | int | Card number to retrieve details.
 
<aside class="notice"> The parameter marked with * is  mandatory. </aside>



## Set Card Status Labels


Lets you add or map custom status labels to standard statuses and set default label names for each status.  

> Sample Request

```html
https://eu.api.capillarytech.com/v2/genericStatus/card/labelMapping
```


> Sample POST Request

```json
{
   "mapping":{
      "NOT_ISSUED":[
         {
            "default":true,
            "label":"NOT_ISSUED"
         }
      ],
      "ISSUED":[
         {
            "default":true,
            "label":"ISSUED"
         }
      ],
      "ACTIVE":[
         {
            "default":true,
            "label":"ACTIVE"
         },
		 {
            "default":true,
            "label":"CARD_GENERATED"
         }
      ],
      "SUSPENDED":[
         {
            "default":true,
            "label":"SUSPENDED"
         }
      ],
      "EXPIRED":[
         {
            "default":true,
            "label":"EXPIRED"
         }
      ],
      "DELETED":[
         {
            "default":true,
            "label":"DELETED"
         }
      ]
   }
}
```

> Sample Response

```json
{
   "mapping":{
      "ACTIVE":[
         {
            "label":"ACTIVE",
            "actions":{
               
            },
            "default":true
         }
      ],
      "DELETED":[
         {
            "label":"DELETED",
            "actions":{
               
            },
            "default":true
         }
      ],
      "EXPIRED":[
         {
            "label":"EXPIRED",
            "actions":{
               
            },
            "default":true
         }
      ],
      "ISSUED":[
         {
            "label":"ISSUED",
            "actions":{
               
            },
            "default":true
         }
      ],
      "NOT_ISSUED":[
         {
            "label":"NOT_ISSUED",
            "actions":{
               
            },
            "default":true
         }
      ],
      "SUSPENDED":[
         {
            "label":"SUSPENDED",
            "actions":{
               
            },
            "default":true
         }
      ]
   },
   "entityType":"CARD",
   "warnings":[
      
   ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/v2/genericStatus/card/labelMapping`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | NA

### Request URL

`{host}/v2/genericStatus/card/labelMapping`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
status names* | array | Standard status name for which custom labels need to be added. 
label* | string | Custom label name for the default status.
default | boolean | Pass `true` for default values.

<aside class="notice">Parameters marked with * are mandatory. </aside>



## Get Default Status Labels


Retrieves the default status labels of cards.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/genericStatus/card/labels
```


> Sample Response

```json
{
    "data": [
        {
            "createdOn": "2020-11-27",
            "description": "default",
            "entityStatusId": 1,
            "id": 14,
            "isActive": true,
            "label": "NOT_ISSUED",
            "orgId": 100459,
            "updatedOn": "2020-11-27",
            "status": "NOT_ISSUED",
            "type": "CARD",
            "actions": {},
            "default": false
        },
        {
            "createdOn": "2020-11-27",
            "description": "default",
            "entityStatusId": 2,
            "id": 15,
            "isActive": true,
            "label": "ACTIVE",
            "orgId": 100459,
            "updatedOn": "2020-11-27",
            "status": "ACTIVE",
            "type": "CARD",
            "actions": {},
            "default": false
        },
        {
            "createdOn": "2020-11-27",
            "description": "default",
            "entityStatusId": 3,
            "id": 16,
            "isActive": true,
            "label": "EXPIRED",
            "orgId": 100459,
            "updatedOn": "2020-11-27",
            "status": "EXPIRED",
            "type": "CARD",
            "actions": {},
            "default": false
        },
        {
            "createdOn": "2020-11-27",
            "entityStatusId": 3,
            "id": 22,
            "isActive": true,
            "label": "CARD EXPIRED",
            "orgId": 100459,
            "updatedOn": "2020-11-27",
            "status": "EXPIRED",
            "type": "CARD",
            "actions": {},
            "default": false
        },
        {
            "createdOn": "2021-01-12",
            "entityStatusId": 4,
            "id": 23,
            "isActive": true,
            "label": "CARD BLOCKED",
            "orgId": 100459,
            "updatedOn": "2021-01-12",
            "status": "SUSPENDED",
            "type": "CARD",
            "actions": {},
            "default": true
        },
        {
            "createdOn": "2021-01-12",
            "entityStatusId": 2,
            "id": 24,
            "isActive": true,
            "label": "NEW CARD",
            "orgId": 100459,
            "updatedOn": "2021-01-12",
            "status": "ACTIVE",
            "type": "CARD",
            "actions": {},
            "default": true
        },
        {
            "createdOn": "2021-01-12",
            "entityStatusId": 11,
            "id": 25,
            "isActive": true,
            "label": "CARD DELETED",
            "orgId": 100459,
            "updatedOn": "2021-01-12",
            "status": "DELETED",
            "type": "CARD",
            "actions": {},
            "default": true
        },
        {
            "createdOn": "2021-01-12",
            "entityStatusId": 1,
            "id": 26,
            "isActive": true,
            "label": "CARD GENERAETED",
            "orgId": 100459,
            "updatedOn": "2021-01-12",
            "status": "NOT_ISSUED",
            "type": "CARD",
            "actions": {},
            "default": true
        },
        {
            "createdOn": "2021-01-12",
            "description": "default",
            "entityStatusId": 11,
            "id": 27,
            "isActive": true,
            "label": "DELETED",
            "orgId": 100459,
            "updatedOn": "2021-01-12",
            "status": "DELETED",
            "type": "CARD",
            "actions": {},
            "default": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v2/genericStatus/card/labels`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | GET
Batch Support | NA

### Request URL

`{host}/v2/genericStatus/card/labels`




## Add External Reference ID to Card

Lets you update an external reference ID to a card.



> Sample Request

```html
https://eu.api.capillarytech.com/v2/card
```

> Sample PUT Request

```json
{
	"cardNumber":"GOLD00000000000003002020",
	"cardExternalId":"externalId123"
	"statusLabel":"EXPIRED"
}
```


> Sample Response

```json
    "cardId": 66996,
    "customerId": 98662653,
    "cardExternalId": "externalId123",
    "cardNumber": "GOLD500000000000554572020",
    "orgId": 100458,
    "entityId": 75040399,
    "statusLabelInfo": {
        "createdOn": "2020-11-27",
        "description": "default",
        "entityStatusId": 2,
        "id": 15,
        "isActive": true,
        "label": "ACTIVE",
        "orgId": 100458,
        "updatedOn": "2020-11-27",
        "status": "ACTIVE",
        "type": "CARD",
        "actions": {},
        "default": false
    },
    "transactionNotAllowed": false,
    "warnings": [
        {
            "status": false,
            "message": "No update in status label",
            "code": 3039
        }
    ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/v2/card`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | PUT
Batch Support | No


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
cardNumber* | string | Card number to update.
cardExternalId* | string | External reference ID to be tagged.
statusLabel* | string | Current or new custom status label (required to update status labels.)

<aside class="notice">Parameters marked with * are mandatory.</aside>





## Expire or Delete a Card

Lets you expire an active card of a customer.

* A generated card cannot be expired or deleted.
* An expired card cannot be deleted.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card
```

> Sample PUT Request

```json
{
	"cardNumber":"GOLD00000000000003002020",
	"statusLabel":"EXPIRED"
}
```


> Sample Response

```json

```


### Resource Information
| | |
--------- | ----------- |
URI | `/v2/card`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | PUT
Batch Support | No


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
cardNumber* | string | Card number to expire or delete.
statusLabel* | string | New custom status label related to expire to expire the card, and delete to delete the card.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Get Card Status Changes Log

Retrieves the log of status changes of a card number.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/card/statusLog?number=GOLD00000000000001012020
```

> Sample Response

```json
{
    "data": [
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T10:39:19Z",
            "entityId": 10609,
            "isActive": false,
            "label": "CARD GENERATED",
            "status": "NOT_ISSUED"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T10:40:25Z",
            "entityId": 10609,
            "isActive": false,
            "label": "ACTIVE",
            "status": "ACTIVE"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:01:39Z",
            "entityId": 10609,
            "isActive": false,
            "label": "SUSPENDED",
            "status": "SUSPENDED"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:02:00Z",
            "entityId": 10609,
            "isActive": false,
            "label": "ACTIVE",
            "status": "ACTIVE"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:02:39Z",
            "entityId": 10609,
            "isActive": true,
            "label": "EXPIRED",
            "status": "EXPIRED"
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `v2/card/statusLog?number={cardNumber}`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | GET
Batch Support | No


### Request URL
`{host}/v2/card/statusLog?number={cardNumber}`

### Request Query Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
number* | string | Card number to see the status change log.



## Set Max Active Cards per Customer

Lets you set maximum number of active cards a customer can have from the org.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/organization/configs
```

> Sample POST Request

```json
{
  "keyName": "CONF_MAX_CARDS_PER_ORG",
  "value": "6",
  "scope":"ORG"
}

```


> Sample Response

```json
{
    "id": 1290976,
    "entityId": 100458,
    "keyName": "CONF_MAX_CARDS_PER_ORG",
    "value": "6",
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `v2/organization/configs`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | No


### Request URL
`{host}/v2/organization/configs`

### Request Body Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
keyName* | enum | Pass `CONF_MAX_CARDS_PER_ORG`
value* | int | Limit the count of active cards per customer.
scope* | enum | Scope of the configuration. Pass `ORG` for org level configuration.

<aside class="notice">Parameters marked with * are mandatory. </aside>




## Get Max Active Cards Configured per Customer

Retrieves the configured maximum number of cards active cards per customer.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/organization/configs/CONF_MAX_CARDS_PER_ORG
```



> Sample Response

```json
{
    "entityId": 100458,
    "keyName": "CONF_MAX_CARDS_PER_ORG",
    "value": "6",
    "scope": "ORG",
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v2/organization/configs/CONF_MAX_CARDS_PER_ORG`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | GET
Batch Support | No


### Request URL
`{host}/v2/organization/configs/CONF_MAX_CARDS_PER_ORG`



## Response Codes

### Error Codes

Code | Description
---- | -----------
701 | Invalid configurations set
702 | Maximum card numbers reached.
703 | Card number generation disabled
704 | Invalid card number length configured.
705 | Card number generation failed due to unexpected reason.
1060 | Exceeded maximum limit size of 200.
3000 | Invalid card series.
3001 | Series code empty.
3002 | Series already exists.
3003 | Series type is empty.
3004 | Series does not exist.
3005 | Card length invalid.
3006 | Card configuration already exists with the same prefix,suffix and cardlength.
3007 | Card generation config not passed.
3008| Card series expired.
3009 | Card number exists.
3010 | Card number does not exists.
3011 | Card status not passed.
3012 | Card status same as passed.
3013 | Card status can only be changed to expired,deleted or suspended.
3014 | Status labels are empty.
3015 | Duplicate statuses passed.
3016 | {x} card status is not valid.
3017 | Status label invalid.
3018 | Card status label is not mapped to NOT_ISSUED.
3019 | Card expiry days should not be negative.
3020 | DIGITAL & PHYSICAL are the only possible card types.
3021 | No change in card generation configurations.
3022 | Card prefix passed is not a standard string.
3023 | Card suffix passed is not a standard string.
3024 | Card number total length should not be more than 150.
3025 | Count field invalid.
3026 | Card count exceeds 100000.
3027 | Card is not linkable.
3028 | Card length should not be less than 5.
3029 | Card number max length exceeded.
3030 | Card generation failed.
3031 | Card can not get be unlinked.
3032 | {x} is not alphanumeric. <br>Org unit passed is not valid.
3033 | Card expiry days not passed.<br>{x} status mapping is not passed.
3034 | Max active card per customer passed is negative. <br>Default label is not set for {x} status.
3035 | Multiple cards can not be registered/updated in a single call. <br>More than one label is set as default for {x} status.
3036 | Active cards of the customer exceeded the max configured value for this card series. <br>{x} label passed is repeating.
3037 | Multiple cards can not be linked or unlinked at once. <br>Org unit passed is linked to a different card series.
3038 | Card status can not be changed from {x} to {y}.<br>Registration trigger exists for a different card series.
3039 | No update in status label.<br>Active cards of the customer exceeded the max configured value for this org.
3040 | {x} action not supported for status {y}.
3041 | {x} action not mapped for label {y}
3042 | customer status was marked to deleted. Any further changes on this customer are not allowed.
3043 | Org unit trigger exists for this org.
3044 | Customer status is disabled.
3045 | Card external id exists.
3046 | Card external id & card number mismatch.
3047 | Card offset invalid.
3048 | Mapped Entity type {x} and Entity value {y} passed is invalid.
3049 | Mapped Entity Type Passed is invalid.
3050 | Card external id length {x} should be equal or greater than card id length {y}.
3051 | Unable to update/generate card external id.

