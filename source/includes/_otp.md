# Other APIs


## Fetch OTP

```html
# Sample Request
 
https://us.api.capillarytech.com/v2/otp/source=WECHAT&accountId=WECHAT-API1&identifierName=mobile&identifierValue=8799361139&threshold=60&scope=POINTS
```


```json
# Sample Response
{
"orgId": 966,
"userId": 313302314,
"code": "538AD87",
"validUpto": "2017-08-07T21:44:20+05:30",
"warnings":[]
}

```

Allows fetchng recent OTP issued to a customer. For now, OTP is issued for redeeming points. If there is more than one valid OTP available for the customer, this API fetches the recently issued OTP. 

### Request URL

`https://<Respective cluster’s API URL>/v2/otp/source=<source name>&accountId=<account id>&<identifier name>=<identifier Value>&scope=<POINTS/COUPONS>`

### Request Attributes
Parameter | Description
--------- | -----------
identifierName | Registered identifier of the customer. Values: mobile, email, external_id, wechat
identifierValue | Specify the value of the selected identifierName
source | Specify a source in which the customer is registered
accountId | Specify the specific of the source for sources such as WeChat and Facebook
threshold | Specify the validity of the OTP (in seconds) that you want to fetch
scope | Specify the scope of the OTP issued. Values: POINTS/COUPONS


## Generate External IDs

```html
# Sample Request
 
https://us.api.capillarytech.com/v2/cardNumber
```


```json
# Sample Response
{
    "entity": "1000000010",
    "warnings": []
}
```

This API lets you generate external ids manually which can be tagged to a customer while registering. A unique external id is generated every time you call this API. To generate external ids, the option CONF_CARD_NUMBER_GENERATION_ENABLED on InTouch > Settings > Miscellaneous> Registration Configuration page should have enabled. When a customer is registered without an external id, this API is called in the backend and the unique external id is tagged to the customer automatically. However, it will not override external ids if entered manually.

### Prerequisites

* This API works only if CONF_CARD_NUMBER_GENERATION_ENABLED and CONF_CLIENT_V2_API_ENABLED are checked on the Registration Configuration page
* It is valid only for the account ids configured on the SOURCE_ACCOUNTS_EXTERNALID_ENABLED of the Registration Configuration page


### Request URL

`https://<Respective cluster’s API URL>/v2/cardNumber`
