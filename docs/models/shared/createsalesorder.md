# CreateSalesOrder


## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `classId`                                                                                                                                      | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The Rutter ID of the [Class](/rest/version/classes) linked to the sales order.                                                                 |
| `currencyCode`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the sales order.                                             |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The Rutter ID of the [Customer](/rest/version/customers) linked to the sales order.                                                            |
| `departmentId`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The Rutter ID of the [Department](/rest/version/departments) linked to the sales order.                                                        |
| `issueDate`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for the issue date of the sales order.                        |
| `lineItems`                                                                                                                                    | [CreateSalesOrderLineItems](../../models/shared/createsalesorderlineitems.md)[]                                                                | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `locationId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The Rutter ID of the [Department](/rest/version/departments) linked to the sales order.                                                        |
| `memo`                                                                                                                                         | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The memo of the sales order.                                                                                                                   |
| `subsidiaryId`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The Rutter ID of the [Subsidiary](/rest/version/subsidiaries) linked to the sales order. This feature is currently only supported on NetSuite. |