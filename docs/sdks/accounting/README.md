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
import { CreateAccountRequest, CreateAccountResponse } from "rutter-api/dist/sdk/models/operations";
import {
  AccountType,
  CreateAccount,
  CreateAccountAdditionalFields,
  CreateCreateAccountRequest,
  CurrencyCode,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateAccountRequest: CreateCreateAccountRequest = {
  account: {
    accountType: AccountType.AccountsPayable,
    additionalFields: {
      bankAccountNumber: "00000-00-00000",
    },
    currencyCode: CurrencyCode.Usd,
    name: "Acme Corp.",
    nominalCode: "1001",
    subsidiaryId: "00000000-0000-0000-0000-000000000000",
  },
};
const accessToken: string = "a05dfc2d-df7c-4c78-8a1b-a928fc816742";

sdk.accounting.createAccount(createCreateAccountRequest, accessToken).then((res: CreateAccountResponse) => {
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
import { CreateAttachmentRequest, CreateAttachmentResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateAttachmentBody, EntityType } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createAttachmentBody: CreateAttachmentBody = {
  file: "impedit",
  fileName: "cum",
};
const accessToken: string = "73920592-9396-4fea-b596-eb10faaa2352";
const entityType: EntityType = EntityType.JournalEntries;
const id: string = "enim";

sdk.accounting.createAttachment(createAttachmentBody, accessToken, entityType, id).then((res: CreateAttachmentResponse) => {
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
import { CreateBillRequest, CreateBillResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateBill,
  CreateBillCurrencyCode,
  CreateBillLineItems,
  CreateBillLineItemsItem,
  CreateBillLinkedPurchaseOrders,
  CreateCreateBillRequest,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateBillRequest: CreateCreateBillRequest = {
  bill: {
    accountId: "omnis",
    currencyCode: CreateBillCurrencyCode.Idr,
    documentNumber: "minima",
    dueDate: "excepturi",
    issueDate: "accusantium",
    lineItems: [
      {
        accountId: "culpa",
        classId: "doloribus",
        customerId: "sapiente",
        departmentId: "architecto",
        description: "mollitia",
        discountAmount: 2088.76,
        discountItemId: "culpa",
        item: {
          id: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
          quantity: 8781.94,
          unitAmount: 4686.51,
        },
        locationId: "praesentium",
        taxRateId: "voluptatibus",
        totalAmount: 557.14,
      },
      {
        accountId: "omnis",
        classId: "voluptate",
        customerId: "cum",
        departmentId: "perferendis",
        description: "doloremque",
        discountAmount: 4417.11,
        discountItemId: "ut",
        item: {
          id: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
          quantity: 1317.97,
          unitAmount: 6471.74,
        },
        locationId: "distinctio",
        taxRateId: "quibusdam",
        totalAmount: 2894.06,
      },
    ],
    linkedPurchaseOrders: [
      {
        id: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
      },
      {
        id: "7dfb14cd-66ae-4395-afb9-ba88f3a66997",
      },
    ],
    memo: "perferendis",
    subsidiaryId: "nihil",
    vendorId: "magnam",
  },
};
const accessToken: string = "ba4469b6-e214-4195-9890-afa563e2516f";

sdk.accounting.createBill(createCreateBillRequest, accessToken).then((res: CreateBillResponse) => {
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
import { CreateBillCreditApplicationRequest, CreateBillCreditApplicationResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateBillCreditApplication,
  CreateBillCreditApplicationAdditionalFields,
  CreateBillCreditApplicationCurrencyCode,
  CreateBillCreditApplicationLinkedBills,
  CreateCreateBillCreditApplicationRequest,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateBillCreditApplicationRequest: CreateCreateBillCreditApplicationRequest = {
  billCreditApplication: {
    additionalFields: {
      accountId: "debitis",
    },
    billCreditMemoId: "eius",
    currencyCode: CreateBillCreditApplicationCurrencyCode.Try,
    linkedBills: [
      {
        allocatedAmount: 7038.89,
        id: "711e5b7f-d2ed-4028-921c-ddc692601fb5",
      },
      {
        allocatedAmount: 4535.43,
        id: "6b0d5f0d-30c5-4fbb-a587-053202c73d5f",
      },
      {
        allocatedAmount: 9280.82,
        id: "9b90c289-09b3-4fe4-9a8d-9cbf48633323",
      },
    ],
    memo: "hic",
    transactionDate: "excepturi",
    vendorId: "cum",
  },
};
const accessToken: string = "77f3a410-0674-4ebf-a928-0d1ba77a89eb";

sdk.accounting.createBillCreditApplication(createCreateBillCreditApplicationRequest, accessToken).then((res: CreateBillCreditApplicationResponse) => {
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
import { CreateBillCreditMemoRequest, CreateBillCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateBillCreditMemo,
  CreateBillCreditMemoCurrencyCode,
  CreateBillCreditMemoLineItems,
  CreateCreateBillCreditMemoRequest,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateBillCreditMemoRequest: CreateCreateBillCreditMemoRequest = {
  billCreditMemo: {
    accountId: "asperiores",
    currencyCode: CreateBillCreditMemoCurrencyCode.Lbp,
    issueDate: "ipsum",
    lineItems: [
      {
        accountId: "id",
        description: "saepe",
        totalAmount: 2633.22,
      },
      {
        accountId: "aspernatur",
        description: "perferendis",
        totalAmount: 2292.19,
      },
    ],
    vendorId: "optio",
  },
};
const accessToken: string = "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45";

sdk.accounting.createBillCreditMemo(createCreateBillCreditMemoRequest, accessToken).then((res: CreateBillCreditMemoResponse) => {
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
import { CreateBillPaymentRequest, CreateBillPaymentResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateBillPayment,
  CreateBillPaymentCurrencyCode,
  CreateBillPaymentLinkedBills,
  CreateCreateBillPaymentRequest,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateBillPaymentRequest: CreateCreateBillPaymentRequest = {
  billPayment: {
    accountId: "dolorem",
    currencyCode: CreateBillPaymentCurrencyCode.Xpd,
    documentNumber: "totam",
    linkedBills: [
      {
        allocatedAmount: 256.62,
        allocatedDate: "expedita",
        id: "326b5a73-429c-4db1-a842-2bb679d23227",
      },
      {
        allocatedAmount: 1248.33,
        allocatedDate: "ullam",
        id: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
      },
    ],
    memo: "ut",
    transactionDate: "facilis",
    vendorId: "cupiditate",
  },
};
const accessToken: string = "21879fce-953f-473e-b7fb-c7abd74dd39c";

sdk.accounting.createBillPayment(createCreateBillPaymentRequest, accessToken).then((res: CreateBillPaymentResponse) => {
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
import { CreateAccountingCustomerRequest, CreateAccountingCustomerResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateAccountingCustomer, CreateCreateAccountingCustomerRequest } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateAccountingCustomerRequest: CreateCreateAccountingCustomerRequest = {
  customer: {
    contactName: "aut",
    customerName: "voluptatibus",
    email: "Saige_Cormier98@yahoo.com",
    phone: "840.723.4148 x214",
    subsidiaryId: "laudantium",
  },
};
const accessToken: string = "13f16d9f-5fce-46c5-9614-6c3e250fb008";

sdk.accounting.createCustomer(createCreateAccountingCustomerRequest, accessToken).then((res: CreateAccountingCustomerResponse) => {
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
import { CreateExpenseRequest, CreateExpenseResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateExpenseRequest,
  CreateExpense,
  CreateExpenseAdditionalFields,
  CreateExpenseAdditionalFieldsPlaceOfSupply,
  CreateExpenseAdditionalFieldsTaxTreatment,
  CreateExpenseCurrencyCode,
  CreateExpenseExpenseType,
  CreateExpenseLineItems,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateExpenseRequest: CreateCreateExpenseRequest = {
  expense: {
    accountId: "impedit",
    additionalFields: {
      placeOfSupply: CreateExpenseAdditionalFieldsPlaceOfSupply.Fujairah,
      taxInclusive: false,
      taxTreatment: CreateExpenseAdditionalFieldsTaxTreatment.VatNotRegistered,
    },
    currencyCode: CreateExpenseCurrencyCode.Vuv,
    currencyRate: 795.22,
    expenseType: CreateExpenseExpenseType.Expense,
    lineItems: [
      {
        accountId: "dolorum",
        classId: "laborum",
        customerId: "placeat",
        departmentId: "velit",
        description: "eum",
        locationId: "autem",
        taxRateId: "nobis",
        totalAmount: 5573.69,
      },
    ],
    memo: "assumenda",
    subsidiaryId: "nulla",
    transactionDate: "voluptas",
    vendorId: "libero",
  },
};
const accessToken: string = "14429074-7477-48a7-bd46-6d28c10ab3cd";

sdk.accounting.createExpense(createCreateExpenseRequest, accessToken).then((res: CreateExpenseResponse) => {
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
import { CreateInvoiceRequest, CreateInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateInvoiceRequest,
  CreateInvoice,
  CreateInvoiceCurrencyCode,
  CreateInvoiceLineItems,
  CreateInvoiceLineItemsItem,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateInvoiceRequest: CreateCreateInvoiceRequest = {
  invoice: {
    currencyCode: CreateInvoiceCurrencyCode.Thb,
    customerId: "fuga",
    dueDate: "eius",
    issueDate: "eos",
    lineItems: [
      {
        accountId: "ab",
        description: "cupiditate",
        item: {
          id: "04e523c7-e0bc-4717-8e47-96f2a70c6882",
          quantity: 5361.78,
          unitAmount: 1438.29,
        },
        totalAmount: 6813.93,
      },
      {
        accountId: "mollitia",
        description: "incidunt",
        item: {
          id: "82562f22-2e98-417e-a17c-be61e6b7b95b",
          quantity: 7567.79,
          unitAmount: 270.69,
        },
        totalAmount: 6360.61,
      },
    ],
  },
};
const accessToken: string = "b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa";

sdk.accounting.createInvoice(createCreateInvoiceRequest, accessToken).then((res: CreateInvoiceResponse) => {
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
import { CreateInvoiceCreditApplicationRequest, CreateInvoiceCreditApplicationResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateInvoiceCreditApplicationRequest,
  CreateInvoiceCreditApplication,
  CreateInvoiceCreditApplicationCurrencyCode,
  CreateInvoiceCreditApplicationLinkedInvoices,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateInvoiceCreditApplicationRequest: CreateCreateInvoiceCreditApplicationRequest = {
  invoiceCreditApplication: {
    accountId: "aliquid",
    currencyCode: CreateInvoiceCreditApplicationCurrencyCode.Xfu,
    customerId: "quae",
    invoiceCreditMemoId: "earum",
    linkedInvoices: [
      {
        allocatedAmount: 4473.78,
        id: "4bdb04f1-5756-4082-968e-a19f1d170513",
      },
      {
        allocatedAmount: 2371.73,
        id: "9d08086a-1840-4394-8260-71f93f5f0642",
      },
    ],
    memo: "repellendus",
    transactionDate: "officia",
  },
};
const accessToken: string = "c7af515c-c413-4aa6-baae-8d67864dbb67";

sdk.accounting.createInvoiceCreditApplication(createCreateInvoiceCreditApplicationRequest, accessToken).then((res: CreateInvoiceCreditApplicationResponse) => {
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
import { CreateInvoiceCreditMemoRequest, CreateInvoiceCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateInvoiceCreditMemoRequest,
  CreateInvoiceCreditMemo,
  CreateInvoiceCreditMemoLineItems,
  CreateInvoiceCreditMemoLineItemsItem,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateInvoiceCreditMemoRequest: CreateCreateInvoiceCreditMemoRequest = {
  invoiceCreditMemo: {
    accountId: "corporis",
    currencyCode: "reiciendis",
    customerId: "assumenda",
    issueDate: "nemo",
    lineItems: [
      {
        accountId: "aliquid",
        description: "aperiam",
        item: {
          id: "b375ed4f-6fbe-4e41-b333-17fe35b60eb1",
          quantity: 8817.21,
          unitAmount: "similique",
        },
        totalAmount: "tempora",
      },
      {
        accountId: "aspernatur",
        description: "voluptas",
        item: {
          id: "555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2",
          quantity: 9679.66,
          unitAmount: "explicabo",
        },
        totalAmount: "asperiores",
      },
      {
        accountId: "facilis",
        description: "voluptate",
        item: {
          id: "b194a276-b269-416f-a1f0-8f4294e3698f",
          quantity: 2716.53,
          unitAmount: "tempora",
        },
        totalAmount: "voluptate",
      },
      {
        accountId: "reiciendis",
        description: "ex",
        item: {
          id: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
          quantity: 6805.15,
          unitAmount: "voluptatum",
        },
        totalAmount: "error",
      },
    ],
  },
};
const accessToken: string = "fbe3a5aa-8e48-424d-8ab4-075088e51862";

sdk.accounting.createInvoiceCreditMemo(createCreateInvoiceCreditMemoRequest, accessToken).then((res: CreateInvoiceCreditMemoResponse) => {
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
import { CreateInvoicePaymentRequest, CreateInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateInvoicePaymentRequest,
  CreateInvoicePayment,
  CreateInvoicePaymentCurrencyCode,
  CreateInvoicePaymentLinkedInvoices,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateInvoicePaymentRequest: CreateCreateInvoicePaymentRequest = {
  invoicePayment: {
    accountId: "sit",
    currencyCode: CreateInvoicePaymentCurrencyCode.Khr,
    customerId: "nostrum",
    linkedInvoices: [
      {
        allocatedAt: "error",
        amount: 85.11,
        id: "4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8",
      },
      {
        allocatedAt: "mollitia",
        amount: 3339.65,
        id: "0ce187f8-6bc1-473d-a89e-ee9526f8d986",
      },
      {
        allocatedAt: "repudiandae",
        amount: 5421.29,
        id: "81ead4f0-e101-4256-bf94-e29e973e922a",
      },
      {
        allocatedAt: "quis",
        amount: 4402.64,
        id: "a15be3e0-6080-47e2-b6e3-ab8845f0597a",
      },
    ],
    memo: "voluptas",
    totalAmount: 51.89,
    txnDate: "maiores",
  },
};
const accessToken: string = "f2a54a31-e947-464a-be86-5e7956f9251a";

sdk.accounting.createInvoicePayment(createCreateInvoicePaymentRequest, accessToken).then((res: CreateInvoicePaymentResponse) => {
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
import { CreateItemRequest, CreateItemResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateItemRequest,
  CreateItem,
  CreateItemAdditionalFields,
  CreateItemBillItem,
  CreateItemInvoiceItem,
  CreateItemType,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateItemRequest: CreateCreateItemRequest = {
  item: {
    additionalFields: {
      itemId: "nostrum",
    },
    billItem: {
      accountId: "mollitia",
      description: "provident",
      unitPrice: "possimus",
    },
    invoiceItem: {
      accountId: "animi",
      description: "ex",
      unitPrice: "aliquid",
    },
    name: "Kristie Wyman",
    type: CreateItemType.Discount,
  },
};
const accessToken: string = "faad4f9e-fc1b-4451-ac10-32648dc2f615";

sdk.accounting.createItem(createCreateItemRequest, accessToken).then((res: CreateItemResponse) => {
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
import { CreateJournalEntryRequest, CreateJournalEntryResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateJournalEntryRequest,
  CreateJournalEntry,
  CreateJournalEntryCurrencyCode,
  CreateJournalEntryLineItems,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateJournalEntryRequest: CreateCreateJournalEntryRequest = {
  journalEntry: {
    currencyCode: CreateJournalEntryCurrencyCode.Bov,
    currencyRate: 5834.04,
    lineItems: [
      {
        accountId: "earum",
        description: "soluta",
        taxRateId: "hic",
        totalAmount: 8481.51,
      },
      {
        accountId: "eaque",
        description: "earum",
        taxRateId: "perspiciatis",
        totalAmount: 9834.27,
      },
      {
        accountId: "debitis",
        description: "aliquid",
        taxRateId: "porro",
        totalAmount: 3803.35,
      },
    ],
    memo: "dolorem",
    subsidiaryId: "fugit",
    transactionDate: "cumque",
  },
};
const accessToken: string = "a3aed011-7996-4312-bde0-4771778ff61d";

sdk.accounting.createJournalEntry(createCreateJournalEntryRequest, accessToken).then((res: CreateJournalEntryResponse) => {
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
import { CreatePurchaseOrderRequest, CreatePurchaseOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreatePurchaseOrderRequest,
  CreatePurchaseOrder,
  CreatePurchaseOrderLineItems,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreatePurchaseOrderRequest: CreateCreatePurchaseOrderRequest = {
  purchaseOrder: {
    currency: "doloremque",
    currencyRate: 1173.15,
    lineItems: [
      {
        description: "tempora",
        item: "esse",
        quantity: 4037.93,
        taxRateId: "consectetur",
        unitAmount: 3998.12,
      },
      {
        description: "ipsa",
        item: "laborum",
        quantity: 1238.44,
        taxRateId: "nostrum",
        unitAmount: 8567.56,
      },
    ],
    memo: "expedita",
    subsidiaryId: "aliquid",
    txnDate: "officia",
    vendorId: "suscipit",
  },
};
const accessToken: string = "60659a1a-deaa-4b58-91d6-c645b08b6189";

sdk.accounting.createPurchaseOrder(createCreatePurchaseOrderRequest, accessToken).then((res: CreatePurchaseOrderResponse) => {
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
import { CreateSalesOrderRequest, CreateSalesOrderResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateSalesOrderRequest,
  CreateSalesOrder,
  CreateSalesOrderLineItems,
  CreateSalesOrderLineItemsItem,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateSalesOrderRequest: CreateCreateSalesOrderRequest = {
  salesOrder: {
    classId: "veritatis",
    currencyCode: "rerum",
    customerId: "est",
    departmentId: "culpa",
    issueDate: "voluptatem",
    lineItems: [
      {
        description: "officiis",
        item: {
          id: "1ade008e-6f8c-45f3-90d8-cdb5a3418143",
          quantity: 86.89,
          unitAmount: 1000.14,
        },
        taxRateId: "sit",
      },
      {
        description: "modi",
        item: {
          id: "21813d52-08ec-4e7e-a53b-668451c6c6e2",
          quantity: 289.52,
          unitAmount: 3502.07,
        },
        taxRateId: "necessitatibus",
      },
      {
        description: "quasi",
        item: {
          id: "6deab3fe-c957-48a6-8584-273a8418d162",
          quantity: 2330.78,
          unitAmount: 468.06,
        },
        taxRateId: "cupiditate",
      },
      {
        description: "reiciendis",
        item: {
          id: "b0929921-aefb-49f5-8c4d-86e68e4be056",
          quantity: 13.83,
          unitAmount: 938.94,
        },
        taxRateId: "non",
      },
    ],
    locationId: "maiores",
    memo: "enim",
    subsidiaryId: "sint",
  },
};
const accessToken: string = "da757a59-ecfe-4f66-af1c-aa3383c2beb4";

sdk.accounting.createSalesOrder(createCreateSalesOrderRequest, accessToken).then((res: CreateSalesOrderResponse) => {
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
import { CreateVendorRequest, CreateVendorResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateCreateVendorRequest,
  CreateVendor,
  CreateVendorAddresses,
  CreateVendorAddressesType,
  CreateVendorCurrencyCode,
  CreateVendorSubsidiaries,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createCreateVendorRequest: CreateCreateVendorRequest = {
  vendor: {
    addresses: [
      {
        address1: "voluptate",
        address2: "sequi",
        city: "Constancefort",
        country: "Malaysia",
        postalCode: "41943-8087",
        region: "architecto",
        type: CreateVendorAddressesType.Unknown,
      },
      {
        address1: "quia",
        address2: "porro",
        city: "East Arch",
        country: "Antigua and Barbuda",
        postalCode: "41854",
        region: "velit",
        type: CreateVendorAddressesType.Shipping,
      },
    ],
    contactName: "perspiciatis",
    currencyCode: CreateVendorCurrencyCode.Xcd,
    email: "Olin_Wolf@gmail.com",
    phone: "592-722-4000",
    registrationNumber: "officia",
    subsidiaries: [
      {
        id: "6b6bc9b8-f759-4eac-95a9-741d31135296",
        primary: false,
      },
      {
        id: "5bb8a720-2611-4435-a139-dbc2259b1abd",
        primary: false,
      },
      {
        id: "a8c070e1-084c-4b06-b2d1-ad879eeb9665",
        primary: false,
      },
      {
        id: "b85efbd0-2bae-40be-ad78-2259e3ea4b51",
        primary: false,
      },
    ],
    taxNumber: "unde",
    vendorName: "molestiae",
    website: "delectus",
  },
};
const accessToken: string = "92443da7-ce52-4b89-9c53-7c6454efb0b3";

sdk.accounting.createVendor(createCreateVendorRequest, accessToken).then((res: CreateVendorResponse) => {
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
import { GetAccountRequest, GetAccountResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "4896c3ca-5acf-4be2-bd57-07577929177d";
const id: string = "itaque";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.accounting.getAccount(accessToken, id, forceFetch).then((res: GetAccountResponse) => {
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
import { GetAttachmentRequest, GetAttachmentResponse } from "rutter-api/dist/sdk/models/operations";
import { EntityType, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "c646ecb5-7340-49e3-ab1e-5a2b12eb07f1";
const entityType: EntityType = EntityType.Bills;
const id: string = "laboriosam";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.accounting.getAttachment(accessToken, entityType, id, forceFetch).then((res: GetAttachmentResponse) => {
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
import { GetBillRequest, GetBillResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "b99545fc-95fa-4889-b0e1-89dbb30fcb33";
const id: string = "ea055b19-7cd4-44e2-b52d-82d3513bb6f4";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.accounting.getBill(accessToken, id, forceFetch).then((res: GetBillResponse) => {
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
import { GetBillPaymentRequest, GetBillPaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "b656bcdb-35ff-42e4-b275-37a8cd9e7319";
const id: string = "porro";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getBillPayment(accessToken, id, forceFetch).then((res: GetBillPaymentResponse) => {
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
import { GetCompanyInfoRequest, GetCompanyInfoResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "77d525f7-7b11-44ee-b52f-f785fc37814d";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getCompanyInfo(accessToken, forceFetch).then((res: GetCompanyInfoResponse) => {
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
import { GetAccountingCustomerRequest, GetAccountingCustomerResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "c98e0c2b-b89e-4b75-9ad6-36c600503d8b";
const id: string = "b31180f7-39ae-49e0-97eb-809e2810331f";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getCustomer(accessToken, id, forceFetch).then((res: GetAccountingCustomerResponse) => {
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
import { GetExpenseRequest, GetExpenseResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "981d4c70-0b60-47f3-893c-73b9da3f2ced";
const id: string = "a7e23f22-5741-41fa-b4b7-544e472e8028";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getExpense(accessToken, id, forceFetch).then((res: GetExpenseResponse) => {
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
import { GetInvoiceRequest, GetInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "7a5b4046-3a7d-4575-b140-0e764ad7334e";
const id: string = "c1b781b3-6a08-4088-9100-efada200ef04";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getInvoice(accessToken, id, forceFetch).then((res: GetInvoiceResponse) => {
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
import { GetInvoiceCreditMemoRequest, GetInvoiceCreditMemoResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "2eb2164c-f9ab-4836-ac72-3ffda9e06bee";
const id: string = "4825c1fc-0e11-45c8-8bff-918544ec42de";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.accounting.getInvoiceCreditMemo(accessToken, id, forceFetch).then((res: GetInvoiceCreditMemoResponse) => {
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
import { GetInvoicePaymentRequest, GetInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "cce8f197-7773-4e63-962a-7b408f05e3d4";
const id: string = "8fdaf313-a1f5-4fd9-8259-c0b36f25ea94";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getInvoicePayment(accessToken, id, forceFetch).then((res: GetInvoicePaymentResponse) => {
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
import { GetItemRequest, GetItemResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "f3b756c1-1f6c-437a-9126-243835bbc05a";
const id: string = "23a45cef-c5fd-4e10-a0ce-2169e510019c";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getItem(accessToken, id, forceFetch).then((res: GetItemResponse) => {
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
import { GetJournalEntryRequest, GetJournalEntryResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "dc5e3476-2799-4bfb-be69-49fb2bb4ecae";
const id: string = "6c3d5db3-adeb-4d5d-aea4-c506a8aa94c0";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getJournalEntry(accessToken, id, forceFetch).then((res: GetJournalEntryResponse) => {
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
import { GetPurchaseOrderRequest, GetPurchaseOrderResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "644cf5e9-d9a4-4578-adc1-ac600dec001a";
const id: string = "c802e2ec-09ff-48f0-b816-ff3477c13e90";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getPurchaseOrder(accessToken, id, forceFetch).then((res: GetPurchaseOrderResponse) => {
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
import { GetSalesOrderRequest, GetSalesOrderResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "c14125b0-960a-4668-951a-472af923c594";
const id: string = "9f83f350-cf87-46ff-b901-c6ecbb4e243c";
const forceFetch: ForceFetch = ForceFetch.False;

sdk.accounting.getSalesOrder(accessToken, id, forceFetch).then((res: GetSalesOrderResponse) => {
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
import { GetSubsidiaryRequest, GetSubsidiaryResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "789ffafe-da53-4e5a-a6e0-ac184c2b9c24";
const id: string = "7c88373a-40e1-4942-b32e-55055756f5d5";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getSubsidiary(accessToken, id, forceFetch).then((res: GetSubsidiaryResponse) => {
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
import { GetTaxRateRequest, GetTaxRateResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "d0bd0af2-dfe1-43db-8f62-cba3f8941aeb";
const id: string = "c0b80a69-24d3-4b2e-8fcc-8f895010f5dd";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getTaxRate(accessToken, id, forceFetch).then((res: GetTaxRateResponse) => {
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
import { GetVendorRequest, GetVendorResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "d6fa1804-e54c-482f-968a-363c8873e484";
const id: string = "380b1f6b-8ca2-475a-a0a0-4c495cc69917";
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.getVendor(accessToken, id, forceFetch).then((res: GetVendorResponse) => {
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listAccounts({
  accessToken: "b51c1bdb-1cf4-4b88-8ebd-fc4ccca99bc7",
  cursor: "hic",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 36691,
  updatedAtMax: 743531,
  updatedAtMin: 147400,
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
  accessToken: "dce10873-e42b-4006-9678-878ba8581a58",
  cursor: "magni",
  entityType: EntityType.Bills,
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 811259,
  updatedAtMax: 318028,
  updatedAtMin: 286453,
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
import { ListBalanceSheetsRequest, ListBalanceSheetsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "fefa9c95-f2ea-4c55-a5d3-07cfee81206e";
const endDate: string = "sed";
const forceFetch: ForceFetch = ForceFetch.False;
const startDate: string = "sunt";

sdk.accounting.listBalanceSheets(accessToken, endDate, forceFetch, startDate).then((res: ListBalanceSheetsResponse) => {
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBillCreditMemos({
  accessToken: "3fa4a41c-480d-43f2-932a-f03102d514f4",
  cursor: "optio",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 404422,
  updatedAtMax: 998023,
  updatedAtMin: 65118,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBillPayments({
  accessToken: "8bf9621a-6a4f-477a-87ee-3e4be752c65b",
  cursor: "ipsum",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 308819,
  updatedAtMax: 103988,
  updatedAtMin: 506966,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listBills({
  accessToken: "e3bb91c8-d975-4e0e-8419-d8f84f144f3e",
  cursor: "consequatur",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 891302,
  updatedAtMax: 817454,
  updatedAtMin: 789016,
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
import { ListCashFlowStatementsRequest, ListCashFlowStatementsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "c4aa5f3c-abd9-405a-972e-056728227b2d";
const endDate: string = "nesciunt";
const forceFetch: ForceFetch = ForceFetch.True;
const startDate: string = "sint";

sdk.accounting.listCashFlowStatements(accessToken, endDate, forceFetch, startDate).then((res: ListCashFlowStatementsResponse) => {
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listClasses({
  accessToken: "470bf7a4-fa87-4cf5-b5a6-fae54ebf60c3",
  cursor: "sunt",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 973096,
  updatedAtMax: 42364,
  updatedAtMin: 149498,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listCurrencies({
  accessToken: "3b75d236-7fe1-4a0c-88df-79f0a396d90c",
  cursor: "sequi",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 287141,
  updatedAtMax: 710059,
  updatedAtMin: 446737,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listCustomers({
  accessToken: "c15dfbac-e188-4b1c-8ee2-c8c6ce611fee",
  cursor: "quidem",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 778242,
  updatedAtMax: 490966,
  updatedAtMin: 791615,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listDepartments({
  accessToken: "bdb6eec7-4378-4ba2-9317-747dc915ad2c",
  cursor: "dolorum",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 341983,
  updatedAtMax: 847308,
  updatedAtMin: 845086,
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
import { Expand, ExpenseType, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listExpenses({
  accessToken: "6723dc0f-5ae2-4f3a-ab70-0878756143f5",
  cursor: "est",
  expand: Expand.PlatformData,
  expenseType: ExpenseType.Expense,
  forceFetch: ForceFetch.False,
  limit: 590927,
  updatedAtMax: 515595,
  updatedAtMin: 722392,
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
import { ListIncomeStatementsRequest, ListIncomeStatementsResponse } from "rutter-api/dist/sdk/models/operations";
import { ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "55554080-d40b-4cac-86cb-d6b5f3ec9093";
const endDate: string = "accusantium";
const forceFetch: ForceFetch = ForceFetch.True;
const startDate: string = "repellat";

sdk.accounting.listIncomeStatements(accessToken, endDate, forceFetch, startDate).then((res: ListIncomeStatementsResponse) => {
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoiceCreditMemos({
  accessToken: "926bad25-5381-49b4-b4b0-ed20e56248ff",
  cursor: "asperiores",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 198892,
  updatedAtMax: 585628,
  updatedAtMin: 656839,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoicePayments({
  accessToken: "910abdca-b626-4766-96e1-ec00221b335d",
  cursor: "praesentium",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 629461,
  updatedAtMax: 753261,
  updatedAtMin: 732142,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listInvoices({
  accessToken: "3ecfda8d-0c54-49ef-8300-4978a61fa1cf",
  cursor: "qui",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 415125,
  updatedAtMax: 538944,
  updatedAtMin: 519985,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listItems({
  accessToken: "f77c1ffc-71dc-4a16-bf2a-3c80a97ff334",
  cursor: "optio",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 870183,
  updatedAtMax: 945320,
  updatedAtMin: 562066,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listJournalEntries({
  accessToken: "57a9e618-76c6-4ab2-9d29-dfc94d6fecd7",
  cursor: "iste",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 221490,
  updatedAtMax: 573247,
  updatedAtMin: 44252,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listLocations({
  accessToken: "066a6d2d-0003-4553-b8ce-c086fa21e915",
  cursor: "consequuntur",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 696219,
  updatedAtMax: 247615,
  updatedAtMin: 109569,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listPurchaseOrders({
  accessToken: "19167b8e-3c8d-4b03-808d-6d364ffd4559",
  cursor: "alias",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 845078,
  updatedAtMax: 116867,
  updatedAtMin: 154840,
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
import { ListReportsRequest, ListReportsResponse } from "rutter-api/dist/sdk/models/operations";
import { Filter, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const accessToken: string = "63d48e93-5c2c-49e8-9f30-be3e43202d72";
const filter: Filter = Filter.Tree;
const forceFetch: ForceFetch = ForceFetch.True;

sdk.accounting.listReports(accessToken, filter, forceFetch).then((res: ListReportsResponse) => {
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listSalesOrders({
  accessToken: "57650664-1870-4d9d-a1f9-ad030c4ecc11",
  cursor: "id",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 551576,
  updatedAtMax: 191724,
  updatedAtMin: 436532,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listSubsidiaries({
  accessToken: "429068b8-502a-455e-bf73-bc845e320a31",
  cursor: "error",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.False,
  limit: 258140,
  updatedAtMax: 700634,
  updatedAtMin: 678695,
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
  accessToken: "df947c9a-867b-4c42-8266-65816ddca8ef",
  cursor: "nemo",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 984669,
  updatedAtMax: 766670,
  updatedAtMin: 711310,
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
import { Expand, ForceFetch } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.listVendors({
  accessToken: "4c593ec1-2cda-4ad0-ac7a-fedbd80df448",
  cursor: "similique",
  expand: Expand.PlatformData,
  forceFetch: ForceFetch.True,
  limit: 456599,
  updatedAtMax: 968205,
  updatedAtMin: 611792,
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
import { UpdateBillRequest, UpdateBillResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateUpdateBillBodyRequest, UpdateBillBody } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createUpdateBillBodyRequest: CreateUpdateBillBodyRequest = {
  bill: {
    documentNumber: "amet",
    dueDate: "occaecati",
    issueDate: "aut",
    memo: "impedit",
    vendorId: "minima",
  },
};
const accessToken: string = "8880983d-abf9-4ef3-bfdd-9f7f079af4d3";
const id: string = "5724cdb0-f4d2-4811-87d5-6844eded85a9";

sdk.accounting.updateBill(createUpdateBillBodyRequest, accessToken, id).then((res: UpdateBillResponse) => {
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
import { UpdateInvoiceRequest, UpdateInvoiceResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateUpdateInvoiceRequest,
  UpdateInvoice,
  UpdateInvoiceCurrencyCode,
  UpdateInvoiceLineItems,
  UpdateInvoiceLineItemsItem,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createUpdateInvoiceRequest: CreateUpdateInvoiceRequest = {
  invoice: {
    currencyCode: UpdateInvoiceCurrencyCode.Bam,
    customerId: "eum",
    dueDate: "nostrum",
    issueDate: "eveniet",
    lineItems: [
      {
        accountId: "ratione",
        description: "blanditiis",
        item: {
          id: "bdfc2032-b6c8-4799-a3b7-e13584f7ae12",
          quantity: 7733.55,
          unitAmount: 4013.88,
        },
        totalAmount: 5078.74,
      },
      {
        accountId: "natus",
        description: "vitae",
        item: {
          id: "f82ce115-7172-4305-b77d-cfa89df975e3",
          quantity: 3366.4,
          unitAmount: 4131.35,
        },
        totalAmount: 4264.81,
      },
    ],
  },
};
const accessToken: string = "86092e9c-3ddc-45f1-91de-a1026d541a4d";
const id: string = "190feb21-780b-4ccc-8dbb-ddb484708fb4";

sdk.accounting.updateInvoice(createUpdateInvoiceRequest, accessToken, id).then((res: UpdateInvoiceResponse) => {
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
import { UpdateInvoicePaymentRequest, UpdateInvoicePaymentResponse } from "rutter-api/dist/sdk/models/operations";
import {
  CreateUpdateInvoicePaymentRequest,
  UpdateInvoicePayment,
  UpdateInvoicePaymentLinkedInvoices,
} from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();
const createUpdateInvoicePaymentRequest: CreateUpdateInvoicePaymentRequest = {
  invoicePayment: {
    accountId: "repudiandae",
    customerId: "amet",
    linkedInvoices: [
      {
        allocatedAt: "ab",
        amount: 8878.35,
        id: "6bc158c4-c4e5-4459-9ea3-42260e9b200c",
      },
      {
        allocatedAt: "recusandae",
        amount: 4518.31,
        id: "8a1bd8fb-7a0a-4116-8e72-3d4097fa30e9",
      },
      {
        allocatedAt: "deserunt",
        amount: 9444.05,
        id: "725b2912-2030-4d83-b5ae-b7799d22e8c1",
      },
    ],
    memo: "repellat",
    totalAmount: 5427.83,
    txnDate: "magnam",
  },
};
const accessToken: string = "93825fdc-42c8-476c-ac2d-fb4cfc1c7623";
const id: string = "0f841fb1-bd23-4fdb-94db-6be5a685998e";

sdk.accounting.updateInvoicePayment(createUpdateInvoicePaymentRequest, accessToken, id).then((res: UpdateInvoicePaymentResponse) => {
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

