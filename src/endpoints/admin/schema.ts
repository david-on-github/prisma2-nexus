import { makeSchema } from 'nexus'
import { nexusPrisma, Options as NexusPrismaOptions } from 'nexus-plugin-prisma'
import * as types from './graphql'

const path = require('path')

export const PRISMA_PATH = path.resolve(__dirname, '../../generated/prisma')

// const nexusPrismaConfig: NexusPrismaOptions = {
//   inputs: { prismaClient: PRISMA_PATH },
//   experimentalCRUD: true,
// }

// const nexusPrismaPlugin = nexusPrisma(nexusPrismaConfig)

export const schema = makeSchema({
  types: types,
  plugins: [
    // nexusPrismaPlugin
  ],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: `${PRISMA_PATH}/index.d.ts`,
        alias: 'prisma',
      },
    ],
    mapping: {
      DateTime: 'Date',
    },
  },
})
