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
  accessToken: "6c78a216-e19b-4afe-8a61-91498140b64f",
  cursor: "delectus",
  forceFetch: ForceFetch.False,
  limit: 661949,
  updatedAtMax: 884812,
  updatedAtMin: 68777,
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

