const fetchPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  if (!response.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default async function Pokedex() {
  const pokemon = await fetchPokemon();

  return (
    <ul className="p-2">
      {pokemon?.results?.map((mon: any) => (
        <li className="p-2 text-lg border-gray-200 border-b-2" key={mon.name}>
          {mon.name}
        </li>
      ))}
      <li>
        <a href="/data-access">let's check database integrations</a>
      </li>
    </ul>
  );
}
