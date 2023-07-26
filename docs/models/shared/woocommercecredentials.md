# WooCommerceCredentials

Credentials for WooCommerce


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `basicPassword`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | WooCommerce Rest API Consumer Secret                                          |
| `basicUsername`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | WooCommerce Rest API Consumer Key                                             |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | WooCommerce merchant website URL                                              |