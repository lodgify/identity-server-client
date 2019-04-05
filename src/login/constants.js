const PROTOCOL = 'https://';
const SUBDOMAIN = 'identityserver.';
const DOMAIN = global.process.env.IDENTITY_SERVER_HOST || 'lodgify.com';

export const ORIGIN = `${PROTOCOL}${SUBDOMAIN}${DOMAIN}`;

export const WEBSITE_ID_PLACEHOLDER = ':websiteId';

const OWNER_LOGIN_FRAGMENT = `/account/owner-login/`;

export const PATHNAME_TEMPLATE = `${OWNER_LOGIN_FRAGMENT}${WEBSITE_ID_PLACEHOLDER}`;

export const INCLUDE_CREDENTIALS_HEADER = { credentials: 'include' };
