# subscriptions

### Available Operations

* [listSubscriptions](#listsubscriptions)

## listSubscriptions

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListSubscriptionsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, SubscriptionStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.subscriptions.listSubscriptions({
  accessToken: "2eabd617-c3b0-4d51-a44b-f01bad8706d4",
  cursor: "ea",
  forceFetch: ForceFetch.True,
  limit: 514234,
  updatedAtMax: 186303,
  updatedAtMin: 725369,
}).then((res: ListSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListSubscriptionsRequest](../../models/operations/listsubscriptionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListSubscriptionsResponse](../../models/operations/listsubscriptionsresponse.md)>**

