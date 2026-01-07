import prisma from "../utils/db.server";

export async function getUsers() {
  return prisma.user.findMany();
}

export async function createUser(data: {
  name: string;
  age: number;
  hometown: string;
  birthday: Date;
  phone: string;
  className: string;
}) {
  return prisma.user.create({ data });
}
