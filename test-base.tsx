
import React from 'react';
import {} from '@shopify/channels-ui';
import {mountWithAppContext, mockI18n} from 'tests/utilities';
import {CustomRoot} from '@shopify/react-testing';

import translations from '../translations/en.json';

import {__COMP__} from '../';
import type Props from '';


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
