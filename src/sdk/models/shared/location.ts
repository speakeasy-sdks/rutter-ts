/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The status of the location.
 */
export enum LocationStatus {
    Active = "active",
    Archived = "archived",
}

export class Location extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the location was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * Describes whether the location has child locations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_children" })
    hasChildren: boolean;

    /**
     * The Rutter generated unique ID of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The Rutter ID of the [Parent Location](/rest/version/locations) linked to the location.
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
     * The platform specific ID of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The status of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: LocationStatus;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the location was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}
