# store

### Available Operations

* [getStore](#getstore)

## getStore

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetStoreResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.store.getStore("cb860f8c-d580-4ba7-b810-e4fe4447297c", Expand.PlatformData, ForceFetch.False).then((res: GetStoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `expand`                                                                             | [shared.Expand](../../models/shared/expand.md)                                       | :heavy_minus_sign:                                                                   | Optionally, include raw external platform data when fetching data.                   |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetStoreResponse](../../models/operations/getstoreresponse.md)>**

