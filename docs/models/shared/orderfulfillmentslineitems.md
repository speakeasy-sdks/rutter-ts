# OrderFulfillmentsLineItems


## Fields

| Field                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The Rutter generated unique ID of the fulfillment line item.                                                                                                                                                                                                   |
| `price`                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The total cost of all of the variants associated with this line item.                                                                                                                                                                                          |
| `productId`                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The Rutter ID of the [Product](/rest/version/products) linked to the fulfillment line item. `null` if the product has been deleted from the connection.                                                                                                        |
| `quantity`                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The quantity of the linked [Variant](/rest/version/variants) fulfilled with this line item.                                                                                                                                                                    |
| `sku`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The stock keeping unit (SKU) of the linked [Variant](/rest/version/variants).                                                                                                                                                                                  |
| `title`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The `title` of the linked [Variant](/rest/version/variants)                                                                                                                                                                                                    |
| `variantId`                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                             | The Rutter ID of the [Product](/rest/version/products) linked to the order. `null` if the product has been deleted from the connection. The `variant_id` and `product_id` are equal if the variant is the default variant or the product contains no variants. |