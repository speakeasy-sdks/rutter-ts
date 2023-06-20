# MagentoCredentials

Credentials for Magento


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `basicPassword`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | Magento Admin User Password                                                   |
| `basicUsername`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | Magento Admin User Username                                                   |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Magento merchant website URL                                                  |