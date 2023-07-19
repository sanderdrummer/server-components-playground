import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function() {
  const users = await prisma.user.findMany();

  const addNewUser = async (formData: FormData) => {
    "use server";

    const email = formData.get("email")?.toString() ?? "";
    const name = formData.get("name")?.toString() ?? "";

    const response = await prisma.user.create({ data: { email, name } });
    if (response.id) {
      redirect("/data-access");
    }
  };

  return (
    <article className="prose">
      <h1>We are not facebook</h1>
      <h2>But we collect user data:</h2>

      <form method="post" action={addNewUser} className="grid gap-4">
        <input placeholder="email" type="email" name="email" />
        <input placeholder="name" type="text" required name="name" />
        <button className="p-2 bg-indigo-700 text-white">Add new user</button>
      </form>

      <h2>Current users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
        {users.length === 0 ? (
          <li>Oh there are no users yet :/ </li>
        ) : (
          <li>
            <Link href="/client-components">client components</Link>
          </li>
        )}
      </ul>
      <p></p>
    </article>
  );
}
