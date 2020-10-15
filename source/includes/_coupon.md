# Coupon
Coupon represents store promotions or discounts created through Capillary Campaign Manager. A single campaign could contain one or more coupons or coupon series. Coupons are issued to loyalty or non-loyalty customers through SMS or email.

You cannot create new coupons using coupon APIs. You can just send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id to use coupon APIs.

The V2 coupon entity just allows you to:

* Redeem coupons in batch 
* Check whether specific coupons can be redeemed or not

For any other coupon related APIs, please use v1.1 APIs. 


## Redeem Coupons

> Sample Request

```html
http://api.capillary.co.in/v2/coupon/redeem 

```

> Sample POST Request

```json
{
   "billAmount":"2000",
   "transactionNumber":"numbr9227550121",
   "user":{
      "mobile":"9177121900000"
   },
   "redemptionTime":"2019-04-04 11:49:59",
   "redemptionRequestList":[
      {
         "code":"9NUF8THR"
      }
   ]
}
```


> Sample Response

```json
{
    "redemption": [
        {
            "id": 33138363,
            "warnings": [],
            "appendedErrorMessage": "",
            "code": "JL07UAZ3",
            "discountCode": "MobilePush",
            "seriesCode": 14162,
            "isAbsolute": false,
            "couponValue": 10.0
        }
    ],
    "redemptionStatus": {
        "status": true,
        "code": 700,
        "message": "Coupon processing successful"
    },
    "customer": {
        "id": 342963216,
        "profiles": [
            {
                "firstName": "Tom",
                "lastName": "Sawyer",
                "fields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919999000000"
                    }
                ],
                "commChannels": [],
                "userId": 342963216,
                "accountId": "",
                "autoUpdateTime": "2019-10-31T17:41:25+05:30"
            }
        ]
    },
    "warnings": []
}
```


This API allows you to redeem active coupons of a loyalty customer. You can pass multiple coupons at once.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/redeem`
Authentication  | Yes
HTTP Method  | POST
Batch Support  | No

### Request URL
`http://{host}/v2/coupon/redeem`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
billAmount* | float | Transaction amount of the bill.
transactionNumber* | string | Transaction number against which the coupon needs to be redeemed
user* | enum | Specify any identifier of the user who wants to redeem coupons. Values: mobile, email, externalId
redemptionTime | date-time | Date and time when the coupon has to be redeemed in `YYYY-MM-DD HH:MM:SS` format.
code* | string | Coupon code to be redeemed.

<aside class="warning"> You need to pass either code or id as applicable </aside>




## Check if Coupon is Redeemable
```html
# Sample Request
http://us.intouch.capillarytech.com/v2/coupon/is_redeemable?mobile=917601000000&code=6B88U6ED,V080OLI6&details=false
```
> Sample Response

```json
{
   "customer":{
      "id":325666373,
      "profiles":[
         {
            "accountId":"",
            "autoUpdateTime":"2019-04-04T11:47:28+05:30",
            "commChannels":[

            ],
            "fields":{

            },
            "firstName":"firstName_667095",
            "identifiers":[
               {
                  "type":"email",
                  "value":"autoemail7601667095@gmail.com"
               },
               {
                  "type":"externalId",
                  "value":"ext_id7601667095"
               },
               {
                  "type":"mobile",
                  "value":"917601667095"
               }
            ],
            "lastName":"lastName_667095",
            "userId":325666373
         }
      ]
   },
   "redemption":[
      {
         "appendedErrorMessage":"",
         "code":"6B88U6ED",
         "isAbsolute":false,
         "isRedeemable":true,
         "numberOfRedemptionsByUser":0,
         "redemptionsLeft":-1,
         "warnings":[

         ]
      },
      {
         "appendedErrorMessage":"",
         "code":"V080OLI6",
         "isAbsolute":false,
         "isRedeemable":true,
         "numberOfRedemptionsByUser":0,
         "redemptionsLeft":-1,
         "warnings":[

         ]
      }
   ],
   "redemptionStatus":{
      "code":700,
      "message":"Coupon isRedeem successful",
      "status":true
   },
   "warnings":[

   ]
}
```

Lets you check whether a set of coupons can be redeemed or not.

### Resource Information
| | |
--------- | ----------- |
URI | `/is_redeemable?{customerIdentifier}&code={value1},{value2}...&details={true/extended}`
Authentication  | Yes
HTTP Method  | GET
Batch Support  | Yes

### Request URL
`http://{host}/v2/coupon/is_redeemable?{customerIdentifier}&code={value1},{value2}...&details={true/extended}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
user* | obj | Pass the identifier of the customer to check if his/her coupon is redeemable.
mobile/email/externalId/id* | string | Pass any of the identifiers of the customer.
code* | string | Pass the coupon code that you want to check for redemption. You can also pass multiple coupon codes separating each with a comma `,`
details | boolean | Pass `=true` to retrieve the details of the coupon series.
details=extended | - | Retrieves the details of coupon configurations (set on campaign) of that specific coupon series.

<aside class="warning"> You can pass either coupon ID or coupon code. Any one parameter is required.</aside>



## Upload Coupons in Bulk

Lets you upload coupons of a specific coupon series in bulk. 
 <aside class="notice">This is not a v2 API. Hence, all the API details including host and headers are provided in this section itself.  </aside>

> Sample Request

```curl
curl -X POST \
  https://intouch-staging.capillary.in/coupon/api/v1/upload/file/311025 \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 3056825f-5e0d-411e-a83d-e6ce0e6da3d2' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -H 'x-cap-api-oauth-token: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE2MDE5ODY1NzUsImp0aSI6IllzQndtY20xbEh6OGlYNzQ4djI4QXciLCJpYXQiOjE2MDE5ODI5NzUsInN1YiI6IlRFU1RfQ09VUE9OUyIsImNsaWVudF9pZCI6NzgsIm9yZ19pZCI6NTAxMjgsInRva2VuX3VzZSI6InRva2VuX2FjY2VzcyIsImNsaWVudF9rZXkiOiJHY3dmdUFlaEVDOE02NmNBN1RWR05OQ1E0IiwiZGVmYXVsdF90aWxsIjo1MDAwNzM5Miwic2NvcGVzIjoiW3tcInBlcm1pc3Npb25cIjpcIlJFQURXUklURVwiLFwiZW50aXR5SWRcIjoxLFwicmVzb3VyY2VzXCI6W1wiLip2MS4xL2N1c3RvbWVyLy4qXCJdfSx7XCJwZXJtaXNzaW9uXCI6XCJSRUFEV1JJVEVcIixcImVudGl0eUlkXCI6MixcInJlc291cmNlc1wiOltcIi4qdjEuMS90cmFuc2FjdGlvbi8uKlwiXX0se1wicGVybWlzc2lvblwiOlwiUkVBRFdSSVRFXCIsXCJlbnRpdHlJZFwiOjMsXCJyZXNvdXJjZXNcIjpbXCIuKnYxLjEvcG9pbnRzLy4qXCJdfSx7XCJwZXJtaXNzaW9uXCI6XCJSRUFEV1JJVEVcIixcImVudGl0eUlkXCI6NCxcInJlc291cmNlc1wiOltcIi4qXCJdfV0ifQ.YVjVaOWDK_3G_B7TjPyy-QMNGpHbjev7Z_vmOCn07dJZ5sGeQcwUbYBi4RHdeNruggH7SyEKngBRAyFGot3ha3JkdJC1IV9ux6L6xwwfgqthavj6MTV0LhMEy6tRM06LEFtYrN5CuCllJ6yM3hUc25ZZKxyEGxYMflAt65TpK-A3EJDpo8RxrY-XHAitwL_R4m6kSZ2_rxyDC2qyRv6rdkjoLRzZ7urcPTOn37EGIe0TByFRa3LSPpywlMjkTX1wcFSW1z_2XgydfoqGfBAkf8Ng4db9gEr_pP96btnRm6fvoEg0RXdfsflp_LEsWUcExPFEiQvuC5wbo0TXHLOsgA' \
  -F 'file=@/Users/rajshekar.sv/Downloads/couponCode (10).csv' \
  -F customerIdentifier=USER_ID \
  -F customerIdentifierColumn=0
```



> Sample Response

```json
{
   "success":true,
   "status":200,
   "result":{
      "orgId":0,
      "couponSeriesId":123,
      "uploadJobStatuses":[
         {
            "jobId":1,
            "uploadStatus":"STARTED",
            "createdOn":"1601835836973",
            "updatedOn":"1601835836973",
            "errorFileUrl":null,
            "successFileUrl":null,
            "uploadedFileUrl":"couponCode_1601835836573_123.csv",
            "totalUploadedCount":0,
            "actualRowCount":0,
            "errorCount":0,
            "uploadTableName":null,
            "uploadedFileName":"couponCode.csv",
            "audienceGroupId":0,
            "audienceGroupVersionId":0
         }
      ],
      "fileName":"couponCode_1601835836573_123.csv"
   }
}

```




### Resource Information
| | |
--------- | ----------- |
URI | `/coupon/api/v1/upload/file/{couponSeriedId}`
Authentication  | Yes (oAuth)
HTTP Method  | POST
Batch Support  | No

### Request URL
`{host1}/coupon/api/v1/upload/file/{couponSeriedId}`

**host1**

* **India**: https://intouch.capillary.co.in
* **Apac2**: https://apac2.intouch.capillarytech.com
* **EU**: https://eu.intouch.capillarytech.com
* **China**: https://intouch.capillarytech.cn.com

### Header Required
Header |  Description
--------- | -----------
Content-Type* | multipart/form-data

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
couponSeriesId* | long | Unique ID of the coupon series for which you need to upload coupons.

<aside class="notice">The parameter marked with * is mandatory.</aside>


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
file* | string | Name of the CSV file with customer and coupon details. <br>Sample file content: <br>File content sample for uploading the coupon code is as follows <br>customer_identifier,coupon code<br>value 1,ABCDEF1<br>value 2,ABCDEF2<br>value 3,ABCDEF3<br>File content sample for uploading customer identifier:<br> customerIdentifier<br> value 1<br> value 2<br>value 3<br>File content sample for uploading customer tagged coupons is as follows<br>customerIdentifier,coupon code<br>value 1,ABCDEF1<br>value 2,ABCDEF2<br>value 3,ABCDEF3
customerIdentifier* | enum | Customer identifier type used in the CSV file. Values: `MOBILE`, `EXTERNAL_ID`, `EMAIL`, `USER_ID`, `NOT_TAGGED`. <br>Use `NOT_TAGGED` as the identifier to upload only coupon codes.
customerIdentifierColumn | string | Column ID of the customer identifier in the uploaded CSV file. <br> For example, <br>If the first column of the file contains customer identification data, then the value of customerIdentifierColumn will be 0.<br>If the second column of the file contains customer identification data, then the value of customerIdentifierColumn will be 1.



