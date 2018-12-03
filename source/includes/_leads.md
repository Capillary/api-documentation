# Leads (LMS)

A lead is an individual interested in buying a product. Leads can be created for both loyalty and non-loyalty customers. This resource provides you the APIs to create, manage and fetch leads.

Following are the predefined enum values for `type` and `status` respectively.

* Enums  for type : SKU, CATEGORY, BRAND, CUSTOM (for custom types)

* Enums for status :  OPEN, WON, LOST, ON_HOLD, DELETED



## Generate Reasons

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

Lets you add your preferred reasons that are required while adding or updating a lead.

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


## Update Lead Status

> Sample Request URL

```html
http://us.api.capillarytech.com/v2/leads/21/status
```

> Sample PUT Request

```json
{
  "status": "WON",
  "createdBy": 28812689,
  "reasonId": 6,
  "extendedFields": {
    "trial_status":"Not Done"
  },
}

```

> Sample Response

```json
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
	"extendedFields": {
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
        },
        {
            "id": 3,
            "userId": 368754334,
            "leadId": 1,
            "status": "WON",
            "createdBy": 15002926,
            "createdOn": "2018-11-14T15:44:27+05:30",
            "reasonId": 6,
            "reason": "Deal closed"
        }
    ],
    "orgSourceId": -1,
    "warnings": []
}
```

Updates the status of an existing lead. You can have status as OPEN (for new lead), WON (for a successful purchase lead), LOST (for unreverted lead), ON_HOLD, DELETED.

### Resource Information

| | |
--------- | ----------- |
URI | `/leads/{leadid}/status`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

### Request URL
`http://{Cluster URL}/v2/leads/{leadid}/status`




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
                },
                {
                    "id": 3,
                    "userId": 368754334,
                    "leadId": 1,
                    "status": "WON",
                    "createdBy": 15002926,
                    "createdOn": "2018-11-14T15:44:27+05:30",
                    "reasonId": 5,
                    "reason": "Best price availabe at another store"
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
sortOrder | Sort the results in ascending (ASC) or descending (`DESC`) order
type | Fetch by lead type. Values: `SKU`, `CATEGORY`, `BRAND`, `CUSTOM` (for any custom types)
limit | Limit the number of results to be fetched
orgSourceId | Specify the source account id from which you want to fetch the leads. Sources can be FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, LINE, and WEBSITE. For example, -1 for INSTORE.


