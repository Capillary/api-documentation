# Customer

## Register Customer


> Sample Request

```html

 
https://us.api.capillarytech.com/v2/customers?source=LINE&accountId=1234
```


> Sample POST Request

```json
{  
   "loyaltyInfo":{  
      "loyaltyType":"loyalty"
   },
   "associatedWith":"westTill",
   "profiles":[  
      {  
         "firstName":"Tom",
         "lastName":"Sawyer",
         "fields":{  
            "Favorite Color":"Green",
            "Favorite Sport":"Cricket"
         },
         "identifiers":[  
            {  
               "type":"mobile",
               "value":"928000000113"
            },
            {  
               "type":"line",
               "value":"line12347"
            }
         ],
         "commChannels":[  
            {  
               "type":"line",
               "value":"line12345",
               "primary":true,
               "verified":true,
               "meta":{  
                  "residence":true,
                  "office":false
               }
            }
         ]
      }
   ],
   "extendedFields":{  
      "gender":"Male",
      "city":"Bangalore"
   }
}
```

> Sample Response

```json
{
    "createdId": 316452956,
    "warnings": [],
    "sideEffects": []
}
```

> If the customer is registered in a different source

```json
{
    "createdId": 342963216,
    "warnings": [
        {
            "status": false,
            "code": 8050,
            "message": "Same Customer found in other sources,Combining"
        }
    ],
    "sideEffects": []
}
```

Registers customers in the org's loyalty program on different source accounts such as FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, LINE, and WEBSITE. You can also add customer-level extended fields and custom fields.

**Extended Fields**:
Extended Fields are proposed fields to standardize input values and keys across organizations. These fields make easier for the Development and Analytics teams to get rid of the complex data that comes into the database through existing custom fields. Back-end team controls the field names, data types, enum values, and scopes for extended fields. Currently, Extended Fields are at customer level, transaction level, and transaction line-item level.

Examples of customer level extended fields are age_group, preferred_store, gender, and nationality.

Extended fields are either associated to verticals or to a generic category (available for all orgs). To know the list of extended fields enabled for an org, use GET v2/extendedFields API.


Following are the features and limitations of the customer registration API:

* If an identifier of a customer that you try to register is identified in a different source, the source details will be added to the existing account as a new source. Details of each source account will be maintained separately.

* Identifiers should be unique within a source account. That is, in a source account no two customers can have a same identifier. 

* A customer can have Multiple identifiers - mobile numbers, email ids and external ids - for each source account.

* Customer details cannot be updated with this API. To update customer details, use customer update API; and to update identifiers, use Update Identifier API



### Prerequisites
Following are the prerequisites to use customer registration API:

* Different sources (FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE) supported by your organization 

* Account ids in which you want to register customers(for sources with multiple accounts such as WeChat, Line and Facebook)


### Resource Information
Information | Value
----------- | -----
URI | `?source={Source Name}&accountId={account id}`
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL

`https://{host}/v2/customers?source={SourceName}&accountId={accountId}`

### Request Query Parameters
Parameter | Type | Description
--------- | ----- | -----------
source* | enum | Source in which you want to register a customer. Value: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE.
accountId | string | For sources with multiple accounts, pass the specific account id in which you want to register a customer.

<aside class="notice">Parameter marked with * is mandatory.<br> If you try to register a customer that exists in a different source, the accounts will merge automatically.</aside>

### Request Body Parameters
Parameter | Value | Description
--------- | ----- | -----------
loyaltyinfo | loyaltyType | Loyalty status of the customer (“loyalty”, “non_loyalty”)
profiles | commChannels | Different channels through which you want to communicate with the customer (“"mobile", "email", "wechat", "ios", "android", "line")
profiles | Firstname | First name of the customer
profiles | Lastname | Last name of the customer
profiles | identifiers | Identifier used for registering customer in a specific source ("mobile", "email", "externalId", "wechat","martjackId", "fbId" "mobile", "tmall_uname", "cuid", "ali_uname", "jd_uname", "vip_uname", "line")
profiles | fields | Custom fields configured for the current organization
attributionV2 | createDate | Time and date of registration in YYYY-MM-DDTHH:MM:SS+HH:MM (Time Zone). Example: 2016-06-23T19:11:18+08:00
associatedWith |  | The TILL to which you want to associate the customer


## Update Customer Details

> Sample Request

```html

https://us.api.capillarytech.com/v2/customers/329?source=WECHAT&accountId=22232
```
> Sample PUT request

```json
{  
   "profiles":[  
      {  
         "firstName":"Tom",
         "lastName":"Sawyer",
         "fields":{  
            "gender":"Male",
            "city":"Bangalore"
         },
         "identifiers":[  
            {  
               "type":"mobile",
               "value":919111111111
            },
            {  
               "type":"email",
               "value":"tom.sawyer@example.com"
            },
            {  
               "type":"wechat",
               "value":"wc_2"
            }
         ],
         "commChannels":[  
            {  
               "type":"email",
               "value":"tom.sawyer@example.com",
               "primary":"true",
               "verified":"false",
               "meta":{  
                  "residence":true
               }
            },
            {  
               "type":"wechat",
               "value":"wc_2",
               "primary":"true",
               "verified":"true",
               "meta":{  
                  "residence":true
               }
            }
         ],
         "source":"WECHAT",
         "accountId":"1234"
      }
   ],
   "loyaltyInfo":{  
      "loyaltyType":"loyalty"
   },
   "extendedFields":  
      {  
         "gender":"MALE",
         "city":"Bangalore"
      }
   
}

```

> Sample Response

```json
{
"createdId": 329,
"warnings":[] 
}

```

Allows updating customer details on any source - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE or LINE. You can update profile information, extended field values, communication details, custom field values, and loyalty status (only non loyalty to loyalty).

*Limitations of the customer update API*:

* Cannot update identifiers with this API
* Cannot modify source type
* Cannot change a loyalty customer to non-loyalty but can change a non-loyalty customer to a loyalty

### Prerequisites
The following are the prerequisites for updating customer details:

* Unique customer id of the respective customer
* Source in which you want to modify the details
* Account id of the specific source in which you want to modify the customer details


### Resource Information
Information | Value
----------- | -----
URI | `/{customerId}?{query_param}={param_value}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No



### Request URL
`https://{host}/v2/customers/{customerId}?source={sourceName}&accountId={accountId}`

### Request Query Parameters
Parameter | Description
--------- | -----------
customer_id* | Unique id of the customer whose details need to be updated
source* | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE. For sources with multiple accounts such as WECHAT, FACEBOOK, or LINE, you also need to provide the respective account id.
account_Id | Account in which you want to update the customer details (Required only for sources with multiple accounts)

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Value | Description
--------- | ----- | -----------
loyaltyinfo | loyaltyType | Loyalty status of the customer (“loyalty”, “non_loyalty”)
profiles | commChannels | Different channels through which you want to communicate with the customer ("mobile", "email", "wechat", "ios", "android", "line")
profiles | Firstname | First name of the customer
profiles | Lastname | Last name of the customer
profiles | identifiers | Identifier used for registering customer in a specific source ("mobile", "email", "externalId", "wechat","martjackId", "fbId" "mobile", "tmall_uname", "cuid", "ali_uname", "jd_uname", "vip_uname", "line")
profiles | fields | Custom fields configured for the current organization

### Error Codes
CODE | DESCRIPTION
-----| -----------
8008 | Update failed. Different profiles are identified in the same source 
8009 | Update failed. No customer found with the given identifier
8010 | Communication channel is invalid
8018 | A loyalty customer cannot be converted to a non-loyalty customer
8067 | 
8059 | Unable to push customer to solr
8058 | Invalid mobile number passed in the comm channel
8057 | Invalid email id passed in the comm channel
8045 | No account id is passed




## Update Customer Identifiers

> Sample Request

```html
https://us.api.capillarytech.com/v2/customers/418/changeIdentifier?source=WECHAT&accountId=22232
```
> Sample POST Request

```json
{
"add": [{
"type": "wechat",
"value": "ray11"
}],
"remove": [{
"type": "email",
"value": "tom.sawyer@example.com"
}]
}
```

> Sample Response

```json
{
"success": true,
"warnings":[]
}
```


Allows adding/removing identifiers of a customer in different sources, i.e., you can either add a new identifier or remove an existing identifier of a customer in a source.

**Identifiers**: "mobile", "email", "externalId", "wechat","martjackId", "fbId" "mobile", "tmall_uname", "cuid", "ali_uname", "jd_uname", "vip_uname", "line" 

Limitations of the customer identifier update API:
* Only identifiers can be updated using this API
* Identifiers should be unique within a source for single account sources and unique within an account for multiple account sources.
* If an identifier that you add already exists in a different source/account, the account will be automatically merged into the existing account maintaining different entries of each source. The new account will be a victim account and the existing account is a survivor account.


### Prerequisites
* Valid customer identifier(s) that you want to add to the existing account


### Resource Information
Information | Value
----------- | -----
URI | `/{customerId}/changeIdentifier?{query parameters}'
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL
`https://{host}/v2/customers/{customerId}/changeIdentifier?source={sourceName}&accountId={accountId}`

<aside class="notice">The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).</aside>


### Request Query Parameters
Parameter | Description
--------- | -----------
customer_id* | Unique id of the customer whose identifiers need to be updated
source* | Specify the source in which you want to update customer identifier(s) - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE. For sources that support multiple accounts, you also need to provide the associated account id.
account_Id | Account in which you want to update the customer identifier (Required only for sources with multiple accounts)

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters
Attributes | Description
---------- | -----------
add** | New identifier that you want to add to the existing account. Pass the identifiers as a key value pair.<code>{“type": "wechat", "value": "TS11"}</code>
remove** | Existing Identifier that you want to remove from the specified account. <code>{"type": "email", "value": "tom.sawyer@example.com"}</code>
type* | Type of the identifier that you want to add or remove. For example, email, mobile, and wechat.
value* | Value of the specified `type`. For example, if `type` is email, then pass the email id that you want to add or remove in `value`

<aside class="notice">Parameters marked with * are mandatory and any one among the parameters marked with ** is required.</aside>


### Error Codes
CODE | DESCRIPTION
---- | -----------
8007 | Unable to update. The identifier is already registered in the same source
8008 | The new identifier already exists in the same source
8009 | Unable to identify the customer. Customer id is invalid
8051 | Same identifier found in other source. Merging into the account with user id X  
8053 | Each identifier is registered with a different customer in other source. Unable to merge accounts
8053 | Same identifier is registered on other source. The account is already merged with user id X
8064 | External id validation failed
8066 | 
8067 | 
8059 | Unable to push customer to solr
8058 | Invalid mobile number passed in the comm channel
8057 | Invalid email id passed in the comm channel
8056 | Invalid mobile number
8055 | Invalid email id
8045 | Account id is not passed
8010 | Comm channel is invalid



## Fetch Customers (Advanced Customer Search)

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/search?limit=10&offset=0&q=tom
```

> Sample Response

```json
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 33
  },
  "data": [
    {
      "userId": 261504789,
      "matchedIdentifiers": [
        {
          "idType": "firstName",
          "idValue": "Tom",
          "source": "INSTORE",
          "accountId": ""
        }
      ],
      "profiles": [
        {
          "source": "INSTORE",
          "firstName": "Tom",
          "lastName": "Sawyer"
        }
      ]
    },
    {
      "userId": 261506099,
      "matchedIdentifiers": [
        {
          "idType": "firstName",
          "idValue": "Tom",
          "source": "INSTORE",
          "accountId": ""
        }
      ],
      "profiles": [
        {
          "source": "INSTORE",
          "firstName": "Tom",
          "lastName": "Sawyer"
        }
      ]
    },
    {
      "userId": 261504579,
      "matchedIdentifiers": [
        {
          "idType": "firstName",
          "idValue": "Tom",
          "source": "INSTORE",
          "accountId": ""
        }
      ],
      
      "profiles": [
        {
          "source": "INSTORE",
          "firstName": "Tom",
          "lastName": "Sawyer"
        }
      ]
    },
    {
      "userId": 261506077,
      "matchedIdentifiers": [
        {
          "idType": "firstName",
          "idValue": "Tom",
          "source": "INSTORE",
          "accountId": ""
        }
      ],
      "profiles": [
        {
          "source": "INSTORE",
          "firstName": "Tom",
          "lastName": "Sawyer"
        }
      ]
    }
  ],
  "warnings": [],
  "errors": []
}
```

Allows fetching customers from all sources using query string. For example, you can fetch customers whose identifiers starting with 99455, or name that starts with ‘john’ and so on.

<aside class="notice"> The keyword that you pass will be fetched automatically from all the sources. You do not need to explicitly specify the source type for this API.</aside>

### Resource Information
Information | Value
----------- | -----
URI | `/search?q={search keyword}'
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/customers/search?q={search keyword}`

To fetch customer from a specific account of a source (with multiple accounts), you need to provide the respective account id.

### Request Parameter
Parameter | Description
--------- | -----------
q |  Parameter based on which you want to fetch customers. It will fetch the customers whose first name/last name/identifiers start with the keyword specified in `q={}`




## Fetch Customer ID

> Sample Request

```html

https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=919111111111
```
> Sample Response

```json
# The entity field shows the unique customer id

{
"entity": 306,
"warnings":[]
}
```

Allows fetching unique customer ids of registered customers. The unique id is required to fetch customer details, update customer details, manage subscription details and so on.


### Resource Information
Information | Value
----------- | -----
URI | `/lookup?{query parameters}'
Authentication | Yes
HTTP Method | GET
Batch Support | No



### Request URL
`https://{host}/v2/customers/lookup?source={SourceName}&accountId={accountId}&identifierName={IdentifierName}&identifierValue={IdentifierValue}`


### Request Parameter
Parameter | Description
--------- | -----------
source* | Specify the source from which you want to fetch the customer details. Values: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL
accountId | Specify the account id of the specific source if the source has multiple accounts. `accountId` is required for sources with multiple accounts such as WeChat or Facebook
identifierName* | Identifier based on which you want to fetch the customer id. **Values**: "mobile", "email", "externalId", "wechat","martjackId", or "fbId"
identifierValue* | Pass the respective identifier value


<aside class="notice">Parameters marked with * are mandatory.</aside>

### Error Codes
CODE | DESCRIPTION
---- | -----------
8015 | No customer found with the given identifier
8065 | No customer found in the given source with the given identifier 
8045 | Account id is not passed
8013 | Customer identifier is invalid. Also check if the parameter identifierName is passed correctly
8011 | Source is invalid



## Fetch Customer Details


> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/17742?source=WECHAT&accountId=22232
```

> Sample Response

```json
{
   "id": 17742,
   "profiles": [
       {
           "firstName": "Tom",
           "lastName": "Sawyer",
           "attribution": {
               "createDate": "2016-06-23T19:11:18+08:00",
               "createdBy": {
                   "code": "rr.till",
                   "description": "",
                   "name": "rr.till",
                   "type": "TILL"
               },
               "modifiedBy": {
                   "code": "rr.till",
                   "description": "",
                   "name": "rr.till",
                   "type": "TILL"
               },
               "modifiedDate": "2016-08-12T18:50:23+08:00"
           },
           "fields": {
               "Gender": "Male",
               "Favorite Color": "Green"
           },
           "identifiers": [
               {
                   "type": "email",
                   "value": "tom.sawyer@example.com"
               }
           ],
           "commChannels": [
               {
                   "type": "wechat",
                   "value": "ojOPTwFOX-aBmdRlE9MHptPjt2w19",
                   "primary": true,
                   "verified": true,
                   "meta": {
                       "residence": false,
                       "office": false
                   }
               }
           ],
           "source": "WECHAT",
           "userId": 17742,
           "conflictingProfileList": [
           ],
           "autoUpdateTime": "2016-08-12T18:50:23+08:00"
       }
   ],
   "loyaltyInfo": {
       "loyaltyType": "non_loyalty",
       "attributionV2": {
           "createDate": "2016-06-23T19:11:18+08:00",
           "createdBy": {
               "code": "rr.till",
               "name": "rr.till"
           },
           "modifiedBy": {
               "code": "rr.till",
               "name": "rr.till"
           },
           "modifiedDate": "2016-08-12T18:50:23+08:00"
       },
       "lifetimePurchases": 230
   },
   "segments": {
   },
    "extendedFields": {
       "ethnicity": "Bangalore",
       "religion": "Hindu"
   },
     "extendedFields": {
        "city": "Bangalore",
        "gender": "Male"
    },
   "warnings": [
   ]
}
```

> When embed="points"

```json
"pointsSummary": {
"adjusted": 0.0, 
"cumulativePurchases": 0.0, 
"currentSlab": "Platinum", 
"expired": 0.0, 
"lifetimePoints": 0.0, 
"loyaltyId": 51373283, 
"loyaltyPoints": 0.0, 
"nextSlab": "", 
"nextSlabDescription": "", 
"nextSlabSerialNumber": -1, 
"redeemed": 0.0, 
"returned": 0.0, 
"slabExpiryDate": "2116-12-07T23:59:59+05:30", 
"slabSNo": 3
}
```

> When embed="subscriptions"

```json
...

"subscriptionInfo": {
        "subscriptions": [
            {
                "channel": "EMAIL",
                "priority": "TRANS",
                "type": "OPTIN"
            },
            {
                "channel": "SMS",
                "priority": "TRANS",
                "type": "OPTIN"
            },
            {
                "channel": "ANDROID",
                "priority": "TRANS",
                "type": "OPTIN"
            },
            {
                "channel": "IOS",
                "priority": "TRANS",
                "type": "OPTIN"
            },
            {
                "channel": "EMAIL",
                "priority": "BULK",
                "type": "OPTIN"
            },
            {
                "channel": "SMS",
                "priority": "BULK",
                "type": "OPTIN"
            },
            {
                "channel": "ANDROID",
                "priority": "BULK",
                "type": "OPTIN"
            },
            {
                "channel": "IOS",
                "priority": "BULK",
                "type": "OPTIN"
            }
        ],
...
```
 
 
> When embed=mlp, you will see each loyalty program details of the customer   
 
```json
...
"loyaltyProgramDetails": [
        {
            "redeemed": 8600,
            "expired": 100,
            "returned": 500,
            "adjusted": 0,
            "lifetimePoints": 10500,
            "loyaltyPoints": 1000,
            "cumulativePurchases": 103000,
            "loyaltyId": 52350728,	
            "currentSlab": "Silver",
            "nextSlab": "Gold",
            "nextSlabSerialNumber": 3,
            "nextSlabDescription": "Gold tier",
            "slabSNo": 2,
            "slabExpiryDate": "2118-12-29T23:59:59+05:30",
            "programId": 1219
        },
        {
            "redeemed": 100,
            "expired": 0,
            "returned": 10,
            "adjusted": 0,
            "lifetimePoints": 400,
            "loyaltyPoints": 300,
            "cumulativePurchases": 8800,
            "loyaltyId": 52350728,
            "currentSlab": "Tier1",
            "nextSlab": "Tier2",
            "nextSlabSerialNumber": -1,
            "nextSlabDescription": "",
            "slabSNo": 1,
            "slabExpiryDate": "2118-12-29T23:59:59+05:30",
            "programId": 1223
        }
    ],
...
```

Retrieves details of a specific customer such as:

* profile information – first name, last name, registered date, registered at TILL 
* recent profile updated – details of the recent update in profile information
* registered identifiers, communication channels
* loyalty information – loyalty status, registered date, purchases etc.
* Multiple Loyalty Program Details: Program wise details if the org has multiple loyalty programs support


### Resource Information
Information | Value
----------- | -----
URI | `/{customerId}'
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/customers/{customerId}?source={sourceName}&accountId={accountId}`

To fetch customer details from a specific account of a source (source with multiple accounts), you need to provide the respective account id.

### Additional Header

Header | Description
------ | -----------
language | Specify the ISO language code to get customer level extended field details in your preferred language. For example, `zh` for Chinese, `id` for Indonesian, `ar` for Arabic. English is the default language.

<aside class="notice">To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org. </aside>

### Request Parameters
Parameter | Description
--------- | -----------
id* | Unique identifier of the customer that you want to fetch
source* | Fetch the details of the customer on a specific source (INSTORE, MARTJACK, WECHAT, ALL). To fetch details of a customer from all sources, pass <code>/source=”ALL”</code>. For sources with multiple accounts, you also need to pass the specific accountId
account_Id |  For sources with multiple accounts, you also need to pass the specific accountId
embed | To get points, subscription, multiple loyalty program details of the customer (points, subscriptions, mlp). Usage: <code>https://{ClusterURL}/v2/customers/{CustomerId}/source=WECHAT&accountId={WeChat account id}&embed=”points”</code>
embed=usergroup | Retrieves user group details if the customer is in a user group

<aside class="notice">Parameters marked with * are mandatory.</aside>




### Error Codes
Code | Description
---- | -----------
8069 | The customer is merged into another account
8065 | No customer found in the given source with the given identifier 
8015 | No customer found with the given identifier
8063 | Unable to fetch segmentation details
8062 | Unable to fetch loyalty points
8045 | Account id is not passed
8012 | Source is invalid



## Fetch Customer Loyalty Details

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/loyaltyDetails
```

> Sample Response

```json
{
    "data": [
        {
            "redeemed": 200,
            "expired": 0,
            "returned": 1100.2139892578125,
            "adjusted": 50,
            "lifetimePoints": 500,
            "loyaltyPoints": 350,
            "cumulativePurchases": 8500,
            "loyaltyId": 52350728,
            "currentSlab": "Gold",
            "nextSlab": "Platinum",
            "nextSlabSerialNumber": 3,
            "nextSlabDescription": "Platinum tier",
            "slabSNo": 2,
            "slabExpiryDate": "2117-12-29T23:59:59+05:30",
            "programId": 1219
        },
        {
            "redeemed": 2500,
            "expired": 300,
            "returned": 102.68399810791016,
            "adjusted": 30,
            "lifetimePoints": 5000,
            "loyaltyPoints": 2200,
            "cumulativePurchases": 43560,
            "loyaltyId": 52350728,
            "currentSlab": "Platinum",
            "nextSlab": "Star",
            "nextSlabSerialNumber": -1,
            "nextSlabDescription": "Top level tier",
            "slabSNo": 1,
            "slabExpiryDate": "2117-12-29T23:59:59+05:30",
            "programId": 1223
        }
    ],
    "warnings": [],
    "errors": []
}
```


Retrieves the loyalty information of a customer across the org. If the customer is enrolled in multiple loyalty programs of an org, you will get the details of each loyalty program in a separate entity. You can also fetch a the customer's loyalty details of a specific program.



### Resource Information
Information | Value
----------- | -----
URI | `/{customerId}/loyaltyDetails'
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/customers/{customerId}/loyaltyDetails`

### Request Parameters
Parameter | Description
--------- | -----------
customerId* | It is the unique id that is generated internally for a customer. Pass the unique id of a customer whose loyalty details you want to fetch 
programId | Lets you fetch the details of a specific loyalty program if the org has multiple loyalty programs. Pass the id of the program that you want to fetch.

<aside class="notice"> Parameter marked with * is mandatory.</aside>


## Update Subscription Details

> Sample Request

```html

https://eu.api.capillarytech.com/v2/customers/17742/subscriptions
```

> Sample POST Request

```json

{
    "communicationId": -1,
    "campaignId": -1,
    "reason": "Example reason",
    "scope": {
        "scope": "USER", 
        "subScope": "NONE"
    }, 
    "subscriptions": [
        {
            "channel": "EMAIL",
            "accountId": "",
            "priority": "BULK",
            "type": "OPTOUT"
        },
        {
            "channel": "MOBILE",
            "accountId": "",
            "priority": "BULK",
            "type": "OPTOUT"
        }, 
        {
            "channel": "EMAIL",
            "accountId": "",
            "priority": "TRANS",
            "type": "OPTIN"
        },
        {
            "channel": "MOBILE",
            "accountId": "123",
            "priority": "TRANS",
            "type": "OPTIN"
        }
    ]
}
```

> Sample Response

```json


{
  "scope": {
    "scopeId": 0,
    "scope": "USER",
    "subScope": "NONE",
    "setCreatedOn": false,
    "setPriority": false,
    "setScopeId": false,
    "setScope": true,
    "setSubScope": true
  },
  "subscriptions": [
    {
      "channel": "EMAIL",
      "accountId": "",
      "priority": "BULK",
      "type": "OPTOUT"
    },
    {
      "channel": "EMAIL",
      "accountId": "",
      "priority": "TRANS",
      "type": "OPTIN"
    },
    {
      "channel": "SMS",
      "accountId": "123",
      "priority": "TRANS",
      "type": "OPTIN"
    }
  ],
  "campaignId": -1,
  "communicationId": -1,
  "reason": "Sample reason",
  "warnings": []
}
```
Subscription represents communication channels a customer has subscribed to. The communication channels can be "mobile", "email", "wechat", "ios", "android", and "line".

This API allows updating (opt-in or opt-out) subscription status for trans or bulk messaging services.

* **Transaction Messages**: These are personalized messages sent to the respective customer instantly when a new transaction is made, redeemed points/coupon, send birthday/anniversary wishes and so on
* **Bulk Messages**: These are promotion messages sent to a list of customers

### Resource Information

Entry | Description
----- | -----------
URI | `/{customerId}/subscriptions`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v2/customers/{customerId}/subscriptions`

### Request Parameters
Parameter | Description
--------- | -----------
id* | Unique id of the customer whose subscription details you want to modify
channel | Pass the communication channel that you want to update. **Value**: "mobile", "email", "wechat", "ios", "android", "line"
priority | Type of service for which you want to modify the subscription details.`TRANS` for personalized messages and `BULK` for campaign or bulk messages
type | `OPTIN` to subscribe and `OPTOUT` to unsubscribe

<aside class="notice">Parameter marked by * is mandatory and also pass other dependent required for the specific action. </aside> 

## Retrieve Subscription Details

> Sample Request

```html

https://eu.api.capillarytech.com/v2/customers/17742/subscriptions
```

> Sample Response

```json

{
   "subscriptions": [
       {
           "channel": "EMAIL",
           "priority": "TRANS",
           "type": "OPTIN"
       },
       {
           "channel": "SMS",
           "priority": "TRANS",
           "type": "OPTIN"
       },
       {
           "channel": "EMAIL",
           "priority": "BULK",
           "type": "OPTIN"
       },
       {
           "channel": "SMS",
           "priority": "BULK",
           "type": "OPTIN"
       }
   ],
   "campaignId": 0,
   "communicationId": 0,
   "warnings": [
   ]
}
```


Allows retrieving the subscription details of a customer to SMS, email and WeChat. The status will be OPTIN for subscribed and OPTOUT for unsubscribed.


Entry | Description
----- | -----------
URI | `/{customerId}/subscriptions`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`https://{host}/v2/customers/{customerId}/subscriptions`

### Request Query Parameters
Parameter | Description
--------- | -----------
id* | Pass the unique id of the customer to fetch the subscription details

<aside class="notice">Parameter marked by * is mandatory.</aside>

## Get Points Transfer Summary of Customer

Retrieves the points transfer history of a customer.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/343015431/pointsTransfers
```

> Sample Response

```json
{ 
   "data":[ 
      { 
         "pointsTransferDate":"2019-10-16 15:53:42",
         "pointsTransferred":15.0,
         "transferId":100,
         "transferType":"DEDUCTION",
         "transferredFrom":{ 
            "userId":343015431,
            "firstName":"Tom",
            "lastName":"Sawyer"
         },
         "transferredTo":{ 
            "userId":343015432,
            "firstName":"James",
            "lastName":"Thomas"
         },
         "notes":"",
         "programName":"Nightly_ApiAutoDefaultProgram"
      },
	  { 
         "pointsTransferDate":"2019-10-26 10:23:42",
         "pointsTransferred":5.0,
         "transferId":100,
         "transferType":"ADDITION",
         "transferredFrom":{ 
            "userId":343015432,
            "firstName":"James",
            "lastName":"Thomas"
         },
         "transferredTo":{ 
            "userId":343015431,
            "firstName":"Tom",
            "lastName":"Sawyer"
         },
         "notes":"",
         "programName":"Nightly_ApiAutoDefaultProgram"
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
URI | `/{userId}/pointsTransferSummary`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/customers/{userId}/pointsTransferSummary`

### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
userId* | int | Unique id of the customer whose points transfer summary needs to fetch.

<aside class="notice">All parameters marked by * are mandatory.</aside>

## Retro Transaction

Retro transaction lets you can convert a non-member transaction to a loyalty transaction by tagging a previous transaction of a customer after registering.

To enable Retro Transaction for an org, you need to enable CONF_RETRO_TRANSACTION_ENABLE on the Billing configuration page. That is, InTouch > Settings > Systems & Deployment > InTouch PoS Configuration > Billing page.

Also, check the following configurations for maximum days allowed and minimum time limit required after customer registration to tag a not-interested transaction to that customer.

* CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS
* CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS

> Sample Request

```html
http://us.api.capillarytech.com/v2/customers/368881003/retroRequest
```


> Sample Response

```json

```

| | |
--------- | ----------- |
URI | `/{customerId}/retroRequest?{query parameters}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/customers/{customerId}/retroRequest?{query parameters}`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
Status | enum | APPROVED, PENDING, REJECTED, CUSTOM
Type | enum | CHANGE_IDENTIFIER, GOODWILL, TRANSACTION_UPDATE
startDate | string | 
endDate | string | 
startId | long | 
endId | long | 
offset | long | 




