# Organization Sources
The `org` entity lets you fetch details of a specific org including sources configured for the org. This category provides the list of APIs related to adding and fetching sources and accounts of the org.
 
## Add Source Account

> Sample Request

```html
https://us.api.capillarytech.com/v2/org/9081/sources
```

> Sample POST Request


```json
{
  "name": "PUSH289-CM",
  "sourceAccountIdentifier": "PUSH289-CM",
  "sourceTypeName": "WEB_ENGAGE",
  "toMirror": 0,
  "configs": {
    "licenseCode": "0",
    "accessToken": "1",
    "android": "0",
    "ios": "1",
    "validTill": "cm.1",
    "loginIdentifierType": "email",
    "deeplink" : "open.my.app"
  }


}
```

> Sample Response

```json
{
    "id": 2421,
    "uuid": "ca46ee9cc14b46d1837bd6e923d52775",
    "name": "PUSH289-CM",
    "sourceAccountIdentifier": "PUSH289-CM",
    "toMirror": false,
    "sourceTypeId": 2,
    "sourceTypeName": "WEB_ENGAGE",
    "isActive": true,
    "commChannels": [
        "android",
        "ios"


    ],
    "attribution": {
        "createDate": "2017-08-17",
        "modifiedDate": "2017-08-17"
    },
    "warnings": []
}
```

Allows adding a source account to the org. Currently, the following sources are supported:

* Facebook
* WEB_ENGAGE
* WECHAT 	
* INSTORE 	
* MARTJACK 	
* TMALL 	
* TAOBAO 	
* JD

### Resource Information
Attribute | Value
--------- | -----
URI | `/org/{orgId}/sources`
HTTP Method | POST
Batch Support | No

### Request URL

`https://{host}/v2/org/{orgId}/sources`

### Request Parameters
Parameter | Description
--------- | -----------
org id* | Provide the org id to which you want to add a new source.


## Update Source Account Details

```html
> Sample Request
https://api.us.capillarytech.com/v2/org/9876/sources/ca46ee9cc14b46d1837bd6e923d52775
```

```json
> Sample PUT Request

{
	
    "name": "PUSH289-CM",
    "sourceAccountIdentifier": "PUSH289-CM",
    "toMirror": false,
    "sourceTypeId": 2,
    "sourceTypeName": "WEB_ENGAGE",
    "isActive": true,
   
  "configs": {
        "accessToken": "1",
        "android": "0",
        "deeplink": "",
        "ios": "1",
        "licenseCode": "0",
        "loginIdentifierType": "email",
        "validTill": "cm.1"
    }
}
  
```

```json
> Sample Response

{
    "id": 2421,
    "uuid": "ca46ee9cc14b46d1837bd6e923d52775",
    "sourceTypeId": 2,
    "configs": {
        "accessToken": "1",
        "android": "0",
        "deeplink": "",
        "ios": "1",
        "licenseCode": "0",
        "loginIdentifierType": "email",
        "validTill": "cm.1"
    },
    "attribution": {
        "createDate": "2017-08-17T12:21:37+05:30",
        "createdBy": {},
        "modifiedBy": {},
        "modifiedDate": "2017-08-17T12:21:37+05:30"
    },
    "warnings": []
}

```

Allows updating all the details of a source account except UUID and source type. You can also activate or deactivate an account using isActive tag.

### Resource Information
Attribute | Value
--------- | -----
URI | /org/{orgId}/sources
HTTP Method | PUT
Batch Support | No

### Request URL

`https://{host}/v2/org/{orgId}/sources?<account's UUID>`

### Request Parameters
Parameter | Description
--------- | -----------
org id | Provide the org id for which you want to update account
UUID | Specify the UUID of the account that you want to modify




## Retrieve All Source Accounts of an Org
```html
https://us.api.capillarytech.com/v2/org/9081/sources?details=true

```

```json
> Sample Response

{
  "data":[
    {
      "id":2408,
      "uuid":"547c36977a2e49edbf22c04bd27b1303",
      "name":"Facebook1-cm",
      "sourceAccountIdentifier":"Facebook1-cm",
      "toMirror":true,
      "sourceTypeId":1,
      "sourceTypeName":"Facebook",
      "isActive":true,
      "commChannels":[
        "email",
        "mobile"
      ],
      "attribution":{
        "createDate":"2017-08-14",
        "modifiedDate":"2017-08-14"
      }
    },
    {
      "id":2380,
      "uuid":"0ca36340e5144b2f9e206e5ebf090845",
      "name":"cc",
      "sourceAccountIdentifier":"ccc",
      "toMirror":false,
      "sourceTypeId":2,
      "sourceTypeName":"WEB_ENGAGE",
      "isActive":true,
      "commChannels":[
        "android",
        "ios"
      ],
      "attribution":{
        "createDate":"2017-07-28",
        "modifiedDate":"2017-07-28"
      }
    },
    {
      "id":185,
      "uuid":"403743f59bce4e92b45fc98191684b7f",
      "name":"MT-CM",
      "sourceAccountIdentifier":"MT-CM",
      "toMirror":true,
      "sourceTypeId":6,
      "sourceTypeName":"MARTJACK",
      "isActive":true,
      "attribution":{
        "createDate":"2017-06-16",
        "modifiedDate":"2017-06-16"
      }
    }
  ],
  "warnings":[

  ],
  "errors":[

  ]
}
```

Retrieves the list of all account accounts of an org.

### Resource Information
Attribute | Value
--------- | -----
URI | org/{orgId}/sources?details=true
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/org/{orgId}</sources?details=true`

### Request Parameters
Parameter | Description
--------- | -----------
org id* | Provide the org id for which you want to retrieve source details





## Retrieve Details of a Specific Source Account
```html
https://api.us.capillarytech.com/v2/org/9876/sources/ca46ee9cc14b46d1837bd6e923d52775
```

```json
{
    "id": 2421,
    "uuid": "ca46ee9cc14b46d1837bd6e923d52775",
    "name": "PUSH289-CM",
    "sourceAccountIdentifier": "PUSH289-CM",
    "toMirror": false,
    "sourceTypeId": 2,
    "sourceTypeName": "WEB_ENGAGE",
    "isActive": true,
    "commChannels": [
        "android",
        "ios"
    ],
    "configs": {
        "accessToken": "1",
        "android": "0",
        "deeplink": "my.app",
        "ios": "1",
        "licenseCode": "0",
        "loginIdentifierType": "email",
        "validTill": "cm.1"
    },
    "attribution": {
        "createDate": "2017-08-17",
        "modifiedDate": "2017-08-17"
    },
    "warnings": []
}
```


Retrieves details of a specific account based on the UUID (universally unique identifier).

### Resource Information
Attribute | Value
--------- | -----
URI | /org/{orgId}/sources?{UUID}
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/org/{orgId}/sources?/{account's UUID}`

### Request Parameters
Parameter | Description
--------- | -----------
org id* | Provide the org id for which you want to retrieve source details
UUID* | Pass the UUID (universally unique identifier) of the account that you want to retrieve

<aside class="notice">Parameters marked with * are mandatory.</aside>



### Error Codes
Code | Description
---- | -----------
3213 | Unable to find org source
3214 | Unable to add org source
3215 | No source types found
3216 | Invalid source name
3217 | Invalid account identifier of the source
3218 | Invalid source type
3219 | Unable to update source. Invalid UUID
3220 | Org source already exists with the given values
3221 | Unable to update org source / Invalid org id
3222 | No configurations found for the provided source id
