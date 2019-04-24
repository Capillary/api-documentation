# Customer Labels

Customer labels are used for tagging customers based on their activities or loyalty histories. Tags are used in loyalty, campaigns and Essential Insights. You can add new labels and tag labels to customers using APIs of organization and customers mentioned here.




## Add Labels

Lets you add a new customer tag to the organization. You cannot add tags beyond the limit set for the org. 


<aside class="notice"> You can set the label limit at the org level using the API `POST organization/configs` in the parameter `ORG_MAX_LABEL_COUNT` </aside>




> Sample Request

```html
https://api.us.capillarytech.com/v2/organization/labels

```


> Sample POST Request

```json
{
  "orgLabels": [
    {
      "name": "Premium",
      "description": "Customers whose purchase value is more than $4000"
    },
	{
      "name": "GadgetFreak",
      "description": "Interested in gadgets and new technology"
    }
  ]
}
```


> Sample Response

```json
{
    "entity": 1779,
    "warnings": []
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `organization/labels`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{Cluster URL}/v2/organization/labels`


### Request Body Parameters

Parameter | Description
-------- | -----------
name* | Name of the tag or labels
description* | Short description about the tag







## Get Org Labels

Retrieves all customers labels created for that specific org.



> Sample Request

```html
https://eu.api.capillarytech.com/v2/organization/labels

```




> Sample Response

```json
{
    "data": [
        {
            "id": 2,
            "orgId": 1779,
            "description": "Loves new trends and collections in fashion",
            "lastUpdatedBy": 15000449,
            "name": "Fashion",
            "active": true
        },
        {
            "id": 8,
            "orgId": 1779,
            "description": "High loyal customer with spending more than $13000",
            "lastUpdatedBy": 15000449,
            "name": "Premium",
            "active": true
        },
        {
            "id": 1,
            "orgId": 1779,
            "description": "Loves new gadgets and technology",
            "lastUpdatedBy": 15000449,
            "name": "GadgetFreak",
            "active": true
        },
        {
            "id": 3,
            "orgId": 1779,
            "description": "汉语",
            "lastUpdatedBy": 15000449,
            "name": "汉语",
            "active": true
        }
    ],
    "warnings": [],
    "errors": []
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `organization/labels`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{Cluster API URL}/v2/organization/labels`




## Tag Customers (to Labels)


Lets you tag a customer to one or more customer labels or remove an existing label.


> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/249598560/changeLabels

```

> Sample POST Request

```json
{
  "add": [
     {
       "labelName": "GadgetFreak"
    },
	{
       "labelName": "Premium"
    }
  ],
  "remove":[
  {
      "labelName": "book"
   }
 ]
}

```



> Sample Response

```json
{
    "entity": 249598560,
    "warnings": []
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `customers/{userId}/changeLabels`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{cluster URL}/v2/customers/{userId}/changeLabels`


### Request Parameters

Parameter | Type | Description
-------- | ----- | -----------
userId* | Path | Unique id of the  user that you want to add customer label
labelName* | Body | Label name that you want to tag to the customer





## Fetch Labels of a Customer

Retrieves the list of labels tagged to a customer.


> Sample Request

```html
https://eu.api.capillarytech.com/v2/customers/249598560/labels

```




> Sample Response

```json
{
    "data": [
        {
            "id": 5,
            "orgId": 0,
            "addedBy": 15147364,
            "labelId": 3,
            "userId": 249598560,
            "labelName": "GadgetFreak",
            "deleted": false
        }
    ],
    "warnings": [],
    "errors": []
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/customers/{userId}/labels`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{Cluster URL}/v2/customers/{userId}/labels`


### Request Path Parameters

Parameter | Description
-------- | -----------
userId* | Unique id of the customer for which you want to fetch tagged labels


## Search Customers by Labels

Retrieves the list of customers who are tagged to a specific label. You can also search by a partial label name. You will get a maximum of 10 records by default.


> Sample Request

```html
https://api.us.capillarytech.com/v2/customers/labels/search?q=premium

```




> Sample Response

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "userId": 316481804,
            "customerLabels": [
                {
                    "orgId": 0,
                    "labelId": 3,
                    "userId": 316481804,
                    "labelName": "book"
                }
            ]
        },
        {
            "userId": 249598560,
            "customerLabels": [
                {
                    "orgId": 0,
                    "labelId": 3,
                    "userId": 249598560,
                    "labelName": "book"
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/customers/labels/search?q={LabelName}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{Cluster URL}/v2/customers/labels/search?q={LabelName}`


### Request Path Parameters

Parameter | Description
-------- | -----------
q* | Specify the label name by which you want to fetch customers. You can also pass partial string. For example `pre` to fetch customers in all labels that starts with pre
