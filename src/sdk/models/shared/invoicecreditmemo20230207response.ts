/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceCreditMemo20230207 } from "./invoicecreditmemo20230207";
import { Expose, Type } from "class-transformer";

export class InvoiceCreditMemo20230207Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_credit_memo" })
    @Type(() => InvoiceCreditMemo20230207)
    invoiceCreditMemo: InvoiceCreditMemo20230207;
}