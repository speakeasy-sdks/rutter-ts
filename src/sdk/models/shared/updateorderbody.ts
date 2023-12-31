/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The order status to update for the order.
 */
export enum UpdateOrderBodyOrderStatus {
    Active = "active",
    Archived = "archived",
    Cancelled = "cancelled",
    Unknown = "unknown",
}

export class UpdateOrderBodyOrder extends SpeakeasyBase {
    /**
     * The order status to update for the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: UpdateOrderBodyOrderStatus;
}

export class UpdateOrderBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => UpdateOrderBodyOrder)
    order: UpdateOrderBodyOrder;
}
