import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {DebtCapturingApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID_STAGING ?? '',
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
                    .getDebtLineItem('c4f96d2a-eee7-437f-bf78-622d8a1ae820')
                    .then((debtLineItem) => {
                        expect(debtLineItem).toEqual({
                            Id: '00000000-0000-0000-0000-000000000000',
                            Sku_Code: 'test_sku_code',
                            Quantity: 1,
                            Project_Id: '00000000-0000-0000-0000-000000000000',
                            UsageStart: '2021-01-01T00:00:00+00:00',
                            UsageEnd: '2021-01-01T23:59:59+00:00',
                            PriceTotalMinorMicro: 100000000,
                            PriceCurrency: 'EUR',
                            InvoiceNumber: 'test_invoice_number',
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
