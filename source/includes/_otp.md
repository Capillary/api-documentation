# OTP

This section consists of APIs related to OTPs that are used to validate customers for registration or points/coupon redemption.

The functionality of OTPs depends on the configuration set on InTouch


## Generate OTP

```html

# Sample Request

https://us.api.capillarytech.com/v2/otp/generate?format=json
```

> Sample POST Request

```json
{
   "entityType":"email",
   "entityValue":"tom.sawyer@example.com",
   "action":"REGISTRATION",
   "template":"Hi user.Your OTP for validation is {{ validation_code }}.Enjoy",
   "emailTemplate":{
      "subject":"Validation Code",
      "body":"Dear Customer, The validation code for your request is: {{ validation_code }}. You will also receive the validation code by SMS on your registered mobile number shortly."
   },
   "channels":[
      {
         "type":"SMS",
         "value":"9191919191"
      },
      {
         "type":"EMAIL",
         "value":"tom.sawyer@example.com"
      },
	  {
         "type":"PHONE",
         "value":"9191919191"
      }
   ]
}

```

> Sample Response

```json

# Sample Success Response


{
	"createdId": 10,
	"warnings": []
}

```

```json

# Sample Failure Response


{
	"errors": [
    	{
        	"status": false,
        	"code": 600,
        	"message": "\"Invalid or Null action passed\""
    	},
    	{
        	"status": false,
        	"code": 602,
        	"message": "\"Invalid or Null entity value passed\""
    	}
	]
}

```

Issues validation code (OTP) to the customer's mobile number and/or email id for redeeming points/coupons, and registration.


### Resource Information
Parameter | Description
--------- | -----------
URI	| `/generate`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL
`https://{host}/v2/otp/generate`

### Request Attributes
Parameter | Datatype | Description
--------- | -------- | -----------
entityType* | enum | Specify `MOBILE` to identify customer by mobile number, or `EMAIL` to identify customer by email id.
entityValue* | string | Specify the registered  mobile number or email id of the customer based on the entityType passed.
action* | enum | Choose the action for which the OTP has to be issued. Values: `COUPON` (for coupon redemption), `POINTS` (for points redemption), `REGISTRATION`, `USERGROUP`, `SUBSCRIPTION`, `GENERIC` (for other purposes).
channels* | enum | Specify the channels through which you want to issue OTP for redemption or registration. Value: EMAIL, SMS, PHONE (phone call). You can use Phone to generate OTP through a voice call to the specified number.

<aside class="notice">Parameters marked with * are mandatory. </aside>


<aside class="notice">
If the email template is not specified, the validation code will be sent in the default email template format specified below:

`"emailTemplate":{
      "subject":"Validation Code",
      "body":"Dear Customer, The validation code for your request is: {{ validation_code }}. You will also receive the validation code by SMS on your registered mobile number shortly."
   },`
   
</aside>



## Validate OTP


> Sample Request

```html
https://us.api.capillarytech.com/v2/otp/validate
```

> Sample POST Request

```json
{
   "entityType":"email",
   "entityValue":"tom.sawyer@example.com",
   "code":"A2WX11I",
   "action":"GENERIC"
}
```

> Sample Success Response

```json

{
	"entity": true,
	"warnings": []
}


```



> Sample Failure Response

```json

{ 
  "entity": false, 
  "warnings":[] 
}

```

Lets you authenticate customer by validating the OTP sent to the customer through SMS or email and proceed with the necessary action such as redeeming points/coupons, and registering customer.

### Resource Information
Parameter | Description
--------- | -----------
URI	| `/validate`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL
`https://{host}/v2/otp/validate?format=json`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
entityType* | enum | Specify MOBILE to identify customer by mobile number or EMAIL to identify customer by email id.
entityValue* | string | Specify the registered  mobile number or email id of the customer based on the entityType passed.
code* | string | Pass the validation code received by the customer.
action | enum | Specify the action to be performed on successful validation. Values: `COUPON` (for coupon redemption), `POINTS` (for points redemption), `REGISTRATION`, `USERGROUP`, `SUBSCRIPTION`, `GENERIC` (for other purposes).



## Get OTP

> Sample Request

```html 
https://us.api.capillarytech.com/v2/otp/source=WECHAT&accountId=WECHAT-API1&identifierName=mobile&identifierValue=8799361139&threshold=60&scope=POINTS
```

> Sample Response

```json

{
   "orgId":966,
   "userId":313302314,
   "code":"538AD87",
   "validUpto":"2017-08-07T21:44:20+05:30",
   "warnings":[

   ]
}

```

Allows fetching recent OTP issued to a customer. For now, OTP is issued for redeeming points/coupons and customer registration. If there is more than one valid OTP available for the customer, this API fetches the recently issued OTP. 

### Resource Information
Parameter | Description
--------- | -----------
URI	| `/otp`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`https://{host}/v2/otp/source={source_name}&accountId={account_id}&{identifierName}={value}&scope={POINTS/COUPONS}`

### Request Attributes
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Pass any of the registered identifier type of the customer. Values: `mobile`, `email`, `external_id`, `wechat`.
identifierValue* | string | Specify the value of the specified identifierType
source | enum | Source in which the customer is registered.
accountId | string | Specific of the source for sources such as WeChat and Facebook
threshold | long | Specify the validity of the OTP (in seconds) that you want to fetch
scope | enum | Specify the scope of the OTP issued. Values: `COUPON` (for coupon redemption), `POINTS` (for points redemption), `REGISTRATION`, `USERGROUP`, `SUBSCRIPTION`, `GENERIC` (for other purposes).

<aside class="notice">Parameters marked with * are mandatory. </aside>



