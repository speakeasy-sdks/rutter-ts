/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxRate } from "./taxrate";
import { Expose, Type } from "class-transformer";

export class TaxRateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate" })
    @Type(() => TaxRate)
    taxRate: TaxRate;
}
