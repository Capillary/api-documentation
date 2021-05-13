# Event Notifications

Event Notification allows building integrations with Capillary events that originate either through Capillary API (such as customerAdded and transactionAdded)requests or Capillary products such as Loyalty+ (such as pointsIssued and pointsRedeemed), Engage+ or other. Once an event notification is configured, brands can build custom solutions to trigger for pre-configured actions.

Event Notifications are sent through Webhooks configured in Capillary Event Notifications.


### Use Cases

There are several use cases of event notifications. A couple of examples are provided in the following.

**Enable PII-less Communication**

*   In some cases, brands prefer not to send customers’ personally identifiable information (PII data) such as names, email ID, and mobile number to Capillary and manage communication completely at their end. Event Notification can be used to get the events that require communication such as customer registration, transaction, points issual, points redemption, points transfer, etc. On receiving these events, clients can send communication to customers with their names and identifiers as needed.

**Integration with 3rd Party Applications**

*   Event notification can be used to build integrations with 3rd party applications. For example, send a survey link to a customer post transaction event from a survey application such as Medallia; sync customer’s loyalty information to an e-commerce platform such as Magento. Integration can be built to receive real-time events, enrich information using Capillary APIs (if required), and sync it to the 3rd party application using the brand’s APIs.

### Where to use Event Notifications

There are several use cases of event notifications. A couple of examples are provided in the following.

Also, see

*   [How to consume event notifications](https://support.capillarytech.com/en/support/solutions/articles/4000157394-consuming-event-notifications) ?
*   [Sample schema/payloads of all events to post event data](	https://support.capillarytech.com/en/support/solutions/articles/4000159789-event-schema-payload-).

## Add Webhook Account

Lets you integrate a Webhook account to the Capillary system.

> Sample Request

```html
http://eu.api.capillarytech.com/v3/webHooks
```

> Sample POST Request

```json
{
 "active": true,
 "eventNames": [
   "transactionAdded",
   "pointsRedeemed"
  ],
 
 "maxAllowedConnections": 10.99,
 "methodType": "POST",
 "name": "DemoWebhook1",
 "slaInSeconds":30,
 "webHookHeaders": {
"Content-Type": "application/json"
 },
 "webHookType": "HTTP",
 "webHookUrl": "https://envr6t7iue26f.x.pipedream.net/"
}
```

> Sample Response

```json
{
    "data": {
        "attribution": {
            "createdOn": "2020-04-20T10:35:47.473+0000",
            "lastUpdatedOn": "2020-04-20T10:35:47.473+0000",
            "lastUpdatedBy": {
                "id": 75040399,
                "code": "bukl.till",
                "description": "",
                "name": "bukl.till",
                "type": "TILL"
            },
            "createdBy": {
                "id": 75040399,
                "code": "bukl.till",
                "description": "",
                "name": "bukl.till",
                "type": "TILL"
            }
        },
        "webHookId": "5e9d7b03c64f3d00085d7f00",
        "name": "DemoWebhook1",
        "eventNames": [
            "transactionAdded",
            "pointsRedeemed"
        ],
        "webHookUrl": "https://envr6t7iue26f.x.pipedream.net/",
        "webHookType": "HTTP",
        "methodType": "POST",
        "webHookHeaders": {
            "Content-Type": "application/json"
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 10,
        "active": true,
        "slaInSeconds": 30,
        "consumerGroupId": "8371bfe1-4e27-427c-8d03-a30c85066a1b"
    },
    "errors": null
}
```



### Resource Information

| | |
--------- | ----------- |
URI | `v3/webHooks`
HTTP Method | POST
Rate Limited | Yes
Batch Support | No
API Version | v3

### Request URL

`https://{host}/v3/webHooks`


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
active | boolean | Status of the Webhook integration. Value is true by default
eventNames | array | Names of the events that you want to add to the current account.<br> Values: `tierDowngradeReminder` `pointsExpiryReminder` `pointsRedeemed` `transactionAdded` `pointsExpired` `transactionUpdated` `customerAdded` `promisedToCurrentPointsConversion` `pointsTransferredReceived` `pointsIssued` `redeemedPointsReversed` `tierRenewed` `tierDowngraded` `customerUpdated` `pointsTransferredInitiated` `tierUpgraded`.
maxAllowedConnections | int | The number of parallel requests that can be made from Event Notification to the integration server at the configured webhook url
methodType | enum | Pass `POST` to add a new Webhook or event notification.
name | string | Name of the account. This should be unique within the cluster.
slaInSeconds | int | Expected delivery time of an event notification in seconds. This is used to identify notifications that took more time than the delivery SLA set.
webHookHeaders | obj | Headers that you want to add to the event notification as required for the integration. For example, Content-Type, AccessToken.
webHookType | enum | Type of the Webhook account. Value: HTTP, queue 
webHookUrl  | string | URL of the webhook account. Applicable for webHookType: queue  

## Retrieve Org Events 
Retrieves all the events of the org with the event status. This includes both standard events and custom events.

> Sample Request

```html
https://eu.intouch.capillarytech.com/v3/webHooks/eventMetaData
```

> Sample Response

```json
{
    "data": [
        {
            "active": true,
            "eventName": "customerupdate"
        },
        {
            "active": true,
            "eventName": "transaction"
        },
        {
            "active": true,
            "eventName": "registration"
        },
        {
            "active": true,
            "eventName": "changeidentifier"
        },
        {
            "active": true,
            "eventName": "updateidentifier"
        },
        {
            "active": true,
            "eventName": "mergecustomer"
        },
        {
            "active": true,
            "eventName": "pointredemption"
        }
    ],
    "errors": null
}
```

### Resource Information

| | |
--------- | ----------- |
URI | v3/webHooks/eventMetaData
HTTP Method | GET
API Version | v3
Rate Limited | Yes
Batch Support | NA

### Request URL
`https://{host}/v3/webHooks/eventMetaData`



## Update Webhook Account

Lets you update details such as event names and SLAs of an existing Webhook account.

> Sample Request

```html
https://eu.intouch.capillarytech.com/v3/webHooks/eventMetaData
```

> Sample PUT Request

```json
{
 "eventNames": [
   "transaction"
  ],
  "maxAllowedConnections": 10.99,
 "methodType": "POST",
 "name": "test10",
 "noOfRetryAttempts": 10,
 "slaInSeconds":30,
 "webHookHeaders": {
"Content-Type": "application/json"
 },
 "webHookType": "HTTP",
 "webHookUrl": "https://envr6t7iue26f.x.pipedream.net"
}
```

> Sample Response

```json
{
    "data": {
        "attribution": {
            "createdOn": "2020-01-06T13:08:19.995+0530",
            "lastUpdatedOn": "2020-01-09T12:45:11.835+0530",
            "lastUpdatedBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            },
            "createdBy": {
                "id": 50006796,
                "code": "mobilepush.1",
                "description": "",
                "name": "mobilepush.1",
                "type": "TILL"
            }
        },
        "webHookId": "5e12e3ec57871a0008c15d9e",
        "name": "TestTransaction",
        "eventNames": [
            "transaction"
        ],
        "webHookUrl": "https://envr6t7iue26f.x.pipedream.net",
        "webHookType": "HTTP",
        "methodType": "POST",
        "webHookHeaders": {
            "Content-Type": "application/json"
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 10,
        "active": true,
        "slaInSeconds": 30,
        "consumerGroupId": "76870cd8-b72c-40f5-9fde-d4faa429d4d9"
    },
    "errors": null
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v3/webHooks/{webhookId}`
HTTP Method | PUT
API Version | v3
Rate Limited | Yes
Batch Support | No

### Request URL

`https://{host}/v3/webHooks/{webhookId}`

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
eventNames | array | Specify event names that you want to have for the account. Event names that are not mentioned will be removed from the account. <br>Supported event values: `tierDowngradeReminder` `pointsExpiryReminder` `pointsRedeemed` `transactionAdded` `pointsExpired` `transactionUpdated` `customerAdded` `promisedToCurrentPointsConversion` `pointsTransferredReceived` `pointsIssued` `redeemedPointsReversed` `tierRenewed` `tierDowngraded` `customerUpdated` `pointsTransferredInitiated` `tierUpgraded`.
maxAllowedConnections | int | The number of parallel requests that can be made from Event Notification to the integration server at the configured webhook url
methodType | enum | Pass `POST` to add a new Webhook or event notification.
slaInSeconds | int | Expected delivery time of an event notification in seconds. This is used to identify notifications that took more time than the delivery SLA set.
webHookHeaders | obj | Mention headers that you want to add to the event notification depending on the integration. Example headers could be Content-Type,client-key, client-secret, AccessToken.
webHookType | enum | Type of the Webhook account. Value: HTTP, queue.
webHookUrl | string | URL of the webhook account. Applicable for webHookType: `queue`. 



## Get Event Metadata 

Retrieves all the parameters, attributes, and their data-types of a specific event.

> Sample Request

```html
https://nightly.capillary.in/v3/webHooks/eventMetaData/transaction
```

> Sample Response

```json
{
    "data": {
        "active": true,
        "eventName": "transaction",
        "schema": {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "required": [
                "ingestionTimestamp",
                "name",
                "description",
                "attributes"
            ],
            "properties": {
                "ingestionTimestamp": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "attributes": {
                    "type": "object",
                    "required": [
                        "transactionNumber",
                        "transactionId"
                    ],
                    "properties": {
                        "amount": {
                            "type": "number"
                        },
                        "subtype": {
                            "type": "string"
                        },
                        "billClientId": {
                            "type": "string"
                        },
                        "transactionNumber": {
                            "type": "string"
                        },
                        "basketSize": {
                            "type": "number"
                        },
                        "customerId": {
                            "type": [
                                "integer",
                                "null"
                            ]
                        },
                        "entityId": {
                            "type": "integer"
                        },
                        "grossAmount": {
                            "type": "number"
                        },
                        "transactionId": {
                            "type": "integer"
                        }
                    }
                }
            }
        }
    },
    "errors": null
}
```

| | |
--------- | ----------- |
URI | `v3/webHooks/eventMetaData/{eventName}`
HTTP Method | GET
API Version | v3
Rate Limited | Yes
Batch Support | NA


### Request URL

`https://{host}/v3/webHooks/eventMetaData/{eventName}`



## Get Event Details (by Event ID)

Retrieves the log of a specific event based on the event ID passed.

> Sample Request

```html
https://eu.api.capillarytech.com/v3/webHooks/eventLog/ccc983c2-df7a-4ece-b5cc-e574cec66fc1
```

> Sample Response

```json
{
    "data": {
        "refId": "50074_38236069",
        "requestId": "ebcce693-48ff-4a5f-b335-76abd1c9e33f",
        "eventName": "transactionAdded",
        "eventId": "ccc983c2-df7a-4ece-b5cc-e574cec66fc1",
        "consumerGroupId": "36b25f81-7047-4f60-8a24-21908cc0bdad",
        "eventIngestionTimestamp": "2020-04-23T11:10:51.351+0530",
        "eventStartTimestamp": "2020-04-23T11:10:51.354+0530",
        "eventEndTimestamp": "2020-04-23T11:10:51.385+0530",
        "slaBreachTimestamp": null,
        "consumerResponse": {
            "webhookHttpStatus": 200.0,
            "time_taken": 195.0
        }
    },
    "errors": null
}
```

| | |
--------- | ----------- |
URI | `v3/webHooks/eventLog/{eventId}`
HTTP Method | GET
API Version | v3
Rate Limited | Yes
Batch Support | NA


### Request URL

`https://{host}/v3/webHooks/eventLog/{eventId}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
eventId* | string | Pass the unique ID of the event to fetch log details.




## Get Event Log (by Request ID)

> Sample Request

```html
https://eu.api.capillarytech.com/v3/webHooks/eventLog/requestId/a8bc7e42-9580-4820-9d21-8733b5f91a1d
```

> Sample Response

```json
{
   "data": [
      {
        "refId": "50074_38236068",
        "requestId": "a8bc7e42-9580-4820-9d21-8733b5f91a1d",
        "eventName": "transactionAdded",
        "eventId": "1e767db6-1fcf-45e4-a982-19ae5d20f56a",
        "consumerGroupId": "36b25f81-7047-4f60-8a24-21908cc0bdad",
        "eventIngestionTimestamp": "2020-04-23T10:53:13.240+0530",
        "eventStartTimestamp": "2020-04-23T10:53:13.262+0530",
        "eventEndTimestamp": "2020-04-23T10:53:13.312+0530",
        "slaBreachTimestamp": null,
        "consumerResponse": {
             "webhookHttpStatus": 200.0,
             "time_taken": 3370.0
         }
     }
  ],
  "errors": null
}

```



Retrieves the details of a specific event call based on the `X-CAP-REQUEST-ID` passed. This is a normal request ID generated for an API call.

| | |
--------- | ----------- |
URI | `v3/webHooks/eventLog/requestId/{requestId}`
HTTP Method | GET
API Version | v3
Rate Limited | Yes
Batch Support | NA


### Request URL

`https://{host}/v3/webHooks/eventLog/requestId/{requestId}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
requestId* | string | Pass the generated request ID (X-CAP-REQUEST-ID) of an event to fetch details.


## Get Event Log (by Reference ID)

> Sample Request

```html
https://eu.api.capillarytech.com/v3/webHooks/eventLog/refId/50074_38236069
```

> Sample Response

```json
{
  "data": [
      {
        "refId": "50074_38236069",
        "requestId": "ebcce693-48ff-4a5f-b335-76abd1c9e33f",
        "eventName": "transactionAdded",
        "eventId": "ccc983c2-df7a-4ece-b5cc-e574cec66fc1",
        "consumerGroupId": "36b25f81-7047-4f60-8a24-21908cc0bdad",
        "eventIngestionTimestamp": "2020-04-23T11:10:51.351+0530",
        "eventStartTimestamp": "2020-04-23T11:10:51.354+0530",
        "eventEndTimestamp": "2020-04-23T11:10:51.385+0530",
        "slaBreachTimestamp": null,
        "consumerResponse": {
          "webhookHttpStatus": 200.0,
          "time_taken": 195.0
          }
        }
    ],
  "errors": null
}

```



Retrieves the details of a specific event call based on the `X-CAP-REQUEST-ID` passed. This is a normal request ID generated for an API call.

| | |
--------- | ----------- |
URI | `v3/webHooks/eventLog/refId/{refId}`
HTTP Method | GET
API Version | v3
Rate Limited | Yes
Batch Support | NA


### Request URL

`https://{host}/v3/webHooks/eventLog/refId/{refId}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
refId* | string | Pass the reference ID of the API call to fetch details. Reference ID is a combination of {orgId}_{uniqueId}. For example for a transactionAdd event it is {orgId}_{transactionId}, for a customerAdd event, it is {orgId}_{userId}, for points redemption it is {orgId}_{redemptionId}.

