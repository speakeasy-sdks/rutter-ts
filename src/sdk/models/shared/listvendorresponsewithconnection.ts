/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Vendor } from "./vendor";
import { Expose, Type } from "class-transformer";

export class ListVendorResponseWithConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;

    @SpeakeasyMetadata({ elemType: Vendor })
    @Expose({ name: "vendors" })
    @Type(() => Vendor)
    vendors: Vendor[];
}
