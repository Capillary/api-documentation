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
  - referral
  - userAuth
  - customerWalkin
  - verticals
  - org
  - staffUser
  - leads
  - userGroup
  - userGroup2
  - cardLoyalty
  - groupLoyalty
  - partnerProgram
  - organizationSource
  - storeCare
  - events
  - integrations
  - eventNotifications
  - authEngine
  - rewards
  - promotions
  - recommendations
  - targetLoyalty
  - cartPromotions
  - communications

search: true
---

# Release Updates
This section provides the quarterly breakup of existing API updates and new API releases.

## Q4 Releases (2021-2022)
*	GET v2/companies to fetch companies by extended field values - partial or complete string. For details, see [v2/companies/extendedFieldSearch](https://capillary.github.io/api-documentation/#get-companies-by-extended-field-values)
*	New API to [retrieve transactions of a group](https://capillary.github.io/api-documentation/#get-user-group-transactions).
*	New body parameter `fileEncodingType` introduced in `communications/email` to capture the encoded format for images attached in the email.
*	New [ledger APIs](https://capillary.github.io/api-documentation/#get-customer-ledger-balance) to retrieve customer's [ledger balance](https://capillary.github.io/api-documentation/#get-customer-ledger-balance) and [ledger information](https://capillary.github.io/api-documentation/#get-customer-ledger-information).
*	New parameter value in GET [v2/organization/configs/](https://capillary.github.io/api-documentation/#get-organization-configs)
*	Introduced new query parameters `expirySchedules` and `expiredPoints`. These were the parameter values for the query parameter `embed` earlier. [See here for details](https://capillary.github.io/api-documentation/#get-group-details).
* Register and update customer will now support registering customers in all programs of the org with the query parameter `mlp_single_enroll` in POST [v2/customers](https://capillary.github.io/api-documentation/#register-customer).

## Q3 Releases (2021-2022)
*	**customers/{userId}/changeIdentifier?** to support delinking card for a customer with the new parameter value `"statusLabel": "NOT_ISSUED"`. Check out details [here](https://capillary.github.io/api-documentation/#get-customer-coupons-detailed).
*	**v2/customers** supports two new APIs get [`pointsExpirySchedule`](https://capillary.github.io/api-documentation/#get-customer-points-expiry-schedule) and [`loyaltyEvents`](https://capillary.github.io/api-documentation/#get-customer-loyalty-events). 
*	**Customer Consent APIs**: V2 `/customers` resource now supports adding and updating customer consent with POST and PUT `v2/customers/traiConsent` API. 
*   **Get userGroup2 details API** to retrieve the details of `EXPIREDPOINTS` and `EXPIRYSCHEDULES` through `embed` query parameter. [Read more here](https://capillary.github.io/api-documentation/#get-group-details).
*   **Custom fields and extended fields support in card APIs**: You can now store and retrieve card related custom fields and extended fields. To know how, check out [POST v2/card](https://capillary.github.io/api-documentation/#add-card-number-to-a-card-series), [PUT v2/card](https://capillary.github.io/api-documentation/#update-card-details), [GET v2/card](https://capillary.github.io/api-documentation/#get-card-details), [PUT v2/card/bulk](https://capillary.github.io/api-documentation/#update-card-details-bulk)
	* Support for card level custom fields in [POST v2/customers](https://capillary.github.io/api-documentation/#register-customer) and [GET v2/customers](https://capillary.github.io/api-documentation/#fetch-customer-details-by-user-id).
*   **User Group Loyalty**: Helps in creating and managing user groups -for B2B use cases such as manufacturer, partners, distributers and dealers;  for B2C cases such as friends, family members, colleagues, or relatives of a customer. For details, see [Group Loyalty] (https://capillary.github.io/api-documentation/#group-loyalty-companies-hierarchies)
  *	Added [points/userGroup2/transfer API](https://capillary.github.io/api-documentation/#transfer-points-group), <br>group points is transferrable API - [points/userGroup2/isTransferrable](https://capillary.github.io/api-documentation/#check-if-points-transferrable-group), and GET points transfer details API - [/points/transfer?](https://capillary.github.io/api-documentation/#get-points-transfer-details)
  *	Transaction Add to support group association - [transactions/bulk](https://capillary.github.io/api-documentation/#add-return-transaction-bulk) and [/transactions? single] (https://capillary.github.io/api-documentation/#add-transaction-single)

## Q2 Releases (2021-2022)


*   **Cart & Catalog promotions**: You can now create and manage cart and catalog promotions using APIs. For more details, see [Cart & Catalog Promotions](https://capillary.github.io/api-documentation/#set-promotion-settings-org-level). - In Progress
* **Card External ID Support**: Customer lookup APIs now support `cardExternalId` as an identifier to fetch or update customer details.
* Get [customers/coupons](https://capillary.github.io/api-documentation/#get-customer-coupons-basic): New param values added to status - `Active_Redeemed`, `Active_Unredeemed`, `Expired_Redeemed`, `Expired_Unredeemed`. 

## Q1 Releases (2021-2022)


*   **Coupons**: New APIs to create coupon series, fetch coupon series, issue coupon to customer(single & bulk), redeem customer coupons(bulk), and reactivate redeemed coupon, see in [details](https://capillary.github.io/api-documentation/#coupon).
*   **Recommendations**: APIs on product recommendations (predict products based on customer activity) for a customer, see in [details](https://capillary.github.io/api-documentation/#recommendations).
*   **Card Loyalty/Membership**: Card enables orgs to run card based loyalty memberships with multiple card types, see in [details](https://capillary.github.io/api-documentation/#card-loyalty-membership).
*   **Verticals**: APIs to add, retrieve or delete a vertical, see in [details](https://capillary.github.io/api-documentation/#verticals).
*   **Leads**: APIs are developed to retrieve reasons, lead status log, and lead follow-ups ,see in [details](https://capillary.github.io/api-documentation/#leads-lms).

## Q4 Releases (2020-2021)

*   **API to get shipments or orders by delivery slot** An API is developed that enables our clients to fetch the list of orders or shipments that are going to be delivered on a particular delivery slot, see in [details](https://capillary.github.io/ecom-api-document/).
*   **Communication service to define communication templates using API** Communication templates are dissociated from communication events. If users want a communication template, they can define it without associating any predefined event. To execute this communication template, an API has been developed, see in [details](https://capillary.github.io/ecom-api-document/). **Note:**
   *   You need to pass the template ID during this API execution. The template ID helps the system to identify and execute the template.
   *   If the template has some variables in it, then the values for the variables should be passed via API.

## Releases (2020-2021)

### Q3 Releases (2020-2021)

* **Card Loyalty** : APIs to create card series, generate cards, and retrieve card details. For more details see, 
* **Support for store identifiers in the header for oAuth2 authentication** : Earlier, only TILL information could be passed in the API header for attribution of events such as registration, transaction, etc. In case of centralized POS integrations, this caused an additional overhead of maintaining store - TILL mapping at the integration end. This can be avoided now by passing store identifiers directly in the API request.

Following headers can be used to pass store or till identifiers.

  * `X-CAP-API-ATTRIBUTION-ENTITY-TYPE` can be `STORE_CODE, STORE_NAME, STORE_EXTERNAL_ID,  STORE_EXTERNAL_ID_1, STORE_EXTERNAL_ID_2`. If anything else or nothing is passed, the default value of `TILL_CODE` is taken.
  * `X-CAP-API-ATTRIBUTION-ENTITY-CODE` is the value of the above type.
* **Save transactions with invalid or missing identifiers as Not Interested bills** : To capture bills that are tagged with invalid or missing identifiers, a new configuration has been added in Organization Settings > Billing Configuration. 
* **New query params in v2 customer API** : [Fetch customer details](https://capillary.github.io/api-documentation/#fetch-customer-details-identifier) API now supports fetching customer’s promotional points, points expiry schedule and expired points using query param ‘embed’ value as `promotionalPoints`, `expirySchedules`, and `expiredPoints`. This helps by reducing dependency on v1.1 APIs, which have consistency issues in returning empty JSON objects. 

* **External identifiers and group creation/joining/leaving** : Pass external identifiers and group creation/joining/leaving dates in User Group APIs, and get loyalty details
  * Group APIs can be called using external identifiers, see in [details](https://capillary.github.io/api-documentation/#create-user-group). 
  * Optional parameters have been added to pass group creation, [join](https://capillary.github.io/api-documentation/#join-user-group-with-customer-identifiers) and [exit](https://capillary.github.io/api-documentation/#exit-user-group) dates.
  * Multiple secondary identifiers can be added in single request, see in [details](https://capillary.github.io/api-documentation/#get-points-contribution-by-secondary-members).


### Q2 Releases (2020-2021)

* New resource [Auth Engine] (https://capillary.github.io/api-documentation/#auth-engine) is added. Auth Engine provides front-end APIs to enable org customers to authenticate to org's mobile  or web application.
* OAuth supports posting data through store along with Till that was already supported. Two new headers are introduced `X-CAP-API-ATTRIBUTION-ENTITY-TYPE`, `X-CAP-API-ATTRIBUTION-ENTITY-CODE` replacing `X-CAP-API-ATTRIBUTION-TILL-CODE`.

## Releases (2019-2020)

### Q4 Releases (2019-20)

* **OAuth Support**: Besides Basic Authentication, Capillary APIs now support OAuth and access tokens for more secured API calls. For more details, see support portal. 
* **Points Reversal**: Allows reversing redeemed points directly if the transaction - for which the points are redeemed - is returned. A new redemption ID is introduced. 
	*   POST [v1.1/points/redeem](https://capillary.github.io/v1.1-API-Documentation/#redeem-points): Introduced a new parameter `redemption_id` which can be used to reverse points if the transaction is returned.
	* POST `v2/points/reverse`: Uses `redemptionId` to reverse points of a specific transaction.
	* GET <a href="https://capillary.github.io/v1.1-API-Documentation/#get-customer-redemptions" target="_blank">v1.1/customer/redemptions</a>`v1.1/customer/redemptions`</a>: Shows `total_points_reversed` and points reversal history.
* **Event Notification**: Allows building integrations with Capillary events that originate either through Capillary products or APIs. For more details, see  <a href="https://capillary.github.io/api-documentation/#event-notifications" target="_blank">Event Notification APIs</a>.
* **Redemption across loyalty programs**: With this release, you can redeem points earned in one program in another loyalty program of the org. 
	* POST `v1.1/points/redeem`: <a href="https://capillary.github.io/v1.1-API-Documentation/#redeem-points" target="_blank">v1.1/points/redeem</a>A new parameter `group_redemption` if set `true` enables cross loyalty program redemption.			
* **OTP Support without PII information**: Allows non-PII clients (clients which would not send PII information such as mobile number, email ID, etc to Capillary) to send OTP via Capillary communication gateway.
* **Transaction V2 APIs**: Support to add and retrieve transaction in V2 APIs. Support to <a href="https://capillary.github.io/api-documentation/#add-transaction" target="_blank">Add transactions</a> and <a href="https://capillary.github.io/api-documentation/#get-transaction-details" target="_blank">Retrieve transaction details</a>.
* Option to disable OTP validation for points transfer.
* Customer enrollment with one-time points and tier upgrade
* External loyalty program linking
* Support for external reference number in redemption.


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

Capillary supports two types of authentication.

Capillary APIs can be accessed either using Basic auth (TILL/Store Center credentials), or OAuth (Client key and secret associated with a Till/Store Center). Please note that it is mandatory to use only the store-specific Till/Store Center credentials as the data in the API response depends on this identification

To configure your API keys, see [API Authentication Configuration](http://developer.capillarytech.com/en/support/solutions/articles/4000154305-oauth).

**When to use Basic & OAuth?**

Basic | oAuth
----- | -----
Can be used for POS integrations where API requests come to Capillary server directly from POS front end or POS store server. | Shall be used for backend integrations (from one backend to another backend). For example, POS integrations where API requests come to Capillary server from API gateway or a central server; FTP integrations where backend service need to be authenticated; 3rd party integration where API requests come to Capillary from a backend platform.



### Process 1: Basic Authentication
You can either pass the `Authorization` Header or use Till ID and password for authentication through Basic Auth. 

#### Authorization Header

Construct the authorization header as mentioned below - pass the Base64 decoded form of username and md5 formatted password.


`Authorization: Basic <Base64 encoded (username:md5(password)>`

For example, if the username or TILL ID is `store.server123` and the password is 'server123', md5 of the password




For example, if the username is `store.server` and the password is 'server123', 

* md5 encryption of the password (server123) is `8a16a6b70505eb1f1ff7cdc0cd5559a7`.
* Base 64 (store.server:8a16a6b70505eb1f1ff7cdc0cd5559a7) is `c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`.

So the Authentication Header is 

`Authorization: Basic c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`

#### Username & Password

To use username and password for authentication, pass TILL ID as username and md5 hash encrypted password.

Consider the preceding example:

username: store.server

Password: md5 hash (server123) which is 8a16a6b70505eb1f1ff7cdc0cd5559a7

<aside class="notice">You can create TILL credentials in Organization Setup. To know more see <a href="https://support.capillarytech.com/a/solutions/articles/4000028057?lang=en&portalId=44632#Add-Till" target="_blank">Add TILL</a> </aside>

Now, v2 API supports submitting requests on behalf of other TILLs (active TILLs). In db the combination of attribution_lookup and lookup_code are mapped to TILL ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the db on behalf of the TILL that is mapped to the specified combination. 

To submit requests on behalf of other TILLs, include the following code along with the HEADER: 

`X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:<name>`
`X-CAP-API-ATTRIBUTION-LOOKUP:<value>`(value is case sensitive)


### Headers Required for Basic Authentication

*   **Content-Type** - This should be set as application/json

*   **Accept** - This should also be set as application/json


### Process 2: OAuth

OAuth provides better security and helps you create secure passages to access your org&rsquo;s data through Capillary APIs. To generate oAuth client key and secret see <a href="http://developer.capillarytech.com/en/support/solutions/articles/4000154305-oauth" target="_blank">OAuth Documentation</a>.

#### Generate Access Token

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
`{host}/v3/oauth/token/generate`

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
* **Content-Type** - This should be set as application/json

* **Accept** - This should also be set as application/json


### Using Access Token

Once you generate the access token, you can use it to authenticate API calls as shown below.

Set the authentication to No Auth and pass the following headers.

#### Required Headers

Header | Value
------ | -----
X-CAP-API-OAUTH-TOKEN* | Generated access token. If the token expires, you need to regenerate the access token.
Content-Type* | This should be set as application/json
Accept* | This should also be set as application/json
X-CAP-API-ATTRIBUTION-ENTITY-TYPE | Till or store from which you want to post the data. Supported Values: `TILL`, `STORE_CODE`, `STORE_NAME`, `STORE_EXTERNAL_ID`, `STORE_EXTERNAL_ID_1`, `STORE_EXTERNAL_ID_2`. The default value is `TILL`.
X-CAP-API-ATTRIBUTION-ENTITY-CODE | Pass the entity value based on the entity type. For example, if `X-CAP-API-ATTRIBUTION-ENTITY-TYPE` is STORE_CODE, then X-CAP-API-ATTRIBUTION-ENTITY-CODE is the store code that you want to tag to POST data. By default, it considers the Till associated with the client key and secret.

<aside class="notice">Parameters marked with * are mandatory.</aside>

For example, to get transaction details, you can use the following details. Before making a API call, make sure the token has access to the required resource.

**Headers**

| | |
--------- | ----------- |
Accept | application/json 
Content-Type | application/json 
X-CAP-API-OAUTH-TOKEN | eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.wiOlwiV1JJ…


> Sample Request URL

```html
https://eu.api.capillarytech.com/v2/transaction/38233952?type=REGULAR
```


## Request Information

### Request URL	

`https://{host}/v2/{resource}/{endpoint}?{query params}`

Entry | Description
----- | -----------
Host | The server to which the API calls are made, usually the cluster URL. <br> **India**: https://apac.api.capillarytech.com <br> **APAC2**: https://apac2.api.capillarytech.com <br>**EU**: https://eu.api.capillarytech.com <br>**US**: https://us.api.capillarytech.com <br>**China**: https://cdn-api.capillarytech.cn.com [or] https://api.capillarytech.cn.com 
BasePath | v2 or v3(API version)
Resource | Provide the appropriate entity based on the action to be performed. **Supported Resources**: customers, communications, coupon, organization, points, product, store, transaction, goodwill requests, add events, integration resources, referral, request and other resources.
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods GET, PUT, DELETE and POST.
Response Format | JSON. All V2 and V3 APIs support only JSON response.



## HTTP Status Codes

<aside class="notice">There are two types of failure cases - Errors and Warnings. Errors occur when the main activity fails - it could be due to internal error or incorrect input. Warnings occur when the primary activity is succeeded, but the secondary activity/activities failed. </aside> 

These are the standard codes that that provided the result of a client request. The response codes for each resource are provided in the respective sections.


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









