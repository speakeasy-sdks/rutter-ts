/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteVariantResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "productId" })
    productId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "variantId" })
    variantId: string;
}
