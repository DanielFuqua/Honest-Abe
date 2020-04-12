import { useCorporations } from "./CorporationsProvider.js";
import { Corporation } from "./Corporation.js";

const contentTarget = document.querySelector(".container");

export const CorporationsList = () => {
  const corporations = useCorporations();

  const render = () => {
    contentTarget.innerHTML += ` <article class="corporations">
    ${corporations
      .map((corporation) => {
        const html = Corporation(corporation);
        return html;
      })
      .join("")}
      </article>`;
  };

  render();
};
