import { uiReducer, initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

test('the state returned by uiReducer equals initialState when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState)
})

test('the state returned by uiReducer equals initialState when `SELECT_COURSE` action is passed', () => {
    expect(uiReducer(undefined, selectCourse(1))).toEqual(initialState)
})

test('the state returned by uiReducer is correctly updated when `DISPLAY_NOTIFICATION_DRAWER` action is passed', () => {
    expect(uiReducer(undefined, displayNotificationDrawer()).isNotificationDrawerVisible).toEqual(true)
})
