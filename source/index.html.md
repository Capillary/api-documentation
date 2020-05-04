---
title: Capillary API Documentation

language_tabs:
  - json
  
  

toc_footers:
  - <b>Other API Documents</b>
  - <a href="https://capillary.github.io/v1.1-API-Documentation/">CRM API Documentation v1.1</a>
  - <a href="https://capillary.github.io/ecom-api-document/">AnywhereCommerce API Documentation</a>

includes:
  - customer
  - transaction
  - customerLabels
  - otp
  - coupon
  - points
  - survey
  - userAuth
  - customerWalkin
  - verticals
  - org
  - staffUser
  - leads
  - userGroup
  - OrganizationSource
  - storeCare
  - events
  - integrations
  - eventNotifications

search: true
---

# Introduction

Capillary RESTful APIs are be consumed by Capillary and other brands that are registered with Capillary/MartJack to manage their CRM. Capillary V2 and V3 APIs support multiple sources such as InStore, MartJack, Facebook, and WeChat.

This document provides detailed information on all the APIs and guides in how to each API with the appropriate samples.


## Source
Source is an entry through which a customer is registered. Unlike v1.1 APIs, v2.0 APIs provide extended support for multiple sources, i.e., you can now manage accounts of different sources such as InStore, MartJack, WeChat, e-commerce and Facebook.

V2.0 APIs also support multiple accounts of a single source. For example, an org could have multiple accounts of WeChat and Facebook. Each account will have a different account id. You would need to pass the respective account id when making API calls.

## Account IDs
An organization can have multiple accounts of a source (such as WeChat). Each account will have a unique account id. You can manage customers from different accounts by passing the respective account id along with the source.


## Identifiers
A customer identifier is a unique identifier that is used for registering in a source such as mobile number, email id, or external id. Identifier are also used to lookup customers and retrieve their capillary unique ids.

Capillary V2.0 APIs merge accounts automatically when a same identifier is registered in different sources.For example, assume that a customer has registered on InStore using his mobile number and e-commerce site using his email id. Now, if the customer registers the same mobile number in e-commerce site, the  accounts will be merged automatically to a single customer id. You can retrieve the customer details from various sources of an organization using the unique customer id.

Before starting with v2.0 APIs, it is important to understand different official accounts created for each source and the respective account ids.


# Organization Setup
The following sub-sections guides you in authenticating your organization to use Capillary v2.0 APIs.

## Authentication
Before starting with authentication process, ensure that your organization is registered in Capillary InTouch and at least one TILL has been created for your organization. Stores and store TILLs will be created based on the size and outlets of your organization. You need to know the username and password of the TILL that you want to authenticate for making API calls. 

<aside class="notice"> To gain access to our entities in the Rest API, you need to authenticate your TILL with its username and password using the HTTP Basic Authentication.</aside>

### Basic Authentication - Authorization Header
Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password)>`

In the Authorization Header pass the Base64 decoded form of username and md5 formatted password.

For example, if the username is “store.server” and the password is 'server123', md5 of the password is 8a16a6b70505eb1f1ff7cdc0cd5559a7

Encode the username and md5 password to Base64, then the header is formed as shown below

`Authorization: Basic c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`

Now, v2 API supports submitting requests on behalf of other TILLs (active TILLs). In db the combination of attribution_lookup and lookup_code are mapped to TILL ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the db on behalf of the TILL that is mapped to the specified combination. 

To submit requests on behalf of other TILLs, include the following code along with the HEADER: 

`X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:<name>`
`X-CAP-API-ATTRIBUTION-LOOKUP:<value>`(value is case sensitive)

### OAuth
OAuth provides better security and helps you create secure passages to access your org's data through Capillary APIs. To generate oAuth client key and secret see <a href="http://developer.capillarytech.com/en/support/solutions/articles/4000154305-oauth">OAuth Documentation</a>.

Once you get key and secret, you can generate access token or JWT (JSON Web Token) using the token/generate API. JWT is a compact URL and JSON-based used to transfer data securely between two parties.

#### Resource Information
| | |
--------- | ----------- |
URI	| `/oauth/token/generate`
API Version | v3
HTTP Method | POST
Authentication Required? | No
Batch Support? | No

#### Endpoint
`https://{host}/v3/oauth/token/generate`

#### POST Request Schema

`
{
  "key": "",
  "secret": ""
}
`
<aside class="notice">The token validity will be as per the value set for the client (Token expiry duration).</aside>

> Sample Request

```html
https://eu.api.capillarytech.com/v3/oauth/token/generate
```

> Sample POST Request

```json
{
  "key": "WnCygRI1Fmlf6YudKwTxQq1LI",
  "secret": "hoqSBz6VwefECaZA8Q3oNx4V4H3pMDITksarZVES"
}
```

> Sample Response

```json
{
    "data": {
     "accessToken": "eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE1NzUyNzAyNzAsImp0aSI6IjJaX2FqUjcwYzJABChVUjlDVTVpUlEiLCJpYXQiOjE1NzUyNjk5NzAsInN1YiI6Im5hbWVfODQzNjIwODIwMSIsImNsaWVudF9pZCI6MjEsIm9yZ19pZCI6MTExNSwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIn0.Ala1-XTDlPtrHFQfCtJKsXe3h_WVyq4QOGI3ZnLNJqOa-yJc1UPGbypUysWemzEaiQC_BJ0n9G68SYkVZGi4CSVOhHRNA_dILe8y1Sa90YZKwHVHogJmIKzLmksJrTbjn8s8hSMePBaaUcEdUZ1XssxdFrZhEHHN1fWVYtkdb74PB3sZ7OMDqKUysON8YTNQxLgKOJ3kq0o2QUUDQo1q3gxXFuswate6-jj3oBkcdd1ohhXkPIWZlAb_1lRcLr-ECaaBfh473gayeMVV_6khdKJ7cXrUQ3CXppkrPIzBb7rS6I93iWZw0IlmWbaGduTmPPOhLX6HZLOb84Y28st-cw",
        "ttlSeconds": 300
    },
    "errors": null
}
```

### Other Headers Required
* **Content type** - This should be set as application/json

* **Accept** - This should also be set as application/json

## Resource Information

### Request URL Format	
`https://{host}/v2/{resource}/{endpoint}?{query params}`

Entry | Description
----- | -----------
Host | The server to which the API calls are made, usually the cluster URL. <br> * India: apac.intouch.capillary.co.in<br> * APAC2: apac2.intouch.capillarytech.com<br> * EU: eu.intouch.capillarytech.com<br> * US: us.intouch.capillarytech.com<br> * CN: intouch.capillarytech.cn.com
BasePath | v2 or v3(API version)
Resource | Provide the appropriate entity based on the action to be performed. **Supported Resources**: customers, communications, coupon, organization, points, product, store, transaction, goodwill requests, add events, integration resources, referral, request and other resources.
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods GET, PUT, DELETE and POST.
Response Format | JSON. All V2 and V3 APIs support only JSON response.



## Response Codes
The following are global success and error codes. The response codes of each resource are provided in the respective sections.

Code | Description
---- | -----------
200 | Global request success.
201 | One or more requests have failed due to errors.
400 | Invalid input. Please check request body parameters or input xml/json. <br> Invalid path parameter. <br>Invalid X-CAP-API-ATTRIBUTION-LOOKUP-TYPE specified.<br> Error with range passed or array in indexing.
401 | Authentication failed. Please check username and password.
403 | V2 is not enabled for the org. <br> Mandatory field is missing. Field {x} is mandatory.
404 | Incorrect resource or resource not found.
405 | The operation is not supported for the resource.
415 | Unsupported media type.
461 | Search Engine is busy or unable to respond. Please try after some time.
500 | Requests have failed due to errors. 
521 | Multiple actions are running for the same customer. Please try after some time.
1060 | Batch limit size exceeded.
1061 | X-CAP-API-ATTRIBUTION-LOOKUP-TYPE header required with X-CAP-API-ATTRIBUTION-LOOKUP header.
1062 | Invalid test and control status.
1064 | Invalid org ID passed.







# API Updates
This section provides the quarterly breakup of existing API updates and new API releases.

## Q4 Releases (2019-20)

* **OAuth Support**: Besides Basic Authentication, Capillary APIs now support OAuth and access tokens for more secured API calls. For more details, see support portal. 
* **Points Reversal**: Allows reversing redeemed points directly if the transaction - for which the points are redeemed - is returned. A new redemption ID is introduced. 
	* POST `v1.1/points/redeem`: Introduced a new parameter `redemption_id` which can be used to reverse points if the transaction is returned.
	* POST `v2/points/reverse`: Uses `redemptionId` to reverse points of a specific transaction.
	* GET `v1.1/customer/redemptions`: Shows `total_points_reversed` and points reversal history.
* **Event Notification**: Allows building integrations with Capillary events that originate either through Capillary products or APIs. For more details, see  <a href="https://capillary.github.io/api-documentation/#event-notifications">Event Notification APIs</a>.
* **Redemption across loyalty programs**: With this release, you can redeem points earned in one program in another loyalty program of the org. 
	* POST `v1.1/points/redeem`: A new parameter `group_redemption` if set `true` enables cross loyalty program redemption.			
* **OTP Support without PII information**: Allows non-PII clients (clients which would not send PII information such as mobile number, email ID, etc to Capillary) to send OTP via Capillary communication gateway.
* **Transaction V2 APIs**: Support to add and retrieve transaction in V2 APIs. 
* Option to disable OTP validation for points transfer.
* Customer enrollment with one-time points and tier upgrade
* External loyalty program linking
* Support for external reference number in redemption.


