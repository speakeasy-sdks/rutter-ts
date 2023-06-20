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

sdk.metrics.getAccountingMetric("db959693-352f-4745-b399-4d78de3b6e93", "corrupti", ForceFetch.False).then((res: GetAccountingMetricResponse) => {
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

sdk.metrics.getCommerceMetric("f5abb7f6-6255-40a2-8382-ac483afd2315", "facilis", ForceFetch.False).then((res: GetCommerceMetricResponse) => {
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

