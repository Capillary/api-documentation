# OTP


## Fetch OTP

```html
# Sample Request
 
https://us.api.capillarytech.com/v2/otp
```


```json
# Sample Response


```

Allows fetchng recent OTP issued to a customer. For now, OTP is issued for redeeming points. If there is more than one valid OTP available for the customer, this API fetches the recently issued OTP. 

### Request URL

`https://<Respective cluster’s API URL>/v2/otp

### Request Attributes
Parameter | Description
--------- | -----------
identifierName | Registered identifier of the customer. Values: mobile, email, external_id, wechat
identifierValue | Specify the value of the selected identifierName
threshold | Specify the validity of the OTP (in seconds) that you want to fetch
scope | Specify 



