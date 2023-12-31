/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoicePayment } from "./invoicepayment";
import { Expose, Type } from "class-transformer";

export class ListInvoicePaymentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: InvoicePayment })
    @Expose({ name: "invoice_payments" })
    @Type(() => InvoicePayment)
    invoicePayments: InvoicePayment[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;
}
