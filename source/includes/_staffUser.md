
# Staff User

A Staff User is a third party that sells products of an organization. This resource consists of APIs related to managing staff user accounts. The staff user will have the properties of both Admin and TILL user.

## Create a Staff User

> Sample Request

```html
https://us.api.capillarytech.com/v2/staffuser

```

```json
{
   "username":"tim.james",
   "mobile":"9800500000",
   "email":"tim.james@example.com",
   "password":"timpass45",
   "storeCode":"east_store",
   "zoneCode":"north346",
   "ConceptCode":"mobiles3458"
}
```

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

Lets you create a staff user account for your organization.

### Resource Information
| | |
|- | -|
URI | `v2/staffuser`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser`

### Request Attributes
Any one user identifier is mandatory.

Attribute | Description
--------- | -----------
username | Specify the user name for the current staff user account
mobile | Specify the mobile number of the staff user
email | Specify the mobile number of the staff user
password | Specify the password for the user account
storeCode | Specify the store code to which you want to associate the user. If no store code is passed, the user is associated to the **InfluenceStore** by default store
zoneCode | Specify the zone code to which you want to associate the user. If this is not passed, the zone will be associated according to to the store associated to the user
ConceptCode | Specify the zone code to which you want to associate the user. If this is not passed, the concept will be associated according to to the store associated to the user


## Send OTP
> Sample Request 

```html
https://us.api.capillarytech.com/v2/staffuser/sendOtp?otp_type="VALIDATE_EMAIL"

```

> Sample POST Request

```json
{
   "id":"12",
   "mobile":"9800500000",
   "email":"tim.james@example.com",
   "username":"tim.james"
}
```

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

Issues OTP to to authenticate a user login, or validate mobile number/email id.


### Resource Information
| | |
| - | - |
URI | `v2/staffuser/sendOtp?otp_type="<otp type>"`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser/sendOtp?otp_type="<otp type>"`

**Request Parameter**
`otp_type` : The purpose for which you want to issue OTP - either to login, validate email id, or validate mobile number. **Values**: LOGIN, VALIDATE_EMAIL, VALIDATE_MOBILE respectively

### Request Attributes

Attribute | Description
--------- | -----------
id* | The unique user id created for the staff
username* | Registered username of the staff user
mobile | Registered mobile number of the user to send OTP. You can use this to validate mobile number and also to authenticate login
email | Registered email id of the user to send OTP. You can use this to validate email id and also to authenticate login






## Validate OTP

> Sample Request 

```html
https://us.api.capillarytech.com/v2/staffuser/validate

```

> Sample POST Request

```json
{
   "username":"tim.james",
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

When creating an account the registered mobile number/email id needs to be validated through OTP to avoid the possibility of saving fake identifiers. Also, a user can login to his/her account through OTP.
This API lets you validate the OTP sent to the user's registered mobile number/email id for a specific purpose.

### Resource Information
 | | | 
| --------- | ----------- |
URI | `/staffuser/validate`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser/validate`

Parameter | Description
--------- | -----------
username | Specify the user name for the current staff user account
mobile | Specify the mobile number of the staff user
email | Specify the mobile number of the staff user
id | Unique user id generated for the staff account
identifierType | Specify `EMAIL` for email id validation and MOBILE for mobile number validation
password | Specify the password of the user
otp | Specify the one time password received on the specified identifierType


## Get Access Token
```html
https://us.api.capillarytech.com/v2/staffuser/accessToken
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

Generates access token of the staff user. For this, the user account has to validated and active. 

### Resource Information
 | | |
| --------- | ----------- |
URI | `/staffuser/accessToken`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser/accessToken`




## Change User Password
```html
https://us.api.capillarytech.com/v2/staffuser/changePassword/timpass45

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

Lets you change the password of a staff user using his/her current password.

### Resource Information
 | | |
--------- | -----------
URI | `/staffuser/changePassword/<old_password>`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser/changePassword/timpass45`

**Additional Request Parameter in the URL**
old_password | Specify the current password of the user

Request Attribute
Attribute | Description
--------- | -----------
password | Specify your preferred new password


## Get Staff User Details 

```html
https://us.api.capillarytech.com/v2/staffuser/users 

```

> Sample Response

```json
{
    "entity": {
        "username": "staff1",
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

Retrieves the details of a specific staff user.

### Resource Information
 | | |
| --------- | ----------- |
URI | `/staffuser/users
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staffuser/users`

### Request Parameter
Parameter | Description
--------- | -----------
user identifier | Pass any identifier (username, mobile number, email id, or the unique id generated for the user (refId)) of the user to fetch details. **Values**: username, mobile, email, refId



