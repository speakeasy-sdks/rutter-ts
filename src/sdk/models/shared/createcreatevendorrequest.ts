/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateVendor } from "./createvendor";
import { Expose, Type } from "class-transformer";

export class CreateCreateVendorRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "vendor" })
    @Type(() => CreateVendor)
    vendor: CreateVendor;
}
