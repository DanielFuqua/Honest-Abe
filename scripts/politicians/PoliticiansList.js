import { usePoliticians } from "./PoliticiansProvider.js";
import { Politician } from "./Politician.js";

const contentTarget = document.querySelector(".container");

export const PoliticiansList = () => {
  const politicians = usePoliticians();

  const render = () => {
    contentTarget.innerHTML += `<article class="politicians">

    ${politicians
      .map((politician) => {
        const html = Politician(politician);
        return html;
      })
      .join("")}
      </article>`;
  };

  render();
};
