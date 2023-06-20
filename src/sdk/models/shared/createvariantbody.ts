/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateVariantBodyVariantImages extends SpeakeasyBase {
    /**
     * The URL of the image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "src" })
    src: string;
}

export class CreateVariantBodyVariantInventory extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "location_id" })
    locationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total_count" })
    totalCount?: number;
}

export class CreateVariantBodyVariantOptionValues extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

export enum CreateVariantBodyVariantWeightUnit {
    Kg = "kg",
    G = "g",
    Oz = "oz",
    Lb = "lb",
    Gal = "gal",
}

export class CreateVariantBodyVariantWeight extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit: CreateVariantBodyVariantWeightUnit;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: number;
}

export class CreateVariantBodyVariant extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata({ elemType: CreateVariantBodyVariantImages })
    @Expose({ name: "images" })
    @Type(() => CreateVariantBodyVariantImages)
    images?: CreateVariantBodyVariantImages[];

    @SpeakeasyMetadata()
    @Expose({ name: "inventory" })
    @Type(() => CreateVariantBodyVariantInventory)
    inventory?: CreateVariantBodyVariantInventory;

    @SpeakeasyMetadata({ elemType: CreateVariantBodyVariantOptionValues })
    @Expose({ name: "option_values" })
    @Type(() => CreateVariantBodyVariantOptionValues)
    optionValues: CreateVariantBodyVariantOptionValues[];

    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku: string;

    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    @Type(() => CreateVariantBodyVariantWeight)
    weight?: CreateVariantBodyVariantWeight;
}

export class CreateVariantBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "variant" })
    @Type(() => CreateVariantBodyVariant)
    variant: CreateVariantBodyVariant;
}
