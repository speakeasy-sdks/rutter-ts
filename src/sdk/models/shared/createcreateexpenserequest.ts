/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateExpense } from "./createexpense";
import { Expose, Type } from "class-transformer";

export class CreateCreateExpenseRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "expense" })
    @Type(() => CreateExpense)
    expense: CreateExpense;
}
