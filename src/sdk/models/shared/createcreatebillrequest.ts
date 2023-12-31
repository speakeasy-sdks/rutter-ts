/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateBill } from "./createbill";
import { Expose, Type } from "class-transformer";

export class CreateCreateBillRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bill" })
    @Type(() => CreateBill)
    bill: CreateBill;
}
