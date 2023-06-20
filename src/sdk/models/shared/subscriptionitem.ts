/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SubscriptionItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * Frequency with which this subscription item is billed. Accepted values include `day`, `week`, `month`, and `year`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval: string;

    /**
     * Number of intervals between subscription billings. For instance, if this is set to 3 and interval is set to month, the user would be billed every 3 months.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interval_count" })
    intervalCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The number of products sold in the subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount: number;
}