# Customer

## Register Customer

```html
# Sample Request
 
https://us.api.capillarytech.com/v2/customers?source=WECHAT&accountId=22232
```


```json
{
 "profiles": 
 [
 {
 "firstName": "Tom",
 "lastName": "Sawyer",
 "fields": {
 "Favorite Color": "Green",
 "Favorite Sport": "Cricket"
 },
 "identifiers":
 [
 {
 "type": "email",
 "value": "tom.sayer@example.com"
 }
 ],
 "commChannels": 
 [
 {
 "type": "wechat",
 "value": "ojOPTwFOX-aBmdRlE9MHptPjt2w19",
 "primary": true,
 "verified": true
 }
 ]
 }
 ],
 "loyaltyInfo": {
   "loyaltyType": "non_loyalty",
   "attributionV2": {
     "createDate": "2016-06-23T19:11:18+08:00"
   }
 }
}
```

> The above API call returns the following response

```json
{
"createdId": 329,
"warnings":[]
}
```

This API allows registering customers in the org's loyalty program through different sources such as INSTORE,MARTJACK, WECHAT and FACEBOOK.  For sources with multiple accounts (such as WeChat and Facebook), you must specify the respective account id along with the source name.

Following are the features and limitations of the customer registration API:

* If you try to register an identifier in a source which is already registered in a different source, the accounts will be tagged automatically to a single customer account. For example, if you register a customer in InStore with a mobile number which is already registered in MartJack, the two accounts will be tagged automatically to a single account with two different entries - InStore and MartJack.

* Identifiers should be unique within a source for single account sources and unique within an account for multiple account sources. That is, an identifier once registered in a source or an account for a customer cannot be registered again for a different customer. 

* Multiple identifiers of the same type can be registered per customer. Now, you can register multiple mobile numbers, email ids and external ids for a customer within a source.

* Customer details cannot be updated with this API. To update customer details, use customer update API; and to update identifiers, use Update Identifier API



### Prerequisites
Following are the prerequisites to use customer registration API:

* Different sources (InStore, MartJack, WeChat, Facebook etc) supported by your organization 

* Account ids in which you want to register customers(for sources with multiple accounts such as WeChat and Facebook)

### Request URL

`https://<Respective cluster’s API URL>/v2/customers?source=<Source Name>&accountId=<account id>`

### Request Parameters
Parameter | Value | Description
--------- | ----- | -----------
source* | INSTORE/WECHAT/MARTJACK/FACEBOOK | Source in which you want to register a customer
accountId* | - | For sources with multiple accounts, pass the specific account id in which you want to register a customer


### Request Attributes
Parameter | Value | Description
--------- | ----- | -----------
loyaltyinfo | loyaltyType | Loyalty status of the customer (“loyalty”, “non_loyalty”)
profiles | commChannels | Different channels through which you want to communicate with the customer (“email”, “mobile”, “wechat”)
profiles | Firstname | First name of the customer
profiles | Lastname | Last name of the customer
profiles | identifiers | Identifier used for registering customer in a specific source ("mobile", "email", "externalId", "wechat","martjackId", "fbId")
profiles | fields | Custom fields configured for the current organization
attributionV2 | createDate | Time and date of registration in YYYY-MM-DDTHH:MM:SS+HH:MM (Time Zone). Example: 2016-06-23T19:11:18+08:00



## Update Customer Details

```html
# Sample Request

https://us.api.capillarytech.com/v2/customers/329?source=WECHAT&accountId=22232
```
> Following is the sample POST JSON for updating customer's profile

```json
{
 "profiles": [
   {
     "firstName": "Tom",
     "lastName": "Sawyer",
     "fields": {
       "gender": "Male",
       "city": "Bangalore"
     },
     "identifiers": [{
            "type": "mobile",
            "value": 919111111111
        }, {
            "type": "email",
            "value": "tom.sawyer@example.com"
        }, {
            "type": "wechat",
            "value": "wc_2"
        }],
        "commChannels": [{
            "type": "email",
            "value": "tom.sawyer@example.com",
            "primary": "true",
            "verified": "false",
            "meta": {
                "residence": true
            }
        }, {
            "type": "wechat",
            "value": "wc_2",
            "primary": "true",
            "verified": "true",
            "meta": {
                "residence": true
            }
        }],
        "source": "WECHAT",
        "accountId": "1234"
    }],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
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

Allows updating customer details on any source - INSTORE,MARTJACK, WECHAT or FACEBOOK. You can update profile information, communication details, custom field values, and loyalty status (only non loyalty to loyalty).

*Limitations of the customer update API*:

* Cannot update identifiers with this API
* Cannot modify source type
* Cannot change a loyalty customer to non-loyalty but can change a non-loyalty customer to a loyalty

### Prerequisites
The following are the prerequisites for updating customer details:

* Unique customer id of the respective customer
* Source in which you want to modify the details
* Account id of the specific source in which you want to modify the customer details


### Request URL
`https://<Respective cluster’s API URL>/v2/customers/<Customer ID>?source=<Source Name>&accountId=<account id>`

### Request Parameters
Parameter | Description
--------- | -----------
customer_id* | Unique id of the customer whose details need to be updated
source* | Specify the source in which you want to update the customer details - INSTORE, MARTJACK, WECHAT, FACEBOOK. If ‘source=WECHAT/FACEBOOK`, you also need to provide the respective account id.
account_Id** | Account in which you want to update the customer details (Required only for sources with multiple accounts)

### Request Attributes

Parameter | Value | Description
--------- | ----- | -----------
loyaltyinfo | loyaltyType | Loyalty status of the customer (“loyalty”, “non_loyalty”)
profiles | commChannels | Different channels through which you want to communicate with the customer (“email”, “mobile”, “wechat”)
profiles | Firstname | First name of the customer
profiles | Lastname | Last name of the customer
profiles | identifiers | Identifier used for registering customer in a specific source ("mobile", "email", "externalId", "wechat","martjackId", "fbId")
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

```html
# Sample Request

https://us.api.capillarytech.com/v2/customers/418/changeIdentifier?source=WECHAT&accountId=22232
```
> In the POST json, pass the identifier(s) that you want to add and/or remove separately as shown below

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

> Following is the sample response generated for the above sample call

```json
{
"success": true,
"warnings":[]
}
```


Allows adding/removing identifiers of a customer in different sources, i.e., you can either add a new identifier or remove an existing identifier of a customer in a source.

**Identifiers**: "mobile", "email", "externalId", "wechat","martjackId", "fbId"

Limitations of the customer identifier update API:
* Only identifiers can be updated using this API
* Identifiers should be unique within a source for single account sources and unique within an account for multiple account sources.
* If an identifier that you add already exists in a different source/account, the account will be automatically merged into the existing account maintaining different entries of each source. The new account will be a victim account and the existing account is a survivor account.


### Prerequisites
* Valid customer identifier(s) that you want to add to the existing account


### Request URL
`https://<Respective cluster’s API URL>/v2/customers/<Customer ID>/changeIdentifier?source=<Source Name>&accountId=<account id>`

<aside class="notice">The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).</aside>


### Request Parameters
Parameter | Description
--------- | -----------
customer_id* | Unique id of the customer whose identifiers need to be updated
source* | Specify the source in which you want to update customer identifier(s) - INSTORE, MARTJACK, WECHAT, FACEBOOK. If ‘source=WECHAT/FACEBOOK`, you also need to provide the respective account id.
account_Id** | Account in which you want to update the customer identifier (Required only for sources with multiple accounts)


### Request Attributes
Attributes | Description
---------- | -----------
add | New identifier that you want to add to the existing account. Pass the identifiers as a key value pair.<code>{“type": "wechat", "value": "TS11"}</code>
remove | Existing Identifier that you want to remove from the specified account. <code>{"type": "email", "value": "tom.sawyer@example.com"}</code>


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



## Fetch Customers using Partial Strings (Advanced Customer Search)
```html
# Sample Request

http://newapi.nightly.capillary.in/v2/customers/search?limit=10&offset=0&q=tom
```
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

### Request URL
`https://<Respective cluster’s API URL>/v2/customers/search?q=<Identifiers or name that starts with XXXX>`

To fetch customer from a specific account of a source (with multiple accounts), you need to provide the respective account id.

### Request Parameter
Parameter | Description
--------- | -----------
q |  Parameter based on which you want to fetch customers. It will fetch the customers whose first name/last name/identifiers start with the keyword specified in q=””




## Fetch Customer ID
```html
# Sample Request

https://eu.api.capillarytech.com/v2/customers/lookup?identifierName=mobile&identifierValue=919111111111
```
> The entity field shows the unique customer id

```json
{
"entity": 306,
"warnings":[]
}
```

Allows fetching unique customer ids of registered customers. The unique id is required to fetch customer details, update customer details, manage subscription details and so on.

### Request URL
`https://<Respective cluster’s API URL>/v2/customers/lookup?source=<Source Name>&accountId=<account id>&identifierName=<Identifier>&identifierValue=<Identifier value>`


### Request Parameter
Parameter | Description
--------- | -----------
source* | Specify the source in which the customer is registered
accountId** | Specify the account id of the specific source if the source has multiple accounts
identifierName* | Identifier based on which you want to fetch the customer id. **Values**: "mobile", "email", "externalId", "wechat","martjackId", or "fbId"
identifierValue* | Pass the respective identifier value


### Error Codes
CODE | DESCRIPTION
---- | -----------
8015 | No customer found with the given identifier
8065 | No customer found in the given source with the given identifier 
8045 | Account id is not passed
8013 | Customer identifier is invalid. Also check if the parameter identifierName is passed correctly
8011 | Source is invalid



## Fetch Customer Details

```html
# Sample Request

https://eu.api.capillarytech.com/v2/customers/17742?source=WECHAT&accountId=22232
```

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
               "Gender": "Male"
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

> When embed="subscription"

```json
"subscriptionInfo": {
                    "campaignId": 0, 
                    "communicationId": 0, 
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
                    ]
          }

```

Allows fetching customer details such as:

* profile information – first name, last name, registered date, registered at TILL 
* recent profile updated – details of the recent update in profile information
* registered identifiers, communication channels and
* loyalty information – loyalty status, registered date, purchases etc.

### Request URL
`https://<Respective cluster URL>/v2/customers/<Customer id>?source=<Source Name>&accountId=<accountId>`

To fetch customer details from a specific account of a source (source with multiple accounts), you need to provide the respective account id.

### Request Parameters
Parameter | Description
--------- | -----------
id | Unique identifier of the customer that you want to fetch
source | Fetch the details of the customer on a specific source (INSTORE, MARTJACK, WECHAT, ALL). To fetch details of a customer from all sources, pass <code>/source=”ALL”</code>. For sources with multiple accounts, you also need to pass the specific accountId
account_Id |  For sources with multiple accounts, you also need to pass the specific accountId
embed | To get points and subscription details of the customer (points, subscription). Usage: <code>https://<Cluster API URL>/v2/customers/<Customer id>/source=WECHAT&accountId=<Specific WeChat account’s id>&embed=”points”</code>

### Error Codes
Code | Description
---- | -----------
8069 | The customer is merged into another account
8065 | No customer found in the given source with the given identifier 
8015 | No customer found with the given identifier
8063 | 
8062 | Unable to fetch loyalty points
8045 | Account id is not passed
8012 | Source is invalid


## Update Subscription Details
```html
# Sample Request

https://eu.api.capillarytech.com/v2/customers/17742/subscriptions
```

```json
# Sample POST Request

{
    "communicationId": -1,
    "campaignId": -1,
    "reason": "LALALALA",
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
            "channel": "SMS",
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
    ]
}
```
> Following is the sample response generated for the above request 

```json
# Sample Response

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
Subscription represents communication channels a customer has subscribed to. The communication channels can be email, sms, or WeChat.

This API allows you update different subscription channels of a customer. You can either opt-in or opt-out a customer’s mobile number/email id/WeChat id from receiving transaction and/or bulk messages.

* **Transaction Messages**: These are personalized messages sent to the respective customer instantly when a new transaction is made, redeemed points/coupon, send birthday/anniversary wishes and so on
* **Bulk Messages**: These are promotion messages sent to a list of customers

### Resource Information

Entry | Description
----- | -----------
URI | /customers/.../subscriptions
Rate Limited? | Yes
Content-Type | application/json
Accept | application/json
Authentication | Yes
Response Formats | JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`https://<Respective cluster URL>/v2/customers/<Customer ID>/subscriptions`

### Request Parameters
Parameter | Description
--------- | -----------
id | Unique id of the customer for whom you want to modify the subscription details
channel | Pass the communication channel that you want to update. **Value**: SMS, EMAIL, WECHAT
priority | Type of service for which you want to modify the subscription details.`TRANS` for personalized messages and `BULK` for campaign or bulk messages
type | `OPTIN` to subscribe and `OPTOUT` to unsubscribe


## Retrieve Subscription Details
```html
# Sample Request
https://eu.api.capillarytech.com/v2/customers/17742/subscriptions
```

```json
# Sample Response
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
URI | /customers/.../subscriptions
Rate Limited? | Yes
Content-Type | application/json
Accept | application/json
Authentication | Yes
Response Formats | JSON 
HTTP Method | GET
Batch Support | No

### Request URL
`https://<Respective cluster URL>/v2/customers/<Customer ID>/subscriptions`

### Request Parameters
Parameter | Description
--------- | -----------
id | Pass the unique id of the customer to fetch the subscription details

