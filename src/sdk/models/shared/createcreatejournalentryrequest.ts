/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateJournalEntry } from "./createjournalentry";
import { Expose, Type } from "class-transformer";

export class CreateCreateJournalEntryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "journal_entry" })
    @Type(() => CreateJournalEntry)
    journalEntry: CreateJournalEntry;
}
