# Other APIs (Org Level)




## Generate External IDs

```html
# Sample Request
 
https://us.api.capillarytech.com/v2/cardNumber
```

> Sample Response

```json

{
    "entity": "1000000010",
    "warnings": []
}
```

This API lets you generate external ids manually which can be tagged to a customer while registering. A unique external id is generated every time you call this API. To generate external ids, the option CONF_CARD_NUMBER_GENERATION_ENABLED on InTouch > Settings > Miscellaneous> Registration Configuration page should have enabled. When a customer is registered without an external id, this API is called in the back-end and the unique external id is tagged to the customer automatically. However, it will not ove...(line truncated)...

### Prerequisites

* This API works only if CONF_CARD_NUMBER_GENERATION_ENABLED and CONF_CLIENT_V2_API_ENABLED are checked on the Registration Configuration page
* It is valid only for the account ids configured on the SOURCE_ACCOUNTS_EXTERNALID_ENABLED of the Registration Configuration page


### Request URL

`https://<Respective cluster’s API URL>/v2/cardNumber`



## Retrieve Org Extended Fields


> Sample Request

```html
https://us.api.capillarytech.com/v2/extendedFields
```

> Sample Response

```json
{
    "entity": {
        "customer": [
            {
                "id": 7,
                "name": "gender",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "Gender",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            },
            {
                "id": 24,
                "name": "marital_status",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Marital Status",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            },
            {
                "id": 25,
                "name": "city",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-13",
                "label": "City",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 26,
                "name": "dob",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-13",
                "label": "Date of Birth",
                "dataType": "DATETIME",
                "parentId": -1
            },
            {
                "id": 27,
                "name": "ssnNumber",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-13",
                "label": "SSN Number",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 28,
                "name": "nationality",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-13",
                "label": "Nationality",
                "dataType": "COUNTRY",
                "parentId": -1
            },
            {
                "id": 43,
                "name": "ethnicity",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-07-20",
                "label": "Ethnicity",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 44,
                "name": "zip",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-07-20",
                "label": "Zip Code",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 45,
                "name": "born_in",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Birth Country",
                "dataType": "COUNTRY",
                "parentId": -1
            },
            {
                "id": 46,
                "name": "preferred_store",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Preferred Store",
                "dataType": "ORG_ENTITY",
                "parentId": -1
            },
            {
                "id": 47,
                "name": "preferred_cashier",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Preferred Cashier",
                "dataType": "ASSOCIATE_USER",
                "parentId": -1
            },
            {
                "id": 48,
                "name": "preferred_language",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Preferred Language",
                "dataType": "LANGUAGE",
                "parentId": -1
            },
            {
                "id": 49,
                "name": "preferred_currency",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Preferred Currency",
                "dataType": "CURRENCY",
                "parentId": -1
            },
            {
                "id": 52,
                "name": "profession",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Profession",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 53,
                "name": "religion",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Religion",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 54,
                "name": "wedding_date",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Wedding Date",
                "dataType": "DATETIME",
                "parentId": -1
            },
            {
                "id": 60,
                "name": "country_of_residence",
                "createdBy": -1,
                "createdOn": "2017-11-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-11-14",
                "label": "Country of Residence",
                "dataType": "COUNTRY",
                "parentId": -1
            },
            {
                "id": 62,
                "name": "kid_status",
                "createdBy": -1,
                "createdOn": "2017-11-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-11-14",
                "label": " Is customer having kids",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            }
        ],
        "lineitem": [
            {
                "id": 5,
                "name": "uuid",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "UUID",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 8,
                "name": "serial_number",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Serial Number",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 10,
                "name": "vat_tax_percentage",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Vat Tax Percentage",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 11,
                "name": "vat_amount",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Vat Tax Amount",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 12,
                "name": "service_tax_amount",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Service Tax Amount",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 13,
                "name": "service_tax_percentage",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "Service Tax Percentage",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 37,
                "name": "CentralGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Central GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 38,
                "name": "StateGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "State GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 39,
                "name": "IntegratedGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Integrated GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 50,
                "name": "size",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Size",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 55,
                "name": "special_lineitem_type",
                "createdBy": -1,
                "createdOn": "2017-10-23",
                "modifiedBy": -1,
                "modifiedOn": "2017-10-23",
                "label": "Special LineItem Type",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            },
            {
                "id": 1,
                "name": "MetalRate",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "Metal Rate",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 2,
                "name": "MetalWeight",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "Metal Weight",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 3,
                "name": "StoneCharge",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "Stone Charge",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 4,
                "name": "MakingCharge",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-04-14",
                "label": "Making Charge",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 32,
                "name": "GrossWeight",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Gross Weight",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 33,
                "name": "MetalPurity",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Metal Purity",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 40,
                "name": "Unit",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-28",
                "label": "Unit",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            },
            {
                "id": 41,
                "name": "DesignCode",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-07-20",
                "label": "Design Code",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 42,
                "name": "SupplierCode",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-07-20",
                "label": "Supplier Code",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 9,
                "name": "imei_number",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-05-19",
                "label": "regular_transaction",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 51,
                "name": "inseam",
                "createdBy": -1,
                "createdOn": "2017-08-22",
                "modifiedBy": -1,
                "modifiedOn": "2017-08-22",
                "label": "Inseam",
                "dataType": "DOUBLE",
                "parentId": -1
            }
        ],
        "transaction": [
            {
                "id": 29,
                "name": "cashier_id",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-13",
                "label": "Cashier Id",
                "dataType": "STRING",
                "parentId": -1
            },
            {
                "id": 34,
                "name": "CentralGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Central GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 35,
                "name": "StateGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "State GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 36,
                "name": "IntegratedGST",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Integrated GST",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 61,
                "name": "tax_amount",
                "createdBy": -1,
                "createdOn": "2017-11-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-11-14",
                "label": " Tax Amount",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 63,
                "name": "NPS",
                "createdBy": -1,
                "createdOn": "2017-11-28",
                "modifiedBy": -1,
                "modifiedOn": "2017-11-28",
                "label": "NPS",
                "dataType": "INTEGER",
                "parentId": -1
            },
            {
                "id": 30,
                "name": "GrossWeight",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Gross Weight",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 31,
                "name": "MetalPurity",
                "createdBy": -1,
                "createdOn": "2017-04-14",
                "modifiedBy": -1,
                "modifiedOn": "2017-06-23",
                "label": "Metal Purity",
                "dataType": "DOUBLE",
                "parentId": -1
            },
            {
                "id": 56,
                "name": "booking_type",
                "createdBy": -1,
                "createdOn": "2017-10-23",
                "modifiedBy": -1,
                "modifiedOn": "2017-10-23",
                "label": "Booking Type",
                "dataType": "STANDARD_ENUM",
                "parentId": -1
            },
            {
                "id": 57,
                "name": "order_date_time",
                "createdBy": -1,
                "createdOn": "2017-10-23",
                "modifiedBy": -1,
                "modifiedOn": "2017-10-23",
                "label": "Order Time",
                "dataType": "DATETIME",
                "parentId": -1
            },
            {
                "id": 58,
                "name": "delivery_date_time",
                "createdBy": -1,
                "createdOn": "2017-10-23",
                "modifiedBy": -1,
                "modifiedOn": "2017-10-23",
                "label": "Delivery Time",
                "dataType": "DATETIME",
                "parentId": -1
            },
            {
                "id": 59,
                "name": "order_channel",
                "createdBy": -1,
                "createdOn": "2017-10-23",
                "modifiedBy": -1,
                "modifiedOn": "2017-10-23",
                "label": "Order Channel",
                "dataType": "CUSTOM_ENUM",
                "parentId": -1
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}

```

Retrieves the details of all extended fields configured for the organization.

### Request URL

`https://<Cluster URL>/v2/extendedFields`

### Resource Information
Information | Value
----------- | -----
URI | /extendedFields
Authentication | Yes
HTTP Method | GET
Batch Support | No




## Create Store Associates
```html
https://us.api.capillarytech.com/v2/orgEntity/associate
````

> Sample Request

```json
{
 "code": "01099-james",
 "name": "William James ",
 "storeId": 50007863,
 "isActive": true
}
```

> Sample Response

```json
{
   "createdId": 50011749,
   "warnings": [
   ]
}
```


Allows adding new associates to a store. Only admin users of the org can create associates.

### Resource Information
Information | Value
----------- | -----
URI | `orgEntity/associate`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL
`https://<cluster url>v2/orgEntity/associate`




## Retrieve Org Loyalty Programs
```html
https://us.api.capillarytech.com/v2/organization/programs
```

```json
{
   "data": [
       {
           "programId": 1124,
           "programName": "DefaultLoyaltyProgram",
           "pointsToCurrencyRatio": 1,
           "default": true
       },
       {
           "programId": 1254,
           "programName": "SouthLoyaltyProgram",
           "pointsToCurrencyRatio": 1,
           "default": false
       }
   ],
   "warnings": [
   ],
   "errors": [
   ]
}
```

Retrieves all the active loyalty programs of the org.


### Resource Information
Information | Value
----------- | -----
URI | `organization/programs`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://<cluster url>v2/organization/programs`