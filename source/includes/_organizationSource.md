# Other APIs (Org Level)

This section provides all other APIs that are not in any of the resources mentioned above.


## Update Org Currency Ratio

Lets you add or update currency ratios with respect to Indian Rupee (INR).


> Sample Request

```html
https://us.api.capillarytech.com/v2/currencyratio
```


> Sample POST Request

```json
{ 
	"ratioInr":51, 
	"currencyCode":"SGD" 
}
```



> Sample Response

```json
{
   "entity":{
      "currencyCode":"SGD",
      "ratioInr":51
   },
   "errors":[

   ],
   "success":true,
   "warnings":[

   ]
}

```

### Resource Information
| | |
--------- | ----------- |
URI | `/currencyratio`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/v2/currencyratio`



### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
ratioInr | double | Conversion ratio with respect to INR.
currencyCode | string | ISO currency code that you want to update. For example `EUR` for Euro, `SGD` for Singapore Dollar, `CNY` for China Yuan Renminbi, `SAR` Saudi Riyal. For more codes, Google for ISO currency codes. 






## Generate External IDs

> Sample Request


```html 
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

`https://{host}/v2/cardNumber`


## Show/Hide Extended Fields on InTouch

> Sample Request

```html
http://us.intouch.capillarytech.com/v2/entity/extended_field_config
```

> Sample POST Request

```json
{  
   "extendedFieldId":10,
   "hideDisplay":false,
   "mandatory":false,
   "updatable":true,
   "position":101
}
```

> Sample Response

```json
{  
   "extendedFieldId":10,
   "createdBy":-1,
   "modifiedBy":-11,
   "hideDisplay":false,
   "position":101,
   "createdOn":"2017-01-03 10:20:42",
   "modifiedOn":"2018-01-03 10:20:42",
   "mandatory":false,
   "updatable":true,
   "warnings":[  

   ]
}
```

This API lets you show or hide a specific extended field on your org's InTouch account.

### Resource Information

| | |
--------- | ----------- |
URI | `/entity/extended_field_config`
Rate Limited? | No
Authentication | Yes
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details




### Request URL

`https://{host}/v2/entity/extended_field_config`

### Request Body Parameters
Attribute | Datatype | Description
--------- | -------- | -----------
extendedFieldId* | long | Specify the unique id of the extended field that you want to show/hide
createdOn | date | Date on which the field is created in `YYYY-MM-DD` format.
createdBy | string | Unique id of the user that created the extended field.
modifiedOn | date | Date when the extended field is updated (usually the Current date)
modifiedBy | date | Unique id of the user that modified the extended field.
hideDisplay* | boolen | Pass `true` to hide the extended field on UI, `false` to show extended field.
mandatory | boolen | Pass `true` to make the extended a mandatory option on the UI, `false` to make it an optional field.
updatable | boolean | Specify `true` to allow updating extended field values once entered, `false` to disable updating extended field values
position | boolean | Specify the position order of the extended field on the UI.



## Get Org Extended Fields


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



### Resource Information
| | |
--------- | ----------- |
URI | `/extendedFields`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Additional Header

Header | Description
------ | -----------
language | Specify the ISO code of a language to get extended field values in your preferred language. For example, `zh` for Chinese, `id` for Indonesian, `ar` for Arabic. English is the default language.

<aside class="notice">To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org. </aside>

### Request URL

`https://{host}/v2/extendedFields`




## Create Store Associates

> Sample Request

```html
https://us.api.capillarytech.com/v2/orgEntity/associate
````

> Sample POST Request

```json
{
 "code": "01099-james",
 "name": "William James",
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
| | |
--------- | ----------- |
URI | `orgEntity/associate`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL
`https://{host}/v2/orgEntity/associate`



## Add Store

Lets admins to add a store to an org.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/orgEntity/store
```

> Sample POST Request

```json
{
    "code": "Demostore11",
    "description": "Mobile Push demo store",
    "name": "Demo Store",
    "type": "STORE",
    "adminType": "admin",
    "isActive": true,
    "timeZoneId": 191,
    "currencyId": 23,
    "languageId": "",
    "parentZoneId": 300001744,
    "externalIds": [
        "Ex-9399"
    ],
    "email": "demostore@example.com",
    "mobile": "917262178832",
    "landline": "",
    "latitude": "",
    "longitude": "",
    "address": "",
    "cityId": 0,
    "areaId": 0
}
```

> Sample Response

```json
{
    "createdId": 50026755,
    "warnings": []
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `orgEntity/store`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL
`https://{host}/v2/orgEntity/store`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | ------------
code* | string | Unique code of the store (alphanumeric)
name* | string | Name of the store.
description | string | Brief information about the store.
type | enum | Type of the entity. Value: Pass `STORE`.
adminType | enum | Type of the store. Value: Pass `GENERAL` for a normal store, `ADMIN` for an admin store.
isActive | boolean | Pass `true` to make the store active, `false` to inactivate a store.
timeZoneId | long | Base time-zone ID of the store.
currencyId | int | Base currency ID of the store based on the location.
languageId | long | Base currency ID of the store.
parentZoneId | long | Associated parent zone ID of the store. 
externalIds | array | External IDs of the store.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Get Org Loyalty Programs

> Sample Request

```html
https://us.api.capillarytech.com/v2/organization/programs
```

> Sample Response

```json
{
    "data": [
        {
            "programId": 622,
            "programName": "CLIENT_MERGEDefaultProgram",
            "pointsToCurrencyRatio": 0.111,
            "programDescription": "Default program for CLIENT_MERGE",
            "partnerPrograms": [
                {
                    "partnerProgramId": 5,
                    "partnerProgramName": "1stProgram",
                    "partnerProgramDescription": "1stProgram",
                    "partnerProgramTiers": [
                        {
                            "tierNumber": 1,
                            "tierName": "1stSlab"
                        },
                        {
                            "tierNumber": 2,
                            "tierName": "2ndSlab"
                        },
                        {
                            "tierNumber": 3,
                            "tierName": "3rdSlab"
                        }
                    ],
                    "pointsExchangeRate": 1.0,
                    "partnerProgramType": "EXTERNAL",
                    "membershipPeriodValue": 0,
                    "tierBased": true
                },
                {
                    "partnerProgramId": 48,
                    "partnerProgramName": "Demo_Partner_Program",
                    "partnerProgramDescription": "Demo program",
                    "partnerProgramTiers": [
                        {
                            "tierNumber": 1,
                            "tierName": "Silver"
                        },
                        {
                            "tierNumber": 2,
                            "tierName": "Gold"
                        }
                    ],
                    "pointsExchangeRate": 1.0,
                    "partnerProgramType": "EXTERNAL",
                    "membershipPeriodValue": 0,
                    "tierBased": true
                },
                {
                    "partnerProgramId": 49,
                    "partnerProgramName": "DemoSupplementaryProgram",
                    "partnerProgramDescription": "Demo Supplementary program.",
                    "pointsExchangeRate": 1.0,
                    "partnerProgramType": "SUPPLEMENTARY",
                    "membershipPeriodType": "DAYS",
                    "membershipPeriodValue": 365,
                    "tierBased": false
                },
                {
                    "partnerProgramId": 11,
                    "partnerProgramName": "NoTierPartnerProgram",
                    "partnerProgramDescription": "NoTierPartnerProgram",
                    "pointsExchangeRate": 1.0,
                    "partnerProgramType": "EXTERNAL",
                    "membershipPeriodValue": 0,
                    "tierBased": false
                }
            ],
            "default": true
        }
    ],
    "warnings": [],
    "errors": []
}
```

Retrieves all the active loyalty programs of the org.


### Resource Information
| | |
--------- | ----------- |
URI | `organization/programs`
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL
`https://{host}/v2/organization/programs`


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
programId | long | Unique ID of the loyalty program.
programName | string | Name of the partner program.
pointsToCurrencyRatio | double | Points to currency conversion ratio of the default program configured for the program.
programDescription | string | Description of the program.
pointsExchangeRate | double | Points to currency conversion ratio configured for the external program.
partnerProgramType | enum | Type of the program - external, supplementary, or default.
membershipPeriodValue | int | Membership validity of the program.
tierBased | boolean | Whether the program is tier based (`true`) or membership based (`false`).







## Feed (Scan Event)
> Sample Request

```html
https://us.api.capillarytech.com/v2/feed?source=INSTORE
```

> Sample POST Request

```json
{  
   "eventName":"GetPromotion",
   "openId":"",
   "eventTime":"2018-09-28T15:26:45+05:30",
   "scanId":"scanId_571910",
   "details":"details_571910",
   "customer":{  
      "id":"293653070",
      "mobile":"917799497290",
      "email":"2245@gmail.com",
      "externalId":"ext_i9422176957"
   },
   "sku":"Levis-001",
   "promotionCode":""
}
```

> Sample Response

```json
{  
   "orgId":50210,
   "openId":"",
   "eventTime":"2018-09-28T15:26:45+05:30",
   "eventName":"GETPROMOTION",
   "scanId":"scanId_571910",
   "details":"details_571910",
   "source":"INSTORE",
   "accountId":"",
   "attributes":{  

   },
   "autoUpdateTime":"2018-10-03T15:44:49+05:30",
   "eventMode":0,
   "customerId":316749198,
   "sku":"Levis-001",
   "sideEffects":[  
      {  
         "id":29800985,
         "couponType":"DVS",
         "couponCode":"60XQGEHW",
         "validTill":"2018-10-31T23:59:59+05:30",
         "description":"1",
         "discountCode":"1perc",
         "discountValue":1,
         "discountType":"PERC",
         "type":"coupon",
         "trimmedCouponCode":"60XQGEHW"
      }
   ],
   "warnings":[  

   ]
}
```

Captures details of an events based on qrcodes ,menuclick, and getpromotion.

### Resource Information
| | |
--------- | ----------- |
URI | `feed?source=INSTORE`
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL
`https://{host}/v2/feed?source=INSTORE`

### Request Body Parameters

Parameter | Description
-------- | ------------
eventName* | Pass the name of the scan event to capture - Value: GetPromotion (for scan event)
eventTime | Time of the event
scanId | ID of the scanned code
sku | SKU of the scanned item
promotionCode | The coupon code of the promotion (Place holder for future use case. Not implemented yet)
details | Details of the event item
id/mobile/email/externalId* | Pass any one of the customer's unique identifier 



## Set Max Active Cards per Customer

Lets you set maximum number of active cards a customer can have from the org.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/organization/configs
```

> Sample POST Request

```json
{
  "keyName": "CONF_MAX_CARDS_PER_ORG",
  "value": "6",
  "scope":"ORG"
}

```


> Sample Response

```json
{
    "id": 1290976,
    "entityId": 100458,
    "keyName": "CONF_MAX_CARDS_PER_ORG",
    "value": "6",
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `v2/organization/configs`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | No


### Request URL
`{host}/v2/organization/configs`

### Request Body Parameter

Parameter | Datatype | Description
--------- | -------- | -----------
keyName* | enum | Pass `CONF_MAX_CARDS_PER_ORG`
value* | int | Limit the count of active cards per customer.
scope* | enum | Scope of the configuration. Pass `ORG` for org level configuration.

<aside class="notice">Parameters marked with * are mandatory. </aside>




## Get Max Active Cards Configured per Customer

Retrieves the configured maximum number of cards active cards per customer.

> Sample Request

```html
https://eu.api.capillarytech.com/v2/organization/configs/CONF_MAX_CARDS_PER_ORG
```



> Sample Response

```json
{
    "entityId": 100458,
    "keyName": "CONF_MAX_CARDS_PER_ORG",
    "value": "6",
    "scope": "ORG",
    "warnings": []
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/v2/organization/configs/CONF_MAX_CARDS_PER_ORG`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | GET
Batch Support | No


### Request URL
`{host}/v2/organization/configs/CONF_MAX_CARDS_PER_ORG`



## Get Org Sources
​
Retrieves all sources configured for the org along with the supported communication channels for each source. 

> Sample Request

```html
https://us.api.capillarytech.com/v2/meta/sources
```

> Sample Response 

```json

{
   "data":[
      {
         "id":1,
         "name":"Facebook",
         "commChannels":[
            "email",
            "mobile"
         ]
      },
      {
         "id":2,
         "name":"WEB_ENGAGE",
         "commChannels":[
            "android",
            "email",
            "ios",
            "mobile"
         ]
      },
      {
         "id":3,
         "name":"WECHAT",
         "commChannels":[
            "email",
            "mobile",
            "wechat"
         ]
      },
      {
         "id":5,
         "name":"INSTORE",
         "commChannels":[
            "email",
            "mobile",
            "postmail",
            "whatsapp"
         ]
      },
      {
         "id":6,
         "name":"MARTJACK",
         "commChannels":[
            "email",
            "whatsapp"
         ]
      },
      {
         "id":7,
         "name":"TMALL",
         "commChannels":[
            "mobile"
         ]
      },
      {
         "id":8,
         "name":"TAOBAO",
         "commChannels":[
            "email"
         ]
      },
      {
         "id":9,
         "name":"JD",
         "commChannels":[
            "email"
         ]
      },
      {
         "id":10,
         "name":"ECOMMERCE",
         "commChannels":[
            "email",
            "mobile",
            "whatsapp"
         ]
      },
      {
         "id":11,
         "name":"WEBSITE",
         "commChannels":[
            "android",
            "email",
            "ios",
            "mobile",
            "wechat",
            "whatsapp"
         ]
      },
      {
         "id":12,
         "name":"LINE",
         "commChannels":[
            "email",
            "line"
         ]
      },
      {
         "id":13,
         "name":"XIAOHONGSHU",
         "commChannels":[
            "mobile"
         ]
      },
      {
         "id":14,
         "name":"GLOBAL_SCANNER",
         "commChannels":[
            "email"
         ]
      },
      {
         "id":15,
         "name":"SUNING",
         "commChannels":[
            "email",
            "mobile"
         ]
      },
      {
         "id":16,
         "name":"PINDUODUO",
         "commChannels":[
            "email",
            "mobile"
         ]
      },
      {
         "id":17,
         "name":"KAOLA",
         "commChannels":[
            "email"
         ]
      },
      {
         "id":18,
         "name":"MOBILE_APP",
         "commChannels":[
            "android",
            "ios",
            "whatsapp"
         ]
      },
      {
         "id":19,
         "name":"WHATSAPP",
         "commChannels":[
            "whatsapp"
         ]
      },
      {
         "id":20,
         "name":"Linkedin",
         "commChannels":[
            
         ]
      },
      {
         "id":21,
         "name":"SMS",
         "commChannels":[
            
         ]
      },
      {
         "id":22,
         "name":"Indiamart",
         "commChannels":[
            
         ]
      },
      {
         "id":23,
         "name":"VIBER",
         "commChannels":[
            "viber"
         ]
      },
      {
         "id":24,
         "name":"MPUSH_FCM",
         "commChannels":[
            "android",
            "ios"
         ]
      }
   ],
   "warnings":[
      
   ],
   "errors":[
      
   ]
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/meta/sources`
HTTP Method | GET
API Version | v2
Batch Support | No
Rate Limited? | No


### Request URL

`https://{host}/v2/meta/sources`

​
​
​
​
​
​
## Get Source Configurations
​
Retrieves the configuration details of a specific source. 
​
​> Sample Request

```html
https://us.api.capillarytech.com/v2/org/100458/sources/2/configs
```

> Sample Response 

```json
{
    "data": [
        {
            "id": 11,
            "name": "licenseCode",
            "type": "string",
            "label": "License Code",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 1,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 12,
            "name": "accessToken",
            "type": "string",
            "label": "Access Token",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 2,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 13,
            "name": "android",
            "type": "bool",
            "label": "Android",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 3,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 14,
            "name": "ios",
            "type": "bool",
            "label": "IOS",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 4,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 15,
            "name": "validTill",
            "type": "list",
            "label": "Valid Till Name",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 5,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 16,
            "name": "loginIdentifierType",
            "type": "list",
            "label": "Account linking identifier",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 6,
            "attribution": {
                "createDate": "2017-03-02",
                "modifiedDate": "2017-03-02"
            }
        },
        {
            "id": 24,
            "name": "trans_campaign_id",
            "type": "string",
            "label": "trans_campaign_id",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 0,
            "attribution": {
                "createDate": "2017-04-04",
                "modifiedDate": "2017-04-04"
            }
        },
        {
            "id": 28,
            "name": "deeplink",
            "type": "list",
            "label": "Deep Link",
            "sourceId": 2,
            "defaultValue": "",
            "displayOrder": 7,
            "attribution": {
                "createDate": "2017-06-22",
                "modifiedDate": "2017-06-22"
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Resource Information

| | |
--------- | ----------- |
URI | `v2/org/{orgId}/sources/{sourceId}/configs`
HTTP Method | GET
API Version | v2
Batch Support | No
Rate Limited? | No

### Request URL

`https://{host}/v2/org/{orgId}/sources/{sourceId}/configs`


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
orgId* | int | Unique code to identify the organization. 
sourceId* | int | Unique ID of the source to fetch configurations.   

<aside class="notice"> Parameters marked with * are mandatory. </aside>

​
