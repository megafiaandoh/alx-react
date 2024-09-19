import { normalize, schema } from 'normalizr'
// import * as data from '../../notifications.json'
const data = require('../../notifications.json')

// setup schemas
const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {idAttribute: "guid"})
const notification = new schema.Entity("notifications", {author: user, context: message})

export const normalizedData = normalize(data, [notification])

export default function getAllNotificationsByUser(userId) {
    // returns a list containing all the context objects from data where author id == userId
    return data.filter((item) => item.author.id === userId).map((item) => item.context)
}
