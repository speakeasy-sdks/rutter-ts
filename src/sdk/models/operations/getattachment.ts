/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAttachmentRequest extends SpeakeasyBase {
    /**
     * The access token of the connection.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
    accessToken: string;

    /**
     * The entity type of the attachment.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" })
    entityType: shared.EntityType;

    /**
     * The Rutter generated unique ID of the underlying entity type.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Force a response even if the underlying connection hasn't finished the initial sync.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force_fetch" })
    forceFetch?: shared.ForceFetch;
}

export class GetAttachmentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    attachmentResponse?: shared.AttachmentResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
