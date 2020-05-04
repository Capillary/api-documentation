# Partner Program

## Link Partner Program

```html
https://eu.api.capillarytech.com/v2/partnerProgram/linkCustomer
```

> Sample POST Request

```json
{
  "linkCustomers": [
    {
      "customer": {
        "mobile": "919740390055",
        "email": "",
        "externalId": ""
      },
      "linkToPartnerPrograms": [
        {
          "partnerProgramName": "Apparel-Partner",
          "customerPartnerReference": {
            "partnerMembershipId": "App-919886886886",
            "partnerTierName": "Bronze",
            "partnerTierExpiryDate": "2022-12-29T23:59:59+05:30"
          }
        }
      ]
    }
  ]
}
```

> Sample Response

```json
{
  "linkCustomers": [
    {
      "customer": {
        "id": 316726161,
        "mobile": "919740390055",
        "status": {
          "status": true,
          "code": 1000,
          "message": "Customer successfully retrieved"
        }
      },
      "linkToPartnerPrograms": [
        {
          "partnerProgramName": "Apparel-Partner",
          "partnerLinkStatus": {
            "status": false,
            "code": 2001,
            "message": "partner program event failed"
          }
        }
      ]
    }
  ],
  "warnings": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/partnerProgram/linkCustomer`
HTTP Method | POST
API Version | v2
Rate Limited | Yes
Batch Support | No

### Request URL
`https://{host}/v2/partnerProgram/linkCustomer`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------



## Update Partner Program

> Sample Request

```html
http://eu.intouch.capillarytech.com/v2/partnerProgram/customerPartnerProgramUpdate
```

> Sample POST Request

```json
{
  "customersPartnerUpdates": [
    {
      "customer": {
        "mobile": "919740390055",
        "email": "",
        "externalId": ""
      },
      "partnerProgramUpdates": [
        {
          "partnerProgramName": "Apparel-Partner",
          "updateType": "UPGRADE",
          "updateDetails": {
            "updatedTierName": "Silver",
            "updatedTierExpiryDate": "2023-12-29T23:59:59+05:30"
          }
        }
      ]
    }
  ]
}

```

> Sample Response

```json

```





### Resource Information

| | |
--------- | ----------- |
URI | `v2/partnerProgram/customerPartnerProgramUpdate`
HTTP Method | POST
API Version | v2
Rate Limited | Yes
Batch Support | No

### Request URL
`https://{host}/v2/partnerProgram/customerPartnerProgramUpdate`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------