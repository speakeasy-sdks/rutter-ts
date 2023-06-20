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