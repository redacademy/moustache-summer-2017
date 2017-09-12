// Dependencies
const express = require('express')
const fbqueries = require('../firebase/fbqueries')

// Routers

var router = express.Router()

router.get('/event', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getEvents()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/event/:id', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      if (!req.params.id) throw 'invalid id'
      const data = fbqueries.getEvent(req.params.id)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/grower', function (req, res) {
  
  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getGrowers()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/health-benefit', function (req, res) {
  
  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getHealthBenefits()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/health-benefit/:id', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      if (!req.params.id) throw 'invalid id'
      const data = fbqueries.getHealthBenefit(req.params.id)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/menu-item', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getMenuItems()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))
})

router.get('/menu-item/:id', function (req, res) {
  
  const promise = new Promise((resolve, reject) => {
    try {
      if (!req.params.id) throw 'invalid id'
      const data = fbqueries.getMenuItem(req.params.id)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });
  
  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))
  })

router.get('/menu-cat', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getMenuCat()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });
  
  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))
})

module.exports = router
