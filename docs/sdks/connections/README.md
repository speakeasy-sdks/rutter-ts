# connections

### Available Operations

* [createConnection](#createconnection)
* [deleteConnection](#deleteconnection)
* [getAccessToken](#getaccesstoken)
* [getStatus](#getstatus)
* [listConnections](#listconnections)

## createConnection

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateConnectionResponse } from "rutter-api/dist/sdk/models/operations";
import { AmazonCredentialsAmazonSellerRegion, CreateConnectionPlatforms } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.connections.createConnection({
  basicPassword: "consequatur",
  basicUsername: "amet",
  platform: CreateConnectionPlatforms.BigCommerce,
  scope: "fugiat",
  storeUrl: "voluptatum",
}).then((res: CreateConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [any](../../models//.md)                                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateConnectionResponse](../../models/operations/createconnectionresponse.md)>**


## deleteConnection

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { DeleteConnectionResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.connections.deleteConnection("velit").then((res: DeleteConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The Rutter connection ID to delete.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteConnectionResponse](../../models/operations/deleteconnectionresponse.md)>**


## getAccessToken

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAccessTokenResponse } from "rutter-api/dist/sdk/models/operations";
import { Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.connections.getAccessToken("f5aeb779-9d22-4e8c-9f84-93825fdc42c8").then((res: GetAccessTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | The access token of the connection.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAccessTokenResponse](../../models/operations/getaccesstokenresponse.md)>**


## getStatus

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetStatusResponse } from "rutter-api/dist/sdk/models/operations";
import {
  GetConnectionStatusResponseConnectionPlatform,
  GetConnectionStatusResponseStatusDisabledStatusDisabledReason,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesAccounts,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesBalanceSheets,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesCompanyInfo,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesCustomers,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesIncomeStatements,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesInvoices,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesItems,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesPayouts,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesPurchaseOrders,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesStore,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesTransactions,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesConfigEntitiesVendors,
  GetConnectionStatusResponseStatusHistoricalSyncStatusBatchesProgressInfoStatus,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.connections.getStatus("76c2c2df-b4cf-4c1c-b623-0f841fb1bd23").then((res: GetStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | The access token of the connection.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStatusResponse](../../models/operations/getstatusresponse.md)>**


## listConnections

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListConnectionsResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.connections.listConnections().then((res: ListConnectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListConnectionsResponse](../../models/operations/listconnectionsresponse.md)>**

