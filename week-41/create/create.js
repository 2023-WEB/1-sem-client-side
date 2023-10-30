import { postClass } from "../api/firebase-api.js";

const FORM = document.querySelector("#create-class-form");

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(FORM);
  const newClass = formDataToObject(data);
  console.log(newClass);

  postClass(newClass);
});

function formDataToObject(formData) {
  const toReturn = {};

  for (const [key, value] of formData.entries()) {
    toReturn[key] = value;
  }
  return toReturn;
}
