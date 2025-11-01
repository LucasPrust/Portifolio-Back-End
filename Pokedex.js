  let offset = 0;
    const limit = 20;

    function fetchPokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
          const list = document.getElementById("pokemon-list");
          list.innerHTML = "";
          data.results.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = pokemon.name;
            list.appendChild(li);
          });
        });
    }

    document.getElementById("prev").addEventListener("click", () => {
      if (offset >= limit) {
        offset -= limit;
        fetchPokemon();
      }
    });

    document.getElementById("next").addEventListener("click", () => {
      offset += limit;
      fetchPokemon();
    });

    fetchPokemon();
    document.getElementById("searchBtn").addEventListener("click", () => {
  const name = document.getElementById("searchInput").value.toLowerCase().trim();
  if (!name) return;

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      if (!res.ok) throw new Error("Pokémon não encontrado");
      return res.json();
    })
    .then(data => {
      getEvolutions(data.species.url);

      const result = document.getElementById("searchResult");
      result.innerHTML = `
        <div style="background:#fff; padding:20px; margin:20px auto; border-radius:10px; max-width:300px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
          <h2 style="text-transform:capitalize;">${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}" />
          <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
          <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>
      `;
    })
    .catch(err => {
      document.getElementById("searchResult").innerHTML = `<p style="color:red;">Pokémon não encontrado.</p>`;
    });
});
function getEvolutions(speciesUrl) {
  fetch(speciesUrl)
    .then(res => res.json())
    .then(speciesData => fetch(speciesData.evolution_chain.url))
    .then(res => res.json())
    .then(evoData => {
      const evoChain = [];
      let evo = evoData.chain;

      do {
        evoChain.push(evo.species.name);
        evo = evo.evolves_to[0];
      } while (evo);

      document.getElementById("searchResult").innerHTML += `
        <p><strong>Evolução:</strong> ${evoChain.join(" → ")}</p>
      `;
    });
}
