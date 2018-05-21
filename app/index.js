require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()

// set environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.log('=> NODE_ENV:', process.env.NODE_ENV)
app.set('port', process.env.PORT || 4004)

app.use(logger('dev'))

app.use(bodyParser.json())

module.exports = app
