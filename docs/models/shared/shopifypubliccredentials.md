# ShopifyPublicCredentials

Credentials for Shopify Public App


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `oauthAccessToken`                                                            | *string*                                                                      | :heavy_check_mark:                                                            | Shopify Merchant Access Token                                                 |
| `oauthClientId`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | Shopify Public App Client ID                                                  |
| `oauthClientSecret`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | Shopify Public App Client Secret                                              |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Shopify merchant .myshopify.com domain URL                                    |