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
import { GetCustomerRequest, GetCustomerResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "12d02529-270b-48d5-b22d-d895b8bcf24d";
const id: string = "b9596933-52f7-4453-b994-d78de3b6e938";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.customers.getCustomer(accessToken, id, forceFetch).then((res: GetCustomerResponse) => {
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
import { GetCustomerGroupRequest, GetCustomerGroupResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "f5abb7f6-6255-40a2-8382-ac483afd2315";
const id: string = "bba65016-4e06-4f5b-b6ae-591bc8bdef36";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.customers.getCustomerGroup(accessToken, id, forceFetch).then((res: GetCustomerGroupResponse) => {
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
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.listCustomerGroups({
  accessToken: "2b63c205-fda8-4407-b4a6-8a9a35d086b6",
  cursor: "maiores",
  forceFetch: ForceFetch.True,
  limit: 428199,
  updatedAtMax: 965726,
  updatedAtMin: 881067,
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
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.customers.listCustomers({
  accessToken: "f020e9f4-43b4-4257-b992-c8dbda6a61ef",
  cursor: "id",
  email: "Arlo.Moore@gmail.com",
  forceFetch: ForceFetch.True,
  limit: 539703,
  phone: "806.697.6249 x48299",
  updatedAtMax: 19232,
  updatedAtMin: 310926,
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

