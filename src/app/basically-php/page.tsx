export default async function ItIsBasicallyPhp() {
  return (
    <article className="prose">
      <h1>It is basically php all over again</h1>
      <p>
        <a href="https://tryphp.w3schools.com/showphp.php?filename=demo_form_post">
          a simple php form example
        </a>
      </p>

      <form
        className="grid grid-cols-2 gap-4"
        action="/basically-php/submitted"
        method="get"
      >
        Name: <input type="text" name="name" />
        <br />
        E-mail: <input type="text" name="email" />
        <br />
        <input type="submit" />
      </form>
    </article>
  );
}
