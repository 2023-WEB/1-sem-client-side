import { getOneClass } from "../api/firebase-api.js";

window.addEventListener("load", async () => {
  const id = window.location.search.split("=")[1];
  const body = await getOneClass(id);
  console.log(body);
});
