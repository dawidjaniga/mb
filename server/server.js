const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require('pusher')
Pusher.logToConsole = true

const pusher = new Pusher({
  app_id: '1114774',
  key: '4a8b1610455198ddd8f8',
  secret: '49e6e8a1c66e827eda7e',
  cluster: 'eu',
  useTLS: true
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/pusher/auth', function (req, res) {
  console.log('/pusher/auth')
  const socketId = req.body.socket_id
  const channel = req.body.channel_name
  console.log(socketId, channel)
  const auth = pusher.authenticate(socketId, channel)
  console.log(auth)
  res.send(auth)
})

// try {
//   setInterval(() => {
//     pusher.trigger('private-board', 'client-hello', {
//       value: Math.random() * 5000
//     })
//   }, 1000)
// } catch (e) {
//   console.log(e)
// }

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Listen on port: ', port))
