export const ActionTypes = {
  SHARE: 'sharing',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHARE:
      return {
        ...state,
        sharing: !state.sharing
      }
    default:
      throw new Error('Unknown action type');
  }
};

export default reducer;
