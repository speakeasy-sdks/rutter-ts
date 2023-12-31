/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { JournalEntry } from "./journalentry";
import { Expose, Type } from "class-transformer";

export class JournalEntryResponseWithConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => Connection)
    connection: Connection;

    @SpeakeasyMetadata()
    @Expose({ name: "journal_entry" })
    @Type(() => JournalEntry)
    journalEntry: JournalEntry;
}
