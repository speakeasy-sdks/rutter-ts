# billCredit

### Available Operations

* [getMemo](#getmemo)

## getMemo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetMemoRequest, GetMemoResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "39d22246-5694-4624-8708-4f7ab37cef02";
const id: string = "225194db-5541-40ad-8669-af90a26c7cdc";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.billCredit.getMemo(accessToken, id, forceFetch).then((res: GetMemoResponse) => {
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

