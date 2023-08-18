/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { debtLineItemAggregatedCollection } from '../models/debtLineItemAggregatedCollection';
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Get debtLineItems file export.
     * Get debtLineItems file export by projectId and time range.
     * The file type is controlled by the accept header.
     * @param filterProjectId This filter restricts the data by the project id.
     * @param filterDateFrom This filter enables retrieval of data starting from a specified date in UTC.
     * The filters dateFrom and dateTo are required unless an invoiceId filter is given.
     * @param filterDateTo This filter enables retrieval of data ending up to a specified date in UTC.
     * The filters dateFrom and dateTo are required unless an invoiceId filter is given.
     * @param filterInvoiceId This filter restricts the data by the invoice id.
     * @returns any OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getDebtLineItemCollectionReport(
        filterProjectId: string,
        filterDateFrom?: string,
        filterDateTo?: string,
        filterInvoiceId?: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/debt-line-item`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
                'filter[invoiceId]': filterInvoiceId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Invalid or missing format`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * @param filterProjectId Mandatory filter for the project id
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of performance.
     *
     * @param filterSkuCode Like Search for the sku code
     * @param filterUsageStart Start date of the usage (Y-m-d)
     * @param filterUsageEnd End date of the usage (Y-m-d)
     * @param filterInvoiceIds Comma delimited string of invoice ids
     * @param filterMetaKey Key of the meta field (required with metaValue)<br>This filter has usually no effect on the prices and their sum,since prices are calculated for debt line items and not single sku usages!
     * @param filterMetaValue Value of the meta field (required with metaKey)<br>This filter has usually no effect on the prices and their sum,since prices are calculated for debt line items and not single sku usages!
     * @returns debtLineItemAggregatedCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReportDebtLineItemCollectionAggregated(
        filterProjectId: string,
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterSkuCode?: string,
        filterUsageStart?: string,
        filterUsageEnd?: string,
        filterInvoiceIds?: string,
        filterMetaKey?: string,
        filterMetaValue?: string,
    ): Promise<debtLineItemAggregatedCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/debt-line-item/aggregated`,
            query: {
                'filter[projectId]': filterProjectId,
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[skuCode]': filterSkuCode,
                'filter[usageStart]': filterUsageStart,
                'filter[usageEnd]': filterUsageEnd,
                'filter[invoiceIds]': filterInvoiceIds,
                'filter[metaKey]': filterMetaKey,
                'filter[metaValue]': filterMetaValue,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of undefined shipping costs in the specified time frame.
     * Get a list of undefined shipping costs in the specified time frame and the requested format.
     * The file type is controlled by the accept header.
     * @param filterDateFrom This filter enables retrieval of data starting from a specified date in UTC.
     * @param filterDateTo This filter enables retrieval of data ending up to a specified date in UTC.
     * @returns any OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getUndefinedShippingCostsCollectionReport(
        filterDateFrom: string,
        filterDateTo: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/undefined-shipping-costs`,
            query: {
                'filter[dateFrom]': filterDateFrom,
                'filter[dateTo]': filterDateTo,
            },
            errors: {
                400: `Invalid time span`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Invalid or missing format`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}