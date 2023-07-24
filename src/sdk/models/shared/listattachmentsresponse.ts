/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Expose, Type } from "class-transformer";

export class ListAttachmentsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Attachment })
    @Expose({ name: "attachments" })
    @Type(() => Attachment)
    attachments: Attachment[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;
}
