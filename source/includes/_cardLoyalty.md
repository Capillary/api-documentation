# Card Loyalty/Membership

Card enables orgs to run card based loyalty memberships with multiple card types. A customer can have multiple cards of a same series or different series as intended by the org.

`Card Series` represents different types of cards a brand. For example, Value Card, Premium card, Digital Card, and Physical Card. A card series stores information such as card series name, card type, card numbers config details, and expiry details.

A card is a physical or digital card and associated to a Card Series. A card stores information such as issued date, expiry date, store or source account from which the card is issued, and current status.

Cards are specific to customers and not to source accounts. A customer can have multiple cards of the same card series. Issuing a card means linking a card to a customer. A card to be issued to a customer can be any of the following types.
* Issuing a digital or virtual card.
* Issuing a physical card generated in Capillary.
* Issuing a physical card that is not generated in Capillary.





## Create Card Series

Lets you create a new card series for the org.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series
```

> Sample Post Request

```json
{
   "code":"2platin34",
   "description":"card series create",
   "type":"PHYSICAL",
   "expiryDays":355
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
 code* | string | A valid code (supports up to 50 characters) for the card series. Only alpha-numeric is allowed.
 description | string | Description of the  coupon series.
 type* | enum | Type of the card. Value `PHYSICAL` (for physical cards), `DIGITAL` (for digital or soft copies)
 expiryDays* | int | Validity of the card series in number of days from the day of issual.
 
 <aside class="notice">Parameters marked with * are mandatory. </aside>
 
 
## Get Card Series Details
 
Retrieves the details of a specific card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/10
```

> Sample Response

```json
{
   "expiryDays":355,
   "lastUpdateBy":50006796,
   "cardGenerationEnabled":false,
   "code":"3#$%^&*1",
   "createdBy":50006796,
   "createdOn":"2020-11-04T12:19:38+05:30",
   "description":"card series create",
   "id":10,
   "isActive":true,
   "orgId":50074,
   "type":"PHYSICAL",
   "warnings":[ ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/card/series/{seriesId}`
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`https://{host}/v2/card/series/{seriesId}`


### Request Query Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the series to retrieve.

<aside class="notice"> The Parameter marked with * is mandatory. </aside>



## Update Card Series

Lets you update the details of an existing card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series/10
```

> Sample PUT Request

```json
{
   "description":"Titanium Card for DemoOrg",
   "type":"DIGITAL",
   "cardGenerationConfiguration":{
      "prefix":"TTM00111",
      "suffix":"ZS",
      "length":10
   },
   "cardGenerationEnabled":true
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
`https://{host}/v2/card/series/{seriesId}`

### Request Query Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to update.

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
description | string | Description of the Card Series.
type* | enum | Type of the card series.  Values: `PHYSICAL` (physical card), `DIGITAL` (digital card or soft copy)
prefix | string | Characters to start with in a card number. 
suffix | string | Characters to end with in a card number. 
length* | int | Length of the card.
cardGenerationEnabled | boolean | Pass `true` to enable auto generating card, pass `false` to manually generate card numbers.
 
<aside class="notice"> All parameters marked with * are mandatory. </aside>


## Deactivate Card Series

Lets you deactivate an active card series.


> Sample Request

```html
https://us.api.capillarytech.com/v2/card/series
```

> Sample PUT Request

```json
{
    "description": "",
    "isActive":0,
    "type": "DIGITAL",
    "cardGenerationConfiguration": {
        "prefix": "",
        "suffix": "",
        "length": 10
    },
    "cardGenerationEnabled": false
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
    "id": 18,
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
`https://{host}/v2/card/series/{seriesId}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to issue cards (Query parameter).
isActive* | enum | Pass `0` to deactivate the card series. 
count* | int | Number of cards to generate.
 
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
`https://{host}/v2/card/generate`

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
HTTP Method | POST
API Version | v2
Batch Support | No

### Request URL
`https://{host}/v2/card/generation/logs/{seriesId}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Unique ID of the card series to retrieve log.
 
<aside class="notice"> The parameter marked with * is mandatory. </aside>







## Create Card (without Customer Tagging)

Lets you create or add a card of a series. The card will not have any customer tagging.

<aside class="notice">Use this API to add an existing card that is not linked to a customer. </aside>


> Sample Request

```html
https://us.api.capillarytech.com/v2/card
```

> Sample Post Request

```json
{
   "seriesId":10,
   "cardNumber":"test123112121",
   "statusLabel":"NOT_ISSUED"
}
```

> Sample Response

```json
{
   "entity":550271,
   "warnings":[
      
   ]
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
`https://{host}/v2/card`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
seriesId* | int | Card Series ID from which you want to generate card.
cardNumber* | string | Unique number of the card as per the card series configuration.
statusLabel* | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). 

<aside class="notice"> Parameter marked with * is mandatory. </aside>




## Get Card Details

Retrieves the details of a specific card.

> Sample Request

```html
https://us.api.capillarytech.com/v2/card?number=test123112121

```

> Sample Response

```json
{
    "cardNumber": "test123112121",
    "seriesId": 19,
    "orgId": 50074,
    "entityId": 50006796,
    "statusInfo": {
        "autoUpdateTime": "2020-11-04",
        "createdOn": "2020-11-04",
        "entityId": 550271,
        "id": 550260,
        "isActive": true,
        "labelId": 12,
        "orgId": 50074,
        "label": "NOT_ISSUED",
        "status": "NOT_ISSUED"
    },
    "warnings": []
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `v2/card?number={cardNmber}`
HTTP Method | GET
API Version | v2
Batch Support | No

### Request URL
`https://{host}/v2/card?number={cardNumber}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
cardNmber* | int | Card number to retrieve details.
 
<aside class="notice"> The parameter marked with * is  mandatory. </aside>
