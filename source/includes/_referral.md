# Referral

Referral is an act of directing new customers to the org stores. A person that refers is a referral and the person that receives the referral invite is a referee. 


## Validate Referral Code

Lets you validate referral code received by the referee.


> Sample Request

```html
https://eu.api.capillarytech.com/v2/referral/validate?code=referral345
```

> Sample Response

```json
{
    "valid": true,
    "referrer": 314606628,
    "warnings": []
}

```





### Resource Information
| | |
--------- | ----------- |
URI | `/validate?code={referalcode}`
Rate Limited? | No
Authentication | Yes
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/referral/validate?code={referralcode}`


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
referralCode* | string | Unique referral code that you want to validate.



<aside class="notice"> Parameter marked by * are mandatory. </aside>

