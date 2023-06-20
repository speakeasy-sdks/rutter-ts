# accounting

### Available Operations

* [createAccount](#createaccount)
* [createAttachment](#createattachment)
* [createBill](#createbill)
* [createBillCreditApplication](#createbillcreditapplication)
* [createBillCreditMemo](#createbillcreditmemo)
* [createBillPayment](#createbillpayment)
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
    accountType: CreateAccountAccountType.Unknown,
    additionalFields: {
      bankAccountNumber: "sapiente",
    },
    currencyCode: CreateAccountCurrencyCode.Bob,
    name: "Mike Nicolas",
    nominalCode: "mollitia",
    subsidiaryId: "occaecati",
  },
}, "46773925-1aa5-42c3-b5ad-019da1ffe78f").then((res: CreateAccountResponse) => {
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
  file: "ipsa",
  fileName: "omnis",
}, "7b0074f1-5471-4b5e-ae13-b99d488e1e91", EntityType.JournalEntries, "incidunt").then((res: CreateAttachmentResponse) => {
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
    accountId: "enim",
    currencyCode: CreateBillCurrencyCode.Afn,
    documentNumber: "est",
    dueDate: "quibusdam",
    issueDate: "explicabo",
    lineItems: [
      {
        accountId: "distinctio",
        classId: "quibusdam",
        customerId: "labore",
        departmentId: "modi",
        description: "qui",
        discountAmount: 3978.21,
        discountItemId: "cupiditate",
        item: {
          id: "802d502a-94bb-44f6-bc96-9e9a3efa77df",
          quantity: 6994.79,
          unitAmount: 1162.02,
        },
        locationId: "magnam",
        taxRateId: "cumque",
        totalAmount: 8137.98,
      },
      {
        accountId: "ea",
        classId: "aliquid",
        customerId: "laborum",
        departmentId: "accusamus",
        description: "non",
        discountAmount: 5812.73,
        discountItemId: "enim",
        item: {
          id: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
          quantity: 923.73,
          unitAmount: 5699.65,
        },
        locationId: "ullam",
        taxRateId: "provident",
        totalAmount: 5518.16,
      },
      {
        accountId: "sint",
        classId: "accusantium",
        customerId: "mollitia",
        departmentId: "reiciendis",
        description: "mollitia",
        discountAmount: 3209.97,
        discountItemId: "eum",
        item: {
          id: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
          quantity: 8480.09,
          unitAmount: 8649.34,
        },
        locationId: "maxime",
        taxRateId: "ea",
        totalAmount: 5691.01,
      },
    ],
    linkedPurchaseOrders: [
      {
        id: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
      },
    ],
    memo: "dolores",
    subsidiaryId: "minus",
    vendorId: "quam",
  },
}, "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486").then((res: CreateBillResponse) => {
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
      accountId: "dolorem",
    },
    billCreditMemoId: "dolorem",
    currencyCode: CreateBillCreditApplicationCurrencyCode.Cve,
    linkedBills: [
      {
        allocatedAmount: 2187.49,
        id: "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
      },
    ],
    memo: "omnis",
    transactionDate: "necessitatibus",
    vendorId: "distinctio",
  },
}, "f737ae42-03ce-45e6-a95d-8a0d446ce2af").then((res: CreateBillCreditApplicationResponse) => {
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
    accountId: "esse",
    currencyCode: CreateBillCreditMemoCurrencyCode.Rub,
    issueDate: "iusto",
    lineItems: [
      {
        accountId: "quisquam",
        description: "tenetur",
        totalAmount: 2294.42,
      },
    ],
    vendorId: "tempore",
  },
}, "e453f870-b326-4b5a-b342-9cdb1a8422bb").then((res: CreateBillCreditMemoResponse) => {
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
    accountId: "aliquid",
    currencyCode: CreateBillPaymentCurrencyCode.Lak,
    documentNumber: "molestias",
    linkedBills: [
      {
        allocatedAmount: 1832.8,
        allocatedDate: "neque",
        id: "22715bf0-cbb1-4e31-b8b9-0f3443a1108e",
      },
      {
        allocatedAmount: 92.4,
        allocatedDate: "est",
        id: "dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7",
      },
      {
        allocatedAmount: 2930.2,
        allocatedDate: "quibusdam",
        id: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
      },
      {
        allocatedAmount: 4061.2,
        allocatedDate: "nulla",
        id: "9f5fce6c-5561-446c-be25-0fb008c42e14",
      },
    ],
    memo: "et",
    transactionDate: "dolorum",
    vendorId: "laborum",
  },
}, "c366c8dd-6b14-4429-8747-4778a7bd466d").then((res: CreateBillPaymentResponse) => {
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
    accountId: "eos",
    additionalFields: {
      placeOfSupply: CreateExpenseAdditionalFieldsPlaceOfSupply.UmmAlQuwain,
      taxInclusive: false,
      taxTreatment: CreateExpenseAdditionalFieldsTaxTreatment.DzVatRegistered,
    },
    currencyCode: CreateExpenseCurrencyCode.Bif,
    currencyRate: 568.48,
    expenseType: CreateExpenseExpenseType.Refund,
    lineItems: [
      {
        accountId: "neque",
        classId: "quo",
        customerId: "illum",
        departmentId: "quo",
        description: "fuga",
        locationId: "eius",
        taxRateId: "eos",
        totalAmount: 3738.13,
      },
      {
        accountId: "ab",
        classId: "cupiditate",
        customerId: "consequatur",
        departmentId: "tempora",
        description: "debitis",
        locationId: "ipsam",
        taxRateId: "aspernatur",
        totalAmount: 1970.54,
      },
      {
        accountId: "quo",
        classId: "esse",
        customerId: "recusandae",
        departmentId: "aperiam",
        description: "distinctio",
        locationId: "quod",
        taxRateId: "dignissimos",
        totalAmount: 769.56,
      },
    ],
    memo: "nihil",
    subsidiaryId: "totam",
    transactionDate: "accusamus",
    vendorId: "aliquam",
  },
}, "796f2a70-c688-4282-aa48-2562f222e981").then((res: CreateExpenseResponse) => {
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
    currencyCode: CreateInvoiceCurrencyCode.Kzt,
    customerId: "eveniet",
    dueDate: "accusamus",
    issueDate: "veritatis",
    lineItems: [
      {
        accountId: "quod",
        description: "nam",
        item: {
          id: "e61e6b7b-95bc-40ab-bc20-c4f3789fd871",
          quantity: 9518.75,
          unitAmount: 6216.79,
        },
        totalAmount: 5757.51,
      },
      {
        accountId: "pariatur",
        description: "possimus",
        item: {
          id: "2efd121a-a6f1-4e67-8bdb-04f15756082d",
          quantity: 4012.59,
          unitAmount: 5362.75,
        },
        totalAmount: 9292.92,
      },
    ],
  },
}, "a19f1d17-0513-439d-8808-6a1840394c26").then((res: CreateInvoiceResponse) => {
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
    accountId: "aut",
    currencyCode: CreateInvoiceCreditApplicationCurrencyCode.Ltl,
    customerId: "dicta",
    invoiceCreditMemoId: "maiores",
    linkedInvoices: [
      {
        allocatedAmount: 2446.51,
        id: "f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6",
      },
      {
        allocatedAmount: 4976.78,
        id: "864dbb67-5fd5-4e60-b375-ed4f6fbee41f",
      },
      {
        allocatedAmount: 2415.45,
        id: "3317fe35-b60e-4b1e-a426-555ba3c28744",
      },
    ],
    memo: "officiis",
    transactionDate: "temporibus",
  },
}, "53b88f3a-8d8f-45c0-b2f2-fb7b194a276b").then((res: CreateInvoiceCreditApplicationResponse) => {
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
    accountId: "explicabo",
    currencyCode: "voluptas",
    customerId: "unde",
    issueDate: "architecto",
    lineItems: [
      {
        accountId: "sapiente",
        description: "debitis",
        item: {
          id: "1f08f429-4e36-498f-847f-603e8b445e80",
          quantity: 7505.95,
          unitAmount: "error",
        },
        totalAmount: "veniam",
      },
      {
        accountId: "minima",
        description: "recusandae",
        item: {
          id: "fd20e457-e185-48b6-a89f-be3a5aa8e482",
          quantity: 2826.99,
          unitAmount: "fugiat",
        },
        totalAmount: "voluptatem",
      },
    ],
  },
}, "ab407508-8e51-4862-865e-904f3b1194b8").then((res: CreateInvoiceCreditMemoResponse) => {
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
    accountId: "laborum",
    currencyCode: CreateInvoicePaymentCurrencyCode.Sek,
    customerId: "tenetur",
    linkedInvoices: [
      {
        allocatedAt: "alias",
        amount: 2270.84,
        id: "a79f9dfe-0ab7-4da8-a50c-e187f86bc173",
      },
      {
        allocatedAt: "assumenda",
        amount: 4103.01,
        id: "89eee952-6f8d-4986-a881-ead4f0e10125",
      },
    ],
    memo: "laboriosam",
    totalAmount: 2465.35,
    txnDate: "a",
  },
}, "94e29e97-3e92-42a5-ba15-be3e060807e2").then((res: CreateInvoicePaymentResponse) => {
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
      itemId: "cum",
    },
    billItem: {
      accountId: "iure",
      description: "necessitatibus",
      unitPrice: "ratione",
    },
    invoiceItem: {
      accountId: "laborum",
      description: "distinctio",
      unitPrice: "voluptatum",
    },
    name: "Jim Hammes II",
    type: CreateItemType.Service,
  },
}, "7a60ff2a-54a3-41e9-8764-a3e865e7956f").then((res: CreateItemResponse) => {
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
    currencyCode: CreateJournalEntryCurrencyCode.Nad,
    currencyRate: 1334.39,
    lineItems: [
      {
        accountId: "quasi",
        description: "animi",
        taxRateId: "nostrum",
        totalAmount: 6523.09,
      },
      {
        accountId: "provident",
        description: "possimus",
        taxRateId: "animi",
        totalAmount: 4027.67,
      },
    ],
    memo: "aliquid",
    subsidiaryId: "accusantium",
    transactionDate: "repellat",
  },
}, "f57bfaad-4f9e-4fc1-b451-2c1032648dc2").then((res: CreateJournalEntryResponse) => {
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
    currency: "sapiente",
    currencyRate: 4332.79,
    lineItems: [
      {
        description: "minima",
        item: "beatae",
        quantity: 5834.04,
        taxRateId: "provident",
        unitAmount: 9364.69,
      },
    ],
    memo: "soluta",
    subsidiaryId: "hic",
    txnDate: "illum",
    vendorId: "eaque",
  },
}, "e9fe6c63-2ca3-4aed-8117-996312fde047").then((res: CreatePurchaseOrderResponse) => {
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
    classId: "molestiae",
    currencyCode: "dicta",
    customerId: "iusto",
    departmentId: "esse",
    issueDate: "praesentium",
    lineItems: [
      {
        description: "reiciendis",
        item: {
          id: "61d01747-6360-4a15-9b6a-660659a1adea",
          quantity: 6717.94,
          unitAmount: 7263.43,
        },
        taxRateId: "ad",
      },
      {
        description: "deleniti",
        item: {
          id: "51d6c645-b08b-4618-91ba-a0fe1ade008e",
          quantity: 4042.44,
          unitAmount: 9583.08,
        },
        taxRateId: "rem",
      },
      {
        description: "minus",
        item: {
          id: "5f350d8c-db5a-4341-8143-010421813d52",
          quantity: 551.07,
          unitAmount: 5596.82,
        },
        taxRateId: "eveniet",
      },
      {
        description: "impedit",
        item: {
          id: "e7e253b6-6845-41c6-86e2-05e16deab3fe",
          quantity: 7592.83,
          unitAmount: 5796.81,
        },
        taxRateId: "nemo",
      },
    ],
    locationId: "voluptate",
    memo: "blanditiis",
    subsidiaryId: "officia",
  },
}, "64584273-a841-48d1-a230-9fb0929921ae").then((res: CreateSalesOrderResponse) => {
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
        address1: "distinctio",
        address2: "omnis",
        city: "Framingham",
        country: "Liechtenstein",
        postalCode: "38549-4592",
        region: "nam",
        type: CreateVendorAddressesType.Unknown,
      },
      {
        address1: "voluptatem",
        address2: "ipsam",
        city: "Abbieland",
        country: "Ecuador",
        postalCode: "35864-3463",
        region: "sint",
        type: CreateVendorAddressesType.Unknown,
      },
      {
        address1: "impedit",
        address2: "hic",
        city: "Yakima",
        country: "India",
        postalCode: "89076",
        region: "laborum",
        type: CreateVendorAddressesType.Billing,
      },
      {
        address1: "velit",
        address2: "atque",
        city: "Port Cassandre",
        country: "Saint Helena",
        postalCode: "72441-4275",
        region: "quibusdam",
        type: CreateVendorAddressesType.Shipping,
      },
    ],
    contactName: "odit",
    currencyCode: CreateVendorCurrencyCode.Xts,
    email: "Elisabeth81@yahoo.com",
    phone: "291.832.0044 x1854",
    registrationNumber: "velit",
    subsidiaries: [
      {
        id: "9e1cf9e0-6e3a-4437-800a-e6b6bc9b8f75",
        primary: false,
      },
      {
        id: "9eac55a9-741d-4311-b529-65bb8a720261",
        primary: false,
      },
    ],
    taxNumber: "quae",
    vendorName: "modi",
    website: "neque",
  },
}, "5e139dbc-2259-4b1a-bda8-c070e1084cb0").then((res: CreateVendorResponse) => {
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

sdk.accounting.getAccount("672d1ad8-79ee-4b96-a5b8-5efbd02bae0b", "officiis", ForceFetch.True).then((res: GetAccountResponse) => {
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

sdk.accounting.getAttachment("d782259e-3ea4-4b51-97f9-2443da7ce52b", EntityType.Invoices, "cupiditate", ForceFetch.True).then((res: GetAttachmentResponse) => {
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

sdk.accounting.getBill("c537c645-4efb-40b3-8896-c3ca5acfbe2f", "d5707577-9291-477d-aac6-46ecb573409e", ForceFetch.True).then((res: GetBillResponse) => {
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

sdk.accounting.getBillPayment("eb1e5a2b-12eb-407f-916d-b99545fc95fa", "quas", ForceFetch.False).then((res: GetBillPaymentResponse) => {
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

sdk.accounting.getCompanyInfo("970e189d-bb30-4fcb-b3ea-055b197cd44e", ForceFetch.True).then((res: GetCompanyInfoResponse) => {
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

sdk.accounting.getCustomer("f52d82d3-513b-4b6f-88b6-56bcdb35ff2e", "4b27537a-8cd9-4e73-99c1-77d525f77b11", ForceFetch.True).then((res: GetAccountingCustomerResponse) => {
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

sdk.accounting.getExpense("eeb52ff7-85fc-4378-94d4-c98e0c2bb89e", "b75dad63-6c60-4050-bd8b-b31180f739ae", ForceFetch.False).then((res: GetExpenseResponse) => {
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

sdk.accounting.getInvoice("e057eb80-9e28-4103-b1f3-981d4c700b60", "7f3c93c7-3b9d-4a3f-aced-a7e23f225741", ForceFetch.True).then((res: GetInvoiceResponse) => {
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

sdk.accounting.getInvoiceCreditMemo("faf4b754-4e47-42e8-8285-7a5b40463a7d", "575f1400-e764-4ad7-b34e-c1b781b36a08", ForceFetch.True).then((res: GetInvoiceCreditMemoResponse) => {
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

sdk.accounting.getInvoicePayment("88d100ef-ada2-400e-b042-2eb2164cf9ab", "8366c723-ffda-49e0-abee-4825c1fc0e11", ForceFetch.True).then((res: GetInvoicePaymentResponse) => {
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

sdk.accounting.getItem("c80bff91-8544-4ec4-adef-cce8f1977773", "e63562a7-b408-4f05-a3d4-8fdaf313a1f5", ForceFetch.False).then((res: GetItemResponse) => {
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

sdk.accounting.getJournalEntry("d94259c0-b36f-425e-a944-f3b756c11f6c", "37a51262-4383-45bb-805a-23a45cefc5fd", ForceFetch.False).then((res: GetJournalEntryResponse) => {
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

sdk.accounting.getPurchaseOrder("10a0ce21-69e5-4100-99c6-dc5e34762799", "bfbbe694-9fb2-4bb4-acae-6c3d5db3adeb", ForceFetch.False).then((res: GetPurchaseOrderResponse) => {
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

sdk.accounting.getSalesOrder("5daea4c5-06a8-4aa9-8c02-644cf5e9d9a4", "578adc1a-c600-4dec-801a-c802e2ec09ff", ForceFetch.False).then((res: GetSalesOrderResponse) => {
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

sdk.accounting.getSubsidiary("f0f816ff-3477-4c13-a902-c14125b0960a", "668151a4-72af-4923-8594-9f83f350cf87", ForceFetch.True).then((res: GetSubsidiaryResponse) => {
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

sdk.accounting.getTaxRate("ffb901c6-ecbb-44e2-83cf-789ffafeda53", "e5ae6e0a-c184-4c2b-9c24-7c88373a40e1", ForceFetch.False).then((res: GetTaxRateResponse) => {
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

sdk.accounting.getVendor("42f32e55-0557-456f-9d56-d0bd0af2dfe1", "3db4f62c-ba3f-4894-9aeb-c0b80a6924d3", ForceFetch.False).then((res: GetVendorResponse) => {
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
  accessToken: "2ecfcc8f-8950-410f-9dd3-d6fa1804e54c",
  cursor: "quas",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 982445,
  updatedAtMax: 81581,
  updatedAtMin: 400448,
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
  accessToken: "8a363c88-73e4-4843-80b1-f6b8ca275a60",
  cursor: "fuga",
  entityType: EntityType.Bills,
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 802734,
  updatedAtMax: 303292,
  updatedAtMin: 613702,
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

sdk.accounting.listBalanceSheets("5cc69917-1b51-4c1b-9b1c-f4b888ebdfc4", "quod", ForceFetch.False, "porro").then((res: ListBalanceSheetsResponse) => {
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
  accessToken: "a99bc7fc-0b2d-4ce1-8873-e42b006d6788",
  cursor: "nihil",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 697994,
  updatedAtMax: 645544,
  updatedAtMin: 541822,
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
  accessToken: "581a5820-8c54-4fef-a9c9-5f2eac5565d3",
  cursor: "sit",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 794306,
  updatedAtMax: 990369,
  updatedAtMin: 924293,
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
  accessToken: "e81206e2-813f-4a4a-81c4-80d3f2132af0",
  cursor: "dolorem",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 44929,
  updatedAtMax: 134173,
  updatedAtMin: 860362,
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

sdk.accounting.listCashFlowStatements("514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e", "eius", ForceFetch.False, "itaque").then((res: ListCashFlowStatementsResponse) => {
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
  accessToken: "752c65b3-4418-4e3b-b91c-8d975e0e8419",
  cursor: "illum",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 949370,
  updatedAtMax: 537946,
  updatedAtMin: 264958,
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
  accessToken: "f144f3e0-7edc-4c4a-a5f3-cabd905a972e",
  cursor: "accusantium",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 392752,
  updatedAtMax: 474185,
  updatedAtMin: 154130,
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
  accessToken: "8227b2d3-0947-40bf-ba4f-a87cf535a6fa",
  cursor: "recusandae",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 252567,
  updatedAtMax: 900368,
  updatedAtMin: 719469,
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
  accessToken: "f60c321f-023b-475d-a367-fe1a0cc8df79",
  cursor: "sapiente",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 627717,
  updatedAtMax: 197982,
  updatedAtMin: 590998,
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
  accessToken: "6d90c364-b7c1-45df-bace-188b1c4ee2c8",
  cursor: "impedit",
  expand: Expand.PlatformData,
  expenseType: ExpenseType.Expense,
  forceFetch: ForceFetch.False,
  limit: 923159,
  updatedAtMax: 404643,
  updatedAtMin: 105094,
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

sdk.accounting.listIncomeStatements("1feeb1c7-cbdb-46ee-8743-78ba25317747", "nulla", ForceFetch.False, "cupiditate").then((res: ListIncomeStatementsResponse) => {
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
  accessToken: "15ad2caf-5dd6-4723-9c0f-5ae2f3a6b700",
  cursor: "laudantium",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 546868,
  updatedAtMax: 474885,
  updatedAtMin: 340101,
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
  accessToken: "6143f5a6-c98b-4555-9408-0d40bcacc6cb",
  cursor: "fugiat",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 720319,
  updatedAtMax: 315387,
  updatedAtMin: 979011,
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
  accessToken: "3ec90930-4f92-46ba-9255-3819b474b0ed",
  cursor: "fugit",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 919171,
  updatedAtMax: 360635,
  updatedAtMin: 411626,
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
  accessToken: "248fff63-9a91-40ab-9cab-62676696e1ec",
  cursor: "eaque",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 181622,
  updatedAtMax: 163263,
  updatedAtMin: 112224,
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
  accessToken: "b335d89a-cb3e-4cfd-a8d0-c549ef030049",
  cursor: "quam",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 638363,
  updatedAtMax: 406493,
  updatedAtMin: 101770,
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
  accessToken: "fa1cf206-88f7-47c1-bfc7-1dca163f2a3c",
  cursor: "voluptatum",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 671690,
  updatedAtMax: 609172,
  updatedAtMin: 470321,
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
  accessToken: "ff334cdd-f857-4a9e-a187-6c6ab21d29df",
  cursor: "impedit",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 281454,
  updatedAtMax: 814585,
  updatedAtMin: 377269,
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

sdk.accounting.listReports("fecd7993-9006-46a6-92d0-00355338cec0", Filter.Flat, ForceFetch.True).then((res: ListReportsResponse) => {
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
  accessToken: "fa21e915-2cb3-4119-967b-8e3c8db03408",
  cursor: "repellendus",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 843679,
  updatedAtMax: 231255,
  updatedAtMin: 377680,
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
  accessToken: "4ffd4559-06d1-4263-948e-935c2c9e81f3",
  cursor: "consequatur",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 898155,
  updatedAtMax: 196000,
  updatedAtMin: 925847,
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
  accessToken: "43202d72-1657-4650-a641-870d9d21f9ad",
  cursor: "consequatur",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 39069,
  updatedAtMax: 761927,
  updatedAtMin: 269731,
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
  accessToken: "ecc11a08-3642-4906-8b85-02a55e7f73bc",
  cursor: "praesentium",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 370052,
  updatedAtMax: 887132,
  updatedAtMin: 196497,
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
    documentNumber: "magni",
    dueDate: "voluptatem",
    issueDate: "est",
    memo: "amet",
    vendorId: "veritatis",
  },
}, "9f4badf9-47c9-4a86-bbc4-2426665816dd", "ca8ef51f-cb4c-4593-ac12-cdaad0ec7afe").then((res: UpdateBillResponse) => {
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
    currencyCode: UpdateInvoiceCurrencyCode.Ttd,
    customerId: "nobis",
    dueDate: "at",
    issueDate: "molestias",
    lineItems: [
      {
        accountId: "temporibus",
        description: "tenetur",
        item: {
          id: "448a47f9-390c-4588-8098-3dabf9ef3ffd",
          quantity: 8301.49,
          unitAmount: 6077.42,
        },
        totalAmount: 9666.52,
      },
    ],
  },
}, "7f079af4-d357-424c-9b0f-4d281187d568", "44eded85-a906-45e6-a8bd-fc2032b6c879").then((res: UpdateInvoiceResponse) => {
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
    accountId: "omnis",
    customerId: "fugit",
    linkedInvoices: [
      {
        allocatedAt: "quidem",
        amount: 4766.14,
        id: "e13584f7-ae12-4c68-91f8-2ce115717230",
      },
    ],
    memo: "exercitationem",
    totalAmount: 2261.43,
    txnDate: "voluptate",
  },
}, "7dcfa89d-f975-4e35-a686-092e9c3ddc5f", "111dea10-26d5-441a-8d19-0feb21780bcc").then((res: UpdateInvoicePaymentResponse) => {
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

