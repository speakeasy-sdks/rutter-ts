/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateConnectionPlatforms } from "./createconnectionplatforms";
import { Expose } from "class-transformer";

/**
 * Credentials for Netsuite
 */
export class NetsuiteCredentials extends SpeakeasyBase {
    /**
     * Consumer Key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumer_key" })
    consumerKey: string;

    /**
     * Consumer Secret
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumer_secret" })
    consumerSecret: string;

    /**
     * The underlying platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform: CreateConnectionPlatforms;

    /**
     * Public Key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public_key" })
    publicKey: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope?: string;

    /**
     * Store Name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "store_name" })
    storeName: string;

    /**
     * Token ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_id" })
    tokenId: string;

    /**
     * Token Secret
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_secret" })
    tokenSecret: string;
}
