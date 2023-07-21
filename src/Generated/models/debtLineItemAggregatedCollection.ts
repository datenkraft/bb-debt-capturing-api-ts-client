/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { collection } from './collection';
import type { debtLineItemAggregatedSku } from './debtLineItemAggregatedSku';
import type { priceProperty } from './priceProperty';

export type debtLineItemAggregatedCollection = (collection & {
    sum: {
        priceTotal?: priceProperty,
    },
} & {
    data: Array<debtLineItemAggregatedSku>,
});
