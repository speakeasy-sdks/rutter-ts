/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * See our supporting Commerce Platforms or Accounting Platforms pages for the platform enumeration
 */
export enum ExchangeTokenResponsePlatform {
    Shoper = "SHOPER",
    Shopify = "SHOPIFY",
    Shopware = "SHOPWARE",
    Magento = "MAGENTO",
    BigCommerce = "BIG_COMMERCE",
    WooCommerce = "WOO_COMMERCE",
    Squarespace = "SQUARESPACE",
    Wix = "WIX",
    Square = "SQUARE",
    Commercelayer = "COMMERCELAYER",
    Amazon = "AMAZON",
    Etsy = "ETSY",
    Ebay = "EBAY",
    Prestashop = "PRESTASHOP",
    Webflow = "WEBFLOW",
    Lazada = "LAZADA",
    Fnac = "FNAC",
    Alibaba = "ALIBABA",
    Shopee = "SHOPEE",
    Mercadolibre = "MERCADOLIBRE",
    Gumroad = "GUMROAD",
    Shoplazza = "SHOPLAZZA",
    Shopline = "SHOPLINE",
    Walmart = "WALMART",
    Stripe = "STRIPE",
    Mollie = "MOLLIE",
    Clover = "CLOVER",
    Paypal = "PAYPAL",
    Quickbooks = "QUICKBOOKS",
    QuickbooksDesktop = "QUICKBOOKS_DESKTOP",
    Ecwid = "ECWID",
    Xero = "XERO",
    Freshbooks = "FRESHBOOKS",
    Netsuite = "NETSUITE",
    SageBusinessCloud = "SAGE_BUSINESS_CLOUD",
    SageIntacct = "SAGE_INTACCT",
    Zohobooks = "ZOHOBOOKS",
    Wave = "WAVE",
    Dynamics365 = "DYNAMICS365",
    Exactonline = "EXACTONLINE",
    Kashflow = "KASHFLOW",
    Freeagent = "FREEAGENT",
    Chargify = "CHARGIFY",
    Chargebee = "CHARGEBEE",
    Recurly = "RECURLY",
    Plaid = "PLAID",
}

export class ExchangeTokenResponse extends SpeakeasyBase {
    /**
     * The access token associated with the Connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken: string;

    /**
     * The Rutter generated unique ID of the connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_id" })
    connectionId: string;

    /**
     * A value determining whether all data is ready for a connection. See Connection Lifecycle for more details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_ready" })
    isReady: boolean;

    /**
     * See our supporting Commerce Platforms or Accounting Platforms pages for the platform enumeration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform: ExchangeTokenResponsePlatform;

    /**
     * Unique store identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "store_unique_name" })
    storeUniqueName?: string;
}
