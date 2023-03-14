import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { XxxApiClient } from '../dist';
import { XxxApi } from '../dist/Generated';

describe('Client Test (staging)', () => {
  test('Initialize and use the generated Client', (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? '',
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
      oAuthTokenHost:
        'https://authentication-api.staging.backbone.datenkraft.info',
    };

    XxxApiClient.getApiConfig(
      configOptions,
      'https://xxx-api.staging.backbone.datenkraft.info/v1'
    )
      .then((config) => {
        const Xxxapi = new XxxApi(config);

        Xxxapi
          .getXxxCollection()
          .then((data) => {
        	  // testcase
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});

