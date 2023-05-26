/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type baseInvoice = {
    /**
     * Project id
     */
    projectId: string;
    /**
     * The invoice number, may be null.
     */
    invoiceNumber: string | null;
    /**
     * The invoice includes all DebtLineItems with a usageStart and usageEnd date less or equal than the cutoff date, which existed and were not already invoiced at the time of processing the invoice.
     */
    cutoffDate: string;
}
