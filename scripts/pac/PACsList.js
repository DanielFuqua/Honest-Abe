import { usePACs } from "./PACsProvider.js";
import { PAC } from "./PAC.js";
import { useCorporations } from "../corporations/CorporationsProvider.js";
import { useCorporateDonations } from "../CorporateDonationsProvider.js";

const contentTarget = document.querySelector(".container");

export const PACsList = () => {
  const pac = usePACs();
  const corporations = useCorporations();
  const corporateDonations = useCorporateDonations();

  const render = () => {
    contentTarget.innerHTML += `<article class="PACs">

    ${pac
      .map((pac) => {
        // find the corparate donation objects related to the pac.
        const arrayOfRelatedCorperateDonationObjects = corporateDonations.filter(
          (cd) => cd.pacId === pac.id
        );

        // find the corporation objects (name) who danoted to the pac.

        const arrayOfRelatedCorperationObjects = arrayOfRelatedCorperateDonationObjects.map(
          (relatedCorpDonObj) => {
            return corporations.find((corporation) => {
              return corporation.id === relatedCorpDonObj.corporationId;
            });
          }
        );
        //Combine objects in each array with each other.
        const arrayOfCorporateDonationsObjectsWithNames = arrayOfRelatedCorperateDonationObjects.map(
          (relatedCorpDonObj, i) => {
            return Object.assign(
              {},
              relatedCorpDonObj,
              arrayOfRelatedCorperationObjects[i]
            );
          }
        );
        // pass pac and new array of our desired objects into pac component

        const html = PAC(pacObj);
        return html;
      })
      .join("")}
      </article>`;
  };

  render();
};
