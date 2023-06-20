# payouts

### Available Operations

* [listPayouts](#listpayouts)

## listPayouts

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListPayoutsResponse } from "rutter-api/dist/sdk/models/operations";
import {
  ForceFetch,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
  PayoutSchedule,
  PayoutStatus,
  PayoutType,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.payouts.listPayouts({
  accessToken: "75f16f56-d385-4a3c-8ac6-31b99e26ced8",
  arrivalAtMax: "a",
  arrivalAtMin: "natus",
  createdAtMax: "sapiente",
  createdAtMin: "repellendus",
  forceFetch: ForceFetch.False,
}).then((res: ListPayoutsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListPayoutsRequest](../../models/operations/listpayoutsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListPayoutsResponse](../../models/operations/listpayoutsresponse.md)>**

