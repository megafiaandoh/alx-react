import getAllNotificationsByUser, { normalizedData } from "./notifications";

test('function returns an array of context objects for notifications whose author id === userId', () => {
    expect(getAllNotificationsByUser('5debd764a7c57c7839d722e9')).toEqual([{
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
        }])
})
test('nested data normalization is correctly done', () => {
    // normalized data has a correct result array
    expect(normalizedData.result.length).toEqual(14)
    expect(normalizedData.result.includes("5debd76480edafc8af244228")).toBe(true)
    // normalized data has the correct `users` entity
    expect(normalizedData.entities.users['5debd764a7c57c7839d722e9']).toEqual({"age": 25, "email": "poole.sanders@holberton.nz",
    "id": "5debd764a7c57c7839d722e9", "name": {"first": "Poole", "last": "Sanders"}, "picture": "http://placehold.it/32x32"})
    // normalized data has a correct messages entity
    expect(normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"]).toEqual({"guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
    "isRead": false, "type": "default", "value": "Cursus risus at ultrices mi."})
})
