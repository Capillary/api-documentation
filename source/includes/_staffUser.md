
# Staff

A Staff is a member of the org or associated with the org who deals with selling items to end-users. This concept is introduced mainly for B2B marketing. This resource contains APIs related to managing staff accounts. The staff user will have the properties of both Admin and TILL user.

## Create a Staff Account

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff

```

> Sample POST Request

```json
{
   "username":"timjames",
   "mobile":"9800500000",
   "email":"tim.james@example.com",
   "firstname":"Tim",
   "lastname":"James",
   "title":"Manager",
   "password":"timpass45",
   "storeCode":"east_store",
   "zoneCode":"north346",
   "conceptCode":"mobiles3458"
}
```

> Sample Response

```json
{
   "entity":75025585,
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}
```

Lets admin users create a staff account for your organization.

### Resource Information
|  | |
---|---| 
URI | `v2/staff`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff`

**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user

### Request Attributes
At least one staff identifier is mandatory.

Attribute | Description
--------- | -----------
username | Specify the username for the current staff account. No special characters are allowed
mobile | Specify the mobile number of the staff
email | Specify the mobile number of the staff
password | Specify the password for the account
storeCode | Specify the store code to which you want to associate the staff. If no store code is passed, the user is associated to the **InfluenceStore** by default store
zoneCode | Specify a valid zone code associated to the store. If this is not passed, the zone will be associated according to the store code
ConceptCode | Specify the concept code associated to the store. If this is not passed, the concept will be associated according to to the store code
firstname | First name of the staff user
lastname | Last name of the staff user
title  | Role of the staff user

### Response Codes
Code | Description
---- | -----------
1001 | Password not set 
1007 | username or identifier not set
1215 | Invalid ParentZoneId/External Id/ParentConceptId specified. The the specific id will be set to the default values
1005 | The identifier already exits 
1009 | Invalid identifier details passed
1007 | email/mobile-identifier not set


## Send OTP
> Sample Request 

```html
https://us.api.capillarytech.com/v2/staff/sendOtp?otp_type=VALIDATE_EMAIL

```

> Sample POST Request

```json
{
   "id":"12",
   "mobile":"9800500000",
   "email":"tim.james@example.com",
   "username":"timjames"
}
```

> Sample Response

```json
{
    "entity": 75025586,
    "warnings": [
    ],
    "errors": [
    ],
    "success": true
}
```

To complete a staff account creation, you (admin users) need to validate the mobile number and email id through OTP sent to the registered identifiers to complete the account creation.

This API issues OTP to validate mobile number/email id. This is also used to authenticate login through OTP.


### Resource Information

|  | |
---|---| 
URI | `v2/staff/sendOtp?otp_type="<otp type>"`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://<Respective cluster’s API URL>/v2/staff/sendOtp?otp_type=<otp type>`

**Request Parameter**
`otp_type` : The purpose for which you want to issue OTP - either to login, validate email id, or validate mobile number. **Values**: LOGIN, VALIDATE_EMAIL, VALIDATE_MOBILE respectively


**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user

### Request Attributes

Attribute | Description
--------- | -----------
id* | The unique id created for the staff
username* | Registered username of the staff
mobile | Registered mobile number of the staff to send OTP. You can use this to validate mobile number and also to authenticate login
email | Registered email id of the staff to send OTP. You can use this to validate email id and also to authenticate login


### Response Codes

Code | Description
---- | ----------
1007 | EMAIL or Mobile identifier is not set
1010 | Invalid otp type passed
1009 | Invalid identifier details passed



## Validate OTP

> Sample Request 

```html
https://us.api.capillarytech.com/v2/staff/validate

```

> Sample POST Request

```json
{
   "username":"timjames",
   "mobile":"9800500000",
   "email":"tim.james@example.com",
   "id":18,
   "identifierType":"EMAIL",
   "password":"timpass45",
   "otp":"335713"
}
```

> Sample Response

```json
{
   "entity":75025586,
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}
```

Lets admin users validate OTP sent to the staff's registered mobile number or email id through the `staff/sendOtp` API.

### Resource Information
|  | |
---|---| 
URI | `/staff/validate`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff/validate`

**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user

Parameter | Description
--------- | -----------
username | Specify the user name for the current staff account
mobile | Specify the mobile number of the staff 
email | Specify the mobile number of the staff 
id | Unique user id generated for the staff account
identifierType | Specify `EMAIL` for email id validation and MOBILE for mobile number validation
password | Specify the password of the staff account
otp | Specify the one time password received on the specified identifierType


### Response Codes

Code | Description
---- | -----------
1700 | Authentication service error. Invalid OTP 
1009 |  Invalid identifier details passed
1008 |  Invalid identifier type passed



## Change Identifier

> Sample Request (Send OTP)

```html
https://us.api.capillarytech.com/v2/staff/changeidentifier/sendotp
```

> Sample POST Request (Send OTP)

```json
{ 
  "identifier":"tom1.sawyer@example.com",
 "type":"email", 
 "notes":"changing email"
}

```

> Sample Request (Validate OTP)

```html
https://us.api.capillarytech.com/v2/staff/changeidentifier
```

> Sample POST Request (Validate OTP)

```json
{ 
  "identifier":"tom1.sawyer@example.com",
 "type":"email", 
 "notes":"changing email",
"otp":"13482"
} 

```



> Sample Response

```json
{
   "entity": 75027185,
   "warnings": [
   ],
   "errors": [
   ],
   "success": true
}
```



Lets you update the mobile number/email id of the current staff user through OTP. This is a two step process - 1. Send OTP to the new identifier 2. Validate the OTP received to the new identifier.


### Resource Information
Info | Value
---- | ----- 
URI | `/staff/changeidentifier/sendotp`, `/staff/changeidentifier/`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
1. `https://{host}/v2/staff/changeidentifier/sendotp`

2. `https://{host}/v2/staff/changeidentifier`



### Response Codes

Code | Description
---- | -----------
1009 | Invalid identifier passed
1010 | Invalid otp type passed (identifier type)
1005 | Identifier already exits
1012 | Unable to send OTP to the new identifier
1007 | No identifier (email/mobile) passed to validate OTP
1700 | Invalid OTP or OTP expired
401 | Invalid authentication. Please check your username,password or authentication token
 




## Transfer Staff User

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/transfer
```

> Sample POST Request

```json
{

  "id":18,

  "username":"timjames",

  "mobile":"9800500000",

  "email":"tim.james@example.com",

  "storeCode":"stb23"

}
```


> Sample Response

```json
{
    "entity": 50007782,
    "warnings": [
    ],
    "errors": [
    ],
    "success": true
}
```

Lets admin user change the store id associated to a staff user. 

### Resource Information
Info | Value
---- | ----- 
URI | `/staff/transfer`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff/transfer`

**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user


### Request Attributes
Attribute | Description
--------- | -----------
id/username/mobile/email* | Pass any one identifier of the staff user. Id is the unique id generated for the staff account.
storeCode* | The new store code to which you want to transfer the current staff


### Response Codes

Code | Description
---- | -----------
1009 |  Invalid identifier details passed
1215 | Invalid ParentZoneId/External Ids/ParentConceptId specified. The corresponding value is to the default value


## Get Staff Users of a Store/Zone

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/getUsersList?storeCode=st123
```

> Sample Response

```json
{

    "entity": [

        {

            "username": "timjames",

            "mobile": "91841400000",

            "storeCode": "store1",

            "zoneCode": "root",

            "id": 50007775

        },

        {

            "username": "tomsawyer",

            "mobile": "91939511111",

            "storeCode": "store1",

            "zoneCode": "root",

            "id": 50007777

        },

        {

            "username": "sivaru",

            "mobile": "919395222222",

            "email": "abc4@gmail.com",

            "storeCode": "store1",

            "zoneCode": "root",

            "id": 50007782

        }

    ],

    "warnings": [

    ],

    "errors": [

    ],

    "success": true

}
```

Retrieve registered staff users of a specific store or zone. Accessible only to admin users.

### Resource Information
Info | Value
---- | ----- 
URI | `/staff/getUsersList?{requestParam}={paramValues}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://{host}/v2/staff/getUsersList?{requestParam}={paramValues}`

**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user

### Request Parameters

Any one among the following parameters is mandatory.

Parameter | Description
--------- | -----------
zoneCode | Fetch registered users of a specific zone. Pass the respective zone code 
storeCode | Fetch registered users of a specific store. Pass the respective store code

### Error Code

Code | Description
---- | -----------
1009 | Invalid identifier details passed


## Deactivate a Staff Account

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/delete
```

> Sample POST Request

```json
{

"username":"staff28",

"email":"staff.28@example.com",

"refId":222

}
```

> Sample Response

```json

```

Deactivates an existing staff user account.

### Resource Information
Info | Value
---- | ----- 
URI | `/staff/delete`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff/delete`

**Additional Headers Required**

`X-CAP-API-AUTH-KEY` : Authentication key of the admin user

`X-CAP-API-AUTH-ORG-ID` : The org id to which you want to associate the staff user

### Request Attributes

Attribute | Description
--------- | -----------
username/email/mobile/refId* | Pass any one of these identifiers. refId is the unique id generated for the staff account

### Response Codes

Code | Description
---- | ----------
1011 |  inactive user passed
1009 |  Invalid identifier details passed 


## Get Access Token
> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/accessToken
```

> Sample Response

```json
{
   "entity":"6F0-ZTOYwp4P7b6ngXx5UkDDYXm2J82mP5xxYDQ_BCV_epool6uOif_xQ7IkMNhO",
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}
```

Generates access token of the current staff. Use the staff login credentials to authenticate. 

### Resource Information
Info | Value
---- | ----- 
URI | `/staff/accessToken`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff/accessToken`







## Change Staff Account Password

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/changePassword

```

> Sample POST Request

```json
{

"password":"newpassword"

}
```

> Sample Response

```json
{
    "entity": 75025586,
    "warnings": [
    ],
    "errors": [
    ],
    "success": true
}
```

Lets you change the password of the staff using the associated Auth or AccessToken. Either you can use the auth or the login credentials.

### Resource Information
|  | |
---|---| 
URI | `/staff/changePassword`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/v2/staff/changePassword`

**Additional Header required for access token based authentication**

`X-CAP-API-ACCESS-TOKEN` : The access token of the staff user


Request Attribute
Attribute | Description
--------- | -----------
password* | Specify your preferred new password


## Get Staff Details 

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/users?username=timjames

```

> Sample Response

```json
{
    "entity": {
        "username": "timjames",
        "email": "tim.james@example.com",
        "storeCode": "eu.store1",
        "zoneCode": "root",
        "conceptCode": "root",
        "tillCode": "eu.store1staff1",
        "id": 75025598
    },
    "warnings": [
    ],
    "errors": [
    ],
    "success": true
}
```

Retrieves the details of a specific staff.

### Resource Information
|  | |
---|---| 
URI | `/staff/users?username={username}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://{host}/v2/staff/users?username={username}`

### Request Parameter
Parameter | Description
--------- | -----------
user identifier* | Pass any one identifier (username, mobile, email or the unique id generated for the user (refId)) of the user that you want to fetch in the format <identifier>=<value>. **Identifiers**: username, mobile, email, refId


### Error Code

Code | Description
---- | -----------
1009 | Invalid identifier details passed


## Edit Staff User Details

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/edit

```

> Sample POST Request

```json
{

  "firstname":"Tom",

  "id":50007774,

  "lastname":"Sawyer",

  "title":"Manager"

}
```


> Sample Response

```json
{

    "entity": {

        "firstname": "Tom",

       "lastname":"Sawyer",

       "title":"Manager",s

        "id": 50007774

    },

    "warnings": [

    ],

    "errors": [

    ],

    "success": true

}
```

Updates profile information of the respective staff user. You can use direct login or token based login. You need a new header
`X-CAP-API-ACCESS-TOKEN` for token based authentication.



### Resource Information
|  | |
---|---| 
URI | `/staff/edit`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL
`https://{host}/v2/staff/edit`

### Request Attributes
Attribute | Description
-------- | -----------
id/username/mobile/email | Pass any of the staff identifier. Id is the unique id generated for the staff user
firstname | First name of the user
lastname | Last name of the user
title | Role or Designation of the user

### Response Codes

Code | Description
---- | -----------
1009 |  Invalid identifier details passed
1011 |  Inactive user passed

## Logout

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff/logout

```

> Sample Response

```json
{
    "warnings": [
    ],
    "errors": [
    ],
    "success": true
}
```

Logs out the current staff user's access token (only for token based authentication). You need to pass the new header
`X-CAP-API-ACCESS-TOKEN` which is the user's access token.

### Resource Information
|  | |
---|---| 
URI | `/staff/logout`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://{host}/v2/staff/logout`



