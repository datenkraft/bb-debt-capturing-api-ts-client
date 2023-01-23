/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { skuUsageDebtLineItemResourceCollection } from '../models/skuUsageDebtLineItemResourceCollection';
import { request as __request } from '../core/request';

export class SkuUsageDebtLineItemService {

    /**
     * Get skuUsages for debtLineItems
     * Get skuUsages for debtLineItems
     * @param filterDebtLineItemIds debtLineItemIds filter
     * @returns skuUsageDebtLineItemResourceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuUsageDebtLineItemCollection(
        filterDebtLineItemIds?: string,
    ): Promise<skuUsageDebtLineItemResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku-usage-debt-line-item`,
            query: {
                'filter[debtLineItemIds]': filterDebtLineItemIds,
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

}