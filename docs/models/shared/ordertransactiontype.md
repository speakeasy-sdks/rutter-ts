# OrderTransactionType

The transaction type associated with the transaction. Some enum value clarifications:
  - `void` - means a cancellation of a pending transaction.
  - `payout` - means the merchant transferred the money held in the platform to the merchant's own bank account.
  - `other` - If the transaction can't fit into any of the above types. This happens more often on self-hosted platforms where merchants create their own transaction types / have them in a different language.


## Values

| Name     | Value    |
| -------- | -------- |
| `Sale`   | sale     |
| `Refund` | refund   |
| `Void`   | void     |
| `Payout` | payout   |
| `Fee`    | fee      |
| `Other`  | other    |