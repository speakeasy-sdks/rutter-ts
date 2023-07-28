# metrics

### Available Operations

* [getAccountingMetric](#getaccountingmetric)
* [getCommerceMetric](#getcommercemetric)

## getAccountingMetric

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAccountingMetricRequest, GetAccountingMetricResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "640d6a18-31c8-47ad-b596-fdf1ad837ae8";
const metricName: string = "voluptatem";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.metrics.getAccountingMetric(accessToken, metricName, forceFetch).then((res: GetAccountingMetricResponse) => {
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
import { GetCommerceMetricRequest, GetCommerceMetricResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "1c19c95b-a998-4678-ba3f-696991af388c";
const metricName: string = "repudiandae";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.metrics.getCommerceMetric(accessToken, metricName, forceFetch).then((res: GetCommerceMetricResponse) => {
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

