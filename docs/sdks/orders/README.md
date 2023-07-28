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
import { CreateFulfillmentRequest, CreateFulfillmentResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateOrderFulfillmentBody,
  CreateOrderFulfillmentBodyFulfillment,
  CreateOrderFulfillmentBodyFulfillmentAdditionalFields,
  CreateOrderFulfillmentBodyFulfillmentLineItems,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createOrderFulfillmentBody: CreateOrderFulfillmentBody = {
  fulfillment: {
    additionalFields: {
      notifyCustomer: false,
    },
    carrier: "consectetur",
    lineItems: [
      {
        lineItemId: "vitae",
        quantity: 2569.75,
      },
      {
        lineItemId: "incidunt",
        quantity: 2669.76,
      },
    ],
    locationId: "quos",
    service: "minus",
    trackingNumber: "voluptate",
    trackingUrl: "error",
  },
};
const accessToken: string = "77a0ef2f-5360-428e-beef-934152ed7e25";
const id: string = "non";

sdk.orders.createFulfillment(createOrderFulfillmentBody, accessToken, id).then((res: CreateFulfillmentResponse) => {
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
import { CreateOrderRequest, CreateOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateOrderBody,
  CreateOrderBodyOrder,
  CreateOrderBodyOrderBillingAddress,
  CreateOrderBodyOrderCustomer,
  CreateOrderBodyOrderLineItems,
  CreateOrderBodyOrderShippingAddress,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createOrderBody: CreateOrderBody = {
  order: {
    billingAddress: {
      address1: "delectus",
      address2: "incidunt",
      city: "Casperbury",
      countryCode: "KG",
      email: "Ted.Nitzsche7@hotmail.com",
      firstName: "Izabella",
      lastName: "Abshire",
      phone: "423.778.9334 x66957",
      postalCode: "68053-9922",
      region: "ab",
    },
    currencyCode: "quibusdam",
    customer: {
      email: "Maurine_Wintheiser@yahoo.com",
      firstName: "Junius",
      lastName: "Donnelly",
    },
    lineItems: [
      {
        quantity: 9797.06,
        variantId: "expedita",
      },
      {
        quantity: 7024.18,
        variantId: "totam",
      },
      {
        quantity: 7992.36,
        variantId: "aspernatur",
      },
    ],
    shippingAddress: {
      address1: "eaque",
      address2: "impedit",
      city: "Jaskolskimouth",
      countryCode: "VI",
      email: "Ebba17@hotmail.com",
      firstName: "Estell",
      lastName: "VonRueden",
      phone: "(683) 322-7594 x7468",
      postalCode: "97446-3815",
      region: "vero",
    },
  },
};
const accessToken: string = "4baf91e5-06ef-4890-a54b-475f16f56d38";

sdk.orders.createOrder(createOrderBody, accessToken).then((res: CreateOrderResponse) => {
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
import { GetOrderRequest, GetOrderResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand1, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "5a3c4ac6-31b9-49e2-aced-8f9fdb9410f6";
const id: string = "3bbf8178-37b0-41af-9d78-8624189eb448";
const expand: Expand1 = Expand1.Transactions;
const forceFetch: ForceFetch = ForceFetch.True;

sdk.orders.getOrder(accessToken, id, expand, forceFetch).then((res: GetOrderResponse) => {
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
import { Expand1, ForceFetch, FulfillmentStatus, PaymentStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.orders.listOrders({
  accessToken: "3f5033f1-9dbf-4125-8e41-52eab9cd7e52",
  createdAtMax: 138306,
  createdAtMin: 259374,
  cursor: "error",
  expand: Expand1.Transactions,
  forceFetch: ForceFetch.True,
  fulfillmentStatus: FulfillmentStatus.Partial,
  limit: 903,
  orderNumber: 930398,
  paymentStatus: PaymentStatus.Pending,
  phone: "1-374-624-8736",
  properties: "recusandae",
  updatedAtMax: 102754,
  updatedAtMin: 974788,
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
import { UpdateOrderRequest, UpdateOrderResponse } from "rutter-api/dist/sdk/models/operations";
import { UpdateOrderBody, UpdateOrderBodyOrder, UpdateOrderBodyOrderStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const updateOrderBody: UpdateOrderBody = {
  order: {
    status: UpdateOrderBodyOrderStatus.Archived,
  },
};
const accessToken: string = "7f3c4cce-4b6d-4769-aff3-c5747501357e";
const id: string = "44f51f8b-084c-4319-be19-3a245467f948";

sdk.orders.updateOrder(updateOrderBody, accessToken, id).then((res: UpdateOrderResponse) => {
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

