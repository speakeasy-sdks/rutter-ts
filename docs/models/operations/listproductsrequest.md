# ListProductsRequest


## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The access token of the connection.                                                                                               |
| `createdAtMax`                                                                                                                    | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds maximum created_at datetime to fetch entities from. |
| `createdAtMin`                                                                                                                    | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds minimum created_at datetime to fetch entities from. |
| `cursor`                                                                                                                          | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The cursor to use for pagination. This value is passed in from `next_cursor` field in a previous request.                         |
| `forceFetch`                                                                                                                      | [shared.ForceFetch](../../models/shared/forcefetch.md)                                                                            | :heavy_minus_sign:                                                                                                                | Force a response even if the underlying connection hasn't finished the initial sync.                                              |
| `limit`                                                                                                                           | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The limit on the number of entities returned.                                                                                     |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Filter products by names similar to the input.                                                                                    |
| `status`                                                                                                                          | [shared.Status](../../models/shared/status.md)                                                                                    | :heavy_minus_sign:                                                                                                                | Show products with certain product status.                                                                                        |
| `updatedAtMax`                                                                                                                    | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds maximum updated_at datetime to fetch entities from. |
| `updatedAtMin`                                                                                                                    | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds minimum updated_at datetime to fetch entities from. |