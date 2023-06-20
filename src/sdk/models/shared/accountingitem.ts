/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Item details associated with a bill (when the item was purchased).
 */
export class AccountingItemBillItem extends SpeakeasyBase {
    /**
     * The description of the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The unit price of the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_price" })
    unitPrice: string;
}

/**
 * Item details associated with an invoice (when the item was sold).
 */
export class AccountingItemInvoiceItem extends SpeakeasyBase {
    /**
     * The description of the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The unit price of the line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_price" })
    unitPrice: string;
}

/**
 * The status of the item.
 */
export enum AccountingItemStatus {
    Active = "active",
    Archived = "archived",
    Unknown = "unknown",
}

export class AccountingItemSubsidiaries extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

/**
 * The type of the item.
 */
export enum AccountingItemType {
    Inventory = "inventory",
    NonInventory = "non_inventory",
    Service = "service",
    Discount = "discount",
    Unknown = "unknown",
}

export class AccountingItem extends SpeakeasyBase {
    /**
     * Item details associated with a bill (when the item was purchased).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bill_item" })
    @Type(() => AccountingItemBillItem)
    billItem: AccountingItemBillItem;

    /**
     * The reference code of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    /**
     * The Rutter generated unique ID of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Item details associated with an invoice (when the item was sold).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_item" })
    @Type(() => AccountingItemInvoiceItem)
    invoiceItem: AccountingItemInvoiceItem;

    /**
     * The name of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The raw platform data corresponding to the Rutter object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_data" })
    platformData?: Record<string, any>;

    /**
     * The platform specific ID of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The status of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: AccountingItemStatus;

    /**
     * An array of [Subsidiary](/rest/version/subsidiaries) linked to the item. This feature is currently only supported on NetSuite.
     */
    @SpeakeasyMetadata({ elemType: AccountingItemSubsidiaries })
    @Expose({ name: "subsidiaries" })
    @Type(() => AccountingItemSubsidiaries)
    subsidiaries: AccountingItemSubsidiaries[];

    /**
     * The type of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AccountingItemType;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the item was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}
