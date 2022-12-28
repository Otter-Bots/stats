import Fastify from "fastify";
const app = Fastify({
    logger: true
})
app.get('/', function (_request, reply) {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  app.listen({ port: 3001 }, function (err, _address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })