# CreateAttachmentRequest


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `createAttachmentBody`                                                     | [shared.CreateAttachmentBody](../../models/shared/createattachmentbody.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `accessToken`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | The access token of the connection.                                        |
| `entityType`                                                               | [shared.EntityType](../../models/shared/entitytype.md)                     | :heavy_check_mark:                                                         | The entity type of the attachment.                                         |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The Rutter generated unique ID of the underlying entity type.              |