# orders

### Available Operations

* [createFulfillment](#createfulfillment)
* [createOrder](#createorder)
* [getOrder](#getorder)
* [listOrders](#listorders)
* [updateOrder](#updateorder)

## createFulfillment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateFulfillmentResponse } from "rutter-api/dist/sdk/models/operations";
import { Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.createFulfillment({
  fulfillment: {
    additionalFields: {
      notifyCustomer: false,
    },
    carrier: "ullam",
    lineItems: [
      {
        lineItemId: "delectus",
        quantity: 2767.95,
      },
    ],
    locationId: "quod",
    service: "sunt",
    trackingNumber: "ullam",
    trackingUrl: "quam",
  },
}, "deaa7170-f445-4acc-b667-aaf9bbad185f", "voluptates").then((res: CreateFulfillmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createOrderFulfillmentBody`                                                           | [shared.CreateOrderFulfillmentBody](../../models/shared/createorderfulfillmentbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `accessToken`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The access token of the connection.                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The Rutter ID of the order to fulfill.                                                 |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateFulfillmentResponse](../../models/operations/createfulfillmentresponse.md)>**


## createOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  OrderFulfillmentStatus,
  OrderPaymentStatus,
  OrderStatus,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.createOrder({
  order: {
    billingAddress: {
      address1: "ut",
      address2: "nesciunt",
      city: "Port Gerardocester",
      countryCode: "VN",
      email: "Norma54@yahoo.com",
      firstName: "Wilhelm",
      lastName: "Ratke",
      phone: "671.277.4497 x2721",
      postalCode: "95583",
      region: "eos",
    },
    currencyCode: "amet",
    customer: {
      email: "Ottilie.McCullough73@gmail.com",
      firstName: "Isai",
      lastName: "Monahan",
    },
    lineItems: [
      {
        quantity: 9503.37,
        variantId: "recusandae",
      },
      {
        quantity: 7115.72,
        variantId: "iusto",
      },
      {
        quantity: 4564.73,
        variantId: "harum",
      },
      {
        quantity: 3216.54,
        variantId: "quod",
      },
    ],
    shippingAddress: {
      address1: "ratione",
      address2: "totam",
      city: "Eugene",
      countryCode: "PM",
      email: "Wiley90@yahoo.com",
      firstName: "Emelie",
      lastName: "Bechtelar",
      phone: "1-995-606-3272 x439",
      postalCode: "49348",
      region: "nesciunt",
    },
  },
}, "85a3c4ac-631b-499e-a6ce-d8f9fdb9410f").then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `createOrderBody`                                                | [shared.CreateOrderBody](../../models/shared/createorderbody.md) | :heavy_check_mark:                                               | N/A                                                              |
| `accessToken`                                                    | *string*                                                         | :heavy_check_mark:                                               | The access token of the connection.                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)>**


## getOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand1,
  ForceFetch,
  OrderFulfillmentStatus,
  OrderPaymentStatus,
  OrderStatus,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.getOrder("63bbf817-837b-401a-bdd7-88624189eb44", "873f5033-f19d-4bf1-a5ce-4152eab9cd7e", Expand1.Transactions, ForceFetch.True).then((res: GetOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `expand`                                                                             | [shared.Expand1](../../models/shared/expand1.md)                                     | :heavy_minus_sign:                                                                   | Optionally, include transaction information when fetching orders.                    |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOrderResponse](../../models/operations/getorderresponse.md)>**


## listOrders

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListOrdersResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand1,
  ForceFetch,
  FulfillmentStatus,
  OrderFulfillmentStatus,
  OrderPaymentStatus,
  OrderStatus,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
  PaymentStatus,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.listOrders({
  accessToken: "224a6a0e-123b-4784-bec5-9e1f67f3c4cc",
  createdAtMax: 922207,
  createdAtMin: 273349,
  cursor: "libero",
  expand: Expand1.Transactions,
  forceFetch: ForceFetch.True,
  fulfillmentStatus: FulfillmentStatus.Unknown,
  limit: 478576,
  orderNumber: 401083,
  paymentStatus: PaymentStatus.Refunded,
  phone: "1-992-834-2430 x123",
  properties: "nihil",
  updatedAtMax: 887865,
  updatedAtMin: 293799,
}).then((res: ListOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListOrdersRequest](../../models/operations/listordersrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListOrdersResponse](../../models/operations/listordersresponse.md)>**


## updateOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  OrderFulfillmentStatus,
  OrderPaymentStatus,
  OrderStatus,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
  Platform,
  UpdateOrderBodyOrderStatus,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.updateOrder({
  order: {
    status: UpdateOrderBodyOrderStatus.Archived,
  },
}, "f51f8b08-4c31-497e-993a-245467f94874", "c2d5cc49-7223-43e6-abd8-fe5d00b979ef").then((res: UpdateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `updateOrderBody`                                                | [shared.UpdateOrderBody](../../models/shared/updateorderbody.md) | :heavy_check_mark:                                               | N/A                                                              |
| `accessToken`                                                    | *string*                                                         | :heavy_check_mark:                                               | The access token of the connection.                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The Rutter generated unique ID of the object.                    |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateOrderResponse](../../models/operations/updateorderresponse.md)>**

