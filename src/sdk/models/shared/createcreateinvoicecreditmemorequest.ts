/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateInvoiceCreditMemo } from "./createinvoicecreditmemo";
import { Expose, Type } from "class-transformer";

export class CreateCreateInvoiceCreditMemoRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_credit_memo" })
    @Type(() => CreateInvoiceCreditMemo)
    invoiceCreditMemo: CreateInvoiceCreditMemo;
}
