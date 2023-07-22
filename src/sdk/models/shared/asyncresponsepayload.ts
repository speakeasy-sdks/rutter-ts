/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum AsyncResponsePayloadAsyncResponseStatus {
    Prequeued = "prequeued",
    Pending = "pending",
    Success = "success",
    PartialSuccess = "partial_success",
    Failure = "failure",
}

export class AsyncResponsePayloadAsyncResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "response_url" })
    responseUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: AsyncResponsePayloadAsyncResponseStatus;
}

export enum AsyncResponsePayloadErrorsSource {
    Rutter = "rutter",
    Platform = "platform",
    InvalidInput = "invalid_input",
}

export class AsyncResponsePayloadErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: number;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source: AsyncResponsePayloadErrorsSource;
}

export class AsyncResponsePayload extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "async_response" })
    @Type(() => AsyncResponsePayloadAsyncResponse)
    asyncResponse?: AsyncResponsePayloadAsyncResponse;

    @SpeakeasyMetadata({ elemType: AsyncResponsePayloadErrors })
    @Expose({ name: "errors" })
    @Type(() => AsyncResponsePayloadErrors)
    errors?: AsyncResponsePayloadErrors[];
}
