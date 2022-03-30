# Target Loyalty

# Create Target Groups

Lets you create a new target group.


> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups
```

> Sample POST Request

```json
{
  "active": true,
  "description": "TGF19",
  "fromDate": "2021-05-27T08:41:00.529Z",
  "name": "TGF19",
  "preferredTillId": 0,
  "toDate": "2021-05-28T08:41:00.529Z",
  "totalPeriods": 0,
  "frequency":5,
  "recurringCycles":2,
  "targetCycleStartDate": "2021-05-28T08:41:00.529Z",
  "periods": [
    {
      "active": true,
      "description": "string",
      "endDate": "2022-05-29T11:35:52.976Z",
      "periodStatus": "RUNNING",
      "refCode": "string",
      "startDate": "2022-03-29T11:35:52.976Z"
    }
  ],
  "activePeriod": {
    "active": true,
    "description": "Sample description",
    "endDate": "2022-04-29T11:35:52.975Z",
    "periodStatus": "RUNNING",
    "refCode": "gdf123",
    "startDate": "2022-03-28T11:35:52.975Z"
  }
}
```

> Sample Response

```json
{
    "data": {
        "id": 32,
        "name": "TGF19",
        "fromDate": "2021-05-27",
        "toDate": "2021-05-28",
        "active": true,
        "preferredTillId": 0,
        "periods": [
            {
                "id": 74,
                "attribution": {
                    "createdOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    }
                },
                "startDate": "2022-03-29",
                "endDate": "2022-05-29",
                "refCode": "string",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 32,
                "description": "string",
                "active": true
            }
        ],
        "activePeriod": {
            "startDate": "2022-03-28",
            "endDate": "2022-04-29",
            "refCode": "gdf123",
            "periodStatus": "RUNNING",
            "description": "Samplr description",
            "active": true
        },
        "totalPeriods": 0,
        "description": "TGF19",
        "recurringCycles": 2,
        "frequency": 5,
        "targetCycleStartDate": "2021-05-28T08:41:00.529Z"
    },
    "errors": null
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups`
Authentication | Yes
API Version | v3
HTTP Methods | POST
Batch Support | No

### Request URL

`http://{host}/v3/targetGroups`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
active | boolean | Current status of the target group. Pass `true` to keep the group active, `false` to inactive.
description | string | Short Description about the group.
fromDate | date-time | Timestamp of when the group is created in ISO standard date format. This should be a future date.
name* | string | Name of the target group.
preferredTillId* | string | TILL that needs to be associated for points issued on completing the target.
toDate | date-time | Timestamp until when the group is active in ISO standard date format. This should be a future date and > `startDate`.
totalPeriods | int | The total number of periods in the group.
frequency | int | Frequency of custom recurring cycle in number of days.
recurringCycles | int | Frequency of the recurring cycle of Values: `MONTHLY`, `QUARTERLY`, `HALF_YEARLY`, `YEARLY`, `CUSTOM`.
targetCycleStartDate | date-time | Start date and time of the target cycle (ISO standard date format)
periods | array-obj | Details of each target period of the group.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active | boolean | Pass `true` to activate the target group.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | Short description of the target period.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate": "2022-05-29T11:35:52.976Z",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;periodStatus | enum | Status of the target period. Values: `RUNNING`,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refCode | string | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate | date-time | Timestamp of the target period's start date.
activePeriod | obj | 


## Modify Target Groups

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups
```

> Sample POST Request

```json

```

> Sample Response

```json

```


### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups`
Authentication | Yes
API Version | v3
HTTP Methods | PUT
Batch Support | No




## Get Target Groups

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/20
```

> Sample Response

```json
{
    "data": {
        "id": 20,
        "attribution": {
            "createdOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            },
            "createdBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            }
        },
        "name": "Demo Targets",
        "fromDate": "2021-11-18",
        "toDate": "2022-01-17",
        "active": true,
        "preferredTillId": 75043577,
        "totalPeriods": 2,
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": -1,
        "frequency": 0,
        "frequencyType": "MONTHLY"
    },
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}`
Authentication | Yes
API Version | v3
HTTP Methods | GET
Batch Support | No

### Request URL

`{host}/v3/targetGroups/{groupId}`


### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID of the target to retrieve.



## Delete Target Group

Removes an existing target group.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/20
```

> Sample Response

```json
{
  "data": true,
  "errors": [
    {
      "code": 0,
      "message": ""
    }
  ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}`
Authentication | Yes
API Version | v3
HTTP Methods | DELETE
Batch Support | No

### Request URL

`{host}/v3/targetGroups/{groupId}`


### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID of the target to delete.


## Create Target Periods

Lets you add target periods to an existing target group.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/19/targetPeriods
```

> Sample POST Request

```json
[
    {
        "active": true,
        "description": "string",
        "endDate": "2022-06-29T11:58:12.063Z",
        "periodStatus": "RUNNING",
        "refCode": "string1",
        "startDate": "2022-06-28T11:58:12.063Z",
        "targetGroupId": 0
    },
	{
        "active": true,
        "description": "string",
        "endDate": "2022-09-29T11:58:12.063Z",
        "periodStatus": "RUNNING",
        "refCode": "refCode01",
        "startDate": "2022-10-28T11:58:12.063Z",
        "targetGroupId": 0
    },
]
```

> Sample Response

```json
{
    "data": [
        {
            "id": 70,
            "attribution": {
                "createdOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "startDate": "2022-02-26",
            "endDate": "2022-03-25",
            "refCode": "Period ",
            "periodStatus": "ENDED",
            "targetGroupId": 30,
            "active": true
        },
        {
            "id": 71,
            "attribution": {
                "createdOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "startDate": "2022-03-26",
            "endDate": "2022-04-25",
            "refCode": "Cycle 2",
            "periodStatus": "RUNNING",
            "targetGroupId": 30,
            "active": true
        },
        {
            "id": 75,
            "attribution": {
                "createdOn": "2022-03-30T12:16:43.544+0000",
                "lastUpdatedOn": "2022-03-30T12:16:43.544+0000",
                "lastUpdatedBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                }
            },
            "startDate": "2022-06-28",
            "endDate": "2022-06-29",
            "refCode": "string1",
            "periodStatus": "NOT_STARTED",
            "targetGroupId": 30,
            "description": "string",
            "active": true
        }
    ],
    "errors": null
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targetPeriods`
Authentication | Yes
API Version | v3
HTTP Methods | POST
Batch Support | Yes

### Request URL

`{host}/v3/targetGroups/{groupId}/targetPeriods`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID for which target periods need to be added.


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
active | boolean | Current status of the target period. `true` for active, `false` for inactive.
description* | string | Short description of the target period.
startDate* | date-time | Duration of the target period in ISO standard timestamp between `startDate` and `endDate`. 
endDate* | date-time | Duration of the target period in ISO standard timestamp between `startDate` and `endDate`.
periodStatus | enum | Status of the period. Values: `RUNNING`, `NOT_STARTED`, `ENDED`.
refCode | string | Reference code of  the target period.

## Update Target Period

Lets you update an existing target period.


```html
https://eu.api.capillarytech.com/v3/targetGroups/19/targetPeriods
```

> Sample PUT Request

```json
[
    {
        "id": 70,
        "active": true,
        "description": "string1",
        "endDate": "2022-06-29T11:58:12.063Z",
        "periodStatus": "RUNNING",
        "refCode": "string1",
        "startDate": "2022-06-28T11:58:12.063Z",
        "targetGroupId": 0
    }
]
```

> Sample Response

```json
{
    "data": [
        {
            "id": 70,
            "attribution": {
                "createdOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "startDate": "2022-02-26",
            "endDate": "2022-03-25",
            "refCode": "Period ",
            "targetGroupId": 30,
            "description": "string1",
            "active": true
        }
    ],
    "errors": null
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targetPeriods`
Authentication | Yes
API Version | v3
HTTP Methods | PUT
Batch Support | Yes


### Request URL

`{host}/v3/targetGroups/{groupId}/targetPeriods`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID for which target period needs to be updated.


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id* | int | Unique ID of the target period to modify.
active | boolean | Current status of the target period. `true` for active, `false` for inactive.
description* | string | Short description of the target period.
startDate* | date-time | Duration of the target period in ISO standard timestamp between `startDate` and `endDate`. 
endDate* | date-time | Duration of the target period in ISO standard timestamp between `startDate` and `endDate`.
periodStatus | enum | Status of the period. Values: `RUNNING`, `NOT_STARTED`, `ENDED`.
refCode | string | Reference code of  the target period.


## Get Target Periods

Retrieves the details of target periods of a specific target group.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/30/targetPeriods
```

> Sample POST Request

```Json
{
    "data": [
        {
            "id": 70,
            "attribution": {
                "createdOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "startDate": "2022-02-26",
            "endDate": "2022-03-25",
            "refCode": "Period ",
            "periodStatus": "ENDED",
            "targetGroupId": 30,
            "description": "string1",
            "active": true
        },
        {
            "id": 71,
            "attribution": {
                "createdOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedOn": "2022-02-25T11:01:34.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "startDate": "2022-03-26",
            "endDate": "2022-04-25",
            "refCode": "Cycle 2",
            "periodStatus": "RUNNING",
            "targetGroupId": 30,
            "active": true
        },
        {
            "id": 75,
            "attribution": {
                "createdOn": "2022-03-30T12:16:44.000+0000",
                "lastUpdatedOn": "2022-03-30T12:16:44.000+0000",
                "lastUpdatedBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                }
            },
            "startDate": "2022-06-28",
            "endDate": "2022-06-29",
            "refCode": "string1",
            "periodStatus": "NOT_STARTED",
            "targetGroupId": 30,
            "description": "string",
            "active": true
        }
    ],
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targetPeriods`
Authentication | Yes
API Version | v3
HTTP Methods | GET
Batch Support | Yes


### Request URL

`{host}/v3/targetGroups/{groupId}/targetPeriods`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID of the target group to fetch target periods.


## Create Targets

Lets you add targets to the existing target group.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/20/targets
```

> Sample POST Request

```Json
[
  {
    "active": true,
    "description": "string",
    "emfRuleSetId": 0,
    "emfUnrolledRulesetId": 0,
    "expression": "true",
    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
    "filters": [
      {
        "entityIds": [
          0
        ],
        "entityType": "STORE"
      }
    ],
    "name": "string13",
    "targetEntity": "TRANSACTION",
    "targetGroupId": 4,
    "targetType": "QUANTITY"
  }
]
```

> Sample Response

```json
{
    "data": [
        {
            "id": 39,
            "attribution": {
                "createdOn": "2022-03-28T14:33:38.543+0000",
                "lastUpdatedOn": "2022-03-28T14:33:38.543+0000",
                "lastUpdatedBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 75040399,
                    "code": "bukl.till",
                    "description": "",
                    "name": "bukl.till",
                    "type": "TILL"
                }
            },
            "name": "string13",
            "emfRuleSetId": 13550,
            "emfUnrolledRulesetId": 0,
            "targetType": "QUANTITY",
            "targetEntity": "TRANSACTION",
            "targetGroupId": 20,
            "description": "string",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "IMPORT"
        }
    ],
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targets`
Authentication | Yes
API Version | v3
HTTP Methods | POST
Batch Support | Yes

### Request URL

`{host}/v3/targetGroups/{groupId}/targets`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID for which target needs to be added.


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
active | boolean | Current status of the target.
description | string | Short description of the target.
emfRuleSetId | int | 
emfUnrolledRulesetId | | 
enrolmentMethod | enum | How to enroll customers and add target values. Values: `TRANSACTION` (enroll loyalty customers who transacts during the target period), `IMPORT` (to import a list of customers with custom target value). 
expression | string | 
expressionJson | string | Condition (rule expression) to be evaluated based for the chosen `targetEntity`. 
filters  | array-obj | Restrict the target to specific stores. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entityIds | array | Pass the unique IDs  of selected `entityType`. For example, if `entityType` is `STORES`, pass the applicable store IDs in `entityIds`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entityType | | Entity by which the target is restricted. Values: `STORE`, `ZONE`, `CONCEPT`.
name* | string | Name of the target
targetEntity | enum | Entity to define target condition. Values: `TRANSACTION`, `LINEITEM`, `POINTS`. For example, pass `LINEITEM` to define condition on the transaction line item.
targetGroupId  | int | Unique ID of the target group associated with the target.
targetType*  | enum | Transaction parameter to consider for the target. Values: `QUANTITY`, `SALES`, `COUNT`, `VISIT`.


## Modify Target

Lets you modify an existing target.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/20/targets
```

> Sample PUT Request

```Json

```

> Sample Response


```Json

```



### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targets`
Authentication | Yes
API Version | v3
HTTP Methods | PUT
Batch Support | Yes

### Request URL

`{host}/v3/targetGroups/{groupId}/targets`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID for which target needs to be updated.


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
active | boolean | Current status of the target.
description | string | Short description of the target.
emfRuleSetId | int | 
emfUnrolledRulesetId | | 
enrolmentMethod | enum | How to enroll customers and add target values. Values: `TRANSACTION` (enroll loyalty customers who transacts during the target period), `IMPORT` (to import a list of customers with custom target value). 
expression | string | 
expressionJson | string | Condition (rule expression) to be evaluated based for the chosen `targetEntity`. 
filters  | array-obj | Restrict the target to specific stores. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entityIds | array | Pass the unique IDs  of selected `entityType`. For example, if `entityType` is `STORES`, pass the applicable store IDs in `entityIds`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entityType | | Entity by which the target is restricted. Values: `STORE`, `ZONE`, `CONCEPT`.
name* | string | Name of the target
targetEntity | enum | Entity to define target condition. Values: `TRANSACTION`, `LINEITEM`, `POINTS`. For example, pass `LINEITEM` to define condition on the transaction line item.
targetGroupId  | int | Unique ID of the target group associated with the target.
targetType*  | enum | Transaction parameter to consider for the target. Values: `QUANTITY`, `SALES`, `COUNT`, `VISIT`.


## Get Target Details

Retrieves the details of a target of a specific target group.


> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/30/targets
```

> Sample Response

```json
{
    "data": [
        {
            "id": 34,
            "attribution": {
                "createdOn": "2022-02-25T11:03:02.000+0000",
                "lastUpdatedOn": "2022-02-25T11:03:02.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "name": "Complete purchases worth 10000",
            "emfRuleSetId": 9937,
            "emfUnrolledRulesetId": 9936,
            "targetType": "SALES",
            "targetEntity": "LINEITEM",
            "targetGroupId": 30,
            "active": true,
            "expression": "true",
            "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        75027647,
                        75046489
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 54,
                    "periodId": 70,
                    "defaultValue": 9997.000
                },
                {
                    "id": 55,
                    "periodId": 71,
                    "defaultValue": 10000.000
                }
            ]
        },
        {
            "id": 35,
            "attribution": {
                "createdOn": "2022-02-25T11:03:35.000+0000",
                "lastUpdatedOn": "2022-02-25T11:03:35.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "name": "On 5 visits",
            "emfRuleSetId": 9939,
            "emfUnrolledRulesetId": 9938,
            "targetType": "SALES",
            "targetEntity": "LINEITEM",
            "targetGroupId": 30,
            "active": true,
            "expression": "true",
            "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        75027647,
                        75046489,
                        75027642,
                        75037225,
                        75051583,
                        75051591,
                        75027645,
                        75027646,
                        75027638,
                        75046490
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 56,
                    "periodId": 70,
                    "defaultValue": 5.000
                },
                {
                    "id": 57,
                    "periodId": 71,
                    "defaultValue": 5.000
                }
            ]
        },
        {
            "id": 38,
            "attribution": {
                "createdOn": "2022-03-17T08:56:17.000+0000",
                "lastUpdatedOn": "2022-03-17T08:56:17.000+0000",
                "lastUpdatedBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 75047814,
                    "code": "1614748040_",
                    "description": "",
                    "name": "Harsh Deo",
                    "type": "ADMIN_USER"
                }
            },
            "name": "Sales target for Knorr",
            "emfRuleSetId": 12850,
            "targetType": "SALES",
            "targetEntity": "TRANSACTION",
            "targetGroupId": 30,
            "active": true,
            "expression": "true",
            "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        75027647,
                        75046489,
                        75027642,
                        75037225,
                        75051583,
                        75027638,
                        75046490
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 62,
                    "periodId": 70,
                    "defaultValue": 10000.000
                },
                {
                    "id": 63,
                    "periodId": 71,
                    "defaultValue": 15000.000
                }
            ]
        }
    ],
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targets`
Authentication | Yes
API Version | v3
HTTP Methods | GET
Batch Support | Yes

### Request URL

`{host}/v3/targetGroups/{groupId}/targets`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID for which target needs to retrieve.


## Deactivate Target

Deactivates a specific target from a target group.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/targetGroups/30/targets/19
```

> Sample Response

```json

```

### Resource Information
| | |
--------- | ----------- |
URI | `/v3/targetGroups/{groupId}/targets/{targetId}`
Authentication | Yes
API Version | v3
HTTP Methods | DELETE
Batch Support | Yes

### Request URL

`{host}/v3/targetGroups/{groupId}/targets/{targetId}`



### Request Path Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Group ID associated with the target.
targetId* | int | Unique ID of the target to deactivate.