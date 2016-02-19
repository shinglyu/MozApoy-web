const initialState = {
  items: [{
    text: 'Login with correct username and password',
    done: true,
    priority: 1
  }, {
    text: 'Login with invalid username',
    done: true,
    priority: 2
  }, {
    text: 'Login with valid username and invalid password',
    done: true,
    priority: 3
  }, {
    text: 'Login with empty username and empty password',
    done: true,
    priority: 4
  }],
  total_time: 60,
};

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      items: [
        ...state.items, {
          text: action.fields.name.value,
        },
      ],
    };

  case 'DELETE_ITEM':
    return {
      ...state,
      items: [
        ...state.items.slice(0, action.index),
        ...state.items.slice(+action.index + 1),
      ],
    };

  case 'SET_TOTAL_TIME':
    return {
      ...state,
      total_time: action.time,
    };

  default:
    return state;
  }
}
