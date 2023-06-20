/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateConnectionResponseConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "link_url" })
    linkUrl: string;
}

export class CreateConnectionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => CreateConnectionResponseConnection)
    connection: CreateConnectionResponseConnection;
}