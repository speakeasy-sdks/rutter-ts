# customers

### Available Operations

* [getCustomer](#getcustomer)
* [getCustomerGroup](#getcustomergroup)
* [listCustomerGroups](#listcustomergroups)
* [listCustomers](#listcustomers)

## getCustomer

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetCustomerResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.getCustomer("533994d7-8de3-4b6e-9389-f5abb7f66255", "0a28382a-c483-4afd-a315-bba650164e06", ForceFetch.False).then((res: GetCustomerResponse) => {
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
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getCustomerGroup

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetCustomerGroupResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.getCustomerGroup("5bf6ae59-1bc8-4bde-b361-2b63c205fda8", "40774a68-a9a3-45d0-86b6-f66fef020e9f", ForceFetch.True).then((res: GetCustomerGroupResponse) => {
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
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCustomerGroupResponse](../../models/operations/getcustomergroupresponse.md)>**


## listCustomerGroups

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListCustomerGroupsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.listCustomerGroups({
  accessToken: "43b4257b-992c-48db-9a6a-61efa2198258",
  cursor: "doloribus",
  forceFetch: ForceFetch.False,
  limit: 13655,
  updatedAtMax: 630286,
  updatedAtMin: 612181,
}).then((res: ListCustomerGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCustomerGroupsRequest](../../models/operations/listcustomergroupsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCustomerGroupsResponse](../../models/operations/listcustomergroupsresponse.md)>**


## listCustomers

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListCustomersResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.listCustomers({
  accessToken: "eba47f7d-3ef0-4496-80d6-a1831c87adf5",
  cursor: "cupiditate",
  email: "Vivian.Sipes65@yahoo.com",
  forceFetch: ForceFetch.False,
  limit: 505908,
  phone: "568.607.1715",
  updatedAtMax: 756936,
  updatedAtMin: 580689,
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)>**

