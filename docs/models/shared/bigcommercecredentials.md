# BigCommerceCredentials

Credentials for BigCommerce


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `oauthAccessToken`                                                            | *string*                                                                      | :heavy_check_mark:                                                            | BigCommerce Store Access Token                                                |
| `oauthClientId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | BigCommerce App Client ID                                                     |
| `oauthClientSecret`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | BigCommerce App Client Secret                                                 |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | BigCommerce merchant .mybigcommerce.com domain URL                            |