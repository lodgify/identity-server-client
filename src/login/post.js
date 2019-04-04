import { postJSON } from '@lodgify/isomorphic-fetch-helpers';

import { ORIGIN } from './constants';
import { getPathname } from './utils/getPathname';
import { getUrl } from './utils/getUrl';
import { INCLUDE_CREDENTIALS_HEADER, PATHNAME_TEMPLATE } from './constants';

/**
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @return {Promise}
 */
export const post = (websiteId, formValues) => {
  const pathname = getPathname(PATHNAME_TEMPLATE, websiteId);
  const url = getUrl(ORIGIN, pathname);

  return postJSON(url, formValues, INCLUDE_CREDENTIALS_HEADER);
};
