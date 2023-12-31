/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { PurchaseOrder20230314 } from "./purchaseorder20230314";
import { Expose, Type } from "class-transformer";

export class ListPurchaseOrder20230314ResponseWithConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;

    @SpeakeasyMetadata({ elemType: PurchaseOrder20230314 })
    @Expose({ name: "purchase_orders" })
    @Type(() => PurchaseOrder20230314)
    purchaseOrders: PurchaseOrder20230314[];
}
