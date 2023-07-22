/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The status of the class.
 */
export enum ClassStatus {
    Active = "active",
    Archived = "archived",
}

export class Class extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the class was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * Describes whether the class has child classes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_children" })
    hasChildren: boolean;

    /**
     * The Rutter generated unique ID of the class.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the class.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The Rutter ID of the [Parent Class](/rest/version/classes) linked to the class.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId: string;

    /**
     * The raw platform data corresponding to the Rutter object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_data" })
    platformData?: Record<string, any>;

    /**
     * The platform specific ID of the class.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The status of the class.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ClassStatus;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the class was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}
