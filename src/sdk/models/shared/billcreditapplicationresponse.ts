/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillCreditApplication } from "./billcreditapplication";
import { Expose, Type } from "class-transformer";

export class BillCreditApplicationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bill_credit_application" })
    @Type(() => BillCreditApplication)
    billCreditApplication: BillCreditApplication;
}
