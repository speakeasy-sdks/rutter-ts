/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the invoice.
 */
export enum CreateInvoiceCurrencyCode {
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

export class CreateInvoiceLineItemsItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The quantity of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * The price per unit of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount?: number;
}

export class CreateInvoiceLineItems extends SpeakeasyBase {
    /**
     * The account being credited for the invoice line item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId?: string;

    /**
     * The description of the line item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item" })
    @Type(() => CreateInvoiceLineItemsItem)
    item: CreateInvoiceLineItemsItem;

    /**
     * The total amount of the invoice line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;
}

export class CreateInvoice extends SpeakeasyBase {
    /**
     * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode: CreateInvoiceCurrencyCode;

    /**
     * The ID of the customer who owns this invoice
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for the due date of the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_date" })
    dueDate: string;

    /**
     * The [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp for when the invoice was issued.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "issue_date" })
    issueDate: string;

    /**
     * The line items on the invoice
     */
    @SpeakeasyMetadata({ elemType: CreateInvoiceLineItems })
    @Expose({ name: "line_items" })
    @Type(() => CreateInvoiceLineItems)
    lineItems: CreateInvoiceLineItems[];
}