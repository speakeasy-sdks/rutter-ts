/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BillCreditApplication extends SpeakeasyBase {
    /**
     * Whether the request was successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: boolean;
}
