const intialState = {
  posts: [],
  user_name: '',
  userId: '',
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
