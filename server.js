const app = require('./app')
require('./app/routes')

const server = app.listen(app.get('port'), function () {
  const host = server.address().address
  const port = server.address().port
  console.log('=> NewsOS starting on http://%s:%s', host, port)
  console.log('=> Ctrl-C to shutdown server')
})
