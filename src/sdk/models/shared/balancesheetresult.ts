/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BalanceSheet } from "./balancesheet";
import { Expose, Type } from "class-transformer";

export class BalanceSheetResult extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BalanceSheet })
    @Expose({ name: "balance_sheets" })
    @Type(() => BalanceSheet)
    balanceSheets: BalanceSheet[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;
}
