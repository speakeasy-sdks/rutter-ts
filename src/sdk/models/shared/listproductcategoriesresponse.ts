/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductCategory } from "./productcategory";
import { Expose, Type } from "class-transformer";

export class ListProductCategoriesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ProductCategory })
    @Expose({ name: "categories" })
    @Type(() => ProductCategory)
    categories: ProductCategory[];
}
