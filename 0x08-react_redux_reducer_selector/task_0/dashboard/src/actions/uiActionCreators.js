import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";


export const login = (email, password) => {
    return {
        type: LOGIN,
        user: {email, password}
    }
}

// bound login (ie create a function that dispatches the action)
export const boundingLogin = (email, password) => dispatch(login(email, password))

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    }
}

export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    }
}


export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}

// async action creator...
export const loginRequest = (email, password) => {
    return async (dispatch) => {
        boundingLogin(email, password)
        try {
            const res = await fetch("http://localhost:3000/login-success.json");
            const res_1 = await res.json();
            console.log(res_1)
            return dispatch(loginSuccess());
        } catch (error) {
            return dispatch(loginFailure());
        }
    }
}
