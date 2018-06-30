'use strict'
//console.log('hola Mundo')

const color = require('chalk')
const debug = require('debug')('front-end:demo')
let msg = 'hola mundo'

console.log(`El mensaje es: ${color.yellow.bold(msg)}`)
