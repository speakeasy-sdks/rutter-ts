<!-- Start SDK Example Usage -->


```typescript
import { Rutter } from "rutter-api";
import { CreateAccountResponse } from "rutter-api/dist/sdk/models/operations";
import { AccountType, CurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createAccount({
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
}, "89bd9d8d-69a6-474e-8f46-7cc8796ed151").then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->