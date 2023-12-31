/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingItem } from "./accountingitem";
import { Expose, Type } from "class-transformer";

export class AccountingItemResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "item" })
    @Type(() => AccountingItem)
    item: AccountingItem;
}
