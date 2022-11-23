export const INITIAL_STATE = {
  loading: false,
  users: [],
  error: false,
}
export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'ON_FETCH':
      return {
        loading: true,
        error: false,
        users: [],
      }
    case 'ON_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case 'ON_ERROR':
      return {
        loading: false,
        users: [],
        error: true,
      }
    default:
      return state
  }
}
