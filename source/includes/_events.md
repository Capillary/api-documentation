# Behavioral Events

Behavioral events help capture customer activities such as registration, forgot password, and cart abandonment. There are standard events that are predefined with name, id, and attributes. The `events` resource lets you create custom events and Webhook account, enable standard events for an org, and map event fields.


## Create Custom Event

Lets you create a new behavioral event.

> Sample Request

```html
http://us.api.capillarytech.com/v2/events
```

> Sample POST Request

```json
{
  "eventName": "PointsEvent1",
  "actions": [
    "EMFConsumer"
  ],
  "fields": [
	{
      "attributes": {
        "addCustomerIfNotExists": {
          "valueType": "Boolean",
          "value": "true"
    	}
  	},
      "type": "customer",
      "name": "customer"
	},
	{
      "attributes": {
        "isRequired": {
          "valueType": "Boolean",
          "value": "true"
    	}
  	},
      "type": "tillCode",
      "name": "till"
	},
	{
      "attributes": {
        "isRequired": {
          "value": "false",
          "valueType": "BOOLEAN"
    	}
  	},
      "type": "productSku",
      "name": "sku"
	},
	{
      "attributes": {
        "isRequired": {
          "value": "false",
          "valueType": "BOOLEAN"
    	}
  	},
      "type": "double",
      "name": "Sparkles"
	},
	{
      "attributes": {
        "isRequired": {
          "value": "false",
          "valueType": "BOOLEAN"
    	}
  	},
      "type": "double",
      "name": "Bricks"
	},
	{
      "attributes": {
        "isRequired": {
          "value": "false",
          "valueType": "BOOLEAN"
    	}
  	},
      "type": "double",
      "name": "Cement"
	},
	{
      "attributes": {
        "isRequired": {
          "value": "false",
          "valueType": "BOOLEAN"
   	 }
  	},
      "type": "string",
      "name": "Names"
	}
  ]
}


```

> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```



### Request Information

| | |
--------- | ----------- |
URI | `/events`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL

`http://{host}/v2/events`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
eventName | string | Specify a name of the event
actions | enum | Specify the destination of the event. Values: `EMFConsumer` for EMF related events: Loyalty, DVS, and Communication, EIConsumer for Essential Insights
description | string | Specify a short description for the event
fields | obj | Configure fields for the current event with attributes: name, type, and value
name | string | Specify the name of the field
type | enum | Specify the type of the attribute. Value: `tillCode`, `couponCode`, `customer`, `productSku`, `productBrand`, `productCategory`, `string`, `double`,
addCustomerIfNotExists | obj | Set this value to `true` to allow registering new customers in to the loyalty program automatically
valueType | enum | Data-type of the attribute. Example: Boolean, Enum, String
value | string | Value of the attribute based on its `valueType`.For example, if valueType is Boolean, either `true` or `false` is supported as value

<aside class="notice">All parameters marked by * are mandatory. </aside>


## Update Custom Event

Lets you add or remove fields and customers for an event. You need to pass the entire payload of the event.



> Sample Request

```html
http://us.api.capillarytech.com/v2/events
```

> Sample PUT Request

```json
{
	"eventName": "eventsdemo1",
	"actions": ["EIConsumer","EMFConsumer"],
  "description":"Demo event",
	"fields": [{
			"name": "customer",
			"type": "customer",
			"attributes": {
            	"addCustomerIfNotExists": {
					"valueType": "Boolean",
					"value": "true"
				}
            }
		},
		{
			"name": "string",
			"type": "string",
			"attributes": {
              
              "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
              
            
            }
		},
		{
			"name": "tillCode",
			"type": "tillCode",
			"attributes": {
            	 "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
            }
		},

		{
			"name": "productSku",
			"type": "productSku",
			"attributes": {
            	 "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
            }

		},
		{
			"name": "productBrand",
			"type": "productBrand",
			"attributes": {
               "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
            }

		},

		{
			"name": "productCategory",
			"type": "productCategory",
			"attributes": {
            	 "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
            }

		},
		{
			"name": "double",
			"type": "double",
			"attributes": {
              
               "isRequired": {
					"valueType": "Boolean",
					"value": "false"
				}
            
            }

		}
	]
}
```


> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```


### Request Information

| | |
--------- | ----------- |
URI | `/events`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | PUT
Batch Support | No


### Request URL

`http://{host}/v2/events`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
eventName* | string | Name of the event that you want to update. No space or special character is allowed
actions* | enum | Dues: `EIConsumer` for DVS, Loyalty, and communication related events, `EMFConsumer` for EMF
description | string | Modify the description if required
fields | obj | Add or update details of each field with 
name | string | Specify a name for the current event field
type | enum | Specify the entity type of the fields added. Values: CouponCode, CustomerIdentifier, ProductSku, ProductBrand, productCategory, String, double	
attributes | obj | Provide the event attributes
addCustomerIfNotExists | obj | Pass `"valueType": "Boolean",	"value": "true"`  
valueType | enum | Specify the input type of the attribute. Values: `Boolean`, `String`, `ENUM`
value | string | Specify the field values based on the valueType selected

<aside class="notice">All parameters marked by * are mandatory. You need to pass all the parameters that you want to update or remain for the event. Fields that you do not pass in the API will be removed automatically.</aside> 







## Enable Standard Event

Lets you enable a standard event for the current org.



> Sample Request

```html
http://us.api.capillarytech.com/v2/events/standard_events/enable?event_name=ProductRemovedFromCart
```



> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/standard_events/enable?event_name={eventName}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST (No POST body required)
Batch Support | No


### Request URL

`http://clusterURL}/v2/events/standard_events/enable?event_name={eventName}`



### Request Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
eventName* | string | Specify the name of the standard event that you want to enable

<aside class="notice">Parameter marked by * is mandatory. </aside>



## Get All Event Fields (Metadata)

Retrieves meta details of all event Fields configured for the organization.


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/meta_fields
```




> Sample Response

```json
{
    "data": [
        {
            "type": "tillCode",
            "label": "Till Code",
            "valueType": "String",
            "attributes": [
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "couponCode",
            "label": "Coupon Code",
            "valueType": "String",
            "attributes": [
                {
                    "name": "regex",
                    "label": "Regex",
                    "valueType": "STRING"
                },
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "customer",
            "label": "Customer Identifier",
            "valueType": "String",
            "attributes": [
                {
                    "defaultValue": "MOBILE",
                    "name": "identifierType",
                    "label": "Identifier type",
                    "possibleValues": [
                        "mobile",
                        "email",
                        "externalId",
                        "wechat",
                        "martjackId",
                        "fbId",
                        "tmall_uname",
                        "cuid",
                        "ali_uname",
                        "jd_uname",
                        "vip_uname",
                        "line",
                        "unionId"
                    ],
                    "valueType": "ENUM"
                },
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                },
                {
                    "defaultValue": "INSTORE",
                    "name": "source",
                    "label": "Source",
                    "possibleValues": [
                        "FACEBOOK",
                        "WEB_ENGAGE",
                        "WECHAT",
                        "INSTORE",
                        "MARTJACK",
                        "TMALL",
                        "TAOBAO",
                        "JD",
                        "ECOMMERCE",
                        "WEBSITE",
                        "LINE",
                        "XIAOHONGSHU",
                        "GLOBAL_SCANNER",
                        "SUNING",
                        "PINDUODUO",
                        "KAOLA"
                    ],
                    "valueType": "ENUM"
                },
                {
                    "name": "accountId",
                    "label": "Source account",
                    "possibleValues": [
                        "WECHAT",
                        "LINE"
                    ],
                    "valueType": "ENUM"
                },
                {
                    "defaultValue": "false",
                    "name": "addCustomerIfNotExists",
                    "label": "Add Customer if not already present",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "productSku",
            "label": "Product Sku",
            "valueType": "String",
            "attributes": [
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "productBrand",
            "label": "Product Brand",
            "valueType": "String",
            "attributes": [
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "productCategory",
            "label": "Product Category",
            "valueType": "String",
            "attributes": [
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "string",
            "label": "String",
            "valueType": "String",
            "attributes": [
                {
                    "name": "regex",
                    "label": "Regex",
                    "valueType": "STRING"
                },
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        },
        {
            "type": "double",
            "label": "double",
            "valueType": "double",
            "attributes": [
                {
                    "defaultValue": "true",
                    "name": "isRequired",
                    "label": "is field required",
                    "valueType": "BOOLEAN"
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```


### Request Information

| | |
--------- | ----------- |
URI | `/events/meta_fields`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`http://{host}/v2/events/meta_fields`



## Get Details of Standard Events (Metadata)

Retrieves details of all standard events that are available in Capillary. 


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/standard_events_meta
```




> Sample Response

```json
{
    "data": [
        {
            "standardClickEventsMeta": {
                "label": "Product Removed From Cart",
                "description": "Product Removed From Cart",
                "eventCategory": "Ecommerce",
                "eventName": "ProductRemovedFromCart",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Removed From Cart": "ProductRemovedFromCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    },
                    {
                        "eventFieldName": "productQuantity",
                        "webEngageFieldName": "Quantity"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductRemovedFromCart"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Logged Out",
                "description": "Customer Logged Out",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerLoggedOut",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Logged Out": "CustomerLoggedOut"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerLoggedOut"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "App Installed",
                "description": "App Installed",
                "eventCategory": "MobileApp",
                "eventName": "AppInstalled",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "App Installed": "AppInstalled"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "AppInstalled"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Added To Cart",
                "description": "Product Added To Cart",
                "eventCategory": "Ecommerce",
                "eventName": "ProductAddedToCart",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Added To Cart": "ProductAddedToCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Category"
                    },
                    {
                        "eventFieldName": "productQuantity",
                        "webEngageFieldName": "Quantity"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductAddedToCart"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Registered",
                "description": "Customer Registered",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerRegistered",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Registered": "CustomerRegistered"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerRegistered"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Category Viewed",
                "description": "Category Viewed",
                "eventCategory": "Ecommerce",
                "eventName": "CategoryViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "categoryId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Category Viewed": "CategoryViewed"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "categoryId",
                        "webEngageFieldName": "Category ID"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    }
                ],
                "mapperName": "CategoryViewed"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Viewed",
                "description": "Product Viewed",
                "eventCategory": "Ecommerce",
                "eventName": "ProductViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Viewed": "ProductViewed"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductViewed"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Logged In",
                "description": "Customer Logged In",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerLoggedIn",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Logged In": "CustomerLoggedIn"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerLoggedIn"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Coupon Applied",
                "description": "Coupon Applied",
                "eventCategory": "Ecommerce",
                "eventName": "CouponApplied",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "couponId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "orderId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "checkoutId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "couponCode",
                        "type": "couponCode",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "discount",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Coupon Applied": "CouponApplied"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "couponId",
                        "webEngageFieldName": "Coupon ID"
                    },
                    {
                        "eventFieldName": "orderId",
                        "webEngageFieldName": "Order ID"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "checkoutId",
                        "webEngageFieldName": "Checkout ID"
                    },
                    {
                        "eventFieldName": "couponCode",
                        "webEngageFieldName": "Coupon Code"
                    },
                    {
                        "eventFieldName": "discount",
                        "webEngageFieldName": "Discount"
                    }
                ],
                "mapperName": "CouponApplied"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Searched",
                "description": "Product Searched",
                "eventCategory": "Ecommerce",
                "eventName": "ProductSearched",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "searchTerm",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Searched": "ProductSearched"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "searchTerm",
                        "webEngageFieldName": "Search"
                    }
                ],
                "mapperName": "ProductSearched"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Coupon Denied",
                "description": "Coupon Denied",
                "eventCategory": "Ecommerce",
                "eventName": "CouponDenied",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "couponId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "orderId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "checkoutId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "couponCode",
                        "type": "couponCode",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "discount",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "reason",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "CouponDenied": "CouponDenied"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "couponId",
                        "webEngageFieldName": "Coupon ID"
                    },
                    {
                        "eventFieldName": "orderId",
                        "webEngageFieldName": "Order ID"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "checkoutId",
                        "webEngageFieldName": "Checkout ID"
                    },
                    {
                        "eventFieldName": "couponCode",
                        "webEngageFieldName": "Coupon Code"
                    },
                    {
                        "eventFieldName": "discount",
                        "webEngageFieldName": "Discount"
                    },
                    {
                        "eventFieldName": "reason",
                        "webEngageFieldName": "Reason"
                    }
                ],
                "mapperName": "CouponDenied"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "App Uninstalled",
                "description": "App Uninstalled",
                "eventCategory": "MobileApp",
                "eventName": "AppUninstalled",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "App Uninstalled": "AppUninstalled"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "AppUninstalled"
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/standard_events_meta`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events/standard_events_meta`





## Get Org Events

Retrieves all events configured for the org. This includes both standard and custom events.



> Sample Request

```html
http://us.api.capillarytech.com/v2/events
```



> Sample Response

```json
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "87c8b0fb-b825-4b7e-b336-b24e7c389f70",
                "eventName": "CustomerEvent",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "string",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "tillCode",
                        "type": "tillCode",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            }
                        }
                    },
                    {
                        "name": "double",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "description": "sample description",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "02ec3c76-5c47-4983-b0df-f0ab29bf227c",
                "eventName": "sagaEvent",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "ID",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "saga event",
                "description": "description",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "dd531667-c17d-4886-a89b-87d6a1d2ad1a",
                "eventName": "ProductRemovedFromCart",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "Product Removed From Cart",
                "description": "Product Removed From Cart",
                "date": 1560941666471,
                "standardEvent": true
            },
            "defaultTransformerMappping": true
        },
        {
            "clickEventsMeta": {
                "eventId": "2449602c-4221-4741-a935-dd4dccf65032",
                "eventName": "EMFEvent",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "string",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "tillCode",
                        "type": "tillCode",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "double",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "description": "Sample Event",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "71d86bdc-738c-4741-800c-bdadec2d7860",
                "eventName": "eventdemo4",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "description": "Sample description",
                "date": 1560941666471,
                "standardEvent": false
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Added To Cart": "ProductAddedToCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "customer"
                    },
                    {
                        "eventFieldName": "name",
                        "webEngageFieldName": "name"
                    }
                ]
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "f640fda0-0318-4a53-a631-4f005a199bad",
                "eventName": "eventdemo3",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "description": "Sample description",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": true
        },
        {
            "clickEventsMeta": {
                "eventId": "d678d41c-65be-4a2c-8295-7548478c1099",
                "eventName": "EMFEVENT1",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "string",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "tillCode",
                        "type": "tillCode",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "double",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "description": "Sample Event",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "314dadac-51e4-4044-b685-306e44bf8be0",
                "eventName": "SampleEvent",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerIdentifier",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "Sample Event",
                "description": "Sample Description",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "d85f2a26-4536-439b-b666-d6f518912c17",
                "eventName": "Testing",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "Name",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "Testing",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "acae5097-5ebf-4600-b511-023f05e91bf1",
                "eventName": "NewEvent",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "Name",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "new event",
                "description": "description of new event.",
                "date": 1560941666471,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events`





## Get Events Data

Retrieves the details of events of a specific customer.

> Sample Request

```html
http://us.api.capillarytech.com/v2/events/event_data/342963216
```
> Sample Response

```json
{
  "data": [
    {
      "orgId": 100458,
      "userId": 98662653,
      "date": "2019-12-09T03:13:23Z",
      "eventName": "addedToCart",
      "eventId": "5aa2e5dc-2b84-4798-99a2-69dba75523ba",
      "source": "WEB_ENGAGE",
      "tillCode": "webstore.till_1",
      "additonalAttributes": {
        "accountid": "~11b564bda",
        "autoUpdateTimeStamp": "Mon Dec 09 03:13:23 UTC 2019",
        "brandname": "Bukl",
        "browsername": "Chrome",
        "cartid": "7f1e74da-36d3-4fda-9aef-9e8be379a6db",
        "categoryname": "Men/Top Wear/Shirts",
        "city": "Bengaluru",
        "country": "India",
        "device": "desktop",
        "eventName": "addedToCart",
        "id": "5aa2e5dc-2b84-4798-99a2-69dba75523",
        "ip": "115.99.221.149",
        "orgId": 100458,
        "osname": "Mac OS",
        "pageurl": "https://www.bukl.in/products/root-men-top-wear-shirts/bukl/mens-casual-shirt/pid-14572567.aspx?vpid=10569467",
        "productname": "Men's Casual shirt",
        "region": "Karnataka",
        "source": "WEB_ENGAGE",
        "till": "webstore.till_1",
        "userId": 98662653,
        "variant": "M"
      }
    },
    {
      "orgId": 100458,
      "userId": 98662653,
      "date": "2019-12-08T06:13:11Z",
      "eventName": "Checkout Started",
      "eventId": "595e71ac-d5af-420a-a4df-973d6c7ad1e3",
      "source": "WEB_ENGAGE",
      "tillCode": "webstore.till_1",
      "additonalAttributes": {
        "accountid": "~11b564bda",
        "autoUpdateTimeStamp": "Sun Dec 08 06:13:11 UTC 2019",
        "brand": "|Bukl|",
        "browser_name": "Chrome",
        "cartrefkey": "||",
        "category": "application",
        "city": "Bengaluru",
        "country": "India",
        "device": "desktop",
        "eventName": "Checkout Started",
        "id": "595e71ac-doaf-420a-a4df-973d6c7ad1",
        "ip": "115.99.184.30",
        "locationname": "BUKL HSR LAYOUT",
        "name": "|Shorts|",
        "orgId": 100458,
        "os_name": "Mac OS",
        "page_url": "https://www.bukl.in/singlepagecheckout.aspx",
        "quantity": "|1|",
        "region": "Karnataka",
        "source": "WEB_ENGAGE",
        "till": "webstore.till_1",
        "userId": 98662653,
        "variant": "|30|"
      }
    },
    {
      "orgId": 100458,
      "userId": 98662653,
      "date": "2019-12-08T05:53:39Z",
      "eventName": "Checkout Started",
      "eventId": "0fa3e614-19fe-4c8d-8120-1c7e976ae862",
      "source": "WEB_ENGAGE",
      "tillCode": "webstore.till_1",
      "additonalAttributes": {
        "accountid": "~11b564bda",
        "autoUpdateTimeStamp": "Sun Dec 08 05:53:39 UTC 2019",
        "brand": "|Bukl|",
        "browser_name": "Chrome",
        "cartrefkey": "||",
        "category": "application",
        "city": "Bengaluru",
        "country": "India",
        "device": "desktop",
        "eventName": "Checkout Started",
        "id": "0fa3e614-19fe-4c8d-9120-1c7e976ae8sa",
        "ip": "115.99.184.30",
        "locationname": "BUKL HSR LAYOUT",
        "name": "|Shorts|",
        "orgId": 100458,
        "os_name": "Mac OS",
        "page_url": "https://www.bukl.in/singlepagecheckout.aspx",
        "quantity": "|1|",
        "region": "Karnataka",
        "source": "WEB_ENGAGE",
        "till": "webstore.till_1",
        "userId": 98662653,
        "variant": "|30|"
      }
    }
  ],
  "warnings": [],
  "errors": []
}

``` 




### Request Information

| | |
--------- | ----------- |
URI | `/events/event_data/{userId}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`https://{host}/v2/events/event_data/{userId}`


### Request Path Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
userId* | long | Unique ID of the customer to fetch event data.

<aside class="notice">The parameter marked with * is mandatory. </aside> 




## Events Mapping (to Standard Event)

Lets you map a custom event to a standard event.


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/adapter_mapping
```

> Sample POST Request

```json
{
  "transformerType":"defaultTransformer",
  "eventsMapped":["eventsdemo1"]
}
```


> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```


### Request Information

| | |
--------- | ----------- |
URI | `/events/adapter_mapping`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No



### Request URL

`http://{host}/v2/events/adapter_mapping`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
transformerType* | enum | Specify `defaultTransformer` to map the custom event to the default transformer, `WebEngageTransformer` for Webhook transformer mapping
eventsMapped* | array | Specify the event names that you want to map to the `transformerType`

<aside class="notice">All parameters marked by * are mandatory.</aside>



## Event Fields Mapping



> Sample Request

```html
http://us.api.capillarytech.com/v2/events/adapter_mapping
```

> Sample POST Request

```json
{
  "transformerType":"webEngageTransformer",
	"webEngageTransformerData": {
		"eventMapper": {
			"eventFieldName": "event_name",
			"eventDataType": "",
			"fieldName": "event_name",
			"valueMap": {
			}
		},
		"eventFieldMapper": {
			"CustomerEvent": [{
					"eventFieldName": "customer",
					"eventDataType": "",
					"fieldName": "customer"
               },
                {
                    "eventFieldName": "string",
					"eventDataType": "",
					"fieldName": "string"
                  
                }
			]
		}
	}
}
```


> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/adapter_mapping`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`http://{host}/v2/events/adapter_mapping`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
transformerType* | enum | DefaultTransformer, WebEngageTransformer
webEngageTransformerData | obj | Details of a specific to Webhook Transformer that you want to map with a custom event
eventMapper* | obj | mapping details of third party events with our events
eventFieldName* | string | Name of the event field (destination - always Capillary)
eventDataType* | enum | Data-type of the event field
fieldName* | string | Name of the adapter field name (source - third party)
valueMap* | string | adapter field value to field value map
eventFieldMapper | obj | Match event field name with the fields for each event. In the Sample POST Request provided, `CustomerEvent` is the event for which the field mapping is done 

<aside class="notice">All parameters marked by * are mandatory.</aside>



## Get Adapters Metadata

Retrieves the details of predefined transformers (field mappings).

```html
http://us.api.capillarytech.com/v2/events/adapters_meta
```

```json
{
    "data": [
        {
            "name": "DefaultTransformer",
            "label": "Default Transformer Mapping"
        },
        {
            "name": "WebEngageTransformer",
            "label": "WebEngage Transformer"
        }
    ],
    "warnings": [],
    "errors": []
}
```


### Request Information

| | |
--------- | ----------- |
URI | `/events/adapters_meta`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL

`http://{host}/v2/events/adapters_meta`


### Response Parameters

Parameter | Description
--------- | -----------
DefaultTransformer | Used if no mapping is required
WebEngageTransformer | Used for Webengage or Webhook mapping







## Get Webhook Account Details

Retrieves details of all Webhook accounts created for the organization. An org can have one Webhook account per transformer. 

> Sample Request

```html
http://us.api.capillarytech.com/v2/events/webhooks
```



> Sample Response

```json
{
    "data": [
        {
            "transformerType": "webEngageTransformer",
            "webHookId": "34b94aa9-ae09-4784-9993-4936d92a7447",
            "tillCode": "abc_abc",
            "webHookUri": "https://1dzd5l6pwd.execute-api.us-east-2.amazonaws.com/nightly/webhooks/3fb94aa9-ae09-4784-9993-4936d92a7447"
        }
    ],
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/webhooks`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events/webhooks`



## Get Event Running Status

Retrieves the current status of an event.


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/running_status?eventId=0d3f5a7f-2432-4c88-8045-37127615d8e8
```


> Sample Response

```json
{
	"id": "0d3f5a7f-2432-4c88-8045-37127615d8e8",
	"orgId": 1115,
	"stateList": [{
		"message": "Event864",
		"date": "2019-06-25T14:52:53+05:30",
		"status": "EVENT_PROCESSING_STARTED"
	}, {
		"message": "customer",
		"date": "2019-06-25T14:52:53+05:30",
		"status": "EVENT_FIELD_VALIDATION_STARTED"
	}, {
		"message": "customer",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_FIELD_VALIDATION_FINISHED"
	}, {
		"message": "till",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_FIELD_VALIDATION_STARTED"
	}, {
		"message": "till",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_FIELD_VALIDATION_FINISHED"
	}, {
		"message": "Event864",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_VALIDATION_FINISHED"
	}, {
		"message": "EIConsumer",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_CONSUMER_STARTED"
	}, {
		"message": "EIConsumer null",
		"date": "2019-06-25T14:53:03+05:30",
		"status": "EVENT_CONSUMER_FAILED"
	}],
	"eventName": "Event864",
	"warnings": []
} 3:56 PM

```

### Request Information


| | |
--------- | ----------- |
URI | `/events/running_status?eventId={eventId}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | Get
Batch Support | No


### Request URL

`http://{host}/v2/events/running_status?eventId={eventId}`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
eventId* |  string | Unique id of the event that is generated (in x-cap-hydra-request-id) when you push data to Webhook. 

<aside class="notice">Parameter marked by * is mandatory.</aside>


## Disable Event

Lets you disable an existing event.

> Sample Request

```html
http://us.api.capillarytech.com/v2/events
```

> Sample PUT Request

```
{
  "webHookId":"34b94aa9-ae09-4784-9993-4936d92a7447"
}
```



> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/disable`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | PUT
Batch Support | No


### Request URL

`http://{host}/v2/events/disable`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
webHookId | string | Unique id of the Webhook account. You can see Webhook id in `x-cap-hydra-request-id` in Webhook data push API 




## Get Org Events



> Sample Request

```html
http://us.api.capillarytech.com/v2/events
```



> Sample Response

```json
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "02ec3c76-5c47-4983-b0df-f0ab29bf227c",
                "eventName": "sagaEvent",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "ID",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "saga event",
                "description": "description",
                "date": 1560921736699,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "dd531667-c17d-4886-a89b-87d6a1d2ad1a",
                "eventName": "ProductRemovedFromCart",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "Product Removed From Cart",
                "description": "Product Removed From Cart",
                "date": 1560921736699,
                "standardEvent": true
            },
            "defaultTransformerMappping": true
        },
        {
            "clickEventsMeta": {
                "eventId": "71d86bdc-738c-4741-800c-bdadec2d7860",
                "eventName": "eventdemo4",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "description": "Sample description1",
                "date": 1560921736699,
                "standardEvent": false
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Added To Cart": "ProductAddedToCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "customer"
                    },
                    {
                        "eventFieldName": "name",
                        "webEngageFieldName": "name"
                    }
                ]
            },
            "defaultTransformerMappping": false
        },
        {
            "clickEventsMeta": {
                "eventId": "f640fda0-0318-4a53-a631-4f005a199bad",
                "eventName": "eventdemo3",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "description": "Sample description",
                "date": 1560921736699,
                "standardEvent": false
            },
            "defaultTransformerMappping": true
        },
        {
            "clickEventsMeta": {
                "eventId": "d85f2a26-4536-439b-b666-d6f518912c17",
                "eventName": "Testing",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "Name",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "label": "Testing",
                "date": 1560921736699,
                "standardEvent": false
            },
            "defaultTransformerMappping": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

Retrieves all events configured for the organization (associated to the TILL used for authorization).


### Request Information

| | |
--------- | ----------- |
URI | `/events`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events`








## Get Standard Events Metadata



> Sample Request

```html
http://us.api.capillarytech.com/v2/events/standard_events_meta
```




> Sample Response

```json
{
    "data": [
        {
            "standardClickEventsMeta": {
                "label": "Product Removed From Cart",
                "description": "Product Removed From Cart",
                "eventCategory": "Ecommerce",
                "eventName": "ProductRemovedFromCart",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Removed From Cart": "ProductRemovedFromCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    },
                    {
                        "eventFieldName": "productQuantity",
                        "webEngageFieldName": "Quantity"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductRemovedFromCart"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Logged Out",
                "description": "Customer Logged Out",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerLoggedOut",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Logged Out": "CustomerLoggedOut"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerLoggedOut"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "App Installed",
                "description": "App Installed",
                "eventCategory": "MobileApp",
                "eventName": "AppInstalled",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "App Installed": "AppInstalled"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "AppInstalled"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Added To Cart",
                "description": "Product Added To Cart",
                "eventCategory": "Ecommerce",
                "eventName": "ProductAddedToCart",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productQuantity",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Added To Cart": "ProductAddedToCart"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    },
                    {
                        "eventFieldName": "productQuantity",
                        "webEngageFieldName": "Quantity"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductAddedToCart"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Registered",
                "description": "Customer Registered",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerRegistered",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Registered": "CustomerRegistered"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerRegistered"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Category Viewed",
                "description": "Category Viewed",
                "eventCategory": "Ecommerce",
                "eventName": "CategoryViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "categoryId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Category Viewed": "CategoryViewed"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "categoryId",
                        "webEngageFieldName": "Category ID"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    }
                ],
                "mapperName": "CategoryViewed"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Viewed",
                "description": "Product Viewed",
                "eventCategory": "Ecommerce",
                "eventName": "ProductViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "productSku",
                        "type": "productSku",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productBrand",
                        "type": "productBrand",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productCategory",
                        "type": "productCategory",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productPrice",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "productName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "productType",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Viewed": "ProductViewed"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "productSku",
                        "webEngageFieldName": "SKU ID"
                    },
                    {
                        "eventFieldName": "productBrand",
                        "webEngageFieldName": "Brand"
                    },
                    {
                        "eventFieldName": "productCateogry",
                        "webEngageFieldName": "Cateogry"
                    },
                    {
                        "eventFieldName": "productPrice",
                        "webEngageFieldName": "Price"
                    },
                    {
                        "eventFieldName": "productName",
                        "webEngageFieldName": "Product Name"
                    },
                    {
                        "eventFieldName": "productType",
                        "webEngageFieldName": "Product Type"
                    }
                ],
                "mapperName": "ProductViewed"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Customer Logged In",
                "description": "Customer Logged In",
                "eventCategory": "Ecommerce",
                "eventName": "CustomerLoggedIn",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "lastName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Customer Logged In": "CustomerLoggedIn"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "firstName",
                        "webEngageFieldName": "First Name"
                    },
                    {
                        "eventFieldName": "lastName",
                        "webEngageFieldName": "Last Name"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "CustomerLoggedIn"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Coupon Applied",
                "description": "Coupon Applied",
                "eventCategory": "Ecommerce",
                "eventName": "CouponApplied",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "couponId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "orderId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "checkoutId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "couponCode",
                        "type": "couponCode",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "discount",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Coupon Applied": "CouponApplied"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "couponId",
                        "webEngageFieldName": "Coupon ID"
                    },
                    {
                        "eventFieldName": "orderId",
                        "webEngageFieldName": "Order ID"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "checkoutId",
                        "webEngageFieldName": "Checkout ID"
                    },
                    {
                        "eventFieldName": "couponCode",
                        "webEngageFieldName": "Coupon Code"
                    },
                    {
                        "eventFieldName": "discount",
                        "webEngageFieldName": "Discount"
                    }
                ],
                "mapperName": "CouponApplied"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Product Searched",
                "description": "Product Searched",
                "eventCategory": "Ecommerce",
                "eventName": "ProductSearched",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "searchTerm",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "Product Searched": "ProductSearched"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "searchTerm",
                        "webEngageFieldName": "Search"
                    }
                ],
                "mapperName": "ProductSearched"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "Coupon Denied",
                "description": "Coupon Denied",
                "eventCategory": "Ecommerce",
                "eventName": "CouponDenied",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "couponId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "orderId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "cartId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "checkoutId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "couponCode",
                        "type": "couponCode",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "discount",
                        "type": "double",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "reason",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "CouponDenied": "CouponDenied"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "couponId",
                        "webEngageFieldName": "Coupon ID"
                    },
                    {
                        "eventFieldName": "orderId",
                        "webEngageFieldName": "Order ID"
                    },
                    {
                        "eventFieldName": "cartId",
                        "webEngageFieldName": "Cart ID"
                    },
                    {
                        "eventFieldName": "checkoutId",
                        "webEngageFieldName": "Checkout ID"
                    },
                    {
                        "eventFieldName": "couponCode",
                        "webEngageFieldName": "Coupon Code"
                    },
                    {
                        "eventFieldName": "discount",
                        "webEngageFieldName": "Discount"
                    },
                    {
                        "eventFieldName": "reason",
                        "webEngageFieldName": "Reason"
                    }
                ],
                "mapperName": "CouponDenied"
            }
        },
        {
            "standardClickEventsMeta": {
                "label": "App Uninstalled",
                "description": "App Uninstalled",
                "eventCategory": "MobileApp",
                "eventName": "AppUninstalled",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "firstName",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "ipAddress",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ]
            },
            "webEngageTransformerMapping": {
                "eventNameMapping": {
                    "webEngageFieldName": "event_name",
                    "valueMap": {
                        "App Uninstalled": "AppUninstalled"
                    }
                },
                "eventFieldMappings": [
                    {
                        "eventFieldName": "customer",
                        "webEngageFieldName": "Customer Mobile"
                    },
                    {
                        "eventFieldName": "deviceId",
                        "webEngageFieldName": "Device ID"
                    },
                    {
                        "eventFieldName": "ipAddress",
                        "webEngageFieldName": "IP Address"
                    },
                    {
                        "eventFieldName": "location",
                        "webEngageFieldName": "Location"
                    }
                ],
                "mapperName": "AppUninstalled"
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```


### Request Information

| | |
--------- | ----------- |
URI | `/events/standard_events_meta`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events/standard_events_meta`



## Create Webhook

A Webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information. A `webHookUri` is generated which can be used for the integration.



> Sample Request

```html
http://us.api.capillarytech.com/v2/events/webhook
```

> Sample POST Request

```json
{
  "transformerType":"webEngageTransformer",
  "tillCode":"rr.till"
}
```


> Sample Response

```json
{
    "transformerType": "webEngageTransformer",
    "tillCode": "rr.till",
    "webHookUri": "https://1dzb5l3dwd.execute-api.us-east-2.amazonaws.com/nightly/webhooks/34b49aa9-ae09-4784-9993-4936d92a7447",
    "warnings": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/webhook`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`http://{host}/v2/events/webhook`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
transformerType* | | 
tillCode* | | 


## Push Data to Webhook

Use the unique URI generated when a Webhook account is created to push data from your app to Webhook.

> Sample Request

```html
https://1dzb567pwd.execute-api.us-east-2.amazonaws.com/nightly/webhooks/34b94vf9-ae09-4784-9993-4936d92a7457
```

> Sample POST Request

```json
{
"event_name": "AUEvent4",
"mobile": "919663673779",
"till": "autostore1.till1"
}
```


> Sample Response

```json
{
    "status": {
        "code": 1100,
        "message": "Event pushed to transformation state"
    }
}
```

### Request Information

| | |
--------- | ----------- |
URI | `{webhookURL}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`{WebhookWRL}`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
event_name | string | Name of the event that you want to push
mobile | | 
till | string | TILL id associated to the event






## Get All Webhook Details

Retrieves details of all Webhook accounts created in the org.


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/webhooks
```




> Sample Response

```json
{
    "data": [
        {
            "transformerType": "webEngageTransformer",
            "webHookId": "34b94aa9-ae09-4784-9993-4936d92a7447",
            "tillCode": "abc_abc",
            "webHookUri": "https://1dzb456pwd.execute-api.us-east-2.amazonaws.com/nightly/webhooks/34b94aa9-ae09-4784-9993-4986d92a7447"
        }
    ],
    "warnings": [],
    "errors": []
}
```


| | |
--------- | ----------- |
URI | `/events/webhooks`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No


### Request URL

`http://{host}/v2/events/webhooks`




## Disable Webhook

Lets you disable a specific Webhook account. 


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/webhook/disable
```

> Sample POST Request

```json
{
  "webHookId":"722e78ea-07dd-4dc9-9f85-004279cc2a7d"
}
```


> Sample Response

```json

```


| | |
--------- | ----------- |
URI | `/events/webhook/disable`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | PUT
Batch Support | No


### Request URL

`http://{host}/v2/events/webhook/disable`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
webHookId* | string | Specify the GUID of the webhook account that you want to disable

<aside class="notice"> Parameter marked by * is mandatory. </aside>





## Publish Events


> Sample Request

```html
http://us.api.capillarytech.com/v2/events/standard_events/enable
```

> Sample POST Request

```json

```


> Sample Response

```json

```


### Request Information

| | |
--------- | ----------- |
URI | `/events/standard_events/enable`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No


### Request URL

`http://{host}/v2/events/standard_events/enable`




## Disable a Custom Event

Disables a specific custom event from the current organization.

> Sample Request

```html
http://us.api.capillarytech.com/v2/events/disable?event_name=CustomerEvent1
```




> Sample Response

```json
{
    "warnings": [],
    "errors": []
}
```

### Request Information

| | |
--------- | ----------- |
URI | `/events/disable?event_name={EventName}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | PUT
Batch Support | No


### Request URL

`http://{host}/v2/events/disable?event_name={EventName}`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
EventName* | string | Pass the exact name of the event that you want to disable


<aside class="notice">Parameter marked by * is mandatory.</aside>



## Response Codes

### Success Codes

Code | Description
---- | -----------
7300 | Feed added successfully



### Error Codes
Code | Description
---- | -----------
7301 | Unable to add feed.
7302 | Source is not specified.
7303 | Invalid source passed.
7304 | Event is not passed.
7305 | Invalid event passed.
7306 | UUID is not passed.
7307 | Customer ID is not passed.
7308 | Invalid customer ID passed.
7309 | Invalid SKU passed.
7310 | Invalid store code passed.
7311 | Invalid customer details passed. <br>Scan event failed.

