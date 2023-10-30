const BASE_URL =
  "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/LMS/";

export async function postClass(newClass) {
  const response = await fetch(BASE_URL + "classes.json", {
    method: "POST",
    body: JSON.stringify(newClass),
  });
  const body = await response.json();
}

export async function getAllClasses() {
  const response = await fetch(BASE_URL + "classes.json");
  const body = await response.json();
  return toArray(body);
}

export async function getOneClass(id) {
  const response = await fetch(BASE_URL + "classes/" + id + ".json");
  const body = await response.json();
  return body;
}

export async function deleteClass(id) {
  const endpoint = BASE_URL + "classes/" + id + ".json";
  console.log(endpoint);
  const response = await fetch(endpoint, {
    method: "DELETE",
  });
  return response;
}

function toArray(firebaseBody) {
  const keys = Object.keys(firebaseBody);

  const transformed = keys.map((key) => {
    const obj = firebaseBody[key];
    obj.id = key;
    return obj;
  });

  return transformed;
}
