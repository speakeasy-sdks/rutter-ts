/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the sales order.
 */
export enum SalesOrder20230314CurrencyCode {
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Amd = "AMD",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    Bam = "BAM",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Bov = "BOV",
    Brl = "BRL",
    Bsd = "BSD",
    Btn = "BTN",
    Bwp = "BWP",
    Byr = "BYR",
    Bzd = "BZD",
    Cad = "CAD",
    Cdf = "CDF",
    Che = "CHE",
    Chf = "CHF",
    Chw = "CHW",
    Clf = "CLF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Cou = "COU",
    Crc = "CRC",
    Cuc = "CUC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    Egp = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Gbp = "GBP",
    Gel = "GEL",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kmf = "KMF",
    Kpw = "KPW",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Ltl = "LTL",
    Lvl = "LVL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mro = "MRO",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Mxv = "MXV",
    Myr = "MYR",
    Mzn = "MZN",
    Nad = "NAD",
    Ngn = "NGN",
    Nio = "NIO",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    Omr = "OMR",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Php = "PHP",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Ssp = "SSP",
    Std = "STD",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Usd = "USD",
    Usn = "USN",
    Uss = "USS",
    Uyi = "UYI",
    Uyu = "UYU",
    Uzs = "UZS",
    Vef = "VEF",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xag = "XAG",
    Xau = "XAU",
    Xba = "XBA",
    Xbb = "XBB",
    Xbc = "XBC",
    Xbd = "XBD",
    Xcd = "XCD",
    Xdr = "XDR",
    Xfu = "XFU",
    Xof = "XOF",
    Xpd = "XPD",
    Xpf = "XPF",
    Xpt = "XPT",
    Xts = "XTS",
    Xxx = "XXX",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
}

export class SalesOrder20230314LineItemsItem extends SpeakeasyBase {
    /**
     * The Rutter ID of the [Item](/rest/version/items) linked to the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The quantity of the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * The price per unit of the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount: number;
}

export class SalesOrder20230314LineItems extends SpeakeasyBase {
    /**
     * The description of the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item" })
    @Type(() => SalesOrder20230314LineItemsItem)
    item: SalesOrder20230314LineItemsItem;

    /**
     * The Rutter ID of the [Tax Rate](/rest/version/tax-rates) linked to the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate_id" })
    taxRateId: string;

    /**
     * The total amount of the sales order line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;
}

/**
 * The status of the sales order.
 */
export enum SalesOrder20230314Status {
    Open = "open",
    Closed = "closed",
    PendingApproval = "pending_approval",
    Unknown = "unknown",
}

export class SalesOrder20230314 extends SpeakeasyBase {
    /**
     * The Rutter ID of the [Class](/rest/version/classes) linked to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "class_id" })
    classId: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the sales order was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode: SalesOrder20230314CurrencyCode;

    /**
     * The exchange rate between the currency of the sales order and the business default currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_rate" })
    currencyRate: number;

    /**
     * The Rutter ID of the [Customer](/rest/version/customers) linked to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId: string;

    /**
     * The Rutter ID of the [Department](/rest/version/departments) linked to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "department_id" })
    departmentId: string;

    /**
     * The discount amount applied to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_amount" })
    discountAmount: number;

    /**
     * The buyer facing document number of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_number" })
    documentNumber: string;

    /**
     * The Rutter generated unique ID of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for the issue date of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "issue_date" })
    issueDate: string;

    /**
     * An array of line items associated with the sales order.
     */
    @SpeakeasyMetadata({ elemType: SalesOrder20230314LineItems })
    @Expose({ name: "line_items" })
    @Type(() => SalesOrder20230314LineItems)
    lineItems: SalesOrder20230314LineItems[];

    /**
     * The Rutter ID of the [Location](/rest/version/locations) linked to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "location_id" })
    locationId: string;

    /**
     * The memo of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "memo" })
    memo: string;

    /**
     * The platform specific ID of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId: string;

    /**
     * The reference number of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference_number" })
    referenceNumber: string;

    /**
     * The status of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SalesOrder20230314Status;

    /**
     * The Rutter ID of the [Subsidiary](/rest/version/subsidiaries) linked to the sales order. This feature is currently only supported on NetSuite.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subsidiary_id" })
    subsidiaryId: string;

    /**
     * The tax amount applied to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount: number;

    /**
     * The total amount of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp that the sales order was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}
