import React from "react";
// import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils";

import { StyleSheetTestUtils } from "aphrodite";

/*
test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
 */

const notificationsList = [
  {id: 1, value: 'New course available', type:'default'},
  {id: 2, value: 'New resume available', type:'urgent'},
  {id: 3, html: getLatestNotification, type:'urgent'},
]

test('Notifications component renders without crashing', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications  displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test("Notifications renders ul", () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByRole('list')).toBeDefined();
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("Notifications renders three list items", () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getAllByRole('listitem').length).toBe(3);
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("Notifications renders three  NotificationItem instances", () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  // expect(screen.getByTestId('child')).toBeInTheDocument() -> how can I access child components?
});

test('NotificationItem renders menuItem when displayDrawer is false', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications />)
  expect(screen.getByText('Your notifications')).toBeDefined()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('NotificationItem renders menuItem when displayDrawer is true', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Your notifications')).toBeDefined()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('Notifications renders correctly with no notificationsList passed', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications displayDrawer={true}/>)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('Notifications renders correctly with an empty notifications array passed', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications listNotifications={[]} displayDrawer={true}/>)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('Notifications renders correctly', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  render(<Notifications listNotifications={notificationsList} displayDrawer={true}/>)
  expect(screen.queryByText('No new notifications for now')).not.toBeInTheDocument()
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

/* class components */
test('mockup the console.log function', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  const mockCLog = jest.fn()
  console.log = mockCLog
  console.log('Test mockup')
  expect(mockCLog).toHaveBeenCalled()
  mockCLog.mockRestore();
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('Component does not rerender if notificationsList does not change', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  const { rerender } = render(<Notifications listNotifications={notificationsList} displayDrawer={true} />)
  const spyLog = jest.spyOn(console, 'log')
  expect(screen.getAllByRole('listitem').length).toBe(3)
  // expect(spyLog).toHaveBeenCalledWith('Notifications rerendering ...')
  rerender(<Notifications listNotifications={notificationsList} displayDrawer={true} />)
  expect(spyLog).toHaveBeenCalledTimes(0)
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('Component rerenders if notificationsList increases in length', () => {
  StyleSheetTestUtils.suppressStyleInjection()
  const { rerender } = render(<Notifications listNotifications={notificationsList} displayDrawer={true} />)
  const spyLog = jest.spyOn(console, 'log')
  expect(screen.getAllByRole('listitem').length).toBe(3)
  const newList = [...notificationsList, {id: 4, html: getLatestNotification, type:'urgent'}]
  rerender(<Notifications listNotifications={newList} displayDrawer={true}/>)
  expect(screen.getAllByRole('listitem').length).toBe(4)
  expect(spyLog).toHaveBeenCalledTimes(1)
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

test('handleDisplayDrawer gets called when `your notifications` is clicked on', () => {
  // tested in App.test
})

test('handleHideDrawer gets called when `close btn` is clicked on', () => {
  // tested in App.test - could define handleFns here and mock the same... since the fns are props...
})
