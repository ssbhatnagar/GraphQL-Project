import {AppoloServer} from '@apollo/server'
import { startStandaloneServer} from '@apollo/server/standalone'
// importing types
import { typeDefs } from './schema'

// server setup
const server = new AppoloServer({
    typeDefs
})

const {url} = await startStandaloneServer(server, {
listen: {port:4000}
})

console.log('Server ready at port ', 4000)