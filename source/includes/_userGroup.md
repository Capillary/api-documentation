# User Groups (v1)

A User Group is a customer group that could contain friends, family members, colleagues, or relatives of a customer. A user group consists of an admin user and group members. The `usergroups` resource provides APIs to manage user groups.

To use user groups v1, ensure hat the User Group is enabled for the org (config `CONF_USER_GROUP_ENABLED`).



## Create User Group

Lets you create a new user group.

> Sample Request

```html
http://us.api.capillarytech.com/v2/usergroups
```

> Sample POST Request (Using User ID)

```json
{
  "name": "Harsh",
  "primaryUserId": 281348774
}
```

> Sample POST Request (Using Customer Identifiers)

```json 
 {
      "name": "HarshFamily",
      "primaryMemberIdentifier": {
        "type": "mobile",
        "value": "918860000031"
      }
    }
```	

> Sample Response

```json
{
   "id":1,
   "name":"HarshFamily",
   "primaryUserId":281348774,
   "createdOn":"2018-12-31T12:59:30+05:30",
   "createdBy":15002926,
   "updatedOn":"2018-12-31T12:59:30+05:30",
   "updatedBy":15002926,
    "members": [
        {
            "groupId": 17552,
            "userId": 419455880,
            "role": "PRIMARY",
            "joinedOn": "2021-11-03T15:21:33+05:30",
            "addedBy": 15071481,
            "autoUpdateTime": "2021-11-03T15:21:32+05:30",
            "name": "FirstName LastName",
            "joinSource": "",
            "joinAccountId": "",
            "identifiers": [
                {
                    "type": "email",
                    "value": "sample.email31@gmail.com"
                },
                {
                    "type": "mobile",
                    "value": "918860000031"
                }
            ],
            "firstName": "FirstName",
            "lastName": "LastName"
        }
    ],
    "lifetimePurchases": 0.0,
    "warnings": []
}
{
   "id":1,
   "name":"HarshFamily",
   "primaryUserId":281348774,
   "createdOn":"2018-12-31T12:59:30+05:30",
   "createdBy":15002926,
   "updatedOn":"2018-12-31T12:59:30+05:30",
   "updatedBy":15002926,
   "members":[
      {
         "groupId":1,
         "userId":281348774,
         "role":"PRIMARY",
         "joinedOn":"2018-12-31T12:59:30+05:30",
         "addedBy":15002926,
         "autoUpdateTime":"2018-12-31T12:59:30+05:30"
      }
   ],
   "lifetimePurchases":1000.0,
   "warnings":[

   ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups`
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name* | string | Name of the user group
primaryUserId* | long | Unique user id of the group admin

<aside class="notice">Parameters marked with * are mandatory.</aside>



## Join User Group (with UserId)

Adds user to an existing group.

> Sample Request

```html
http://us.api.capillarytech.com/v2/usergroups/1/members/313099450
```



> Sample Response

```json
{
    "warnings": [],
    "errors": [],
    "success": true
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/{groupId}/members/{userId}?{queryParams}`
Rate Limited? | No
Authentication | Yes
HTTP Method | POST (No Body required)
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}?{queryParams}`

### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the group that the user wants to joinedOn.
userId** | long | Unique id of the user who wants to join the group.


<aside class="notice">Parameters marked with * are mandatory. Any one among the params marked with ** is mandatory.</aside>



## Join User Group (with Customer Identifiers)

Adds user to an existing group.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/usergroups/2876/members
```


> Sample POST Request

```json

{
  "secondaryMemberIdentifiers": [
    {
      "type": "userId",
      "value": "126080386"
    }
  ]
}
```

> Sample Response

```json
{
  "data": [
      {
       "entity": {
        "identifier": [
        {
         "type": "userId",
         "value": "126080386"
         }
         ]
         },
       "warnings": [],
       "errors": [],
       "success": true
      }
    ],
    "warnings": [],
    "errors": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/{groupId}/members`
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the group that the user wants to joinedOn.

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
secondaryMemberIdentifiers* | obj | Details of secondary member(s).
type* | enum | Identifier by which you want to use to add secondary member. Supported values: `mobile`, `email`, `externalId`, `userId`.
value* | string | Value of the respective identifier `type`.


<aside class="notice">Parameters marked with * are mandatory.</aside>





## Join User Group (OTP Based)

Lets you add user to an existing group upon OTP validation. This API issues OTP to the customer and you need to validate it using `v2/otp/validate` API. Once the OTP is validated, the user join will be confirmed.

To use OTP based calls, the following three options should have been enabled for the organization. You can enable these through `organization/configs` v1.1 API.

* CONF_USER_GROUP_OTP_ENABLE
* CONF_USER_GROUP_PRIMARY_USER_OTP_ENABLE
* CONF_USER_GROUP_SIZE

> Sample Request

```html
http://us.api.capillarytech.com/v2/usergroups/1/members/313099450
```



> Sample Response

```json
{
    "warnings": [],
    "errors": [],
    "success": true
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/v2/usergroups/{groupId}/members/{userId}`
Rate Limited? | No
Authentication | Yes
HTTP Method | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the group that the user wants to joinedOn
userId* | long | Unique id of the user who wants to join the group

<aside class="notice">Parameters marked with * are mandatory. </aside>


## Get User Group Details (by group ID)

Retrieves the details of a specific user group.

> Sample Request URL

```html
https://us.ap.capillarytech.com/v2/usergroups/1
```

> Sample Response

```json
{
    "id": 1,
    "name": "Harsh",
    "primaryUserId": 281348774,
    "createdOn": "2018-12-31T12:59:30+05:30",
    "createdBy": 15002926,
    "updatedOn": "2018-12-31T12:59:30+05:30",
    "updatedBy": 15002926,
    "members": [
        {
            "groupId": 1,
            "userId": 281348774,
            "role": "PRIMARY",
            "joinedOn": "2018-12-31T12:59:30+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T12:59:30+05:30"
        },
        {
            "groupId": 1,
            "userId": 313099450,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:13:52+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:13:52+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881003,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:18:42+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:18:42+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881005,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:21:05+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:21:05+05:30"
        }
    ],
    "lifetimePurchases": 0,
    "warnings": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/{groupId}`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}`

### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the user group that you want to fetch

<aside class="notice">Parameters marked with * are mandatory. </aside>



## Get Group Details & Group Loyalty Details (by Identifier)

Retrieves the details of a specific user group and group loyalty information using any of the identifiers of the primary or secondary member of the group. 

> Sample Request URL

```html
https://eu.api.capillarytech.com/v2/usergroups?identifierName=mobile&identifierValue=919740000000&loyaltyDetails=true
```

> Sample Response

```json
{
   "id":2876,
   "name":"TomGroup",
   "primaryUserId":98662653,
   "createdOn":"2020-09-02T06:26:55Z",
   "createdBy":75040399,
   "updatedOn":"2020-09-02T06:26:55Z",
   "updatedBy":75040399,
   "members":[
      {
         "groupId":2876,
         "userId":98662653,
         "role":"PRIMARY",
         "joinedOn":"2020-09-02T06:26:55Z",
         "addedBy":75040399,
         "autoUpdateTime":"2020-09-02T06:26:55Z",
         "name":"Tom Sawyer",
         "joinSource":"",
         "joinAccountId":"",
         "identifiers":[
            {
               "type":"externalId",
               "value":"anjvat123"
            },
            {
               "type":"email",
               "value":"tom.sawyer@capillarytech.com"
            },
            {
               "type":"mobile",
               "value":"919740000000"
            }
         ],
         "firstName":"Tom",
         "lastName":"Sawyer",
         "loyaltySummary":{
            "enrolledPrograms":[
               {
                  "redeemed":450.12,
                  "expired":4498.83,
                  "returned":0.0,
                  "adjusted":-0.01,
                  "lifetimePoints":6630.32,
                  "loyaltyPoints":1681.37,
                  "cumulativePurchases":67597.0,
                  "loyaltyId":310120407,
                  "currentSlab":"Albatross Elite",
                  "nextSlab":"Platinum",
                  "nextSlabSerialNumber":4,
                  "nextSlabDescription":"Top level tier",
                  "slabSNo":3,
                  "slabExpiryDate":"2020-10-31T23:59:59Z",
                  "programId":469,
                  "delayedPoints":0.0,
                  "delayedReturnedPoints":0.0,
                  "totalAvailablePoints":0.0,
                  "totalReturnedPoints":0.0,
                  "linkedPartnerPrograms":[
                     
                  ],
                  "programTitle":"BUKLDefaultProgram",
                  "programDescription":"Default program for BUKL",
                  "programPointsToCurrencyRatio":1.0,
                  "pointsContributionToGroup":0.0
               }
            ],
            "groupPrograms":[
               {
                  "groupProgramId":469,
                  "title":"BUKLDefaultProgram",
                  "description":"Default program for BUKL",
                  "programsList":[
                     {
                        "id":469,
                        "name":"BUKLDefaultProgram",
                        "description":"Default program for BUKL"
                     }
                  ],
                  "lifetimePoints":6630.32,
                  "loyaltyPoints":1681.37,
                  "promisedPoints":0.0,
                  "pointsToCurrencyRatio":1.0
               }
            ]
         }
      },
      {
         "groupId":2876,
         "userId":126080386,
         "role":"SECONDARY",
         "joinedOn":"2020-09-02T09:53:23Z",
         "addedBy":75040399,
         "autoUpdateTime":"2020-09-02T09:53:23Z",
         "name":"test",
         "joinSource":"",
         "joinAccountId":"",
         "identifiers":[
            {
               "type":"mobile",
               "value":"917575700000"
            },
            {
               "type":"email",
               "value":"test789@test.com"
            }
         ],
         "firstName":"test",
         "lastName":"test",
         "loyaltySummary":{
            "enrolledPrograms":[
               {
                  "redeemed":0.0,
                  "expired":0.0,
                  "returned":0.0,
                  "adjusted":0.0,
                  "lifetimePoints":0.0,
                  "loyaltyPoints":0.0,
                  "cumulativePurchases":0.0,
                  "loyaltyId":364845637,
                  "currentSlab":"Albatross Elite",
                  "nextSlab":"Employee",
                  "nextSlabSerialNumber":4,
                  "nextSlabDescription":"Employee",
                  "slabSNo":3,
                  "slabExpiryDate":"2020-10-31T23:59:59Z",
                  "programId":469,
                  "delayedPoints":0.0,
                  "delayedReturnedPoints":0.0,
                  "totalAvailablePoints":0.0,
                  "totalReturnedPoints":0.0,
                  "linkedPartnerPrograms":[
                     
                  ],
                  "programTitle":"BUKLDefaultProgram",
                  "programDescription":"Default program for BUKL",
                  "programPointsToCurrencyRatio":1.0,
                  "pointsContributionToGroup":0.0
               }
            ],
            "groupPrograms":[
               {
                  "groupProgramId":469,
                  "title":"BUKLDefaultProgram",
                  "description":"Default program for BUKL",
                  "programsList":[
                     {
                        "id":469,
                        "name":"BUKLDefaultProgram",
                        "description":"Default program for BUKL"
                     }
                  ],
                  "lifetimePoints":0.0,
                  "loyaltyPoints":0.0,
                  "promisedPoints":0.0,
                  "pointsToCurrencyRatio":1.0
               }
            ]
         }
      }
   ],
   "lifetimePurchases":0.0,
   "warnings":[
      
   ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups?{queryParams}`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups?identifierName={identifierName}&identifierValue={identifierValue}&{loyaltyDetails=true}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Unique identifier to identifier of the primary or secondary member of a group. Value: `mobile`, `email`, `externalId`, `userId`.
identifierValue* | string | The respective identifier value. For example if the `identifierName` is email, then the `identifierValue` needs to the email ID of the primary or any of the secondary members of the group.
source | enum | Source from which the customer is registered.
accountId | string | Account ID of the specific source for sources with multiple accounts.
loyaltyDetails=true** | - | Pass to get loyalty details of the group.


<aside class="notice">Parameters marked with * are mandatory. </aside>






## Update Group Admin

Lets you update the admin user for a specific user group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/usergroups/1
```

> Sample PUT Request

```json
{
    "id": 1,
    "name": "Harsh",
    "primaryUserId": 368881003,
    "createdOn": "2018-12-31T12:59:30+05:30",
    "createdBy": 15002926,
    "updatedOn": "2018-12-31T12:59:30+05:30",
    "updatedBy": 15002926,
    "members": [
        {
            "groupId": 1,
            "userId": 281348774,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T12:59:30+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T15:59:18+05:30"
        },
        {
            "groupId": 1,
            "userId": 313099450,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:13:52+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:13:52+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881003,
            "role": "PRIMARY",
            "joinedOn": "2018-12-31T13:18:42+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T15:59:18+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881005,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:21:05+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:21:05+05:30"
        }
    ],
    "lifetimePurchases": 0,
    "warnings": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/{groupId}`
Rate Limited? | No
Authentication | Yes
HTTP Method | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}`

### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the user group that you want to fetch.
primaryUserId* | long | User id of the new admin.
name | string | Name of the user group .

<aside class="notice">Parameters marked with * are mandatory. </aside>




## Update Group Admin (OTP Based)

Lets you update the admin user of a user group through OTP validation. When this API is called, a OTP will be issued to the customer. You need to validate the OTP using `v2/otp/validate` API. 

To use OTP based calls, the following three options should have been enabled for the organization. You can enable these through `organization/configs` v1.1 API.

* CONF_USER_GROUP_OTP_ENABLE
* CONF_USER_GROUP_PRIMARY_USER_OTP_ENABLE
* CONF_USER_GROUP_SIZE

This is applicable only if OTP based authentication is enabled.


> Sample Request

```html
https://us.api.capillarytech.com/usergroups/1/primaryuser/368881003
```

> Sample PUT Request

```json
{
    "id": 1,
    "name": "Harsh",
    "primaryUserId": 368881003,
    "createdOn": "2018-12-31T12:59:30+05:30",
    "createdBy": 15002926,
    "updatedOn": "2018-12-31T12:59:30+05:30",
    "updatedBy": 15002926,
    "members": [
        {
            "groupId": 1,
            "userId": 281348774,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T12:59:30+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T15:59:18+05:30"
        },
        {
            "groupId": 1,
            "userId": 313099450,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:13:52+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:13:52+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881003,
            "role": "PRIMARY",
            "joinedOn": "2018-12-31T13:18:42+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T15:59:18+05:30"
        },
        {
            "groupId": 1,
            "userId": 368881005,
            "role": "SECONDARY",
            "joinedOn": "2018-12-31T13:21:05+05:30",
            "addedBy": 15002926,
            "autoUpdateTime": "2018-12-31T13:21:05+05:30"
        }
    ],
    "lifetimePurchases": 0,
    "warnings": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/{groupId}/primaryuser/{userId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Method | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/primaryuser/{userId}`

### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the user group that you want to fetch.
primaryUserId* | long | User id of the new admin.
name | string | Name of the user group.

<aside class="notice">Parameters marked with * are mandatory. </aside>






## Exit User Group

Exits a user from a user group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/usergroups/1
```

> Sample Response

```json
{
    "warnings": [],
    "errors": [],
    "success": true
}

```

### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/{groupId}/members/{userId}`
Authentication | Yes
HTTP Method | DELETE
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Group id from which you want to exit the user.
userId* | long | Unique id of the user that you want to exit from the group.

<aside class="notice">Parameters marked with * are mandatory. </aside>


## Get Points Contribution History (by Secondary Members)

Retrieves the details of points transferred from secondary members to the primary member of the group on predefined events. Pass any of the identifiers of the primary member or any of the secondary members of the group. For more details on the configurations related to points pooling, see [Group Loyalty Overview](https://support.capillarytech.com/en/support/solutions/articles/4000162618-group-loyalty-overview).

> Sample Request

```html
https://eu.api.capillarytech.com/v2/usergroups/pointContributionHistory?identifierName=mobile&identifierValue=917487000000
```

>  Sample Response

```json
{
   "id":6705,
   "name":"TomGroup",
   "createdOn":"2020-08-10T11:31:14+05:30",
   "updatedOn":"2020-08-10T11:31:14+05:30",
   "primaryMember":{
      "userId":379353267,
      "firstName":"Tom",
      "primaryMemberIdentifier":[
         {
            "type":"mobile",
            "value":"917487000000"
         },
         {
            "type":"email",
            "value":"tom.sawyer@example.com"
         }
      ]
   },
   "groupPointContributionRecords":1,
   "groupPointContributions":[
      {
         "userId":379353651,
         "role":"SECONDARY",
         "firstName":"Kevin",
         "identifiers":[
            {
               "type":"email",
               "value":"kevin.3533611762@example.com"
            },
            {
               "type":"mobile",
               "value":"917487000000"
            }
         ],
         "loyaltyProgramId":1400,
         "pointsContributed":480.0,
         "pointsContributedDate":"2020-08-10T12:21:32+05:30",
         "tillId":50021323,
         "programName":"TestOrgDefaultProgram",
         "eventName":"GroupMemberJoin",
         "eventIdentifiers":[
            {
               "key":"customerId",
               "value":"379353651"
            }
         ]
      },
      {
         "userId":379353654,
         "role":"SECONDARY",
         "firstName":"Jim",
         "identifiers":[
            {
               "type":"mobile",
               "value":"917487000000"
            },
            {
               "type":"email",
               "value":"jim.3533611763@example.com"
            }
         ],
         "loyaltyProgramId":1400,
         "pointsContributed":480.0,
         "pointsContributedDate":"2020-08-10T12:37:36+05:30",
         "tillId":50021323,
         "programName":"OrgDefaultProgram",
         "eventName":"GroupMemberJoin",
         "eventIdentifiers":[
            {
               "key":"customerId",
               "value":"379353654"
            }
         ]
      }
   ],
   "warnings":[
      
   ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/pointContributionHistory?identifierName={identifierName}&identifierValue={identifierValue}`
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/pointContributionHistory?identifierName={identifierName}&identifierValue={identifierValue}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Unique identifier to identifier of the primary or a secondary member of the group that you want to get. Value: `mobile`, `email`, `externalId`, `userId`, `groupId`.
identifierValue* | string | The respective identifier value. For example if the `identifierName` is email, then the `identifierValue` needs to the email ID of the primary or any of the secondary members of the group.
source | enum | Source from which the customer is registered. Value: `INSTORE`, `MARTJACK`, `WECHAT`, `ALL`. ( to fetch details from all sources. For sources with multiple accounts, you also need to pass the specific accountId.
accountId | string | Account ID for sources with multiple accounts.
dateFrom | date-time | Filter results where the event date is >= specified date. Pass the date in`ISO` standard date format.
dateTo | date-time | Filter results where the event date is <= specified date. Pass the date in`ISO` standard date format.
limit | int | Maximum number of results to show. This should be positive. if limit is less <=0, then the default limit `20` is  considered.
offset | int | Offset of the first entry in the result. This should be positive. If offset is less than 0, then 0 default offset will be used.
sortBy | enum | 
sortOrder | enum | Pass `ASC` to sort the results in the ascending order of sortBy value, `DESC` to get in descending value.
programId | int | Program ID from which you want to fetch the history. 



<aside class="notice">Parameters marked with * are mandatory. </aside>




## Get Transactions of User Group

Retrieves transactions of all members of a specific group

> Sample Request

```html
https://eu.api.capillarytech.com/v2/usergroups/1/transactions
```

> Sample Response

```json
{  
   "data":[  
      {  
         "attribution":{  
            "createDate":"2018-12-17T00:00:00+05:30",
            "createdBy":{  
               "id":15147364,
               "code":"hyd_2",
               "description":"",
               "name":"hyd_2",
               "type":"TILL",
               "adminType":"GENERAL",
               "isActive":true,
               "isOuEnabled":false,
               "timeZoneId":0,
               "currencyId":0,
               "languageId":0
            },
            "modifiedBy":{  

            },
            "modifiedDate":"2018-12-17"
         },
         "billDetails":{  
            "amount":6,
            "billingStore":{  
               "id":15147363,
               "code":"hyd_2",
               "description":"",
               "name":"HYD2",
               "type":"STORE",
               "adminType":"GENERAL",
               "isActive":true,
               "isOuEnabled":false,
               "timeZoneId":0,
               "currencyId":-1,
               "languageId":-1
            },
            "billNumber":"de0000049",
            "billingTime":"2018-12-17T00:00:00+05:30",
            "discount":0,
            "grossAmount":5,
            "note":"2 line items",
            "returnDetails":{  
               "canceled":false
            },
            "niReturnDetails":{  

            },
            "invalidBill":false
         },
         "customFields":{  

         },
         "addWithLocalCurrency":false,
         "customerId":28812689,
         "deliveryStatus":"DELIVERED",
         "id":33572481,
         "lineItems":[  
            {  
               "id":82713570,
               "customerId":0,
               "details":{  
                  "amount":5,
                  "description":"skip",
                  "discount":1,
                  "itemCode":"number0-1",
                  "qty":2,
                  "rate":3,
                  "serial":0,
                  "value":6,
                  "attributes":{  

                  },
                  "extendedFields":{  

                  },
                  "extendedFieldsSet":[  

                  ],
                  "discountSupportingNull":1,
                  "qtySupportingNull":2,
                  "rateSupportingNull":3,
                  "valueSupportingNull":6,
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
               "id":82713571,
               "customerId":0,
               "details":{  
                  "amount":5,
                  "description":"skip",
                  "discount":1,
                  "itemCode":"number0-2",
                  "qty":2,
                  "rate":3,
                  "serial":0,
                  "value":6,
                  "attributes":{  

                  },
                  "extendedFields":{  

                  },
                  "extendedFieldsSet":[  

                  ],
                  "discountSupportingNull":1,
                  "qtySupportingNull":2,
                  "rateSupportingNull":3,
                  "valueSupportingNull":6,
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
            }
         ],
         "outlierStatus":"NORMAL",
         "type":"REGULAR",
         "warnings":[  

         ],
         "lifeTimePurchases":0,
         "ignorePoints":false,
         "extendedFields":{  

         },
         "returnDetails":{  
            "canceled":false
         },
         "basketSize":4,
         "customFieldsSet":[  

         ],
         "niReturnDetails":{  

         },
         "extendedFieldsSet":[  

         ]
      },
      {  
         "attribution":{  
            "createDate":"2018-12-17T00:00:00+05:30",
            "createdBy":{  
               "id":15147364,
               "code":"hyd_2",
               "description":"",
               "name":"hyd_2",
               "type":"TILL",
               "adminType":"GENERAL",
               "isActive":true,
               "isOuEnabled":false,
               "timeZoneId":0,
               "currencyId":0,
               "languageId":0
            },
            "modifiedBy":{  

            },
            "modifiedDate":"2018-12-17"
         },
         "billDetails":{  
            "amount":6,
            "billingStore":{  
               "id":15147363,
               "code":"hyd_2",
               "description":"",
               "name":"HYD2",
               "type":"STORE",
               "adminType":"GENERAL",
               "isActive":true,
               "isOuEnabled":false,
               "timeZoneId":0,
               "currencyId":-1,
               "languageId":-1
            },
            "billNumber":"de0049",
            "billingTime":"2018-12-17T00:00:00+05:30",
            "discount":0,
            "grossAmount":5,
            "note":"2 line items",
            "returnDetails":{  
               "canceled":false
            },
            "niReturnDetails":{  

            },
            "invalidBill":false
         },
         "customFields":{  

         },
         "addWithLocalCurrency":false,
         "customerId":28812689,
         "deliveryStatus":"DELIVERED",
         "id":33572483,
         "lineItems":[  
            {  
               "id":82713577,
               "customerId":0,
               "details":{  
                  "amount":5,
                  "description":"skip",
                  "discount":1,
                  "itemCode":"number0-1",
                  "qty":2,
                  "rate":3,
                  "serial":0,
                  "value":6,
                  "attributes":{  

                  },
                  "extendedFields":{  

                  },
                  "extendedFieldsSet":[  

                  ],
                  "discountSupportingNull":1,
                  "qtySupportingNull":2,
                  "rateSupportingNull":3,
                  "valueSupportingNull":6,
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
               "id":82713578,
               "customerId":0,
               "details":{  
                  "amount":5,
                  "description":"skip",
                  "discount":1,
                  "itemCode":"number0-2",
                  "qty":2,
                  "rate":3,
                  "serial":0,
                  "value":6,
                  "attributes":{  

                  },
                  "extendedFields":{  

                  },
                  "extendedFieldsSet":[  

                  ],
                  "discountSupportingNull":1,
                  "qtySupportingNull":2,
                  "rateSupportingNull":3,
                  "valueSupportingNull":6,
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
            }
         ],
         "outlierStatus":"NORMAL",
         "type":"REGULAR",
         "warnings":[  

         ],
         "lifeTimePurchases":0,
         "ignorePoints":false,
         "extendedFields":{  

         },
         "returnDetails":{  
            "canceled":false
         },
         "basketSize":4,
         "customFieldsSet":[  

         ],
         "niReturnDetails":{  

         },
         "extendedFieldsSet":[  

         ]
      }
   ],
   "warnings":[  

   ],
   "errors":[  

   ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/usergroups/{groupId}/transactions`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/transactions


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | long | Unique id the user group that you want to fetch.


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
limit | int | Number of results to show per page. Default value is `20`.
order | enum | Arrange the results in the ascending `ASC`, or descending `DESC` order of transaction time.
start | int | Number of records that need to be skipped from the top. It is used for offset. 
transaction_id | string | Retrieve the details of a specific transaction. Pass the unique transaction ID. 
user_id | boolean | Pass `true` to show user ID of the customer. Default value is `false`.
credit_notes | boolean | Pass `true` to show credit notes of the transaction. Default value is `false`.
tenders: boolean | Pass `true` to show payment mode details of each transaction. Default value is `false`.
min_amount | float | Get transactions greater than or equal to the specific amount.
max_amount | float | Get transactions less than or equal to the specific amount.
start_date | string | Get transactions made on or after a specific date. Format: `YYYY-MM-DD hh:mm:ss`.
end_date | string | Get transactions made on or before a specific date. Format: `YYYY-MM-DD hh:mm:ss`.
start_id | string | Get transactions with transaction IDs of a specific range. Pass the transaction ID range in start_id and end_id respectively.
end_id | string | Get transactions with transaction IDs of a specific range. Pass the transaction ID range in start_id and end_id respectively.
number | string | Get a specific transaction by its transaction number (bill number).
outlier_status | enum | Filter transactions by outlier status. Value: `NORMAL`, `INTERNAL`, `FRAUD`, `OUTLIER`, `TEST`, `DELETED`, `FAILED`, `OTHER`.
returned_on | date-time | Get transactions returned on a specific date. Date format: `YYYY-MM-DD hh:mm:ss`.
added_on | date-time | Get transactions of a specific date. Date format: `YYYY-MM-DD hh:mm:ss`.
till_code | string | Get transactions made at a specific TILL. Pass the TILL code.
store_code | string | Get transactions made in a specific store. Pass the store code.

<aside class="notice">Parameters marked with * are mandatory. </aside>






## Status Codes

Code | Description
---- | -----------
93001 | Group name cannot be empty.
93002 | Invalid user id {x}.
93003 | User {x} is already associated with a group. Where `x` is the group ID.
93004 | Invalid group id {x}. Where `x` is the group ID.
93005 | User {y} is not secondary member of the group {y}. Where `y` is the user ID and `x` is the group ID.
93006 | Failed to remove the user {y} from group {x}. Where `y` is the user ID and `x` is the group ID.
93007 | UserId should not be empty. 
93008 | Validation code should not be empty.
93009 | Group Name {x} is already taken. Where `x` is the group ID.
93010 | Group ID should not be empty. 
93011 | Unable to add member to the group.
93012 | Group size has reached maximum limit.
93013 | Invalid userId specified  {y}. Where `y` is the user ID.
93014 | User {y} is not part of the group. Where `y` is the user ID. 
93015 | Primary user cannot be changed.
93016 | User group feature is disabled.
