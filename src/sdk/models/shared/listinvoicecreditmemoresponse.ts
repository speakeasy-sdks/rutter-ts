/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceCreditMemo } from "./invoicecreditmemo";
import { Expose, Type } from "class-transformer";

export class ListInvoiceCreditMemoResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: InvoiceCreditMemo })
    @Expose({ name: "invoice_credit_memos" })
    @Type(() => InvoiceCreditMemo)
    invoiceCreditMemos: InvoiceCreditMemo[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;
}
