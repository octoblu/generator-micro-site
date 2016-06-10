import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount, shallow } from 'enzyme';
​
import <%= componentName %> from './';
​
chai.use(chaiEnzyme());
chai.use(sinonChai);
​
describe('<<%= componentName %> />', () => {
  it('should render nothing', () => {
    const sut = shallow(<<%= componentName %> />)
    expect(sut).to.be.empty
  });
});
