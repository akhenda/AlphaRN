import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HomeScreen from 'src/containers/HomeScreen';
import Child from 'src/components/Child';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('HomeScreen', () => {
  let component;
  let textInput;
  const defaultState = { text: '', loading: false };
  
  // Initialize mockstore
  const initialState = {
    auth: {
      user: null,
      token: '', 
    },
    app: {},
  };
  const store = mockStore(initialState);

  test('renders correctly', () => {
    // const tree = renderer.create(<HomeScreen store={store} />).toJSON();
    // expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    // component = shallow(<HomeScreen store={store} />);
    // textInput = component.find('TextInput');
  });

  it('has default state', () => {
    // expect(component.state()).toEqual(defaultState);
  });

  it('renders welcome text', () => {
    // const expectedText = 'Welcome to React Native!';
    // const text = component.find('Text').first().children().text();
    // expect(text).toEqual(expectedText);
  });

  it('renders input field with placeholder', () => {
    // const expectedPlaceholder = 'Write something...';
    // expect(textInput.length).toBe(1);
    // expect(textInput.props().placeholder).toEqual(expectedPlaceholder);
  });

  describe('when text changes', () => {
    // const newText = 'random string';

    beforeEach(() => {
      // textInput.simulate('changeText', newText);
    });

    it('updates component state', () => {
      // expect(component.state().text).toEqual(newText);
    });

    it('passes text from state to Child', () => {
      // const childComponent = component.find(Child);
      // expect(childComponent.props().text).toEqual(newText);
    });

    describe('when clearText callback is called', () => {
      beforeEach(() => {
        // const childComponent = component.find(Child);
        // childComponent.simulate('clear');
      });

      it('resets state', () => {
        // expect(component.state()).toEqual(defaultState);
      });
    });
  });
});
