/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { debtLineItemAggregatedSkuUsage } from './debtLineItemAggregatedSkuUsage';
import type { priceProperty } from './priceProperty';

export type debtLineItemAggregated = {
    /**
     * Id of the debt line item
     */
    id: string;
    /**
     * quantity
     */
    quantity: number;
    /**
     * Start time of the usage
     */
    usageStart: string;
    /**
     * End time of the usage
     */
    usageEnd: string;
    priceTotal: priceProperty;
    pricePerUnit?: priceProperty;
    /**
     * Id of the invoice (internal usage)
     */
    invoiceId?: string | null;
    /**
     * Number of the invoice
     */
    invoiceNumber?: string | null;
    skuUsages?: Array<debtLineItemAggregatedSkuUsage>;
}
