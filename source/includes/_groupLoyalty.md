# Group Loyalty (Companies/Hierarchies)

Group Loyalty helps in configuring 
* B2B loyalty for business for a hierarchical business such as manufacturer, partners, distributers and dealers.
* B2C loyalty for a customer group such as friends, family members, colleagues, or relatives of a customer.


### Important Terminologies

* **Company**: Any business entity that is enrolled in the brand’s B2B loyalty program.
* **Sub-company**: A smaller business entity associated with a Company. For example, a large company like Tata can have many divisions (sub-companies) such as Tata Motors, TCS.
* **Customer Role**: Used to capture association between a customer and company. A company can have customers in various roles. For example, a company enrolled in a fleet loyalty program of a brand can have customers in various roles like fleet driver, fleet owner, and group fleet owner.
* **Customer Hierarchy**: Used to capture association between two customer roles. In the preceding example, a fleet driver can report to a fleet owner, whereas a fleet owner can report to a super fleet owner. In this case, customer hierarchy captures each role and their reporting role.
* **Hierarchy Definition**: Stores attribute required to create a hierarchy (such as customer roles), validation rules for each role, group automation and role-based loyalty permissions.
	- You can define multiple hierarchy definitions for an org and the default hierarchy definition.
	- Each client can have only 1 hierarchy. Once the hierarchy is set up, all the attributes and configurations created in the hierarchy will apply to the customers associated with the company.
* **Validation rules**: Used to define the parent-child relationship with other roles. You can limit the max. no. of child roles for each role. Configs for skip-level parent-child mapping available.
* **Group Automations**: Groups can be implicitly created when a user is associated with a specific role. The user becomes the owner of the group and other users can be added to the group based on the association with the owner.
* **Group Permissions**: Allows setting up Loyalty permissions such as points redemption and points transfer for each member of the group based on the role. 





## Create Fleet Hierarchy


Lets you create the business hierarchy for the org.


> Sample Request

```html
https://us.api.capillarytech.com/v2/fleetHierarchy
```

> Sample POST Request (with permission details)

```json
{
   "code":"Partner1",
   "name":"partner1-h1",
   "description":"Sample description",
   "roles":[
      {
         "code":"GFA",
         "childRoleCode":"SFA",
         "maxChild":5000,
         "permissions":[
            {
               "permissionCode":"block_points_redemption",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":false
            }
         ]
      },
      {
         "code":"SFA",
         "childRoleCode":"FA",
         "maxChild":5000,
         "permissions":[
            {
               "permissionCode":"block_points_redemption",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":false
            }
         ]
      },
      {
         "code":"FA",
         "childRoleCode":"FC",
         "maxChild":5000,
         "pointsAggregationRole":true,
         "permissions":[
            {
               "permissionCode":"block_points_redemption",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":true
            }
         ]
      },
      {
         "code":"FC",
         "permissions":[
            {
               "permissionCode":"block_points_redemption",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":false
            }
         ]
      }
   ],
   "autoGroupCreationEnabled":true,
   "hierarchyCreationStrict":true,
   "skipRoleAllowed":false
}
```

> Sample POST Request (without Permission details)

```json
{
	"code": "sunrise-h4",
	"name": "sunrise-h4",
	"description": "test description",
	"roles": [{
		"code": "GFA",
		"childRoleCode": "SFA",
		"maxChild": 5000
	
	
	}, {
		"code": "SFA",
		"childRoleCode": "FA",
		"maxChild": 5000
	
	}, {
		"code": "FA",
		"childRoleCode": "FC",
		"maxChild": 5000,
		"pointsAggregationRole": true
		
	}, {
		"code": "FC"
	
	}],
	"default": true,
	"autoGroupCreationEnabled": true,
	"hierarchyCreationStrict": true,
	"skipRoleAllowed":false
}
```

> Sample Response

```json
{
    "entity": 46,
    "warnings": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/fleetHierarchy`
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/fleetHierarchy`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
code* | string | Unique code of the hierarchy.
name | string | Name of the hierarchy.
description | string | Brief description about the hierarchy
roles | array | Roles and permissions of the hierarchy. You need to have at least 2 roles for a hierarchy and can extend up to 8 (max).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code | enum | Unique code of the role in the hierarchy.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;childRoleCode | string | Unique code of the child role (if any) associated with the current role.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxChild | int | Maximum number of child users that can be associated with the user in the current role. Maximum value: 30000.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;permissions | array | Permissions granted to the role. For example, Points transfer, Points redemption. These specified permissions are applicable to all users in the current role.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;permissionCode | enum | Unique code of the permission. Value: `block_points_redemption`, `block_points_transfer`, `earn_points`. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;permissionValue | boolean | Set `true` to enable and `false` to disable the code.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pointsAggregationRole | boolean | To create a group implicitly, set both `pointsAggregationRole` and `autoGroupCreationEnabled` to true. <br>The user in the current role will become the owner of the group. All the other users conjoined with the user in the hierarchy will be included automatically and become the members of the group.<br>**Example**: Assume A > B > C > D as the roles in a hierarchy.<br>A is the parent of B. B is the parent of C. C is the parent of D.<br>Set `pointsAggregationRole` to true for the role C to get a user registered.<br>The group is also automatically created along with this command. The user in role C will now be the owner of the group. <br>All the users associated with the user C, in roles A, B and D are also automatically added as members of the group.
autoGroupCreationEnabled | boolean | Pass `true` to auto-create a group. At least one role should have `pointsAggregationRole` set to true.
hierarchyCreationStrict | boolean | Pass `false` set user level permissions and group creation which will override the hierarchy configurations. Set `true` to strictly follow hierarchy configurations.
skipRoleAllowed | boolean | Pass `true` to allow skip-level parent child associations. For example, if A>B>C>D are the roles in a hierarchy where A is the parent of B and so on. We allow associations like A>C, A>D, B>D. Pass `false`, hierarchy is followed strictly according to the sequence.


<aside class="notice">Parameters marked with * are mandatory. </aside>




## Update Fleet Hierarchy


Lets you update an existing business hierarchy for the org.


> Sample Request

```html
http://us.api.capillarytech.com/v2/fleetHierarchy/46
```

> Sample PUT Request

```json
{
   "code":"code-association11",
   "name":"testFleetName",
   "description":"test description",
   "roles":[
      {
         "code":"GFA",
         "childRoleCode":"SFA",
         "maxChild":15000,
         "permissions":[
            {
               "permissionCode":"burn_points",
               "permissionValue":true
            }
         ]
      },
      {
         "code":"SFA",
         "childRoleCode":"FA",
         "maxChild":15000,
         "permissions":[
            {
               "permissionCode":"burn_points",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":true
            }
         ]
      },
      {
         "code":"FA",
         "childRoleCode":"FC",
         "maxChild":1000,
         "pointsAggregationRole":true,
         "permissions":[
            {
               "permissionCode":"burn_points",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":true
            }
         ]
      },
      {
         "code":"FC",
         "permissions":[
            {
               "permissionCode":"burn_points",
               "permissionValue":true
            },
            {
               "permissionCode":"earn_points",
               "permissionValue":true
            }
         ]
      }
   ],
   "autoGroupCreationEnabled":true,
   "hierarchyCreationStrict":true
}

```

> Sample Response

```json
{
    "entity": 46,
    "warnings": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/fleetHierarchy`
Rate Limited? | No
Authentication | Yes
HTTP Method | PUT
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/fleetHierarchy`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
code* | string | Unique code of the hierarchy.
name | string | Name of the hierarchy.
description | string | Brief description about the hierarchy
roles | obj | Roles and permissions of the hierarchy.
code | enum | Unique code of the role.
childRoleCode | string | Unique code of the child role (if any).
maxChild | long | Maximum number of child users allowed for the parent role. Maximum allowed value is 30000.
permissions | array | Permissions granted to the role. Values: `earn_points`, `burn_points`. These specified permissions are applicable to all users in the current role.
permissionCode | enum | Unique code of the permission. 
permissionValue | boolean | Set `true` to enable and `false` to disable the code.
autoGroupCreationEnabled | boolean | Pass `true` to auto-create a group. At least one role should have `pointsAggregationRole` set to true.
hierarchyCreationStrict | boolean | Pass `true` to strictly follow the hierarchy associations; `false` to allow skip-level parent child associations. For example, consider roles, A>B>C>D in a hierarchy with A being the parent of B and so on. If `hierarchyCreationStrict` is set to false, associations such as A>C, A>D, B>D are allowed. If not, strict hierarchy is followed. 
skipRoleAllowed | boolean | Pass `true` to allow skip-level parent child associations. For example, if A>B>C>D are the roles in a hierarchy where A is the parent of B and so on. We allow associations like A>C, A>D, B>D. Pass `false`, hierarchy is followed strictly according to the sequence.


<aside class="notice">Parameters marked with * are mandatory. </aside>




## Get Hierarchy Details

Retrieves details of a specific hierarchy. You cannot fetch the details of an inactive hierarchy.


> Sample Request

```html
http://us.api.capillarytech.com/v2/fleetHierarchy?id=22
```

> Sample Response

```json
{
    "createdOn": "2021-06-21T19:12:38+05:30",
    "code": "code-association11",
    "name": "testFleetName",
    "description": "test description",
    "createdBy": 15071481,
    "roles": [
        {
            "code": "GFA",
            "childRoleCode": "SFA",
            "maxChild": 15000,
            "hierarchyId": 22,
            "createdBy": 15071481,
            "createdOn": "2021-06-21T19:12:38+05:30",
            "permissions": [
                {
                    "permissionCode": "block_points_redemption",
                    "permissionValue": true
                }
            ],
            "pointsAggregationRole": false
        },
        {
            "code": "SFA",
            "childRoleCode": "FA",
            "maxChild": 15000,
            "hierarchyId": 22,
            "createdBy": 15071481,
            "createdOn": "2021-06-21T19:12:38+05:30",
            "permissions": [
                {
                    "permissionCode": "block_points_redemption",
                    "permissionValue": true
                },
                {
                    "permissionCode": "earn_points",
                    "permissionValue": true
                }
            ],
            "pointsAggregationRole": false
        },
        {
            "code": "FA",
            "childRoleCode": "FC",
            "maxChild": 1000,
            "hierarchyId": 22,
            "createdBy": 15071481,
            "createdOn": "2021-06-21T19:12:38+05:30",
            "permissions": [
                {
                    "permissionCode": "block_points_redemption",
                    "permissionValue": true
                },
                {
                    "permissionCode": "earn_points",
                    "permissionValue": true
                }
            ],
            "pointsAggregationRole": true
        },
        {
            "code": "FC",
            "hierarchyId": 22,
            "createdBy": 15071481,
            "createdOn": "2021-06-21T19:12:38+05:30",
            "permissions": [
                {
                    "permissionCode": "block_points_redemption",
                    "permissionValue": true
                },
                {
                    "permissionCode": "earn_points",
                    "permissionValue": true
                }
            ],
            "pointsAggregationRole": false
        }
    ],
    "id": 22,
    "hierarchyCreationStrict": true,
    "active": true,
    "autoGroupCreationEnabled": true,
    "skipRoleAllowed": false,
    "warnings": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `/fleetHierarchy?{paramName}={paramValue}`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/fleetHierarchy?id={id}`


`https://{host}/v2/fleetHierarchy?code={code}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | long | Unique ID of the hierarchy to fetch.
code** | string | Unique code of the hierarchy to fetch.

<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>


## Delete Hierarchy

Deletes an existing hierarchy.

> Sample Request

```html
https://us.api.capillarytech.com/v2/fleetHierarchy/11
```

```json
{
    "entity": 11,
    "warnings": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `/fleetHierarchy?{id}`
Rate Limited? | No
Authentication | Yes
HTTP Method | DELETE
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/v2/fleetHierarchy/{id}`

### Request Query Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Unique ID of the hierarchy to delete.

<aside class="notice">*The parameter is mandatory.</aside>

## Get Hierarchies

Retrieves hierarchies configured for the org.

> Sample Request

```html
https://us.api.capillarytech.com/v2/fleetHierarchy/all
```

> Sample Response

```json
{
   "entity":[
      {
         "createdOn":"2021-06-01T15:04:30+05:30",
         "code":"createFleetWithRoles1",
         "name":"name-212112weewe-updated",
         "description":"name-212112weewe-updated",
         "createdBy":15071481,
         "roles":[
            {
               "code":"SFA",
               "childRoleCode":"FA",
               "maxChild":2,
               "hierarchyId":1,
               "createdBy":15071481,
               "createdOn":"2021-06-01T15:04:30+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":1,
               "createdBy":15071481,
               "createdOn":"2021-06-01T15:04:30+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":1,
               "createdBy":15071481,
               "createdOn":"2021-06-01T15:04:30+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"GFAA",
               "childRoleCode":"SFA",
               "maxChild":3,
               "hierarchyId":1,
               "createdBy":15071481,
               "createdOn":"2021-06-03T12:47:35+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":true
            }
         ],
         "id":1,
         "hierarchyCreationStrict":true,
         "active":false,
         "autoGroupCreationEnabled":true,
         "skipRoleAllowed":false,
      },
      {
         "createdOn":"2021-06-02T16:22:53+05:30",
         "code":"测试",
         "description":"test description",
         "createdBy":15071481,
         "roles":[
            {
               "code":"GFA",
               "childRoleCode":"SFA",
               "maxChild":3,
               "hierarchyId":3,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:22:53+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"SFA",
               "childRoleCode":"FA",
               "maxChild":2,
               "hierarchyId":3,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:22:53+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":3,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:22:53+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":3,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:22:53+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            }
         ],
         "id":3,
         "hierarchyCreationStrict":true,
         "active":false,
         "autoGroupCreationEnabled":false,
         "skipRoleAllowed":false,
      },
      {
         "createdOn":"2021-06-02T16:24:00+05:30",
         "code":"测试一",
         "name":"测试一",
         "description":"测试一",
         "createdBy":15071481,
         "roles":[
            {
               "code":"GFA",
               "childRoleCode":"SFA",
               "maxChild":3,
               "hierarchyId":4,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:24:00+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"SFA",
               "childRoleCode":"FA",
               "maxChild":2,
               "hierarchyId":4,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:24:00+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":4,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:24:00+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":4,
               "createdBy":15071481,
               "createdOn":"2021-06-02T16:24:00+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            }
         ],
         "id":4,
         "hierarchyCreationStrict":true,
         "active":false,
         "autoGroupCreationEnabled":false,
         "skipRoleAllowed":false,
      },
      {
         "createdOn":"2021-06-02T17:15:25+05:30",
         "code":"createFleetWithRoles2",
         "name":"createFleetWithRoles2",
         "description":"createFleetWithRoles2",
         "createdBy":15071481,
         "roles":[
            {
               "code":"FA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":5,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:15:25+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":5,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:15:25+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            }
         ],
         "id":5,
         "hierarchyCreationStrict":false,
         "active":false,
         "autoGroupCreationEnabled":false,
         "skipRoleAllowed":false,
      },
      {
         "createdOn":"2021-06-02T17:17:31+05:30",
         "code":"name-4567891232",
         "name":"name-4567891232",
         "description":"name-4567891232",
         "createdBy":15071481,
         "roles":[
            {
               "code":"GFA",
               "childRoleCode":"SFA",
               "maxChild":3,
               "hierarchyId":7,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:17:31+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":true
            },
            {
               "code":"SFA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":7,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:17:31+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FA",
               "childRoleCode":"FC",
               "maxChild":2,
               "hierarchyId":7,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:17:31+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":7,
               "createdBy":15071481,
               "createdOn":"2021-06-02T17:17:31+05:30",
               "permissions":[
                  
               ],
               "pointsAggregationRole":false
            }
         ],
         "id":7,
         "hierarchyCreationStrict":true,
         "active":false,
         "autoGroupCreationEnabled":true,
         "skipRoleAllowed":false,
      },
      {
         "createdOn":"2021-07-27T19:53:59+05:30",
         "code":"FleetAutomation917145467657234",
         "name":"FlettLoyaltyAutomationName9181464331034",
         "description":"FlettLoyaltyAutomationDiscription917484461985",
         "createdBy":15071481,
         "roles":[
            {
               "code":"GFA",
               "childRoleCode":"SFA",
               "maxChild":5000,
               "hierarchyId":44,
               "createdBy":15071481,
               "createdOn":"2021-07-27T19:53:59+05:30",
               "permissions":[
                  {
                     "permissionCode":"earn_points",
                     "permissionValue":false
                  }
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"SFA",
               "childRoleCode":"FA",
               "maxChild":5000,
               "hierarchyId":44,
               "createdBy":15071481,
               "createdOn":"2021-07-27T19:53:59+05:30",
               "permissions":[
                  {
                     "permissionCode":"earn_points",
                     "permissionValue":false
                  }
               ],
               "pointsAggregationRole":false
            },
            {
               "code":"FC",
               "hierarchyId":44,
               "createdBy":15071481,
               "createdOn":"2021-07-27T19:53:59+05:30",
               "permissions":[
                  {
                     "permissionCode":"earn_points",
                     "permissionValue":true
                  }
               ],
               "pointsAggregationRole":false
            }
         ],
         "id":44,
         "hierarchyCreationStrict":true,
         "active":true,
         "autoGroupCreationEnabled":true,
         "skipRoleAllowed":true,
      }
   ],
   "warnings":[
      
   ]
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/fleetHierarchy/all`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/v2/fleetHierarchy/all`





## Get Fleet Permissions

Retrieves permissions configured for the fleet.

> Sample Request

```html
http://us.api.capillarytech.com/v2/fleet/permissions
```

> Sample Response

```json
{
    "data": [
        {
            "name": "block_points_redemption",
            "label": "Block Point Redemption",
            "module": "Loyalty",
            "defaultValue": true,
            "active": true
        },
        {
            "name": "block_points_transfer",
            "label": "Block Points Transfer",
            "module": "Loyalty",
            "defaultValue": true,
            "active": true
        },
        {
            "name": "allow_points_redemption",
            "label": "Allow Point Redemption",
            "module": "Loyalty",
            "defaultValue": true,
            "active": true
        },
        {
            "name": "allow_points_transfer",
            "label": "Allow Points Transfer",
            "module": "Loyalty",
            "defaultValue": true,
            "active": true
        }
    ],
    "warnings": [],
    "errors": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/fleet/permissions`
Rate Limited? | No
Authentication | Yes
HTTP Method | GET
Batch Support | No


* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/fleet/permissions`






# Company (User Group)

## Add Company

Lets you add a new company to the org. 

> Sample Request

```html
http://us.api.capillarytech.com/v2/companies
```

> Sample POST Request (Parent Company)

```json
{
  "name": "Purple Distributors",
  "externalId": "Purple2345",
  "hierarchyDefinitionCode": "code-association2",
  "extendedFields": {
   "industry": "Partner",
    "owner": "Capillary",
    "address1": "Temple Street, X Road",
    "address2": "",
    "address3": "",
    "address4": "",
    "company_city": "Bangalore",
    "company_state": "Karnataka",
    "company_country": "India",
    "pincode": "560068",
    "phone": "919900000000"
  }
}
```

> Sample POST Request (Child Company)

```json
{
  "name": "name-12345",
  "externalId": "917902000000",
  "hierarchyDefinitionCode": "code-tst1111",
  "extendedFields": {
    "industry": "Information Technology",
    "owner": "Tom Sawyyer",
    "address1": "maldivs",
    "address2": "US",
    "address3": "UK",
    "address4": "Paris",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "pincode": "560068",
    "phone": "9988000000"
  },
   "parentCompany": {
    "externalId": "917904511111"
  }
}
```



> Sample Response

```json
{
    "externalId": "Purple2345",
    "companyId": 98,
    "name": "Purple Distributors",
    "hierarchyDefinitionCode": "code-association2",
    "extendedFields": {
        "address1": "Temple Street, X Road",
        "company_city": "Bangalore",
        "company_country": "India",
        "company_state": "Karnataka",
        "owner": "Capillary",
        "phone": "919900000000",
        "pincode": "560068"
    },
    "warnings": [
        {}
    ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/companies`
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/companies`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name* | string | Name of the company to add.
externalId* | string | External ID of the company.
hierarchyDefinitionCode* | string | Unique code of the hierarchy applicable for the company. You can use only from hierarchies that are configured for the org.
extendedFields | obj | Details of the company in `name`:`value` pairs.
parentCompany | obj | Details of the parent or holding company. Applicable for child companies.

<aside class="notice">Parameters marked with * are mandatory.</aside>




## Delete Company

Lets you delete an existing company. The company and its associated sub-companies will go inactive. However, the customers associated with these company will still remain active.


> Sample Request

```html
http://us.api.capillarytech.com/v2/companies?externalId=ex-97608521
```



> Sample Response

```json
{
    "externalId": "ex-97608521",
    "companyId": 41,
    "name": "name-97608521",
    "hierarchyDefinitionCode": "code-tst1111",
    "isActive": false,
    "extendedFields": {
        "address1": "Lal Chowk",
        "address2": "",
        "address3": "",
        "address4": "",
        "company_city": "Delhi",
        "company_country": "India",
        "company_state": "Delhi",
        "industry": "industry1",
        "owner": "Kim",
        "phone": "9081000000",
        "pincode": "410093"
    },
    "warnings": []
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `/companies?externalId={externalId}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | Delete
Batch Support | No

### Request URL

`{host}/v2/companies?externalId=ex{{externalId}}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
externalId* | string | External ID of the company to delete.

<aside class="notice">Parameter marked with * is mandatory.</aside>


## Get Company Details

Retrieves details of a company by company ID or external ID.

> Sample Request

```html
http://us.api.capillarytech.com/v2/companies?externalId=Purple2345
```



> Sample Response

```json
{
   "externalId":"Purple2345",
   "companyId":98,
   "name":"Purple Distributors",
   "hierarchyDefinitionCode":"code-association2",
   "isActive":true,
   "extendedFields":{
      "address1":"Temple Street, X Road",
      "company_city":"Bangalore",
      "company_country":"India",
      "company_state":"Karnataka",
      "owner":"Capillary",
      "phone":"919900000000",
      "pincode":"560068"
   },
   "warnings":[
      
   ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/companies?{paramName}={paramValue}`
Authentication | Yes
HTTP Method | Get
Rate Limited? | No
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/v2/companies?externalId={externalId}`

`{host}/v2/companies?id={companyId}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
externalId** | string | External ID of the company to fetch.
id** | int | Company ID to fetch (`companyId`).

<aside class="notice">Any one among the parameters marked with ** is mandatory.</aside>






## Update Company Details

Lets you update details of a company.

> Sample Request

```html
https://us.api.capillarytech.com/v2/companies?externalId=Purple2346
```

> Sample PUT Request

```json
{
  "name": "Purple2346",
  "externalId": "Purple US",
  "hierarchyDefinitionCode": "code-tst1111",
  "extendedFields": {
    "industry": "",
    "owner": "James",
    "address1": "Hill Town",
    "address2": "US",
    "address3": "UK",
    "address4": "Paris",
    "company_city": "VC",
    "company_state": "",
    "company_country": "Georgia",
    "pincode": "560068",
    "phone": "9870000000"
  }
}
```

> Sample Response

```json
{
    "externalId": "Purple2345",
    "companyId": 98,
    "name": "Purple US",
    "hierarchyDefinitionCode": "code-association2",
    "isActive": true,
    "extendedFields": {
        "address1": "Hill Town",
        "address2": "US",
        "address3": "UK",
        "address4": "Paris",
        "company_city": "VC",
        "company_country": "India",
        "company_state": "Karnataka",
        "owner": "James",
        "phone": "9870000000",
        "pincode": "560068"
    },
    "warnings": [
        {}
    ]
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `/companies?externalId={externalId}`
Authentication | Yes
HTTP Method | PUT
Rate Limited? | No
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/v2/companies?externalId={externalId}`

`{host}/v2/companies?id={id}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id** | string | Unique ID of the company.
externalId** | string | External ID of the company.

<aside class="notice">Any one among the parameters marked with ** is mandatory.</aside>


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name | string | New name of the company.
externalId | string | External ID of the company.
hierarchyDefinitionCode | enum | Hierarchy code of the company (cannot be changed).
extendedFields | obj | Details of extended fields.

## Get Org Companies

Retrieves all companies of the org. Use filter params to get specific details.

> Sample Request

```html
https://us.api.capillarytech.com/v2/companies/all?limit=100&status=ACTIVE&sortOrder=DESC&sortBy=createdDate
```

> Sample Response

```json
{
   "pagination":{
      "limit":100,
      "offset":0,
      "sortBy":"createdDate",
      "sortOrder":"DESC",
      "total":3
   },
   "data":[
      {
         "externalId":"ppartner435",
         "companyId":99,
         "name":"Purple Partner",
         "hierarchyDefinitionCode":"code-tst1111",
         "parentCompany":{
            "externalId":"Purple2345",
            "companyId":98,
            "name":"Purple2346"
         },
         "isActive":true,
         "extendedFields":{
            "address1":"Richmond Circle",
            "owner":"James",
            "phone":"9988000000",
            "pincode":"560068"
         }
      },
      {
         "externalId":"Purple2345",
         "companyId":98,
         "name":"Purple2346",
         "hierarchyDefinitionCode":"code-association2",
         "isActive":true,
         "extendedFields":{
            "address1":"Hill Town",
            "address2":"",
            "address3":"",
            "address4":"",
            "company_city":"",
            "company_country":"India",
            "company_state":"",
            "owner":"James",
            "phone":"9870000000",
            "pincode":"560068"
         }
      },
      {
        "externalId": "917791000000",
        "companyId": 15,
        "name": "name-917869800000",
        "hierarchyDefinitionCode": "code-tst1111",
        "parentCompany": {
          "externalId": "917787000000",
          "companyId": 16,
          "name": "name-917787000000"
        },
         "isActive":true,
         "extendedFields":{
            "address1":"",
            "address2":"",
            "address3":"",
            "address4":"",
            "company_city":"Bangalore1",
            "company_country":"India",
            "company_state":"Karnataka",
            "industry":"industry2",
            "owner":"Sivjan",
            "phone":"99880000000",
            "pincode":"5600681"
         }
      }
   ],
   "warnings":[
      
   ],
   "errors":[
      
   ]
}
```

### Request URL

`{host}/v2/companies?all?{paramName}={paramValue}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
limit | int | Number of results to relative.
status | enum | Filter companies by current status. Supported values: `ACTIVE` (default), `INACTIVE`.
sortBy | enum | Sort the results by created date.  Supported values: `createdDate`, 
sortOrder | enum | Sort the results in ascending (`asc`) or descending (`desc`) order of the chosen `soryBy`
offset | int | Number of rows to be ignored from the top.

## Get Companies by Extended Field Vales

Fetches companies using the first few values of an extended field value provided.

> Sample Request

```html
https://us.api.capillarytech.com/v2/companies/extendedFieldSearch?extendedFieldName=owner&q=Capillary&limit=100&offset=1
```

> Sample Response

```json
{
    "pagination": {
        "limit": 100,
        "offset": 1,
        "total": 0
    },
    "data": [
        {
            "entityId": 113,
            "matchedExtendedField": {
                "fieldName": "owner",
                "fieldValue": "Capillary"
            },
            "externalId": "ex-9177100000",
            "name": "name-9177100000"
        },
        {
            "entityId": 75,
            "matchedExtendedField": {
                "fieldName": "owner",
                "fieldValue": "Capillary"
            },
            "externalId": "ex917800000",
            "name": "name-9178300000"
        },
        {
            "entityId": 114,
            "matchedExtendedField": {
                "fieldName": "owner",
                "fieldValue": "Capillary"
            },
            "externalId": "ex-918403067314",
            "name": "name-918400000000"
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `companies?extendedFieldSearch?{queryParam}={paramValue}`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`{host}/v2/companies?extendedFieldSearch?extendedFieldName={name}&q={value}&{queryParams}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
extendedFieldName* | string | Name of the extended field basis which companies need to be fetched.
q* | string | Enter the first few characters of the extended field value. Pass at least `3` characters. For example, `?extendedFieldName=city&q=ban` fetches all the companies that has the city name starts with Ban.
limit | int | Number of results to relative.
sortBy | enum | Sort the results by created date.  Supported values: `createdDate`.
sortOrder | enum | Sort the results in ascending (`asc`) or descending (`desc`) order of the chosen `soryBy`.
offset | int | Number of rows to be ignored from the top.

<aside class="notice">Parameters marked with * are mandatory.</aside>

## Associate Customer with Customer/Hierarchy

Lets you batch register customer or associate customer with company or hierarchy. The batch support is to register parent and child customer at the same time.

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

> Sample POST Request (Associate Child to Parent)

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
Batch Support | No



### Request URL

`{host}/v2/customers/bulk`


### Request Body Parameters

Parameter | Type | Description
--------- | ----- | -----------
loyaltyType* | enum | Loyalty status of the customer. Value: `loyalty`, `non_loyalty`.
profiles | obj | Meta information of the customer.
identifiers* | obj | Identifiers of the customer in type and value.  At least one identifier block is mandatory.
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
hierarchyCode | string | Unique code of the hierarchy to associate with the customer. All configurations set for the hierarchy will be applicable to the customer.
roleCode | string | Pre defined role code - Role of the customer in the hierarchy.
parentCustomer | obj | User profile of the parent customer.
fleetCompany | obj | Details of the company the customer is associated with.
childCustomers | obj | Profiles of the child customers.
externalId | string | External ID of the company.
profiles* | obj | Details of the customer to associate.
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




<aside class="notice">Parameters marked with * are mandatory. If identifier `type` is card, seriesCode is mandatory; if the card series has auto generation disabled, then identifier value is required.</aside>






## Update Association Details (for customer)



Lets you update group customer details.

```html
http://eu.api.capillarytech.com/v2/customers/search?limit=10&offset=0&q=tom
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
hierarchyCode | string | Unique code of the hierarchy to associate with the customer.
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
fleetCompany | obj | Details of fleet company.
externalId | string | External ID of the company.



<aside class="notice">Parameters marked with * are mandatory. </aside>





## Get Customers (Group Loyalty)

Retrieves 

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
associationEntityType | enum | Pass `parentCustomer`. Currently, only this value is supported.
associationEntityIdentifierType | enum | Identifier type used for parent customer.
associationEntityIdentifierValue | string | Value of the identifier type. 
limit | int | Limit the number of results to retrieve.
sortBy | enum | Lets you sort the list by created date, `createdon` or last updated date, `lastUpdatedOn`.
sortOrder | enum | Sort the results in ascending, `ASC` or descending, `DESC` order of sortBy.



<aside class="notice">Parameters marked with * are mandatory.</aside>





## Response Codes

Code | Description
---- | -----------
400 | Invalid input : {x}.
1600 | Fleet code {x} exists.
1601 | Fleet minimum number of roles {x} not met.
1602 | Fleet maximum number of roles {x} exceeded.
1603 | Fleet role code cannot be empty or null.
1604 | Fleet max child per role cannot be negative.
1605 | Max limit of {0} on total number of child per role exceeded for {1}.Contact support team to increase the limit.
1606 | Duplicate fleet role codes passed in the payload.
1607 | Invalid child role code passed {x}.
1608 | Cyclic hierarchy is not supported.
1609 | Fleet hierarchy ID/code {x} is invalid.
1610 | Fleet hierarchy is not active.
1611 | Fleet max child not passed for the role {x}.
1612 | Fleet child role code not passed for the role {x}.
1613 | Fleet hierarchy code cannot be null or empty.
1614 | Any one role needs to be marked as aggregation level for auto group creation to be enabled.
1615 | Role Code {x} is invalid.
1616 | Fleet hierarchy code invalid {x}.
1617 | Fleet role code for the child customers doesn't qualify the hierarchy.
1618 | Total number of child for the role {0} can not exceed {1}.
1619 | Group ID {x} invalid.
1620 | User {0} does not belong to group {1}.
1621 | User with {x} does not exist.
1622 | Users do not belong to the same company.
1623 | User {0} already present in group {1}.
1624 | Group transfer not allowed for primary member {0}.
1625 | Fleet parent customer {x} not mapped in the hierarchy.
1626 | Customer is already mapped to a different hierarchy.
1627 | Customer fleet user role can't be changed.
1628 | Customer fleet company can't be changed.
1629 | Fleet role permission code cannot be null or empty.
1630 | Fleet role permission code not exist.
1631 | Fleet role permission code {x} duplicated.
1632 | Fleet group ID/externalID/primary userID {x} passed is not valid.
1633 | Fleet group external ID {x} already exists.
1634 | Fleet group externalId can't be null.
1635 | Fleet group query param is not passed.
1636 | Customer is already a member of the group.
1637 | Primary member exists for the group.
1638 | Total members in the group reached maximum group capacity {x}.
1639 | Fleet group max size cannot exceed product limit {x}.
1640 | Fleet group max size field should be a positive value.
1641 | Invalid permission code {x} passed.
1642 | Fleet user is primary member in a different group.
1643 | Nothing to update in the fleet group.
1644 | Fleet group details not passed.
1645 | Fleet group details passed are not valid.
1646 | Fleet group transfer entity type invalid.
1647 | Get trackers entity type not set/invalid. Supported types include `FLEET`,`CUSTOMER`.<br>Default Fleet group not set for the user.
1648 | Multiple child customers cannot be marked as default for the same parent customer.
1649 | Only one role should be marked as points aggregation role.
1650 | Role can not be both pointsAggregationRole and nonAutomatedPointsAggregationRole.
1651 | Points transfer from a group can not be done by a user who is not part of the group.
1701 | Fleet hierarchy code {x} does not exist.
1702 | Company externalID {x} already exists.
1703 | Parent company externalID {0} does not exist.
1704 | Company does not exist with given ID/externalID {x}.
1705 | Fleet company is inactive.
1706 | Fleet company cannot be activated.
1707 | Fleet {x} externalID cannot be null or empty.
1708 | Fleet company identifiers ID/externalID should pass.
1709 | Fleet company cannot be parent company itself.
1710 | Cyclic parenting not supported.
1711 | Fleet hierarchy update is not allowed.







