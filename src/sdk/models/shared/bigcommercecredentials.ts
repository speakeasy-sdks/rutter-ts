/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateConnectionPlatforms } from "./createconnectionplatforms";
import { Expose } from "class-transformer";

/**
 * Credentials for BigCommerce
 */
export class BigCommerceCredentials extends SpeakeasyBase {
    /**
     * BigCommerce Store Access Token
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_access_token" })
    oauthAccessToken: string;

    /**
     * BigCommerce App Client ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_client_id" })
    oauthClientId?: string;

    /**
     * BigCommerce App Client Secret
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_client_secret" })
    oauthClientSecret?: string;

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
     * BigCommerce merchant .mybigcommerce.com domain URL
     */
    @SpeakeasyMetadata()
    @Expose({ name: "store_url" })
    storeUrl: string;
}
