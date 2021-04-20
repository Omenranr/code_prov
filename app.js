/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
let express = require('express')

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
let cfenv = require('cfenv')

// create a new express server
let app = express()

// serve the files out of ./public as our main files
app.use('/', express.static(__dirname + '/public'))
app.use('/dev/', express.static(__dirname + '/public'))
app.use('/deploy/', express.static(__dirname + '/public'))

let bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router()              // get an instance of the express Router

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

let dowsjs = require('do-ws-js/dowsjs')

dowsjs.routeScenario(router)

dowsjs.routeSolve(router)

dowsjs.routeScore(router)

dowsjs.routeConfig(router)

dowsjs.routeWS(router)

dowsjs.routePA(router)

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)
app.use('/dev/api', router)
app.use('/deploy/api', router)

// // get the app environment from Cloud Foundry
// let appEnv = cfenv.getAppEnv()

// // start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url)
// })


// start server with credentials for https, etc
let fs = require('fs')
let http = require('http')
let https = require('https')
let privateKey  = fs.readFileSync('sslcert/server.key', 'utf8')
let certificate = fs.readFileSync('sslcert/server.crt', 'utf8')

let credentials = {key: privateKey, cert: certificate}



// your express configuration here
let httpServer = http.createServer(app).listen(8080)
let httpsServer = https.createServer(credentials, app).listen(8444)
console.log("Listening to httpServer in port: 8080")
console.log("Listening to httpsServer in port: 8444")