# FFC

This contains the list of APIs required to post and fetch footfall details such as visitors count, group count, heat map details and device heartbeat. The host address of FFC is different from the other v 2.0 APIs. 

The following are the host addresses of different clusters:  

* **NIGHTLY**: storecare.nightly.capillary.in:8002
* **APAC**: storecare.capillarytech.com
* **APAC2**: sg.storecare.capillarytech.com
* **EU**: eu.storecare.capillarytech.com
* **US**: us.storecare.capillarytech.com
* **CN**: storecare.capillarytech.cn.com


## Add FFC Details (Hourly)

Saves hourly data of visitors and staff count to the Capillary database. The data include both in count and out count.

> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/ffcDetails
```


> Sample POST Request

```json

{
   "org_id":"781",
   "till_id":"15000323",
   "zone_id":"15000398",
   "store_id":"15001761",
   "source":"till",
   "store_server_id":null,
   "store_server_name":null,
   "till_name":"demo_till",
   "store_name":"KNIGHT_STOER_SERVER",
   "timestamp":1549564200,
   "deviceId":202481590706864,
   "counterDetails":[
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549564200,
         "endDate":1549567799
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549567800,
         "endDate":1549571399
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549571400,
         "endDate":1549574999
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549575000,
         "endDate":1549578599
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549614600,
         "endDate":1549618199
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549618200,
         "endDate":1549621799
      },
      {
         "outCount":223,
         "inCount":222,
         "startDate":1549621800,
         "endDate":1549625399
      },
      {
         "outCount":274,
         "inCount":275,
         "startDate":1549625400,
         "endDate":1549628999
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549629000,
         "endDate":1549632599
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549632600,
         "endDate":1549636199
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549636200,
         "endDate":1549639799
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549639800,
         "endDate":1549643399
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549643400,
         "endDate":1549646999
      },
      {
         "outCount":0,
         "inCount":0,
         "startDate":1549647000,
         "endDate":1549650599
      }
   ]
}
```

> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      }
   }
}

```

### Resource Information
| | |
--------- | ----------- |
URI | `/pages/ffcDetails?eventType={0/1}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/pages/ffcDetails?eventType={0/1}`

* Specify `eventType=0` for customer walkin
* Specify `eventType=1` for staff walkin 





## Get FFC Details (Hourly)

Retrieves hourly count of visitors and staff which includes both in count and out count separately.


> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/ffcDetails?org_id=781&date=2019/02/12&timezone=UTC+0530&deviceId=201807070301
```


> Sample Response

```json
{
    "response": {
        "status": {
            "success": true,
            "code": "200",
            "message": "Success"
        },
        "get_ffc_details": {
            "applications": {
                "application": []
            },
            "store_servers": {
                "store_server": []
            },
            "thin_clients": {
                "thin_client": []
            },
            "tills": {
                "till": [
                    {
                        "deviceId": 201807070301,
                        "eventType": 0,
                        "org_id": "781",
                        "source": "till",
                        "store_id": "50013131",
                        "store_server_id": null,
                        "till_id": "50013136",
                        "zone_id": "15098817",
                        "store_name": "KoramangalaStore1",
                        "store_server_name": null,
                        "till_name": "DemoTill",
                        "counterDetails": [
                            {
                                "outCount": 0,
                                "endDate": 1549913400,
                                "inCount": 0,
                                "startDate": 1549909800
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549917000,
                                "inCount": 0,
                                "startDate": 1549913400
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549920600,
                                "inCount": 0,
                                "startDate": 1549917000
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549924200,
                                "inCount": 0,
                                "startDate": 1549920600
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549927800,
                                "inCount": 0,
                                "startDate": 1549924200
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549931400,
                                "inCount": 0,
                                "startDate": 1549927800
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549935000,
                                "inCount": 0,
                                "startDate": 1549931400
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549938600,
                                "inCount": 0,
                                "startDate": 1549935000
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549942200,
                                "inCount": 0,
                                "startDate": 1549938600
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549945800,
                                "inCount": 0,
                                "startDate": 1549942200
                            },
                            {
                                "outCount": 8,
                                "endDate": 1549949400,
                                "inCount": 7,
                                "startDate": 1549945800
                            },
                            {
                                "outCount": 6,
                                "endDate": 1549953000,
                                "inCount": 5,
                                "startDate": 1549949400
                            },
                            {
                                "outCount": 5,
                                "endDate": 1549956600,
                                "inCount": 4,
                                "startDate": 1549953000
                            },
                           
                            {
                                "outCount": 8,
                                "endDate": 1549985400,
                                "inCount": 7,
                                "startDate": 1549981800
                            },
                            {
                                "outCount": 10,
                                "endDate": 1549989000,
                                "inCount": 9,
                                "startDate": 1549985400
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549992600,
                                "inCount": 0,
                                "startDate": 1549989000
                            },
                            {
                                "outCount": 0,
                                "endDate": 1549996200,
                                "inCount": 0,
                                "startDate": 1549992600
                            }
                        ],
                        "timestamp": 1549935001,
                        "auto_update_time": "2019-02-12T01:33:58.930Z"
                    }
                ]
            }
        }
    }
}

```


### Resource Information
| | |
--------- | ----------- |
URI | `/pages/ffcDetails`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/pages/ffcDetails`








### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
org_id | int | Retrieves org level in and out count of visitors on a hourly basis
date | date | Retrieves hourly data of in and out count for a specific date ( `YYYY/MM/DD` format)
timezone | string | UTC timezone of the device
deviceId | string | Specify the device id for which you want to fetch the data



## Add FFC Details (Event Level)

> Sample Request

```html

https://sg.storecare.capillarytech.com/v2/add/ffcDetails?eventType=0
```

> Sample POST Request

```json
{
   "org_id":"781",
   "till_id":"15000375",
   "zone_id":"15000372",
   "store_id":"15001861",
   "source":"till",
   "store_server_id":null,
   "store_server_name":null,
   "till_name":"kn.003",
   "store_name":"KNIGHT_STOER_SERVER",
   "timestamp":1549883986,
   "deviceId":202481585925581,
   "counterDetails":[
      {
         "inCountTimeStamps":[
            1549712713,
            1549712717,
            1549712721,
            1549712725,
            1549712729,
            1549712733,
            1549712737,
            1549712741,
            1549712745,
            1549712749,
            1549712753,
            1549712757,
            1549712761,
            1549712765,
            1549712769,
            1549712773,
            1549712777,
            1549712781,
            1549712785,
            1549712789,
            1549712793,
            1549712797,
            1549712801,
            1549712805,
            1549712809,
            1549712813,
            1549712817,
            1549712821,
            1549712825,
            1549712829,
            1549712833,
            1549712837,
            1549712841,
            1549712845,
            1549712849,
            1549712853,
            1549712857,
            1549712861,
            1549712865,
            1549712869,
            1549712873,
            1549712877,
            1549712881,
            1549712885,
            1549712889,
            1549712893
         ],
         "outCountTimeStamps":[
            1549712715,
            1549712719,
            1549712723,
            1549712727,
            1549712731,
            1549712735,
            1549712739,
            1549712743,
            1549712747,
            1549712751,
            1549712755,
            1549712759,
            1549712763,
            1549712767,
            1549712771,
            1549712775,
            1549712779,
            1549712783,
            1549712787,
            1549712791,
            1549712795,
            1549712799,
            1549712803,
            1549712807,
            1549712811,
            1549712815,
            1549712819,
            1549712823,
            1549712827,
            1549712831,
            1549712835,
            1549712839,
            1549712843,
            1549712847,
            1549712851,
            1549712855,
            1549712859,
            1549712863,
            1549712867,
            1549712871,
            1549712875,
            1549712879,
            1549712883,
            1549712887,
            1549712891
         ],
         "outCount":45,
         "inCount":46,
         "startDate":1549712711,
         "endDate":1549713611
      }
   ]
}

```

> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      }
   }
}
```





### Resource Information
| | |
--------- | ----------- |
URI | `v2/add/ffcDetails?eventType={0/1}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/add/ffcDetails?eventType={0/1}`

* Specify `eventType=0` for customer walkin and `eventType=1` for staff walkin.









## Get FFC Details (Event Level)

Retrieves in and out count of both visitors and staff separately at event level providing more granular level details compared to v1.

> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/v2/ffcDetails?orgId=781&date=2019/02/12&timezone=UTC+0530&storeId=15001861 

```

>  Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      },
      "get_ffc_v2_details":{
         "thin_clients":{
            "thin_client":[

            ]
         },
         "store_servers":{
            "store_server":[

            ]
         },
         "applications":{
            "application":[

            ]
         },
         "tills":{
            "till":[
               {
                  "deviceId":202481586113930,
                  "direction":1,
                  "eventTime":"2019-02-12T09:24:50.000Z",
                  "eventType":"CUSTOMER",
                  "orgId":781,
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549963805,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "count":1,
                  "inCount":1,
                  "outCount":0,
                  "autoUpdateTime":"2019-02-12T09:34:24.086Z"
               },
               {
                  "deviceId":202481586113930,
                  "direction":1,
                  "eventTime":"2019-02-12T09:22:00.000Z",
                  "eventType":"CUSTOMER",
                  "orgId":781,
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549963805,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "count":1,
                  "inCount":1,
                  "outCount":0,
                  "autoUpdateTime":"2019-02-12T09:34:24.082Z"
               },
               {
                  "deviceId":202481586113930,
                  "direction":1,
                  "eventTime":"2019-02-12T09:24:57.000Z",
                  "eventType":"CUSTOMER",
                  "orgId":781,
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549963805,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "count":1,
                  "inCount":1,
                  "outCount":0,
                  "autoUpdateTime":"2019-02-12T09:34:24.086Z"
               },
               
               {
                  "deviceId":202481586113930,
                  "direction":0,
                  "eventTime":"2019-02-12T07:08:17.000Z",
                  "eventType":"CUSTOMER",
                  "orgId":781,
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549955703,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "count":1,
                  "inCount":0,
                  "outCount":1,
                  "autoUpdateTime":"2019-02-12T07:19:22.088Z"
               },
               
               {
                  "deviceId":202481586113930,
                  "direction":0,
                  "eventTime":"2019-02-12T07:13:43.000Z",
                  "eventType":"CUSTOMER",
                  "orgId":781,
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549955703,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "count":1,
                  "inCount":0,
                  "outCount":1,
                  "autoUpdateTime":"2019-02-12T07:19:22.089Z"
               }
            ]
         }
      }
   }
}

```


### Resource Information
| | |
--------- | ----------- |
URI | `/pages/v2/ffcDetails?{param}={param_value}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/pages/v2/ffcDetails?{param}={param_value}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
orgId | int | Specify the org id for which you want to fetch the data
date | date | Specify the date in YYYY/MM/DD` format to fetch the data of that specific date
timezone | string | Specify the UTC timezone of the device
deviceId | string | Specify the device id for which you want to fetch the data






















## Add Group Count (Hourly)

> Sample Request

```html
https://sg.storecare.capillarytech.com/add/ffcGroupCount

```


> Sample POST Request

```json

{
   "org_id":"781",
   "till_id":"15000375",
   "zone_id":"15000372",
   "store_id":"15001861",
   "source":"till",
   "store_server_id":null,
   "store_server_name":null,
   "till_name":"kn.003",
   "store_name":"KNIGHT_STOER_SERVER",
   "timestamp":1541874600,
   "deviceId":202481588574972,
   "groupCountDetails":[
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541874600,
         "endDate":1541878199
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541878200,
         "endDate":1541881799
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541881800,
         "endDate":1541885399
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541885400,
         "endDate":1541888999
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541889000,
         "endDate":1541892599
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541892600,
         "endDate":1541896199
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541896200,
         "endDate":1541899799
      },
      {
         "outCountTriple":0,
         "inCountMore":0,
         "outCountDuo":0,
         "inCountUno":0,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":0,
         "startDate":1541957400,
         "endDate":1541960999
      }
   ]
}

```

> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      }
   }
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/add/ffcGroupCount`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/add/ffcGroupCount`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
org_id* | int | Unique id of the org for which you want to add group count
till_id | int | Unique id of the TILL where the device is installed
zone_id | int | Zone id associated to the TILL
store_id | int | Store id associated to the TILL
source | string |  Source from which the Data is coming to the system. Value: `till`
store_server_id | string | Store server id if applicable
store_server_name | string | Name of the store server
till_name | string | Name of the TILL associated to the device
store_name | string |Name of the store in which the device is installed
timestamp | string | Timestamp as on the Current system
deviceId* | long | Unique id of the device
outCountTriple | int | Out count of group size 3
inCountTriple | int | In count of group size 3
inCountMore |  int | In count of group size more than 3
outCountMore |  int | Out count of group size more than 3
inCountDuo |  int | In count of group size 2
outCountDuo |  int | Out count of group size 2
inCountUno |  int | In count of group size 1
outCountUno |  int | Out count of group size 1
startDate* | date-time |Date and time of the respective hour for which you want to update the data (between startDate - endDate)
endDate* | date-time | Date and time of the respective hour for which you want to update the data (between startDate - endDate)



## Get Group Count (Hourly)

Retrieves the group count of a VM device on a hourly basis. The groups have the buckets with size 1, 2, 3, 4 or more.

> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/ffcGroupCount?org_Id=1543&date=2019/2/10&timezone=UTC+0530&deviceId=202481601722905 
```


> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      },
      "get_ffc_groupCount":{
         "applications":{
            "application":[

            ]
         },
         "thin_clients":{
            "thin_client":[

            ]
         },
         "tills":{
            "till":[
               {
                  "deviceId":202481601722905,
                  "org_id":"1199",
                  "source":"till",
                  "store_id":"12845453",
                  "store_server_id":null,
                  "till_id":"12845454",
                  "zone_id":"12839781",
                  "store_server_name":null,
                  "till_name":"lee.goa.panaji.1010803.1",
                  "store_name":"Lee VVC LIFESTYLE Goa",
                  "timestamp":1549737000,
                  "groupCountDetails":[
                     {
                        "inCountDuo":0,
                        "inCountUno":0,
                        "inCountMore":0,
                        "inCountTriple":0,
                        "outCountDuo":0,
                        "outCountUno":0,
                        "outCountTriple":0,
                        "outCountMore":0,
                        "startDate":1549737000,
                        "endDate":1549740599
                     },
                     {
                        "inCountDuo":0,
                        "inCountUno":0,
                        "inCountMore":0,
                        "inCountTriple":0,
                        "outCountDuo":0,
                        "outCountUno":0,
                        "outCountTriple":0,
                        "outCountMore":0,
                        "startDate":1549740600,
                        "endDate":1549744199
                     },
                     {
                        "inCountDuo":0,
                        "inCountUno":0,
                        "inCountMore":0,
                        "inCountTriple":0,
                        "outCountDuo":0,
                        "outCountUno":0,
                        "outCountTriple":0,
                        "outCountMore":0,
                        "startDate":1549744200,
                        "endDate":1549747799
                     },
                     {
                        "inCountDuo":0,
                        "inCountUno":0,
                        "inCountMore":0,
                        "inCountTriple":0,
                        "outCountDuo":0,
                        "outCountUno":0,
                        "outCountTriple":0,
                        "outCountMore":0,
                        "startDate":1549747800,
                        "endDate":1549751399
                     },
                     {
                        "inCountDuo":0,
                        "inCountUno":0,
                        "inCountMore":0,
                        "inCountTriple":0,
                        "outCountDuo":0,
                        "outCountUno":0,
                        "outCountTriple":0,
                        "outCountMore":0,
                        "startDate":1549819800,
                        "endDate":1549823399
                     }
                  ],
                  "eventType":0,
                  "auto_update_time":"2019-02-11T02:10:35.858Z"
               }
            ]
         },
         "store_servers":{
            "store_server":[

            ]
         }
      }
   }
}

```


### Resource Information
| | |
--------- | ----------- |
URI | `/pages/ffcDetails?{param}={param_value}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/pages/ffcDetails?{param}={param_value}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
orgId | int | Specify the org id for which you want to fetch the data
date | date | Specify the date in YYYY/MM/DD` format to fetch the data of that specific date
timezone | string | Specify the UTC time zone of the device
deviceId | string | Specify the device id for which you want to fetch the data





## Add Group Count (Event Level)

> Sample Request

```html
https://sg.storecare.capillarytech.com/v2/add/ffcGroupCount

```


> Sample POST Request

```json
{
   "org_id":"781",
   "till_id":"15000375",
   "zone_id":"15000372",
   "store_id":"15001861",
   "source":"till",
   "store_server_id":null,
   "store_server_name":null,
   "till_name":"kn.003",
   "store_name":"KNIGHT_STOER_SERVER",
   "timestamp":1550561898,
   "deviceId":202481588574972,
   "groupCountDetails":[
      {
         "inCountUnoTimeStamps":[
            1540800006,
            1540800011,
            1540800045,
            1540800048,
            1540800051,
            1540800122,
            1540800129,
            1540800179,
            1540800447,
            1540800519,
            1540800526,
            1540800541,
            1540800597
         ],
         "inCountDuoTimeStamps":[

         ],
         "inCountTripleTimeStamps":[

         ],
         "inCountMoreTimeStamps":[

         ],
         "outCountUnoTimeStamps":[
            1540800058,
            1540800073,
            1540800092,
            1540800200,
            1540800225,
            1540800254,
            1540800281,
            1540800318,
            1540800347,
            1540800391,
            1540800468,
            1540800525,
            1540800529,
            1540800562,
            1540800630,
            1540800761,
            1540800821
         ],
         "outCountDuoTimeStamps":[
            1540800258,
            1540800589
         ],
         "outCountTripleTimeStamps":[
            1540800328
         ],
         "outCountMoreTimeStamps":[

         ],
         "outCountTriple":1,
         "inCountMore":0,
         "outCountDuo":2,
         "inCountUno":13,
         "inCountTriple":0,
         "outCountMore":0,
         "inCountDuo":0,
         "outCountUno":17,
         "startDate":1540800002,
         "endDate":1540800902
      }
   ]
}


```

> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      }
   }
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/v2/add/ffcGroupCount`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/v2/add/ffcGroupCount`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
org_id* | int | Unique id of the org for which you want to add group count
till_id | int | Unique id of the TILL where the device is installed
zone_id | int | Zone id associated to the TILL
store_id | int | Store id associated to the TILL
source | string |  Source from which the Data is coming to the system. Value: `till`
store_server_id | string | Store server id if applicable
store_server_name | string | Name of the store server
till_name | string | Name of the TILL associated to the device
store_name | string |Name of the store in which the device is installed
inCountUnoTimeStamps | timestamp | Timestamps of the all in count events with group size 1
inCountDuoTimeStamps | timestamp | Timestamps of the all in count events with group size 2
inCountTripleTimeStamps | timestamp | Timestamps of the all in count events with group size 3
inCountMoreTimeStamps | timestamp | Timestamps of the all in count events with group size more than 3
outCountUnoTimeStamps | timestamp | Timestamps of the all out count events with group size more 1
outCountDuoTimeStamps | timestamp | Timestamps of the all out count events with group size 2
outCountTripleTimeStamps | timestamp | Timestamps of the all out count events with group size 3
outCountMoreTimeStamps | timestamp | Timestamps of the all out count events with group size more than 3
deviceId* | long | Unique id of the device
outCountTriple | int | Out count of group size 3
inCountTriple | int | In count of group size 3
inCountMore |  int | In count of group size more than 3
outCountMore |  int | Out count of group size more than 3
inCountDuo |  int | In count of group size 2
outCountDuo |  int | Out count of group size 2
inCountUno |  int | In count of group size 1
outCountUno |  int | Out count of group size 1
startDate* | date-time | Duration of the current data (between startDate - endDate)
endDate* | date-time | Duration of the current data (between startDate - endDate)









## Get Group Count (Event Level)

Retrieves both in and out count of groups at an event level. The groups have the buckets with size 1, 2, 3, 4 or more.

> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/v2/ffcGroupCount??orgId=7221&date=2019/02/12&timezone=UTC+0530&storeId=15001861 
 
```


> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      },
      "get_ffc_v2_groupCount":{
         "tills":{
            "till":[
               {
                  "deviceId":202481586113930,
                  "direction":0,
                  "eventTime":"2019-02-12T09:27:55.000Z",
                  "orgId":781,
                  "size":"1",
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549963810,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "eventType":"CUSTOMER",
                  "count":1,
                  "autoUpdateTime":"2019-02-12T09:34:29.157Z"
               },
               {
                  "deviceId":202481586113930,
                  "direction":0,
                  "eventTime":"2019-02-12T09:23:14.000Z",
                  "orgId":781,
                  "size":"1",
                  "source":"till",
                  "storeId":15001861,
                  "storeServerId":null,
                  "tillId":15000375,
                  "zoneId":15000372,
                  "timestamp":1549963810,
                  "tillName":"kn.003",
                  "storeServerName":null,
                  "storeName":"KNIGHT_STOER_SERVER",
                  "eventType":"CUSTOMER",
                  "count":1,
                  "autoUpdateTime":"2019-02-12T09:34:29.156Z"
               }
            ]
         },
         "store_servers":{
            "store_server":[

            ]
         },
         "applications":{
            "application":[

            ]
         },
         "thin_clients":{
            "thin_client":[

            ]
         }
      }
   }
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/pages/v2/ffcGroupCount?{param}={param_value}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}//pages/v2/ffcGroupCount?{param}={param_value}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
orgId | int | Specify the org id for which you want to fetch the data
date | date | Specify the date in YYYY/MM/DD` format to fetch the data of that specific date
timezone | string | Specify the UTC time zone of the device
deviceId | string | Specify the device id for which you want to fetch the data






















## Get Notes

> Sample Request

```html
https://sg.storecare.capillarytech.com/pages/notes
```



> Sample Response

```json
{
   "response":{
      "status":{
         "success":true,
         "code":"200",
         "message":"Success"
      },
      "get_notes":{
         "store_servers":{
            "store_server":[

            ]
         },
         "applications":{
            "application":[
               {
                  "_id":"57ee62bfb5ae5f642762a331",
                  "deviceId":"987",
                  "notes_id":"1",
                  "org_id":"905",
                  "source":"jar1",
                  "till_id":"12773786",
                  "description":"Demo store",
                  "zone_id":"12773779",
                  "store_id":"15000584",
                  "criticality":"FATAL",
                  "time":"1472541586",
                  "storeName":"JamesBond",
                  "entityIUN":"till.demo"
               }
            ]
         },
         "thin_clients":{
            "thin_client":[

            ]
         },
         "tills":{
            "till":[

            ]
         }
      }
   }
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/pages/notes`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/pages/notes`



