/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type debtLineItemResource = {
    /**
     * Debt Line Item ID
     */
    debtLineItemId: string;
    /**
     * SKU Code
     */
    skuCode: string;
    /**
     * Quantity
     */
    quantity?: number | null;
    /**
     * Project Id
     */
    projectId: string;
    /**
     * Start time of the usage
     */
    usageStart: string;
    /**
     * End time of the usage
     */
    usageEnd: string;
    priceTotal?: priceProperty;
    /**
     * Invoice number
     */
    invoiceNumber?: string | null;
}
