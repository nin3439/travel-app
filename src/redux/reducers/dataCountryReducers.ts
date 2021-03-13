const initialState = {
  countries: [],
};
interface actionType {
  type: string;
  data: {}[];
}
const LOAD_DATA = 'LOAD_DATA';
export const countries = (state = initialState, action: actionType) => {
  switch (action.type) {
    case LOAD_DATA: {
      return { ...state, countries: [...state.countries, ...action.data] };
    }
    default: {
      return state;
    }
  }
};

export const loadData = (data: {}[]) => ({ type: LOAD_DATA, data });
