# Customer
A customer is an individual who is either enrolled in the org's loyalty program or subscribed to the org’s newsletters. An org is a business firm that is registered with Capillary - a retail store, hospital, pharmacy, restaurant, or any other firm.


## Register Customer


> Sample Request

```html

 
https://us.api.capillarytech.com/v2/customers?source=MOBILE_APP&accountId=400
```


> Sample POST Request

```json
{ 
   "loyaltyInfo":{ 
      "loyaltyType":"loyalty"
   },
   "associatedWith":"bukl.till",
   "profiles":[ 
      { 
         "commChannels":[ 
            { 
               "type":"mobilePush",
               "meta":{ 
                  "lastViewedDate":"2019-10-10T22:04:38+05:30",
                  "residence": false,
                  "office": false
               },
               "verified":"true",
               "primary":"true",
               "value":"abc123456"
            },
            {  
               "type":"mobile",
               "value":"91901000001",
               "primary":true,
               "verified":true,
               "meta":{  
				 "lastViewedDate": "",
                  "residence":true,
                  "office":false
               }
            }
         ],
         "firstName":"Tom",
         "lastName":"Sawyer",
         "identifiers":[ 
            { 
               "type":"email",
               "value":"tom.sawyer@example.com"
            },
            { 
               "type":"mobile",
               "value":"91901000001"
            }
         ],
         "source":"MOBILE_APP",
         "fields":{ 
            "employee":"true",
            "dateofbirth":"22-10-2000"
         },
         "accountId":"400"
      }
   ],
   "extendedFields":{ 
      "gender":"Male",
      "city":"Bangalore"
   },
   "loyaltyProgramEnrollments":[{
	 "programId":1016,
	 "tierNumber": 234,
	"loyaltyPoints": 75,
	"tierExpiryDate": "2022-02-11T16:36:17+05:30",
	"pointsExpiryDate": "2022-02-11T16:36:17+05:30"
}]
}
```




> Sample Response

```json
{
    "createdId": 130713699,
    "warnings": [],
    "sideEffects": [
        {
            "awardedPoints": 100,
            "type": "points"
        },
        {
            "id": 263244517,
            "couponType": "PE",
            "couponCode": "HL1FALGQ",
            "validTill": "2120-02-11T23:59:59Z",
            "description": "Test Offer 20",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "HL1FALGQ",
            "type": "coupon"
        }
    ]
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
    "sideEffects": [
        {
            "awardedPoints": 100,
            "type": "points"
        },
        {
            "id": 263244517,
            "couponType": "PE",
            "couponCode": "HL1FALGQ",
            "validTill": "2120-02-11T23:59:59Z",
            "description": "Test Offer 20",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "HL1FALGQ",
            "type": "coupon"
        }
    ]
}
```

Lets you register customers in the org's loyalty program or just register their identifiers across sources such as InStore, Facebook,Webengage, WeChat, Martjack, TMall, Taobao, JD, ecommerce, Line, Website, and Mobile app. You can also add customer-level extended and custom field details.

<aside class="notice">

<b>Extended Fields</b>:
Extended Fields are proposed fields used to standardize input values and keys across organizations (unlike custom fields that have no control in input values). Platforms back-end team controls the field names, data-types, enum values, and scopes of extended fields. Extended Fields are created at customer level, transaction level, and transaction line-item level.

Examples of customer level extended fields are age_group, preferred_store, gender, and nationality.

Extended fields are either associated to verticals or to a generic category (available for all orgs). To know the list of extended fields enabled for an org, use GET <code>v2/extendedFields</code> API.
</aside>


The Customer Register API functions as follows.

* If you try registering an identifier that exists in a different source, a new source account is added to the existing account. Details of each source account will be maintained separately.

* In a source account, identifiers should be unique - no two customers can have a same identifier. 

* You cannot update existing customer details with this API. To update customer details, use customer update API; and to update identifiers, use the Update Identifier API.

	

### Prerequisites
Following are the prerequisites to use customer registration API:

* Different sources (FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE) supported by your organization 

* Account ids in which you want to register customers(for sources with multiple accounts such as WeChat, Line and Facebook)


### Resource Information
| | |
--------- | ----------- |
URI | `?source={Source Name}&accountId={account id}`
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL

`https://{host}/v2/customers?source={SourceName}&accountId={accountId}`

### Request Query Parameters
Parameter | Type | Description
--------- | ----- | -----------
source* | enum | Source in which you want to register a customer. Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. You can add customers on different sources.
accountId** | string | For sources that support multiple accounts, provide the account ID. For example, FACEBOOK, WEB_ENGAGE, WECHAT, MOBILE_APP. 

<aside class="notice">Parameter marked with * is mandatory.<br> If you try to register a customer that exists in a different source, the accounts will merge automatically.</aside>

### Request Body Parameters
Parameter | Type | Description
--------- | ----- | -----------
loyaltyType* | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
profiles | obj | Meta information of the customer.
identifiers* | obj | Identifiers of the customer in type and value. Supported types: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`.
commChannels | obj | Available communication channels of the customer. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line`, `mobilePush`.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
attributionV2 | createDate | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format. Example: 2016-06-23T19:11:18+08:00
associatedWith |  | The TILL code to which you want to associate the customer
extendedFields | obj | Customer level extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes for values.
fields | obj | Custom field details of customers in key-value pairs.
lastViewedDate** | Date | Date when the customer recently opened the app. Applicable for the channel `mobilePush`.
loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program.
programId | int | Unique ID of the loyalty program in which you want to enroll.
tierNumber | int | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lowest tier, `2` for the subsequent tier, and so on.
loyaltyPoints | int | Loyalty points to credit in customer's account.
tierExpiryDate | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
pointsExpiryDate | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).

<aside class="notice">Parameters marked with * are mandatory. </aside>

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
      },
	 "loyaltyProgramEnrollments":[{
	 "programId":1016,
	 "tierNumber": 234,
	"loyaltyPoints": 75,
	"tierExpiryDate": "2022-02-11T16:36:17+05:30",
	"pointsExpiryDate": "2022-02-11T16:36:17+05:30"
}]
   
}

```

```json
# Sample Schema of mobilePush
{  
    "type":"mobilePush",
    "value":"abcd12343434", //This is an FCM Token
    "primary":true,
    "verified":true,
    "meta":{
      “lastViewedDate” : <date>
    }
}
````

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
| | |
--------- | ----------- |
URI | `/{customerId}?{query_param}={param_value}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No



### Request URL
For sources with single accounts

`https://{host}/v2/customers/{customerId}?source={sourceName}`

For sources with multiple accounts
`https://{host}/v2/customers/{customerId}?source={sourceName}&accountId={accountId}`

### Request Query Parameters
Parameter | Description
--------- | -----------
customerId* | Unique ID of the customer whose details need to be updated
source* | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. For sources with multiple accounts such as WECHAT, FACEBOOK, MOBILE_APP, or LINE, you also need to provide the respective account id.
accountId | Account in which you want to update the customer details (Required only for sources with multiple accounts)

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Type | Description
--------- | ----- | -----------
loyaltyType | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
commChannels | obj | Communication channels of the customer. 
type | enum | Type of the communication channel. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line, mobilePush`.
value | string | Based on the channel `type` enter the channel value. Example, mobile number is the value for `type:mobile`, firebase token for `type:mobilePush`. mobilePush is supported for sources mobile_app, Instore, Martjack, Ecommerce, and Website
primary | boolean | Whether the current identifier is the primary identifier of the customer (primary identifier as per the org's configuration).
lastViewedDate | date | Date when the customer recently opened the app. Applicable for the channel 'mobilePush'.
verified | boolean | Whether the current identifier is verified or not. For example, through OTP.
profiles | obj | Profile information of the customer.
meta | obj | Additional information of the identifier.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
identifiers | obj | Identifiers of the customer in type and value. Supported types: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, and `line`.
profiles | fields | Custom field details (only that configured for the organization)
extendedFields | obj | Extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes for values.
fields | obj | Custom field details of the customer in key:value pairs.
loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program.
programId | int | Unique ID of the loyalty program in which you want to enroll. You cannot update details if the customer is already enrolled in the loyalty program.
tierNumber | int | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lower tier, `2` for the next tier, and so on.
loyaltyPoints | int | Loyalty points to credit in customer's account.
tierExpiryDate | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
pointsExpiryDate | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).

<aside class="notice">Parameters marked with * are mandatory. </aside>







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
| | |
--------- | ----------- |
URI | `/{customerId}/changeIdentifier?source={source}&accountId={accountId}'
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL
`https://{host}/v2/customers/{customerId}/changeIdentifier?source={source}&accountId={accountId}`

<aside class="notice">The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).</aside>


### Request Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
customerId* | int | Unique ID of the customer whose identifiers need to be updated
source* | enum | Source in which you want to update customer identifier(s) - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE. For sources that support multiple accounts, you also need to provide the associated account id.
accountId** | string | Account for which you want to update the customer identifier (Required only for sources with multiple accounts)


<aside class="notice">Parameters marked with * are mandatory. acountId** is required for sources with multiple accounts.</aside>

### Request Body Parameters
Attributes | Type | Description
---------- | ---- | -----------
add** | obj | New identifier that you want to add to the existing account. Pass the identifiers as a key value pair.<br><code>{“type": "wechat", "value": "TS11"}</code>
remove** | obj | Existing Identifier that you want to remove from the specified account. <code>{"type": "email", "value": "tom.sawyer@example.com"}</code>
type* | enum | Type of the identifier that you want to add or remove. For example, email, mobile, and wechat.
value* | string | Value of the specified `type`. For example, if `type` is email, then pass the email id that you want to add or remove in `value`.

<aside class="notice">Parameters marked with * are mandatory and any one among the parameters marked with ** is required.</aside>


### Error Codes
CODE | DESCRIPTION
---- | -----------
8007 | Unable to update. The identifier is already registered in the same source.
8008 | The new identifier already exists in the same source.
8009 | Unable to identify the customer. Customer id is invalid.
8051 | Same identifier found in other source. Merging into the account with user id X.
8053 | Each identifier is registered with a different customer in other source. Unable to merge accounts.
8053 | Same identifier is registered on other source. The account is already merged with user id X.
8064 | External id validation failed.
8066 | Unable to combine,User id already used in same source.
8067 | Same customer found in other source. The account is already merged with user id X.
8059 | Unable to push customer to solr.
8058 | Invalid mobile number passed in the communication channel.
8057 | Invalid email id passed in the communication channel.
8056 | Invalid mobile number.
8055 | Invalid email id.
8045 | Account id is not passed.
8010 | communication channel is invalid.



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
| | |
--------- | ----------- |
URI | `/search?q={search keyword}'
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/customers/search?q={search keyword}`


### Request Parameter
Parameter | Description
--------- | -----------
q |  Enter the keyword based on which you want to fetch customers. It will fetch customers whose first name, last name, or registered identifiers start with keyword that you pass.




## Fetch Customer ID

> Sample Request

```html

https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=919111111111
```
> Sample Response

```json
# Entity is the unique id of the customer

{
"entity": 306,
"warnings":[]
}
```

Lets you fetch unique customer id of a customer which is required to fetch customer details, update customer details, manage subscription details and other activities.


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup?{query parameters}'
Authentication | Yes
HTTP Method | GET
Batch Support | No



### Request URL
`https://{host}/v2/customers/lookup?source={SourceName}&accountId={accountId}&identifierName={IdentifierName}&identifierValue={IdentifierValue}`


### Request Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
source* | enum | Specify the source from which you want to fetch the customer details. Values: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL
accountId | string | Specify the account id of the specific source if the source has multiple accounts. `accountId` is required for sources with multiple accounts such as WeChat or Facebook.
identifierName* | enum | Identifier based on which you want to fetch the customer id. **Values**: "mobile", "email", "externalId", "wechat","martjackId", or "fbId"
identifierValue* | string | Pass the respective identifier value.


<aside class="notice">Parameters marked with * are mandatory.</aside>

### Error Codes
CODE | DESCRIPTION
---- | -----------
8015 | No customer found with the given identifier.
8065 | No customer found in the given source with the given identifier.
8045 | Account id is not passed.
8013 | Customer identifier is invalid. Also check if the parameter identifierName is passed correctly.
8011 | Invalid source account passed.



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
 
 
> When embed=mlp, you will see each loyalty program details of the customer.
 
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
| | |
--------- | ----------- |
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

<aside class="notice">If you need a specific language support for an org, contact the Platforms team and get the translations added to the database and activate it. </aside>

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | int | Unique identifier of the customer that you want to fetch.
source* | enum | Pass the source from which you want to fetch details. Value: INSTORE, MARTJACK, WECHAT, ALL ( to fetch details from all sources. For sources with multiple accounts, you also need to pass the specific accountId.
accountId |  string | For sources with multiple accounts, pass the specific accountId.
embed | enum | To get details of loyalty points, subscription, multiple loyalty program details of the customer. Value: `points`, `subscriptions`, `mlp`. Usage: <code>https://{ClusterURL}/v2/customers/{CustomerId}/source=WECHAT&accountId={WeChat account id}&embed=”points”</code>
embed=usergroup | - | Retrieves user group details if the customer is in a user group.

<aside class="notice">Parameters marked with * are mandatory.</aside>




### Error Codes
Code | Description
---- | -----------
8069 | The customer is merged into another account.
8065 | No customer found in the given source with the given identifier.
8015 | No customer found with the given identifier.
8063 | Unable to fetch segmentation details.
8062 | Unable to fetch loyalty points.
8045 | Account id is not passed.
8012 | Invalid source passed.



## Fetch Customer Loyalty Details

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/29372667/loyaltyDetails
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


Retrieves the loyalty information of a customer across all loyalty programs of the org . You can also fetch details of a specific loyalty program.



### Resource Information
| | |
--------- | ----------- |
URI | `/{customerId}/loyaltyDetails`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/customers/{customerId}/loyaltyDetails`

### Request Parameters
Parameter | Description
--------- | -----------
customerId* | It is the unique ID that is generated internally for a customer. Pass the unique id of a customer whose loyalty details you want to fetch 
programId | Pass the loyalty program ID to get details of that particular program (Applicable only if the org has multiple loyalty programs). Pass the id of the program that you want to fetch.

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
Subscription represents communication channels to which a customer has subscribed. That could be "mobile", "email", "wechat", "ios", "android", and "line".

This API allows updating (opt-in or opt-out) subscription status of transactional and bulk messaging services for a customer.

* **Transaction Messages**: These are personalized messages sent to a customer instantly. For example, a new transaction details, points or coupon redeemed, send birthday or anniversary wishes and so on.
* **Bulk Messages**: These are promotion messages sent to a list of customers. For example, through campaigns.

### Resource Information

| | |
--------- | ----------- |
URI | `/{customerId}/subscriptions`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v2/customers/{customerId}/subscriptions`

### Request Parameters
Parameter | Description
--------- | -----------
id* | Unique ID of the customer whose subscription details you want to modify
channel | Pass the communication channel that you want to update. **Value**: "mobile", "email", "wechat", "ios", "android", "line"
priority | Type of service for which you want to modify the subscription details.`TRANS` for personalized messages and `BULK` for campaign or bulk messages
type | `OPTIN` to subscribe and `OPTOUT` to unsubscribe

<aside class="notice">Parameter marked with * is mandatory and also pass other dependent required for the specific action. </aside> 



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
id* | Pass the unique ID of the customer to fetch the subscription details

<aside class="notice">Parameter marked with * is mandatory.</aside>


## Get Points Transfer Summary of Customer

Retrieves points transfer summary of a customer. Points transfer summary consists of points that are transferred from the customer account to another customer's account (Deduction) or points that are received from another customer's account (Addition).

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
URI | `/{userId}/pointsTransfers`
Rate Limited? | No
Authentication | Yes
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/customers/{userId}/pointsTransfers`

### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
userId* | int | Unique ID of the customer whose points transfer summary needs to fetch.

<aside class="notice">Parameters marked with * are mandatory.</aside>

## Get Change Requests

Retrieves the summary of change in identifiers and other details such as email ID, mobile number, external ID, account merge, address change, mobile number reallocation, tier, and retro transactions.

<aside class="notice">
Retro transaction is conversion of non-member transactions to a loyalty transaction by tagging a previous transaction of a customer (once registered).

To enable Retro Transaction for an org, you need to enable CONF_RETRO_TRANSACTION_ENABLE on the Billing configuration page. That is, InTouch > Settings > Systems & Deployment > InTouch PoS Configuration > Billing page.

Also, check the following configurations for maximum days allowed and minimum time limit required after customer registration to tag a not-interested transaction to that customer.

* CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS
* CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS

</aside>

> Sample Request

```html
http://us.api.capillarytech.com/v2/customers/368881003/retroRequest
```


> Sample Response

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 5
    },
    "data": [
        {
            "id": 5,
            "status": "REJECTED",
            "addedBy": {
                "id": 15091433,
                "code": "till.india1",
                "description": "",
                "name": "till.india1",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedByParent": {
                "id": 15091431,
                "code": "store_india",
                "description": "",
                "name": "StoreIndia",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "updatedBy": {
                "id": 8730028,
                "code": "Patel",
                "name": "Nayan Kumar",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2015-07-22T15:48:15+05:30",
            "updatedOn": "2015-10-13T16:04:38+05:30",
            "userId": 9113108,
            "requestId": 116681,
            "baseType": "RETRO",
            "reason": "_memcare(\"Insufficient validation from requestor d",
            "comments": "操作已失败于服务器。错误讯",
            "transactionId": 2866,
            "warnings": [
            ],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 4,
            "status": "APPROVED",
            "addedBy": {
                "id": 15091433,
                "code": "till.india1",
                "description": "",
                "name": "till.india1",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedByParent": {
                "id": 15091431,
                "code": "store_india",
                "description": "",
                "name": "StoreIndia",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "updatedBy": {
                "id": 8730028,
                "code": "Patel",
                "name": "Nayan Kumar",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2019-07-22T15:47:22+05:30",
            "updatedOn": "2019-10-13T16:12:54+05:30",
            "userId": 9113108,
            "requestId": 116679,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 2865,
            "warnings": [
            ],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 3,
            "status": "REJECTED",
            "addedBy": {
                "id": 15091433,
                "code": "till.india1",
                "description": "",
                "name": "till.india1",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedByParent": {
                "id": 15091431,
                "code": "store_india",
                "description": "",
                "name": "StoreIndia",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "updatedBy": {
                "id": 15091437,
                "code": "till.sg",
                "description": "",
                "name": "till.sg",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "addedOn": "2019-07-22T14:30:23+05:30",
            "updatedOn": "2019-07-22T14:31:56+05:30",
            "userId": 9113108,
            "requestId": 116669,
            "baseType": "RETRO",
            "transactionId": 2863,
            "warnings": [
            ],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 2,
            "status": "APPROVED",
            "addedBy": {
                "id": 15091433,
                "code": "till.india1",
                "description": "",
                "name": "till.india1",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedByParent": {
                "id": 15091431,
                "code": "store_india",
                "description": "",
                "name": "StoreIndia",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "updatedBy": {
                "id": 15091437,
                "code": "till.sg",
                "description": "",
                "name": "till.sg",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "addedOn": "2019-07-22T14:20:56+05:30",
            "updatedOn": "2019-07-22T14:27:20+05:30",
            "userId": 9113108,
            "requestId": 116668,
            "baseType": "RETRO",
            "transactionId": 2862,
            "warnings": [
            ],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 1,
            "status": "REJECTED",
            "addedBy": {
                "id": 15091433,
                "code": "till.india1",
                "description": "",
                "name": "till.india1",
                "type": "TILL",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedByParent": {
                "id": 15091431,
                "code": "store_india",
                "description": "",
                "name": "StoreIndia",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 23,
                "languageId": 148
            },
            "updatedBy": {
                "id": 8730028,
                "code": "Patel",
                "name": "Nayan Kumar",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2015-07-22T14:06:14+05:30",
            "updatedOn": "2015-10-13T16:12:43+05:30",
            "userId": 9113108,
            "requestId": 116663,
            "baseType": "RETRO",
            "reason": "_memcare(\"Insufficient validation from requestor d",
            "comments": "Sample comments;",
            "transactionId": 2861,
            "warnings": [
            ],
            "reqAdd": true,
            "oneStep": false
        }
    ],
    "warnings": [
    ],
    "errors": [
    ]
}
```

### Resource Information

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


### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
changeType | enum | Lets you filter requests by type. Value: `EMAIL` (for email id changes), `MOBILE` (for mobile number change history), `EXTERNAL_ID` (for external ID change history), `MERGE` (for account merge history), `ADDRESS` (for address change history), `MOBILE_REALLOC` (for mobile reallocations), `COUPON`, `POINTS`, `TIER` (for tier change history), and `RETRO` (for retro transactions).
startDate | string | Filter results by date-range. Pass the start date in `YYYY-MM-DD` format.
endDate | string | Filter results by date-range. Pass the  end date in `YYYY-MM-DD` format.
startId | long | Filter results by sequence ID (sequence in which a change happened). For example, get lists from startId 200
endId | long | Filter results by sequence ID (sequence in which a change happened). For example, get lists from startId 200 until endId 400.
offset | long | Number of rows that you want omit from showing.
limit | int | Pass the number of results that you want to see.


## Get Customer Goodwill Requests

Retrieves the history of goodwill points of a customer.

> Sample Request

```html
http://api.capillary.co.in/v2/customers/343040815/goodwillRequest
```


```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "id": 43114,
            "addedBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "1371622280_Ashish",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "updatedBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "1371622280_Ashish",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2019-11-04T15:18:23+05:30",
            "updatedOn": "2019-11-04T15:18:23+05:30",
            "userId": 343040815,
            "requestId": 770197,
            "goodwillType": "POINTS",
            "goodwillStatus": "APPROVED",
            "comments": "sample",
            "reason": " ",
            "approvedValue": "450",
            "updatedComments": "sample; AUTO_APPROVED",
            "oneStep": false
        },
        {
            "id": 43113,
            "addedBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "1371622280_Ashish",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "updatedBy": {
                "id": 15000449,
                "code": "1371622280_919866643044",
                "description": "",
                "name": "1371622280_Ashish",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2019-11-04T15:17:55+05:30",
            "updatedOn": "2019-11-04T15:17:55+05:30",
            "userId": 343040815,
            "requestId": 770196,
            "goodwillType": "POINTS",
            "goodwillStatus": "PENDING",
            "comments": "",
            "reason": " ",
            "oneStep": false
        }
    ],
    "warnings": [],
    "errors": []
}


```

### Resource Information

| | |
--------- | ----------- |
URI | `/{customerId}/goodwillRequest`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/customers/{customerId}/goodwillRequest

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
currencyId* | long | Pass the unique ID of the customer whose goodwill request details you want to fetch.
requestId | long | Unique id of the goodwill request that you want to fetch.
is_one_step_change | boolean | Pass `true` to fetch goodwill points or coupon requests that are issued instantly (one step issual).
programId | string | Get requests of a specific loyalty program. Pass the unique loyalty program ID.
autoApprove | boolean | Pass `true` to fetch requests that are auto-approved - without the involvement of the back-end team.

<aside class="notice">Parameters marked with * are mandatory. </aside>




## Get Customer Coupons

Retrieves coupon history of a customer.

> Sample Request

```html
http://api.capillary.co.in/v2/customers/343040815/coupons
```

> Sample Response

```json


```


### Resource Information

| | |
--------- | ----------- |
URI | `/{customerId}/coupons`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/customers/{customerId}/coupons`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
customerId* | long | Unique ID of the customer to fetch coupons.


## Response Codes
### Success Codes
 Code |Description
------|-----------
 1000  | Customer registered successfully. 
  | Customer retrieved successfully.
  | Subscription updated successfully.
  | Subscription retrieved successfully.
  | Customer updated successfully.
  | Coupons retrieved successfully. 
  | Customer notes added/updated successfully.
  | Customer notes retrieved successfully.
  | Customer preferences retrieved successfully.
 | Customer preferences updated successfully.
 1000  | Referral statistics retrieved successfully.
 | Referrals are invited successfully.
 1040  | Customer id change request has submitted successfully.
 1061  | Customer recommendations fetched successfully.
 1052  | Transactions fetched successfully.
 1300  | Ticket retrieved successfully.
 | Ticket added successfully.

### Error Codes
 Code  | Description
-----  | -----------
 500  | All requests failed due to errors.
 400  | Input is invalid. Please check request parameters or input xml/json; No identifier provided to get loyalty users.
 618  | Not allowed - customer is marked as fraud.
 816  | Customer not found for organization.
 1001 | Unable to register. Invalid mobile number.
 1002 | Unable to register. Invalid email id.
 1003 | Unable to register. Invalid external id.
 1004 | Failed to populate store.
 1006 | Unable to register. Mobile number is required.
 1007 | Unable to register customer. No valid primary identifier mobile number, email ID, or external ID passed. 
 1008/ 1038  | Unable to register with external id.
 1009 | Unable to add registered customer to MLM.
 1010 | Unable to update loyalty points of the customer.
 1011 | Cannot find customer for provided identifier.
 1012 | Cannot find customer with the provided mobile number/external ID/e-mail ID.
 1013 | Customer is not registered for the loyalty Program.
 1014 | Customer is registered already.
 1015 | No identifier provided to get loyalty users.
 1016 | Unable to register. Email provided already exists for some other user.
 1017 | Provided Custom Field is invalid.
 1018 | Unable to update custom field.
 1019 | Mobile number or external id is required along with the email Id to register.
 1020 | The customer is not registered for loyalty program.
 1021 | Invalid validation code.
 1023 | Unable to register customer to loyalty program.
 1024 | Unable to update customer profile.
 1025 | Mandatory fields are not matching for customer identity update.
 1026 | Count of optional fields match is less than required.
 1027 | Field name provided for verification is invalid.
 1028 | No customer notes are available.
 1029 | Unable to retrieve customer preferences.
 1030 | Unable to update customer preferences.
 1031 | No preferences set for this customer.
 1032 | A customer already exists with the same mobile number.
 1033 | A customer already exists with the same external id.
 1034 | Unable to register. Registration date is not within the allowed past or future date limit. 
 1035 | Unable to update few customer preferences.
 1036 | One or more notes could not be added/updated for customer.
 1037 | Unable to add/update customer notes.
 1039 | Unable to register. Email ID is required. 
 1041 | Customer id change request failed.
 1042 | Invalid mobile no/email id/external id.
 1043 | Unable to register. Customer’s external id is required.
 1044 | You do not have sufficient permission to view the customer details.
 1045 | No valid identifier (mobile/email) passed for non-loyalty customer. 
 1046 | Conversion of loyalty customer to non-loyalty is not allowed.
 1047 | Customer's primary identifier not matching with other identifiers.
 1048 | Customer’s email id is required to convert to loyalty customer.
 1049 | Customer’s external id is required to convert to loyalty customer. 
 1051 | No transactions or recommendations found for the customer.
 1053 | Preferred store specified is not found.
 1060 | Batch limit exceeded.
 1062 | Invalid Test & Control status.
 1088 | Unable to issue points. Please report to capillary support.
 1099 | Unable to fetch tracker data for the customer.
 1101 | Invalid channel type.
 1102 | Invalid priority type. 
 1103 | Invalid scope. 
 1104 | Invalid identifier or no identifier passed.
 1105 | Multiple scopes are not allowed.
 1106 | Invalid subscription status passed.
 1107 | Invalid campaign id passed. 
 1108 | Invalid outbox id passed.
 1109 | Unable to add, update or fetch subscription details.
 1150  | Invalid store ID passed.
 1110 | Unable to update subscription details.
 1222 | Internal error occurred with the referral system.
 1202 | Invalid campaign token.
 1203 | Invalid campaign configured.
 1204 | The customer may not be eligible for the referral program.
 1205 | Unable to find the referrer in the specific campaign.
 1206 | Failed to add referral. Referral type is not supported. 
 1222 | Internal error occurred with the referral system.
 1301 | A ticket already exists with the same subject.
 1302 | Ticket registration failed.
 1303 | Ticket subject should not be empty.
 10001  | Failed to add customer.
 10002  | Failed to update customer details.
 91001  | Failed to get point details.
 91002  | Failed to get subscription details.
 91003  | Validation failed.
 91004  | Failed to get segmentation details.
 91005  | {x} is Primary Key, {y} cannot be updated.
 91006  | {x} update is not allowed.
 91007  | {x} is already occupied by some other user, ignoring it. 
 91009  | Retrieved survivor account for the requested merge victim. 
 91010  | Downgrade strategy is not configured. 
 91011  | Customer is already in the lowest slab. 
 91012  | Customer is already in the highest slab.
 91013  | Call to Points Engine for tier upgrade criteria has failed {x}.
 91014  | Call to Points Engine for tier renewal criteria has failed {x}.
 91015  | Failed to update extended fields; or field {x} length too long.
 91016  | WECHAT profile is not available for the customer.
 91017  | WEB_ENGAGE profile is not available for the customer.
 91018  | Unable to load WeChat notifications.
 91019  | Unable to load Web Engage notifications.
 91020  | Invalid TILL passed for registration.
 91021  | Invalid attribution TILL passed.
 91022  | Failed to update subscription for {x} channel and priority {y}.



