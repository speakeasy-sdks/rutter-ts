/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoicePayment20230207 } from "./invoicepayment20230207";
import { Expose, Type } from "class-transformer";

export class InvoicePayment20230207Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_payment" })
    @Type(() => InvoicePayment20230207)
    invoicePayment: InvoicePayment20230207;
}
