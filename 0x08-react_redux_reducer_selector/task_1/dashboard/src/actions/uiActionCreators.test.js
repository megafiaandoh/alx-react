import { login } from "./uiActionCreators";

test('login action is correctly created, with a user object (with password and email)', () => {
    const res = login("Rahab", "testPassword")
    expect(res.user).toEqual({"email": "Rahab", "password": "testPassword"})
})
