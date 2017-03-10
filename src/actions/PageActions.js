/**
 * Created by ftalaev on 07.03.17.
 */
import {
    GET_COUNT_REQUEST,
    GET_COUNT_SUCCESS
} from '../constants/Page'

export function getCount(count) {

    return (dispatch) => {
        dispatch({
            type: GET_COUNT_REQUEST,
            payload: count
        })

        setTimeout(() => {
            dispatch({
                type: GET_COUNT_SUCCESS,
                payload: [1,2,3,4,5]
            })
        }, 1000)
    }
}