const initialState = {
  items: [{
    text: 'Login with correct username and password',
    done: true,
  }, {
    text: 'Login with invalid username',
    done: true,
  }, {
    text: 'Login with valid username and invalid password',
    done: true,
  }, {
    text: 'Login with empty username and empty password',
    done: true,
  }],
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

  default:
    return state;
  }
}
