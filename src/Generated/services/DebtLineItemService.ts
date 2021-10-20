/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { debtLineItemResource } from '../models/debtLineItemResource';
import type { errorResponse } from '../models/errorResponse';
import type { getDebtLineItemCollectionResponse } from '../models/getDebtLineItemCollectionResponse';
import type { patchDebtLineItemCollectionRequest } from '../models/patchDebtLineItemCollectionRequest';
import { request as __request } from '../core/request';

export class DebtLineItemService {

    /**
     * Get debtLineItems csv export.
     * Get debtLineItems csv export.
     * @param filterProjectId projectId filter
     * @param filterDateFrom Date from filter
     * @param filterDateTo Date to filter
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDebtLineItemCollectionCsv(
        filterProjectId: string,
        filterDateFrom: string,
        filterDateTo: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/debt-line-item/csv`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Query Debt Line Items by projectId and time range
     * Query Debt Line Items by projectId and time range
     * @param filterProjectId projectId filter
     * @param filterDateFrom Date from filter
     * @param filterDateTo Date to filter
     * @returns getDebtLineItemCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDebtLineItemCollection(
        filterProjectId: string,
        filterDateFrom: string,
        filterDateTo: string,
    ): Promise<getDebtLineItemCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/debt-line-item`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update one or more Debt Line Items
     * Update one or more fields of one ore more Debt Line Items
     * @param requestBody
     * @returns getDebtLineItemCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchDebtLineItemCollection(
        requestBody: patchDebtLineItemCollectionRequest,
    ): Promise<getDebtLineItemCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/debt-line-item`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a Debt Line Item by debtLineItemId
     * Get a Debt Line Item by debtLineItemId
     * @param debtLineItemId Debt Line Item ID
     * @returns debtLineItemResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDebtLineItem(
        debtLineItemId: string,
    ): Promise<debtLineItemResource | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/debt-line-item/${debtLineItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}