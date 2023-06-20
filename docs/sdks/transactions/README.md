# transactions

### Available Operations

* [listTransactions](#listtransactions)

## listTransactions

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListTransactionsResponse } from "rutter-api/dist/sdk/models/operations";
import {
  ForceFetch,
  OrderTransactionPaymentMethodType,
  OrderTransactionStatus,
  OrderTransactionType,
  Platform,
  Sort,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.transactions.listTransactions({
  accessToken: "c41ff5d4-e2ae-44fb-9cb3-5d17638f1edb",
  createdAtMax: 497363,
  createdAtMin: 540416,
  cursor: "consectetur",
  forceFetch: ForceFetch.True,
  limit: 592760,
  sort: Sort.Asc,
  updatedAtMax: 793260,
  updatedAtMin: 773479,
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)>**

