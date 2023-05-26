/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { invoice } from '../models/invoice';
import type { invoiceCollection } from '../models/invoiceCollection';
import type { newInvoice } from '../models/newInvoice';
import type { updateInvoice } from '../models/updateInvoice';
import { request as __request } from '../core/request';

export class InvoiceService {

    /**
     * Get a list of invoices.
     * Get a list of invoices.
     * @param page The page to read. Default is the first page.
     * @param pageSize The maximum size per page is 100. Default is 20.
     * @param paginationMode The paginationMode to use:
     * - default: The total number of items in the collection will not be calculated.
     * - totalCount: The total number of items in the collection will be calculated. This can mean loss of performance.
     *
     * @param filterProjectId Project id filter
     * @param filterInvoiceNumber Invoice number filter
     * @returns invoiceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInvoiceCollection(
        page?: number,
        pageSize?: number,
        paginationMode: 'default' | 'totalCount' = 'default',
        filterProjectId?: string,
        filterInvoiceNumber?: string,
    ): Promise<invoiceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/invoice`,
            query: {
                'page': page,
                'pageSize': pageSize,
                'paginationMode': paginationMode,
                'filter[projectId]': filterProjectId,
                'filter[invoiceNumber]': filterInvoiceNumber,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a new invoice.
     * Add a new invoice.
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns invoice Created
     * @throws ApiError
     */
    public static async postInvoice(
        requestBody: newInvoice,
    ): Promise<errorResponse | invoice> {
        const result = await __request({
            method: 'POST',
            path: `/invoice`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get the invoice with the given invoice id.
     * Get the invoice with the given invoice id.
     * @param invoiceId invoice id
     * @returns invoice OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getInvoice(
        invoiceId: string,
    ): Promise<invoice | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/invoice/${invoiceId}`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update an invoice.
     * Updates some fields on an invoice. Only a limited set of fields can be updated
     * @param invoiceId invoice id
     * @param requestBody
     * @returns invoice OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchInvoice(
        invoiceId: string,
        requestBody: updateInvoice,
    ): Promise<invoice | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/invoice/${invoiceId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}