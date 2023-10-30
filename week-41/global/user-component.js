class UserComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const a = document.createElement("a");
    a.href = "login";

    const img = document.createElement("img");
    img.src = "/week-40/images/user.svg";

    a.appendChild(img);

    shadow.appendChild(a);
  }
}

export default UserComponent;
