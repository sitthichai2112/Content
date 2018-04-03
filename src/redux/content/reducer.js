
import {GETLIST} from "./action";
const initialState = {
    list: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETLIST:
            return {
                ...state,
                list: action.list
            };
            break
        default:
            return state
    }
}