import { NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

test('markAsRead creates the action correctly, with a n index set to `index`', () => {
    expect(markAsRead(1)).toEqual({type: "MARK_AS_READ", index: 1})
})

test('setNotificationFilter correctly creates the action', () => {
    const res = setNotificationFilter(NotificationTypeFilters.DEFAULT)
    expect(res.filter).toBe("DEFAULT")
})
