---
title: Capillary API V2.0 Doc

language_tabs:
  - json
  
  

toc_footers:
  - Other API Documents:
  - <a href="https://capillary.github.io/v1.1-API-Documentation/">CRM API Documentation v1.1</a>
  - <a href="https://capillary.github.io/ecom-api-document/">AnywhereCommerce API Documentation</a>

includes:
  - customer
  - otp
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

search: true
---

# Introduction

Capillary RESTful APIs are be consumed by Capillary and other brands that are registered with Capillary/MartJack to manage their CRM. Capillary V2 APIs support multiple sources such as InStore, MartJack, Facebook, and WeChat.

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

### Authorization Header
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


### Other Headers Required
* **Content type** - This should be set as application/json

* **Accept** - This should also be set as application/json

## Resource Information

### Request URL Format	
`https://<host>/v2/<entity>/...`

Entry | Description
----- | -----------
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. * India: apac.intouch.capillary.co.in * APAC2: apac2.intouch.capillarytech.com * EU: eu.intouch.capillarytech.com * US: us.intouch.capillarytech.com * CN: intouch.capillarytech.cn.com
API Version Number | v2
Entity | Provide the appropriate entity based on the action to be performed. **Supported entities**: customers, communications, coupon, organization, points, product, store, transaction, goodwill requests, add events, integration resources, referral and request
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods GET, PUT, DELETE and POST
Response Format | v2.0 APIs return information only in json






