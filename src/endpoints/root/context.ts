import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient,
  test: string;
}

export function createContext(): Context {
  return { prisma, test: 'admin' }
}