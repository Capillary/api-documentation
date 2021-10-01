# User Group (v2)

The new user group solves the use cases of both B2B loyalty and B2C loyalty unlike the previous version which was designed for B2C cases. This resource contains APIs to manage user groups.


## Create Group

Lets you create a new user group.

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
https://us.api.capillarytech.com/v2/userGroup2?id=2476
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

