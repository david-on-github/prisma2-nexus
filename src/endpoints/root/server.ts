import { ApolloServer } from 'apollo-server-express'
// import { typeDefs, resolvers } from './schema'
import { createContext } from './context'
import { schema } from './schema'

const server = new ApolloServer({ schema, context: createContext })

export default server
