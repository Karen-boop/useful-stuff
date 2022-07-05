
import React from 'react';
import {} from '@shopify/channels-ui';
import {mountWithAppContext, mockI18n} from 'tests/utilities';
import {CustomRoot} from '@shopify/react-testing';

import translations from '../translations/en.json';
import {ENUM} from '../../../../../enums';

import {__COMP__} from '../';
import type Props from '';

import defaultExport, {bar, foo} from '../foo-bar-baz';  
const mockProps: Props = {
};

describe('< />', () => {
  let wrapper: CustomRoot<any, any>;
  const i18n = mockI18n(translations);

  beforeEach(async () => {
    wrapper = await mountWithAppContext(
      < __COMP__{...mockProps} />,
    );
  });

  it('renders a < __COMP__ /> ', async () => {
    expect(wrapper).toContainReactComponent();
  });
  it('renders a < __COMP__ /> with props ', async () => {
    expect(wrapper).toContainReactComponent(, {
        prop1: mockProps.prop1
    });
  });

});
// import defaultExport, {bar, foo} from '../foo-bar-baz';

// jest.mock('../foo-bar-baz', () => {
//   const originalModule = jest.requireActual('../foo-bar-baz');

//   //Mock the default export and named export 'foo'
//   return {
//     __esModule: true,
//     ...originalModule,
//     default: jest.fn(() => 'mocked baz'),
//     foo: 'mocked foo',
//   };
// });

// test('should do a partial mock', () => {
//   const defaultExportResult = defaultExport();
//   expect(defaultExportResult).toBe('mocked baz');
//   expect(defaultExport).toHaveBeenCalled();

//   expect(foo).toBe('mocked foo');
//   expect(bar()).toBe('bar');
// });

