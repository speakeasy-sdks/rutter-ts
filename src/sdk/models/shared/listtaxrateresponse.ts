/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxRate } from "./taxrate";
import { Expose, Type } from "class-transformer";

export class ListTaxRateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;

    @SpeakeasyMetadata({ elemType: TaxRate })
    @Expose({ name: "tax_rates" })
    @Type(() => TaxRate)
    taxRates: TaxRate[];
}
