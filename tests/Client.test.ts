import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {DebtCapturingApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        DebtCapturingApiClient.init(
            configOptions,
            'https://debt-capturing-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                DebtCapturingApiClient.Generated.DebtLineItemService
                    .getDebtLineItem('00000000-0000-0000-0000-000000000000')
                    .then((debtLineItem) => {
                        expect(debtLineItem).toEqual({
                            debtLineItemId: '00000000-0000-0000-0000-000000000000',
                            skuCode: 'test_sku_code',
                            quantity: 1,
                            projectId: 'ba74c99d-d622-4dcd-a1d5-f3db80d0a1c8',
                            usageStart: '2021-01-01T00:00:00+00:00',
                            usageEnd: '2021-01-01T23:59:59+00:00',
                            priceTotal: {
                                currency: 'EUR',
                                minorMicro: 100000000,
                            },
                            invoiceId: '00000000-0000-0000-0000-100000000000',
                            unit: 'test_unit',
                            pricePerUnit: {
                                currency: 'EUR',
                                minorMicro: 100000000,
                            },
                        });
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});
