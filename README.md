# Backbone - Debt Capturing API TS Client

## Introduction

The Debt Capturing API TS Client enables you to work with the Debt Capturing API.

## Prerequisites

- npm

## Installation

You can use [npm](https://www.npmjs.com/) to install the package.

~~~~ bash
npm install @datenkraft/bb-debt-capturing-api-ts-client
~~~~

## Using the package

The package can be used to communicate with the Debt Capturing API.
The Client includes functionalities for every endpoint defined in the openapi.json.
The Client is auto-generated with [ferdikoomen/openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) using an openapi.json file.

### Initializing the Client

~~~~ typescript
import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { DebtCapturingApiClient } from '@datenkraft/bb-debt-capturing-api-ts-client';

const configOptions: ConfigOptions = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  oAuthTokenHost: 'oAuthTokenHost',
  tokenTradeInPath: 'tokenTradeInPath',
  externalIdToken: 'externalIdToken',
  useExternalIdToken: true,
};

DebtCapturingApiClient.init(configOptions).then(() => {
  // Client is initialized
});
~~~~

### Example Endpoint: Get DebtLineItem
~~~~ typescript
DebtCapturingApiClient.Generated.DebtLineItemService.getDebtLineItem('12345678-90ab-cdef-1234-567890abcdef')
  .then((debtLineItem) => {
    // Request succeeded
  })
  .catch((error) => {
    // An error occured
  });
~~~~

## License
This repository is available under the [MIT license](https://opensource.org/licenses/MIT).
