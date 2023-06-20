# accounting

### Available Operations

* [createAccount](#createaccount)
* [createAttachment](#createattachment)
* [createBill](#createbill)
* [createBillCreditApplication](#createbillcreditapplication)
* [createBillCreditMemo](#createbillcreditmemo)
* [createBillPayment](#createbillpayment)
* [createCustomer](#createcustomer)
* [createExpense](#createexpense)
* [createInvoice](#createinvoice)
* [createInvoiceCreditApplication](#createinvoicecreditapplication)
* [createInvoiceCreditMemo](#createinvoicecreditmemo)
* [createInvoicePayment](#createinvoicepayment)
* [createItem](#createitem)
* [createJournalEntry](#createjournalentry)
* [createPurchaseOrder](#createpurchaseorder)
* [createSalesOrder](#createsalesorder)
* [createVendor](#createvendor)
* [getAccount](#getaccount)
* [getAttachment](#getattachment)
* [getBill](#getbill)
* [getBillPayment](#getbillpayment)
* [getCompanyInfo](#getcompanyinfo)
* [getCustomer](#getcustomer)
* [getExpense](#getexpense)
* [getInvoice](#getinvoice)
* [getInvoiceCreditMemo](#getinvoicecreditmemo)
* [getInvoicePayment](#getinvoicepayment)
* [getItem](#getitem)
* [getJournalEntry](#getjournalentry)
* [getPurchaseOrder](#getpurchaseorder)
* [getSalesOrder](#getsalesorder)
* [getSubsidiary](#getsubsidiary)
* [getTaxRate](#gettaxrate)
* [getVendor](#getvendor)
* [listAccounts](#listaccounts)
* [listAttachments](#listattachments)
* [listBalanceSheets](#listbalancesheets)
* [listBillCreditMemos](#listbillcreditmemos)
* [listBillPayments](#listbillpayments)
* [listBills](#listbills)
* [listCashFlowStatements](#listcashflowstatements)
* [listClasses](#listclasses)
* [listCurrencies](#listcurrencies)
* [listCustomers](#listcustomers)
* [listDepartments](#listdepartments)
* [listExpenses](#listexpenses)
* [listIncomeStatements](#listincomestatements)
* [listInvoiceCreditMemos](#listinvoicecreditmemos)
* [listInvoicePayments](#listinvoicepayments)
* [listInvoices](#listinvoices)
* [listItems](#listitems)
* [listJournalEntries](#listjournalentries)
* [listLocations](#listlocations)
* [listPurchaseOrders](#listpurchaseorders)
* [listReports](#listreports)
* [listSalesOrders](#listsalesorders)
* [listSubsidiaries](#listsubsidiaries)
* [listTaxRates](#listtaxrates)
* [listVendors](#listvendors)
* [updateBill](#updatebill)
* [updateInvoice](#updateinvoice)
* [updateInvoicePayment](#updateinvoicepayment)

## createAccount

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateAccountResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateAccountAccountType, CreateAccountCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createAccount({
  account: {
    accountType: CreateAccountAccountType.Expense,
    additionalFields: {
      bankAccountNumber: "quod",
    },
    currencyCode: CreateAccountCurrencyCode.Top,
    name: "Deanna Sauer MD",
    nominalCode: "officia",
    subsidiaryId: "occaecati",
  },
}, "28fc8167-42cb-4739-a059-29396fea7596").then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createCreateAccountRequest`                                                           | [shared.CreateCreateAccountRequest](../../models/shared/createcreateaccountrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `accessToken`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The access token of the connection.                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateAccountResponse](../../models/operations/createaccountresponse.md)>**


## createAttachment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateAttachmentResponse } from "rutter-api/dist/sdk/models/operations";
import { EntityType } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createAttachment({
  file: "saepe",
  fileName: "quidem",
}, "10faaa23-52c5-4955-907a-ff1a3a2fa946", EntityType.Expenses, "molestiae").then((res: CreateAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `createAttachmentBody`                                                     | [shared.CreateAttachmentBody](../../models/shared/createattachmentbody.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `accessToken`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | The access token of the connection.                                        |
| `entityType`                                                               | [shared.EntityType](../../models/shared/entitytype.md)                     | :heavy_check_mark:                                                         | The entity type of the attachment.                                         |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The Rutter generated unique ID of the underlying entity type.              |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateAttachmentResponse](../../models/operations/createattachmentresponse.md)>**


## createBill

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateBillResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateBillCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createBill({
  bill: {
    accountId: "velit",
    currencyCode: CreateBillCurrencyCode.Nzd,
    documentNumber: "quia",
    dueDate: "quis",
    issueDate: "vitae",
    lineItems: [
      {
        accountId: "animi",
        classId: "enim",
        customerId: "odit",
        departmentId: "quo",
        description: "sequi",
        discountAmount: 9495.72,
        discountItemId: "ipsam",
        item: {
          id: "ad019da1-ffe7-48f0-97b0-074f15471b5e",
          quantity: 4142.63,
          unitAmount: 9182.36,
        },
        locationId: "quae",
        taxRateId: "ipsum",
        totalAmount: 6924.72,
      },
      {
        accountId: "molestias",
        classId: "excepturi",
        customerId: "pariatur",
        departmentId: "modi",
        description: "praesentium",
        discountAmount: 5232.48,
        discountItemId: "voluptates",
        item: {
          id: "1e91e450-ad2a-4bd4-8269-802d502a94bb",
          quantity: 2884.76,
          unitAmount: 9621.89,
        },
        locationId: "eum",
        taxRateId: "non",
        totalAmount: 7561.07,
      },
      {
        accountId: "sint",
        classId: "aliquid",
        customerId: "provident",
        departmentId: "necessitatibus",
        description: "sint",
        discountAmount: 6389.21,
        discountItemId: "dolor",
        item: {
          id: "efa77dfb-14cd-466a-a395-efb9ba88f3a6",
          quantity: 4238.55,
          unitAmount: 6188.09,
        },
        locationId: "omnis",
        taxRateId: "molestiae",
        totalAmount: 191.93,
      },
    ],
    linkedPurchaseOrders: [
      {
        id: "4ba4469b-6e21-4419-9989-0afa563e2516",
      },
      {
        id: "fe4c8b71-1e5b-47fd-aed0-28921cddc692",
      },
    ],
    memo: "ea",
    subsidiaryId: "accusantium",
    vendorId: "ab",
  },
}, "fb576b0d-5f0d-430c-9fbb-2587053202c7").then((res: CreateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `createCreateBillRequest`                                                        | [shared.CreateCreateBillRequest](../../models/shared/createcreatebillrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `accessToken`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | The access token of the connection.                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateBillResponse](../../models/operations/createbillresponse.md)>**


## createBillCreditApplication

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateBillCreditApplicationResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateBillCreditApplicationCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createBillCreditApplication({
  billCreditApplication: {
    additionalFields: {
      accountId: "dolor",
    },
    billCreditMemoId: "vero",
    currencyCode: CreateBillCreditApplicationCurrencyCode.Hrk,
    linkedBills: [
      {
        allocatedAmount: 9280.82,
        id: "9b90c289-09b3-4fe4-9a8d-9cbf48633323",
      },
      {
        allocatedAmount: 9443.73,
        id: "9b77f3a4-1006-474e-bf69-280d1ba77a89",
      },
      {
        allocatedAmount: 8966.72,
        id: "bf737ae4-203c-4e5e-aa95-d8a0d446ce2a",
      },
      {
        allocatedAmount: 9527.92,
        id: "7a73cf3b-e453-4f87-8b32-6b5a73429cdb",
      },
    ],
    memo: "dicta",
    transactionDate: "laborum",
    vendorId: "totam",
  },
}, "422bb679-d232-4271-9bf0-cbb1e31b8b90").then((res: CreateBillCreditApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createCreateBillCreditApplicationRequest`                                                                         | [shared.CreateCreateBillCreditApplicationRequest](../../models/shared/createcreatebillcreditapplicationrequest.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `accessToken`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The access token of the connection.                                                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateBillCreditApplicationResponse](../../models/operations/createbillcreditapplicationresponse.md)>**


## createBillCreditMemo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateBillCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateBillCreditMemoCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createBillCreditMemo({
  billCreditMemo: {
    accountId: "delectus",
    currencyCode: CreateBillCreditMemoCurrencyCode.Cuc,
    issueDate: "dolore",
    lineItems: [
      {
        accountId: "adipisci",
        description: "dolorum",
        totalAmount: 1002.94,
      },
      {
        accountId: "quae",
        description: "aut",
        totalAmount: 5556.49,
      },
    ],
    vendorId: "itaque",
  },
}, "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab").then((res: CreateBillCreditMemoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createCreateBillCreditMemoRequest`                                                                  | [shared.CreateCreateBillCreditMemoRequest](../../models/shared/createcreatebillcreditmemorequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accessToken`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The access token of the connection.                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateBillCreditMemoResponse](../../models/operations/createbillcreditmemoresponse.md)>**


## createBillPayment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateBillPaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateBillPaymentCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createBillPayment({
  billPayment: {
    accountId: "vero",
    currencyCode: CreateBillPaymentCurrencyCode.Lvl,
    documentNumber: "dolore",
    linkedBills: [
      {
        allocatedAmount: 8489.44,
        allocatedDate: "sequi",
        id: "9c0f5d2c-ff7c-470a-8562-6d436813f16d",
      },
      {
        allocatedAmount: 5692.11,
        allocatedDate: "voluptatibus",
        id: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
      },
      {
        allocatedAmount: 6720.48,
        allocatedDate: "placeat",
        id: "366c8dd6-b144-4290-b474-778a7bd466d2",
      },
      {
        allocatedAmount: 5093.42,
        allocatedDate: "quisquam",
        id: "10ab3cdc-a425-4190-8e52-3c7e0bc7178e",
      },
    ],
    memo: "aliquam",
    transactionDate: "odio",
    vendorId: "occaecati",
  },
}, "6f2a70c6-8828-42aa-8825-62f222e9817e").then((res: CreateBillPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createCreateBillPaymentRequest`                                                               | [shared.CreateCreateBillPaymentRequest](../../models/shared/createcreatebillpaymentrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `accessToken`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The access token of the connection.                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateBillPaymentResponse](../../models/operations/createbillpaymentresponse.md)>**


## createCustomer

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateAccountingCustomerResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.createCustomer({
  customer: {
    contactName: "accusamus",
    customerName: "veritatis",
    email: "Precious.Reilly9@yahoo.com",
    phone: "1-564-753-7706 x72710",
    subsidiaryId: "minus",
  },
}, "4f3789fd-871f-499d-92ef-d121aa6f1e67").then((res: CreateAccountingCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createCreateAccountingCustomerRequest`                                                                      | [shared.CreateCreateAccountingCustomerRequest](../../models/shared/createcreateaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `accessToken`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The access token of the connection.                                                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateAccountingCustomerResponse](../../models/operations/createaccountingcustomerresponse.md)>**


## createExpense

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateExpenseResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateExpenseAdditionalFieldsPlaceOfSupply,
  CreateExpenseAdditionalFieldsTaxTreatment,
  CreateExpenseCurrencyCode,
  CreateExpenseExpenseType,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createExpense({
  expense: {
    accountId: "eius",
    additionalFields: {
      placeOfSupply: CreateExpenseAdditionalFieldsPlaceOfSupply.Bahrain,
      taxInclusive: false,
      taxTreatment: CreateExpenseAdditionalFieldsTaxTreatment.DzVatRegistered,
    },
    currencyCode: CreateExpenseCurrencyCode.Sos,
    currencyRate: 333.04,
    expenseType: CreateExpenseExpenseType.Expense,
    lineItems: [
      {
        accountId: "dicta",
        classId: "ullam",
        customerId: "reprehenderit",
        departmentId: "ullam",
        description: "nisi",
        locationId: "aut",
        taxRateId: "voluptatum",
        totalAmount: 1852.32,
      },
      {
        accountId: "quibusdam",
        classId: "ex",
        customerId: "deleniti",
        departmentId: "itaque",
        description: "dolorum",
        locationId: "architecto",
        taxRateId: "omnis",
        totalAmount: 9453.02,
      },
      {
        accountId: "quasi",
        classId: "at",
        customerId: "et",
        departmentId: "voluptate",
        description: "ipsa",
        locationId: "minima",
        taxRateId: "veritatis",
        totalAmount: 2327.44,
      },
      {
        accountId: "adipisci",
        classId: "iste",
        customerId: "temporibus",
        departmentId: "accusantium",
        description: "rem",
        locationId: "aut",
        taxRateId: "laudantium",
        totalAmount: 4287.96,
      },
    ],
    memo: "mollitia",
    subsidiaryId: "ab",
    transactionDate: "corrupti",
    vendorId: "non",
  },
}, "0394c260-71f9-43f5-b064-2dac7af515cc").then((res: CreateExpenseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createCreateExpenseRequest`                                                           | [shared.CreateCreateExpenseRequest](../../models/shared/createcreateexpenserequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `accessToken`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The access token of the connection.                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateExpenseResponse](../../models/operations/createexpenseresponse.md)>**


## createInvoice

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateInvoiceCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createInvoice({
  invoice: {
    currencyCode: CreateInvoiceCurrencyCode.Gbp,
    customerId: "ab",
    dueDate: "adipisci",
    issueDate: "fuga",
    lineItems: [
      {
        accountId: "suscipit",
        description: "velit",
        item: {
          id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
          quantity: 9689.72,
          unitAmount: 6971.42,
        },
        totalAmount: 9049.49,
      },
      {
        accountId: "necessitatibus",
        description: "dolore",
        item: {
          id: "1f33317f-e35b-460e-b1ea-426555ba3c28",
          quantity: 4492.92,
          unitAmount: 2962.42,
        },
        totalAmount: 3044.68,
      },
      {
        accountId: "officiis",
        description: "temporibus",
        item: {
          id: "53b88f3a-8d8f-45c0-b2f2-fb7b194a276b",
          quantity: 1312.89,
          unitAmount: 3783.26,
        },
        totalAmount: 6041.18,
      },
    ],
  },
}, "16fe1f08-f429-44e3-a98f-447f603e8b44").then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createCreateInvoiceRequest`                                                           | [shared.CreateCreateInvoiceRequest](../../models/shared/createcreateinvoicerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `accessToken`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The access token of the connection.                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateInvoiceResponse](../../models/operations/createinvoiceresponse.md)>**


## createInvoiceCreditApplication

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateInvoiceCreditApplicationResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateInvoiceCreditApplicationCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createInvoiceCreditApplication({
  invoiceCreditApplication: {
    accountId: "ipsam",
    currencyCode: CreateInvoiceCreditApplicationCurrencyCode.Xaf,
    customerId: "rem",
    invoiceCreditMemoId: "sit",
    linkedInvoices: [
      {
        allocatedAmount: 6256.37,
        id: "55efd20e-457e-4185-8b6a-89fbe3a5aa8e",
      },
      {
        allocatedAmount: 2726.83,
        id: "824d0ab4-0750-488e-9186-2065e904f3b1",
      },
      {
        allocatedAmount: 994.16,
        id: "94b8abf6-03a7-49f9-9fe0-ab7da8a50ce1",
      },
      {
        allocatedAmount: 5424.57,
        id: "7f86bc17-3d68-49ee-a952-6f8d986e881e",
      },
    ],
    memo: "dolorum",
    transactionDate: "repellendus",
  },
}, "4f0e1012-563f-494e-a9e9-73e922a57a15").then((res: CreateInvoiceCreditApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `createCreateInvoiceCreditApplicationRequest`                                                                            | [shared.CreateCreateInvoiceCreditApplicationRequest](../../models/shared/createcreateinvoicecreditapplicationrequest.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `accessToken`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The access token of the connection.                                                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateInvoiceCreditApplicationResponse](../../models/operations/createinvoicecreditapplicationresponse.md)>**


## createInvoiceCreditMemo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateInvoiceCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.createInvoiceCreditMemo({
  invoiceCreditMemo: {
    accountId: "quidem",
    currencyCode: "eveniet",
    customerId: "non",
    issueDate: "vero",
    lineItems: [
      {
        accountId: "iure",
        description: "ipsa",
        item: {
          id: "807e2b6e-3ab8-4845-b059-7a60ff2a54a3",
          quantity: 632.07,
          unitAmount: "recusandae",
        },
        totalAmount: "omnis",
      },
    ],
  },
}, "4764a3e8-65e7-4956-b925-1a5a9da660ff").then((res: CreateInvoiceCreditMemoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createCreateInvoiceCreditMemoRequest`                                                                     | [shared.CreateCreateInvoiceCreditMemoRequest](../../models/shared/createcreateinvoicecreditmemorequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `accessToken`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The access token of the connection.                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateInvoiceCreditMemoResponse](../../models/operations/createinvoicecreditmemoresponse.md)>**


## createInvoicePayment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateInvoicePaymentCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createInvoicePayment({
  invoicePayment: {
    accountId: "ullam",
    currencyCode: CreateInvoicePaymentCurrencyCode.Kwd,
    customerId: "nam",
    linkedInvoices: [
      {
        allocatedAt: "officia",
        amount: 6720.41,
        id: "d4f9efc1-b451-42c1-8326-48dc2f615199",
      },
      {
        allocatedAt: "earum",
        amount: 7453.98,
        id: "fd0e9fe6-c632-4ca3-aed0-117996312fde",
      },
      {
        allocatedAt: "ipsa",
        amount: 2711.13,
        id: "771778ff-61d0-4174-b636-0a15db6a6606",
      },
      {
        allocatedAt: "voluptas",
        amount: 6145.28,
        id: "a1adeaab-5851-4d6c-a45b-08b61891baa0",
      },
    ],
    memo: "sapiente",
    totalAmount: 8892.88,
    txnDate: "architecto",
  },
}, "ade008e6-f8c5-4f35-8d8c-db5a34181430").then((res: CreateInvoicePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createCreateInvoicePaymentRequest`                                                                  | [shared.CreateCreateInvoicePaymentRequest](../../models/shared/createcreateinvoicepaymentrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accessToken`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The access token of the connection.                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateInvoicePaymentResponse](../../models/operations/createinvoicepaymentresponse.md)>**


## createItem

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateItemResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateItemType } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createItem({
  item: {
    additionalFields: {
      itemId: "architecto",
    },
    billItem: {
      accountId: "sit",
      description: "modi",
      unitPrice: "fugit",
    },
    invoiceItem: {
      accountId: "ab",
      description: "laudantium",
      unitPrice: "quae",
    },
    name: "Janis Hills V",
    type: CreateItemType.Unknown,
  },
}, "ce7e253b-6684-451c-ac6e-205e16deab3f").then((res: CreateItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `createCreateItemRequest`                                                        | [shared.CreateCreateItemRequest](../../models/shared/createcreateitemrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `accessToken`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | The access token of the connection.                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateItemResponse](../../models/operations/createitemresponse.md)>**


## createJournalEntry

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateJournalEntryResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateJournalEntryCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createJournalEntry({
  journalEntry: {
    currencyCode: CreateJournalEntryCurrencyCode.Xbb,
    currencyRate: 7592.83,
    lineItems: [
      {
        accountId: "nemo",
        description: "voluptate",
        taxRateId: "blanditiis",
        totalAmount: 6423.52,
      },
      {
        accountId: "voluptas",
        description: "numquam",
        taxRateId: "nemo",
        totalAmount: 5510.79,
      },
      {
        accountId: "eius",
        description: "aspernatur",
        taxRateId: "ducimus",
        totalAmount: 2005.16,
      },
    ],
    memo: "fuga",
    subsidiaryId: "laudantium",
    transactionDate: "incidunt",
  },
}, "18d16230-9fb0-4929-921a-efb9f58c4d86").then((res: CreateJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createCreateJournalEntryRequest`                                                                | [shared.CreateCreateJournalEntryRequest](../../models/shared/createcreatejournalentryrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `accessToken`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The access token of the connection.                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateJournalEntryResponse](../../models/operations/createjournalentryresponse.md)>**


## createPurchaseOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreatePurchaseOrderResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.createPurchaseOrder({
  purchaseOrder: {
    currency: "itaque",
    currencyRate: 4156.08,
    lineItems: [
      {
        description: "earum",
        item: "modi",
        quantity: 7221.84,
        taxRateId: "vero",
        unitAmount: 329.01,
      },
      {
        description: "ipsam",
        item: "vel",
        quantity: 13.83,
        taxRateId: "quasi",
        unitAmount: 2476.85,
      },
      {
        description: "maiores",
        item: "enim",
        quantity: 5752.13,
        taxRateId: "nulla",
        unitAmount: 6436.78,
      },
    ],
    memo: "esse",
    subsidiaryId: "nemo",
    txnDate: "reprehenderit",
    vendorId: "est",
  },
}, "59ecfef6-6ef1-4caa-b383-c2beb477373c").then((res: CreatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createCreatePurchaseOrderRequest`                                                                 | [shared.CreateCreatePurchaseOrderRequest](../../models/shared/createcreatepurchaseorderrequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `accessToken`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The access token of the connection.                                                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreatePurchaseOrderResponse](../../models/operations/createpurchaseorderresponse.md)>**


## createSalesOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateSalesOrderResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.createSalesOrder({
  salesOrder: {
    classId: "deleniti",
    currencyCode: "quibusdam",
    customerId: "iure",
    departmentId: "odit",
    issueDate: "voluptatibus",
    lineItems: [
      {
        description: "magnam",
        item: {
          id: "d1db1f2c-4310-4661-a963-49e1cf9e06e3",
          quantity: 6738.38,
          unitAmount: 2503.98,
        },
        taxRateId: "dolor",
      },
      {
        description: "iusto",
        item: {
          id: "000ae6b6-bc9b-48f7-99ea-c55a9741d311",
          quantity: 2124.34,
          unitAmount: 3220.17,
        },
        taxRateId: "qui",
      },
    ],
    locationId: "iste",
    memo: "ex",
    subsidiaryId: "nemo",
  },
}, "bb8a7202-6114-435e-939d-bc2259b1abda").then((res: CreateSalesOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `createCreateSalesOrderRequest`                                                              | [shared.CreateCreateSalesOrderRequest](../../models/shared/createcreatesalesorderrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `accessToken`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The access token of the connection.                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateSalesOrderResponse](../../models/operations/createsalesorderresponse.md)>**


## createVendor

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { CreateVendorResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateVendorAddressesType, CreateVendorCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createVendor({
  vendor: {
    addresses: [
      {
        address1: "placeat",
        address2: "sit",
        city: "Anastacioshire",
        country: "Belarus",
        postalCode: "52770",
        region: "autem",
        type: CreateVendorAddressesType.Shipping,
      },
      {
        address1: "dolores",
        address2: "assumenda",
        city: "Lake Rebastad",
        country: "Kuwait",
        postalCode: "88754-4375",
        region: "corporis",
        type: CreateVendorAddressesType.Unknown,
      },
      {
        address1: "voluptatibus",
        address2: "cum",
        city: "Albany",
        country: "Cape Verde",
        postalCode: "69078-1845",
        region: "odit",
        type: CreateVendorAddressesType.Billing,
      },
    ],
    contactName: "corporis",
    currencyCode: CreateVendorCurrencyCode.Nzd,
    email: "Dawn.Walker@hotmail.com",
    phone: "416.595.1222 x8647",
    registrationNumber: "necessitatibus",
    subsidiaries: [
      {
        id: "2b895c53-7c64-454e-bb0b-34896c3ca5ac",
        primary: false,
      },
      {
        id: "fbe2fd57-0757-4792-9177-deac646ecb57",
        primary: false,
      },
    ],
    taxNumber: "dolorem",
    vendorName: "modi",
    website: "ipsa",
  },
}, "9e3eb1e5-a2b1-42eb-87f1-16db99545fc9").then((res: CreateVendorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `createCreateVendorRequest`                                                          | [shared.CreateCreateVendorRequest](../../models/shared/createcreatevendorrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateVendorResponse](../../models/operations/createvendorresponse.md)>**


## getAccount

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAccountResponse } from "rutter-api/dist/sdk/models/operations";
import {
  AccountAccountType,
  AccountCategory,
  AccountCurrencyCode,
  AccountStatus,
  ForceFetch,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getAccount("5fa88970-e189-4dbb-b0fc-b33ea055b197", "eligendi", ForceFetch.False).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the underlying entity type.                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getAttachment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAttachmentResponse } from "rutter-api/dist/sdk/models/operations";
import { EntityType, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getAttachment("44e2f52d-82d3-4513-bb6f-48b656bcdb35", EntityType.JournalEntries, "voluptatibus", ForceFetch.True).then((res: GetAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `entityType`                                                                         | [shared.EntityType](../../models/shared/entitytype.md)                               | :heavy_check_mark:                                                                   | The entity type of the attachment.                                                   |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the underlying entity type.                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAttachmentResponse](../../models/operations/getattachmentresponse.md)>**


## getBill

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetBillResponse } from "rutter-api/dist/sdk/models/operations";
import { BillCurrencyCode, BillStatus, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getBill("e4b27537-a8cd-49e7-b19c-177d525f77b1", "14eeb52f-f785-4fc3-b814-d4c98e0c2bb8", ForceFetch.False).then((res: GetBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetBillResponse](../../models/operations/getbillresponse.md)>**


## getBillPayment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetBillPaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { BillPaymentCurrencyCode, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getBillPayment("eb75dad6-36c6-4005-83d8-bb31180f739a", "necessitatibus", ForceFetch.False).then((res: GetBillPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the bill payment.                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetBillPaymentResponse](../../models/operations/getbillpaymentresponse.md)>**


## getCompanyInfo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetCompanyInfoResponse } from "rutter-api/dist/sdk/models/operations";
import { CompanyInfo20230314CurrencyCode, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getCompanyInfo("e057eb80-9e28-4103-b1f3-981d4c700b60", ForceFetch.True).then((res: GetCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCompanyInfoResponse](../../models/operations/getcompanyinforesponse.md)>**


## getCustomer

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetAccountingCustomerResponse } from "rutter-api/dist/sdk/models/operations";
import {
  AccountingCustomer20230207AddressesType,
  AccountingCustomer20230207Status,
  ForceFetch,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getCustomer("f3c93c73-b9da-43f2-8eda-7e23f2257411", "faf4b754-4e47-42e8-8285-7a5b40463a7d", ForceFetch.True).then((res: GetAccountingCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAccountingCustomerResponse](../../models/operations/getaccountingcustomerresponse.md)>**


## getExpense

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetExpenseResponse } from "rutter-api/dist/sdk/models/operations";
import { ExpenseCurrencyCode, ExpenseExpenseType, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getExpense("75f1400e-764a-4d73-b4ec-1b781b36a080", "88d100ef-ada2-400e-b042-2eb2164cf9ab", ForceFetch.False).then((res: GetExpenseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetExpenseResponse](../../models/operations/getexpenseresponse.md)>**


## getInvoice

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, InvoiceLinkedPaymentsType, InvoiceStatus, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getInvoice("366c723f-fda9-4e06-bee4-825c1fc0e115", "c80bff91-8544-4ec4-adef-cce8f1977773", ForceFetch.False).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


## getInvoiceCreditMemo

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetInvoiceCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, InvoiceCreditMemoStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getInvoiceCreditMemo("63562a7b-408f-405e-bd48-fdaf313a1f5f", "d94259c0-b36f-425e-a944-f3b756c11f6c", ForceFetch.True).then((res: GetInvoiceCreditMemoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetInvoiceCreditMemoResponse](../../models/operations/getinvoicecreditmemoresponse.md)>**


## getInvoicePayment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, InvoicePaymentCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getInvoicePayment("7a512624-3835-4bbc-85a2-3a45cefc5fde", "10a0ce21-69e5-4100-99c6-dc5e34762799", ForceFetch.False).then((res: GetInvoicePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetInvoicePaymentResponse](../../models/operations/getinvoicepaymentresponse.md)>**


## getItem

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetItemResponse } from "rutter-api/dist/sdk/models/operations";
import { AccountingItemStatus, AccountingItemType, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getItem("fbbe6949-fb2b-4b4e-8ae6-c3d5db3adebd", "5daea4c5-06a8-4aa9-8c02-644cf5e9d9a4", ForceFetch.True).then((res: GetItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetItemResponse](../../models/operations/getitemresponse.md)>**


## getJournalEntry

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetJournalEntryResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, JournalEntryCurrencyCode, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getJournalEntry("78adc1ac-600d-4ec0-81ac-802e2ec09ff8", "f0f816ff-3477-4c13-a902-c14125b0960a", ForceFetch.True).then((res: GetJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetJournalEntryResponse](../../models/operations/getjournalentryresponse.md)>**


## getPurchaseOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetPurchaseOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  ForceFetch,
  Platform,
  PurchaseOrder20230314CurrencyCode,
  PurchaseOrder20230314Status,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getPurchaseOrder("68151a47-2af9-423c-9949-f83f350cf876", "ffb901c6-ecbb-44e2-83cf-789ffafeda53", ForceFetch.False).then((res: GetPurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetPurchaseOrderResponse](../../models/operations/getpurchaseorderresponse.md)>**


## getSalesOrder

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetSalesOrderResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, SalesOrder20230314CurrencyCode, SalesOrder20230314Status } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getSalesOrder("5ae6e0ac-184c-42b9-8247-c88373a40e19", "42f32e55-0557-456f-9d56-d0bd0af2dfe1", ForceFetch.True).then((res: GetSalesOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetSalesOrderResponse](../../models/operations/getsalesorderresponse.md)>**


## getSubsidiary

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetSubsidiaryResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, SubsidiaryStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getSubsidiary("db4f62cb-a3f8-4941-aebc-0b80a6924d3b", "2ecfcc8f-8950-410f-9dd3-d6fa1804e54c", ForceFetch.False).then((res: GetSubsidiaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetSubsidiaryResponse](../../models/operations/getsubsidiaryresponse.md)>**


## getTaxRate

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetTaxRateResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getTaxRate("2f168a36-3c88-473e-8843-80b1f6b8ca27", "5a60a04c-495c-4c69-9171-b51c1bdb1cf4", ForceFetch.False).then((res: GetTaxRateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTaxRateResponse](../../models/operations/gettaxrateresponse.md)>**


## getVendor

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { GetVendorResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, Platform, VendorAddressesType, VendorCurrencyCode, VendorStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.getVendor("888ebdfc-4ccc-4a99-bc7f-c0b2dce10873", "e42b006d-6788-478b-a858-1a58208c54fe", ForceFetch.False).then((res: GetVendorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The Rutter generated unique ID of the object.                                        |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetVendorResponse](../../models/operations/getvendorresponse.md)>**


## listAccounts

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListAccountsResponse } from "rutter-api/dist/sdk/models/operations";
import {
  AccountAccountType,
  AccountCategory,
  AccountCurrencyCode,
  AccountStatus,
  Expand,
  ForceFetch,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listAccounts({
  accessToken: "a9c95f2e-ac55-465d-b07c-fee81206e281",
  cursor: "nesciunt",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 673653,
  updatedAtMax: 303421,
  updatedAtMin: 644223,
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListAccountsRequest](../../models/operations/listaccountsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListAccountsResponse](../../models/operations/listaccountsresponse.md)>**


## listAttachments

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListAttachmentsResponse } from "rutter-api/dist/sdk/models/operations";
import { EntityType, Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listAttachments({
  accessToken: "41c480d3-f213-42af-8310-2d514f4cc6f1",
  cursor: "deleniti",
  entityType: EntityType.Invoices,
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 569834,
  updatedAtMax: 396610,
  updatedAtMin: 151385,
}).then((res: ListAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListAttachmentsRequest](../../models/operations/listattachmentsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListAttachmentsResponse](../../models/operations/listattachmentsresponse.md)>**


## listBalanceSheets

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListBalanceSheetsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBalanceSheets("1a6a4f77-a87e-4e3e-8be7-52c65b34418e", "dolor", ForceFetch.False, "libero").then((res: ListBalanceSheetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `endDate`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `startDate`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListBalanceSheetsResponse](../../models/operations/listbalancesheetsresponse.md)>**


## listBillCreditMemos

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListBillCreditMemosResponse } from "rutter-api/dist/sdk/models/operations";
import { BillCreditMemoCurrencyCode, BillCreditMemoStatus, Expand, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBillCreditMemos({
  accessToken: "91c8d975-e0e8-4419-98f8-4f144f3e07ed",
  cursor: "quisquam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 302878,
  updatedAtMax: 677895,
  updatedAtMin: 644827,
}).then((res: ListBillCreditMemosResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListBillCreditMemosRequest](../../models/operations/listbillcreditmemosrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListBillCreditMemosResponse](../../models/operations/listbillcreditmemosresponse.md)>**


## listBillPayments

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListBillPaymentsResponse } from "rutter-api/dist/sdk/models/operations";
import { BillPaymentCurrencyCode, Expand, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBillPayments({
  accessToken: "5f3cabd9-05a9-472e-8567-28227b2d3094",
  cursor: "esse",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 718119,
  updatedAtMax: 956545,
  updatedAtMin: 463050,
}).then((res: ListBillPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListBillPaymentsRequest](../../models/operations/listbillpaymentsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListBillPaymentsResponse](../../models/operations/listbillpaymentsresponse.md)>**


## listBills

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListBillsResponse } from "rutter-api/dist/sdk/models/operations";
import { BillCurrencyCode, BillStatus, Expand, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBills({
  accessToken: "a4fa87cf-535a-46fa-a54e-bf60c321f023",
  cursor: "rerum",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 345514,
  updatedAtMax: 836991,
  updatedAtMin: 186937,
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListBillsRequest](../../models/operations/listbillsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListBillsResponse](../../models/operations/listbillsresponse.md)>**


## listCashFlowStatements

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListCashFlowStatementsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listCashFlowStatements("367fe1a0-cc8d-4f79-b0a3-96d90c364b7c", "sunt", ForceFetch.True, "nulla").then((res: ListCashFlowStatementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `endDate`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `startDate`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListCashFlowStatementsResponse](../../models/operations/listcashflowstatementsresponse.md)>**


## listClasses

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListClassesResponse } from "rutter-api/dist/sdk/models/operations";
import { ClassStatus, Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listClasses({
  accessToken: "fbace188-b1c4-4ee2-88c6-ce611feeb1c7",
  cursor: "minus",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 823341,
  updatedAtMax: 738152,
  updatedAtMin: 382342,
}).then((res: ListClassesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListClassesRequest](../../models/operations/listclassesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListClassesResponse](../../models/operations/listclassesresponse.md)>**


## listCurrencies

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListCurrenciesResponse } from "rutter-api/dist/sdk/models/operations";
import { CurrencyCurrencyCode, Expand, ForceFetch, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listCurrencies({
  accessToken: "eec74378-ba25-4317-b47d-c915ad2caf5d",
  cursor: "quibusdam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 456371,
  updatedAtMax: 127499,
  updatedAtMin: 233708,
}).then((res: ListCurrenciesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListCurrenciesRequest](../../models/operations/listcurrenciesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListCurrenciesResponse](../../models/operations/listcurrenciesresponse.md)>**


## listCustomers

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListAccountingCustomersResponse } from "rutter-api/dist/sdk/models/operations";
import {
  AccountingCustomer20230207AddressesType,
  AccountingCustomer20230207Status,
  Expand,
  ForceFetch,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listCustomers({
  accessToken: "dc0f5ae2-f3a6-4b70-8878-756143f5a6c9",
  cursor: "laudantium",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 366147,
  updatedAtMax: 317632,
  updatedAtMin: 371213,
}).then((res: ListAccountingCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListAccountingCustomersRequest](../../models/operations/listaccountingcustomersrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListAccountingCustomersResponse](../../models/operations/listaccountingcustomersresponse.md)>**


## listDepartments

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListDepartmentsResponse } from "rutter-api/dist/sdk/models/operations";
import { DepartmentStatus, Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listDepartments({
  accessToken: "54080d40-bcac-4c6c-bd6b-5f3ec909304f",
  cursor: "omnis",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 425817,
  updatedAtMax: 740347,
  updatedAtMin: 663062,
}).then((res: ListDepartmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListDepartmentsRequest](../../models/operations/listdepartmentsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListDepartmentsResponse](../../models/operations/listdepartmentsresponse.md)>**


## listExpenses

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListExpensesResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand,
  ExpenseCurrencyCode,
  ExpenseExpenseType,
  ExpenseType,
  ForceFetch,
  Platform,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listExpenses({
  accessToken: "d2553819-b474-4b0e-920e-56248fff639a",
  cursor: "provident",
  expand: Expand.PlatformData,
  expenseType: ExpenseType.Expense,
  forceFetch: ForceFetch.True,
  limit: 650914,
  updatedAtMax: 721138,
  updatedAtMin: 827314,
}).then((res: ListExpensesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListExpensesRequest](../../models/operations/listexpensesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListExpensesResponse](../../models/operations/listexpensesresponse.md)>**


## listIncomeStatements

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListIncomeStatementsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch, IncomeStatementAccountingStandard } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listIncomeStatements("cab62676-696e-41ec-8022-1b335d89acb3", "debitis", ForceFetch.False, "asperiores").then((res: ListIncomeStatementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `endDate`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `startDate`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListIncomeStatementsResponse](../../models/operations/listincomestatementsresponse.md)>**


## listInvoiceCreditMemos

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListInvoiceCreditMemosResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, InvoiceCreditMemoStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoiceCreditMemos({
  accessToken: "da8d0c54-9ef0-4300-8978-a61fa1cf2068",
  cursor: "totam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 451807,
  updatedAtMax: 461754,
  updatedAtMin: 799830,
}).then((res: ListInvoiceCreditMemosResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListInvoiceCreditMemosRequest](../../models/operations/listinvoicecreditmemosrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListInvoiceCreditMemosResponse](../../models/operations/listinvoicecreditmemosresponse.md)>**


## listInvoicePayments

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListInvoicePaymentsResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, InvoicePaymentCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoicePayments({
  accessToken: "1ffc71dc-a163-4f2a-bc80-a97ff334cddf",
  cursor: "molestias",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 456222,
  updatedAtMax: 675755,
  updatedAtMin: 596185,
}).then((res: ListInvoicePaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListInvoicePaymentsRequest](../../models/operations/listinvoicepaymentsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListInvoicePaymentsResponse](../../models/operations/listinvoicepaymentsresponse.md)>**


## listInvoices

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListInvoicesResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, InvoiceLinkedPaymentsType, InvoiceStatus, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoices({
  accessToken: "e61876c6-ab21-4d29-9fc9-4d6fecd79939",
  cursor: "aperiam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 431258,
  updatedAtMax: 385291,
  updatedAtMin: 672627,
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)>**


## listItems

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListItemsResponse } from "rutter-api/dist/sdk/models/operations";
import { AccountingItemStatus, AccountingItemType, Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listItems({
  accessToken: "6d2d0003-5533-48ce-8086-fa21e9152cb3",
  cursor: "beatae",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 565845,
  updatedAtMax: 107042,
  updatedAtMin: 420233,
}).then((res: ListItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListItemsRequest](../../models/operations/listitemsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListItemsResponse](../../models/operations/listitemsresponse.md)>**


## listJournalEntries

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListJournalEntriesResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, JournalEntryCurrencyCode, Platform } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listJournalEntries({
  accessToken: "7b8e3c8d-b034-408d-ad36-4ffd455906d1",
  cursor: "quia",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 204144,
  updatedAtMax: 843659,
  updatedAtMin: 255264,
}).then((res: ListJournalEntriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListJournalEntriesRequest](../../models/operations/listjournalentriesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListJournalEntriesResponse](../../models/operations/listjournalentriesresponse.md)>**


## listLocations

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListLocationsResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, LocationStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listLocations({
  accessToken: "8e935c2c-9e81-4f30-be3e-43202d721657",
  cursor: "vel",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 24548,
  updatedAtMax: 426527,
  updatedAtMin: 388333,
}).then((res: ListLocationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListLocationsRequest](../../models/operations/listlocationsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListLocationsResponse](../../models/operations/listlocationsresponse.md)>**


## listPurchaseOrders

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListPurchaseOrdersResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand,
  ForceFetch,
  Platform,
  PurchaseOrder20230314CurrencyCode,
  PurchaseOrder20230314Status,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listPurchaseOrders({
  accessToken: "41870d9d-21f9-4ad0-b0c4-ecc11a083642",
  cursor: "natus",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 384273,
  updatedAtMax: 512370,
  updatedAtMin: 703407,
}).then((res: ListPurchaseOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPurchaseOrdersRequest](../../models/operations/listpurchaseordersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPurchaseOrdersResponse](../../models/operations/listpurchaseordersresponse.md)>**


## listReports

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListReportsResponse } from "rutter-api/dist/sdk/models/operations";
import { CompanyInfo20230207BaseCurrencyCode, Filter, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listReports("8502a55e-7f73-4bc8-85e3-20a319f4badf", Filter.Flat, ForceFetch.True).then((res: ListReportsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The access token of the connection.                                                  |
| `filter`                                                                             | [shared.Filter](../../models/shared/filter.md)                                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `forceFetch`                                                                         | [shared.ForceFetch](../../models/shared/forcefetch.md)                               | :heavy_minus_sign:                                                                   | Force a response even if the underlying connection hasn't finished the initial sync. |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListReportsResponse](../../models/operations/listreportsresponse.md)>**


## listSalesOrders

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListSalesOrdersResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand,
  ForceFetch,
  Platform,
  SalesOrder20230314CurrencyCode,
  SalesOrder20230314Status,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listSalesOrders({
  accessToken: "7c9a867b-c424-4266-a581-6ddca8ef51fc",
  cursor: "expedita",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 768244,
  updatedAtMax: 368599,
  updatedAtMin: 578081,
}).then((res: ListSalesOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListSalesOrdersRequest](../../models/operations/listsalesordersrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListSalesOrdersResponse](../../models/operations/listsalesordersresponse.md)>**


## listSubsidiaries

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListSubsidiariesResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch, Platform, SubsidiaryStatus } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listSubsidiaries({
  accessToken: "3ec12cda-ad0e-4c7a-bedb-d80df448a47f",
  cursor: "iste",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 581019,
  updatedAtMax: 15738,
  updatedAtMin: 771289,
}).then((res: ListSubsidiariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListSubsidiariesRequest](../../models/operations/listsubsidiariesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListSubsidiariesResponse](../../models/operations/listsubsidiariesresponse.md)>**


## listTaxRates

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListTaxRatesResponse } from "rutter-api/dist/sdk/models/operations";
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listTaxRates({
  accessToken: "58880983-dabf-49ef-bffd-d9f7f079af4d",
  cursor: "neque",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 448407,
  updatedAtMax: 152047,
  updatedAtMin: 250621,
}).then((res: ListTaxRatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListTaxRatesRequest](../../models/operations/listtaxratesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListTaxRatesResponse](../../models/operations/listtaxratesresponse.md)>**


## listVendors

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { ListVendorsResponse } from "rutter-api/dist/sdk/models/operations";
import {
  Expand,
  ForceFetch,
  Platform,
  VendorAddressesType,
  VendorCurrencyCode,
  VendorStatus,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listVendors({
  accessToken: "cdb0f4d2-8118-47d5-a844-eded85a9065e",
  cursor: "laboriosam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 505473,
  updatedAtMax: 697729,
  updatedAtMin: 848649,
}).then((res: ListVendorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListVendorsRequest](../../models/operations/listvendorsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListVendorsResponse](../../models/operations/listvendorsresponse.md)>**


## updateBill

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateBillResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.updateBill({
  bill: {
    documentNumber: "reiciendis",
    dueDate: "placeat",
    issueDate: "dolores",
    memo: "consequatur",
    vendorId: "nesciunt",
  },
}, "2b6c8799-23b7-4e13-984f-7ae12c6891f8", "2ce11571-7230-4537-bdcf-a89df975e356").then((res: UpdateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `createUpdateBillBodyRequest`                                                            | [shared.CreateUpdateBillBodyRequest](../../models/shared/createupdatebillbodyrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `accessToken`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | The access token of the connection.                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The Rutter generated unique ID of the object.                                            |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateBillResponse](../../models/operations/updatebillresponse.md)>**


## updateInvoice

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import { UpdateInvoiceCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.updateInvoice({
  invoice: {
    currencyCode: UpdateInvoiceCurrencyCode.Khr,
    customerId: "rem",
    dueDate: "aliquid",
    issueDate: "aperiam",
    lineItems: [
      {
        accountId: "fugit",
        description: "itaque",
        item: {
          id: "9c3ddc5f-111d-4ea1-826d-541a4d190feb",
          quantity: 1568.43,
          unitAmount: 1127.51,
        },
        totalAmount: 4878.39,
      },
      {
        accountId: "quas",
        description: "ipsa",
        item: {
          id: "bccc0dbb-ddb4-4847-88fb-4e391e6bc158",
          quantity: 7803.7,
          unitAmount: 2864.86,
        },
        totalAmount: 7738.89,
      },
      {
        accountId: "ut",
        description: "earum",
        item: {
          id: "54599ea3-4226-40e9-b200-ce78a1bd8fb7",
          quantity: 6353.14,
          unitAmount: 424.89,
        },
        totalAmount: 6813.36,
      },
    ],
  },
}, "116ce723-d409-47fa-b0e9-af725b291220", "30d83f5a-eb77-499d-a2e8-c1f8493825fd").then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createUpdateInvoiceRequest`                                                           | [shared.CreateUpdateInvoiceRequest](../../models/shared/createupdateinvoicerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `accessToken`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The access token of the connection.                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The Rutter generated unique ID of the object.                                          |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../models/operations/updateinvoiceresponse.md)>**


## updateInvoicePayment

### Example Usage

```typescript
import { Rutter } from "rutter-api";
import { UpdateInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.accounting.updateInvoicePayment({
  invoicePayment: {
    accountId: "porro",
    customerId: "quaerat",
    linkedInvoices: [
      {
        allocatedAt: "cumque",
        amount: 5526.87,
        id: "76c2c2df-b4cf-4c1c-b623-0f841fb1bd23",
      },
    ],
    memo: "hic",
    totalAmount: 8309.48,
    txnDate: "nam",
  },
}, "14db6be5-a685-4998-a22a-e20da16fc2b2", "71a289c5-7e85-44e9-8439-d22246569462").then((res: UpdateInvoicePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createUpdateInvoicePaymentRequest`                                                                  | [shared.CreateUpdateInvoicePaymentRequest](../../models/shared/createupdateinvoicepaymentrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accessToken`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The access token of the connection.                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The Rutter generated unique ID of the object.                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateInvoicePaymentResponse](../../models/operations/updateinvoicepaymentresponse.md)>**

