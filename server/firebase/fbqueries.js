// Dependencies
const firebase = require('firebase')
const config = require('./firebase.json')

// Security setup for Firebase/RealtimeDatabase/Rules
// {
//   "rules": {
//     ".read": "true",
//     ".write": "auth != null"
//   }
// }

// Helpers

firebase.initializeApp(config);
var ref = firebase.database().ref()

exports.getEvents = () => {
  return ref.child('Events').once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getEvent = (id) => {
  return ref
    .child('Events')
    .child(id)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getHealthBenefits = () => {
  return ref.child('HealthBenefits').once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getHealthBenefit = (id) => {
  return ref
    .child('HealthBenefits')
    .child(id)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getGrowers = () => {
  return ref.child('Growers').once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getMenuCat = () => {
  return ref.child('MenuCat').once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getMenuItems = () => {
  return ref.child('MenuItems').once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

exports.getMenuItem = (id) => {
  return ref
    .child('MenuItems')
    .child(id)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return data
    })
}

