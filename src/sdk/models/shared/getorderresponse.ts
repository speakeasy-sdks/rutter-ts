/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Order } from "./order";
import { Expose, Type } from "class-transformer";

/**
 * The `/orders/{id}` endpoint allows developers to receive user-authorized order data for a specific order in a merchant's store.
 */
export class GetOrderResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => Order)
    order: Order;
}