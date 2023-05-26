/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type debtLineItemResource = {
    /**
     * debtLineItemId
     */
    debtLineItemId: string;
    /**
     * skuCode
     */
    skuCode: string;
    /**
     * quantity
     */
    quantity?: number | null;
    /**
     * projectId
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
    priceTotal?: priceProperty | null;
    /**
     * invoiceId
     */
    invoiceId?: string | null;
    /**
     * Unit
     */
    unit?: string | null;
    pricePerUnit?: priceProperty | null;
}
