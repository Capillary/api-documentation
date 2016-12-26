
# v1.1 API Documentation
# Getting Started

The Capillary APIs are RESTful APIs that help third party applications manage an Organization’s CRM and/or Loyalty Program through Capillary’s platform. This document lists the APIs that can be used to integrate with the Capillary Server Application, their descriptions, resource information, request parameters, request URIs, and sample requests.


## Organization Setup
Every organization associated with Capillary is registered in InTouch. Based on the organization's architecture, store TILL /Store Center accounts are created for the organization apart from zones, concepts and stores. Only Capillary users have access to register an organization inTouch. Contact your Capillary Account Manager or Delivery Manager.

To set up an organization as a Capillary admin, see Setting up Organization. 
 

## Accessing APIs

Capillary APIs are accessed using the TILL/Store Center credentials that are created when registering the organization. Please note that it is mandatory to use only the store specific Till/Store center credentials of the organization as the data in the API response depends on this identification.

<aside class="notice">
Use Case: 
For instance, assume that a retailer XYZ of India cluster is registered with Capillary with 2 stores - store1 and store2. Each store has 2 TILLS - till1 and till2(under store1) and till3 and till4(under store2). 

If following are the credentials of till1 and till3

User name: till1 till3 

Password : 123 789 

Using TILL1 credentials will provide org level data and only Store1 specific data. You cannot access data specific to Store2 with Till1 credentials.

</aside>

For any assistance on Organization setup please contact the Account Managers of Capillary.


## Authentication
To obtain access to the entities of the Capillary Rest APIs, you need to authenticate the TILL/store center account that you are referring to for using the HTTP Basic Authentication.

Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password))>`

 In the Authorization Header pass the encoded Base64 form of username and md5 formatted password.


<aside class="notice"> 
Use Case

Assume that you wanted to authenticate using TILL1 credentials: 

First convert the password ‘123’ in md5 form. i,e., 202cb962ac59075b964b07152d234b70 

Then encode the username and md5 password to Base64. i.e. <Base64(till1: 202cb962ac59075b964b07152d234b70) which is 
Authorization: Basic dGlsbDE6IDIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw

</aside>

## Request Tracking
For every request made using Capillary APIs, a unique id is generated and sent to the requestor in the Response Headers as "X-Cap-Requestid". This unique request id can be used to trace a request end-to-end. Hence, it is recommended to note the X-Cap-Requestid of a request to trace the request easily in case of any future issues.

```json
{
  "Date": "Wed, 16 Dec 2015 06:05:13 GMT",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "must-revalidate,no-cache,no-store",
  "X-Cap-Requestid": "5670FF17B7D58",
  "Server": "CapWS",
  "Content-Encoding": "gzip",
  "X-Cache": "MISS from localhost",
  "Transfer-Encoding": "chunked",
  "Connection": "keep-alive"
}
```

<aside class="notice">
When the API call for submitting 4 batch transactions is made, A response header is generated with the X-Cap-Requestid as shown above. This id helps to trace the details of the API call (both request and response) in the future whenever required.
</aside>

# customer
A customer is an individual who buys goods or services, or subscribes for organization’s newsletters. An organization can be a store, business firm, hospitals or restaurants).

In Capillary’s platform the customer entity represents loyalty customers of the respective organization or just the customers who have subscribed to the organization’s newsletters. 

In an organization, there could be three types of customers as explained below:

* Loyalty customers: Customers who have enrolled into the organization’s loyalty program 
* Non-loyalty customers: Customers who have registered their mobile number or email id with the organization (through subscriptions, guest transactions etc) but not enrolled into the organization’s loyalty program 
* Not-interested or anonymous customers: Customers who have neither registered their mobile number/email id nor enrolled into the organization’s loyalty program

The customer entity stores customer related information such as identifiers, profile details, custom field details, transactions, preferences, mobile number/email id subscription details, tier details, points history and coupons history.

The customer APIs allow you to

* Register customers into your organization’s loyalty program 
* Update customer’s profile information 
* Update primary or secondary identifiers (mobile no email id, or external id) 
* Retrieve customer details (loyalty/non-loyalty)
* Submit tickets on behalf of customers and fetch their tickets  
* Add, update and retrieve customer preferences 
* Retrieve transactions of a customer. 

## Register Customer

## Update Customer Details

## Update Customer Identifiers

## Fetch Customers by Partial Strings

## Fetch Customer ID

## Fetch Customer Details



# transaction
In Capillary’s platform a transaction represents a purchase or return event. Transactions are categorized into three types based on customer type as explained in the following:

* Loyalty Transactions: Transactions made by registered customers of your organization's loyalty program
 
* Non-loyalty Transactions: Transactions made by customers who are not registered into your loyalty program, but shared their mobile number or email id with your organization 

* Not-interested Transactions: Transactions made by customers who are not interested to register into your organization’s loyalty program. These transactions are also considered as anonymous transactions. 

* The transaction entity stores regular/return transactions, points/coupons redeemed against transactions, retro transactions (converting not interested transactions to loyalty transactions), and custom fields of transaction screen. 

<aside class="notice">
Note: Custom fields are additional fields created in InStore to capture a specific information from customers. For example, favorite color, birthday, favorite brand etc.
</aside>

You can perform the following tasks using transaction APIs

* Register new customers automatically when submitting transactions 
* Submit loyalty and non-loyalty transactions 
* Retrieve list of transactions of a particular store, till, duration or transactions of a specific customer 
* Assign not interested transactions to specific customers (once they register) - Retro transaction 
* Redeem points/coupons of customers against their transactions 
* Retrieve points/coupons redeemed for a particular transaction 




# coupon
Coupon represents store promotions or discounts codes created through Capillary Campaign Manager. A single campaign can contain one or more coupons or coupon series. Coupons are issued to loyalty or non-loyalty customers through SMS or email.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

The coupon entity allows you to perform the following tasks:

* Issue coupons to customers 
* Resend a specific coupon to the respective customer 
* Retrieve details of a specific coupon/coupon series 
* Check whether a customer can redeem a specific coupon and redeem the coupon



# points
Points represent loyalty points of an organization that are issued to the loyalty customers based on the transactions made and tiers achieved. Customers can redeem the loyalty points earned by them against transactions. Points are issued only through the Loyalty Manager upon a transaction or tier upgrade but not through API calls.

The points entity allows you to perform the following tasks:

* Check whether a specific number of points can be redeemed by a customer  
* Validate customer’s mobile number by issuing validation code to redeem points 
* Redeem loyalty points of a customer after validating the preceding tasks 




# communications
Communications represent personalized messages (SMSs/emails) sent to the loyalty customers. Messages such as transaction notifications, birthday wishes, anniversary wishes can be sent through communications APIs.

The communications entity stores personalized messages, and message templates, To send messages the communication gate way should be enabled for your organization with enough message credits.

The communications entity allows you to perform the following tasks:

* Fetch details of a specific email/SMS by message id 
* Send personalized emails/SMSs 
* Retrieve details of a specific email/sms template 
* Create new SMS/email templates or update existing templates 


## Response Codes
### Success Codes

### Error Codes
CODE | DESCRIPTION
---- | -----------
4101 | Unable to send message
4201 | Unable to send email
4102 | Unable to find/retrieve SMS
4202 | Unable to find/retrieve email
4203 | Invalid template type passed
4204 | Template not found
4205 | Unable to update the template
4206 | Invalid template id passed
4207 | No template is available with the given parameters 
4208 | Invalid email id


