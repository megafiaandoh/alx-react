import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure  } from "../actions/uiActionCreators"
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes"
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/uiActionTypes"

// define initial state of the reducer...
export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export const uiReducer = (state=initialState, action) => {
    // handle the different actions (types)
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isUserLoggedIn: true}
        case LOGIN_FAILURE:
            return { ...state, isUserLoggedIn: false}
        case LOGOUT:
            return { ...state, isUserLoggedIn: false}
        case DISPLAY_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: true}
        case HIDE_NOTIFICATION_DRAWER:
            return { ...state, isNotificationDrawerVisible: false}
        default:
            break
    }
    return state // as updated
}
