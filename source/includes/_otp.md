# OTP


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

`https://<Respective cluster’s API URL>/v2/otp/source=<source name>&accountId=<account id>&<identifier name>=<identifier Value>&scope=<POINTS/COUPONS>

### Request Attributes
Parameter | Description
--------- | -----------
identifierName | Registered identifier of the customer. Values: mobile, email, external_id, wechat
identifierValue | Specify the value of the selected identifierName
source | Specify a source in which the customer is registered
accountId | Specify the specific of the source for sources such as WeChat and Facebook
threshold | Specify the validity of the OTP (in seconds) that you want to fetch
scope | Specify the scope of the OTP issued. Values: POINTS/COUPONS



