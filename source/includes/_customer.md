# Customer
A customer is an individual who is either enrolled in the org's loyalty program or subscribed to the org’s newsletters. An org is a business firm that is registered with Capillary - a retail store, hospital, pharmacy, restaurant, or any other firm.


## Register Customer


> Sample Request

```html

 
https://us.api.capillarytech.com/v2/customers
```


> Sample POST Request

```json
{
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "associatedWith": "bukl.till",
  "profiles": [
    {
      "firstName": "Tom",
      "lastName": "Sawyer",
      "identifiers": [
        {
          "type": "mobile",
          "value": "919010000022"
        },
        {
          "type": "cuid",
          "value": "cuid_91901000002"
        },
        {
          "type": "unionId",
          "value": "unionId_91901000002"
        },
        {
          "type": "cardnumber",
          "value": "test123112121",
          "seriesId": 19,
          "statusLabel": "ACTIVE",
		  "extendedFields": {
			"card_balance": 2000,
			"year_of_registration" : 18
		},
		"customFields": {
			"bloodgroup" : "bnegative"
		}
        }
      ],
      "commChannels": [
        {
          "type": "mobilePush",
          "meta": {
            "lastViewedDate": "2019-10-10T22:04:38+05:30",
            "residence": false,
            "office": false
          },
          "verified": "true",
          "primary": "true",
          "value": "abc123456"
        },
        {
          "type": "mobile",
          "value": "91901000001",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
      ],	
      "source": "MOBILE_APP",
      "accountId":"400"
      "fields": {
        "employee": "true",
        "dateofbirth": "22-10-2000"
      },
    }
  ],
  "extendedFields": {
    "gender": "Male",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 1016,
      "tierNumber": 234,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2022-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2022-02-11T16:36:17+05:30"
    }
  ]
}
```

> Sample Schema to issue external cardStatus

```json
 ... 
  {
    "type": "cardnumber",
    "value":"EXTERNALCARD9875692",
    "seriesCode": "GOLDPHY98"
  }
 ...
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

With this API, you can also issue loyalty card to the customer.

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
URI | `/customers`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request Header (Optional)

Header | Description
------ | -----------
WAIT_FOR_DOWNSTREAM | Pass `true` to wait for Loyalty activities to complete and then respond to the client with side effects in the API response.<br>Pass `false` to run Loyalty activities in the background. No side effects are returned in the API response.
X-CAP-DIRECT-REPLAY | Pass `true` to add the customer but enable loyalty events to be executed at a later point of time. The events will be pushed to queue and will be executed in near real-time.


### Request URL

`{host}/v2/customers`


### Request Query Parameters
Parameter | Type | Description
--------- | ----- | -----------
rawSideEffects | boolean | Pass `true` to get complete details of incentives such as awardOn, expiryDate, strategyIds and so on. See `rawSideEffects` in response for more details.


### Request Body Parameters
Parameter | Type | Description
--------- | ----- | -----------
loyaltyType* | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
profiles | list <obj> | Meta information of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Firstname | string | First name of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastname | string | Last name of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifiers* | list obj | Identifiers of the customer in type and value.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source* | enum | Source in which you want to register a customer. Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. You can add customers on different sources.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accountId** | string | For sources that support multiple accounts, provide the account ID. For example, FACEBOOK, WEB_ENGAGE, WECHAT, MOBILE_APP. 
activity | enum | State of the customer's lifecycle (entity lifecycle). State is auto assigned according to the activity.  
seriesId | int | Card series ID (for card series generated in Capillary). Required for the identifier `type`,  `card`.
seriesCode | string | Unique card series code (for external card series). Applicable for the identifier `type`,  `card`.
statusLabel | string | User defined card status. Required for the identifier `type`,  `card`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commChannels | obj | Available communication channels of the customer. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line`, `mobilePush`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Type of the customer identifier. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`, and `card` (to issue loyalty card to the customers through registration).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value | string | Value of the specified identifier. For the `type` card, `value` is card number.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary | boolean | Pass `true` if it is the primary identifier of the org (for registration). 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;verified | boolean | Pass `true` if the identifier is verified.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribed | boolean | Pass `true` if the identifier is subscribed for the org's newsletters (bulk messages).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meta | obj | Additional details of the identifier.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributes | obj | Additional details of the identifier.
createDate | date-time | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format. Example: 2016-06-23T19:11:18+08:00
associatedWith | string | The TILL code associated with the customer registration.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extendedFields | obj | Customer or card level extended field details in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatype values.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields | obj | Customer or card level custom field details in key-value pairs.
lastViewedDate** | Date | Date when the customer recently opened the app. Applicable for the channel `mobilePush`.
loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program.
programId | int | Unique ID of the loyalty program in which you want to enroll.
tierNumber | int | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lowest tier, `2` for the subsequent tier, and so on.
loyaltyPoints | int | Loyalty points to credit in customer's account.
tierExpiryDate | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
pointsExpiryDate | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
endPointsEnabled | array | Use this to add dummy customers (for internal or testing purposes) and specify the respective endpoints. Values: `REFERRAL_ENDPOINT`, `DVS_ENDPOINT`, `TIMELINE_ENDPOINT`, `POINTSENGINE_ENDPOINT`.

<aside class="notice">Parameter marked with * is mandatory.<br> If you try to register a customer that exists in a different source, the accounts will be merged automatically.</aside>


## Update Customer Details (using userId)

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
      "lastViewedDate": "2019-10-25"
    }
}
````

> Sample Response

```json
{
	"createdId": 162116213,
	"warnings": [],
	"sideEffects": [
	{
	"awardedPoints": 25,
	"type": "points"
	}
  ]
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
URI | `/{customerId}?{queryParam}={paramValue}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No



### Request URL
For sources with single accounts

`{host}/v2/customers/{customerId}?source={sourceName}`

For sources with multiple accounts
`{host}/v2/customers/{customerId}?source={sourceName}&accountId={accountId}`

### Request Query Parameters
Parameter | Description
--------- | -----------
customerId* | Unique ID of the customer whose details need to be updated
source* | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. For sources with multiple accounts such as WECHAT, FACEBOOK, MOBILE_APP, or LINE, you also need to provide the respective account id.
accountId** | Account in which you want to update the customer details (Required only for sources with multiple accounts)
use_async | boolean | Pass `true` to run Loyalty activities in the background, side effects will not be returned in the API response. If `false`, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response.


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
identifiers | obj | Identifiers of the customer that you want to add in type and value. Supported types: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, and `line`.
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













## Update Customer Identifiers/Issue Card

> Sample Request

```html
https://us.api.capillarytech.com/v2/customers/418/changeIdentifier?source=WECHAT&accountId=22232
```
> Sample POST Request

```json
{
    "add": [
        {
            "type": "wechat",
            "value": "ray11"
        }
    ],
    "remove": [
        {
            "type": "email",
            "value": "tom.sawyer@example.com"
        }
    ]
}
```

> Sample POST Request (to Issue Card)

```json
{
  "add": [
    {
      "value": "TTM001110000000001ZS",
      "type": "cardnumber",
      "seriesId": 19,
      "statusLabel": "ACTIVE"
    }
  ]
}
```


> Sample Response

```json
{
    "createdId": 382756026,
    "warnings": []
}
```


Lets you add/remove identifiers or loyalty cards of a customer across sources.

**Identifiers**: `mobile`, `email`, `externalId`, `wechat`, `martjackId`, `fbId`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `line`. 

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
`{host}/v2/customers/{customerId}/changeIdentifier?source={source}&accountId={accountId}`

<aside class="notice">The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).</aside>


### Request Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
customerId* | int | Unique ID of the customer whose identifiers need to be updated
source* | enum | Source in which you want to update customer identifier(s) - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE. For sources that support multiple accounts, you also need to provide the associated account id.
accountId** | string | Account for which you want to update the customer identifier (Required only for sources with multiple accounts)
seriesId | int | Series ID of the card that you want to add or remove.
statusLabel | enum | Status of the card. Value: ACTIVE (to activate a card).
use_async | boolean | Pass `true` to run Loyalty activities in the background, side effects will not be returned in the API response. If `false`, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response.



<aside class="notice">Parameters marked with * are mandatory. acountId** is required for sources with multiple accounts.</aside>

### Request Body Parameters
Attributes | Type | Description
---------- | ---- | -----------
add** | obj | New identifier that you want to add to the existing account. Pass the identifiers as a key value pair.<br><code>{“type": "wechat", "value": "TS11"}</code>
remove** | obj | Existing Identifier that you want to remove from the specified account. <code>{"type": "email", "value": "tom.sawyer@example.com"}</code>
type* | enum | Type of the identifier that you want to add or remove. Value: `cardnumber`, `email`, `mobile`, and `wechat`.
value* | string | Value of the specified `type`. For example, if `type` is email, then pass the email id that you want to add or remove in `value`; for `cardNumber` pass card number to add or remove.

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




## Associate Customer with Customer/Hierarchy

Lets you batch register customers, or associate a customer with company or hierarchy. This API registers parent and child customers (if not registered), and  associates the customer with hierarchy code, company role, parent and child customers.

> Sample Request

```html
https://us.api.capillarytech.com/v2/customers/bulk
```


> Sample POST Request (Associate Child with Parent)

```json
[
   {
      "profiles":[
         {
            "firstName":"Capillary",
            "lastName":"Customer",
            "identifiers":[
               {
                  "type":"mobile",
                  "value":"917979000000"
               },
               {
                  "type":"cuid",
                  "value":"cuid_917979000000"
               },
               {
                  "type":"unionId",
                  "value":"unionId_917979000000"
               },
               {
                  "type":"cardnumber",
                  "cardExternalId":"carduuid_710000",
                  "value":"card_710000",
                  "seriesCode":"FleetCard1",
                  "statusLabel":"ACTIVE",
                  "extendedFields":{
                     "custom_card_name":"64346srt34532323",
                     "vehicle_number":"879976453431adsgfsf"
                  }
               }
            ],
            "commChannels":[
               {
                  "type":"mobile",
                  "value":"9020000000",
                  "primary":true,
                  "verified":true
               },
               {
                  "type":"email",
                  "value":"tom.sawyer@mail.com",
                  "primary":true,
                  "verified":true
               }
            ],
            "fields":{
               "gender":"MALE",
               "city":"city0"
            },
            "source":"WECHAT",
            "accountId":"WECHAT-CM"
         }
      ],
      "extendedFields":{
         "gender":"Male",
         "city":"city_6878387"
      },
      "loyaltyInfo":{
         "loyaltyType":"loyalty"
      },
      "referralCode":"",
      "associationDetails":{
         "hierarchyCode":"code-association2",
         "roleCode":"FA",
         "childCustomers":[
            {
               "profiles":[
                  {
                     "firstName":"Capillary",
                     "lastName":"Customer",
                     "identifiers":[
                        {
                           "type":"mobile",
                           "value":"{{mobile2}}"
                        },
                        {
                           "type":"cuid",
                           "value":"cuid_{{mobile2}}"
                        },
                        {
                           "type":"unionId",
                           "value":"unionId_{{mobile2}}"
                        }
                     ],
                     "commChannels":[
                        {
                           "type":"mobile",
                           "value":"{{mobile2}}",
                           "primary":true,
                           "verified":true
                        },
                        {
                           "type":"email",
                           "value":"{{mobile2}}@mail.com",
                           "primary":true,
                           "verified":true
                        }
                     ],
                     "fields":{
                        "gender":"MALE",
                        "city":"city0"
                     },
                     "source":"WECHAT",
                     "accountId":"WECHAT-CM"
                  }
               ],
               "extendedFields":{
                  "gender":"Male",
                  "city":"city_6878387"
               }
            },
            {
               "profiles":[
                  {
                     "firstName":"Capillary",
                     "lastName":"Customer",
                     "identifiers":[
                        {
                           "type":"mobile",
                           "value":"{{mobile3}}"
                        },
                        {
                           "type":"cuid",
                           "value":"cuid_{{mobile3}}"
                        },
                        {
                           "type":"unionId",
                           "value":"unionId_{{mobile3}}"
                        }
                     ],
                     "commChannels":[
                        {
                           "type":"mobile",
                           "value":"{{mobile3}}",
                           "primary":true,
                           "verified":true
                        },
                        {
                           "type":"email",
                           "value":"{{mobile3}}@mail.com",
                           "primary":true,
                           "verified":true
                        }
                     ],
                     "fields":{
                        "gender":"MALE",
                        "city":"city0"
                     },
                     "source":"WECHAT",
                     "accountId":"WECHAT-CM"
                  }
               ],
               "extendedFields":{
                  "gender":"Male",
                  "city":"city_6878387"
               }
            }
         ],
         "fleetCompany":{
            "externalId":"ex917471949194"
         },
         "childRoleCode":"FC"
      }
   }
]
```

> Sample POST Request (Associate Child to Parent )

```json
...
{
   "associationDetails":{
      "hierarchyCode":"code-association2",
      "roleCode":"FC",
      "parentCustomer":{
         "profiles":[
            {
               "firstName":"慧慧",
               "lastName":"慧慧",
               "identifiers":[
                  {
                     "type":"mobile",
                     "value":"917875000000"
                  },
                  {
                     "type":"cuid",
                     "value":"cuid_917875000000"
                  },
                  {
                     "type":"unionId",
                     "value":"unionId_917875000000"
                  }
               ],
               "commChannels":[
                  {
                     "type":"mobile",
                     "value":"917685000000",
                     "primary":true,
                     "verified":true
                  },
                  {
                     "type":"email",
                     "value":"917685000000@mail.com",
                     "primary":true,
                     "verified":true
                  }
               ],
               "source":"WECHAT",
               "accountId":"WECHAT-CM"
            }
         ],
         "extendedFields":{
            "gender":"Male",
            "city":"city_6878387"
         }
      },
      "fleetCompany":{
         "externalId":"ex91747000000"
      }
   }
}
```



> Sample Response

```json
[
   {
      "entity":{
         "id":409966467,
         "profiles":[
            {
               "firstName":"Capillary",
               "lastName":"Customer",
               "attribution":{
                  "createDate":"2021-07-30T11:25:21+05:30",
                  "createdBy":{
                     "id":15071481,
                     "code":"cm.1",
                     "description":"",
                     "name":"cm.1",
                     "type":"TILL",
                     "adminType":"GENERAL",
                     "isActive":true,
                     "isOuEnabled":true,
                     "timeZoneId":0,
                     "currencyId":95,
                     "languageId":-1
                  },
                  "modifiedBy":{
                     "id":15071481,
                     "code":"cm.1",
                     "description":"",
                     "name":"cm.1",
                     "type":"TILL",
                     "adminType":"GENERAL",
                     "isActive":true,
                     "isOuEnabled":true,
                     "timeZoneId":0,
                     "currencyId":95,
                     "languageId":-1
                  },
                  "modifiedDate":"2021-07-30T11:25:21+05:30"
               },
               "fields":{
                  "gender":"MALE"
               },
               "identifiers":[
                  {
                     "type":"mobile",
                     "value":"917979015462"
                  },
                  {
                     "type":"cuid",
                     "value":"cuid_917979015462"
                  },
                  {
                     "type":"cardnumber",
                     "value":"card_917979015462",
                     "seriesCode":"FleetCard1",
                     "statusLabel":"ACTIVE",
                     "cardExternalId":"carduuid_917979015462",
                     "extendedFields":{
                        "custom_card_name":"64346srt34532323",
                        "vehicle_number":"879976453431adsgfsf"
                     }
                  },
                  {
                     "type":"unionId",
                     "value":"unionId_917979000000"
                  }
               ],
               "commChannels":[
                  {
                     "type":"mobile",
                     "value":"917979000000",
                     "primary":true,
                     "verified":true,
                     "meta":{
                        "residence":false,
                        "office":false
                     },
                     "attributes":{
                        
                     }
                  },
                  {
                     "type":"email",
                     "value":"917979000000@mail.com",
                     "primary":true,
                     "verified":true,
                     "meta":{
                        "residence":false,
                        "office":false
                     },
                     "attributes":{
                        
                     }
                  }
               ],
               "source":"WECHAT",
               "userId":409966467,
               "accountId":"WECHAT-CM",
               "conflictingProfileList":[
                  
               ],
               "autoUpdateTime":"2021-07-30T11:25:21+05:30",
               "identifiersAll":[
                  {
                     "type":"mobile",
                     "value":"917979015462"
                  },
                  {
                     "type":"cuid",
                     "value":"cuid_917979015462"
                  },
                  {
                     "type":"cardnumber",
                     "value":"card_917979015462",
                     "seriesCode":"FleetCard1",
                     "statusLabel":"ACTIVE",
                     "cardExternalId":"carduuid_917979015462",
                     "extendedFields":{
                        "custom_card_name":"64346srt34532323",
                        "vehicle_number":"879976453431adsgfsf"
                     }
                  },
                  {
                     "type":"unionId",
                     "value":"unionId_917979015462"
                  }
               ]
            }
         ],
         "loyaltyInfo":{
            "loyaltyType":"loyalty"
         },
         "segments":{
            
         },
         "referralCode":"",
         "associationDetails":{
            "hierarchyCode":"code-association2",
            "hierarchyId":21,
            "roleCode":"FA",
            "childCustomers":[
               {
                  "profiles":[
                     {
                        "firstName":"Capillary",
                        "lastName":"Customer",
                        "attribution":{
                           "createDate":"2021-07-30T11:25:21+05:30",
                           "createdBy":{
                              "id":15071481,
                              "code":"cm.1",
                              "description":"",
                              "name":"cm.1",
                              "type":"TILL",
                              "adminType":"GENERAL",
                              "isActive":true,
                              "isOuEnabled":true,
                              "timeZoneId":0,
                              "currencyId":95,
                              "languageId":-1
                           },
                           "modifiedBy":{
                              "id":15071481,
                              "code":"cm.1",
                              "description":"",
                              "name":"cm.1",
                              "type":"TILL",
                              "adminType":"GENERAL",
                              "isActive":true,
                              "isOuEnabled":true,
                              "timeZoneId":0,
                              "currencyId":95,
                              "languageId":-1
                           },
                           "modifiedDate":"2021-07-30T11:25:21+05:30"
                        },
                        "fields":{
                           "gender":"MALE"
                        },
                        "identifiers":[
                           {
                              "type":"cuid",
                              "value":"cuid_91553000000"
                           },
                           {
                              "type":"unionId",
                              "value":"unionId_91553000000"
                           },
                           {
                              "type":"cardnumber",
                              "value":"regcm0000000000182412"
                           }
                        ],
                        "commChannels":[
                           {
                              "type":"email",
                              "value":"91553000000@mail.com",
                              "primary":true,
                              "verified":true,
                              "meta":{
                                 "residence":false,
                                 "office":false
                              },
                              "attributes":{
                                 
                              }
                           }
                        ],
                        "source":"WECHAT",
                        "userId":409966468,
                        "accountId":"WECHAT-CM",
                        "conflictingProfileList":[
                           
                        ],
                        "autoUpdateTime":"2021-07-30T11:25:21+05:30",
                        "identifiersAll":[
                           {
                              "type":"cuid",
                              "value":"cuid_91553000000"
                           },
                           {
                              "type":"unionId",
                              "value":"unionId_91553000000"
                           },
                           {
                              "type":"cardnumber",
                              "value":"regcm0000000000182412"
                           }
                        ]
                     }
                  ],
                  "extendedFields":{
                     "city":"city_6878387",
                     "gender":"Male"
                  }
               },
               {
                  "profiles":[
                     {
                        "firstName":"Capillary",
                        "lastName":"Customer",
                        "attribution":{
                           "createDate":"2021-07-30T11:25:21+05:30",
                           "createdBy":{
                              "id":15071481,
                              "code":"cm.1",
                              "description":"",
                              "name":"cm.1",
                              "type":"TILL",
                              "adminType":"GENERAL",
                              "isActive":true,
                              "isOuEnabled":true,
                              "timeZoneId":0,
                              "currencyId":95,
                              "languageId":-1
                           },
                           "modifiedBy":{
                              "id":15071481,
                              "code":"cm.1",
                              "description":"",
                              "name":"cm.1",
                              "type":"TILL",
                              "adminType":"GENERAL",
                              "isActive":true,
                              "isOuEnabled":true,
                              "timeZoneId":0,
                              "currencyId":95,
                              "languageId":-1
                           },
                           "modifiedDate":"2021-07-30T11:25:21+05:30"
                        },
                        "fields":{
                           "gender":"MALE"
                        },
                        "identifiers":[
                           {
                              "type":"mobile",
                              "value":"916894126424"
                           },
                           {
                              "type":"cuid",
                              "value":"cuid_916894126424"
                           },
                           {
                              "type":"cardnumber",
                              "value":"regcm0000000000182413"
                           },
                           {
                              "type":"unionId",
                              "value":"unionId_916894126424"
                           }
                        ],
                        "commChannels":[
                           {
                              "type":"email",
                              "value":"916894126424@mail.com",
                              "primary":true,
                              "verified":true,
                              "meta":{
                                 "residence":false,
                                 "office":false
                              },
                              "attributes":{
                                 
                              }
                           },
                           {
                              "type":"mobile",
                              "value":"916894126424",
                              "primary":true,
                              "verified":true,
                              "meta":{
                                 "residence":false,
                                 "office":false
                              },
                              "attributes":{
                                 
                              }
                           }
                        ],
                        "source":"WECHAT",
                        "userId":409966469,
                        "accountId":"WECHAT-CM",
                        "conflictingProfileList":[
                           
                        ],
                        "autoUpdateTime":"2021-07-30T11:25:21+05:30",
                        "identifiersAll":[
                           {
                              "type":"mobile",
                              "value":"916894126424"
                           },
                           {
                              "type":"cuid",
                              "value":"cuid_916894126424"
                           },
                           {
                              "type":"cardnumber",
                              "value":"regcm0000000000182413"
                           },
                           {
                              "type":"unionId",
                              "value":"unionId_916894126424"
                           }
                        ]
                     }
                  ],
                  "extendedFields":{
                     "city":"city_6878387",
                     "gender":"Male"
                  }
               }
            ],
            "fleetCompany":{
               "externalId":"ex917471949194",
               "companyId":71
            },
            "childRoleCode":"FC",
            "skipLevelAllowed":false,
            "new":true,
            "childCustomer":false
         },
         "extendedFields":{
            "city":"city_6878387",
            "gender":"Male"
         },
         "warnings":[
            {
               "status":false,
               "code":19223,
               "message":"Points processing failed"
            }
         ]
      },
      "childEntities":[
         {
            "id":409966468,
            "profiles":[
               {
                  "firstName":"Capillary",
                  "lastName":"Customer",
                  "attribution":{
                     "createDate":"2021-07-30T11:25:21+05:30",
                     "createdBy":{
                        "id":15071481,
                        "code":"cm.1",
                        "description":"",
                        "name":"cm.1",
                        "type":"TILL",
                        "adminType":"GENERAL",
                        "isActive":true,
                        "isOuEnabled":true,
                        "timeZoneId":0,
                        "currencyId":95,
                        "languageId":-1
                     },
                     "modifiedBy":{
                        "id":15071481,
                        "code":"cm.1",
                        "description":"",
                        "name":"cm.1",
                        "type":"TILL",
                        "adminType":"GENERAL",
                        "isActive":true,
                        "isOuEnabled":true,
                        "timeZoneId":0,
                        "currencyId":95,
                        "languageId":-1
                     },
                     "modifiedDate":"2021-07-30T11:25:21+05:30"
                  },
                  "fields":{
                     "gender":"MALE"
                  },
                  "identifiers":[
                     {
                        "type":"cuid",
                        "value":"cuid_91553015360"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_91553015360"
                     },
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182412"
                     }
                  ],
                  "commChannels":[
                     {
                        "type":"email",
                        "value":"91553015360@mail.com",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     }
                  ],
                  "source":"WECHAT",
                  "userId":409966468,
                  "accountId":"WECHAT-CM",
                  "conflictingProfileList":[
                     
                  ],
                  "autoUpdateTime":"2021-07-30T11:25:21+05:30",
                  "identifiersAll":[
                     {
                        "type":"cuid",
                        "value":"cuid_91553015360"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_91553015360"
                     },
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182412"
                     }
                  ]
               }
            ],
            "loyaltyInfo":{
               "loyaltyType":"loyalty"
            },
            "segments":{
               
            },
            "associationDetails":{
               "hierarchyId":21,
               "roleCode":"FC",
               "fleetCompany":{
                  "externalId":"ex917471949194",
                  "companyId":71
               },
               "parentRoleId":83,
               "skipLevelAllowed":false,
               "new":true,
               "childCustomer":true
            },
            "extendedFields":{
               "city":"city_6878387",
               "gender":"Male"
            },
            "warnings":[
               {
                  "status":false,
                  "code":8056,
                  "message":"Invalid mobile"
               },
               {
                  "status":false,
                  "code":8058,
                  "message":"Invalid mobile in comm channel"
               },
               {
                  "status":false,
                  "code":19223,
                  "message":"Points processing failed"
               }
            ]
         },
         {
            "id":409966469,
            "profiles":[
               {
                  "firstName":"Capillary",
                  "lastName":"Customer",
                  "attribution":{
                     "createDate":"2021-07-30T11:25:21+05:30",
                     "createdBy":{
                        "id":15071481,
                        "code":"cm.1",
                        "description":"",
                        "name":"cm.1",
                        "type":"TILL",
                        "adminType":"GENERAL",
                        "isActive":true,
                        "isOuEnabled":true,
                        "timeZoneId":0,
                        "currencyId":95,
                        "languageId":-1
                     },
                     "modifiedBy":{
                        "id":15071481,
                        "code":"cm.1",
                        "description":"",
                        "name":"cm.1",
                        "type":"TILL",
                        "adminType":"GENERAL",
                        "isActive":true,
                        "isOuEnabled":true,
                        "timeZoneId":0,
                        "currencyId":95,
                        "languageId":-1
                     },
                     "modifiedDate":"2021-07-30T11:25:21+05:30"
                  },
                  "fields":{
                     "gender":"MALE"
                  },
                  "identifiers":[
                     {
                        "type":"mobile",
                        "value":"916894126424"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_916894126424"
                     },
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182413"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_916894126424"
                     }
                  ],
                  "commChannels":[
                     {
                        "type":"email",
                        "value":"916894126424@mail.com",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     },
                     {
                        "type":"mobile",
                        "value":"916894126424",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     }
                  ],
                  "source":"WECHAT",
                  "userId":409966469,
                  "accountId":"WECHAT-CM",
                  "conflictingProfileList":[
                     
                  ],
                  "autoUpdateTime":"2021-07-30T11:25:21+05:30",
                  "identifiersAll":[
                     {
                        "type":"mobile",
                        "value":"916894126424"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_916894126424"
                     },
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182413"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_916894126424"
                     }
                  ]
               }
            ],
            "loyaltyInfo":{
               "loyaltyType":"loyalty"
            },
            "segments":{
               
            },
            "associationDetails":{
               "hierarchyId":21,
               "roleCode":"FC",
               "fleetCompany":{
                  "externalId":"ex9174710000",
                  "companyId":71
               },
               "parentRoleId":83,
               "skipLevelAllowed":false,
               "new":true,
               "childCustomer":true
            },
            "extendedFields":{
               "city":"city_6878387",
               "gender":"Male"
            },
            "warnings":[
               {
                  "status":false,
                  "code":19223,
                  "message":"Points processing failed"
               }
            ]
         }
      ],
      "childCount":2,
      "childFailureCount":0,
      "childSuccessCount":2
   }
]
```



	



### Resource Information
| | |
--------- | ----------- |
URI | `customers/bulk`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

<aside class="notice">Batch support is for normal customer registration. </aside>

### Request URL

`{host}/v2/customers/bulk`


### Request Body Parameters

Parameter | Type | Description
--------- | ----- | -----------
loyaltyType* | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
profiles | obj | Meta information of the customer.
identifiers* | obj | Identifiers of the customer in type and value. 
type | enum | Type of the customer identifier. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`, and `card` (to issue loyalty card to the customers through registration).
value | string | Value of the specified identifier. For the `type` card, `value` is card number.
seriesId | int | Card series ID (for card series generated in Capillary). Required for the identifier `type`,  `card`.
seriesCode | string | Unique card series code (for external card series). Applicable for the identifier `type`,  `card`.
statusLabel | string | User defined card status. Required for the identifier `type`,  `card`.
lastViewedDate** | Date | Date when the customer recently opened the app. Applicable for the channel `mobilePush`.
loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program.
programId | int | Unique ID of the loyalty program in which you want to enroll.
tierNumber | int | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lowest tier, `2` for the subsequent tier, and so on.
loyaltyPoints | int | Loyalty points to credit in customer's account.
tierExpiryDate | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
pointsExpiryDate | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
hierarchyCode | string | Unique code of the hierarchy to associate with the customer/company. All configurations set for the hierarchy will be applicable to the customer/company.
roleCode | string | Pre defined role code - Role of the customer in the hierarchy.
parentCustomer | obj | User profile of the parent customer.
fleetCompany | obj | Details of the company the customer is associated with.
childCustomers | obj | Profiles of the child customers.
externalId | string | External ID of the company.
profiles | obj | Details of the customer to associate.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
identifiers* | obj | Identifiers of the customer in type and value. 
type | enum | Type of the customer identifier. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`, and `card` (to issue loyalty card to the customers through registration).
value | string | Value of the specified identifier. For the `type` card, `value` is card number.
commChannels | obj | Available communication channels of the customer. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line`, `mobilePush`.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
createDate | date-time | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format. Example: 2016-06-23T19:11:18+08:00
associatedWith | string | The TILL code associated with the customer registration.
extendedFields | obj | Customer level extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes for values.
fields | obj | Custom field details of customers in key-value pairs.




<aside class="notice">Parameters marked with * are mandatory. </aside>






## Update Association Details (for Customer/Company)



Lets you update group customer details.

```html
http://eu.api.capillarytech.com/v2/customers/bulk?source=WECHAT&accountId=WECHAT-CM
```

> Sample PUT Request

```json
[{
  "profiles": [
    {
       "firstName": "Tom",
      "lastName": "Sawyer",
      "identifiers": [
        {
          "type": "mobile",
          "value": "915905000000"
        },
        {
          "type": "cuid",
          "value": "cuid_915905000000"
        },
        {
          "type": "unionId",
          "value": "unionId_915905000000"
        }
      ],
      "commChannels": [
        {
          "type": "mobile",
          "value": "915905000000",
          "primary": true,
          "verified": true
        },
        {
          "type": "email",
          "value": "915905000000@mail.com",
          "primary": true,
          "verified": true
        }
      ],
      "source": "WECHAT",
      "accountId": "WECHAT-CM"
    }
  ],
  "extendedFields": {
    "gender": "Male",
    "city": "city_6878387"
  },
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "referralCode": "",
  "associationDetails": {
    "hierarchyCode": "code-association2",
      "roleCode": "FA",
    "parentCustomer": 
      {
        "profiles": [
          {
            "firstName": "Jim",
      	    "lastName": "Solace",
            "identifiers": [
              {
                "type": "mobile",
                "value": "919905000000"
              },
              {
                "type": "cuid",
                "value": "cuid_919905000000"
              },
              {
                "type": "unionId",
                "value": "unionId_919905000000"
              }
            ],
            "commChannels": [
              {
                "type": "mobile",
                "value": "919905000000",
                "primary": true,
                "verified": true
              },
              {
                "type": "email",
                "value": "919905000000@mail.com",
                "primary": true,
                "verified": true
              }
            ],
            "source": "WECHAT",
            "accountId": "WECHAT-CM"
          }
        ],
        "extendedFields": {
          "gender": "Male",
          "city": "city_6878387"
        }
      },
    "fleetCompany": {
      "externalId": "ex917471000000"
    }
  }
}]
```

> Sample Response

```json
[
   {
      "profiles":[
         {
            "firstName":"Tom",
            "lastName":"Sawyer",
            "attribution":{
               "createDate":"2021-08-03T17:05:38+05:30",
               "createdBy":{
                  
               },
               "modifiedBy":{
                  
               },
               "modifiedDate":"2021-08-03T17:05:38+05:30"
            },
            "fields":{
               
            },
            "identifiers":[
               {
                  "type":"unionId",
                  "value":"unionId_915905000000"
               },
               {
                  "type":"cuid",
                  "value":"cuid_915905000000"
               },
               {
                  "type":"mobile",
                  "value":"915905000000"
               }
            ],
            "commChannels":[
               {
                  "type":"email",
                  "value":"915905000000@mail.com",
                  "primary":true,
                  "verified":true,
                  "meta":{
                     "residence":false,
                     "office":false
                  },
                  "attributes":{
                     
                  }
               },
               {
                  "type":"mobile",
                  "value":"915905000000",
                  "primary":true,
                  "verified":true,
                  "meta":{
                     "residence":false,
                     "office":false
                  },
                  "attributes":{
                     
                  }
               }
            ],
            "source":"WECHAT",
            "accountId":"WECHAT-CM",
            "conflictingProfileList":[
               
            ],
            "autoUpdateTime":"2021-08-03T17:05:38+05:30",
            "identifiersAll":[
               {
                  "type":"unionId",
                  "value":"unionId_915905000000"
               },
               {
                  "type":"cuid",
                  "value":"cuid_915905000000"
               },
               {
                  "type":"mobile",
                  "value":"915905000000"
               }
            ]
         }
      ],
      "loyaltyInfo":{
         "loyaltyType":"loyalty"
      },
      "segments":{
         
      },
      "referralCode":"",
      "associationDetails":{
         "hierarchyCode":"code-association2",
         "roleCode":"FA",
         "parentCustomer":{
            "profiles":[
               {
                  "firstName":"Jim",
                  "lastName":"Solace",
                  "attribution":{
                     "createDate":"2021-08-03T17:05:38+05:30",
                     "createdBy":{
                        
                     },
                     "modifiedBy":{
                        
                     },
                     "modifiedDate":"2021-08-03T17:05:38+05:30"
                  },
                  "fields":{
                     
                  },
                  "identifiers":[
                     {
                        "type":"cuid",
                        "value":"cuid_919905000000"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_919905000000"
                     },
                     {
                        "type":"mobile",
                        "value":"919905000000"
                     }
                  ],
                  "commChannels":[
                     {
                        "type":"mobile",
                        "value":"919905000000",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     },
                     {
                        "type":"email",
                        "value":"919905000000@mail.com",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     }
                  ],
                  "source":"WECHAT",
                  "accountId":"WECHAT-CM",
                  "conflictingProfileList":[
                     
                  ],
                  "autoUpdateTime":"2021-08-03T17:05:38+05:30",
                  "identifiersAll":[
                     {
                        "type":"cuid",
                        "value":"cuid_919905000000"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_919905000000"
                     },
                     {
                        "type":"mobile",
                        "value":"919905000000"
                     }
                  ]
               }
            ],
            "extendedFields":{
               "city":"city_6878387",
               "gender":"Male"
            }
         },
         "fleetCompany":{
            "externalId":"ex917471000000"
         },
         "skipLevelAllowed":false,
         "new":true,
         "childCustomer":false
      },
      "extendedFields":{
         "city":"city_6878387",
         "gender":"Male"
      },
      "errors":[
         {}
      ]
   }
]
```

### Resource Information
| | |
--------- | ----------- |
URI | `/bulk?{queryParam}={paramValue}'
Authentication | Yes
HTTP Method | PUT
Batch Support | Yes


### Request URL

`{host}/v2/customers/search?{queryParam}={paramValue}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
source* | enum | Source on which the customer details need to be updated Values: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.
accountId** | string | The account id of the specific source. Required for sources with multiple accounts such as WeChat or Facebook.

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
### Request Body Parameters
Parameter | Type | Description
--------- | ----- | -----------
loyaltyType* | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
profiles | obj | Meta information of the customer.
identifiers* | obj | Identifiers of the customer in type and value. 
type | enum | Type of the customer identifier. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`, and `card` (to issue loyalty card to the customers through registration).
value | string | Value of the specified identifier. For the `type` card, `value` is card number.
seriesId | int | Card series ID (for card series generated in Capillary). Required for the identifier `type`,  `card`.
seriesCode | string | Unique card series code (for external card series). Applicable for the identifier `type`,  `card`.
statusLabel | string | User defined card status. Required for the identifier `type`,  `card`.
lastViewedDate** | Date | Date when the customer recently opened the app. Applicable for the channel `mobilePush`.
loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program.
programId | int | Unique ID of the loyalty program in which you want to enroll.
tierNumber | int | Sequence number of the tier that you want to allocate to the customer. For example, `1` for the lowest tier, `2` for the subsequent tier, and so on.
loyaltyPoints | int | Loyalty points to credit in customer's account.
tierExpiryDate | date-time | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
pointsExpiryDate | date-time | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
hierarchyCode | string | Unique code of the hierarchy to associate with the customer/company.
roleCode | string | Pre defined role code.
childCustomers | obj | Details of child customers.
profiles | obj | Details of the customer to associate.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
identifiers* | obj | Identifiers of the customer in type and value. 
type | enum | Type of the customer identifier. Values: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, `mobilePush`, and `line`, and `card` (to issue loyalty card to the customers through registration).
value | string | Value of the specified identifier. For the `type` card, `value` is card number.
commChannels | obj | Available communication channels of the customer. Value: `mobile`, `email`, `wechat`, `ios`, `android`, `line`, `mobilePush`.
Firstname | string | First name of the customer.
Lastname | string | Last name of the customer.
createDate | date-time | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format. Example: 2016-06-23T19:11:18+08:00
associatedWith | string | The TILL code associated with the customer registration.
extendedFields | obj | Customer level extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes for values.
fields | obj | Custom field details of customers in key-value pairs.
fleetCompany | obj | Details of 
externalId | string | External ID of the company.



<aside class="notice">Parameters marked with * are mandatory. </aside>





## Get Customers (Group Loyalty)

Retrieves all child customers for a parent customer. 

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/bulk?source=WECHAT&accountId=WECHAT-CM&associationEntityType=parentCustomer&associationEntityIdentifierType=mobile&associationEntityIdentifierValue=917169721931&limit=10&offset=0&sortOrder=DESC
```

> Sample Response

```json
{
   "entity":{
      "customers":[
         {
            "profiles":[
               {
                  "firstName":"Capillary",
                  "lastName":"Customer",
                  "fields":{
                     "gender":"MALE"
                  },
                  "identifiers":[
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182418"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_91677872472"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_91677872472"
                     }
                  ],
                  "commChannels":[
                     {
                        "type":"email",
                        "value":"91677872472@mail.com",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     }
                  ],
                  "source":"WECHAT",
                  "userId":409967645,
                  "accountId":"WECHAT-CM",
                  "conflictingProfileList":[
                     
                  ],
                  "autoUpdateTime":"2021-07-30T16:43:25+05:30",
                  "identifiersAll":[
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182418"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_91677872472"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_91677872472"
                     }
                  ]
               }
            ],
            "extendedFields":{
               "city":"city_6878387",
               "gender":"Male"
            }
         },
         {
            "profiles":[
               {
                  "firstName":"Capillary",
                  "lastName":"Customer",
                  "fields":{
                     "gender":"MALE"
                  },
                  "identifiers":[
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182417"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_915610000000"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_915610000000"
                     }
                  ],
                  "commChannels":[
                     {
                        "type":"email",
                        "value":"915610000000@mail.com",
                        "primary":true,
                        "verified":true,
                        "meta":{
                           "residence":false,
                           "office":false
                        },
                        "attributes":{
                           
                        }
                     }
                  ],
                  "source":"WECHAT",
                  "userId":409967644,
                  "accountId":"WECHAT-CM",
                  "conflictingProfileList":[
                     
                  ],
                  "autoUpdateTime":"2021-07-30T16:43:25+05:30",
                  "identifiersAll":[
                     {
                        "type":"cardnumber",
                        "value":"regcm0000000000182417"
                     },
                     {
                        "type":"unionId",
                        "value":"unionId_915610000000"
                     },
                     {
                        "type":"cuid",
                        "value":"cuid_915610000000"
                     }
                  ]
               }
            ],
            "extendedFields":{
               "city":"city_6878387",
               "gender":"Male"
            }
         }
      ],
      "count":2,
      "errors":[
         
      ],
      "warnings":[
         
      ]
   },
   "warnings":[
      
   ],
   "errors":[
      
   ],
   "success":true
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `customers/bulk?{queryParam}={paramValue}`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes



### Request URL

`{host}/v2/customers/bulk?{queryParam}={paramValue}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
source* | enum | Source from which you want to fetch customer details. Values: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL
accountId** | string | Account ID for sources with multiple accounts. This is required for required for sources with multiple accounts such as WeChat or Facebook.
associationEntityType | enum | Pass `parentCustomer`.
associationEntityIdentifierType | enum | Identifier type used for parent customer. Value: `mobile`, `email`, `externalId`, `cardnumber`, `wechat`, `martjackId`, `fbId`. 
associationEntityIdentifierValue | string | Value of the parent customer.
limit | int | Limit the number of results to retrieve.
sortBy | enum | Lets you sort the list by created date, `createdon` or last updated date, `lastUpdatedOn`.
sortOrder | enum | Sort the results in ascending, `ASC` or descending, `DESC` order of sortBy

<aside class="notice">Parameters marked with * are mandatory.</aside>




## Get Customers (Advanced Customer Search)

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
`{host}/v2/customers/search?q={search keyword}`


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

Lets you fetch unique ID of a customer generated internally. This is required for customer related activities such as fetch customer details, update customer details, manage subscription details and other activities.


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup?{query parameters}'
Authentication | Yes
HTTP Method | GET
Batch Support | No



### Request URL
`{host}/v2/customers/lookup?source={SourceName}&accountId={accountId}&identifierName={IdentifierName}&identifierValue={IdentifierValue}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
source* | enum | Specify the source from which you want to fetch the customer details. Values: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.
accountId | string | Specify the account id of the specific source if the source has multiple accounts. `accountId` is required for sources with multiple accounts such as WeChat or Facebook.
identifierName* | enum | Identifier based on which you want to fetch the customer id. **Values**: `mobile`, `email`, `externalId`, `cardnumber`, `wechat`, `martjackId`,`fbId`.
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



## Fetch Customer Details (by User ID)


> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/17742?source=WECHAT&accountId=22232
```

> Sample Response

```json
{
   "id":17742,
   "profiles":[
      {
         "firstName":"Tom",
         "lastName":"Sawyer",
         "attribution":{
            "createDate":"2016-06-23T19:11:18+08:00",
            "createdBy":{
               "code":"rr.till",
               "description":"",
               "name":"rr.till",
               "type":"TILL"
            },
            "modifiedBy":{
               "code":"rr.till",
               "description":"",
               "name":"rr.till",
               "type":"TILL"
            },
            "modifiedDate":"2016-08-12T18:50:23+08:00"
         },
         "fields":{
            "Gender":"Male",
            "Favorite Color":"Green"
         },
         "identifiers":[
            {
               "type":"line",
               "value":"lineAS6"
            },
            {
               "type":"cardNumber",
               "value":"TTM001110000000002ZS",
               "seriesId":19,
               "statusLabel":"ACTIVE"
            },
            {
               "type":"email",
               "value":"tom.sawyer@example.com"
            }
         ],
         "commChannels":[
            {
               "type":"wechat",
               "value":"ojOPTwFOX-aBmdRlE9MHptPjt2w19",
               "primary":true,
               "verified":true,
               "meta":{
                  "residence":false,
                  "office":false
               }
            },
            {
               "type":"email",
               "value":"tom@eail.com",
               "primary":true,
               "verified":false,
               "meta":{
                  "residence":false,
                  "office":false
               },
               "attributes":{
                  
               }
            }
         ],
         "source":"WECHAT",
         "userId":17742,
         "accountId":"wechat-con1",
         "conflictingProfileList":[
            
         ],
         "autoUpdateTime":"2016-08-12T18:50:23+08:00",
         "identifiersAll":[
            {
               "type":"mobile",
               "value":"916722173368"
            },
            {
               "type":"email",
               "value":"6722173368@mail.com"
            }
         ]
      }
   ],
   "loyaltyInfo":{
      "loyaltyType":"non_loyalty",
      "attributionV2":{
         "createDate":"2016-06-23T19:11:18+08:00",
         "createdBy":{
            "code":"rr.till",
            "name":"rr.till"
         },
         "modifiedBy":{
            "code":"rr.till",
            "name":"rr.till"
         },
         "modifiedDate":"2016-08-12T18:50:23+08:00"
      },
      "lifetimePurchases":230
   },
   "segments":{
      
   },
   "extendedFields":{
      "city":"Bangalore",
      "gender":"Male"
   },
   "cardDetails":[
      {
         "cardId":418,
         "issuedDate":"2021-11-23T10:01:33Z",
         "createdDate":"2021-11-23",
         "expiryDays":0,
         "seriesName":"sushicard",
         "customerId":341594630,
         "maxActiveCards":60,
         "cardExternalId":"orea7",
         "extendedFields":{
            "advance_card_personalisation":"yes",
            "card_balance":1000.0,
            "year_of_registration":18
         },
         "customFields":{
            "cardname":"sushi",
            "cardscope":"global",
            "cardtype":"pro card"
         },
         "type":"DIGITAL",
         "cardNumber":"visasushi006",
         "seriesId":23,
         "seriesCode":"422",
         "orgId":50247,
         "entityId":50016843,
         "statusInfo":{
            "reason":"",
            "createdBy":50016843,
            "actions":[
               
            ],
            "autoUpdateTime":"2021-11-23",
            "createdOn":"2021-11-23T10:01:33Z",
            "entityId":418,
            "id":478,
            "isActive":true,
            "labelId":31,
            "label":"ACTIVE",
            "status":"ACTIVE"
         },
         "id":418,
         "transactionNotAllowed":true
      }
   ],
   "warnings":[
      
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
 
 
> When embed=mlp, you will see the details of each loyalty program of the customer.
 
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

> embed=promotionalPoints, to see the summary of customer's promotional points
 
```json
...
"promotionalPoints": {
        "customerPromotionType": [
            {
                "points": 200.0,
                "issuedAt": {
                    "code": "store",
                    "name": "store 10"
                },
                "issuedOn": "2019-12-12T11:23:03+05:30",
                "expiryDate": "2020-12-31T23:59:59+05:30",
                "promotionSource": {
                    "promotionSourceId": -1,
                    "promotionSourceType": "GOODWILL"
                },
                "programId": 1016,
                "promotionName": "Goodwill Promotion"
            },
            {
                "points": 34.0,
                "issuedAt": {
                    "code": "store",
                    "name": "store 10"
                },
                "issuedOn": "2019-10-31T14:49:51+05:30",
                "expiryDate": "2020-10-31T23:59:59+05:30",
                "promotionSource": {
                    "promotionSourceId": -1,
                    "promotionSourceType": "GOODWILL"
                },
                "programId": 1016,
                "promotionName": "Goodwill Promotion"
            },
            {
                "points": 32.0,
                "issuedAt": {
                    "code": "store",
                    "name": "store 10"
                },
                "issuedOn": "2019-10-31T14:49:03+05:30",
                "expiryDate": "2020-10-31T23:59:59+05:30",
                "promotionSource": {
                    "promotionSourceId": -1,
                    "promotionSourceType": "GOODWILL"
                },
                "programId": 1016,
                "promotionName": "Goodwill Promotion"
            }
        ],
        "transactionPromotionType": [],
        "lineitemPromotionType": []
    },

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
`{host}/v2/customers/{customerId}?source={sourceName}&accountId={accountId}`

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
embed | enum | To include the details of a specific entity in response. Value: `points`, `subscriptions`, `mlp` (multi-loyalty program details), `promotionalPoints`, `expirySchedules`, `expiredPoints`. For example, `embed=expiredPoints` retrieves the summary of expired points of the customer. <br>Usage: <code>{host}/v2/customers/{CustomerId}/source=INSTORE&&embed=points</code>.

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
            "redeemed": 40.11,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 1050.0,
            "loyaltyPoints": 1009.89,
            "cumulativePurchases": 9500.0,
            "loyaltyId": 86637581,
            "currentSlab": "SILVER",
            "nextSlab": "GOLD",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "GOLD",
            "slabSNo": 1,
            "slabExpiryDate": "2120-11-10T23:59:59+05:30",
            "programId": 622,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 250.0,
            "totalAvailablePoints": 1009.89,
            "totalReturnedPoints": 250.0,
            "linkedPartnerPrograms": [
                {
                    "partnerProgramId": 5,
                    "partnerProgramName": "1stProgram",
                    "partnerProgramDescription": "1stProgram",
                    "partnerTierNumber": 1,
                    "partnerTierName": "1stSlab",
                    "partnerTierExpiryDate": "2022-12-29T23:59:59+05:30",
                    "partnerMembershipId": "916215776456",
                    "partnerProgramType": "EXTERNAL",
                    "tierBased": true
                },
                {
                    "partnerProgramId": 11,
                    "partnerProgramName": "NoTierPartnerProgram",
                    "partnerProgramDescription": "NoTierPartnerProgram",
                    "partnerMembershipId": "916215776456",
                    "partnerProgramType": "EXTERNAL",
                    "tierBased": false
                }
            ]
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
`{host}/v2/customers/{customerId}/loyaltyDetails`

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
            "type": "OPTOUT",
			"orgUnitId": 200031782,
			"sourceName": "INSTORE"
        },
        {
            "channel": "MOBILE",
            "accountId": "",
            "priority": "BULK",
            "type": "OPTOUT",
			"orgUnitId": 200031782,
			"sourceName": "INSTORE"
        }, 
        {
            "channel": "EMAIL",
            "accountId": "",
            "priority": "TRANS",
            "type": "OPTIN",
			"orgUnitId": 200031782,
			"sourceName": "INSTORE"
        },
        {
            "channel": "MOBILE",
            "accountId": "123",
            "priority": "TRANS",
            "type": "OPTIN",
			"orgUnitId": 200031782,
			"sourceName": "WECHAT"
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

Subscription represents communication channels to which a customer has subscribed. Capillary supports the following channels - `mobile`, `email`, `wechat`, `whatsapp`, `ios`, `android`, and `line`.

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
`{host}/v2/customers/{customerId}/subscriptions`

### Request Parameters
Parameter | Description
--------- | -----------
customerId* | Unique ID of the customer whose subscription details you want to modify
channel | Pass the communication channel that you want to update. **Value**: `mobile`, `email`, `wechat`, `whatsapp`, `ios`, `android`, and `line`.
priority | Type of service for which you want to modify the subscription details.`TRANS` for personalized messages and `BULK` for campaign or bulk messages
type | `OPTIN` to subscribe and `OPTOUT` to unsubscribe.
orgUnitId | long | Concept ID or org unit ID to update subscription details of for an org unit.
sourceName | Source in which the identifier is registered. Values: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.

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
`{host}/v2/customers/{customerId}/subscriptions`

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

`{host}/v2/customers/{userId}/pointsTransfers`

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

`{host}/v2/customers/{customerId}/retroRequest?{queryParameters}`


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

## Get Identifier Change Requests

Retrieves the details of identifiers (mobile number/email ID/external ID)change requests. You can also fetch change requests of a specific identifier type using the query parameters.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/130238908/changeRequest?source=INSTORE
```

> Sample Response

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "id": 560739,
            "status": "APPROVED",
            "addedBy": {
                "id": 75030996,
                "code": "1552291147_",
                "description": "",
                "name": "Henry",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "updatedBy": {
                "id": 75030996,
                "code": "1552291147",
                "description": "",
                "name": "Henry",
                "type": "ADMIN_USER",
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 0,
                "currencyId": 0,
                "languageId": 0
            },
            "addedOn": "2020-02-12T09:58:41Z",
            "updatedOn": "2020-02-12T09:58:41Z",
            "userId": 130238908,
            "changeType": "EMAIL",
            "changeIdentifiers": {
                "add": [
                    {
                        "type": "EMAIL",
                        "value": "iwan.gold@example.com"
                    }
                ],
                "remove": [
                    {
                        "type": "EMAIL",
                        "value": "dore.gold@example
						.com"
                    }
                ]
            },
            "comments": "auto approved by 75030996",
            "secUserId": 0,
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
URI | `/{customerId}/changeRequest`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`{host}/v2/customers/{customerId}/changeRequest?queryParams

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
customerId* | long | Unique ID of the customer to get the details of change requests.
offset | int | Fetches change requests > the offset number. Offset is the position of the lead in the db record. The value is assigned based on the sequence of creation. . For example, offset=10 retrieves all the leads from record number 11.
source | enum | Source in which want to fetch details. Values: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. For sources with multiple accounts such as WECHAT, FACEBOOK, MOBILE_APP, or LINE,
changeType | enum | Fetch details of a specific identifier change. Values: `EMAIL`, `MOBILE`, `EXTERNAL_ID`, `MERGE`, `MOBILE_REALLOC`, `COUPON`, `POINTS`, `TIER`, `RETRO`. 
limit | int | Limit the number of results to retrieve.
sortBy | enum | Lets you sort the list by created date, `createdon` or last updated date, `lastUpdatedOn`.
sortOrder | Sort the results in ascending, `ASC` or descending, `DESC` order of sortBy
startDate | date-time | Fetch change requests added on or after a specific date. Pass the date in `YYYY-MM-DD` format.
endDate | date-time | Fetch change requests added on or before a specific date. Pass the date in `YYYY-MM-DD` format.
startId | long | Fetch change requests greater than or equal to a specific request ID range.
endId | long | Fetch change requests less than or equal to a specific request ID range.
 
<aside class="notice">Parameter marked with * is mandatory. </aside>




## Get Customer Goodwill Requests

Retrieves the history of goodwill points of a customer.

> Sample Request

```html
http://api.capillary.co.in/v2/customers/343040815/goodwillRequest
```

> Sample Response

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
            "enteredBy": {
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
            "enteredBy": {
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

`{host}/v2/customers/{customerId}/goodwillRequest

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
currencyId* | long | Pass the unique ID of the customer whose goodwill request details you want to fetch.
requestId | long | Unique id of the goodwill request that you want to fetch.
is_one_step_change | boolean | Pass `true` to fetch goodwill points or coupon requests that are issued instantly (one step issual).
programId | string | Get requests of a specific loyalty program. Pass the unique loyalty program ID.
autoApprove | boolean | Pass `true` to fetch requests that are auto-approved - without the involvement of the back-end team.

<aside class="notice">Parameters marked with * are mandatory. </aside>


## Get Customer Coupons (Basic)

Retrieves the history of a customer coupons with basic coupon details.

> Sample Request

```html
http://api.capillary.co.in/v2/customers/coupons?id=401031250
```

> Sample Response

```json
{
   "entity":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":4
      },
      "customers":[
         {
            "firstname":"Tom",
            "lastname":"Sawyer",
            "mobile":"918860000001",
            "id":401031250,
            "coupons":[
               {
                  "code":"KNRYHMRW",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000028,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     
                  ]
               },
               {
                  "code":"7TF6TBQB",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000029,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     
                  ]
               },
               {
                  "code":"6JAFX7ZF",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000026,
                  "createdDate":"2021-09-25T16:25:25+05:30",
                  "transactionNumber":"2147877651",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     
                  ]
               },
               {
                  "code":"KZWMCYTR",
                  "seriesId":14162,
                  "description":"Mobile Push offer 1",
                  "validTill":"2022-03-20T00:00:00+05:30",
                  "discountType":"PERC",
                  "discountValue":10.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":397755229,
                  "createdDate":"2021-09-01T17:53:43+05:30",
                  "transactionNumber":"2147861881",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     
                  ]
               }
            ]
         }
      ]
   },
   "warnings":[
      
   ],
   "errors":[
      
   ],
   "success":true
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/v2/customers/coupons?{queryParams}`
HTTP Method | GET
API Version | v2
Batch Support | Yes
Rate Limited | Yes

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | ------------
mobile/email/externalId/id* | string | Any identifier of the customer to fetch coupons. For example, `id=9876547`.
status | enum | Filter results by coupon status. Value: `Active`, `Redeemed`, `Unexpired`, `Unredeemed`, `Active_Redeemed` (coupon is active but redeemed), `Active_Unredeemed` (coupon is active but not redeemed), `Expired_Redeemed` (coupon is expired but redeemed),and `Expired_Unredeemed` (coupon is expired and not redeemed).








### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
pagination | obj | Pagination details of the results retrieved.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limit | int | Limit of results. Usually the default limit `100`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset | int | Number of records ignored from the top. Default value:0.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total | int | Total number of results retrieved.
customers | array-obj | Details of the customer and coupons.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstname | string | First name of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastname | string | Last name of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile | string | Registered mobile number of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id | long | Unique internal ID of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coupons | array-obj | Details of customer coupons.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code | string | Unique coupon code.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;seriesId | long | Series ID associated with the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | Description of the coupon series.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validTill | date-time | Validity of the coupon in ISO `8601` format.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discountType | enum | Type of the discount. Value: absolute (`ABS`), or percentage ().
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discountValue | float | Discount amount in the org currency.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discountUpto | float | Amount capping on the discount for the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;redemptionCount | int | Number of times the coupon is redeemed.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;redemptionsLeft | int | Number of redemptions left for the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id | long | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdDate | date-time | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactionNumber | string | Unique transaction number.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;issuedAt | obj | Details of the store entity associated with the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code | string | Org entity code associated with the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the org entity associated with the coupon.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;redemptions | array | Redemption IDs of the coupon (if redeemed).


## Set Customer Image

Lets you set a customer's profile image.

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/343014824/setImage
```

```curl
curl -i -X POST \
   -H "Authorization:Basic a3Jpc2huYS50aWxsMDE6MjAyY2I5NjJhYzU5MDc1Yjk2NmQyMzRiNzA=" \
   -H "Content-Type:multipart/form-data" \
   -H "Accept:application/json" \
   -F "file=@\"./Screenshot 2021-11-07 at 12.30.24 PM.png\";type=image/png;filename=\"Screenshot 2021-11-07 at 12.30.24 PM.png\"" \
 'https://eu.api.capillarytech.com/v2/customers/343014824/setImage'
```

> Sample Response

```json
{
    "data": [
        {
            "code": 200,
            "file": {
                "acl": "PRIVATE",
                "fileHandle": "a014949a-0822-48b3-90ad-73908174147d",
                "lastModified": "2021-11-24 08:59:40",
                "latestVersion": 2,
                "name": "50583/343014824/0",
                "namespace": "customerImage",
                "s3Token": "customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420",
                "version": 2
            },
            "message": "Successfully uploaded file",
            "status": "true"
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `/v2/customers/{userId}/setImage`
HTTP Method | POST
API Version | v2
Batch Support | No
Rate Limited | Yes

### Request Headers

Header | Description
--------- | ------------
Content-Type* | Pass the relevant value such as `multipart/form-data`.


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | ------------
userId* | long | Unique ID of the customer to whom the image needs to be set.

<aside class="notice">Use file upload method in the POST body of form-data.</aside>



## Get Customer Image

Retrieves profile image set for a customer.

> Sample Request

```html
http://eu.api.capillarytech.com/v2/customers/343014824?embed=CUSTOMERIMAGE&source=INSTORE&accountId
```


> Sample Response

```json
{
    "id": 343014824,
    "profiles": [
        {
            "firstName": "Jim",
            "lastName": "Carv",
            "attribution": {
                "createDate": "2019-10-15T12:51:33+05:30",
                "createdBy": {
                    "id": 50019411,
                    "code": "admin.till01",
                    "name": "admin.till01",
                    "type": "TILL"
                },
                "modifiedBy": {
                    "id": 50019411,
                    "code": "krishna.till01",
                    "name": "krishna.till01",
                    "type": "TILL"
                },
                "modifiedDate": "2021-11-24T15:01:59+05:30"
            },
            "fields": {
                "age_group": "“22-25”",
                "birthday": "1971-5-7",
                "gender": "“MALE”"
            },
            "identifiers": [
                {
                    "type": "email",
                    "value": "jimc@example.com"
                },
                {
                    "type": "externalId",
                    "value": "0RE100003436"
                },
                {
                    "type": "mobile",
                    "value": "919750000000"
                }
            ],
            "commChannels": [
                {
                    "type": "email",
                    "value": "jimc@example.com",
                    "primary": true,
                    "verified": false,
                    "meta": {
                        "residence": false,
                        "office": false
                    },
                    "attributes": {}
                },
                {
                    "type": "mobile",
                    "value": "919750000000",
                    "primary": true,
                    "verified": false,
                    "meta": {
                        "residence": false,
                        "office": false
                    },
                    "attributes": {}
                }
            ],
            "source": "INSTORE",
            "userId": 343014824,
            "accountId": "",
            "conflictingProfileList": [],
            "autoUpdateTime": "2021-11-24T21:06:43+05:30",
            "identifiersAll": [
                {
                    "type": "email",
                    "value": "jimc@example.com"
                },
                {
                    "type": "externalId",
                    "value": "0RE100003436"
                },
                {
                    "type": "mobile",
                    "value": "919750000000"
                }
            ]
        }
    ],
    "loyaltyInfo": {
        "loyaltyType": "loyalty",
        "attributionV2": {
            "createDate": "2019-10-15T12:51:33+05:30",
            "createdBy": {
                "id": 50019411,
                "code": "admin.till01",
                "name": "admin.till01",
                "type": "TILL"
            },
            "modifiedBy": {
                "id": 50019411,
                "code": "admin.till01",
                "name": "admin.till01",
                "type": "TILL"
            },
            "modifiedDate": "2021-11-24T15:01:59+05:30",
            "createdFromSource": "instore"
        },
        "lifetimePurchases": 106746.0
    },
    "segments": {},
    "associatedWith": "admin.till01",
    "customerImage": [
        {
            "code": 200,
            "file": {
                "acl": "PRIVATE",
                "fileHandle": "a014949a-0822-48b3-90ad-73908174147d",
                "lastModified": "2021-11-24 08:59:41",
                "latestVersion": 2,
                "name": "50583/343014824/0",
                "namespace": "customerImage",
                "s3Token": "customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420",
                "version": 2
            },
            "filePath": "https://crm-nightly-new-fileservice.s3.amazonaws.com/customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420?X-Amz-Security-Token=FwoGZXIvYXdzEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDEDq2Tn1ItklX4VVhSLaAUT9zP5d%2FxzNVe2TtcWdEaeTf55VZVbrDPQ8AeG9o9x1qm%2BICsixrTztU0y5YamO5l3KrRjlpDn98j%2BVmWhLBdRhRZQViozyPAtSdvyV0InJ9BiPhBkzxIUqKfZQwKPNx6zDZ2vWZBrWTj3e%2F7tEtpWuDxiiPBuS8%2BDMbSYmd3XUIQkVAQ2sF3Qdu7FvwHGrJuTDKnHy0fFAfAKm10iGre6GLcRqgcKx1Z%2FwW0a1p9gzo5%2FZdxrS5RMn%2BBPS2AryFAfC2VATN5L%2BatffpmMV5ImpflDqxDeKCJFKKKyx%2BYwGMi2Evg3JoEH1Px9kSXPkddsc5IYJZv01WK4AEfgQ1BSK3aAmnv096M7HoJI8rjE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211124T153643Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNJ3V5GF4Y%2F20211124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebe65cfe0b660ba71dfc81937d7a15c981316d1af1c02c1e4b7aa22e394f04",
            "message": "Success",
            "secureFilePath": "https://crm-nightly-new-fileservice.s3.amazonaws.com/customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420?X-Amz-Security-Token=FwoGZXIvYXdzEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDEDq2Tn1ItklX4VVhSLaAUT9zP5d%2FxzNVe2TtcWdEaeTf55VZVbrDPQ8AeG9o9x1qm%2BICsixrTztU0y5YamO5l3KrRjlpDn98j%2BVmWhLBdRhRZQViozyPAtSdvyV0InJ9BiPhBkzxIUqKfZQwKPNx6zDZ2vWZBrWTj3e%2F7tEtpWuDxiiPBuS8%2BDMbSYmd3XUIQkVAQ2sF3Qdu7FvwHGrJuTDKnHy0fFAfAKm10iGre6GLcRqgcKx1Z%2FwW0a1p9gzo5%2FZdxrS5RMn%2BBPS2AryFAfC2VATN5L%2BatffpmMV5ImpflDqxDeKCJFKKKyx%2BYwGMi2Evg3JoEH1Px9kSXPkddsc5IYJZv01WK4AEfgQ1BSK3aAmnv096M7HoJI8rjE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211124T153643Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNJ3V5GF4Y%2F20211124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebe65cfe0b660ba71dfc81619d7a15c981316d1af1c02c1e4b7aa22e394f04",
            "status": "true"
        }
    ],
    "extendedFields": {
        "dob": null,
        "gender": "Male"
    },
    "cardDetails": [],
    "warnings": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `/v2/customers/{userId}?embed=CUSTOMERIMAGE&source=INSTORE&accountId`
HTTP Method | Get
API Version | v2
Batch Support | No
Rate Limited | Yes

### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
userId | long | Unique ID of the customer to retrieve profile image.

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
embed=CUSTOMERIMAGE* | - | Pass to retrieve the customer image
source* | enum | Source on which the customer is registered.
accountId** | string | Account ID for sources with multiple accounts.

<aside class="notice">Parameters marked with * are mandatory</aside>





## Get Customer Coupons (Detailed)

Retrieves the history of a customer coupons along with the meta information.

> Sample Request

```html
http://api.capillary.co.in/v2/customers/343040815/coupons
```

> Sample Response

```json

{
    "entity": [
        {
            "id": 33267197,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "ER07BCJ8",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:15:02+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:15:02+05:30",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "ER07BCJ8"
        },
        {
            "id": 33267195,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "H306ORH2",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:14:49+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:14:49+05:30",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "H306ORH2"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/{customerId}/coupons`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`{host}/v2/customers/{customerId}/coupons`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
customerId* | long | Unique ID of the customer to fetch coupons.







## Issue Card to an Existing Customer

Lets you issue card to a loyalty customer. To issue an external or manually generated card, you need to first add the card using `/v2/card` API. To issue auto-generated card, you first need to issue the card using `card/generate` API. 

> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/161670039/changeIdentifier?source=INSTORE
```

> Sample POST Request

```json
{
  "add": [
    {
      "value": "GOLD00000000000001032021",
      "type": "cardnumber",
      "statusLabel": "ACTIVE"
    }
  ]
}
```

> Sample Response

```json
{
    "createdId": 161670961,
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/{userId}/changeIdentifier?`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | Yes


### Request URL
`{host}/v2/customers/{userId}/changeIdentifier?source={source}&accountId={accountId}`

### Request Query Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
userId* | long | Unique ID of the customer to issue card. 
source* | enum | Source from which the card is issued. Value: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.
accountId** | string | Unique ID of the source account. Required for sources with multiple account IDs.

<aside class="notice">Parameters marked with * are mandatory. </aside>





### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
value* | string | Card number to issue or tag to the customer.
type* | enum | Pass `cardnumber` to issue card.
statusLabel* | enum | New status of the card. Value: `ACTIVE`.




## Add Customer Referrals

Lets you add referee details of a customer (referral).


> Sample Request

```html
https://eu.api.capillarytech.com/420007388/referrals
```

> Sample POST Request

```json
{
  "customerReferrals": [
    {
      "customer": {
        "id": 420007388,
        "mobile": "918867710031",
        "email": "sample.email10031@gmail.com",
        "externalId": ""
      },
      "campaignToken": "CWRME",
      "referrals": [
        {
          "type": "MOBILE",
          "referral": [
            {
              "name": "some random name",
              "identifier": "918867710032",
              "invitedOn": "2021-12-16 13:15:45"
            }
          ]
        }
      ]
    }
  ]
}
```


> Sample Response

```json
{
  "customerReferrals": [
    {
      "customer": {
        "id": 420007388,
        "mobile": "918867710031",
        "email": "sample.email10031@gmail.com",
        "externalId": ""
      },
      "campaignToken": "CWRME",
      "referrals": [
        {
          "type": "MOBILE",
          "referral": [
            {
              "name": "some random name",
              "identifier": "918867710032",
              "invitedOn": "2021-12-16 13:15:45"
            }
          ]
        }
      ]
    }
  ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/{userId}/referrals`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | No


### Request URL
`{host}/v2/customers/referrals`

### Request Body Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
customerReferrals | array-obj | Details of the referrals.
customer | obj | Details of the referrer customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id | long | Unique ID of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile | string | Mobile number number of the customer.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email | string | Email Id of the customer. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalId | string | External ID of the customer.
campaignToken | string | Unique token generated for the referral campaign.
referrals | array-obj | Details of referees.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | enum | Channel through which the referral details need to be sent - `MOBILE`, `EMAIL`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;referral | array-obj | Details of each referee.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the referee.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifier | string | Unique identifier of the customer as the specified `type`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invitedOn | date-time | ISO standard date and time of the referral invitation.




## Get Customer Referrals

Retrieves the referee details of a customer (referral).


> Sample Request

```html
https://eu.api.capillarytech.com/420007388/referrals
```

> Sample Response

```json
{
   "pagination":{
      "limit":10,
      "offset":0,
      "total":0
   },
   "data":[
      {
         "customer":{
            "id":379061018,
            "profiles":[
               {
                  "firstName":"Tom",
                  "lastName":"Sawyer",
                  "fields":{
                     
                  },
                  "identifiers":[
                     {
                        "type":"email",
                        "value":"tom.sawyer@email.com"
                     },
                     {
                        "type":"mobile",
                        "value":"917700000000"
                     },
                     {
                        "type":"externalId",
                        "value":"x917700000000"
                     }
                  ],
                  "commChannels":[
                     
                  ],
                  "userId":379061018,
                  "accountId":"",
                  "autoUpdateTime":"2021-12-17T15:46:46+05:30",
                  "identifiersAll":[
                     {
                        "type":"email",
                        "value":"917700000000@mail.com"
                     },
                     {
                        "type":"mobile",
                        "value":"917700000000"
                     },
                     {
                        "type":"externalId",
                        "value":"x917700000000"
                     }
                  ]
               }
            ]
         },
         "referralCode":"69olcqikpf",
         "invitees":[
            {
               "type":"EMAIL",
               "identifier":"917410011111@mail.com",
               "invitedOn":"2020-05-21 11:52:33.0",
               "till":{
                  "code":"cm.1",
                  "name":"cm"
               }
            },
            {
               "type":"EMAIL",
               "identifier":"917410011121@mail.com",
               "invitedOn":"2020-05-22 12:15:28.0",
               "till":{
                  "code":"cm.1",
                  "name":"cm"
               }
            },
            {
            {
               "type":"EMAIL",
               "identifier":"917410011131@mail.com",
               "invitedOn":"2020-05-22 12:16:29.0",
               "till":{
                  "code":"cm.1",
                  "name":"cm"
               }
            }
         ],
         "referee":[
            {
               "eventType":"REGISTRATION",
               "userId":379061020,
               "firstName":"ORG",
               "lastName":"Customer",
               "mobile":"917410011111",
               "addedOn":"2020-05-21 11:56:18.0"
            },
            {
               "eventType":"REGISTRATION",
               "userId":379061022,
               "firstName":"Rati",
               "lastName":"Ranjan",
               "email":"9178000000@mail.com",
               "mobile":"91781000000",
               "externalId":"x91781000000",
               "addedOn":"2020-05-21 11:59:20.0"
            },
            {
               "eventType":"REGISTRATION",
               "userId":379063506,
               "firstName":"Sim",
               "lastName":"carea",
               "email":"917651000000@mail.com",
               "mobile":"917651000000",
               "externalId":"x917651000000",
               "addedOn":"2020-07-25 12:38:44.0"
            }
         ],
         "incentives":[
            
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
URI | `/{userId}/referrals`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | GET
Batch Support | No


### Request URL
`{host}/v2/customers/{userId}/referrals`

### Request Path Parameter
Parameter | Datatype | Description
--------- | -------- | -----------
userId* | long | Unique ID of the customer whose referral details need to be displayed.





# Customer Lookup

It is an extension to normal customer APIs where instead of fetching or updating details using customer ID, you can use registered identifiers like mobile number, email ID, external ID, card number and so on in `/customer/lookup`.


## Update Customer Details (using identifier)
Lets you update customer details with mobile number, email ID or external ID. 

> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=919999000001
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
         "accountId":"WeChat1234"
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

> Sample Response

```json
{
    "createdId": 342963216,
    "warnings": [],
    "sideEffects": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup?identifierName={identifierName}&identifierValue={IdentifierValue}&{queryParams}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No



### Request URL
For sources with single accounts

`{host}/v2/customers/lookup?source={sourceName}?&accountId={accountId}&identifierName={identifierName}&identifierValue={IdentifierValue}`



### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Identifier you use to update customer details. Values: `mobile`, `email`, `externalId`.
identifierValue* | string | The respective identifier value. For example if `identifierName` is email, then the `identifierValue` needs to be the email ID of the customer.
source* | enum | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. For sources with multiple accounts such as WECHAT, FACEBOOK, MOBILE_APP, or LINE, you also need to provide the respective account id.
accountId** | string | Account in which you want to update the customer details (Required only for sources with multiple accounts)
use_async | boolean | Pass `true` to run Loyalty activities in the background, side effects will not be returned in the API response. If `false`, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response.

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Datatype | Description
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
identifiers | obj | Identifiers of the customer that you want to add in type and value. Supported types: `mobile`, `email`, `externalId`, `wechat`,`martjackId`, `fbId` `mobile`, `tmall_uname`, `cuid`, `ali_uname`, `jd_uname`, `vip_uname`, and `line`.
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


## Update customer status

Lets you update status label of a customer.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/lookup/status?source=INSTORE&identifierName=mobile&identifierValue=919999000001
```

> Sample PUT request

```json
{
  "reason": "testing2",
  "createdOn": "2021-09-16T12:10:45Z",
  "label": "Active"
}
```

> Sample Response

```json
{
   "warnings": [],
    "error": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup/status?identifierName={identifierName}&identifierValue={IdentifierValue}&{queryParams}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No



### Request URL
For sources with single accounts

`{host}/v2/customers/lookup/status?source={sourceName}?&accountId={accountId}&identifierName={identifierName}&identifierValue={IdentifierValue}`



### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Identifier you use to update customer details. Values: `mobile`, `email`, `externalId`.
identifierValue* | string | The respective identifier value. For example if `identifierName` is email, then the `identifierValue` needs to be the email ID of the customer.
source* | enum | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. For sources with multiple accounts such as WECHAT, FACEBOOK, MOBILE_APP, or LINE, you also need to provide the respective account id.
accountId** | string | Account in which you want to update the customer details (Required only for sources with multiple accounts)

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Request Body Parameters

Parameter | Datatype | Description
--------- | ----- | -----------
reason* | string | Reason for the update.
createdOn | date-time | Date and time of the status update in ISO 8601 format - `YYYY-MM-DDTHH:MM:SSZ`.
label* | string | Predefined label name to update with.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Get Customer Loyalty Details

> Sample Request

```html
http://api.capillary.co.in/v2/customers/lookup/loyaltyDetails?source=INSTORE&identifierName=externalId&identifierValue=888555888555898855
```

> Sample Response

```json
{
    "data": [
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "cumulativePurchases": 24000.0,
            "loyaltyId": 143032714,
            "currentSlab": "Default",
            "nextSlab": "",
            "nextSlabSerialNumber": -1,
            "nextSlabDescription": "",
            "slabSNo": 1,
            "slabExpiryDate": "2121-02-18T23:59:59+05:30",
            "programId": 1414,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 0.0,
            "totalReturnedPoints": 0.0,
            "linkedPartnerPrograms": []
        },
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "cumulativePurchases": 0.0,
            "loyaltyId": 143032714,
            "currentSlab": "Base",
            "nextSlab": "bbstar",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "bbstar",
            "slabSNo": 1,
            "slabExpiryDate": "2121-05-08T01:20:22+05:30",
            "programId": 1679,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 0.0,
            "totalReturnedPoints": 0.0,
            "linkedPartnerPrograms": []
        },
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "cumulativePurchases": 0.0,
            "loyaltyId": 143032714,
            "currentSlab": "CLiQPerQ",
            "nextSlab": "Ignore",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "Ignore",
            "slabSNo": 1,
            "slabExpiryDate": "2121-05-08T01:46:18+05:30",
            "programId": 1680,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 0.0,
            "totalReturnedPoints": 0.0,
            "linkedPartnerPrograms": []
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
URI | `/lookup/loyaltyDetails?{queryParams}`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`{host}/v2/customers/lookup/loyaltyDetails?{paramName}={paramValue}`

### Request Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
source* | enum | Source from which you need to fetch customer details. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
accountId** | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for `INSTORE` source.
identifierName* | enum | Pass any of the registered identifier name of the customer. Values: `mobile`, `email`, `externalId`, `id`, `wechat`,`martjackId`,  `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
identifierValue* | string | Pass the respective identifier value. For example if `identifierType` is mobile, `identifierValue` is mobile number.

<aside class="notice">Parameters marked with * are mandatory.</aside>

## Fetch Customer Details (by Identifier)
Retrieves details of a customer by any of the identifiers (mobile number, email ID, external ID, or card number).



> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/lookup/customerDetails?source=WECHAT&accountId=22232&identifierName=mobile&identifierValue=919999000001&embed=mlp

```

> Sample Response

```json
{
   "id":481220846,
   "profiles":[
      {
         "firstName":"",
         "lastName":"",
         "attribution":{
            "createDate":"2021-02-18T20:31:15+05:30",
            "createdBy":{
               "id":12970395,
               "code":"sit.admin",
               "name":"sit.admin",
               "type":"TILL"
            },
            "modifiedBy":{
               "id":12970395,
               "code":"sit.admin",
               "name":"sit.admin",
               "type":"TILL"
            },
            "modifiedDate":"2021-02-22T13:27:29+05:30"
         },
         "fields":{
            "ihcl_active":"true",
            "tcp_active":"true",
            "tierup_airasia":"2"
         },
         "identifiers":[
            {
               "type":"externalId",
               "value":"888555888555898855"
            },
            {
               "type":"line",
               "value":"lineAS6"
            },
            {
               "type":"cardNumber",
               "value":"TTM001110000000002ZS",
               "seriesId":19,
               "statusLabel":"ACTIVE"
            },
            {
               "type":"mobile",
               "value":"919999000001"
            }
         ],
         "commChannels":[
            {
               "type":"mobile",
               "value":"919999000001",
               "primary":true,
               "verified":false,
               "meta":{
                  "residence":false,
                  "office":false
               },
               "attributes":{
                  
               }
            }
         ],
         "source":"INSTORE",
         "userId":481220846,
         "accountId":"",
         "conflictingProfileList":[
            
         ],
         "autoUpdateTime":"2021-09-14T17:53:13+05:30",
         "identifiersAll":[
            {
               "type":"externalId",
               "value":"888555888555898855"
            }
         ]
      }
   ],
   "loyaltyInfo":{
      "loyaltyType":"loyalty",
      "attributionV2":{
         "createDate":"2021-02-18T20:31:15+05:30",
         "createdBy":{
            "id":12970395,
            "code":"sit.admin",
            "name":"sit.admin",
            "type":"TILL"
         },
         "modifiedBy":{
            "id":12970395,
            "code":"sit.admin",
            "name":"sit.admin",
            "type":"TILL"
         },
         "modifiedDate":"2021-02-22T13:27:29+05:30",
         "createdFromSource":"instore"
      },
      "lifetimePurchases":24000.0
   },
   "fraudDetails":{
      "markedBy":{
         
      },
      "modifiedOn":"2019-09-23T15:13:14+05:30",
      "status":"NOT_FRAUD"
   },
   "segments":{
      
   },
   "associatedWith":"sit.admin",
   "extendedFields":{
      "city":"Bangalore",
      "gender":"Male"
   },
   "loyaltyProgramDetails":[
      {
         "redeemed":0.0,
         "expired":0.0,
         "returned":0.0,
         "adjusted":0.0,
         "lifetimePoints":0.0,
         "loyaltyPoints":0.0,
         "cumulativePurchases":24000.0,
         "loyaltyId":143032714,
         "currentSlab":"Default",
         "nextSlab":"",
         "nextSlabSerialNumber":-1,
         "nextSlabDescription":"",
         "slabSNo":1,
         "slabExpiryDate":"2121-02-18T23:59:59+05:30",
         "programId":1414,
         "delayedPoints":0.0,
         "delayedReturnedPoints":0.0,
         "totalAvailablePoints":0.0,
         "totalReturnedPoints":0.0,
         "linkedPartnerPrograms":[
            
         ],
         "programTitle":"Tata Digital SITDefaultProgram",
         "programDescription":"Default program for Tata Digital SIT",
         "programPointsToCurrencyRatio":1.0
      },
      {
         "redeemed":0.0,
         "expired":0.0,
         "returned":0.0,
         "adjusted":0.0,
         "lifetimePoints":0.0,
         "loyaltyPoints":0.0,
         "cumulativePurchases":0.0,
         "loyaltyId":143032714,
         "currentSlab":"Copper*",
         "nextSlab":"Copper",
         "nextSlabSerialNumber":2,
         "nextSlabDescription":"Copper",
         "slabSNo":1,
         "slabExpiryDate":"2121-05-07T23:48:47+05:30",
         "programId":1422,
         "delayedPoints":0.0,
         "delayedReturnedPoints":0.0,
         "totalAvailablePoints":0.0,
         "totalReturnedPoints":0.0,
         "linkedPartnerPrograms":[
            
         ],
         "programTitle":"IHCL",
         "programDescription":"IHCL",
         "programPointsToCurrencyRatio":1.0
      },
      {
         "redeemed":0.0,
         "expired":0.0,
         "returned":0.0,
         "adjusted":0.0,
         "lifetimePoints":0.0,
         "loyaltyPoints":0.0,
         "cumulativePurchases":0.0,
         "loyaltyId":143032714,
         "currentSlab":"Privilege",
         "nextSlab":"Tier 2",
         "nextSlabSerialNumber":2,
         "nextSlabDescription":"Tier 2",
         "slabSNo":1,
         "slabExpiryDate":"2121-05-07T20:44:49+05:30",
         "programId":1423,
         "delayedPoints":0.0,
         "delayedReturnedPoints":0.0,
         "totalAvailablePoints":0.0,
         "totalReturnedPoints":0.0,
         "linkedPartnerPrograms":[
            
         ],
         "programTitle":"Croma",
         "programDescription":"Croma",
         "programPointsToCurrencyRatio":1.0
      },
      {
         "redeemed":0.0,
         "expired":0.0,
         "returned":0.0,
         "adjusted":0.0,
         "lifetimePoints":420.0,
         "loyaltyPoints":420.0,
         "cumulativePurchases":24000.0,
         "loyaltyId":143032714,
         "currentSlab":"Aviator",
         "nextSlab":"Explorer",
         "nextSlabSerialNumber":2,
         "nextSlabDescription":"Explorer",
         "slabSNo":1,
         "slabExpiryDate":"2121-03-10T23:59:59+05:30",
         "programId":1550,
         "delayedPoints":0.0,
         "delayedReturnedPoints":0.0,
         "totalAvailablePoints":420.0,
         "totalReturnedPoints":0.0,
         "linkedPartnerPrograms":[
            
         ],
         "programTitle":"AirAsia India",
         "programDescription":"AirAsia India",
         "programPointsToCurrencyRatio":1.0
      },
      {
         "redeemed":0.0,
         "expired":0.0,
         "returned":0.0,
         "adjusted":0.0,
         "lifetimePoints":0.0,
         "loyaltyPoints":0.0,
         "cumulativePurchases":0.0,
         "loyaltyId":143032714,
         "currentSlab":"Base",
         "nextSlab":"bbstar",
         "nextSlabSerialNumber":2,
         "nextSlabDescription":"bbstar",
         "slabSNo":1,
         "slabExpiryDate":"2121-05-08T01:20:22+05:30",
         "programId":1679,
         "delayedPoints":0.0,
         "delayedReturnedPoints":0.0,
         "totalAvailablePoints":0.0,
         "totalReturnedPoints":0.0,
         "linkedPartnerPrograms":[
            
         ],
         "programTitle":"bigbasket",
         "programDescription":"bigbasket",
         "programPointsToCurrencyRatio":1.0
      }
   ],
   "groupLoyaltyProgramDetails":[
      {
         "groupProgramId":1414,
         "title":"Tata Digital SITDefaultProgram",
         "description":"Default program for Tata Digital SIT",
         "programsList":[
            {
               "id":1414,
               "name":"Tata Digital SITDefaultProgram",
               "description":"Default program for Tata Digital SIT"
            },
            {
               "id":1422,
               "name":"IHCL",
               "description":"IHCL"
            },
            {
               "id":1423,
               "name":"Croma",
               "description":"Croma"
            },
            {
               "id":1424,
               "name":"Tata Westside Loyalty",
               "description":""
            },
            {
               "id":1497,
               "name":"Tata TataSky Loyalty",
               "description":"Tata TataSky Loyalty"
            },
            {
               "id":1550,
               "name":"AirAsia India",
               "description":"AirAsia India"
            },
            {
               "id":1568,
               "name":"Tata Ginger Loyalty",
               "description":""
            },
            {
               "id":1679,
               "name":"bigbasket",
               "description":"bigbasket"
            },
            {
               "id":1680,
               "name":"Tata CLiQ",
               "description":"Tata CLiQ"
            },
            {
               "id":1745,
               "name":"Playground (TataCliq)",
               "description":"This is an experimental Program"
            },
            {
               "id":1762,
               "name":"TML  Loyalty",
               "description":"TML  Loyalty"
            },
            {
               "id":1766,
               "name":"1mg",
               "description":"1mg"
            }
         ],
         "lifetimePoints":420.0,
         "loyaltyPoints":420.0,
         "promisedPoints":0.0,
         "pointsToCurrencyRatio":1.0
      }
   ],
   "cardDetails":[
      
   ],
   "warnings":[
      
   ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup/customerDetails?{requestParams}'
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`{host}/v2/customers/lookup/customerDetails?source={source}&accountId={accountId}&identifierName={identifierName}&identifierValue={identifierValue}&embed={embedParameterName}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Identifier type used to get customer details. Values: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`.
identifierValue* | string | Value of the identifierName passed. For example, `identifierName=cardExternalId&identifierValue=cardUUID123`
source* | enum | Source from which you want to fetch details. Value: `INSTORE`, `MARTJACK`, `WECHAT`, `ALL`. ( to fetch details from all sources. For sources with multiple accounts, you also need to pass the specific accountId.
accountId** |  string | For sources with multiple accounts, pass the specific accountId.
embed | enum | To include the details of a specific entity in response. Value: `points`, `subscriptions`, `mlp`, `promotionalPoints`, `expirySchedules`, `expiredPoints`. For example, `embed=expiredPoints` retrieves the summary of expired points of the customer. <br>Usage: <code>{host}/v2/customers/{CustomerId}/source=INSTORE&&embed=points</code>.



<aside class="notice">Parameters marked with * are mandatory. </aside>


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

Lets you fetch unique ID of a customer generated internally. This is required for customer related activities such as fetch customer details, update customer details, manage subscription details and other activities.


### Resource Information
| | |
--------- | ----------- |
URI | `/lookup?{query parameters}'
Authentication | Yes
HTTP Method | GET
Batch Support | No



### Request URL
`{host}/v2/customers/lookup?source={SourceName}&accountId={accountId}&identifierName={IdentifierName}&identifierValue={IdentifierValue}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
source* | enum | Specify the source from which you want to fetch the customer details. Values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`.
accountId | string | Specify the account id of the specific source if the source has multiple accounts. `accountId` is required for sources with multiple accounts such as WeChat or Facebook.
identifierName* | enum | Identifier based on which you want to fetch the customer id. **Values**: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`, `wechat`, `martjackId`,`fbId`.
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
91009  | Retrieved survivor account for the requested merge victim. 
91010  | Downgrade strategy is not configured.
91020  | Invalid TILL passed for registration.
91021  | Invalid attribution TILL passed.
91022  | Failed to update subscription for {x} channel and priority {y}.



### Warning Codes

Code  | Description
-----  | -----------
1053 | Preferred store specified is not found.
91001  | Failed to get point details.
91002  | Failed to get subscription details.
91003  | Failed to validate.
91004  | Failed to get segmentation details.
91005  | {x} is primary identifier and cannot be updated.
91006  | {x} update is not allowed. 
91007  | Failed to register. {x} already exists for some other user.
91011  | Customer is already in the lowest slab. 
91012  | Customer is already in the highest slab.
91013  | Call to Points Engine for tier upgrade criteria has failed {x}.
91014  | Call to Points Engine for tier renewal criteria has failed {x}.
91015  | Failed to update extended fields; or field {x} length too long.
91016  | WECHAT profile is not available for the customer.
91017  | WEB_ENGAGE profile is not available for the customer.
91018  | Unable to load WeChat notifications.
91019  | Unable to load Web Engage notifications.