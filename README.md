# rutter-api

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/rutter-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/rutter-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Rutter } from "rutter-api";
import { PostAccountingCustomersResponse } from "rutter-api/dist/sdk/models/operations";

const sdk = new Rutter();

sdk.postAccountingCustomers({
  customer: {
    contactName: "corrupti",
    customerName: "provident",
    email: "Rosalinda_Mitchell84@hotmail.com",
    phone: "1-663-528-0923 x478",
    subsidiaryId: "voluptatum",
  },
}, "796ed151-a05d-4fc2-9df7-cc78ca1ba928").then((res: PostAccountingCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Rutter SDK](docs/sdks/rutter/README.md)

* [postAccountingCustomers](docs/sdks/rutter/README.md#postaccountingcustomers)

### [accounting](docs/sdks/accounting/README.md)

* [createAccount](docs/sdks/accounting/README.md#createaccount)
* [createAttachment](docs/sdks/accounting/README.md#createattachment)
* [createBill](docs/sdks/accounting/README.md#createbill)
* [createBillCreditApplication](docs/sdks/accounting/README.md#createbillcreditapplication)
* [createBillCreditMemo](docs/sdks/accounting/README.md#createbillcreditmemo)
* [createBillPayment](docs/sdks/accounting/README.md#createbillpayment)
* [createExpense](docs/sdks/accounting/README.md#createexpense)
* [createInvoice](docs/sdks/accounting/README.md#createinvoice)
* [createInvoiceCreditApplication](docs/sdks/accounting/README.md#createinvoicecreditapplication)
* [createInvoiceCreditMemo](docs/sdks/accounting/README.md#createinvoicecreditmemo)
* [createInvoicePayment](docs/sdks/accounting/README.md#createinvoicepayment)
* [createItem](docs/sdks/accounting/README.md#createitem)
* [createJournalEntry](docs/sdks/accounting/README.md#createjournalentry)
* [createPurchaseOrder](docs/sdks/accounting/README.md#createpurchaseorder)
* [createSalesOrder](docs/sdks/accounting/README.md#createsalesorder)
* [createVendor](docs/sdks/accounting/README.md#createvendor)
* [getAccount](docs/sdks/accounting/README.md#getaccount)
* [getAttachment](docs/sdks/accounting/README.md#getattachment)
* [getBill](docs/sdks/accounting/README.md#getbill)
* [getBillPayment](docs/sdks/accounting/README.md#getbillpayment)
* [getCompanyInfo](docs/sdks/accounting/README.md#getcompanyinfo)
* [getCustomer](docs/sdks/accounting/README.md#getcustomer)
* [getExpense](docs/sdks/accounting/README.md#getexpense)
* [getInvoice](docs/sdks/accounting/README.md#getinvoice)
* [getInvoiceCreditMemo](docs/sdks/accounting/README.md#getinvoicecreditmemo)
* [getInvoicePayment](docs/sdks/accounting/README.md#getinvoicepayment)
* [getItem](docs/sdks/accounting/README.md#getitem)
* [getJournalEntry](docs/sdks/accounting/README.md#getjournalentry)
* [getPurchaseOrder](docs/sdks/accounting/README.md#getpurchaseorder)
* [getSalesOrder](docs/sdks/accounting/README.md#getsalesorder)
* [getSubsidiary](docs/sdks/accounting/README.md#getsubsidiary)
* [getTaxRate](docs/sdks/accounting/README.md#gettaxrate)
* [getVendor](docs/sdks/accounting/README.md#getvendor)
* [listAccounts](docs/sdks/accounting/README.md#listaccounts)
* [listAttachments](docs/sdks/accounting/README.md#listattachments)
* [listBalanceSheets](docs/sdks/accounting/README.md#listbalancesheets)
* [listBillCreditMemos](docs/sdks/accounting/README.md#listbillcreditmemos)
* [listBillPayments](docs/sdks/accounting/README.md#listbillpayments)
* [listBills](docs/sdks/accounting/README.md#listbills)
* [listCashFlowStatements](docs/sdks/accounting/README.md#listcashflowstatements)
* [listClasses](docs/sdks/accounting/README.md#listclasses)
* [listCurrencies](docs/sdks/accounting/README.md#listcurrencies)
* [listCustomers](docs/sdks/accounting/README.md#listcustomers)
* [listDepartments](docs/sdks/accounting/README.md#listdepartments)
* [listExpenses](docs/sdks/accounting/README.md#listexpenses)
* [listIncomeStatements](docs/sdks/accounting/README.md#listincomestatements)
* [listInvoiceCreditMemos](docs/sdks/accounting/README.md#listinvoicecreditmemos)
* [listInvoicePayments](docs/sdks/accounting/README.md#listinvoicepayments)
* [listInvoices](docs/sdks/accounting/README.md#listinvoices)
* [listItems](docs/sdks/accounting/README.md#listitems)
* [listJournalEntries](docs/sdks/accounting/README.md#listjournalentries)
* [listLocations](docs/sdks/accounting/README.md#listlocations)
* [listPurchaseOrders](docs/sdks/accounting/README.md#listpurchaseorders)
* [listReports](docs/sdks/accounting/README.md#listreports)
* [listSalesOrders](docs/sdks/accounting/README.md#listsalesorders)
* [listSubsidiaries](docs/sdks/accounting/README.md#listsubsidiaries)
* [listTaxRates](docs/sdks/accounting/README.md#listtaxrates)
* [listVendors](docs/sdks/accounting/README.md#listvendors)
* [updateBill](docs/sdks/accounting/README.md#updatebill)
* [updateInvoice](docs/sdks/accounting/README.md#updateinvoice)
* [updateInvoicePayment](docs/sdks/accounting/README.md#updateinvoicepayment)

### [balance](docs/sdks/balance/README.md)

* [getBalance](docs/sdks/balance/README.md#getbalance)

### [billCredit](docs/sdks/billcredit/README.md)

* [getMemo](docs/sdks/billcredit/README.md#getmemo)

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection)
* [deleteConnection](docs/sdks/connections/README.md#deleteconnection)
* [getAccessToken](docs/sdks/connections/README.md#getaccesstoken)
* [getStatus](docs/sdks/connections/README.md#getstatus)
* [listConnections](docs/sdks/connections/README.md#listconnections)

### [customers](docs/sdks/customers/README.md)

* [getCustomer](docs/sdks/customers/README.md#getcustomer)
* [getCustomerGroup](docs/sdks/customers/README.md#getcustomergroup)
* [listCustomerGroups](docs/sdks/customers/README.md#listcustomergroups)
* [listCustomers](docs/sdks/customers/README.md#listcustomers)

### [jobs](docs/sdks/jobs/README.md)

* [getJob](docs/sdks/jobs/README.md#getjob)

### [metrics](docs/sdks/metrics/README.md)

* [getAccountingMetric](docs/sdks/metrics/README.md#getaccountingmetric)
* [getCommerceMetric](docs/sdks/metrics/README.md#getcommercemetric)

### [orders](docs/sdks/orders/README.md)

* [createFulfillment](docs/sdks/orders/README.md#createfulfillment)
* [createOrder](docs/sdks/orders/README.md#createorder)
* [getOrder](docs/sdks/orders/README.md#getorder)
* [listOrders](docs/sdks/orders/README.md#listorders)
* [updateOrder](docs/sdks/orders/README.md#updateorder)

### [payouts](docs/sdks/payouts/README.md)

* [listPayouts](docs/sdks/payouts/README.md#listpayouts)

### [products](docs/sdks/products/README.md)

* [createProduct](docs/sdks/products/README.md#createproduct)
* [createVariant](docs/sdks/products/README.md#createvariant)
* [deleteProduct](docs/sdks/products/README.md#deleteproduct)
* [deleteVariant](docs/sdks/products/README.md#deletevariant)
* [getProduct](docs/sdks/products/README.md#getproduct)
* [listCategories](docs/sdks/products/README.md#listcategories)
* [listProducts](docs/sdks/products/README.md#listproducts)
* [updateProduct](docs/sdks/products/README.md#updateproduct)
* [updateVariant](docs/sdks/products/README.md#updatevariant)

### [store](docs/sdks/store/README.md)

* [getStore](docs/sdks/store/README.md#getstore)

### [subscriptions](docs/sdks/subscriptions/README.md)

* [listSubscriptions](docs/sdks/subscriptions/README.md#listsubscriptions)

### [tokens](docs/sdks/tokens/README.md)

* [exchangePublicToken](docs/sdks/tokens/README.md#exchangepublictoken)

### [transactions](docs/sdks/transactions/README.md)

* [listTransactions](docs/sdks/transactions/README.md#listtransactions)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
