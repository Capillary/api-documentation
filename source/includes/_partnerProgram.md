# Partner Program

## Link Partner Program

Adds loyalty customer to an org's external program or supplementary program.

<aside class="notice">You can add only registered customers of the org.</aside>

```html
https://eu.api.capillarytech.com/v2/partnerProgram/linkCustomer
```

> Sample POST Request

```json
{
  "linkCustomers": [
    {
      "customer": {
        "mobile": "6215000000",
        "email": "",
        "externalId": ""
      },
      "linkToPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram",
          "customerPartnerReference": {
            "partnerMembershipId": "621000000",
            "partnerTierName": "1stSlab",
            "partnerTierExpiryDate": "2022-12-29T23:59:59+05:30"
          }
        },
        {
          "partnerProgramName": "NoTierPartnerProgram",
          "customerPartnerReference": {
            "partnerMembershipId": "91621000000"
          }
        },
        {
          "partnerProgramName": "2ndProgram",
          "customerPartnerReference": {
            "partnerMembershipId": "621000000",
            "partnerTierName": "1stSlab",
            "partnerTierExpiryDate": "2022-12-29T23:59:59+05:30"
          }
        }
      ]
    }
  ]
}
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
                "id": 382741349,
                "mobile": "916215000000",
                "email": "916215000000@mail.com",
                "externalId": "X916215776456",
                "status": {
                    "status": true,
                    "message": "Customer successfully retrieved",
                    "code": 1000
                }
            },
            "linkToPartnerPrograms": [
                {
                    "partnerProgramName": "1stProgram",
                    "partnerLinkStatus": {
                        "status": true,
                        "message": "Success",
                        "code": 200
                    }
                },
                {
                    "partnerProgramName": "NoTierPartnerProgram",
                    "partnerLinkStatus": {
                        "status": true,
                        "message": "Success",
                        "code": 200
                    }
                },
                {
                    "partnerProgramName": "2ndProgram",
                    "partnerLinkStatus": {
                        "status": false,
                        "message": "Success",
                        "code": 200
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
Batch Support | Yes

### Request URL
`https://{host}/v2/partnerProgram/linkCustomer`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer* | obj | Details of the customer that need to link.
mobile* | string | Mobile number of the customer.
email | string | Email ID of the customer.
externalId | string | External ID of the customer.
linkToPartnerPrograms* | obj | Details of the destination partner program.
partnerProgramName* | string | Name of the partner program.
customerPartnerReference* | obj | Loyalty details of the customer with respect to the partner program.
partnerMembershipId* | string | Unique membership ID of the customer as per the partner program.
partnerTierName** | string | Name of the tier associated with the customer. Required for tier based partner program.
partnerTierExpiryDate | date-time | Expiry date and time of the tier.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Update Partner Program

Lets you update tier details of a customer in one or more partner programs. 

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
        "mobile": "919740000000",
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
{
"customersPartnerUpdates": [
    {
        "customer": {
            "id": 382741349,
            "mobile": "916215000000",
            "email": "916215000000@mail.com",
            "externalId": "X916215000000",
            "status": {
                "status": true,
                "message": "Customer successfully retrieved",
                "code": 1000
            }
        },
        "partnerProgramUpdates": [
            {
                "partnerProgramName": "1stProgram",
                "updateType": "UPGRADE",
                "updateStatus": {
                    "status": true,
                    "message": "Success",
                    "code": 200
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
URI | `v2/partnerProgram/customerPartnerProgramUpdate`
HTTP Method | POST
API Version | v2
Rate Limited | Yes
Batch Support | Yes (for 1 customer)

### Request URL
`https://{host}/v2/partnerProgram/customerPartnerProgramUpdate`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer* | obj | Details of the customer whose details need to update.
mobile** | string | Mobile number of the customer.
email** | string | Email ID of the customer.
externalId** | string | External ID of the customer.
linkToPartnerPrograms* | obj | Details of the destination partner program.
partnerProgramName* | string | Name of the partner program.
customerPartnerReference* | obj | Loyalty details of the customer with respect to the partner program.
partnerMembershipId* | string | Unique membership ID of the customer as per the partner program.
partnerTierName* | string | Name of the new tier.
partnerTierExpiryDate | date-time | Expiry date and time of the new tier.

<aside class="notice">Parameters marked with * are mandatory, any one among the parameters marked with ** is required. </aside>



## Delink Partner Program

Lets you remove a customer from one or more partner programs.

> Sample Request

```html
https://us.api.capillarytech.com/partnerProgram/deLinkCustomer
```

> Sample POST Request

```json
{
  "deLinkCustomers": [
    {
      "customer": {
        "mobile": 919800000000
      },
      "deLinkFromPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram"
        },
        {
          "partnerProgramName": "p3e1"
        }
      ]
    }
  ]
}
```

> Sample Response

```json
{
    "deLinkCustomers": [
        {
            "customer": {
                "id": 382741349,
                "mobile": "916215000000",
                "email": "916215000000@mail.com",
                "externalId": "X916215000000",
                "status": {
                    "status": true,
                    "message": "Customer successfully retrieved",
                    "code": 1000
                }
            },
            "deLinkFromPartnerPrograms": [
                {
                    "partnerProgramName": "1stProgram",
                    "partnerDeLinkStatus": {
                        "status": true,
                        "message": "Success",
                        "code": 200
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
URI | `v2/partnerProgram/deLinkCustomer`
HTTP Method | POST
API Version | v2
Rate Limited | Yes
Batch Support | Yes

### Request URL
`https://{host}/v2/partnerProgram/deLinkCustomer`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer* | obj | Details of the customer whose account needs to remove from the partner program.
mobile** | string | Mobile number of the customer.
email** | string | Email ID of the customer.
externalId** | string | External ID of the customer.
deLinkFromPartnerPrograms | obj | Details of loyalty programs from which the customer needs to remove
partnerProgramName* | string | Name of the partner program from which the customer needs to remove.
customerPartnerReference* | obj | Loyalty details of the customer with respect to the partner program.

<aside class="notice">Parameters marked with * are mandatory, at least one among the parameters marked with ** is required. </aside>


## Get Customer Activity History

> Sample Request

```json
https://eu.api.capillarytech.com/v2/partnerProgram/customerActivityHistory?source=instore&identifierName=externalId&identifierValue=5c3c2dasc6b5f33c82fb71f679daf56dq&partnerProgramId=35&activityType=benefitsAvailed&startDate=2020-01-29+12:11:45&endDate=2021-10-29+12:11:45
```

> Sample Response

```json
{
  "partnerProgramDetails": {
    "partnerProgramId": 0,
    "partnerProgramName": "string",
    "partnerProgramDescription": "string",
    "partnerTierNumber": 0,
    "partnerTierName": "string",
    "partnerTierExpiryDate": "2021-10-27T13:17:47.677Z",
    "partnerMembershipId": "string",
    "partnerProgramType": "string",
    "partnerProgramMembershipStartDate": "2021-10-27T13:17:47.677Z",
    "partnerProgramMembershipEndDate": "2021-10-27T13:17:47.677Z",
    "partnerProgramMembershipLastUpdatedDate": "2021-10-27T13:17:47.677Z",
    "partnerProgramMembershipLastUpdatedActivity": "string",
    "benefitsSummary": [
      {
        "name": "string",
        "type": "string",
        "mappedPromotionDetails": {
          "promotionId": 0,
          "promotionName": "string",
          "promotionReferenceNumber": "string"
        },
        "maximumAvailableInCycle": 0,
        "additionalIssuanceInCurrentCycle": 0,
        "countAvailedInCurrentCycle": 0,
        "countAvailedInLast365Days": 0
      }
    ],
    "tierBased": false
  },
  "customerActivityHistory": [
    {
      "activityType": "string",
      "activityDate": "2021-10-27T13:17:47.677Z",
      "benefitDetails": {
        "name": "string",
        "type": "string",
        "billDate": "2021-10-27T13:17:47.677Z",
        "billNumber": "string",
        "billId": 0,
        "tillId": 0,
        "tillName": "string",
        "storeName": "string"
      }
    }
  ],
  "notes": "string",
  "uniqueId": "string",
  "warnings": [
    {
      "status": false,
      "code": 0,
      "message": "string"
    }
  ],
  "errors": [
    {
      "status": false,
      "code": 0,
      "message": "string"
    }
  ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/partnerProgram/`
HTTP Method | GET
API Version | v2
Rate Limited | Yes
Batch Support | No

### Request URL
`https://{host}/v2/partnerProgram/






## Response Codes

### Error Codes

Code | Description
---- | -----------
2001 | Cannot process the partner program event.
2002 | Cannot proceed if `updateDetails`, `updatedTierName`, or `partnerProgramName` is empty or null.
2003 | Partner tier expiry date should not be a past date.
2004 | Link the customer with the partner program.
2005 | Customer is already linked with the partner program.
2005 | Enroll the customer in the Loyalty Program.
2006 | Cannot find the partner program.
2007 | Cannot find the partner program tier.
2008 | Cannot process if partner program limit is more than `50`.
2009 | updateType  supports only UPDATE, RENEW, DOWNGRADE.
2010 | Partner program events are presented in a queue for the user.
2011 | Cannot find partner program activity for the customer.
2012 | Cannot fetch partner program activity.
2013 | Input time interval should be less than a year for activity history.
2014 | Invalid input. Activity type passed should be `LINKINGUPDATES` or `BENEFITSAVAILED`.
2015 | Cannot allow the date parameter if `activityType` = `linkingUpdates`.
2016 | Incorrect benefit name.
2017 | Benefits count should be more than `0`.
2018 | Cannot add benefits to supplementary membership.
