<!-- Start SDK Example Usage -->
```typescript
import { Rutter } from "rutter-api";
import { CreateAccountResponse } from "rutter-api/dist/sdk/models/operations";
import { CreateAccountAccountType, CreateAccountCurrencyCode } from "rutter-api/dist/sdk/models/shared";

const sdk = new Rutter();

sdk.accounting.createAccount({
  account: {
    accountType: CreateAccountAccountType.OtherExpense,
    additionalFields: {
      bankAccountNumber: "provident",
    },
    currencyCode: CreateAccountCurrencyCode.Sdg,
    name: "Stuart Stiedemann",
    nominalCode: "vel",
    subsidiaryId: "error",
  },
}, "a674e0f4-67cc-4879-aed1-51a05dfc2ddf").then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->