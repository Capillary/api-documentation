# Leads (LMS)

A lead is an individual interested in buying a product. Leads can be created for both loyalty and non-loyalty customers. This resource provides you the APIs to create, manage and fetch leads.

Following are the predefined enum values for `type` and `status` respectively.

* Enums  for type : SKU, CATEGORY, BRAND, CUSTOM (for custom types)

* Enums for status :  OPEN, WON, LOST, ON_HOLD, DELETED







## Get Reasons

```html
http://us.api.capillarytech.com/v2/leads/reasons
```

> Sample Request

```json
{
    "data": [
        {
            "id": 1,
            "reason": "Item not available in store"
        },
        {
            "id": 2,
            "reason": "Best price availabe at another store"
        },
        {
            "id": 3,
            "reason": "Interested in our brand products"
        }
    ],
    "warnings": [],
    "errors": []
}
```


Retrieves the list of reasons added for the org with reason ids. These reason ids are required to create or update leads.

### Resource Information

| | |
--------- | ----------- |
URI | `/leads/reasons`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

### Request URL

`http://{Cluster URL}/v2/leads/reasons`





## Add Lead

> Sample Request URL

```html
http://us.api.capillarytech.com/v2/leads
```

> Sample POST Request

```json
{  
   "type":"SKU",
   "leadFor":"item001",
   "idType":"EMAIL",
   "identifier":"tom.sawyer@example.com",
   "status":"ON_HOLD",
   "nextFollowUp":"2018-10-05T08:00:00+05:30",
   "createdOn":"2018-10-04T13:30:00+05:30",
   "createdBy":28812689,
   "followUpDetails":[  
      {  
         "scheduledFollowUp":"2018-10-04T12:30:00+05:30",
         "followedUpOn":"2018-10-04T12:45:00+05:30",
         "followedUpBy":28812689,
         "notes":"notes 1",
         "nextFollowUp":"2018-10-04T13:15:00+05:30"
      },
      {  
         "scheduledFollowUp":"2018-10-04T12:30:00+05:30",
         "followedUpOn":"2018-10-04T12:45:00+05:30",
         "followedUpBy":28812689,
         "notes":"notes 2",
         "nextFollowUp":"2018-10-04T13:15:00+05:30"
      }
   ],
   "extendedFields": {
    "trial_status":"Not Done"
  },

   "statusLogDetails":[  
      {  
         "status":"OPEN",
         "createdBy":28812689,
         "reasonId":1
      },
      {  
         "status":"ON_HOLD",
         "createdBy":28812689,
         "reasonId":2
      }
   ],
   "orgSourceId":-1
}
```

> Sample Response

```json
{
    "id": 1,
    "userId": 368754334,
    "type": "SKU",
    "leadFor": "item001",
    "status": "ON_HOLD",
    "nextFollowUp": "2018-10-05T08:00:00+05:30",
    "createdOn": "2018-10-04T13:30:00+05:30",
    "createdBy": 28812689,
    "lastUpdatedOn": "2018-11-14T15:38:04+05:30",
    "lastUpdatedBy": 15002926,
    "followUpDetails": [
        {
            "id": 1,
            "userId": 368754334,
            "leadId": 1,
            "notes": "notes 1",
            "createdBy": 15002926,
            "createdOn": "2018-11-14T15:38:04+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        },
        {
            "id": 2,
            "userId": 368754334,
            "leadId": 1,
            "notes": "notes 2",
            "createdBy": 15002926,
            "createdOn": "2018-11-14T15:38:04+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        }
    ],
	"extendedFields":
  {
    "trial_status":"Not Done"
  },
    "statusLogDetails": [
        {
            "id": 1,
            "userId": 368754334,
            "leadId": 1,
            "status": "OPEN",
            "createdBy": 15002926,
            "createdOn": "2018-11-14T15:38:04+05:30",
            "reasonId": 5,
            "reason": "Best price availabe at another store"
        },
        {
            "id": 2,
            "userId": 368754334,
            "leadId": 1,
            "status": "ON_HOLD",
            "createdBy": 15002926,
            "createdOn": "2018-11-14T15:38:04+05:30",
            "reasonId": 4,
            "reason": "Item not available in store"
        }
    ],
    "orgSourceId": -1,
    "warnings": []
}
```


Adds a new lead. A new non-loyalty customer will be created if you pass a new customer identifier. 


### Resource Information

| | |
--------- | ----------- |
URI | `/leads`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads`


### Request Body Parameters

Parameter | Data type | Description
--------- | -------- | -----------
type | enum | Item or hierarchy for which the lead is generated. Values: `SKU`, `BRAND`, `CATEGORY`, or `CUSTOM`. Default value is SKU
leadFor* | string | Name of sku, brand or category based on the `type` specified
userId | int | Unique id of the customer associated to the lead. If this is left blank, then you need to pass idType and identifier as mandatory parameters
idType | enum | Specified identifier type either `EMAIL` or `MOBILE`
identifier | string | Value of the specified `idType`
nextFollowUp | date | Next follow up date of the lead
createdOn | date-time | Date and time of lead creation in `YYYY-MM-DDThh:mm:ssTZD` format. Example: 2018-10-05T08:00:00+05:30
createdBy | int | Entity id of the staff who creates the lead. <br> Default value is the id of the entity from which the request has come
lastUpdatedOn | date-time | Date and time when the lead is recently updated in `YYYY-MM-DDThh:mm:ssTZD` format
lastUpdatedBy | int | Entity id of the staff who recently updated the lead
extendedFields | obj | Key-value pairs of extended fields and its values
orgSourceId | enum | Unique id of the org channel account. Default value is -1 for InStore account
lastFollowUp | | Date and time of recent follow up of the lead in `YYYY-MM-DDThh:mm:ssTZD` format
owner | string | Username of the staff user who is assigned to the lead
subStatus | enum | Current sub-status of the lead. Use only names that are created using `leads/substatus` API























## Update Lead 

Updates extended fields for an existing lead

> Sample Request URL

```html
http://us.api.capillarytech.com/v2/leads/19
```

> Sample PUT Request

```json
{
"extendedFields":
  {
    "trial_status":"Not Done"
  }

}
```

> Sample Response

```json
{
    "id": 19,
    "userId": 316804150,
    "type": "SKU",
    "leadFor": "item001",
    "status": "ON_HOLD",
    "nextFollowUp": "2018-10-05T08:00:00+05:30",
    "createdOn": "2018-10-04T13:30:00+05:30",
    "createdBy": 28812689,
    "lastUpdatedOn": "2018-11-28T10:31:19+05:30",
    "lastUpdatedBy": 15147364,
    "followUpDetails": [
        {
            "id": 37,
            "userId": 316804150,
            "leadId": 19,
            "notes": "notes 1",
            "createdBy": 15147364,
            "createdOn": "2018-11-28T10:31:19+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        },
        {
            "id": 38,
            "userId": 316804150,
            "leadId": 19,
            "notes": "notes 2",
            "createdBy": 15147364,
            "createdOn": "2018-11-28T10:31:19+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        }
    ],
    "statusLogDetails": [
        {
            "id": 39,
            "userId": 316804150,
            "leadId": 19,
            "status": "OPEN",
            "createdBy": 15147364,
            "createdOn": "2018-11-28T10:31:19+05:30",
            "reasonId": 1,
            "reason": "not available"
        },
        {
            "id": 40,
            "userId": 316804150,
            "leadId": 19,
            "status": "ON_HOLD",
            "createdBy": 15147364,
            "createdOn": "2018-11-28T10:31:19+05:30",
            "reasonId": 2,
            "reason": "phone not working"
        }
    ],
    "orgSourceId": -1,
    "extendedFields": {
        "trial_status": "Not Done"
    },
    "warnings": [
    ]
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/leads/{leadId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/{leadId}`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
extendedFields | obj | Key-value pairs of extended fields and its values
owner | string | Username of the owner (staff) of the lead



## Create Lead Substatus

Lets you create a new sub-status to a lead status.


> Sample Request

```html
http://us.api.capillarytech.com/v2/leads/substatus
```

> Sample POST Request

```json
{
    "status": "ON_HOLD",
    "subStatus": "YetToDecide"
}
```

> Sample Response

```json
{
    "status": "ON_HOLD",
    "subStatus": "YetToDecide",
    "warnings": []
}

```








### Resource Information

| | |
--------- | ----------- |
URI | `/leads/substatus`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/substatus`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
status* | enum | Status for which you want to add sub-status. Values: `OPEN`, `WON`, `LOST`, `ON_HOLD`, `DELETED`
subStatus* | string | Name of the new sub-status that you want to create




## Get Lead Substatus

Retrieves all the sub-statuses added (for each status) to the organization.

> Sample Request

```html
http://us.api.capillarytech.com/v2/leads/substatuses
```


> Sample Response

```json
{
    "data": [
        {
            "status": "LOST",
            "subStatus": "InvalidPhoneNumber"
        },
        {
            "status": "ON_HOLD",
            "subStatus": "YetToDecide"
        }
    ],
    "warnings": [],
    "errors": []
}
```




### Resource Information

| | |
--------- | ----------- |
URI | `/leads/substatuses`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/substatuses`








## Update Lead Status

> Sample Request URL

```html
http://us.api.capillarytech.com/v2/leads/21/status
```

> Sample PUT Request

```json
{
    "status": "ON_HOLD",
    "subStatus": "YetToDecide",
    "createdBy": 28812689,
    "reasonId": 2
}
```

> Sample Response

```json
{
    "id": 2,
    "userId": 368754334,
    "type": "SKU",
    "leadFor": "item001",
    "status": "ON_HOLD",
    "nextFollowUp": "2018-10-05T08:00:00+05:30",
    "createdOn": "2018-10-04T13:30:00+05:30",
    "createdBy": 28812689,
    "lastUpdatedOn": "2019-04-15T14:58:39+05:30",
    "lastUpdatedBy": 15002926,
    "followUpDetails": [
        {
            "id": 3,
            "userId": 368754334,
            "leadId": 2,
            "notes": "notes 1",
            "createdBy": 15002926,
            "createdOn": "2018-12-06T17:36:28+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        },
        {
            "id": 4,
            "userId": 368754334,
            "leadId": 2,
            "notes": "notes 2",
            "createdBy": 15002926,
            "createdOn": "2018-12-06T17:36:28+05:30",
            "followedUpBy": 28812689,
            "followedUpOn": "2018-10-04T12:45:00+05:30",
            "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
        }
    ],
    "statusLogDetails": [
        {
            "id": 4,
            "userId": 368754334,
            "leadId": 2,
            "status": "OPEN",
            "createdBy": 15002926,
            "createdOn": "2018-12-06T17:36:28+05:30",
            "reasonId": 1,
            "reason": "Item not available in store"
        },
        {
            "id": 5,
            "userId": 368754334,
            "leadId": 2,
            "status": "ON_HOLD",
            "createdBy": 15002926,
            "createdOn": "2018-12-06T17:36:28+05:30",
            "reasonId": 2,
            "reason": "Best price availabe at another store"
        },
        {
            "id": 16,
            "userId": 368754334,
            "leadId": 2,
            "status": "LOST",
            "createdBy": -1,
            "createdOn": "2019-01-28T14:34:46+05:30",
            "reasonId": 11,
            "reason": "AUTO_CLOSE"
        },
        {
            "id": 23,
            "userId": 368754334,
            "leadId": 2,
            "status": "ON_HOLD",
            "createdBy": 28812689,
            "createdOn": "2019-04-15T14:58:39+05:30",
            "reasonId": 2,
            "reason": "Best price availabe at another store",
            "subStatus": "YetToDecide"
        }
    ],
    "orgSourceId": -1,
    "extendedFields": {
        "trial_status": "Not Done"
    },
    "subStatus": "YetToDecide",
    "warnings": []
}
```

Updates the status and substatus of an existing lead. You can have status as OPEN (for new lead), WON (for a successful purchase lead), LOST (for unreverted lead), ON_HOLD, DELETED.

### Resource Information

| | |
--------- | ----------- |
URI | `/leads/{leadId}/status`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/{leadId}/status`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
status* | enum | Current status of the lead. Values: OPEN`, `WON`, `LOST`, `ON_HOLD`, `DELETED`
reasonId* | int | Reason id that you want to associate to the lead
subStatus | string | Current sub-status of the lead
createdBy | int | Entity id of the staff who created the lead
createdOn | ate-time | Date and time of lead creation in `YYYY-MM-DDThh:mm:ssTZD` format. Example: 2018-10-05T08:00:00+05:30




## Update Lead Followup 

Lets you update the recent follow up date and till id of a lead.

> Sample Request

```html
http://us.api.capillarytech.com/v2/leads/63/followup

```

> Sample POST Request

```json
{
 "followedUpOn": "2018-10-05T08:00:00+05:30",
 "createdBy": 124
}

```

> Sample Response

```json
{
          "createdBy": 124, 
          "createdOn": "2019-04-16T05:19:06Z", 
          "extendedFields": {
                    "trial_status": "Not Done"
          }, 
          "followUpDetails": [
                    {
                              "createdBy": 124, 
                              "createdOn": "2019-04-16T05:19:06Z", 
                              "followedUpBy": 124, 
                              "followedUpOn": "2019-04-17T05:19:06Z", 
                              "id": 122, 
                              "leadId": 63, 
                              "notes": "notes 1", 
                              "scheduledFollowUp": "2019-04-17T05:19:06Z", 
                              "userId": 340417059
                    }, 
                    {
                              "createdBy": 124, 
                              "createdOn": "2019-04-16T05:19:06Z", 
                              "followedUpBy": 124, 
                              "followedUpOn": "2019-04-18T05:19:06Z", 
                              "id": 123, 
                              "leadId": 63, 
                              "notes": "notes 2", 
                              "scheduledFollowUp": "2019-04-18T05:19:06Z", 
                              "userId": 340417059
                    }, 
                    {
                              "createdBy": 124, 
                              "createdOn": "2019-04-16T05:19:06Z", 
                              "followedUpBy": 124, 
                              "followedUpOn": "2019-04-17T05:19:06Z", 
                              "id": 124, 
                              "leadId": 63, 
                              "scheduledFollowUp": "2019-04-17T05:19:06Z", 
                              "userId": 340417059
                    }
          ], 
          "id": 63, 
          "lastFollowUp": "2019-04-17T05:19:06Z", 
          "lastUpdatedBy": 124, 
          "lastUpdatedOn": "2019-04-16T05:19:06Z", 
          "leadFor": "sku_902307", 
          "orgSourceId": -1, 
          "status": "OPEN", 
          "statusLogDetails": [
                    {
                              "createdBy": 124, 
                              "createdOn": "2019-04-16T05:19:06Z", 
                              "id": 137, 
                              "leadId": 63, 
                              "reason": "Reason1", 
                              "reasonId": 2, 
                              "status": "OPEN", 
                              "userId": 340417059
                    }, 
                    {
                              "createdBy": 124, 
                              "createdOn": "2019-04-16T05:19:06Z", 
                              "id": 138, 
                              "leadId": 63, 
                              "reason": "AUTO_CLOSE", 
                              "reasonId": 3, 
                              "status": "OPEN", 
                              "userId": 340417059
                    }
          ], 
          "type": "SKU", 
          "userId": 340417059, 
          "warnings": []
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `/leads/{leadId}/followup`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/{leadId}/followup`



### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
leadId* | path | Unique id of the lead
followedUpOn* | date-time | Date of recent follow up discussion with the customer in `YYYY-MM-DDTHH:MM:SS+TZD`
followedUpBy | int | Entity id of the staff who followed up with the customer
createdBy* | int | Till id that updated the follow up
nextFollowUp | date-time | Date and time of the next follow up discussion with the customer in `YYYY-MM-DDTHH:MM:SS+TZD`
notes | string | Brief follow up notes 
scheduledFollowUp | date-time | Actual scheduled date and time of the current follow up discussion with the customer in `YYYY-MM-DDTHH:MM:SS+TZD`  

<aside class="notice">All parameters marked by * are mandatory.</aside>





## Search Lead

> Sample Request

```html
http://us.api.capillarytech.com/v2/leads?sortOrder=DESC&type=ALL&limit=10&orgSourceId=-1
```

> Sample Response

```json
{
    "data": [
        {
            "id": 1,
            "userId": 368754334,
            "type": "SKU",
            "leadFor": "item001",
            "status": "WON",
            "nextFollowUp": "2018-10-05T08:00:00+05:30",
            "createdOn": "2018-10-04T13:30:00+05:30",
            "createdBy": 28812689,
            "lastUpdatedOn": "2018-11-14T15:44:26+05:30",
            "lastUpdatedBy": 15002926,
            "followUpDetails": [
                {
                    "id": 1,
                    "userId": 368754334,
                    "leadId": 1,
                    "notes": "notes 1",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:38:04+05:30",
                    "followedUpBy": 28812689,
                    "followedUpOn": "2018-10-04T12:45:00+05:30",
                    "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
                },
                {
                    "id": 2,
                    "userId": 368754334,
                    "leadId": 1,
                    "notes": "notes 2",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:38:04+05:30",
                    "followedUpBy": 28812689,
                    "followedUpOn": "2018-10-04T12:45:00+05:30",
                    "scheduledFollowUp": "2018-10-04T12:30:00+05:30"
                }
            ],
			
            "statusLogDetails": [
                {
                    "id": 1,
                    "userId": 368754334,
                    "leadId": 1,
                    "status": "OPEN",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:38:04+05:30",
                    "reasonId": 5,
                    "reason": "Best price available at another store"
                },
                {
                    "id": 2,
                    "userId": 368754334,
                    "leadId": 1,
                    "status": "ON_HOLD",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:38:04+05:30",
                    "reasonId": 4,
                    "reason": "Item not available in store"
                },
                {
                    "id": 3,
                    "userId": 368754334,
                    "leadId": 1,
                    "status": "WON",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:44:27+05:30",
                    "reasonId": 5,
                    "reason": "Best price available at another store"
                }
            ],
            "orgSourceId": -1
        }
    ],
    "warnings": [],
    "errors": []
}
```

Retrieves leads based on the input parameters



### Resource Information

| | |
--------- | ----------- |
URI | `/leads?{input params}={param values}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads?{input params}={param values}`

### Input Parameters

Parameter | Description
--------- | -----------
type | Fetch by lead type. Values: `SKU`, `CATEGORY`, `BRAND`, `CUSTOM` (for any custom types)
limit | Limit the number of results to be fetched
orgSourceId | Specify the source account id from which you want to fetch the leads. Sources can be FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, LINE, and WEBSITE. For example, -1 for INSTORE.
userId | Fetch the leads of a specific user
status | Fetch leads by status. Values: `OPEN`, `WON`, `LOST`, `ON_HOLD`, `DELETED`
substatus | Fetch leads with a specific sub-status
offset | Fetches leads > the offset number. Offset is the position of the lead in the db record. The value is assigned based on the sequence of creation. . For example, offset=10 retrieves all the leads from record number 11.
sortBy | Lets you sort the list by `createdon` or `lastUpdatedOn`
sortOrder | Sort the results in ascending (ASC) or descending (`DESC`) order



## Configure Lead Reasons

> Sample Request

```html
http://us.api.capillarytech.com/v2/leads/reasons
```

> Sample POST Request

```json
[
  {
    "reason": "Item not available in store"
  },
  {
    "reason": "Best price availabe at another store"
  },
  {
    "reason": "Interested in our brand products"  }
]
```

> Sample Response

```json
{
    "data": [
        {
            "id": 1,
            "reason": "Item not available in store"
        },
        {
            "id": 2,
            "reason": "Best price availabe at another store"
        },
        {
            "id": 3,
            "reason": "Interested in our brand products"
        }
    ],
    "warnings": [],
    "errors": []
}
```

Lets you add your preferred reasons that are required while adding or updating a lead at the organization level. 

Reasons are used to add or update a lead status. Lead reasons are org specific. You can create reasons of your own and use the respective reason ids to add or update a lead status.



### Resource Information

| | |
--------- | ----------- |
URI | `/leads/reasons`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`http://{Cluster URL}/v2/leads/reasons`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
reason* | string | Specify a meaningful reason that you want to add to the organization

