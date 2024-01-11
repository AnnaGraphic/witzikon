import { createImage } from "./CreateCatStatusImage.js";
export function handleError(error) {
  createImage(`https://http.cat/${error}`, `error code ${error}`);
  console.log(error);
}