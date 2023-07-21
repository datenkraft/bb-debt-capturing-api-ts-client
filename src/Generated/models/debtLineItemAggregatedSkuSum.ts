/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type debtLineItemAggregatedSkuSum = {
    /**
     * Quantity sum of sku usages
     */
    usedCount: number;
    priceTotal: priceProperty;
}
