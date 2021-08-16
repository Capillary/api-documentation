# Loyalty Promotions

## Create Promotion
Lets you create a promotion for a specific loyalty program. 
​
​
> Sample Request
​
```html
​
https://api.capillary.co.in/api_gateway/loyalty/v1/programs/{programId}/promotions/add/simple
​
```
​
​
> Sample POST Request
​
```json
​
{
    "id": 59,
    "name": "promo demo postman",
    "programId": 1745,
    "startDate": "2021-06-15T12:00:00+01:00",
    "endDate": "2022-01-01T12:00:00+01:00",
    "allocatePointsOn": "BILL",
    "identifier": "new_test_promotion_for_119",
    "eventName": "TRANSACTIONADD",
    "metadata": [
        {
            "key": "",
            "value": ""
        }
    ],
    "allocationActions": [
        {
            "A1": {
                "allocation": {
                    "type": "FIXED",
                    "value": 1.25
                },
                "expiry": {
                    "type": "DAYS",
                    "value": 2
                },
                "rounding": "ROUND"
            }
        }
    ],
    "qualifyingConditions": [
        {
            "C1": {
                "kpi": "value",
                "params": null,
                "matchValue": "100",
                "entity": "BILL",
                "operator": "GREATER_THAN"
            }
        }
    ],
    "conditionExpression": "C1",
    "allocationRule": [
        {
            "allocation_ref": "A1"
        }
    ],
    "limits": {
        "pointsPerCustomer": -1,
        "numberOfTimesPerCustomer": -1,
        "totalPointsInPromotion": -1
    }
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
            "startDate": "2021-06-15T00:00:00.612+05:30",
            "endDate": "2022-01-01T23:59:59.612+05:30",
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
​
```
​
​
### Resource Information
​
| | |
--------- | ----------- |
URI | `api_gateway/loyalty/v1/programs/{programId}/promotions/add/simple?{queryparam}={value}`
HTTP Method | POST
API Version | v1
Rate Limited | Yes
Batch Support | No
​
​
​
### Request URL
`https://{host}/api_gateway/loyalty/v1/programs/{programId}/promotions/add/simple`
​
​
​
### Request POST Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | int | 
name* | string | Unique name of the promotion.
programId* | int | Unique ID of the loyalty program to associate with the promotion. You can create multiple promotions under a single loyalty program.
startDate* | date-time | Validity of the promotion. Pass the date range in `startDate` and `endDate` (ISO standard - `yyyy-mm-ddThh:mm:ss.s+z`).
endDate* | date-time | Validity of the promotion. Pass the ISO date range in `startDate` and `endDate` (ISO standard - `yyyy-mm-ddThh:mm:ss.s+z`).
allocatePointsOn | string | Enter event action name that generates promotional points. For example,  `Bill`.
identifier* | string | Unique identifier of the promotion.
eventName* | enum | Name of the event to associate with the promotion. For example, `TRANSACTIONADD`, `CUSTOMERUPDATE`, `OfferScan`, `spinTheWheel`, and more.
metadata | obj | Enter meta information of the promotion in key and value.
allocationActions | obj | Allocation attributes like allocation type, expiry days, and more.
qualifyingConditions | array | Array of different conditions like KPI, parameters, and more.
conditionExpression | string | Name of the condition that is passed in `qualifyingConditions`.
allocationRule | array | Set the condition to generate the promotional points.
limits | obj | Set the maximum number of promotional points issued to a customer during a specific promotion period. Set the maximum number of times points can be issued to a customer during a promotion period. Set the total number of points that can be generated during a promotion period. 
 
 
<aside class="notice"> Parameter marked with * is mandatory. </aside>
​
​
​
## Get Promotion Details
Retrieves the promotion details.
​
​
​
> Sample Request
​
```html
​
https://api.capillary.co.in/api_gateway/loyalty/v1/programs/1745/promotions/12525
​
```
​
​
​
> Sample Response
​
```json
​
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
​
```
​
​
​
### Resource Information
​
| | |
--------- | ----------- |
URI | `api_gateway/loyalty/v1/programs/(programId)/promotions/{promotionId}`
HTTP Method | GET
API Version | v1
Authentication | Yes
Rate Limited | Yes
Batch Support | No
​
​
​
### Request URL
`https://{host}/api_gateway/loyalty/v1/programs/(programId)/promotions/{promotionId}`
​
​
​
### Request Path Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
programId* | int | Unique ID of the loyalty program.You can fetch multiple promotions that run under a single loyalty program.
promotionId* | int | Unique ID of the loyalty promotion.
 
 
<aside class="notice"> Parameter marked with * is mandatory. </aside>