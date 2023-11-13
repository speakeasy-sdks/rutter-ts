/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Payout } from "./payout";
import { Expose, Type } from "class-transformer";

export class ListPayoutsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;

    @SpeakeasyMetadata({ elemType: Payout })
    @Expose({ name: "payouts" })
    @Type(() => Payout)
    payouts: Payout[];
}
