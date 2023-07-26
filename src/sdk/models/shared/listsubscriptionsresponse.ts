/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Subscription } from "./subscription";
import { Expose, Type } from "class-transformer";

export class ListSubscriptionsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection?: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;

    @SpeakeasyMetadata({ elemType: Subscription })
    @Expose({ name: "subscriptions" })
    @Type(() => Subscription)
    subscriptions: Subscription[];
}
