# Communications

## Send Email Communications

Lets you send an email to a customer. You can schedule the date and time you wish to send the message.

> Sample Request URL


```html
http://us.api.capillarytech.com/v2/communications/email

```

> Sample POST Request

```json
{
  "root": {
    "email": [{
      "to": "tom.sawyer@example.com",
      "cc": "cashier1@example.com, cashier2@example.com",
      "bcc": "storemanager@example.com",
      "from": "store1@store.com",
      "subject": "Testing email",
      "body": "Dear Tom,
            Thanks for visiting our store. Hope you had a pleasant experience.
        ",
      "attachments": {
        "attachment": [{
          "fileName": "sample.pdf",
          "fileType": "pdf",
          "fileData": "  -- base64_encoded file contents
                adsdsadd21121dasd12123123assdad1212123
                234234234234234234
                24234234
            ",
		 "fileEncodingType": "base64"
        }]
      },
      "scheduledTime": "2016-08-05 22:00:21"
    }
  ]
  }
}
```


> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "success"
    },
    "email": {
      "id": "23423443",
      "to": "tom.sawyer@example.com",
      "cc": "cashier1@example.com, cashier2@example.com",
      "bcc": "storemanager@example.com",
      "status": "Queued",
      "subject": "Sample email",
      "description": "Dear Tom,
            Thanks for the treat. Looking forward to more treats",
      "scheduledTime": "2016-08-05 22:00::IST"
    }
  }
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/email`
Authentication | Yes
HTTP Methods | POST
Batch Support | No

### Request URL

`http://{host}/v2/communications/email`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
email | array-obj | Complete details of the email to send.
to | string | Recipient's email ID.
cc | string | Email ID to be included in CC 
bcc | string | Email IDs to included in BCC.
from | string | Email ID of the sender.
subject | string | Subject of the email.
body | string | Body of the email.
attachments | obj | Details of the attachment used in the email. 
attachment | array-obj | Details of each attachment in email.
fileName | string | Name of the attached file. 
fileType | string | Type of the file (file format). 
fileData | strig | Encoded data of the  attachment.
fileEncodingType | string | Encoding type of the image attachment to upload images in the right format. Required for all base64 encoded image formats such as JPG, PNG, JPEG, and GIF. This is not required for other file types like TXT, and PDF which are not base64 encoded.
scheduledTime | date-time | `ISO` standard date and time of scheduling the email.
