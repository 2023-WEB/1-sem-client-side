import createClassElement from "./create-class-element.js";
import { getAllClasses } from "./api/firebase-api.js";

window.addEventListener("load", async () => {
  const allClasses = await getAllClasses();

  const allClassesElements = allClasses.map((oneClass) => {
    return createClassElement(oneClass);
  });

  document.querySelector(".all-classes").append(...allClassesElements);
});
