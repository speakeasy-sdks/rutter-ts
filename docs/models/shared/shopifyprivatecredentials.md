# ShopifyPrivateCredentials

Credentials for Shopify Private App


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `basicPassword`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | Private Shopify App Password                                                  |
| `basicUsername`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | Private Shopify App API Key                                                   |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Shopify merchant .myshopify.com domain URL                                    |