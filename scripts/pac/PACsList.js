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
            // const corpDonation = relatedCorpDonObj;
            // corpDonation.corporation = arrayOfRelatedCorperationObjects[i];
            // console.log(corpDonation);
            // return corpDonation;

            return Object.assign(
              relatedCorpDonObj,
              arrayOfRelatedCorperationObjects[i]
            );
          }
        );
        console.log(arrayOfCorporateDonationsObjectsWithNames);

        // If a corporation donated more than once set total amount to the first object with that corporationId.
        for (
          let i = arrayOfCorporateDonationsObjectsWithNames.length - 1;
          i >= 0;
          i--
        ) {
          for (let j = i - 1; j >= 0; j--) {
            if (
              arrayOfCorporateDonationsObjectsWithNames[i].corporationId ===
              arrayOfCorporateDonationsObjectsWithNames[j].corporationId
            ) {
              const sumTotal =
                arrayOfCorporateDonationsObjectsWithNames[i].amount +
                arrayOfCorporateDonationsObjectsWithNames[j].amount;

              arrayOfCorporateDonationsObjectsWithNames[j].amount = sumTotal;
            }
          }
        }

        // remove objects without total donation amounts from arrayOfCorporateDonationsObjectsWithNames.
        const corporationIds = {};
        const finalArrayOfDesiredCorporateDonationObjects = arrayOfCorporateDonationsObjectsWithNames.filter(
          (obj) => {
            if (corporationIds[obj.corporationId]) {
              return false;
            }
            corporationIds[obj.corporationId] = true;
            return true;
          }
        );

        const html = PAC(pac, finalArrayOfDesiredCorporateDonationObjects);
        return html;
      })
      .join("")}
      </article>`;
  };

  render();
};
