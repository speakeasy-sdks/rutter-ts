# ShoperCredentials

Credentials for Shoper


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `oauthAccessToken`                                                            | *string*                                                                      | :heavy_check_mark:                                                            | Shoper merchant OAuth Access Token                                            |
| `oauthRefreshToken`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | Shoper merchant OAuth Refresh Token                                           |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `storeUrl`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Shoper merchant domain URL                                                    |