import { extendType, nonNull, nullable, objectType, stringArg } from 'nexus'

export const Post2 = objectType({
  name: 'Post',
  description: 'Posts Object',
  definition(t) {
    t.string('id')
    t.string('content')
  },
})

export const User2 = objectType({
  name: 'User',
  description: 'User Object',
  definition(t) {
    t.string('id')
    t.string('name', { resolve: (root, args, ctx) => root.name })
  },
})

export const UserQuery2 = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: nullable(User2),
      args: { name: nonNull(stringArg()) },
      resolve: (root, args, ctx) => {
        console.log(args)
        console.log(ctx.test)
        throw new Error('Method not implemented')
      },
    })
  },
})
