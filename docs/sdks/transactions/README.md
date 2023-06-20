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
  accessToken: "b8421953-b44b-4d3c-8315-9d33e5953c00",
  createdAtMax: 116742,
  createdAtMin: 73787,
  cursor: "amet",
  forceFetch: ForceFetch.False,
  limit: 552512,
  sort: Sort.Desc,
  updatedAtMax: 193048,
  updatedAtMin: 632885,
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

