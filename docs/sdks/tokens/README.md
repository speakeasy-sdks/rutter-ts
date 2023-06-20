# tokens

### Available Operations

* [exchangePublicToken](#exchangepublictoken)

## exchangePublicToken

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ExchangePublicTokenResponse } from "rutter-api/dist/sdk/models/operations";
import { ExchangeTokenResponsePlatform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.tokens.exchangePublicToken({
  clientId: "voluptate",
  publicToken: "consequatur",
  secret: "itaque",
}).then((res: ExchangePublicTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.ExchangeTokenBody](../../models/shared/exchangetokenbody.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.ExchangePublicTokenResponse](../../models/operations/exchangepublictokenresponse.md)>**

