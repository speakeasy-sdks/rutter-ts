# TaxRateComponents


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `isCompound`                                             | *boolean*                                                | :heavy_check_mark:                                       | Whether this component should compound the total or not  |
| `isPurchasesTax`                                         | *boolean*                                                | :heavy_check_mark:                                       | Whether this component is assosciated with purchases tax |
| `isSalesTax`                                             | *boolean*                                                | :heavy_check_mark:                                       | Whether this component is assosciated with sales tax     |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Name of the sub tax this component represents            |
| `rate`                                                   | *number*                                                 | :heavy_check_mark:                                       | Tax rate of the component or sub tax                     |