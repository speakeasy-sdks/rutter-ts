# BillCreditMemoLinkedBills


## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `allocatedAmount`                                                                                                              | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for The credit amount allocated to the bill.. |
| `allocatedDate`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for when the bill credit memo was allocated.  |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Rutter ID of the [Bill](/rest/version/bills) linked to the bill credit memo.                                               |