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
  country: "Bermuda",
  oauthAccessToken: "maiores",
  oauthClientId: "voluptatem",
  oauthClientSecret: "aliquid",
  oauthRefreshToken: "laudantium",
  platform: CreateConnectionPlatforms.Fnac,
  scope: "corrupti",
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
import { DeleteConnectionRequest, DeleteConnectionResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();
const id: string = "quae";

sdk.connections.deleteConnection(id).then((res: DeleteConnectionResponse) => {
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
import { GetAccessTokenRequest, GetAccessTokenResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();
const accessToken: string = "d6bb33cf-aa34-48c3-9bf4-07ee4fcf0c42";

sdk.connections.getAccessToken(accessToken).then((res: GetAccessTokenResponse) => {
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
import { GetStatusRequest, GetStatusResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();
const accessToken: string = "b78f1562-6398-4a0d-8766-324ccb06c8ca";

sdk.connections.getStatus(accessToken).then((res: GetStatusResponse) => {
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

