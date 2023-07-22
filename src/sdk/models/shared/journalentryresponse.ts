/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JournalEntry } from "./journalentry";
import { Expose, Type } from "class-transformer";

export class JournalEntryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "journal_entry" })
    @Type(() => JournalEntry)
    journalEntry: JournalEntry;
}
