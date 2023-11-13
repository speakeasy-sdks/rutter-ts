/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetExpenseRequest extends SpeakeasyBase {
    /**
     * The access token of the connection.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
    accessToken: string;

    /**
     * The Rutter generated unique ID of the object.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Force a response even if the underlying connection hasn't finished the initial sync.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force_fetch" })
    forceFetch?: shared.ForceFetch;
}

export class GetExpenseResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    expenseResponseWithConnection?: shared.ExpenseResponseWithConnection;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
