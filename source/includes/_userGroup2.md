# User Group (v2)

The new user group solves the use cases of both B2B loyalty and B2C loyalty unlike the previous version which was designed for B2C cases. This resource contains APIs to manage user groups.


## Create Group

Lets you create a new user group. Groups you create will be automatically added to the default loyalty program of the org.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2
```

> Sample POST Request

```json
{
	"externalId": "purple_externalId",
	"groupName": "name_purple",
	"maxGroupSize": 110
}
```

> Sample Response

```json
{
    "entity": 2361,
    "warnings": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`{host}/v2/userGroup2`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
externalId* | string | External ID of the group.
groupName | string | Name of the group.
maxGroupSize* | int | Maximum members to be supported in the group.

<aside class="notice">Parameters marked with * are mandatory.</aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
entity | int | Unique ID of the group generated.


## Update User Group

Lets you create a new user group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2
```

> Sample PUT Request

```json
{
  "id": "2361",
  "externalId": "",
  "groupName": "newName2",
  "maxGroupSize": 1110
}
```

> Sample Response

```json
{
    "id": 2361,
    "groupName": "newName2",
    "maxGroupSize": 1110,
    "warnings": []
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2`
Authentication | Yes
HTTP Method | PUT
Batch Support | No


### Request URL

`{host}/v2/userGroup2`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | int | Unique ID of the group.
externalId** | string | External ID of the group.
groupName | string | New name of the group
maxGroupSize | int | New value for maximum members to be supported in the group. Default value  - `30000`.

<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>




## Get Group Details

Retrieves the details of a specific group.

> Sample Request 

```html
https://us.api.capillarytech.com/v2/userGroup2?id=2476&expiredPoints=true&expirySchedules=true
```


> Sample Response

```json
{
    "id": 2476,
    "externalId": "purple_externalId1",
    "groupStatus": "ACTIVE",
    "createdBy": 50006796,
    "createdOn": "2021-09-27T15:07:22+05:30",
	"groupName": "name_purple",
    "maxGroupSize": 110,
	"expiredPoints": [
        {
            "points": 10200.0,
            "expiredOn": "2021-11-10",
            "programId": 1400,
            "expiredPointsSummary": [
                {
                    "paType": "POINT_AWARDED_LINEITEM",
                    "paId": 1748672713,
                    "expiryUpdateReasonType": "Expiry strategy",
                    "expiryUpdateReasonNote": "NA",
                    "newExpiryDate": "2021-11-10 01:04:05.0",
                    "eventDate": "2021-11-10 01:04:05.0",
                    "points": 40.0,
                    "strategyName": "20Days_rolling"
                },
                {
                    "paType": "POINT_AWARDED",
                    "paId": 716820063,
                    "expiryUpdateReasonType": "Expiry strategy",
                    "expiryUpdateReasonNote": "NA",
                    "newExpiryDate": "2021-11-10 01:04:05.0",
                    "eventDate": "2021-11-10 01:04:05.0",
                    "points": 10000.0,
                    "strategyName": "20Days"
                }
            ]
        }
    ],
	"expirySchedules":[
      {
         "points":280.0,
         "expiryDate":"2022-11-30",
         "programId":765
      }
   ],
   "gapToUpgrade": [
        {
            "upgradeBasedOn": "CUMULATIVE_PURCHASES",
            "upgradeThreshold": 10000.0,
            "customerUpgradeEntityValues": {
                "currentValue": 0.0,
                "gapToUpgrade": 10000.0,
                "valueValidUpto": "2121-11-22",
                "setCurrentValue": true,
                "setGapToUpgrade": true,
                "setValueValidUpto": true
            },
            "setUpgradeBasedOn": true,
            "setUpgradeEntityIdentifiers": false,
            "setUpgradeThreshold": true,
            "setCustomerUpgradeEntityValues": true
        }
    ],
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2?{id/externalId}={value}`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`{host}/v2/userGroup2?{id/externalId}={value}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | int | Unique ID of the group to fetch.
externalId** | string | External ID of the group to fetch.
expiredPoints | boolean | Pass `true` to get the history of expired points.
expirySchedules | boolean | Pass `true` to get the history of points expiry schedules.
gapToUpgradeFor | int | 


<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>



### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
externalId | string | External ID of the group
groupStatus | enum | Current status of the group. Value: `ACTIVE`, `DELETED`, `INACTIVE`.
createdBy | int | ID of the user or store entity that created the group.
createdOn | date-time | Date and time of group creation in  ISO 8601 format - `YYYY-MM-DDTHH:MM:SSz`.
groupName | string | Name of the group.
maxGroupSize | int | Maximum members supported in the group. Default value - `30000`.


## Delete Group

Removes an existing group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2?externalId=purple_externalId1
```

> Sample Response

```json
{
    "warnings": []
}
```




### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2?{id/externalId}={value}`
Authentication | Yes
HTTP Method | DELETE
Batch Support | No


### Request URL

`{host}/v2/userGroup2?{id/externalId}={value}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | int | Unique ID of the group to delete.
externalId** | string | External ID of the group to delete.

<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>



## Join Member to Group

Lets you add a new member to a group.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2/join?id=2361
```

> Sample POST Request

```json
[
  {
    "userId": 416066472,
    "primaryMember": false,
     "permissions": [
      "block_points_redemption"
    ]
  }
]
```

> Sample Response

```json
{
    "response": [
        {
            "entityId": {
                "userId": 416066472,
                "groupId": 2361,
                "permissions": [
                    "block_points_redemption"
                ],
                "defaultGroup": false,
                "active": false,
                "primaryMember": false
            },
            "result": {
                "userId": 416066472,
                "groupId": 2361,
                "permissions": [
                    "block_points_redemption"
                ],
                "defaultGroup": false,
                "active": false,
                "primaryMember": false
            },
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2/join?id={id}`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`{host}/v2/userGroup2/join?id={id}`



### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | long | Unique ID of the group to which the customer needs to be added.
externalId** | string | External ID of the group to which the customer needs to be added.
primaryUserId** | long | User ID of the primary member of the group to which the customer needs to be added.
primaryMember | boolean | Pass `true` if the customer is the primary member of the group, `false` for secondary members.
permissions | array | Pass the permissions/restrictions for the customer. Values: `block_points_redemption` (disables redeeming points), 

<aside class="notice">Any one among the parameters marked with ** is mandatory. </aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
defaultGroup | boolean | Whether it is the default group for the customer.
active | boolean | Status of the customer. Internally, it is always true. 
result | obj | Actual response schema.
userId | long | Unique ID of the customer/member.
groupId | int | Group ID to which the customer is added.
defaultGroup | boolean | Whether it is a default group for the customer. This will be `true` for the primary member.
permissions | array | Permissions of the member.



## Remove User from Group

Removes a group member.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2/2361/leave?source=INSTORE&accountId=&identifierName=mobile&identifierValue=8867000000
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
URI | `/userGroup2/{groupId}/leave?source={source}&accountId={accountId}&identifierName={identifierName}&identifierValue={identifierValue}`
Authentication | Yes
HTTP Method | DELETE
Batch Support | No


### Request URL

`{host}/v2/userGroup2/{groupId}/leave?source={source}&accountId={accountId}&identifierName={identifierName}&identifierValue={identifierValue}`


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
groupId* | int | Unique ID of the group from which the customer needs to remove.


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Identifier type used to identify customer. Values: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`.
identifierValue* | string | Value of the identifierName passed. For example, `identifierName=cardExternalId&identifierValue=cardUUID123`
source* | enum | Source from which you want to fetch details. Value: `INSTORE`, `MARTJACK`, `WECHAT`, `ALL`. ( to fetch details from all sources. For sources with multiple accounts, you also need to pass the specific accountId.
accountId** |  string | For sources with multiple accounts, pass the specific accountId.

<aside class="notice">Parameters marked with * are mandatory.</aside>



## Transfer Group

Lets you transfer customers from one group to another.


> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2/transfer
```


> Sample POST Request

```json
{
  "leaveGroupId": 2361,
  "joinGroupId":2553,
  "userIds": [
    416066472
  ]
}
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
URI | `/userGroup2/transfer`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes


### Request URL

`{host}/v2/userGroup2/transfer`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
leaveGroupId* | int | Group ID from which the customer needs to be removed (the customer should be the group member already).
joinGroupId* | int | Group ID to which the customer needs to join.
userIds* | array | Unique ID of the customers that you want to transfer to the new group.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Get User Group Transactions

Retrieves the transactions of a specific group. You can also get transactions of a group member with query parameters.

> Sample Request

```html
https://us.api.capillarytech.com/v2/userGroup2/transactions?type=REGULAR&limit=100&enbed=EXTENDEDFIELDS,CUSTOMFIELDS,LINEITEMS,PAYMENTDETAILS&order=ASC&primaryUserId=420803399
```

> Sample Response

```json
{
    "data": [
        {
            "useDefaultFleetGroup": false,
            "pointSummary": {
                "issuedPoints": 40.0,
                "returnedPoints": 0.0,
                "redeemedPoints": 0.0,
                "expiredPoints": 0.0,
                "availablePoints": 40.0,
                "expiryDate": "2023-02-28T23:59:59+05:30",
                "programId": 765,
                "delayedPoints": 0.0,
                "delayedPointsReturned": 0.0,
                "redeemableFrom": "2022-02-11T18:12:50+05:30"
            },
            "userGroup2": {
                "id": 91898,
                "groupStatus": "ACTIVE",
                "lifeTimePurchases": 45000,
                "primaryUserId": 420803400
            },
            "billDetails": {
                "amount": 200.0,
                "billingStore": {
                    "id": 15089278,
                    "code": "northstore1",
                    "description": "NORTH_STORE_ONE",
                    "name": "NORTH_STORE_ONE",
                    "type": "STORE",
                    "adminType": "GENERAL",
                    "isActive": true,
                    "isOuEnabled": false,
                    "timeZoneId": 0,
                    "currencyId": 44,
                    "languageId": -1
                },
                "billNumber": "FC2-111112573646898_bulk2",
                "billingTime": "2022-02-11T18:12:50+05:30",
                "discount": 10.0,
                "grossAmount": 110.0,
                "note": "this is test",
                "invalidBill": false
            },
            "customFields": {
                "paymentmode": "abc"
            },
            "addWithLocalCurrency": false,
            "async": false,
            "useV2": false,
            "customerId": 420803403,
            "id": 2148592384,
            "lineItems": [
                {
                    "id": 2157283693,
                    "customerId": 0,
                    "details": {
                        "amount": 100.5,
                        "description": "",
                        "discount": 0.0,
                        "itemCode": "sku__2",
                        "qty": 1.0,
                        "rate": 100.5,
                        "serial": 0,
                        "value": 0.0,
                        "returnable": true,
                        "returnableDays": -1,
                        "extendedFields": {
                            "GrossWeight": 10.5,
                            "MetalRate": 22.02
                        }
                    },
                    "outlierStatus": "NORMAL",
                    "returnDetails": {},
                    "valid": true,
                    "returnLineItemsDtos": [],
                    "niReturnLineItemsDtos": [],
                    "addonDetails": [],
                    "splitItemsDetails": [],
                    "niReturn": false
                },
                {
                    "id": 2157283694,
                    "customerId": 0,
                    "details": {
                        "amount": 100.5,
                        "description": "",
                        "discount": 0.0,
                        "itemCode": "sku__2",
                        "qty": 1.0,
                        "rate": 100.5,
                        "serial": 0,
                        "value": 0.0,
                        "returnable": true,
                        "returnableDays": -1,
                        "extendedFields": {
                            "GrossWeight": 10.5,
                            "MetalRate": 22.02
                        }
                    },
                    "outlierStatus": "NORMAL",
                    "returnDetails": {},
                    "valid": true,
                    "returnLineItemsDtos": [],
                    "niReturnLineItemsDtos": [],
                    "addonDetails": [],
                    "splitItemsDetails": [],
                    "niReturn": false
                },
                {
                    "id": 2157283701,
                    "customerId": 0,
                    "details": {
                        "amount": 100.5,
                        "description": "",
                        "discount": 0.0,
                        "itemCode": "sku__9",
                        "qty": 1.0,
                        "rate": 100.5,
                        "serial": 0,
                        "value": 0.0,
                        "returnable": true,
                        "returnableDays": -1,
                        "extendedFields": {
                            "GrossWeight": 10.5,
                            "MetalRate": 22.02
                        }
                    },
                    "outlierStatus": "NORMAL",
                    "returnDetails": {},
                    "valid": true,
                    "returnLineItemsDtos": [],
                    "niReturnLineItemsDtos": [],
                    "addonDetails": [],
                    "splitItemsDetails": [],
                    "niReturn": false
                },
                {
                    "id": 2157283702,
                    "customerId": 0,
                    "details": {
                        "amount": 100.5,
                        "description": "",
                        "discount": 0.0,
                        "itemCode": "sku__10",
                        "qty": 1.0,
                        "rate": 100.5,
                        "serial": 0,
                        "value": 0.0,
                        "returnable": true,
                        "returnableDays": -1,
                        "extendedFields": {
                            "GrossWeight": 10.5,
                            "MetalRate": 22.02
                        }
                    },
                    "outlierStatus": "NORMAL",
                    "returnDetails": {},
                    "valid": true,
                    "returnLineItemsDtos": [],
                    "niReturnLineItemsDtos": [],
                    "addonDetails": [],
                    "splitItemsDetails": [],
                    "niReturn": false
                }
            ],
            "outlierStatus": "NORMAL",
            "paymentModes": [],
            "type": "REGULAR",
            "warnings": [],
            "lifeTimePurchases": 0,
            "ignorePoints": false,
            "extendedFields": {
                "checkin_date": "2020-06-30T18:03:52+05:30",
                "checkout_date": "2020-07-12T18:03:52+05:30",
                "ship_first_name": "22.02",
                "ship_last_name": "10.50"
            },
            "autoUpdateTime": "2022-02-11T18:12:50+05:30",
            "transactionEventStatus": "PROCESSING_COMPLETE",
            "basketSize": 10.0
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/userGroup2/transactions?{queryParameters}`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`{host}/v2/userGroup2/transactions?{queryParameters}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
type | enum | Type of the transactions to retrieve. Value: `REGULAR`, `RETURN`. 
id** | Long | Unique ID of the user group to fetch transactions.
externalId** | String | External ID of the user group.
primaryUserId** | Long | User ID of the primary member of the group.
identifierName | enum | Identifier used for the primary user of the group. Values: `mobile`, `email`, `externalId`.
identifierValue | String | Value of the specified identifier type.
source | String | Source in which the identifier is available.
accountId | string | Account ID of the sources with multiple accounts.
transactionId | int | Fetch transaction details by transaction id.
billNumber | String | Fetch transaction details by bill number.
customerId | Long | Fetch group transactions made by the customer
startDate | String | Filter results where transaction_date >= startDate. Pass `ISO` standard date format.
endDate | String | Filter results where transaction_date < end_date. Pass `ISO` standard date format.
embed | enum | Additional details that needs to be fetched. Values: `EXTENDEDFIELDS`, `CUSTOMFIELDS`, `LINEITEMS`, `PAYMENTDETAILS`. You can pass multiple values each separated by a comma. `PAYMENTDETAILS` is supported only for regular transaction.
getDataForAllPrograms | boolean | Pass `true` to fetch transactions from all program data (future use case).
offset | long | Offset of the first entry in the result. This should be positive. If offset is less than 0, then 0 default offset will be used.
limit | int | Maximum number of results to show. This should be positive. if limit is less <=0, then the default limit `20` is  considered.
order | enum | Arranges the transactions based on the value set in sort in an ascending (asc) or descending order (desc). By default, results are shown in the descending order of transactionDate.
creditNotes | boolean | Pass `true` to fetch creditNotes details.

<aside class="notice">Any one identifier is needed. If you are using identifierName, then identifierValue, and source required.</aside> 



## Response Codes


### Error Codes

Code | Description
---- | -----------
403 | Field {x} is mandatory.
1619 | Group id {x} is invalid
1620 | User {x} does not belong to group {y}.
1622 | Users does not belong to same company.
1623 | User {x} already present in group {y}.
1624 | Group transfer not allowed for primary member {x}
1632 | Group id/externalId/primary userId {x} passed is not valid.
1633 | Group external Id {x} already exists.
1634 | Group externalId can't be null
1635 | Group query param is not passed.
1636 | Customer is already a member of the group.
1637 | Primary member exists for the group.
1638 | Total members in the group reached maximum group capacity {x}.
1639 | Group max size can not exceed product limit {x}
1640 | Group max size field should be a positive value.
1641 | Invalid permission code {x} passed.
1642 | User is primary member in a different group.
1643 | Nothing to update in the group
1644 | Group details not passed.
1645 | Group details passed are not valid.
8015 | Customer not found for the given identifiers.
8069 | Merged customer found.

