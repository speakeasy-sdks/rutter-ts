# ListOrdersResponse

The `/orders` endpoint allows developers to receive user-authorized order data for a merchant's store.
  Due to the potentially large number of orders associated with a connection, results are paginated.


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `connection`                                    | [Connection](../../models/shared/connection.md) | :heavy_check_mark:                              | N/A                                             |
| `nextCursor`                                    | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `orders`                                        | [Order](../../models/shared/order.md)[]         | :heavy_check_mark:                              | N/A                                             |