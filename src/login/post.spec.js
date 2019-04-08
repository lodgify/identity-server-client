jest.mock('@lodgify/fetch-related-utils');
jest.mock('./utils/getUrl');
jest.mock('./utils/getPathname');

import {
  postJSON,
  // eslint-disable-next-line import/named
  postJSONReturnValue,
} from '@lodgify/fetch-related-utils';

import { getPathname } from './utils/getPathname';
import { getUrl } from './utils/getUrl';
import { INCLUDE_CREDENTIALS_OPTIONS, ORIGIN } from './constants';
import { PATHNAME_TEMPLATE } from './constants';
import { post } from './post';

const URL = 'url';
const websiteId = 123;
const PATHNAME = `/pathname/${websiteId}`;

getUrl.mockImplementation(() => URL);
getPathname.mockImplementation(() => PATHNAME);

const formValues = '📝';

describe(`POST login`, () => {
  beforeAll(() => {
    post(websiteId, formValues);
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(PATHNAME_TEMPLATE, websiteId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `postJSON` with the correct arguments', () => {
    expect(postJSON).toHaveBeenCalledWith(
      URL,
      formValues,
      {},
      INCLUDE_CREDENTIALS_OPTIONS
    );
  });

  it('should return whatever `postJSON` returns', () => {
    const actual = post();

    expect(actual).toBe(postJSONReturnValue);
  });
});
