/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Get debtLineItems file export by projectId and time range
     * Get debtLineItems file export by projectId and time range
     * @param format Export file format
     * @param filterProjectId projectId filter
     * @param filterDateFrom dateFrom filter
     * @param filterDateTo dateTo filter
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDebtLineItemCollectionReport(
        format: 'xlsx' | 'csv',
        filterProjectId: string,
        filterDateFrom: string,
        filterDateTo: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/debt-line-item.${format}`,
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
     * Get a list of undefined shipping costs in the specified time frame
     * Get a list of undefined shipping costs in the specified time frame and the requested format
     * @param format Export file format
     * @param filterDateFrom dateFrom filter in UTC
     * @param filterDateTo dateTo filter in UTC
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getUndefinedShippingCostsCollectionReport(
        format: 'xlsx' | 'csv',
        filterDateFrom: string,
        filterDateTo: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/undefined-shipping-costs.${format}`,
            query: {
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            errors: {
                400: `Invalid format or timespan`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}