/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { PurchaseOrder20230314 } from "./purchaseorder20230314";
import { Expose, Type } from "class-transformer";

export class PurchaseOrder20230314ResponseWithConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "purchase_order" })
    @Type(() => PurchaseOrder20230314)
    purchaseOrder: PurchaseOrder20230314;
}
