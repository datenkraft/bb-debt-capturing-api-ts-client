import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { XXXApiClient } from '../dist';
import { ShopApi } from '../dist/Generated';

describe('Client Test (staging)', () => {
  test('Initialize and use the generated Client', (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? '',
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
      oAuthTokenHost:
        'https://authentication-api.staging.backbone.datenkraft.info',
    };

    XXXApiClient.getApiConfig(
      configOptions,
      'https://XXX-api.staging.backbone.datenkraft.info/v1'
    )
      .then((config) => {
        const XXXapi = new XXXApi(config);

        api
          .getXXXCollection()
          .then((xxx) => {
        	//testcase  
            }
            done();
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});

