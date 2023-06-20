/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateConnectionPlatforms } from "./createconnectionplatforms";
import { Expose } from "class-transformer";

/**
 * Credentials for WooCommerce
 */
export class WooCommerceCredentials extends SpeakeasyBase {
    /**
     * WooCommerce Rest API Consumer Secret
     */
    @SpeakeasyMetadata()
    @Expose({ name: "basic_password" })
    basicPassword: string;

    /**
     * WooCommerce Rest API Consumer Key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "basic_username" })
    basicUsername: string;

    /**
     * The underlying platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform: CreateConnectionPlatforms;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope?: string;

    /**
     * WooCommerce merchant website URL
     */
    @SpeakeasyMetadata()
    @Expose({ name: "store_url" })
    storeUrl: string;
}