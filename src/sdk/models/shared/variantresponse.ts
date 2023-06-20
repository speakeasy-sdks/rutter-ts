/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class VariantResponseVariantCurrencyPrices extends SpeakeasyBase {
    /**
     * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the price.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iso_currency_code" })
    isoCurrencyCode: string;

    /**
     * The value of the price.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;
}

export class VariantResponseVariantImages extends SpeakeasyBase {
    /**
     * The URL of the image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "src" })
    src: string;
}

export class VariantResponseVariantInventoryLocations extends SpeakeasyBase {
    /**
     * The first address line of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address1" })
    address1: string;

    /**
     * The second address line of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address2" })
    address2: string;

    /**
     * The city of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city: string;

    /**
     * The country of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country: string;

    /**
     * The Rutter generated unique ID of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The postal code of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode: string;

    /**
     * The quantity of inventory at the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * The region of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the location was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}

/**
 * Details about the inventory of the variant.
 */
export class VariantResponseVariantInventory extends SpeakeasyBase {
    /**
     * The locations containing inventory for the variant.
     */
    @SpeakeasyMetadata({ elemType: VariantResponseVariantInventoryLocations })
    @Expose({ name: "locations" })
    @Type(() => VariantResponseVariantInventoryLocations)
    locations: VariantResponseVariantInventoryLocations[];

    /**
     * The total amount of inventory of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_count" })
    totalCount: number;
}

export class VariantResponseVariantLinkedProducts extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "link_type" })
    linkType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku: string;

    @SpeakeasyMetadata()
    @Expose({ name: "variant_id" })
    variantId: string;
}

export class VariantResponseVariantOptionValues extends SpeakeasyBase {
    /**
     * The name of the variant option.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The value of the variant option.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

/**
 * The unit the weight is being measured in.
 */
export enum VariantResponseVariantWeightUnit {
    Kg = "kg",
    G = "g",
    Oz = "oz",
    Lb = "lb",
    Gal = "gal",
}

/**
 * The weight of the variant.
 */
export class VariantResponseVariantWeight extends SpeakeasyBase {
    /**
     * The unit the weight is being measured in.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit: VariantResponseVariantWeightUnit;

    /**
     * The value of the weight.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: number;
}

export class VariantResponseVariant extends SpeakeasyBase {
    /**
     * The barcode of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "barcode" })
    barcode: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the variant was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * An array of prices in different supported currencies for the variant.
     */
    @SpeakeasyMetadata({ elemType: VariantResponseVariantCurrencyPrices })
    @Expose({ name: "currency_prices" })
    @Type(() => VariantResponseVariantCurrencyPrices)
    currencyPrices?: VariantResponseVariantCurrencyPrices[];

    /**
     * The description of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The fulfillment service of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fulfillment_service" })
    fulfillmentService: string;

    /**
     * The Rutter generated unique ID of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * An array of images linked to the variant.
     */
    @SpeakeasyMetadata({ elemType: VariantResponseVariantImages })
    @Expose({ name: "images" })
    @Type(() => VariantResponseVariantImages)
    images: VariantResponseVariantImages[];

    /**
     * Details about the inventory of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inventory" })
    @Type(() => VariantResponseVariantInventory)
    inventory?: VariantResponseVariantInventory;

    /**
     * The inventory management system of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inventory_management" })
    inventoryManagement: string;

    /**
     * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iso_currency_code" })
    isoCurrencyCode: string;

    @SpeakeasyMetadata({ elemType: VariantResponseVariantLinkedProducts })
    @Expose({ name: "linked_products" })
    @Type(() => VariantResponseVariantLinkedProducts)
    linkedProducts?: VariantResponseVariantLinkedProducts[];

    /**
     * The option values associated with the variant. This describes how the variant is unique from other variants of the same product.
     */
    @SpeakeasyMetadata({ elemType: VariantResponseVariantOptionValues })
    @Expose({ name: "option_values" })
    @Type(() => VariantResponseVariantOptionValues)
    optionValues: VariantResponseVariantOptionValues[];

    /**
     * The platform specific ID of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The price of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;

    @SpeakeasyMetadata()
    @Expose({ name: "product_id" })
    productId: string;

    /**
     * Whether the variant requires shipping.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requires_shipping" })
    requiresShipping: boolean;

    /**
     * An abbreviated description of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "short_description" })
    shortDescription?: string;

    /**
     * The stock keeping unit (SKU) of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku: string;

    /**
     * The title of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    /**
     * The unit cost of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_cost" })
    unitCost: number;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the variant was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;

    /**
     * The consumer facing URL used to access the variant online.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variant_url" })
    variantUrl?: string;

    /**
     * The weight of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    @Type(() => VariantResponseVariantWeight)
    weight?: VariantResponseVariantWeight;
}

export class VariantResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "variant" })
    @Type(() => VariantResponseVariant)
    variant: VariantResponseVariant;
}