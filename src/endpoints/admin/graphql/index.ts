import { extendType, idArg, intArg, nonNull, nullable, objectType, stringArg } from 'nexus'

export const User = objectType({
  name: 'User',
  description: 'User Object',
  definition(t) {
    t.string("id")
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: nullable(User),
      args: { id: nonNull(intArg()) },
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user.findUnique({ where: { id: args.id } })
      },
    })
  },
})
