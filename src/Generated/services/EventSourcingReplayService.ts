/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class EventSourcingReplayService {

    /**
     * Get the status of the event sourcing replay
     * Get the status of the event sourcing replay
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getEventSourcingReplay(): Promise<{
        /**
         * status
         */
        status?: 'active' | 'available' | 'locked',
    } | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/event-sourcing/replay`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Execute event sourcing replay (recalculates all DebtLineItems)
     * Execute event sourcing replay (recalculates all DebtLineItems).
     *
     * Please be aware of the effects a replay involves!
     * - The replay does not affect DebtLineItems with an Invoice_Id set.
     * - Changes of the calculators/prices will affect non invoiced, past, events
     * and therefore also the resulting DebtLineItems.
     * - At the beginning/before the replay starts, every DebtLineItem,
     * which is not invoiced yet/no Invoice_Id set, gets deleted.
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async postEventSourcingReplay(
        requestBody?: {
            /**
             * Email to send info messages about the event sourcing replay to
             */
            infoMailAddress?: string,
        },
    ): Promise<{
        /**
         * date
         */
        date?: string,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/event-sourcing/replay`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}