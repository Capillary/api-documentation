
# Staff

A Staff is a member of the org or associated with the org who deals with selling items to end-users. This concept is introduced mainly for B2B marketing. This resource contains APIs related to managing staff accounts. The staff user will have the properties of both Admin and TILL user.

## Create a Staff Account

> Sample Request

```html
https://us.api.capillarytech.com/v2/staff

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

Lets you create a staff account for your organization.

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
`https://<Respective cluster’s API URL>/v2/staff`

### Request Attributes
At least one staff identifier is mandatory.

Attribute | Description
--------- | -----------
username | Specify the username for the current staff account
mobile | Specify the mobile number of the staff
email | Specify the mobile number of the staff
password | Specify the password for the account
storeCode | Specify the store code to which you want to associate the staff. If no store code is passed, the user is associated to the **InfluenceStore** by default store
zoneCode | Specify the zone code to which you want to associate the staff. If this is not passed, the zone will be associated according to to the store associated to the staff
ConceptCode | Specify the zone code to which you want to associate the staff. If this is not passed, the concept will be associated according to to the store associated to the staff


## Send OTP
> Sample Request 

```html
https://us.api.capillarytech.com/v2/staff/sendOtp?otp_type="VALIDATE_EMAIL"

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

Issues OTP to to authenticate a staff login, or validate mobile number/email id.


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
`https://<Respective cluster’s API URL>/v2/staff/sendOtp?otp_type="<otp type>"`

**Request Parameter**
`otp_type` : The purpose for which you want to issue OTP - either to login, validate email id, or validate mobile number. **Values**: LOGIN, VALIDATE_EMAIL, VALIDATE_MOBILE respectively

### Request Attributes

Attribute | Description
--------- | -----------
id* | The unique id created for the staff
username* | Registered username of the staff
mobile | Registered mobile number of the staff to send OTP. You can use this to validate mobile number and also to authenticate login
email | Registered email id of the staff to send OTP. You can use this to validate email id and also to authenticate login






## Validate OTP

> Sample Request 

```html
https://us.api.capillarytech.com/v2/staff/validate

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

When creating an account the registered mobile number/email id needs to be validated through OTP to avoid the possibility of saving fake identifiers. Also, a staff can login to his/her account through OTP.
This API lets you validate the OTP sent to the staff's registered mobile number/email id for a specific purpose.

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
`https://<Respective cluster’s API URL>/v2/staff/validate`

Parameter | Description
--------- | -----------
username | Specify the user name for the current staff account
mobile | Specify the mobile number of the staff 
email | Specify the mobile number of the staff 
id | Unique user id generated for the staff account
identifierType | Specify `EMAIL` for email id validation and MOBILE for mobile number validation
password | Specify the password of the staff account
otp | Specify the one time password received on the specified identifierType


## Get Access Token
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

Generates access token of the staff. For this, you need to validate and log in to the staff account. 

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
`https://<Respective cluster’s API URL>/v2/staff/accessToken`




## Change Staff Account Password
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

Lets you change the password of the staff using the the Auth or AccessToken associated to him

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
`https://<Respective cluster’s API URL>/v2/staff/changePassword`



Request Attribute
Attribute | Description
--------- | -----------
password | Specify your preferred new password


## Get Staff Details 

```html
https://us.api.capillarytech.com/v2/staff/users?username=staff1

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

Retrieves the details of a specific staff.

### Resource Information
|  | |
---|---| 
URI | `/staff/users?<identifier>=<value>`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://<Respective cluster’s API URL>/v2/staff/users?<identifier>=<value>`

### Request Parameter
Parameter | Description
--------- | -----------
user identifier | Pass any one identifier (username, mobile, email or the unique id generated for the user (refId)) of the user that you want to fetch in the format <identifier>=<value>. **Identifiers**: username, mobile, email, refId



