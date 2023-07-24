# QuickbooksCredentials

Credentials for Quickbooks


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `environment`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | Environment (e.g. sandbox)                                                    |
| `oauthClientId`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | OAuth Client ID                                                               |
| `oauthClientSecret`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | OAuth Client Secret                                                           |
| `oauthRefreshToken`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | OAuth Refresh Token                                                           |
| `platform`                                                                    | [CreateConnectionPlatforms](../../models/shared/createconnectionplatforms.md) | :heavy_check_mark:                                                            | The underlying platform.                                                      |
| `realmId`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | Realm ID                                                                      |
| `scope`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |