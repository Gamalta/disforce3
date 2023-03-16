import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function signUp(email: string, username: string, password: string) {
  await prisma.user.create({
    data: {
        email: email,
        name: username,
        password: password
    }
    })
}

export async function signIn(email: string, password: string) {
  const users = await prisma.user.findMany({
    where: {
      email: email,
      password: password,
    },
  });

  if(users.length != 1) {
    return null;
  }

  return users[0];
}