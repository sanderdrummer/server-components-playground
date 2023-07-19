import Link from "next/link";
import { Separator } from "../components/separator";

export default function ATripToThePast() {
  return (
    <article className="prose">
      <h1>A trip to the past</h1>
      <img src="https://www.php.net/images/logos/new-php-logo.svg" />
      <p>Php was and still is crazy successful</p>
      <ul>
        <li>77% of all live websites use PHP. </li>
        <li>PHP powers 22% of the top 10,000 sites.</li>
        <li>
          More than 87 million websites have been build with PHP since 1995.
        </li>
      </ul>
      <a href="https://techjury.net/blog/php-usage-statistics/">source</a>

      <Separator />

      <h2>Why is that?</h2>
      <p>
        Php provides a great combination of server-side integration and easy
        templating for static pages
      </p>

      <a href="https://tryphp.w3schools.com/showphpfile.php?filename=demo_db_select_oo">
        A simple example
      </a>

      <Separator />

      <h2>Why do we even have react than?</h2>
      <p>Php has one crucial weakness, which is reactivity</p>
      <p>Extending the static page with javascript is not easily done</p>
      <p>
        Instead of a declarative way of updating the ui, the existing server
        rendered template is changed with javascript in an imperative way
      </p>
      <p>
        this could lead to state being mixed up in between the dom and various
        javascript functions which turns into a hot mess very easy!
      </p>

      <Separator />

      <Link href="/to-the-recent-past">lets go on!</Link>
    </article>
  );
}
