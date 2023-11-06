//const URL = "localhost:3000";
const URL =
  "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/business-contacts.json";

export function postBusinessCard(data) {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getBusinessCards() {
  return fetch(URL);
}
