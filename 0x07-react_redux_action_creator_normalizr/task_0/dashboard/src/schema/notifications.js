// import * as data from '../../notifications.json'
const data = require('../../notifications.json')

export default function getAllNotificationsByUser(userId) {
    // returns a list containing all the context objects from data where author id == userId
    return data.filter((item) => item.author.id === userId).map((item) => item.context)
}
