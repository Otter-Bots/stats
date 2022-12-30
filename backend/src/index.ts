import Fastify from "fastify";
import "dotenv/config";
const app = Fastify({
    logger: true
})

app.get('/', function (_request, reply) {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  app.listen({ port: Number(process.env.PORT), host: String(process.env.HOST)}, function (err, _address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })