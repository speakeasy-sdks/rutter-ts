# jobs

### Available Operations

* [getJob](#getjob)

## getJob

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetJobRequest, GetJobResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();
const id: string = "excepturi";

sdk.jobs.getJob(id).then((res: GetJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the job.                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetJobResponse](../../models/operations/getjobresponse.md)>**

