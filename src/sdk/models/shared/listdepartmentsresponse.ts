/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Department } from "./department";
import { Expose, Type } from "class-transformer";

export class ListDepartmentsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Department })
    @Expose({ name: "departments" })
    @Type(() => Department)
    departments: Department[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_cursor" })
    nextCursor: string;
}
