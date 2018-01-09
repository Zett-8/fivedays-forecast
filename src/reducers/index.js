import { FETCH_DATA } from "../actions";


export default (state=[], action) => {
    if (action.payload === 'error') {
        return state;
    }

    switch (action.type) {
        case FETCH_DATA:
            return [action.payload.data, ...state];
        default:
            return state;
    }
}

