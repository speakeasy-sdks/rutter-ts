# metrics

### Available Operations

* [getAccountingMetric](#getaccountingmetric)
* [getCommerceMetric](#getcommercemetric)

## getAccountingMetric

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAccountingMetricResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.metrics.getAccountingMetric("ba998678-fa3f-4696-991a-f388ce036144", "modi", ForceFetch.False).then((res: GetAccountingMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `metricName`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the metric to fetch.                                                     |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAccountingMetricResponse](../../models/operations/getaccountingmetricresponse.md)>**


## getCommerceMetric

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetCommerceMetricResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.metrics.getCommerceMetric("c7977a0e-f2f5-4360-a8ef-eef934152ed7", "itaque", ForceFetch.True).then((res: GetCommerceMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `metricName`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the metric to fetch.                                                     |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCommerceMetricResponse](../../models/operations/getcommercemetricresponse.md)>**

