# CreateBillCreditMemoLineItems


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountId`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The Rutter ID of the [Account](/rest/version/accounts) linked to the bill line item. |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The description or memo of the bill line item.                                       |
| `totalAmount`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | The total amount due on the bill line item.                                          |