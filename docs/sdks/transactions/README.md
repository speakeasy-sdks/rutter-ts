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
  accessToken: "f03b5f37-e4aa-4868-9559-66732aa5dcb6",
  createdAtMax: 419585,
  createdAtMin: 508271,
  cursor: "magni",
  forceFetch: ForceFetch.False,
  limit: 711819,
  sort: Sort.Desc,
  updatedAtMax: 52659,
  updatedAtMin: 966222,
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

