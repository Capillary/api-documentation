# Verticals

Vertical represents the type of business. For example, apparel, jewelry, and e-commerce. An org can have one or more verticals.




## Add Vertical
​
This API lets you add a vertical to an org. 
​
​
​
> Sample Request
​
```html
​
https://us.api.capillarytech.com/v2/verticals
​
```
​
> Sample Post Request
​
```json
​
{
   "orgId":100458,
   "verticalId":11,
   "verticalName":"Apparel",
   "isActive":true
}
​
```
​
​
> Sample Response 
​
```json
​
{
   "entity":true,
   "warnings":[
      
   ]
}
​
```
​
​
### Resource Information
​
​
| | |
--------- | ----------- |
URI | `v2/verticals`
HTTP Method | POST
API Version | v2
Batch Support | No
Rate Limited? | No
​
​
​
### Request URL
​
​
`https://{host}/v2/verticals`
​
​
​
​
​
​
### Request Body Parameters
​
Parameter | Datatype | Description
--------- | -------- | -----------
orgId | int | Unique ID of the org for which you want to add a vertical. 
verticalId* | int | Unique ID of the vertical to add. 
verticalName | string | Name of the vertical.
isActive* | boolean | Pass 'true` to activate the vertical for an org. The default value is `true`.
​
<aside class="notice"> Parameter marked with * is mandatory. </aside>
​
​
## Remove Vertical
​
This API removes a vertical from the org. 
​
​
​
> Sample Request
​
```html
​
https://us.api.capillarytech.com/v2/verticals/11
​
```
​
​
​
​
> Sample Response 
​
```json
​
{
    "orgId": 100458,
    "verticalId": 11,
    "isActive": true,
    "warnings": []
}
​
```
​
​
### Resource Information
​
​
| | |
--------- | ----------- |
URI | `v2/verticals/(vericalId)`
HTTP Method | DELETE
API Version | v2
Batch Support | No
Rate Limited? | No
​
​
​
### Request URL
​
​
`https://{host}/v2/verticals/{verticalId}`
​
​
​
​
​
​
### Request Path Parameters
​
Parameter | Datatype | Description
--------- | -------- | -----------
verticalId* | int | Unique ID of the vertical to delete. 
​
​
​
<aside class="notice"> Parameter marked with * is mandatory. </aside>




## Retrieve All Verticals Available for the Org

```html
# Sample Request
https://us.api.capillarytech.com/v2/verticals/meta
```

```json
# Sample Response

{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 5
    },
    "data": [
        {
            "id": 1,
            "name": "Jewellery"
        },
        {
            "id": 2,
            "name": "E-commerce"
        },
        {
            "id": 3,
            "name": "Electronics"
        },
        {
            "id": 4,
            "name": "Apparel"
        },
        {
            "id": 5,
            "name": "F&B"
        }
    ],
    "warnings": [],
    "errors": []
}
```

Retrieves the list of all verticals available for the org. This include both active and inactive verticals.

### Resource Information

Information | Value
----------- | -----
URI | `/verticals/meta`
Authentication | Yes
HTTP Method | GET
Batch Support | NA

### Request URL

`htpps://{host}/v2/verticals/meta`



## Retrieve Verticals Enabled for the Org 

```html
# Sample Request
https://us.api.capillarytech.com/v2/verticals
```

```json
# Sample Response

{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 5
    },
    "data": [
        {
            "orgId": 1,
            "verticalId": 1,
            "verticalName": "Jewellery",
            "isActive": true
        },
        {
            "orgId": 1,
            "verticalId": 2,
            "verticalName": "E-commerce",
            "isActive": true
        },
        {
            "orgId": 1,
            "verticalId": 1,
            "verticalName": "Electronics",
            "isActive": true
        },
        {
            "orgId": 1,
            "verticalId": 4,
            "verticalName": "Apparel",
            "isActive": true
        },
        {
            "orgId": 1,
            "verticalId": 5,
            "verticalName": "Home Appliance",
            "isActive": true
        }
    ],
    "warnings": [],
    "errors": []
}

```

Retrieves the list of verticals enabled for the org (active verticals).

### Resource Information

Information | Value
----------- | -----
URI | `/verticals`
Authentication | Yes
HTTP Method | GET
Batch Support | NA

### Request URL
`htpps://{host}/v2/verticals`









## Response Codes
Code | Description
---- | -----------
91027 | Unable to find vertical
91028 | Invalid vertical
91029 | Unable to add vertical. Invalid vertical name passed
91030 | Unable to add org vertical
91031 | Unable to disable the vertical
91032 | Org is already mapped to the specified vertical id