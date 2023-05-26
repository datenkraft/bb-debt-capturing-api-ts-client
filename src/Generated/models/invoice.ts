/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseInvoice } from './baseInvoice';

export type invoice = (baseInvoice & {
    /**
     * Invoice id
     */
    invoiceId?: string,
    /**
     * The invoice status with the following possible values:
     * - processing: only initially set before the DebtLineItems have been linked with the invoice.
     * - completed: all DebtLineItems have been linked to the invoice.
     *
     */
    invoiceStatus?: invoice.invoiceStatus,
});

export namespace invoice {

    /**
     * The invoice status with the following possible values:
     * - processing: only initially set before the DebtLineItems have been linked with the invoice.
     * - completed: all DebtLineItems have been linked to the invoice.
     *
     */
    export enum invoiceStatus {
        PROCESSING = 'processing',
        COMPLETED = 'completed',
    }


}
