/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class InvoiceLineItems extends SpeakeasyBase {
    /**
     * The account being credited for the invoice line item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId: string;

    /**
     * The total amount of the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: string;

    /**
     * The description or memo of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The discount amount applied to the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_amount" })
    discountAmount: string;

    /**
     * The percentage discount applied to the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_percentage" })
    discountPercentage: string;

    /**
     * The Rutter generated unique ID of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The Rutter ID of the [Item](/rest/version/items) linked to the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "item_id" })
    itemId: string;

    /**
     * The platform specific ID of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The quantity of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * The subtotal of the invoice line item, without tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sub_total" })
    subTotal: string;

    /**
     * The total tax amount applied to the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount: string;

    /**
     * The Rutter ID of the [Tax Rate](/rest/version/tax-rates) linked to the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate_id" })
    taxRateId: string;

    /**
     * The price per unit of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount: string;
}

export enum InvoiceLinkedPaymentsType {
    InvoicePayment = "INVOICE_PAYMENT",
    InvoiceCreditMemo = "INVOICE_CREDIT_MEMO",
    Unknown = "UNKNOWN",
}

export class InvoiceLinkedPayments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: InvoiceLinkedPaymentsType;
}

/**
 * The status of the invoice.
 */
export enum InvoiceStatus {
    Open = "open",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Draft = "draft",
    Unknown = "unknown",
    Submitted = "submitted",
}

export class Invoice extends SpeakeasyBase {
    /**
     * The Rutter ID of the [Account](/rest/version/accounts) linked to the invoice. Represents the account being debited.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId: string;

    /**
     * The current amount due on the invoice. Represents the remainder after invoice payments or invoice credit memos are applied against the total amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount_due" })
    amountDue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode: string;

    /**
     * The Rutter ID of the [Customers](/rest/version/accounting-customers) linked to the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId: string;

    /**
     * The buyer facing document number of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_number" })
    documentNumber: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for when the invoice is/was due.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_date" })
    dueDate: string;

    /**
     * The Rutter generated unique ID of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for when the invoice was issued.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "issue_date" })
    issueDate: string;

    /**
     * An array of line items associated with the invoice.
     */
    @SpeakeasyMetadata({ elemType: InvoiceLineItems })
    @Expose({ name: "line_items" })
    @Type(() => InvoiceLineItems)
    lineItems: InvoiceLineItems[];

    /**
     * An array of Rutter IDs of [Invoice Payments](/rest/version/invoice-payments) and [Invoice Credit Memos](/rest/version/invoice-credit-memos) applied against the invoice.
     */
    @SpeakeasyMetadata({ elemType: InvoiceLinkedPayments })
    @Expose({ name: "linked_payments" })
    @Type(() => InvoiceLinkedPayments)
    linkedPayments: InvoiceLinkedPayments[];

    /**
     * The memo of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "memo" })
    memo?: string;

    /**
     * The raw platform data corresponding to the Rutter object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_data" })
    platformData?: Record<string, any>;

    /**
     * The platform specific ID of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The status of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: InvoiceStatus;

    /**
     * The subtotal of the invoice, without the tax amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sub_total" })
    subTotal: string;

    /**
     * The total tax amount applied to the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount: string;

    /**
     * The total amount due on the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: string;

    /**
     * The total amount of discounts applied to the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_discount" })
    totalDiscount: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}
