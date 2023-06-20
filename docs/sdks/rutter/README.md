# Rutter SDK

## Overview

Rutter: The Universal API for all major e-commerce platforms, accounting systems, and payment processors.

### Available Operations

* [postAccountingCustomers](#postaccountingcustomers)

## postAccountingCustomers

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { PostAccountingCustomersResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.rutter.postAccountingCustomers({
  customer: {
    contactName: "hic",
    customerName: "optio",
    email: "Benjamin.Johns@yahoo.com",
    phone: "1-874-351-0361",
    subsidiaryId: "iste",
  },
}, "396fea75-96eb-410f-aaa2-352c5955907a").then((res: PostAccountingCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createCreateAccountingCustomerRequest`                                                                      | [shared.CreateCreateAccountingCustomerRequest](../../models/shared/createcreateaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `accessToken`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The access token of the connection.                                                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostAccountingCustomersResponse](../../models/operations/postaccountingcustomersresponse.md)>**

