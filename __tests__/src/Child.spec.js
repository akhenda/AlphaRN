import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Child from 'src/Child';
import * as Utils from 'src/utils/capitalize';


describe('Child', () => {
  let component;
  let onClearStub;
  const capitalizedString = 'mock string value';

  test('renders correctly', () => {
    const stringValue = 'random string';
    const snapshot = renderer.create(<Child text={stringValue} onClear={onClearStub} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    Utils.capitalizeWords = jest.fn();
    Utils.capitalizeWords.mockReturnValue(capitalizedString);
    onClearStub = jest.fn();
  });

  describe('when props.text is empty', () => {
    const stringValue = '';
    beforeEach(() => {
      component = shallow(<Child text={stringValue} onClear={onClearStub} />);
    });

    it('renders placeholder string', () => {
      const expectedString = 'You have not written anything!';
      expect(component.find('Text').getElements()[1].props.children).toEqual(expectedString);
    });

    it('does not call capitalizeWords', () => {
      expect(Utils.capitalizeWords.mock.calls.length).toBe(0);
    });

    describe('when clear text button is pressed', () => {
      it('should call onClear callback', () => {
        component.find('TouchableOpacity').simulate('press');
        expect(onClearStub).toBeCalled();
      });
    });
  });

  describe('when props.text is not empty', () => {
    const stringValue = 'random string';
    beforeEach(() => {
      component = shallow(<Child text={stringValue} onClear={onClearStub} />);
    });

    it('renders string with capitalizeWords', () => {
      expect(Utils.capitalizeWords).toBeCalledWith(stringValue);
      expect(component.find('Text').getElements()[1].props.children).toEqual(capitalizedString);
    });
  });
});
