import * as actions from "../actions";

type InitialStateType = {
  weather: object | null ,
  one:object | null,
  loading:boolean,
  error:string
}

const initialState = {
  weather: null,
  one: null,
  loading: false,
  error:""
};

export default (state =initialState,action:any) : InitialStateType => {
  switch (action.type) {
    case actions.FETCH_WEATHER_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
        error: "",
      };
    case actions.FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        weather: {},
        error: action.payload,
        one: null
      };
    case actions.DELETE_CITY:
      return { ...state, one: null };
    default:
      return state;
  }
};
