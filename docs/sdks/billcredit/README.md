# billCredit

### Available Operations

* [getMemo](#getmemo)

## getMemo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetMemoResponse } from "rutter-api/dist/sdk/models/operations";
import { BillCreditMemoCurrencyCode, BillCreditMemoStatus, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.billCredit.getMemo("e54599ea-3422-460e-9b20-0ce78a1bd8fb", "7a0a116c-e723-4d40-97fa-30e9af725b29", ForceFetch.True).then((res: GetMemoResponse) => {
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

**Promise<[operations.GetMemoResponse](../../models/operations/getmemoresponse.md)>**
