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
    carrier: "deserunt",
    lineItems: [
      {
        lineItemId: "ipsam",
        quantity: 292.7,
      },
      {
        lineItemId: "illo",
        quantity: 4349.55,
      },
    ],
    locationId: "incidunt",
    service: "eveniet",
    trackingNumber: "quae",
    trackingUrl: "ea",
  },
}, "f5bf6ae5-91bc-48bd-af36-12b63c205fda", "atque").then((res: CreateFulfillmentResponse) => {
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
      address1: "quaerat",
      address2: "aperiam",
      city: "Jamalboro",
      countryCode: "NZ",
      email: "Kaley_Nienow@yahoo.com",
      firstName: "Dandre",
      lastName: "Hand",
      phone: "(253) 739-4498 x90109",
      postalCode: "93227-2134",
      region: "libero",
    },
    currencyCode: "omnis",
    customer: {
      email: "Chelsea_Schamberger@yahoo.com",
      firstName: "Myrtie",
      lastName: "Spinka",
    },
    lineItems: [
      {
        quantity: 4146.44,
        variantId: "similique",
      },
      {
        quantity: 4212.73,
        variantId: "dicta",
      },
      {
        quantity: 9262.66,
        variantId: "sapiente",
      },
    ],
    shippingAddress: {
      address1: "id",
      address2: "odit",
      city: "New Karenland",
      countryCode: "GR",
      email: "Xavier63@yahoo.com",
      firstName: "Leora",
      lastName: "Upton",
      phone: "724.948.2990 x3532",
      postalCode: "83615",
      region: "ratione",
    },
  },
}, "1c87adf5-96fd-4f1a-9837-ae80c1c19c95").then((res: CreateOrderResponse) => {
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

sdk.orders.getOrder("ba998678-fa3f-4696-991a-f388ce036144", "48c7977a-0ef2-4f53-a028-efeef934152e", Expand1.Transactions, ForceFetch.False).then((res: GetOrderResponse) => {
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
  accessToken: "7e253f4c-157d-4eaa-b170-f445accf667a",
  createdAtMax: 642272,
  createdAtMin: 994902,
  cursor: "cupiditate",
  expand: Expand1.Transactions,
  forceFetch: ForceFetch.False,
  fulfillmentStatus: FulfillmentStatus.Partial,
  limit: 636190,
  orderNumber: 855647,
  paymentStatus: PaymentStatus.Pending,
  phone: "499-420-8369 x3751",
  properties: "atque",
  updatedAtMax: 979706,
  updatedAtMin: 714054,
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
    status: UpdateOrderBodyOrderStatus.Cancelled,
  },
}, "8c20cb67-fc4b-4425-a99e-6234c9f7b79d", "feb77a5c-38d4-4baf-91e5-06ef890a54b4").then((res: UpdateOrderResponse) => {
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

