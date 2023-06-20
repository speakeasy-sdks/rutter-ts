# UpdateInvoiceLineItems


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `accountId`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | The account being credited for the invoice line item                            |
| `description`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The description of the line item                                                |
| `item`                                                                          | [UpdateInvoiceLineItemsItem](../../models/shared/updateinvoicelineitemsitem.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `totalAmount`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | The total amount of the invoice line item.                                      |