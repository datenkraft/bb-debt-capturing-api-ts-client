/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { debtLineItemResource } from '../models/debtLineItemResource';
import type { errorResponse } from '../models/errorResponse';
import type { getDebtLineItemCollectionResponse } from '../models/getDebtLineItemCollectionResponse';
import { request as __request } from '../core/request';

export class DebtLineItemService {

    /**
     * Get debtLineItems by projectId and time range
     * Get debtLineItems by projectId and time range
     * @param filterProjectId projectId filter
     * @param filterDateFrom dateFrom filter
     * @param filterDateTo dateTo filter
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
     * Update debtLineItems by projectId and time range where the invoiceNumber is not already set
     * Update debtLineItems by projectId and time range where the invoiceNumber is not already set
     * @param filterProjectId projectId filter
     * @param filterDateFrom dateFrom filter
     * @param filterDateTo dateTo filter
     * @param requestBody
     * @returns getDebtLineItemCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchDebtLineItemCollection(
        filterProjectId: string,
        filterDateFrom: string,
        filterDateTo: string,
        requestBody: {
            /**
             * invoiceNumber
             */
            invoiceNumber?: string,
        },
    ): Promise<getDebtLineItemCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/debt-line-item`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a debtLineItem by debtLineItemId
     * Get a debtLineItem by debtLineItemId
     * @param debtLineItemId debtLineItemId
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

    /**
     * Update a debtLineItem by debtLineItemId
     * Update a debtLineItem by debtLineItemId
     * @param debtLineItemId debtLineItemId
     * @param requestBody
     * @returns debtLineItemResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchDebtLineItem(
        debtLineItemId: string,
        requestBody: {
            /**
             * invoiceNumber
             */
            invoiceNumber?: string,
        },
    ): Promise<debtLineItemResource | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/debt-line-item/${debtLineItemId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}