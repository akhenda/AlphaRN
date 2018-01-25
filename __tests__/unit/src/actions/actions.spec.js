import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { create } from 'apisauce';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' });
const success = () => ({ type: 'FETCH_DATA_SUCCESS' });
const api = create({ baseURL: 'https://jsonplaceholder.typicode.com' });

describe('Redux Actions', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);
  
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    expect(store.getActions()).toMatchSnapshot();
  });

  describe('synchronous actions', () => {
    it('should dispatch addTodo action', () => {
      // Dispatch the action
      store.dispatch(addTodo());

      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = { type: 'ADD_TODO' };
      expect(actions).toEqual([expectedPayload]);
    });
  });
  
  describe('asynchronous actions', () => {
    const fetchData = () => {
      return (dispatch) => {
        return api.get('/users') // Some async action with promise
          .then(() => dispatch(success()));
      };
    };

    it('should execute fetch data', () => {
      // Return the promise
      return store.dispatch(fetchData())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(success());
        });
    });
  });
});
