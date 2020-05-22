const intialState = {
  posts: [],
  userName: 'John Doe',
  userId: '1',
  userEmail: 'johndoe@gmail.com',
  userPhone: '143-504-339-221',
  userAddress: '#14 Anƒas Street, LA',
  userCompany: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
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
