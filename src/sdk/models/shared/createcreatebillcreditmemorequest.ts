/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateBillCreditMemo } from "./createbillcreditmemo";
import { Expose, Type } from "class-transformer";

export class CreateCreateBillCreditMemoRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bill_credit_memo" })
    @Type(() => CreateBillCreditMemo)
    billCreditMemo: CreateBillCreditMemo;
}
