import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.users.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// insertUser("sameer2@gmail.com", "password", "sameer", "kashyap");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.users.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUser("sameer@gmail.com", { firstName: "Meow", lastName: "kalita" });
