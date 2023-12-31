/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AsynchronousJobRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "idempotency_key" })
    idempotencyKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "method" })
    method: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}

export class AsynchronousJobResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "http_status" })
    httpStatus: number;
}

export enum AsynchronousJobStatus {
    Prequeued = "prequeued",
    Pending = "pending",
    Success = "success",
    PartialSuccess = "partial_success",
    Failure = "failure",
}

export class AsynchronousJob extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "request" })
    @Type(() => AsynchronousJobRequest)
    request: AsynchronousJobRequest;

    @SpeakeasyMetadata()
    @Expose({ name: "response" })
    @Type(() => AsynchronousJobResponse)
    response?: AsynchronousJobResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: AsynchronousJobStatus;
}
