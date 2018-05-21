const app = require('./index')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app
