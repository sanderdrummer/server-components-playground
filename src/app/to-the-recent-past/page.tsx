import Link from "next/link";
import { Separator } from "../components/separator";

export default function ToTheRecentPast() {
  return (
    <article className="prose">
      <h1>To the recent past</h1>

      <h2>Facebook released React in 2013</h2>
      <a href="https://legacy.reactjs.org/blog/2013/06/05/why-react.html">
        Why did we build react
      </a>
      <ul>
        <li>
          <b>React isn’t an MVC framework.</b>
        </li>
        <li>
          React is a library for building composable user interfaces. It
          encourages the creation of reusable UI components which present data
          that changes over time.
        </li>
        <li>
          <b>React doesn’t use templates.</b>
        </li>
        <li>
          React approaches building user interfaces differently by breaking them
          into components. This means React uses a real, full featured
          programming language to render views, which we see as an advantage.
        </li>
        <li>
          <b>Reactive updates are dead simple.</b>
        </li>
        <li>
          The data returned from render is neither a string nor a DOM node —
          it’s a lightweight description of what the DOM should look like.
        </li>
      </ul>

      <Separator />

      <h2>The rise of the single page app</h2>

      <ul>
        <li>More of the heavy lifting happens on the client</li>
        <li>You get very fast page speed, but only if your device is fast</li>
        <li>
          The server part slowly gets reimplemented on the client side (Redux,
          Graphql)
        </li>
        <li>With that single page apps get more and more complex</li>
      </ul>

      <Separator />

      <h2>The fall of the single page app</h2>
      <ul>
        <li>
          Seo and crawlers (share previews, e-commerce tags, etc) have a hard
          time reading SPAs
        </li>
        <li>
          All libraries needed for api integrations lead to slow initial load
          performance. (fetch as you render, request waterfalls)
        </li>
        <li>
          All the code gets shipped to the client. Any secret business logic is
          basically public.
        </li>
      </ul>
      <blockquote>
        People choose an SPA without being aware of the downsides, including
        such things as frameworks that go out of maintenance, almost
        unmanageable complexity in client-side code, as well as performance and
        accessibility issues.{" "}
        <a href="https://www.freecodecamp.org/news/why-i-hate-your-single-page-app-f08bb4ff9134/">
          why I hate your single page app (2016)
        </a>
      </blockquote>

      <Separator />

      <h2>The rise of Server Side rendering and problems it can solve</h2>
      <ul>
        <li> Server-side rendering solves the SEO and crawlers issue</li>
        <li>It partially solves the bad first-page load performance</li>
      </ul>
      <h2>With the price tag that it adds a lot of complexity</h2>
      <ul>
        <li>
          It does not solve the 'all code gets shipped to the client' issue.
          After the initial page load the whole page needs to{" "}
          <a href="https://react.dev/reference/react-dom/hydrate">hydrate</a>
        </li>
        <li>
          In contrast, it adds more complexity as it can get messy if server and
          non-server code are combined in one file.
        </li>
        <li>
          Helpers and tiny hacks are build to work around common limitations
          like the
          <a href="https://usehooks-ts.com/react-hook/use-ssr"> useSSR hook</a>
        </li>
        <li>
          <a href="https://github.com/mui/material-ui/issues?q=is%3Aissue+ssr+is%3Aclosed">
            359 Closed issues in mui regarding ssr
          </a>
        </li>
        <li>
          <a href="https://github.com/emotion-js/emotion/issues?q=is%3Aissue+ssr+is%3Aclosed">
            128 Closed issues in emotion regarding ssr
          </a>
        </li>
        <li>
          <a href="https://github.com/vitejs/vite/issues?q=is%3Aissue+ssr+is%3Aclosed">
            903 Closed issues in vite regarding ssr
          </a>
        </li>
      </ul>
      <Link href="/server-components">
        React Server Components to the rescue!
      </Link>
    </article>
  );
}
