import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure  } from "../actions/uiActionCreators"
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes"
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/uiActionTypes"
import { Map } from 'immutable'

// define initial state of the reducer...
export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export const uiReducer = (state=initialState, action) => {
    // create a map
    state = Map(state)
    // handle the different actions (types)
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true)
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false)
        case LOGOUT:
            return state.set('isUserLoggedIn', false)
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true)
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false)
        default:
            break
    }
    return state // as updated
}
