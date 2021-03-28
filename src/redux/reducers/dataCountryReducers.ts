const initialState = {
  countries: [],
  isLoad: false,
};
interface actionType {
  type: string;
  data: {}[];
}
const CHANGE_LOAD = 'CHANGE_LOAD';
const LOAD_DATA = 'LOAD_DATA';
export const countries = (state = initialState, action: actionType) => {
  switch (action.type) {
    case LOAD_DATA: {
      return { ...state, countries: [...action.data] };
    }
    case CHANGE_LOAD: {
      return { ...state, isLoad: !state.isLoad };
    }
    default: {
      return state;
    }
  }
};
export const changeLoad = () => ({ type: CHANGE_LOAD });
export const loadData = (data: {}[]) => ({ type: LOAD_DATA, data });
