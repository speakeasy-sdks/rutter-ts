/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateExpenseRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createCreateExpenseRequest: shared.CreateCreateExpenseRequest;

    /**
     * The access token of the connection.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
    accessToken: string;
}

export class CreateExpenseResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createExpenseResponse?: any;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
