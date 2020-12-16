# Marvel Rewards

Rewards are incentives issued customers from a specific org. Rewards could be in the form of either points and coupons. Again, coupons are categorized into physical and digital vouchers.
* **Vouchers**: Digital coupons generated against redeeming customer points. For example, redeem 50 points for 10% off coupon. 
* **Physical voucher**: Physical coupons generated against redeeming customer points. For example, redeem 150 points for flat 150 off coupon.
* **Free voucher**: Digital coupons generated without any points redemption.

Based on the source of issual, rewards are of the following types:

* **InTouch only rewards**: These are points or coupons created in Capillary and users Capillary APIs. 
* **Vendor only rewards**: These are either points or coupons created at the vendor end. Capillary uses vendor specific APIs directly to identify and issue rewards.
* **InTouch + Vendor rewards**: These are vendor rewards Vendor rewards with reference created at the Capillary end.



<aside class="notice">The API details mentioned herein are only for your reference. These APIs are exposed by creating Wrapper APIs using our API gateway for an organization on need basis. Postman Collection for the APIs can be requested through Capillary Support during or after onboarding the org. </aside>



### Resource Information

|     |     |
| --- | --- |
host | **APAC**: https://apac-apigateway.capillarytech.com/
Authentication | [Customer Authentication](https://capillary.github.io/api-documentation/#customer-authentication). |

 






## Get Brand Rewards

Retrieves rewards of a specific brand.

> Sample Request

```html
https://apac-apigateway.capillarytech.com/mobile/v2/api/marvel/reward/details?sortBy=asc&orderBy=intouchPoints&area=hsr&language=en&city=bangalore&tier=&type=&group=&label=&country=india&category=fuel
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"User Reward fetched successfully"
   },
   "rewardList":[
      {
         "id":489,
         "name":"50 NFR Discount Voucher",
         "description":"50 NFR Discount Voucher",
         "imageId":"49J2711828.image/jpeg",
         "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2711828.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=21d7bc16a4af1d99894a235bb53e4e08f79d81e524572f75ec475799e983c425",
         "thumbnailId":"49J2719V29.image/jpeg",
         "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2719V29.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e3ce9dcae77d8dd0680ac28ba6745fcbcfcf795ee6922eabeced5234f8bd8657",
         "termAndConditionsId":"49J271AC30.html",
         "termAndConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J271AC30.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=1c71e0cfb2573537747f8fa01771fbe95756ecabe57cdcc404a8b724393fb0fd",
         "tier":"",
         "label":"",
         "priority":3,
         "intouchPoints":100,
         "group":"",
         "startTime":"2020-10-17 14:00:36",
         "endTime":"2026-12-31 03:00:36",
         "expired":false,
         "started":true
      },
      {
         "id":488,
         "name":"Ferrari Merchandise",
         "description":"Ferrari Merchandise",
         "imageId":"49J2H0VB31.image/jpeg",
         "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2H0VB31.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=3e04f3284253d58ffef1a44ce704c57846f1a401f16451cc4caf923314b36616",
         "thumbnailId":"49J2H12D32.image/jpeg",
         "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2H12D32.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=6e3a36312b7f1bf1de3ec578f91a8f50e761e9c85332592507f1a2d9dc3f0f90",
         "termAndConditionsId":"49J3M0Y134.html",
         "termAndConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J3M0Y134.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e7fabaa9221d48ccef0172bee64554a5e98566d2ebd5b2a0af6c71e018dab5be",
         "tier":"GIFT",
         "label":"",
         "priority":1,
         "intouchPoints":300,
         "group":"",
         "startTime":"2020-10-16 09:34:39",
         "endTime":"2021-01-27 00:34:39",
         "expired":false,
         "started":true
      },
      {
         "id":380,
         "name":"200 Fuel Discount Voucher",
         "description":"200 Fuel Discount Voucher",
         "imageId":"49H500SIB1.image/png",
         "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49H500SIB1.image/png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e8935ddf0b679032b963212f3f8bfcb6b1ef7adbac6c1dd6baf6b3b795291e44",
         "thumbnailId":"49H500Z2B2.image/png",
         "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49H500Z2B2.image/png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4cf5a4ab4c03c04344914d6431f31b5887fd8899ae93252d0cacca97a590c67e",
         "termAndConditionsId":"49H5010FB3.html",
         "termAndConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49H5010FB3.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T143336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=d20daa142088a398d2ec73fe747fbafc98a62b3a526e4008eec129f48255ffdd",
         "tier":"",
         "label":"",
         "priority":1,
         "intouchPoints":250,
         "group":"",
         "startTime":"2020-09-02 12:50:53",
         "endTime":"2026-12-29 05:50:53",
         "expired":false,
         "started":true
      }
   ],
   "pagingDto":{
      "last":true,
      "totalElements":3,
      "totalPages":1,
      "numberOfElements":3,
      "first":true,
      "size":1000,
      "number":0
   }
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/mobile/v2/api/marvel/reward/details`
HTTP Method | GET
Authentication | Customer Auth
API Version | v2
Batch Support | No
Rate Limited | No

### Request URL
`{host}/mobile/v2/api/marvel/reward/details?sortBy={asc/desc}&orderBy={}&area=hsr&language={langCode}&city={city}&tier={}&type={}&group={}&label={}&country={}&category={}`


### Request Headers

Header | Description
------ | -----------
cap_authorization* | Unique token generated for the customer.
cap_brand* | Org associated with the token to issue rewards.
cap_device_id* | Unique device ID the customer used for authentication.
cap_mobile* | The registered mobile number of the customer.



### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
brandName* | string | Name of the brand by which you want to fetch rewards.
city | string | Filter rewards by city. Pass the city name.
sortBy | enum | Pass `asc` to sort the results in ascending order of `sortBy` value, `desc` to order in descending order.
orderBy | enum | Filter results by a specific parameter. Value: `intouchVoucherExpiry`, `rewardId`, `intouchPoints`.
language | string | Specify the ISO language code to get reward details in that particular language. For example, `zh` for Chinese, `ar` for Arabic, `en` for English (default language). You can configure a reward in different languages and retrieve in a specific language only if it is configured.
area | string | Retrieve rewards of a specific region. Pass the area name.
city | string | Retrieve rewards of a specific city. Pass the city name.
country | string | Retrieve rewards of a specific country. Pass the country name.
category | string | Retrieve rewards of a specific category. Pass the category name.
label | string | Retrieve rewards tagged to a specific label. Pass the label name.
group | string | Retrieve rewards of a specific label. Pass the group name.
tier | string | Retrieve rewards of a specific tier. Pass the tier name. 
size | long | Results to show per page.
page | int | To retrieve details of a specific page. Pass `0` to not apply pagination. For example, `page=2&size=10` shows 10 results on page 2.


<aside class="notice">The parameter marked with * is mandatory. The parameter values for area, city, country, category, label, group, and tier are user-defined. You need to pass the exact names as per created on the UI.</aside>






## Get User Rewards

Retrieves rewards of a specific customer.

> Sample Request

```html
https://apac-apigateway.capillarytech.com/mobile/v2/api/marvel/vouchers/get?mobile=918848000000&cap_brand=demoBrand&username=till.1&status={{status}}&language=en
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"User Reward fetched successfully"
   },
   "userVouchers":[
      {
         "rewardDetails":{
            "rewardId":21400,
            "name":"Ferrari Merchandise",
            "description":"Ferrari Merchandise",
            "thumbnailId":"49J2H12D32.image/jpeg",
            "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2H12D32.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=d57fc7aae76c9632946f88f54cab83ff4c168642084774c0326a86c98f929a34",
            "imageId":"49J2H0VB31.image/jpeg",
            "termNConditionsId":"49J3M0Y134.html",
            "termNConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J3M0Y134.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=cbaf68a15587a4b7f07ba46f51bbd7688baf27c6d9312e2b2f0ec9ba43d211b4",
            "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2H0VB31.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=61bfabff1582fdd948ebbba6fbbd1e13eda386a6c382755fba93d78be7b0d3ce",
            "tier":"GIFT",
            "label":"",
            "group":"",
            "tillId":null
         },
         "vouchers":[
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"TL150O7R\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":21400,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"F0J8Z9AA\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":21400,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"7OK2IMSB\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":21400,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"CITHYUGK\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":21400,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"VAFCQDCS\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":21400,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            }
         ]
      },
      {
         "rewardDetails":{
            "rewardId":21400,
            "name":"50 NFR Discount Voucher",
            "description":"50 NFR Discount Voucher",
            "thumbnailId":"49J2719V29.image/jpeg",
            "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2719V29.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=dce8783763093a0b6d166c4facb42a9e9bb3db51b8a33366acdebc1831031a7f",
            "imageId":"49J2711828.image/jpeg",
            "termNConditionsId":"49J271AC30.html",
            "termNConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J271AC30.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=7d6f6ebc06627fc7e7de12489ec3f11148616ea2ee25308d43c011546f00ccac",
            "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/DemoOrg/49J2711828.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4c66b3075db316c3fac99d053ed2c84dbbe9440cf098e12d620986cd6f41f9b8",
            "tier":"",
            "label":"",
            "group":"",
            "tillId":null
         },
         "vouchers":[
            {
               "code":"KUQ3AAK7",
               "expiry":"2020-12-12 23:59:59",
               "vendor":null,
               "rewardId":21400,
               "issued":"2020-10-28T17:27:03.000+05:30",
               "seriesId":"2490",
               "seriesName":"50 NFR Discount Voucher",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            },
            {
               "code":"DBN600HI",
               "expiry":"2020-12-12 23:59:59",
               "vendor":null,
               "rewardId":21400,
               "issued":"2020-10-28T17:27:03.000+05:30",
               "seriesId":"2490",
               "seriesName":"50 NFR Discount Voucher",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            }
         ]
      },
      {
         "rewardDetails":null,
         "vouchers":[
            {
               "code":"L3CC29OJ",
               "expiry":"2120-02-24 23:59:59",
               "vendor":null,
               "rewardId":null,
               "issued":"2020-02-25T22:35:55.000+05:30",
               "seriesId":"833",
               "seriesName":"Google Mini",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            },
            {
               "code":"1DGT50TE",
               "expiry":"2120-02-24 23:59:59",
               "vendor":null,
               "rewardId":null,
               "issued":"2020-02-25T22:36:43.000+05:30",
               "seriesId":"833",
               "seriesName":"Google Mini",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            }
         ]
      }
   ],
   "pagingDto":{
      "last":true,
      "totalElements":3,
      "totalPages":1,
      "numberOfElements":3,
      "first":true,
      "size":1000,
      "number":0
   }
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/mobile/v2/api/marvel/vouchers/get`
HTTP Method | GET
Authentication | Customer Auth
API Version | v2
Batch Support | No
Rate Limited | No

### Request Headers

Header | Description
------ | -----------
cap_authorization* | Unique token generated for the customer.
cap_brand* | Org associated with the token to issue rewards.
cap_device_id* | Unique device ID the customer used for authentication.
cap_mobile* | The registered mobile number of the customer.


### Request URL

`{host}/mobile/v2/api/marvel/vouchers/get?mobile={mobile}&cap_brand={brand}&username={till}&status={status}&language={language}&orderBy={orderBy}&sortBy={sortBy}&intouch={intouch}&page={}&size={}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Mobile number of the customer to fetch rewards.
cap_brand* | string | Name of the brand (as in Capillary) associated with the rewards.
language | string | ISO language code to get rewards of that particular language. For example, `zh` for Chinese, `ar` for Arabic, `en` for English (default language). You can configure a reward in different languages and retrieve in a specific language only if it is configured.
sortBy | enum | Sort the results by a specific parameter. Value: `intouchVoucherExpiry`, `rewardId`.
orderBy | enum | Pass `asc` to order the results in ascending order of `sortBy` value, `desc` to order in descending order. 
intouch | boolean | Pass `false` to show only vendor rewards, `true` (default value) to show reward details with vouchers, including campaigns.
size | long | Results to show per page.
page | int | To retrieve details of a specific page. Pass `0` to not apply pagination. For example, `page=2&size=10` shows 10 results on page 2.


<aside class="notice">All parameters marked with * are mandatory.</aside>









## Issue User Reward 

Lets you issue rewards to a specific customer. Customer points are deducted according to the voucher issued.

<aside class="notice">Points are not deducted for free vouchers. </aside>


> Sample Request

```html
https://apac-apigateway.capillarytech.com/mobile/v2/api/marvel/rewards/issue?id=5623&till_id=internal.test.solution
```

> Sample Post Request

```json
{
    "mobile": "8848240000",
    "brand": "DemoBrand",
    "notes": "Sample note, issuing rewards to customer",
    "transactionNumber": "Cap12345",
    "validationCode": "87654",
    "redemptionTime": ""
}
```

> Sample Response (for Vendor only Rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":null,
      "codeExpiry":null
   },
   "vendor":{
      "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"S4WUGJMT\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
      "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
   }
}
```

> Sample Response (for InTouch only Rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":"ASDFGHJKL",
      "codeExpiry":"2020-10-22 17:00:00"
   },
   "vendor":{
      
   }
}
```

> Sample Response (for Vendor+InTouch rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":"ASDFGHJKL",
      "codeExpiry":"2020-10-22 17:00:00"
   },
   "vendor":{
      "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000195300\"},\"code\":\"S4WUGJMT\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"8483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
      "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
   }
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/mobile/v2/api/marvel/rewards/issue/`
HTTP Method | POST
Authentication | Customer Auth
API Version | v2
Batch Support | No
Rate Limited | No

### Request URL

`{host}/mobile/v2/api/marvel/rewards/issue?id={id}&till_id={tillCode}` 


### Request Headers

Header | Description
------ | -----------
cap_authorization* | Unique token generated for the customer.
cap_brand* | Org associated with the token to issue rewards.
cap_device_id* | Unique device ID the customer used for authentication.
cap_mobile* | The registered mobile number of the customer.

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Unique ID of the reward that you want to issue.
tillID | long | Till code that you want to associate with the rewards. 

<aside class="notice">The parameter marked with * is mandatory.</aside>



### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Registered mobile number of the customer to issue rewards.
brand* | string | Name of the brand associated with the reward.
transactionNumber* | string | Unique transaction number of the issual.

<aside class="notice">Parameters marked with * are mandatory.</aside>











## Response Codes

Code | Description
---- | -----------
200 | User rewards fetched or issued successfully. 
8000 | Unable to fetch user reward. 
8003 | Unable to issue user reward. 
8004 | Unable to issue user reward. 
8005 | User reward is disabled for the brand.
8009 | Invalid page or size passed. Page or size should not be zero.
8010 | User reward is partially successful (in case of batch issual).
