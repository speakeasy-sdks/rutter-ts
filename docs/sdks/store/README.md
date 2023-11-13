# store

### Available Operations

* [getStore](#getstore)

## getStore

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetStoreRequest, GetStoreResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "ee224460-443b-4c15-8188-c2f56e85da78";
const expand: Expand = Expand.PlatformData;
const forceFetch: ForceFetch = ForceFetch.True;

sdk.store.getStore(accessToken, expand, forceFetch).then((res: GetStoreResponse) => {
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

