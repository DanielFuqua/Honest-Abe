import { getPoliticians } from "./politicians/PoliticiansProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorporations } from "./corporations/CorporationsProvider.js";
import { CorporationsList } from "./corporations/CorporationsList.js";

getPoliticians()
  .then(PoliticiansList)
  .then(getCorporations)
  .then(CorporationsList);
