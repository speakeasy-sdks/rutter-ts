/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Product } from "./product";
import { Expose, Type } from "class-transformer";

export class PatchProductResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "product" })
    @Type(() => Product)
    product: Product;
}