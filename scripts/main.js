import { getPoliticians } from "./politicians/PoliticiansProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorporations } from "./corporations/CorporationsProvider.js";
import { CorporationsList } from "./corporations/CorporationsList.js";
import { getPACs } from "./pac/PACsProvider.js";
import { getCorporateDonations } from "./CorporateDonationsProvider.js";
import { PACsList } from "./pac/PACsList.js";
import { getPacDonations } from "./PacDonationsProvider.js";

getPoliticians()
  .then(getPACs)
  .then(getPacDonations)
  .then(getCorporations)
  .then(getCorporateDonations)
  .then(PoliticiansList)
  .then(CorporationsList)
  .then(PACsList);
