# Identity server client

A client for interacting with the Lodgify's identity server quickly and easily!

## Install

`$ npm install @lodgify/identity-server-client`

## Usage
```js
import { postLogin } from '@lodgify/identity-server-client';

const websiteId = 123456;

postLogin(websiteId, {
  email: "bruce@wayneenterprises.com",
  password: "IAmBatman"
  websiteId,
});
```

### Note!
`identity-server-client` relies on the `IDENTITY_SERVER_HOST` environment variable to be set if you want to hit a different development environment (staging or integration). Without it the domain will the live environment's.

The server host should be set at the following location `global.process.env.IDENTITY_SERVER_HOST`.

## Contributing

See [contributing](https://github.com/lodgify/identity-server-client/blob/master/docs/CONTRIBUTING.md).