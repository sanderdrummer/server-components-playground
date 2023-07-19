import { PrismaClient } from "@prisma/client";
import { ModalForm } from "./modalForm";

const prisma = new PrismaClient();

export default async function() {
  const users = await prisma.user.findMany();

  return (
    <article className="prose">
      <h1>We are not facebook</h1>
      <h2>But we collect user data:</h2>
      <ModalForm></ModalForm>
      <h2>Current users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
        {users.length === 0 && <li>Oh there are no users yet :/ </li>}
      </ul>
    </article>
  );
}
