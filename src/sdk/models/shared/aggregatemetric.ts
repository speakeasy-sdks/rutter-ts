/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AggregateMetric extends SpeakeasyBase {
    /**
     * If applicable, the currency used for the value returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;

    /**
     * The date at which we stop aggregating activity (revenue, expenses, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    endDate: string;

    /**
     * The starting date from which we start aggregating activity (revenue, expenses, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate: string;

    /**
     * The value of the requested metric for the time range described by the start and end date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}
