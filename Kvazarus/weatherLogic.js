import { htmlObjects } from "./weatherHtmlObjects.js";
import { addEventFunctions } from "./weatherFunctions.js";

const { searchForm, searchInput, spansCityTemperature, containersCityName, pageNowImg } = htmlObjects;
const { takeCityDataFromForm } = addEventFunctions;


searchForm.addEventListener("submit", takeCityDataFromForm);