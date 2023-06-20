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

sdk.customers.getCustomer("fdb14db6-be5a-4685-998e-22ae20da16fc", "2b271a28-9c57-4e85-8e90-439d22246569", ForceFetch.True).then((res: GetCustomerResponse) => {
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

sdk.customers.getCustomerGroup("62407084-f7ab-437c-af02-225194db5541", "0adc669a-f90a-426c-bcdc-981f068981d6", ForceFetch.False).then((res: GetCustomerGroupResponse) => {
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
  accessToken: "b33cfaa3-48c3-41bf-807e-e4fcf0c42b78",
  cursor: "reiciendis",
  forceFetch: ForceFetch.True,
  limit: 353009,
  updatedAtMax: 393630,
  updatedAtMin: 159496,
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
  accessToken: "6398a0dc-7663-424c-8b06-c8ca12d02529",
  cursor: "magni",
  email: "Abdul_Pouros@yahoo.com",
  forceFetch: ForceFetch.True,
  limit: 488442,
  phone: "1-388-653-7578",
  updatedAtMax: 968212,
  updatedAtMin: 170934,
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

