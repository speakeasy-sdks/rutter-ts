/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Location } from "./location";
import { Expose, Type } from "class-transformer";

export class ListLocationsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Location })
    @Expose({ name: "locations" })
    @Type(() => Location)
    locations: Location[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;
}
