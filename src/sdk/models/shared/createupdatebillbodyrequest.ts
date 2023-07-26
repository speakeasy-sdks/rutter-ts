/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UpdateBillBody } from "./updatebillbody";
import { Expose, Type } from "class-transformer";

export class CreateUpdateBillBodyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bill" })
    @Type(() => UpdateBillBody)
    bill: UpdateBillBody;
}
