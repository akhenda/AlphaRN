import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Redux Reducers', () => {
  // You would import the action from your codebase in a real scenario
  const getTeam = (currentLeague, currentTeam) => {
    const match = {
      date: '2018-03-20',
      score1: 5,
      score2: 1,
      team1: {
        code: 'ARS',
        key: 'arsenal',
        name: 'Arsenal',
      },
      team2: {
        code: 'MUN',
        key: 'manchester-united',
        name: 'Manchester United',
      },
    };

    return {
      type: 'GET_TEAM',
      payload: { match, currentTeam },
    };
  };

  const initialState = { currentTeam: '', matches: [] };
  const store = mockStore(initialState);

  const team = (state = initialState, action) => {
    if (action.type === 'GET_TEAM') {
      return { ...action.payload };
    }

    return state;
  };
  
  beforeEach(() => {
    store.clearActions();
  });

  it('returns the same state on an unhandled action', () => {
    const action = { type: '_NULL' };
    expect(team(undefined, action)).toMatchSnapshot();
  });

  it('handles GET_TEAM passing (English, Arsenal)', () => {
    expect(team(undefined, getTeam('English', 'Arsenal'))).toMatchSnapshot();
  });
});
