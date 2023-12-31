/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Expose, Type } from "class-transformer";

export class CreateOrderFulfillmentResponseFulfillmentLineItems extends SpeakeasyBase {
    /**
     * The Rutter generated unique ID of the fulfillment line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The total cost of all of the variants associated with this line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;

    /**
     * The Rutter ID of the [Product](/rest/version/products) linked to the fulfillment line item. `null` if the product has been deleted from the connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "product_id" })
    productId: string;

    /**
     * The quantity of the linked [Variant](/rest/version/variants) fulfilled with this line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * The stock keeping unit (SKU) of the linked [Variant](/rest/version/variants).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku: string;

    /**
     * The `title` of the linked [Variant](/rest/version/variants)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    /**
     * The Rutter ID of the [Product](/rest/version/products) linked to the order. `null` if the product has been deleted from the connection. The `variant_id` and `product_id` are equal if the variant is the default variant or the product contains no variants.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variant_id" })
    variantId: string;
}

export class CreateOrderFulfillmentResponseFulfillment extends SpeakeasyBase {
    /**
     * The carrier of the fulfillment, ex "USPS", "Fedex", "UPS", "Canada Post", etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carrier" })
    carrier: string;

    /**
     * The Rutter generated unique ID of the fulfillment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The linked [Variants](/rest/version/variants) and quantities associated with this fulfillment.
     */
    @SpeakeasyMetadata({ elemType: CreateOrderFulfillmentResponseFulfillmentLineItems })
    @Expose({ name: "line_items" })
    @Type(() => CreateOrderFulfillmentResponseFulfillmentLineItems)
    lineItems: CreateOrderFulfillmentResponseFulfillmentLineItems[];

    /**
     * The Rutter ID of the [Order](/rest/version/orders) linked to the fulfillment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_id" })
    orderId: string;

    /**
     * The carrier shipping service of the fulfillment, ex "Priority Mail", "2 Day Delivery", etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    service: string;

    /**
     * The tracking number of the fulfillment. Buyers can track tracking info using this number at the carrier's website.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking_number" })
    trackingNumber: string;

    /**
     * The tracking URL of the fulfillment. Buyers can open this URL to look up tracking information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking_url" })
    trackingUrl: string;
}

export class CreateOrderFulfillmentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "fulfillment" })
    @Type(() => CreateOrderFulfillmentResponseFulfillment)
    fulfillment?: CreateOrderFulfillmentResponseFulfillment;
}
