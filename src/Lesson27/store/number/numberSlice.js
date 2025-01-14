export const INCREMENT = "inc";
export const DECREMENT = "dec";

const initialState = 0;

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const Increment = () => ({ type: INCREMENT });
export const Decrement = () => ({ type: DECREMENT });

export default numberReducer;
