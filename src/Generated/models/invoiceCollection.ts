/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { invoice } from './invoice';

/**
 * A collection of invoices
 */
export type invoiceCollection = (collection & {
    data?: Array<invoice>,
});
