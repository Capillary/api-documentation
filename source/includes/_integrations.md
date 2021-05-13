# Integrations

This resource consists of APIs to managing OAuth related accounts. Using these APIs you can create and manage API client accounts for an org. 



## Get Integration Scopes

Retrieves different scopes available for client creation configured for the organization with the scope IDs. For example, transaction resource, target group resource, and so on. Scope IDs are required to define while creating client accounts 

> Sample Request

```html
http://eu.api.capillarytech.com/v3/integrations/clients
```

> Sample Response

```json
{
    "data": [
        {
            "id": 1,
            "entity": "TargetGroups"
        },
        {
            "id": 2,
            "entity": "All"
        },
        {
            "id": 3,
            "entity": "Transaction"
        }
    ],
    "errors": null
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/scopes`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | GET
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/scopes`



## Create API Client Account

Lets admin users of an org create a new API client. You will get client key and secret in response which is required to create access tokens for the client.

> Sample Request

```html
http://eu.api.capillarytech.com/v3/integrations/clients
```

> Sample POST Request

```json
{
  "description": "Sample description",
  "name": "NewName3",
  "expirationTokenTime": 600,
  "defaultTillId": 15000449,
  "scopes": [
    {
      "entityId": 1,
      "permission": "READWRITE",
      "resources": [
        ".*v3/targetGroups.*"
      ]
    },
     {
      "entityId": 2,
      "permission": "WRITE",
      "resources": [
        
      ]
    }
]
}

```

> Sample Response

```json
{
    "data": {
        "id": 880,
        "attribution": {
            "createdOn": "2020-04-15T14:14:06.104+0530",
            "lastUpdatedOn": "2020-04-15T14:14:06.104+0530",
            "lastUpdatedBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            },
            "createdBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            }
        },
        "name": "NewName3",
        "clientKey": "ytoxaF6SLgBJQ7erUw2SXS8zi",
        "clientSecret": "UEOx1f11D6S2Zw2EmE54tyChCisCiZAagIbmdFH8",
        "isValid": true,
        "description": "Sample description",
        "expirationTokenTime": 600,
        "defaultTillId": 15000449,
        "scopes": [
            {
                "permission": "READWRITE",
                "entityId": 1
            },
            {
                "permission": "WRITE",
                "entityId": 2
            }
        ]
    },
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/clients`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | POST
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/clients`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name* | string | Name of the API client.
description* | string | Short description of the API client.
expirationTokenTime* | long | Default expiry (in seconds) of the tokens created from the client.
defaultTillId* | long | Unique ID of the Till that you want to associate with the client.
scopes* | obj | Scope of the API client.
entityId* | enum | ID of the scope entity that you want to update. '1' for v3/targetGroups, `2` for all, `3` for v1.1/transaction resource.
permission* | enum | Access for the scope entity. Values: `READ`, `READWRITE`, `WRITE`.
resources* | obj | Path of the resource of the current entity. For example, .*v3/targetGroups.* for all APIs of target groups, .*v1.1/transaction/add to provide access only to transaction resource.

<aside class="notice"> Parameters marked with * are mandatory. </aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
createdOn | date-time | Date and time of creation.
lastUpdatedOn | date-time | Recent updated date - same as the created date. 
lastUpdatedBy | obj | Details of the associate/Till who created the API client.
createdBy | obj | Details of the associate/Till who created the API client.
id | long | Unique ID of the associate/Till.
code | string | Code of the associate/Till.
name | string | Name of the associate/Till.
type | string | Type of the creator - user or Till.
clientKey | string | Unique client key generated for the API client.
clientSecret | string | Unique client secret generated for the API client.
isValid | boolean | Whether the API client is valid or invalid. If valid, the value is `true`.






## Get API Clients

Retrieves all API client accounts created for the org.

> Sample Request

```html
http://nightly.capillary.in/v3/integrations/clients
```

> Sample Response

```json

{
    "data": [
        {
            "id": 865,
            "attribution": {
                "createdOn": "2020-04-13T11:31:32.000+0530",
                "lastUpdatedOn": "2020-04-14T11:44:30.000+0530",
                "lastUpdatedBy": {
                    "id": 15000449,
                    "code": "1371622280_919866643048",
                    "description": "",
                    "name": "Ashish Karan fd",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 15000449,
                    "code": "1371622280_919866643048",
                    "description": "",
                    "name": "Ashish Karan fd",
                    "type": "ADMIN_USER"
                }
            },
            "name": "democlient",
            "clientKey": "t3OPbJA3M2dJFFDFVdESW3MHb",
            "isValid": true,
            "description": "sample description",
            "expirationTokenTime": 30,
            "defaultTillId": 50014941
        },
        {
            "id": 867,
            "attribution": {
                "createdOn": "2020-04-14T11:51:54.000+0530",
                "lastUpdatedOn": "2020-04-14T11:51:54.000+0530",
                "lastUpdatedBy": {
                    "id": 15000449,
                    "code": "1371622280_919866643044",
                    "description": "",
                    "name": "Ashish Karan fd",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 15000449,
                    "code": "1371622280_919866643044",
                    "description": "",
                    "name": "Ashish Karan fd",
                    "type": "ADMIN_USER"
                }
            },
            "name": "clientdemo1",
            "clientKey": "8eyh1jM4Brzx84niMClQ3OHDv",
            "isValid": true,
            "description": "Demo client for testing purposes.",
            "expirationTokenTime": 10,
            "defaultTillId": 50014941
        }
    ],
    "errors": null
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/clients`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | GET
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/clients`



## Get Client Details

Retrieves the details of a specific API client account with the client key passed.


> Sample Request

```html
http://eu.api.capillarytech.com/v3/integrations/clients/t3OPbJA3M2dJFFDFVdESW3MHa
```

> Sample Response

```json
{
    "data": {
        "id": 865,
        "attribution": {
            "createdOn": "2020-04-13T11:31:32.000+0530",
            "lastUpdatedOn": "2020-04-14T11:44:30.000+0530",
            "lastUpdatedBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "Ashish Karan fd",
                "type": "ADMIN_USER"
            },
            "createdBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "Ashish Karan fd",
                "type": "ADMIN_USER"
            }
        },
        "name": "democlient",
        "clientKey": "t3OPbJA3M2dJFFDFVdESW3MHa",
        "isValid": true,
        "description": "sample description",
        "expirationTokenTime": 30,
        "defaultTillId": 50014941,
        "scopes": [
            {
                "permission": "WRITE",
                "entityId": 1
            },
            {
                "permission": "WRITE",
                "entityId": 2
            },
            {
                "permission": "WRITE",
                "entityId": 3
            }
        ]
    },
    "errors": null
}
```





### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/clients/{clientKey}`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | GET
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/clients/{clientKey}`


## Update Client Details

Lets you update permissions, client name, description, token expiry, and default Till of a specific client. You cannot modify client key or client secret.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/integrations/clients/AAyjgiPapXefvmBEw7810dSio
```

> Sample PUT Request

```json
{
  "description": "Sample description",
  "name": "NewName2",
"expirationTokenTime": 600,
 "defaultTillId": 15000449,
 "scopes": [
    {
      "entityId": 1,
      "permission": "READWRITE",
      "resources": [
        ".*v3/targetGroups.*"
      ]
    }
]
}
```

> Sample Response

```json
{
    "data": {
        "id": 879,
        "attribution": {
            "createdOn": "2020-04-14T17:16:39.000+0530",
            "lastUpdatedOn": "2020-04-15T13:31:25.031+0530",
            "lastUpdatedBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            },
            "createdBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "Ashish Karan fd",
                "type": "ADMIN_USER"
            }
        },
        "name": "NewName2",
        "clientKey": "AAyjgiPapXefvmBEw7810SSio",
        "isValid": true,
        "description": "Sample description",
        "expirationTokenTime": 600,
        "defaultTillId": 15000449,
        "scopes": [
            {
                "permission": "READWRITE",
                "entityId": 1
            }
        ]
    },
    "errors": null
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/clients/{clientKey}`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | PUT
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/clients/{clientKey}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name | string | New name of the API client.
description | string | Short description of the API client.
expirationTokenTime* | long | Default expiry (in seconds) of the tokens created from the client.
defaultTillId* | long | Unique ID of the Till that you want to associate with the client.
scopes* | obj | Scope of the API client.
entityId* | enum | ID of the scope entity that you want to update. '1' for v3/targetGroups, `2` for all, `3` for v1.1/transaction resource.
permission* | enum | New permission for the scope entity. Values: `READ`, `READWRITE`, `WRITE`.
resources* | obj | Path of the resource of the current scope (entity).    

<aside class="notice"> Parameters marked with * are mandatory. </aside>



## Delete Client Account

Lets you delete a specific client account from the org.



> Sample Request

```html
http://eu.api.capillarytech.com/v3/integrations/clients/AAyjgiPapXefvmBEw7810SSio
```

> Sample Response

```json
{
    "data": {
        "id": 879,
        "attribution": {
            "createdOn": "2020-04-14T17:16:39.000+0530",
            "lastUpdatedOn": "2020-04-14T17:17:30.727+0530",
            "lastUpdatedBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            },
            "createdBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "Ashish Karan fd",
                "type": "ADMIN_USER"
            }
        },
        "name": "Demo Client 3",
        "clientKey": "AAyjgiPapXefvmBEw7810SSio",
        "isValid": false,
        "description": "Sample description",
        "expirationTokenTime": 10,
        "defaultTillId": 50014744
    },
    "errors": null
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `v3/integrations/clients/{clientKey}`
Rate Limited? | No
Authentication | Yes 
HTTP Methods | DELETE
API Version | v3
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v3/integrations/clients/{clientKey}`
