/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UpdateInvoice } from "./updateinvoice";
import { Expose, Type } from "class-transformer";

export class CreateUpdateInvoiceRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoice" })
    @Type(() => UpdateInvoice)
    invoice: UpdateInvoice;
}
