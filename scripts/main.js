import { getPoliticians } from "./politicians/PoliticiansProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";

getPoliticians().then(PoliticiansList);
