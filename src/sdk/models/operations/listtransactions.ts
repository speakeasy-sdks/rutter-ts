/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListTransactionsRequest extends SpeakeasyBase {
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
     * Force a response even if the underlying connection hasn't finished the initial sync.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force_fetch" })
    forceFetch?: shared.ForceFetch;

    /**
     * The limit on the number of entities returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: shared.Sort;

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

export class ListTransactionsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    listTransactionsResponse?: shared.ListTransactionsResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}