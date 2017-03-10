/**
 * Created by ftalaev on 07.03.17.
 */
import {
    GET_COUNT_REQUEST,
    GET_COUNT_SUCCESS
} from '../constants/Page'

const initialState = {
    count: 1,
    numbers: [],
    fetching: false
}

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_COUNT_REQUEST:
            return {...state, count: action.payload, fetching: true}

        case GET_COUNT_SUCCESS:
            return {...state, numbers: action.payload, fetching: false}

        default:
            return state;
    }

}