import Link from "next/link";

export default async function({
  searchParams,
}: {
  searchParams: { name: string; email: string };
}) {
  return (
    <article className="prose">
      Welcome {searchParams.name} <br />
      Your email address is: {searchParams.email}
      <p>
        <Link href="/pokemon">fetching external data</Link>
      </p>
    </article>
  );
}
