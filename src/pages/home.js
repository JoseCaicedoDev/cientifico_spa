import getData from "../utils/getData";

const Home = async () =>{
  const characters = await getData();
  const view = `
    <article class="characters">
      ${characters.results.map(character => `
        <div class="characters-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </div>
      `).join('')}
    </article>
  `;
  return view;
}

export default Home;