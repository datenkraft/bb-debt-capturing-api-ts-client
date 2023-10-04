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
     * @param filterDateFrom dateFrom filter. The filters dateFrom and dateTo are required unless an invoiceId filter is
     * given.
     * @param filterDateTo dateTo filter. The filters dateFrom and dateTo are required unless an invoiceId filter is
     * given.
     * @param filterInvoiceId invoiceId filter
     * @returns getDebtLineItemCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getDebtLineItemCollection(
        filterProjectId: string,
        filterDateFrom?: string,
        filterDateTo?: string,
        filterInvoiceId?: string,
    ): Promise<getDebtLineItemCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/debt-line-item`,
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

}