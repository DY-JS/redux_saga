import {LOAD_USER_DETAILS, LOAD_USER_DETAILS_SUCCESS, LOAD_USER_DETAILS_FAILURE} from './actions';

const initialDetailsState = {
    loading: false,
    error: null,
    data: null
    // data: {
    //     total: 0,
    //     results: []
    // },
}

export default function peopleDetailsReducer(state=initialDetailsState, action) {
    switch(action.type) {
        case LOAD_USER_DETAILS: {
          return {
              ...state,
              loading: true,
          }
        }

        case LOAD_USER_DETAILS_SUCCESS: {
          return {
              ...state,
              loading: false,
              error: false,
              data: action.payload,
          };
        }

        case LOAD_USER_DETAILS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
          }

        default: return state;
    }
}