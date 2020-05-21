const intialState = {
  posts: [],
  userName: 'John Dee',
  userId: '1',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      let newposts = [...state.posts, ...action.payload];
      state = {
        ...state,
        posts: newposts,
      };
      return state;
    default:
      return state;
  }
};
