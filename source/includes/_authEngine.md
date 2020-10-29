# Customer Authentication
Customer Authentication is a Auth Engine framework that manages end-user (customer) authentication to the organization's mobile or web application. This resource provides APIs related to authenticating web and mobile applications.

The authentication completes only after validating the mobile number or email ID through OTP.

Before starting with the Auth Engine APIs, you need to know the following backend configurations.

* Whether the password option is enabled for the org if you want to use password-based authentication.
* Whether OTP is enabled for the org and the daily limit of OTPs a customer can generate. If you need to increase the daily limit of OTPs a customer can generate in a day, log a request and assign it to the Platforms team.

Here we have provided only the details of Auth Engine APIs. To know more about Auth Engine, see  [Auth Engine Documentation](https://support.capillarytech.com/en/support/solutions/articles/4000161784-auth-engine).

### AE Host URLs:

| | |
--------- | ----------- |
ae-host | **APAC**: https://apac-s3wrapper.capillarytech.com<br> **APAC 2**: https://apac2-auth-api.capillarytech.com <br> **EU**:  https://eu-auth-api.capillarytech.com

### API Gateway URLs

| | |
--------- | ----------- |
ae-host | **APAC**: https://apac-apigateway.capillarytech.com/mobile<br> **APAC 2**: https://apac2-api-gateway.capillarytech.com/mobile



<aside class="notice">The host URL of Auth Engine is different from CRM V1.1 or V2 APIs. Please consider the URLs provided for Customer Authentication APIs. </aside>

## Generate Authentication Token

> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/token/generate
```

> Sample POST Request (to Authenticate  with Mobile/Email)

```json
{
   "identifierType":"MOBILE",
   "identifierValue":"0495678923",
    "deviceId": "deviceid1",
    "brand": "STANDARDAPP"
}
```

> Sample POST Request (to Authenticate with Username)

```json
{
   "identifierType":"USERNAME",
   "identifierValue":"9945560224",
   "mobile":"9945560224",
   "email": "",
    "deviceId": "deviceid1",
    "brand": "STANDARDAPP",
    "password":"password",
    "confirmPassword":"password"
}
```



> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrARgQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": "D-12c177af-dac7-4383-a0fb-6c09e148af8e",
        "role": "VIEW",
        "userRegisteredForPassword": false
    }
}
```

Generates authentication token using customer identifier and deviceId. To use password based authentication, the password option has to be enabled for the org. Contact Engineering team to get password enabled for your org.

Once the token is generated, you need to generate OTP and validate the OTP to complete the authentication process. For password enabled orgs, you need to verify the account for the first time.

When the token expires, you can regenerate it using `token/regenerate`.

**1. Steps to generate token for mobile apps** :

1. Generate a token using the `token/generate` API. You will get `sessionId` (valid for 15 minutes).
2. Using `sessionId`, generate an OTP.
3. Validate the OTP using `sessionId`. You will get the actual `token` along with the non-expiry `key`.
4. Use the `key` to regenerate token whenever required.

**2. Steps to generate token for Web application**:

1. Generate a session using a token generate API. You will get VIEW token and `sessionId` (valid for 15 minutes).
2. Using sessionId, generate an OTP.
3. Validate the OTP using `sessionId`. You will get the actual token. The key is not generated for web applications.
4. Use the `token` generated for validating the OTP to regenerate the token.


**3. Steps to generate token for password-based authentication**:

For the first time user:
* Use the steps mentioned above according to the type  of application - mobile app or web app .

From second time:

1. Generate a session using a token generate API. You will get VIEW token and `sessionId` (valid for 15 minutes).
2. Validate the password (password/validate) using the `sessionId` generated.






### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `/auth/v1/token/generate`
URI for Web App | `/auth/v1/web/token/generate`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | POST
Batch Support  | Yes

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/token/generate`

For web application:

`http://{ae-host}/auth/v1/web/token/generate`



### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Identifier used for token generation. Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId* | string | Unique ID of the device from which the customer has generated the token. 
brand* | string | Name of the brand or org for which authentication needs to be verified.
mobile** | string | Mobile number of the customer. Either mobile number or email ID is required to authenticate with username.
email** | string | Email ID of the customer. Either mobile number or email ID is required to authenticate with username.
password** | string | Password to login to the app.
confirmPassword** | string | Reenter the password.

<aside class="notice">Parameters marked with * are mandatory and the ones marked with ** are required when the <code>identifierType</code> is <code>USERNAME</code>. </aside>




## Generate OTP

Issues OTP to the customer's mobile number/email ID using the `sessionId` generated through the `token/generate` API.

There is a limit in the number of OTPs a customer can generate in a day. If you wish to increase or decrease the limit, contact the Platforms team.

> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/otp/generate
```

> Sample POST Request

```json
{
	"identifierType":"MOBILE",
	"identifierValue":"9940000000",
    "deviceId": "32rtsdered",
    "brand": "STANDARDAPP",
    "sessionId": "D-502259d3-d4d6-4458-bc5f-b89d3d8e4c7b"
}
```

> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```



### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `/auth/v1/otp/generate`
URI for Web App | `/auth/v1/web/otp/generate`
Rate Limited? | Yes
Authentication  | No
HTTP Method  | POST
Batch Support  | Yes

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/otp/generate`


For web application:

`http://{ae-host}/auth/v1/web/otp/generate`



### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Identifier used for authentication. Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId** | string | Unique ID of the device from which the customer has generated the token. 
brand* | string | Name of the brand or org for which authentication needs to be verified.
sessionId* | string | Session ID generated through the `v1/token/generate` API.

<aside class="notice">Parameters marked with * are mandatory and the parameter with ** is required for mobile app. </aside>


## Validate OTP

Validates the OTP generated through the `/otp/generate` API.


> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/otp/validate
```

> Sample POST Request

```json
{
	"identifierType":"MOBILE",
	"identifierValue":"9940000000",
    "deviceId": "deviceid1",
    "brand": "standardapp",
    "sessionId": "D-502259d3-d4d6-4458-bc5f-b89d3d8e4c7b",
    "otp":"276889"
}
```

> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaXNjIjoiZmFsc2UiLCJvZ2MiOlsiMTUxMDYwfHNhLmRlbW8uc29sdXRpb24iXSwiZXhwIjoxNTk3OTQzODU1LCJpYXQiOjE1OTc5NDAyNTUsInJvbCI6IlVTRVIifQ.Wyt_xxlqtmMH3lyReO718sDokngYGp_HSLuiBOyaEds",
        "key": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaWF0IjoxNTk3OTQwMjU1LCJyb2wiOiJBVVRIIn0.UKCOU1oFLPsRx5YJRkClIaRVmE1lNDCjuuKQ9nnMdhE"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": false
    }
}
```




 



### Resource Information
| | |
--------- | ----------- |
URI for Mobile App| `auth/v1/otp/validate`
URI for Web App| `auth/v1/web/otp/validate`
Rate Limited? | Yes
Authentication  | No
HTTP Method  | POST
Batch Support  | Yes

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/otp/validate`

For web application:

`http://{ae-host}/auth/v1/web/otp/validate`



### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId** | string | Unique ID of the device associated with the OTP. Not applicable for web application.
brand* | string | Name of the brand or org associated with the OTP.
sessionId* | string | Session ID generated through the `v1/token/generate` API.
otp* | long | Validation code received by the customer (either to the mobile number or email ID provided).

<aside class="notice">Parameters marked with * are mandatory. </aside>








## Validate Password

Validates the password of an existing user account and generates the access token and key. The token is valid for 15 minutes by default. You can use the `key` to regenerate token. 


> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/password/validate
```

> Sample POST Request

```json
{	"identifierType":"USERNAME",
	"identifierValue":"9940000000",
    "deviceId": "deviceid1",
    "brand": "KANMODEMO",
    "sessionId": "D-c62d7326-e122-4186-8c72-e42f270b0cdf",
    "password":"password"
}
```

> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaXNjIjoiZmFsc2UiLCJvZ2MiOlsiMTUxMDYwfHNhLmRlbW8uc29sdXRpb24iXSwiZXhwIjoxNTk3OTQzODU1LCJpYXQiOjE1OTc5NDAyNTUsInJvbCI6IlVTRVIifQ.Wyt_xxlqtmMH3lyReO718sDokngYGp_HSLuiBOyaEds",
        "key": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaWF0IjoxNTk3OTQwMjU1LCJyb2wiOiJBVVRIIn0.UKCOU1oFLPsRx5YJRkClIaRVmE1lNDCjuuKQ9nnMdhE"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```



### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `auth/v1/password/validate`
URI for Web App | `auth/v1/web/password/validate`
Rate Limited? | Yes
Authentication  | No
HTTP Method  | POST
Batch Support  | No

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/password/validate`

For web application:

`http://{ae-host}/auth/v1/web/password/validate`




### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId** | string | Unique ID of the device used for password validate. This should be the same as the deviceId used to generate the current token. *Not applicable for web application*. 
brand* | string | Name of the brand or org associated to the current account.
sessionId* | string | Session ID generated through the `v1/token/generate` API.
password* | string | Password of the current account. 

<aside class="notice">Parameters marked with * are mandatory and the parameters marked with ** are required for mobile app.</aside>



## Regenerate Authentication Token

> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/token/regenerate
```

> Sample POST Request (for Mobile App)

```json
{
   "identifierType":"MOBILE",
   "identifierValue":"0495678923",
    "deviceId": "32rtsdered",
    "brand": "STANDARDAPP",
	"key": ""
}
```

> Sample POST Request (for Web App)

```json
{
    "identifierType":"MOBILE",
    "identifierValue":"0495678923",
    "brand": "STANDARDAPP",	"expiredToken":"nhdbYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrHGsF"
}
```




> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrARgQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": "D-12c177af-dac7-4383-a0fb-6c09e148af8e",
        "role": "VIEW",
        "userRegisteredForPassword": false
    }
}
```

Generates authentication token using auth key or expired token generated in `otp/validate` API. By default, a token is valid for 15 minutes. You can use this API only for orgs in which password based authentication is enabled. 




### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `/auth/v1/token/regenerate`
URI for Web App | `/auth/v1/web/token/regenerate`
Rate Limited? | Yes
HTTP Method  | POST
Authentication  | No
Batch Support  | No

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/token/regenerate`

For web application:

`http://{ae-host}/{auth}/v1/web/token/regenerate`



### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | Identifier used for token generation. Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId* | string | Unique ID of the device from which the customer has generated the token. 
brand* | string | Name of the brand or org for which authentication needs to be verified.
mobile** | string | Mobile number of the customer. Either mobile number or email ID is required to authenticate with username.
email** | string | Email ID of the customer. Either mobile number or email ID is required to authenticate with username.
key** | string | Unique key generated for the successful mobile app OTP validation.
expiredToken** | string | Unique key generated for the successful web OTP validation.


<aside class="notice">Parameters marked with * are mandatory and the ones marked with ** are required when the <code>identifierType</code> is <code>USERNAME</code>. </aside>


## Change Password

Lets you modify the current password of a customer. This is applicable only for brands for which password is enabled.


> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/password/change
```

> Sample POST Request

```json
{
	"identifierType":"USERNAME",
	"identifierValue":"9940000000",
	"deviceId":"deviceid1",
    "brand": "KANMODEMO",
     "password":"password",
    "newPassword": "password1",
    "confirmPassword": "password1",
    "token": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiLCJVU0VSTkFNRXw5OTQ1NTYwMjI0Il0sImRldiI6ImRldmljZWlkMSIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5Nzg0MzczMywiaWF0IjoxNTk3ODQwMTMzLCJyb2wiOiJWSUVXIn0.pKYy3FpZm82igqp5CRUku4WF8pT5JEp6mX3P48M2qvY"
}
```

> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```








### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `auth/v1/password/change`
URI for Web App | `auth/v1/web/password/change`
Rate Limited? | Yes
Authentication  | Token-based
HTTP Method  | POST
Batch Support  | No

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/password/change`

For web application:

`http://{ae-host}/auth/v1/web/password/change`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | . Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId** | string | Unique ID of the device used for changing password. Applicable only for mobile app.
brand | string | Name of the brand or org associated to the current account.
token | string | Unique token generated for the identifierType, identifierValue and for web application, and including `deviceId` for the  mobile application.
password | string | Existing password of the account.
newPassword | string | New password the customer would like to have.
confirmPassword | string | Enter the new password again.


<aside class="notice">Parameters marked with * are mandatory. </aside>





## Forget Password

Lets you set a new password if the customer has lost or forgot password. This is applicable only for brands for which password is enabled. You need to first generate `sessionId` and then use it in `password/forget`. After setting a new password, the customer customer needs to authenticate again - 1. Generate token, 2. Generate OTP, and 3. Validate OTP. 


> Sample Request URL

```html
https://apac2-auth-api.capillarytech.com/auth/v1/password/forget
```

> Sample POST Request

```json
{
	"identifierType":"USERNAME",
	"identifierValue":"9940000000",
	"deviceId":"deviceid1",
    "brand": "KANMODEMO",
    "password":"password1",
    "confirmPassword": "password1",
    "sessionId": "D-86c23a88-9062-473d-ab3a-9a27145bf321"
}
```

> Sample Response

```json
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```








### Resource Information
| | |
--------- | ----------- |
URI for Mobile App | `auth/v1/password/forget`
URI for Web App | `auth/v1/web/password/forget`
Rate Limited? | Yes
Authentication  | No
HTTP Method  | POST
Batch Support  | Yes

### Request URL

For mobile application:

`http://{ae-host}/auth/v1/password/forget`

For web application:

`http://{ae-host}/auth/v1/web/password/forget`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierType* | enum | . Values: `MOBILE`, `EMAIL`, `USERNAME`.
identifierValue* | string | Value of the specified identifierType. For example, if `identifierType` is `MOBILE`, the `identifierValue` is mobile number.
deviceId** | string | Unique ID of the device used to reset password.
brand* | string | Name of the brand or org associated to the current account.
sessionId* | string | Unique sessionId generated for the `identifierType` and `deviceId` combination.
password* | string | New password for the account.
confirmPassword* | string | Reenter the new password.


<aside class="notice">Parameters marked with * are mandatory. </aside>



## Response Codes

Code | Description
---- | -----------
1502 | Unable to validate OTP.
1503 | Unable to generate OTP.
1504 | Unable to generate token.
1505 | Invalid session.
1506 | Invalid OTP.
1507 | Mobile number does not match with the mobile number used to generate token/session.
1508 | Device ID does not match with the device ID used to generate token/session.
1509 | Brand name does not match with the brand name used to generate token/session.
1515 | User does not exist.
1518 | Reached the maximum allowed OTP retry attempts, Authenticate form the start.
1519 | Invalid details passed.
1520 | Password is enabled for the brand. Password cannot be empty.
1521 | Password and confirm password does not match.
1523 | Unable to change password.
1524 | Password is not enabled for the brand.
1525 | Cannot regenerate token, please authenticate again.
1526 | Unable to validate password.
1527 | Old password and new password cannot be same.
1528 | Invalid password, please try with the correct password.
1529 | Token has expired.
1530 | Reached the maximum allowed password retry attempts, please reset your password.
1531 | Unable to expire token.
1532 | Unable to reset password.
1534 | Reached the maximum number of OTPs allowed per customer.
1535 | Maximum OTP count per customer cannot be 0 (it has to be >= 1).
1537 | OTP is not generated for the provided details. Please generate OTP and try again.
1540 | Either mobile or email is required to send OTP.
1541 | Identifier used to generate session does not match with the identifier used to generate or validate OTP.
1542 | Password does not meet the requirements.
1543 | Username already exists.
1546 | Invalid identifierType passed.

