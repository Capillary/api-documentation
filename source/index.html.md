---
title: API Reference

language_tabs:
  - JSON
  - ruby
  - python
  - php

toc_footers:
  - <a href='#'>Capillary V2.0 API Documentation</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

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

<aside class="notice"> To gain access to our entities in the Rest API, you need to authenticate your TILL account’s username and password using the HTTP Basic Authentication.</aside>

### Authorization Header
Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password)>`

In the Authorization Header pass the Base64 decoded form of username and md5 formatted password.

For example, if the username is “store.server” and the password is 'server123', md5 of the password is 8a16a6b70505eb1f1ff7cdc0cd5559a7

Encode the username and md5 password to Base64, then the header is formed as shown below

`Authorization: Basic c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`

### Other Headers Required
 •	**Content type** - This should be set as application/json

 •	**Accept** - This should also be set as application/json


# customer

## Register Customer
The API allows you to register customers in the organization’s loyalty and promotion programs. You can register a customer in different supported sources of your organization such as INSTORE,MARTJACK, WECHAT and FACEBOOK.  For sources like WeChat and Facebook, an organization can have multiple official accounts. Each account will have an account id which is required to register a customer in that particular account.

To register a customer in any source, it is very important to understand the following concepts

* If same identifier is used to register in different sources, the accounts are combined automatically to a single customer account. For example, if a mobile number is registered in MartJack and the same number is registered in InStore, the two accounts are combined to a single customer account.

* Identifier used for registering in one source (account id in WeChat) cannot be registered again in the same source, i.e., the identifiers should be unique for a specific source; However, for registering in WeChat, identifiers should be unique within a WeChat account

* Multiple identifiers of same type can be registered per customer, i.e., a customer account can have more than one mobile number, email id or external id

* An account cannot be updated with this API. For example, when a registered identifier is tried to register again on the same source (with different profile details), an error is thrown. Customer details can be updated only through customer update API 

### Prerequisites
Before starting with the customer registration API, it is important to understand the registration configurations set for your organization.

You should know the following:

* Different sources (InStore, MartJack, WeChat, Facebook etc) supported for your organization 

* Account ID for sources with multiple accounts such as WeChat and Facebook in which you want to register a customer

### Request URL

`https://<Respective cluster’s API URL>/v2/customers?source=<Source Name>`


```JSON

{
 "profiles": 
 [
 {
 "firstName": "Tom",
 "lastName": "Sawyer",
 "fields": {
 "Favorite Color": “Green”,
 "Favorite Sport": "Cricket"
 },
 "identifiers":
 [
 {
 "type": "email",
 "value": "tom.sayer@example.com"
 }
 ],
 "commChannels": 
 [
 {
 "type": "wechat",
 "value": "ojOPTwFOX-aBmdRlE9MHptPjt2w19",
 "primary": true,
 "verified": true
 }
 ]
 }
 ],
 "loyaltyInfo": {
   "loyaltyType": "non_loyalty",
   "attributionV2": {
     "createDate": "2016-06-23T19:11:18+08:00"
   }
 }
}

```

## Update Customer Details

## Update Customer Identifiers

## Fetch Customers by Partial Strings

## Fetch Customer ID

## Fetch Customer Details



# transaction


# wallet



# ODIP

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```
## My file

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

