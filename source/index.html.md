---
title: API Reference

language_tabs:
  - json
  
  

toc_footers:
  - <a href='#'>Capillary V2.0 API Documentation</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - customer
  - transaction
  - wallet
  - dataIngestion
  - goodWillRequests
  - integrationResource
  - referral
  - requests

search: true
---

# Introduction

The Capillary APIs are RESTful APIs that help third party applications manage an Organization’s CRM and/or Loyalty Program through Capillary’s platform. This document lists the APIs that can be used to integrate with the Capillary Server Application, their descriptions, resource information, request parameters, request URIs, and sample requests.

The v2.0 APIs allow you to manage customers from different sources of an organization.

## Sources
Capillary v2.0 APIs provide extended support for multiple sources, i.e., these APIs can be used for different sources of an organization such as InStore, MartJack, WeChat, Ecommerce and Facebook. 

If your organization supports multiple sources, customer accounts from different sources can be linked automatically to a single user to provide a holistic view of customer data.

## Account IDs
An organization can have multiple accounts for sources such as WeChat and Facebook. To extend support to multiple accounts of a single source, account id has been implemented in v2.0 APIs. For example, if an organization have multiple WeChat accounts, it can communicate with customers through all the accounts using v2.0 APIs (with the help of account ids). 

To provide the flexibility to manage customers of different accounts (same brand and same source), you can use account id. To manage customers of a specific account, you need to specify the source name and the respective account id to.  

For example, each official WeChat account will have an account id.

## Identifiers
Identifiers are anything which uniquely identifies a customer either in different sources or within a source like openId (in case of WECHAT) and ecommId (in case of e-commerce Integration). An identifier can be a mobile number, email id, or external id. Identifiers are also used to lookup customers and obtain their capillary ids for further operations.

When a same identifier is registered in different sources, the two accounts will be merged automatically to a single customer account. For example, assume that a customer has registered on InStore using his mobile number and e-commerce site using email id. Now, if the customer registers the same mobile number both accounts will be merged into a single account automatically which consists of customer details and activities of both sources separately.

Before starting to use Capillary APIs V2.0, it is important to understand different types of official accounts created for your organization on different sources supported by Capillary. 


# Organization Setup
The Capillary APIs are RESTful APIs that help third party applications manage their organization’s CRM and/or Loyalty Program through Capillary’s platform. This document provides detailed information on all the APIs and guides in how to each API with the appropriate samples.

## Authentication
Before starting with authentication, ensure that your organization is registered on Capillary InTouch and at least one TILL has been created for your organization. Stores and store TILLs will be created based on the size and outlets of your organization. You need to know the username and password of the TILL that you want to authenticate for making API calls. 

<aside class="notice"> To gain access to our entities in the Rest API, you need to authenticate your TILL with its username and password using the HTTP Basic Authentication.</aside>

### Authorization Header
Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password)>`

In the Authorization Header pass the Base64 decoded form of username and md5 formatted password.

For example, if the username is “store.server” and the password is 'server123', md5 of the password is 8a16a6b70505eb1f1ff7cdc0cd5559a7

Encode the username and md5 password to Base64, then the header is formed as shown below

`Authorization: Basic c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`

### Other Headers Required
* **Content type** - This should be set as application/json

* **Accept** - This should also be set as application/json

## Resource Information

### Request URL Format	
`https://<host>/v2/<entity>/...`

Entry | Description
----- | -----------
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. * India: intouch.capillary.co.in * APAC2: apac2.intouch.capillarytech.com * EU: eu.intouch.capillarytech.com * US: us.intouch.capillarytech.com * CN: intouch.capillarytech.cn.com
API Version Number | v2
Entity | Provide the appropriate entity based on the action to be performed. **Supported entities**: customers, communications, coupon, organization, points, product, store, transaction, goodwill requests, add events, integration resources, referral and request
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods GET,  PUT, DELETE and POST
Response Format | v2.0 APIs return information only in json






