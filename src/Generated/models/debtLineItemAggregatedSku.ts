/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { debtLineItemAggregated } from './debtLineItemAggregated';
import type { debtLineItemAggregatedSkuSum } from './debtLineItemAggregatedSkuSum';

export type debtLineItemAggregatedSku = {
    /**
     * Sku Code
     */
    skuCode: string;
    sum: debtLineItemAggregatedSkuSum;
    /**
     * Sku Code
     */
    debtLineItems: Array<debtLineItemAggregated>;
}
