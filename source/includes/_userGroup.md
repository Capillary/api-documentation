# User Group

It is a customer group of containing friends, family members, colleagues, or relatives of a customer. A user group will have an admin user and group members.

## Create User Group

Lets you create a new user group.

> Sample Request

```html
http://us.api.capillarytech.com/v2/usergroups
```

> Sample POST Request

```json
{
  "name": "Harsh",
  "primaryUserId": 281348774
}
```

> Sample Response

```json
{
   "id":1,
   "name":"Harsh",
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
URI | `/v2/usergroups`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups`

### Request Body Parameters

Parameter | Description
--------- | -----------
name* | Name of the user group
primaryUserId* | Unique user id of the group admin




## Join User Group

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
URI | `/v2/usergroups/{groupId}/members/{userId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}`

### Request Body Parameters

Parameter | Description
--------- | -----------
groupId* | Unique id the group that the user wants to joinedOn
userId* | Unique id of the user who wants to join the group


## Join User Group (OTP Based)

Lets you add user to an existing group upon OTP validation. For this, you need to issue OTP through `v2/otp/generate` and validate it using `v2/otp/validate` APIs. Once the OTP is validated, the user join will be confirmed.

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
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}`





## Get User Group Details

Retrieves the details of a specific user group.

> Sample Request

```html
https://us.ap.capillarytech.com/v2/usergroups/1
```


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
URI | `/v2/usergroups/{groupId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}`

### Request Body Parameters

Parameter | Description
--------- | -----------
groupId* | Unique id the user group that you want to fetch



## Update Group Admin

Lets you update the admin user for a specific user group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/usergroups/1
```

> Sample POST Request

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
URI | `/v2/usergroups/{groupId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}`

### Request Parameters

Parameter | Description
--------- | -----------
groupId* | Unique id the user group that you want to fetch
primaryUserId* | User id of the new admin
name | Name of the user group 





## Update Group Admin (OTP Based)

Lets you update the admin user of a user group through OTP validation. For this, you need to issue OTP through `v2/otp/generate` and validate it using `v2/otp/validate` APIs. Once the OTP is validated, the group admin will be updated accordingly.

This is applicable only if OTP based authentication is enabled.


> Sample Request

```html
https://us.api.capillarytech.com/usergroups/1/primaryuser/368881003
```

> Sample POST Request

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
URI | `/v2/usergroups/{groupId}/primaryuser/{userId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/primaryuser/{userId}`

### Request Parameters

Parameter | Description
--------- | -----------
groupId* | Unique id the user group that you want to fetch
primaryUserId* | User id of the new admin
name | Name of the user group







## Exit User Group

Exits a user from a user group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/usergroups/1
```

> Sample POST Request

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
Response Formats | JSON
HTTP Methods | DELETE
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/members/{userId}`

### Request Parameters

Parameter | Description
--------- | -----------
groupId* | Group id from which you want to exit the user
userId* | Unique id of the user that you want to exit from the group



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
URI | `/v2/usergroups/{groupId}/transactions`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/usergroups/{groupId}/transactions






## Response Codes

Code | Description
---- | -----------
93002 | Invalid user id
93003 | The specified user id is already associated with a group
93004 | Invalid user group id
93013 | Invalid userId specified 
93014 | The specified user id is not part of the group
