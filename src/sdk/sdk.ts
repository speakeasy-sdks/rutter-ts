/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounting } from "./accounting";
import { Balance } from "./balance";
import { BillCredit } from "./billcredit";
import { Connections } from "./connections";
import { Customers } from "./customers";
import { Jobs } from "./jobs";
import { Metrics } from "./metrics";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Orders } from "./orders";
import { Payouts } from "./payouts";
import { Products } from "./products";
import { Store } from "./store";
import { Subscriptions } from "./subscriptions";
import { Tokens } from "./tokens";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
    sdkVersion = "1.0.0";
    genVersion = "2.41.4";

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

    async postAccountingCustomers(
        createCreateAccountingCustomerRequest: shared.CreateCreateAccountingCustomerRequest,
        accessToken: string,
        config?: AxiosRequestConfig
    ): Promise<operations.PostAccountingCustomersResponse> {
        const req = new operations.PostAccountingCustomersRequest({
            createCreateAccountingCustomerRequest: createCreateAccountingCustomerRequest,
            accessToken: accessToken,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/accounting/customers";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createCreateAccountingCustomerRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostAccountingCustomersResponse =
            new operations.PostAccountingCustomersResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createAccountingCustomer20230207Response = JSON.parse(decodedRes);
                }
                break;
        }

        return res;
    }
}