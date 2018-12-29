export default (state = null, action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload.data;
  }
  return state;
};