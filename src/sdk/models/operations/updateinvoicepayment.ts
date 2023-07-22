/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateInvoicePaymentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createUpdateInvoicePaymentRequest: shared.CreateUpdateInvoicePaymentRequest;

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
}

export class UpdateInvoicePaymentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createInvoicePayment20230207Response?: any;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
