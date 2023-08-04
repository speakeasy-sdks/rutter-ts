/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Accounting } from "./accounting";
import { Balance } from "./balance";
import { BillCredit } from "./billcredit";
import { Connections } from "./connections";
import { Customers } from "./customers";
import { Jobs } from "./jobs";
import { Metrics } from "./metrics";
import { Orders } from "./orders";
import { Payouts } from "./payouts";
import { Products } from "./products";
import { Store } from "./store";
import { Subscriptions } from "./subscriptions";
import { Tokens } from "./tokens";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production server
     */
    "https://production.rutterapi.com/versioned",
    /**
     * Sandbox server
     */
    "https://sandbox.rutterapi.com/versioned",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2023-03-14";
    sdkVersion = "1.16.0";
    genVersion = "2.81.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Rutter: The Universal API for all major e-commerce platforms, accounting systems, and payment processors.
 */
export class Rutter {
    public accounting: Accounting;
    public balance: Balance;
    public billCredit: BillCredit;
    public connections: Connections;
    public customers: Customers;
    public jobs: Jobs;
    public metrics: Metrics;
    public orders: Orders;
    public payouts: Payouts;
    public products: Products;
    public store: Store;
    public subscriptions: Subscriptions;
    public tokens: Tokens;
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.accounting = new Accounting(this.sdkConfiguration);
        this.balance = new Balance(this.sdkConfiguration);
        this.billCredit = new BillCredit(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.jobs = new Jobs(this.sdkConfiguration);
        this.metrics = new Metrics(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.payouts = new Payouts(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.store = new Store(this.sdkConfiguration);
        this.subscriptions = new Subscriptions(this.sdkConfiguration);
        this.tokens = new Tokens(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
