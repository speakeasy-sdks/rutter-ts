/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListOrdersRequest extends SpeakeasyBase {
    /**
     * The access token of the connection.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
    accessToken: string;

    /**
     * The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds maximum created_at datetime to fetch entities from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_max" })
    createdAtMax?: number;

    /**
     * The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds minimum created_at datetime to fetch entities from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_min" })
    createdAtMin?: number;

    /**
     * The cursor to use for pagination. This value is passed in from `next_cursor` field in a previous request.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * Optionally, include transaction information when fetching orders.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
    expand?: shared.Expand1;

    /**
     * Force a response even if the underlying connection hasn't finished the initial sync.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force_fetch" })
    forceFetch?: shared.ForceFetch;

    /**
     * Optionally filter orders by their `fulfillment_status`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fulfillment_status" })
    fulfillmentStatus?: shared.FulfillmentStatus;

    /**
     * The limit on the number of entities returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Optionally filter by order number.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_number" })
    orderNumber?: number;

    /**
     * Optionally filters orders by `payment_status`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_status" })
    paymentStatus?: shared.PaymentStatus;

    /**
     * Optionally filter by phone number. Format using only numerics.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" })
    phone?: string;

    /**
     * Optionally return only certain fields specified by a comma-separated list of field names. E.g. `id,status`
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" })
    properties?: string;

    /**
     * The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds maximum updated_at datetime to fetch entities from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_at_max" })
    updatedAtMax?: number;

    /**
     * The [Unix Timestamp](https://en.wikipedia.org/wiki/Unix_time) in milliseconds minimum updated_at datetime to fetch entities from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_at_min" })
    updatedAtMin?: number;
}

export class ListOrdersResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The `/orders` endpoint allows developers to receive user-authorized order data for a merchant's store.
     *
     * @remarks
     *   Due to the potentially large number of orders associated with a connection, results are paginated.
     */
    @SpeakeasyMetadata()
    listOrdersResponse?: shared.ListOrdersResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}