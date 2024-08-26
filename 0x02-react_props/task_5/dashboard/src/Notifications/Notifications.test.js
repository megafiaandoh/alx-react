import React from "react";
// import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils";

/*
test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
 */

// describe("Notification component tests", () => {
//     let notification;
//     beforeEach(() => {
//         // notification = shallow(<Notifications />)
//         notification = shallow(<Notifications />)
//     })
//   it("renders Notification component without crashing", () => {
//     expect(notification).toBeDefined();
//   });

//   it("renders ul", () => {
//     expect(notification.find("ul")).toBeDefined();
//   });

//   it("renders three list items", () => {
//     expect(notification.find("li")).toHaveLength(3);
//   });

//   it("renders correct text", () => {
//     expect(notification.find("p").text()).toBe("Here is the list of notifications");
//   });
// });

const notificationsList = [
  {id: 1, value: 'New course available', type:'default'},
  {id: 2, value: 'New resume available', type:'urgent'},
  {id: 3, html: getLatestNotification, type:'urgent'},
]

test('Notifications component renders without crashing', () => {
  render(<Notifications  displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})

test("Notifications renders ul", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByRole('list')).toBeDefined();
});

test("Notifications renders three list items", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getAllByRole('listitem').length).toBe(3);
});

test("Notifications renders three  NotificationItem instances", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  // expect(screen.getByTestId('child')).toBeInTheDocument() -> how can I access child components?
});

test('NotificationItem renders menuItem when displayDrawer is false', () => {
  render(<Notifications />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

test('NotificationItem renders menuItem when displayDrawer is true', () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

test('Notifications renders correctly with no notificationsList passed', () => {
  render(<Notifications />)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
})

test('Notifications renders correctly with an empty notifications array passed', () => {
  render(<Notifications listNotifications={[]}/>)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
})

test('Notifications renders correctly', () => {
  render(<Notifications listNotifications={notificationsList}/>)
  expect(screen.queryByText('No new notifications for now')).not.toBeInTheDocument()
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})
