# Points
Points represent loyalty points issued to customers through Loyalty+, Engage+, GoodWill (Member Care), or Data Import. Customers can redeem the points within the validity period and can also transfer their points to other loyalty customers.

## Check if Points Transferrable (Customer)

Checks if specific points of a customer can be transferred to an other customer. You can also issue OTP that is used to authenticate customer to transfer points (`pointsTransfer` API).



> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/isTransferrable

```

> Sample POST Request

```json
{
  "pointsTobeTransferred": 10,
  "groupProgramTransfer": "false",
  "notes": "Sample notes",
  "programId": 141,
  "fromCustomerIdentifier": {
    "type": "MOBILE",
    "value": "7799497290"
  },
  "toCustomerIdentifier": {
    "type": "ID",
    "value": "342953257"
  },
  "issueOtp": true
}
```


> Sample Response

```json
{ 
   "data":[ 
      { 
         "pointsTobeTransferred":10,
         "transferFrom":{ 
            "id":32429961,
            "profiles":[ 
               { 
                  "firstName":"Tom",
                  "lastName":"Sawyer",
                  "attribution":{ 
                     "createDate":"2018-03-05T15:52:47+05:30",
                     "createdBy":{ 
                        "id":15041276,
                        "code":"org2.till1",
                        "name":"org2.till1",
                        "type":"TILL"
                     },
                     "modifiedBy":{ 
                        "id":15041276,
                        "code":"org2.till1",
                        "name":"org2.till1",
                        "type":"TILL"
                     },
                     "modifiedDate":"2019-08-14T12:48:31+05:30"
                  },
                  "fields":{ 

                  },
                  "identifiers":[ 
                     { 
                        "type":"mobile",
                        "value":"919111111111"
                     }
                  ],
                  "commChannels":[ 
                     { 
                        "type":"mobile",
                        "value":"919111111111",
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
                  "userId":32429961,
                  "accountId":"",
                  "conflictingProfileList":[ 

                  ],
                  "autoUpdateTime":"2019-09-24T02:29:31+05:30"
               }
            ],
            "loyaltyInfo":{ 
               "loyaltyType":"loyalty",
               "attributionV2":{ 
                  "createDate":"2018-03-05T15:52:47+05:30",
                  "createdBy":{ 
                     "id":15041276,
                     "code":"org2.till1",
                     "name":"org2.till1",
                     "type":"TILL"
                  },
                  "modifiedBy":{ 
                     "id":15041276,
                     "code":"org2.till1",
                     "name":"org2.till1",
                     "type":"TILL"
                  },
                  "modifiedDate":"2019-08-14T12:48:31+05:30"
               }
            },
            "segments":{ 

            },
            "extendedFields":{ 

            }
         },
         "transferTo":{ 
            "id":342953257,
            "profiles":[ 
               { 
                  "firstName":"autofn_9294476894",
                  "lastName":"autoln_9294476894",
                  "attribution":{ 
                     "createDate":"2019-09-18T16:40:10+05:30",
                     "createdBy":{ 
                        "id":15041276,
                        "code":"org2.till1",
                        "name":"org2.till1",
                        "type":"TILL"
                     },
                     "modifiedBy":{ 
                        "id":15041276,
                        "code":"org2.till1",
                        "name":"org2.till1",
                        "type":"TILL"
                     },
                     "modifiedDate":"2019-09-18T16:40:10+05:30"
                  },
                  "fields":{ 

                  },
                  "identifiers":[ 
                     { 
                        "type":"email",
                        "value":"james.f@example.com"
                     },
                     { 
                        "type":"mobile",
                        "value":"919294111111"
                     },
                     { 
                        "type":"externalId",
                        "value":"ext_id92944768"
                     }
                  ],
                  "commChannels":[ 
                     { 
                        "type":"email",
                        "value":"james.f@example.com",
                        "primary":true,
                        "verified":false,
                        "meta":{ 
                           "residence":false,
                           "office":false
                        },
                        "attributes":{ 

                        }
                     },
                     { 
                        "type":"mobile",
                        "value":"919294476894",
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
                  "userId":342953257,
                  "accountId":"",
                  "conflictingProfileList":[ 

                  ],
                  "autoUpdateTime":"2019-09-24T02:29:31+05:30"
               }
            ],
            "loyaltyInfo":{ 
               "loyaltyType":"loyalty",
               "attributionV2":{ 
                  "createDate":"2019-09-18T16:40:10+05:30",
                  "createdBy":{ 
                     "id":15041276,
                     "code":"org2.till1",
                     "name":"org2.till1",
                     "type":"TILL"
                  },
                  "modifiedBy":{ 
                     "id":15041276,
                     "code":"org2.till1",
                     "name":"org2.till1",
                     "type":"TILL"
                  },
                  "modifiedDate":"2019-09-18T16:40:10+05:30"
               }
            },
            "segments":{ 

            },
            "extendedFields":{ 

            }
         },
         "transferrable":true
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
URI | `/isTransferrable`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/isTransferrable`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
programId** | long | Program ID from which points has to be transferred. Applicable for multi-program orgs.
notes | string | Any information to store for the current transfer activity.
pointsTobeTransferred* | int | Number of points that customer wants to transfer.
fromCustomerIdentifier* | obj | Details of source customer - customer that wants to transfer points.
toCustomerIdentifier* | obj | Details of destination customer - customer to whom the points have to be transferred.
type* | enum | Customer identifier type. Values: `ID` (user id of the customer), `MOBILE`, `EXTERNAL_ID`, `EMAIL`.
value* | string | The value of the specified identifier.
issueOtp** | Boolean | Sends OTP to the fromCustomer if the specified points are transferrable. Use this to issue OTP (used to authenticate `fromCustomer` to transfer points) if `isPointsTransferrable` is successful. If `false` (default value) then no OTP is generated. **However, you cannot transfer points without OTP. You need  to only pass `issueOtp` as `true` to transfer points**.  

<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Check if Points Transferrable (Group)

Checks if specific points from one account can be transferred to another account (group to customer, customer to a group, or one group to another). 



> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/userGroup2/isTransferrable
```

> Sample POST Request

```json
{
    "pointsTobeTransferred": 10.5,
    "notes": "notes123",
    "programId": 765,
    "transferredBy": {
        "identifierType": "mobile",
        "identifierValue": "915410000000",
        "source": "WECHAT",
        "accountId": "WECHAT-SN"
    },
    "toEntity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "918410000000",
        "accountId": "WECHAT-SN",
        "source": "WECHAT"
    },
    "fromEntity": {
        "type": "USERGROUP2",
        "identifierType": "id",
        "identifierValue": "1981"
    }
}
```

> Sample Response

```json
{
   "data":[
      {
         "pointsTobeTransferred":10.0,
         "transferrable":true
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
URI | `/userGroup2/isTransferrable`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/userGroup2/isTransferrable`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
pointsTobeTransferred* | int | Number of points to be transferred.
notes | string | Notes to add to the transfer activity.
programId** | int | Loyalty program ID from which points has to be transferred. Applicable for multi-program orgs. Considers the default program ID if not passed.
transferredBy* | obj | Details of the user who is transferring points. The user should have permission to transfer points.
toEntity* | obj | Details of the destination account (customer or group) - to which the points need to be transferred.
fromEntity* | obj | Details of the source account (group or customer) from which the points need to be transferred.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type* | enum | Type of the entry. Value: `CUSTOMER`, `USERGROUP2`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifierType* | enum | Identifier type to identify customer or group. Supported values for customer: `mobile`, `email`, `externalId`, `cardnumber`, `wechat`, `martjackId`, `fbId`.<br>Supported values for group: `id`, `externalId`, `primaryUserId`, `primaryUserCardnumber`, `primaryUserMobile`, `primaryUserEmail`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifierValue* | string | Value of the specified `identifierType`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accountId | string | Account ID for sources with multiple account IDs.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source** | enum | Source in which the customer account is available. Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. Required for customer entity.

<aside class="notice">All parameters marked by * are mandatory. </aside>





## Reverse Redeemed Points

Lets you reverse a set of points that are redeemed in a transaction. For example, you can use this API to reverse points redeemed for a transaction if the transaction is returned.

Prerequisites:

The following configurations are required for `points/reverse` API

* Enable Allow_points_redemption_reversal config on EMF settings. Only the back-end team has access to this page. Please raise a ticket to enable the config.
* Enable V2 API as points reversal is supported only V2.0.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/reverse
```

> Sample POST Request

```json
{
"redemptionId":"54ZNkA",
"pointsToBeReversed": 10,
"identifier":
	{
	"type":"mobile",
	"value":"919740000000"
	}
}

```

> Sample Response

```json
{
    "redemptionId": "54ZNkA",
    "pointsToBeReversed": 20.0,
    "orgId": 100458,
    "identifier": {
        "type": "mobile",
        "value": "919740000000"
    },
    "customerId": 98662653,
    "pointsReversed": 20.0,
    "reversalId": "5wyOZM",
    "warnings": []
}  
```



### Resource Information
| | |
--------- | ----------- |
URI | `/reverse`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/reverse`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
redemptionId* | long | Unique reference ID generated for redeeming the points. 
Identifier | obj | Customer details associated to the redemption.
type* | enum | Pass any of  the registered identifiers of the customer. Supported values: mobile, email, externalId.
value* | string | Pass the respective identifier value. This should match with the identifier tagged to the redemption id
pointsToBeReversed | int | The number of points be reversed.

<aside class="notice">All parameters marked by * are mandatory. </aside>





## Transfer Points (Customer to Customer)

Transfers points from one customer account to another customer account by validating the OTP issued for the points transfer.

<aside class="notice">Only 'fromCustomer' and points are validated currently. `toCustomer` validation will be fixed in the next release.</aside>

> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/transfer
```

> Sample POST Request

```json
{ 
   "pointsTobeTransferred":123,
   "groupProgramTransfer": "false",
   "programId": 141,
   "notes": "Transferred on 16th July 2021",
   "fromCustomerIdentifier":{ 
      "type":"MOBILE",
      "value":"7799000000"
   },
   "toCustomerIdentifier":{ 
      "type":"ID",
      "value":"342953257"
   },
   "code":"X12Y3Z"
}
```

> Sample Response

```json
{ 
   "data":[ 
      { 
         "pointsTransferDate":"2021-07-16 15:53:42",
         "pointsTransferred":15.0,
         "transferId":100,
         "transferType":"DEDUCTION",
         "transferredFrom":{ 
            "userId":343015431,
            "firstName":"Tom",
            "lastName":"Sawyer"
         },
         "transferredTo":{ 
            "userId":342953257,
            "firstName":"James",
            "lastName":"Thomas"
         },
         "notes":"Transfer points to James",
         "programName":"Nightly_ApiAutoDefaultProgram"
      }
	  ]
}
	  
```



### Resource Information
| | |
--------- | ----------- |
URI | `/transfer`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/transfer`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
pointsTobeTransferred* | int | Number of points to be transferred.
programId** | long | Program ID from which points has to be transferred. Applicable for multi-program orgs.
fromCustomerIdentifier* | obj | Details of source customer - customer that wants to transfer points.
toCustomerIdentifier* | obj | Details of destination customer - customer to whom the points have to be transferred.
type* | enum | Customer identifier type. Values: `ID` (user id of the customer), `MOBILE`, `EXTERNAL_ID`, `EMAIL`.
value* | string | The value of the specified identifier.
notes | string | Specify the reason or any notes for this points transfer.
code* | string | Pass the OTP received by the `fromCustomer` for the current points transfer. To issue OTP, use either `/isPointsTransferrable` or `/issuePointsTransferOtp`.

<aside class="notice">All parameters marked by * are mandatory. </aside>





## Transfer Points (Group)

Lets you transfer points from one account to another account - group to customer, customer to group, or group to group.


> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/userGroup2/transfer
```

> Sample POST Request

```json
{
   "pointsTobeTransferred":10.5,
   "notes":"notes123",
   "programId":765,
   "transferredBy":{
      "identifierType":"mobile",
      "identifierValue":"915662420128",
      "source":"WECHAT",
      "accountId":"WECHAT-SN"
   },
   "toEntity":{
      "type":"CUSTOMER",
      "identifierType":"mobile",
      "identifierValue":"918662420128",
      "accountId":"WECHAT-SN",
      "source":"WECHAT"
   },
   "fromEntity":{
      "type":"USERGROUP2",
      "identifierType":"id",
      "identifierValue":"2626"
   }
}
```

> Sample Response

```json
{
   "data":[
      {
         "toEntityId":418400980,
         "toEntityType":"CUSTOMER",
         "fromEntityId":2626,
         "fromEntityType":"USERGROUP2",
         "pointsTransferDate":"2021-10-07 16:36:12",
         "pointsTransferred":10.0,
         "transferId":6545,
         "transferType":"DEDUCTION",
         "transferredTo":{
            "userId":418400980,
            "firstName":"",
            "lastName":""
         },
         "transferredFromUserGroup2":{
            "id":2626,
            "groupStatus":"ACTIVE",
            "fleetGroupUsers":[
               {
                  "userId":418400982,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":true
               },
               {
                  "userId":418400981,
                  "groupId":2626,
                  "defaultGroup":false,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400980,
                  "groupId":2626,
                  "defaultGroup":false,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400984,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400985,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":false
               }
            ],
            "createdBy":15089282,
            "createdOn":"2021-10-07T15:42:02+05:30",
            "lifeTimePurchases":400
         },
         "notes":"notes123",
         "programName":"SunRiseDefaultProgram",
         "pointsTransferBreakupByEarningPrograms":[
            {
               "programId":765,
               "deductedPoints":10.000,
               "programCurrentPoints":70
            }
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
URI | `/userGroup2/transfer`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/userGroup2/transfer`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
pointsTobeTransferred | float | Number of points to be transferred.
notes | string | Notes to add for the points transfer.
programId** | int | Loyalty program ID from which points has to be transferred. Applicable for multi-program orgs. Considers the default program ID if not passed.
transferredBy* | obj | Details of the user who is transferring points. The user should have permission to transfer points.
toEntity* | obj | Details of the destination account (customer or group) - to which the points need to be transferred.
fromEntity* | obj | Details of the source account (group or customer) from which the points need to be transferred.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type* | enum | Type of the entry. Value: `CUSTOMER`, `USERGROUP2`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifierType* | enum | Identifier type to identify customer or group. Supported values for customer: `mobile`, `email`, `externalId`, `cardnumber`, `wechat`, `martjackId`, `fbId`.<br>Supported values for group: `id`, `externalId`, `primaryUserId`, `primaryUserCardnumber`, `primaryUserMobile`, `primaryUserEmail`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifierValue* | string | Value of the specified `identifierType`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accountId | string | Account ID for sources with multiple account IDs.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source** | enum | Source in which the customer account is available. Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. Required for customer entity.

<aside class="notice">All parameters marked by * are mandatory. </aside>


## Get Points Transfer Details

Retrieves the history of points transferred from a group or customer.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/points/transfer?programId=765&identifierName=id&identifierValue=2626&userEntityType=USERGROUP2
```

> Sample Response

```json
{
   "data":[
      {
         "toEntityId":418400980,
         "toEntityType":"CUSTOMER",
         "fromEntityId":2626,
         "fromEntityType":"USERGROUP2",
         "pointsTransferDate":"2021-10-07 16:36:12",
         "pointsTransferred":10.0,
         "transferId":6545,
         "transferType":"DEDUCTION",
         "transferredTo":{
            "userId":418400980,
            "firstName":"",
            "lastName":""
         },
         "transferredFromUserGroup2":{
            "id":2626,
            "groupStatus":"ACTIVE",
            "fleetGroupUsers":[
               {
                  "userId":418400982,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":true
               },
               {
                  "userId":418400981,
                  "groupId":2626,
                  "defaultGroup":false,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400980,
                  "groupId":2626,
                  "defaultGroup":false,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400984,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":false
               },
               {
                  "userId":418400985,
                  "groupId":2626,
                  "defaultGroup":true,
                  "active":true,
                  "primaryMember":false
               }
            ],
            "createdBy":15089282,
            "createdOn":"2021-10-07T15:42:02+05:30",
            "lifeTimePurchases":400
         },
         "notes":"notes123",
         "programName":"SunRiseDefaultProgram"
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
URI | `/points/transfer?{queryparams}`
Rate Limited? | No
Authentication | Yes
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/points/transfer?{paramName}={paramValue}`

### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
identifierName* | enum | Identifier type to identify customer or group. Supported values for customer: `mobile`, `email`, `externalId`, `cardnumber`, `wechat`, `martjackId`, `fbId`.<br>Supported values for group: `id`, `externalId`.
identifierValue* | string | Value of the specified `identifierType`.
source** | enum | Source in which the customer account is available. Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. Required for customer entity.
accountId** | string | Account ID for sources with multiple account IDs. Required for sources with multiple accounts.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Response Codes

### Success Codes

| Code  |  Description                 | 
|-------|------------------------------| 
| 800   | Points redeemed successfully, points can be redeemed | 



### Error Codes
Code | Description
---- | -----------
412 | Configuration key `CONF_FRAUD_STATUS_CHECK_POINTS_TRANSFER`in the `config_keys` table is not set properly.
413 | Problem fetching the configuration key `CONF_FRAUD_STATUS_CHECK_POINTS_TRANSFER`
414 | Destination customer status is fraud. Points cannot be transferred to customers with fraud status. 
415 | Source customer status is fraud. Points cannot be transferred by customers with fraud status.
416 | Points related validation failed from Thrift.
417 | Customer with fraud status exists.
418 | From and To customers are same.
419 | Merged customer found with id: {x}, where x is the user id of the customer.
686 | User is from campaign and has not enrolled in the loyalty program. Points redemption is not applicable for the user.
801 | Points you are trying to redeem are invalid
802 | Mobile number/email id/external id you have entered is invalid
803 | Unable to redeem. The points you are trying to redeem is more than the available points
804 | Insufficient current points.
805 | Insufficient lifetime points.
806 | Insufficient lifetime purchases amount.
807 | Unable to redeem. Make sure that the points you are trying to redeem is a multiple of <X>. Check the points redemption configuration of your organization.
808 | Unable to redeem. Validation code is invalid.
809 | Unable to process. Customer is marked as fraud.
810 | Mismatch in points for revert API call
811 | The transaction number entered to redeem/revert points is invalid
812 | The points have been reverted already for this transaction number
813 | Insufficient current points available for redemption
814 | No points were redeemed on this transaction number
815 | Unable to process points at this moment. Please try again later
816 | Unable to find customer in this organization
817 | Points redemption failed. 
818 | Current points are less than points requested for redemption.
819 | Points you are trying to redeem are more than the maximum allowed redemption limit.
820 | Unable to process. Customer is marked as fraud
821 | Points you are trying to redeem are less than the minimum redemption limit
822 | Unable to find missed call from the registered mobile number
823 | Missed call redemption is disabled for your organization
824 | Mobile number validation is mandatory for redeeming points
825 | Client signature is required
826 | Invalid points category or invalid configuration
827 | Unable to redeem points. Points redemption is enabled for your organization.
859 | The redemption time you have passed is invalid
860 | Unable to issue OTP.
881 | Customer is not registered into the loyalty program.
886 | Unable to process points. Please try again later.
887 | Unable to process points. Please try again later.
888 | Configuration is invalid. Please report to Capillary Support
889 | Points processing failed. Please try again later. 
894 | Unable to process points at this moment. Please try again later
895 | Loyalty program is not configured for your organization.
896 | Unable to process points. Please try again later.
898 | Unable to process points at this moment. Please try again later
899 | Configuration is invalid. Please report to Capillary Support
901 | Invalid points or points redemption Id passed.
902	| Redemption ID does not exist.
903 | Unable to redeem points.
904 | Invalid customer details passed.
3045 | Points Redemption is not allowed for the customer with id {x} as the status is fraud.
3802 | Points reversal redeemed points already reversed.


### Warning Codes

Code | Description
---- | ------------
872 | Unable to fetch points-to-currency conversion ratio.
873 | Invalid transaction number passed.
876 | Points are redeemable but unable to generate OTP.
877 | Unable to allocate points.
900 | Pending events present in queue for this user. Queue size-{0},failed event -{1},reason -{2},status code -{3}.
901 | Invalid points or points redemption ID.
902	| Redemption ID does not exist.
903 | Unable to redeem points.
904 | Invalid customer details passed.
905 | points redemption reversal is disabled for the org.


# Points Ledger

Points as incentives are treated as currency within an org and its affiliates. The multitude of credits, debits, and adjustments impact the pool of points in the customer account. When points issued from different programs of the org can be redeemed across the org units or loyalty programs, it is important to understand the debit and credit history. Ledger APIs help you retrieve the points debit and credit details across the programs of the org.

## Get Customer Ledger Balance

Retrieves category-wise points' ledger balance details of a customer for a given time.



> Sample Request

```html
https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerBalance?identifierName=externalId&identifierValue=tomanatest2&source=INSTORE
```

> Sample Response

```json
{
    "customerDetails": {
        "userId": 502522264,
        "externalId": "tomanatest2",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 17,
        "pageCount": 2,
        "ledgerClosingBalance": [
            {
                "pointsCategory": "DelayedAccrualPointCategory",
                "programName": "Tata Ginger Loyalty",
                "programId": 1568,
                "closingBalance": "0.000"
            },
            {
                "pointsCategory": "ExternalTriggerBasedPointCategory",
                "programName": "Tata Ginger Loyalty",
                "programId": 1568,
                "closingBalance": "0.000"
            },
            {
                "pointsCategory": "Main",
                "programName": "Playground",
                "programId": 1745,
                "closingBalance": "30000.000"
            },
            {
                "pointsCategory": "ExternalTriggerBasedPointCategory",
                "programName": "Westdown",
                "programId": 1424,
                "closingBalance": "0.000"
            },
            {
                "pointsCategory": "Main",
                "programName": "Westdown",
                "programId": 1424,
                "closingBalance": "0.000"
            },
            {
                "pointsCategory": "Main",
                "programName": "PurpleNeu",
                "programId": 1414,
                "closingBalance": "12703.000"
            }
        ]
    },
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/pointsLedger/getCustomerLedgerBalance?{queryParams}`
Rate Limited? | No
Authentication | Yes
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2//pointsLedger/getCustomerLedgerBalance?identifierName={identifierName}&identifierValue={value}&source={source}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | ---- | -----------
identifierName* | enum | Identifier type to identify the customer. Values: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`.
identifierValue* | string | Value of the specified identifier type of the customer. 
source* | enum | Source in which the identifier is available. Supported value: `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK	, 	WEB_ENGAG`, `INSTORE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`.
acountId** | string | For sources with multiple accounts, pass the specific accountId.
tillId | int | Get the customer's ledger balance of a specific TILL. Pass the unique till ID.
limit | int | Pass the number of results to retrieve. Default value is `10`, and max value supported is `10`.
offset | int | Number of records ignored from the top. Page Number. Default value is `0`.
endDate | string | Get the closing balance of a specific date. Pass the end date in `YYYY-MM-DDThh:mm:ss` format. Default value, startDate plus 7 days.
includeTillConceptEvents | boolean | Fetches the deduction entries that were triggered at the tills mapped to the Concept of the Program ID even if the deductions are from a different program. Default value is `false`.
ledgerEntryType | enum | Specify the type of ledger entries you want to fetch. Supported values: `CREDIT`, `DEBIT`, `OPENING_BALANCE`. By default, it fetches all the ledger entry types.
pointCategoryType | enum | Specify the point category type for which you want to fetch ledger details. Supported values: `REGULAR`, `PROMISED`, `TRIGGER_BASED`. By default, it fetches all the points category details.


<aside class="notice">Parameters marked with * are mandatory.</aside>





## Get Customer Ledger Information

Retrieves the points ledger entries of a customer for each event.



> Sample Request

```html
https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerBalance?identifierName=externalId&identifierValue=tomanatest2&source=INSTORE
```

> Sample Response

```json
{
    "customerDetails": {
        "userId": 502522254,
        "externalId": "tomanatest2",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 17,
        "pageCount": 2
    },
    "ledgerEntries": [
        {
            "eventLogId": 30263656,
            "eventName": "PointsRedemption",
            "ledgerCreatedDate": "2022-02-14 18:30:59.0",
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10",
                    "pointsCategory": "Main",
                    "programName": "hil",
                    "programId": 1422
                }
            ],
            "netPointsOnEvent": "-10.000",
            "store": "Sar HIL",
            "storeCode": "hil.admin",
            "tillCode": "hil.admin.1"
        },
        {
            "eventLogId": 30405652,
            "eventName": "TransactionAdd",
            "ledgerCreatedDate": "2022-02-16 17:36:55.0",
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "300.00",
                    "pointsCategory": "Main",
                    "programName": "DemoNeu",
                    "programId": 1414
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "137",
                    "pointsCategory": "Main",
                    "programName": "HIL",
                    "programId": 1422
                }
            ],
            "netPointsOnEvent": "437.080",
            "transactionDetails": {
                "transactionId": 189948436,
                "transactionNumber": "return_bill_0001"
            },
            "store": "demo HIL",
            "storeCode": "hil.admin",
            "tillCode": "hil.admin.1"
        }
    ],
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/pointsLedger/getCustomerLedgerInfo?{queryParams}`
Rate Limited? | No
Authentication | Yes
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2//pointsLedger/getCustomerLedgerInfo?identifierName={identifierName}&identifierValue={value}&source={source}`

### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
identifierName* | enum | Identifier type to identify the customer. Values: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`.
identifierValue* | string | Value of the specified identifier type of the customer. 
source* | enum | Source in which the identifier is available. Supported value: `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK	, 	WEB_ENGAG`, `INSTORE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`.
acountId** | string | For sources with multiple accounts, pass the specific accountId.
tillId | int | Get the customer's ledger information of a specific TILL. Pass the unique till ID.
limit | int | Pass the number of results to retrieve. Default value is `10`, and max value supported is `10`.
offset | int | Page number to retrieve. Page Number. Default value is `0`.
programId | int | Retrieve the ledger details of a specific program. By default, details of all programs will be retrieved.
startDate | string | Get ledger information from on or after a specific date. Pass the start date in `YYYY-MM-DDThh:mm:ss` format. Default value 7 days before the endDate or the current date. If this is not passed, it considers the current date. <br>The maximum difference between `startDate` and `endDate` should not be more than 30 days.
endDate | string | Get ledger information until a specific date. Pass the end date in `YYYY-MM-DDThh:mm:ss` format. Default value, startDate plus 7 days.<br>The maximum difference between `startDate` and `endDate` should not be more than 30 days.
includeTillConceptEvents | boolean | Pass `true` to fetch deduction entries that were triggered at the tills mapped to the Concept of the Program ID even if the deductions are from a different program. Default value is `false`.<br> When `true`, pass the `programId` also, else it will be qualified as invalid input combination.
ledgerEntryType | enum | Specify the type of ledger entries you want to fetch. Supported values: `CREDIT`, `DEBIT`, `OPENING_BALANCE`. By default, it fetches all the ledger entry types.
pointCategoryType | enum | Specify the point category type for which you want to fetch ledger details. Supported values: `REGULAR`, `PROMISED`, `TRIGGER_BASED`. By default, it fetches all the points category details.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Response Parameters

Parameter | Datatype | Description
--------- | -------- | ----------
customerDetails | obj | Details of the current customer.
firstName | string | Name of the customer.
lastName | string | Last name of the customer.
userId | long | Unique ID of the customer.
externalId | string | External ID of the customer.
entityType | enum | Whether the points are issued to an individual (`CUSTOMER`), or group  (`FLEET`).
pageNumber | int | Current page number. Default value - `0` (first page).
pageSize | int | Number of entries shown on the current page.
totalEntries | int | Total number of ledger entries available for the customer.
pageCount | int | Total number of pages according to the page size.
eventLogId | int | Unique log ID of the current event.
eventName | string | Name of the event associated with the points. Example - `TransactionAdd`, `PointsRedemption`, `DelayedAccrual`, `PointsExpiry`, `CustomerRegistration`, `ReturnBill`.
ledgerCreatedDate | date-time | Date and time when the points ledger entry was created.
entryDetails | obj | Details of the points ledger. 
ledgerClosingBalance | array-obj | Details of closing ledger balance on a specific date.
pointsCategory | enum | Category from which points are issued. Supported values: `Main` (redeemable account), `DelayedAccrualPointCategory` (promised points), `ExternalTriggerBasedPointCategory` (promised points). 
programName | string | Name of the loyalty program associated with points.
programId | int | Unique ID of the loyalty program.
closingBalance | float | Available closing balance on that particular end date.
netPointsOnEvent | float | Net points in the current event (by adding credits and subtracting debits).
transactionDetails | obj | Transaction details of the current points. Applicable for transaction related events.
transactionId | long | Transaction ID associated with the points.
transactionNumber | string | Transaction number associated with the points.
date | date-time | Date of the transaction.
amount | float | Net transaction amount.
store | string | Name of the store associated with the points.
storeCode | string | Unique code of the store associated with points.
tillCode | string | Unique TILL code associated with points.