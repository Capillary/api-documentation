# Survey

## Create a Survey

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/v2/survey
```

> Sample POST Request

```json
{
		"title": "Product feedback survey",
		"surveyType": "online",
		"source": "Cloudcherry/Capillary",
		"brandLogo": "http://biz-colostate.files/starbucks-coffee.gif",
		"brandWebsite": "www.starbuck.com",
		"externalRefId":"123"
}

```

> Sample Response

```json
{
   "createdId": 328,
   "warnings": [
   ]
}
```

Allows creating a new survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`http://<cluster url>/v2/survey`

### Request Attributes

Attribute | Description
--------- | -----------
title* | Specify the title of the survey form
surveyType | product survey, store survey, cloud cherry
source* | Source where the survey is hosted - Cloudcherry/Capillary
brandLogo | Provide the path of the brand logo
brandWebsite | Provide the official web site link of the org
externalRefId* | Unique reference id of the survey that comes from the vendor



## Update Survey Details

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/v2/survey?extRefId=123
```

> Sample POST Request

```json
{
		"brandLogo": "http://biz-google.files/starbucks-coffee.gif",
		"brandWebsite": "www.google.com",
   		"title":"Sample survey title"
}


```

> Sample Response

```json
{
    "createdId": 98,
    "warnings": [
    ]
}
```

Lets you update an existing survey details.

### Resource Information
Information | Value
----------- | -----
URI | /survey?<extRefId/surveyId>=<value>
Authentication | Yes
HTTP Method | PUT
Batch Support | No

### Request URL
`http://<cluster url>/v2/survey?extRefId=<value>`

`http://<cluster url>/v2/survey?surveyId=<value>`

### Request Attributes

Attribute | Description
--------- | -----------
title | Specify the new title of the survey form 
brandLogo | Provide the new path of the brand logo
brandWebsite | Provide the new official website link of the org












## Add Questions to a Survey

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/questions?surveyId=112
```

> Sample POST Request

```json
[
  {
 "tag": "nps",
 "fieldType": "nps",
 "question": "How do you feel about the store?",
 "qxnExternalId":"112",
 "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don\u2019t like your store\"\r\n}",
 "parentId": 0,
 "params": ""
  }
]

```

> Sample Response

```json
{
   "data": [
       {
           "id": 433,
           "qxnExternalId": "102",
           "question": "What is your feedback about the prooduct?",
           "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
           "fieldType": "Checkboxes",
           "tag": "Nps",
           "parentId": 0,
           "params": ""
       }
   ],
   "warnings": [
   ],
   "errors": [
   ]
}
```

Allows adding questions to the existing survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey/questions?{surveyId/extRefId}
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v2/survey/questions?surveyId={survey id}`

`http://<cluster url>/v2/survey/questions?extRefId={external reference id}`

### Request Attributes

Attribute | Description
--------- | -----------
tag | Possible values: Nps, CSAT, Comments, or Feedback
fieldType* | Specify the type of the field - TextBlock, TextAreaBlock, Multiple Choice, Checkboxes, Scale, Star Rating, multiquestion, Add Call us back question, and nps
question* | Specify the survey question
qxnExternalId* | Pass the external id of the question provided by the vendor  
fieldOptions | Specify the options you want to provide for each question. Not applicable for TextBlock, TextAreaBlock
parentId | Survey questions can have sub questions. Example: The value will be 0 by default. If it is a sub-question, parent id will a positive value
params | 



## Update Survey Questions

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/question?questionId=112
```

> Sample POST Request

```json
  {
	"question": "HOW do you rate your transaction?",
    "isActive":false,
    "params":"",
    "fieldOptions":"Very Good",
    "fieldType":"Radio",
    "tag":"Feedback"  
  }
```

> Sample Response

```json
{
    "createdId": 233,
    "warnings": [
    ]
}

```

Lets you update an existing question of a survey.

### Resource Information
Information | Value
----------- | -----
URI | `/survey/question?questionId={value}`
Authentication | Yes
HTTP Method | PUT
Batch Support | No

### Request URL
`http://<cluster url>/v2/survey/question?questionId={value}`


### Request Attributes

Attribute | Description
--------- | -----------
tag | Possible values: Nps, CSAT, Comments, or Feedback
fieldType | Specify the new field type - TextBlock, TextAreaBlock, Multiple Choice, Checkboxes, Scale, Star Rating, multiquestion, Add Call us back question, and nps
question* | Specify the updated survey question
fieldOptions | Specify the new options you want to have for the question. Not applicable for TextBlock, TextAreaBlock
params | 
isActive | Add or remove a question. Value: true/false


































## Add Survey Responses

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/responses?surveyId=112
```

> Sample POST Request

```json
[{
		"surveyQuestionId": "233",
		"userId": 134223,
  		"formId":123,
 		"tokenId":1,
  		"fieldValue":"Sample answer",
		"entityType": "feedback",
		"entityId": 222,
		"responseChannel": "Email"
}]

```

> Sample Response

```json
{
   "data": [
       {
           "id": 146,
           "surveyQuestionId": 233,
           "entityId": 222,
           "entityType": "feedback",
           "fieldValue": "Sample answer",
           "formId": 123,
           "responseChannel": "Email",
           "userId": 134223,
           "tokenId": 1,
           "lastUpdatedOn": "2017-12-12T15:18:23+05:30"
       }
   ],
   "warnings": [
   ],
   "errors": [
   ]
}
```

Allows adding customer responses to a survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey/responses?surveyId/extRefId={value}
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v2/survey/responses?surveyId={survey id}`

`http://<cluster url>/v2/survey/responses?extRefId={external reference id}`

### Request Attributes

Attribute | Description
--------- | -----------
surveyQuestionId* | Pass the id of the survey question
userId* | Provide the user id of the customer responded to the survey
formId* | Provide the unique form id of the survey campaign 
tokenId* | Provide the unique id assigned to a customer to submit a survey
fieldValue* | Specify the value/answer chosen for the question
entityType | Specify the entity type of the survey - transaction, complaint, or feedback
entityId | Pass the id of the respective entity type
responseChannel | Specify the response channel - Email, Call Center, Social, or Instore
 
 
 
 
 
 
## Update Survey Responses

> Sample Request

```html
http://us.api.capillarytech.com/v2/survey/responses?responseId=173
```

> Sample POST Request

```json
{
  		"fieldValue":"Very happy with the after sales support"
}
```

> Sample Response

```json
{
    "createdId": 173,
    "warnings": [
    ]
}
```

Lets you update an existing response of a survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey/responses?responseId={value}
Authentication | Yes
HTTP Method | PUT
Batch Support | No

### Request URL
`http://<cluster url>/v2/survey/responses?responseId={value}`

### Request Attributes

Attribute | Description
--------- | -----------
fieldValue* | Specify the new response value for the question
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


## Retrieve Details of a Survey

> Sample Request

```html
http://us.intouch.capillarytech.com/v2/survey?extRefId=123
```

> Sample Response

```json
{
"id": 101,
"brandLogo": "http://biz-colostate.files/starbucks-coffee.gif",
"brandWebsite": "www.samplebramd.com",
"source": "Cloudcherry/Capillary",
"surveyType": "Online",
"title": "Feedback Survey",
"externalRefId": "123",
"lastUpdatedOn": "2017-12-04",
"warnings":[]
}
```

Retrieves the details of a specific survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey?{surveyId/extRefId}
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
http://<cluster url>/v2/survey?{surveyId/extRefId}={value}

### Request Attributes

Parameter | Description
--------- | -----------
surveyId | The unique id of the survey campaign generated by Capillary
extRefId | The unique id for the survey generated by the vendor


## Retrieve All Questions of a Survey

> Sample Request

```html
http://us.intouch.capillarytech.com/v2/survey/questions?surveyId=214
```

> Sample Response

```json
{
    "data": [
        {
            "id": 208,
            "qxnExternalId": "Question01",
            "question": "Question01",
            "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
            "fieldType": "Checkboxes",
            "tag": "Nps",
            "isActive": true,
            "lastUpdatedOn": "2017-12-05",
            "parentId": 0,
            "params": "string"
        },
        {
            "id": 209,
            "qxnExternalId": "Question02",
            "question": "Question02",
            "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
            "fieldType": "Checkboxes",
            "tag": "Nps",
            "isActive": true,
            "lastUpdatedOn": "2017-12-05",
            "parentId": 0,
            "params": "string"
        },
        {
            "id": 210,
            "qxnExternalId": "Question01",
            "question": "Question01",
            "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
            "fieldType": "Checkboxes",
            "tag": "Nps",
            "isActive": true,
            "lastUpdatedOn": "2017-12-05",
            "parentId": 0,
            "params": "string"
        },
        {
            "id": 211,
            "qxnExternalId": "Question01",
            "question": "Question01",
            "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
            "fieldType": "Checkboxes",
            "tag": "Nps",
            "isActive": true,
            "lastUpdatedOn": "2017-12-06",
            "parentId": 0,
            "params": "string"
        },
        {
            "id": 216,
            "qxnExternalId": "Question01",
            "question": "Question01",
            "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
            "fieldType": "Checkboxes",
            "tag": "Nps",
            "isActive": true,
            "lastUpdatedOn": "2017-12-06",
            "parentId": 0,
            "params": ""
        }
    ],
    "warnings": [
    ],
    "errors": [
    ]
}
```

Retrieves all questions of a specific survey.

### Resource Information
Information | Value
----------- | -----
URI | /survey/questions?<surveyId/extRefId>={value}
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`http://<cluster url>/v2/survey/questions/surveyId=<survey id>`

`http://<cluster url>/v2/survey/questions/extRefId=<external reference id>`


### Request Parameters

Parameter | Description
--------- | -----------
surveyId/extRefId | Pass the survey id or external reference id of the survey for which you want to retrieve all the questions


## Retrieve Details of a Specific Question

> Sample Request

```html
http://api.nightly.capillary.in/v2/survey/questions/214
```

> Sample Response

```json
{
    "id": 214,
    "qxnExternalId": "Question01",
    "question": "Question01",
    "fieldOptions": "{\r\n\"opt1\": \"product not available\",\r\n\"opt2\": \"price too high \",\r\n\"opt3 \": \"I just don’t like your store\"\r\n}",
    "fieldType": "Multiple Choice",
    "tag": "nps",
    "isActive": true,
    "lastUpdatedOn": "2017-12-06",
    "parentId": 0,
    "params": "",
    "warnings": [
    ]
}
```

Retrieves details of a specific question.

### Resource Information
Information | Value
----------- | -----
URI | /survey/questions/{survey question Id} 
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`http://<Cluster URL>/v2/survey/questions/<survey question id>`

### Request Parameter
Parameter | Description
--------- | ----------
Survey question id* | Pass the question id for which you want to see the details



## Retrieve the ID of a Specific Question

> Sample Request

```html
http://us.intouch.capillarytech.com/v2/survey/questions/lookup/112
```

> Sample Response

```json

{
    "entity": 255,
    "warnings": [
    ]
}
```


Retrieves the id of a specific survey question.


### Resource Information
Information | Value
----------- | -----
URI | /survey/questions/lookup/{question external id}
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`http://<cluster url>/v2/survey/questions/lookup/<question external id>`


### Request Parameters

Parameter | Description
--------- | -----------
Question External ID | Pass the unique external id of the question



## Retrieve Details of a Specific Response

> Sample Request

```html
http://us.intouch.capillarytech.com/v2/survey/responses/118
```

> Sample Response

```json
{
    "id": 118,
    "surveyQuestionId": 256,
    "entityId": 0,
    "fieldValue": "Sample answer",
    "formId": 1234,
    "userId": 13422223,
    "tokenId": 23,
    "lastUpdatedOn": "2017-12-07",
    "warnings": [
    ]
}
```

Retrieves the details of a specific survey response.


### Resource Information
Information | Value
----------- | -----
URI | /responses/{response id}
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`http://<Cluster URL>/v2/survey/responses/<response id>`


### Request Parameters
Parameters | Description
---------- | -----------
response id* | Provide the response id that you want to fetch


### Response Codes

Code | Description
---- | -----------
9001 | Invalid survey id
9002 | Invalid survey question id
9003 | No surveys found
9004 | No survey questions found
9005 | No survey responses found
9006 | Invalid survey external reference id passed
9007 | Unable to add survey questions
9008 | Survey external reference id already exists
9010 | Question external id {x} already exists
9011 | Invalid survey question external id {0} passed for lookup
9012 | Duplicate survey question external id {0} in request 
