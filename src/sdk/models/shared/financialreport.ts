/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompanyInfo20230207 } from "./companyinfo20230207";
import { Expose, Type } from "class-transformer";

export class FinancialReportReport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company_info" })
    @Type(() => CompanyInfo20230207)
    companyInfo: CompanyInfo20230207;

    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    expiresAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "report_url" })
    reportUrl: string;
}

export class FinancialReport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "report" })
    @Type(() => FinancialReportReport)
    report: FinancialReportReport;
}
