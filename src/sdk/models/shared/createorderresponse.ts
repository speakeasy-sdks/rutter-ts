/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Order } from "./order";
import { Expose, Type } from "class-transformer";

/**
 * Companies that use Rutter can programmatically create orders on their storeowner's shops.
 *
 * @remarks
 *     To do this, make a POST request to our orders endpoint.
 */
export class CreateOrderResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => Order)
    order: Order;
}
