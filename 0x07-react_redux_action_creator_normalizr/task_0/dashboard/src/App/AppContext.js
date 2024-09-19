import { createContext } from 'react'

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
}

// logout the user
export const logOut = () => {
    user.isLoggedIn =  false
}

// create context and default its value to an object of user and logout fn
export const AppContext = createContext({user, logOut})
