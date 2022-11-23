export const FORM_INITITAL_STATE = {
  title: '',
  desc: '',
  price: 0,
  category: '',
  tags: [],
  images: {
    sm: '',
    md: '',
    lg: '',
  },
  quantity: 0,
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'ON_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case 'ON_ADD_TAG':
      return {
        ...state,
        tags: [...state.tags, action.payload],
      }
    case 'ON_REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      }
    case 'ON_INCREASE':
      return {
        ...state,
        quantity: state.quantity + 1,
      }
    case 'ON_DECREASE':
      return {
        ...state,
        quantity: state.quantity - 1,
      }
    default:
      return state
  }
}
