import { deleteClass } from "./api/firebase-api.js";

/**
 * @param {*} oneClass: classYear, id, international, name, studyLine
 * @returns
 */
export default function createClassElement(oneClass) {
  // Overall all div
  const container = document.createElement("div");
  container.classList.add("class-card");
  container.id = oneClass.id;

  const titleDiv = createTitle(oneClass);
  const buttonsDiv = createCornerButtons(oneClass, container);

  container.append(buttonsDiv, titleDiv);

  return container;
}

function createCornerButtons(oneClass, container) {
  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("link-button");

  deleteButton.addEventListener("click", async () => {
    const response = await deleteClass(oneClass.id);
    if (response.ok) {
      container.remove();
    }
  });

  // Update button
  const updateAnchor = document.createElement("a");
  updateAnchor.textContent = "update";
  updateAnchor.href = "update/?id=" + oneClass.id;
  updateAnchor.classList.add("link-button");

  // Button group div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("corner");
  buttonsDiv.append(deleteButton, updateAnchor);

  return buttonsDiv;
}

function createTitle(oneClass) {
  const a = document.createElement("a");
  a.href = `class/?id=${oneClass.id}`;
  a.classList.add("title-container");

  // Class name
  const h2 = document.createElement("h4");
  h2.innerHTML = oneClass.name;

  // Class studyline and year
  const p = document.createElement("p");
  p.innerHTML = `${oneClass.studyLine} - ${oneClass.classYear}`;

  a.append(h2, p);
  return a;
}
