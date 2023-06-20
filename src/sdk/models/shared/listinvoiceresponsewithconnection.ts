/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Invoice } from "./invoice";
import { Expose, Type } from "class-transformer";

export class ListInvoiceResponseWithConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata({ elemType: Invoice })
    @Expose({ name: "invoices" })
    @Type(() => Invoice)
    invoices: Invoice[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;
}