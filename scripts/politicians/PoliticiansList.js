import { usePoliticians } from "./PoliticiansProvider.js";
import { Politician } from "./Politician.js";
import { usePACs } from "../pac/PACsProvider.js";
import { usePacDonations } from "../PacDonationsProvider.js";

const contentTarget = document.querySelector(".container");

export const PoliticiansList = () => {
  const politicians = usePoliticians();
  const pacs = usePACs();
  const pacDonations = usePacDonations();

  const render = () => {
    contentTarget.innerHTML += `<article class="politicians">

    ${politicians
      .map((politician) => {
        const relatedPacDonations = pacDonations.filter(
          (pacDonation) => pacDonation.politicianId === politician.id
        );
        const relatedPACs = relatedPacDonations.map((relPacdon) => {
          return pacs.find((pac) => pac.id === relPacdon.pacId);
        });

        const html = Politician(politician, relatedPACs, relatedPacDonations);
        return html;
      })
      .join("")}
      </article>`;
  };

  render();
};
