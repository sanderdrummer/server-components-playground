import { Separator } from "../components/separator";

export default function ServerComponents() {
  return (
    <article className="prose">
      <h1>React Server Components</h1>
      <blockquote>
        Server and Client Components allow developers to build applications that
        span the server and client, combining the rich interactivity of
        client-side apps with the improved performance of traditional server
        rendering.
        <a href="https://nextjs.org/docs/getting-started/react-essentials#server-components">
          nextjs
        </a>
      </blockquote>

      <h2>The good</h2>
      <ul>
        <li>Server Components render on the server only</li>
        <li>The bundle of server components is not send to the client!</li>
        <li>Not the whole page get's hydrated but only client components</li>
        <li>It already works with nextjs 13</li>
      </ul>

      <Separator />

      <h2>The bad</h2>
      <ul>
        <li>
          despite being in development since 2020 it is still experimental
        </li>
        <li>
          you should use a framework as implementing a server from scratch is
          not trivial
        </li>
        <li>
          it is not necessarily faster than existing abstractions like{" "}
          <a href="https://remix.run/blog/react-server-components">remix</a>
        </li>
      </ul>

      <Separator />

      <h2>But enough of the talking lets dive into some code!</h2>
      <a href="/basically-php">it is basically php</a>
    </article>
  );
}
