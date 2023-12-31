/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IncomeStatement } from "./incomestatement";
import { Expose, Type } from "class-transformer";

export class ListIncomeStatementResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: IncomeStatement })
    @Expose({ name: "income_statements" })
    @Type(() => IncomeStatement)
    incomeStatements: IncomeStatement[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor?: string;
}
