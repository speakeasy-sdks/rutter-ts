/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteConnectionResponse extends SpeakeasyBase {
    /**
     * `true` if the delete operation succeeded.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: boolean;
}
