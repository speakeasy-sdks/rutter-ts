/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateInvoice } from "./createinvoice";
import { Expose, Type } from "class-transformer";

export class CreateCreateInvoiceRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoice" })
    @Type(() => CreateInvoice)
    invoice: CreateInvoice;
}