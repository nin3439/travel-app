const initialState = {
  isModalActive: false,
};
interface Iaction {
  type: string;
}
export const CHANGE_MODAL_AUTH = 'CHANGE_MODAL_AUTH';
export const controlers = (state = initialState, action: Iaction) => {
  switch (action.type) {
    case CHANGE_MODAL_AUTH:
      return { ...state, isModalActive: !state.isModalActive };
    default:
      return state;
  }
};
