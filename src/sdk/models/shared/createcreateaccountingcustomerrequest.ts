/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateAccountingCustomer } from "./createaccountingcustomer";
import { Expose, Type } from "class-transformer";

export class CreateCreateAccountingCustomerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer" })
    @Type(() => CreateAccountingCustomer)
    customer: CreateAccountingCustomer;
}