import React, { useState } from "react";
import Drawer from "react-modern-drawer";

export default function Header() {
  // All of the state
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
    website: "",
  });

  // all of our side effects

  // All of my own functions
  function handleClick() {
    console.log("Hello from create new button");
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleFormChange(event) {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <nav>
      <h1>Business Cards</h1>
      <button onClick={handleClick}>Create new</button>
      <Drawer open={isOpen} onClose={handleClose} direction="right">
        // Create a new business Card, // Name, Job, Website
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="job"
            placeholder="job title"
            value={formData.job}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="website"
            placeholder="website"
            value={formData.website}
            onChange={handleFormChange}
          />
        </form>
      </Drawer>
    </nav>
  );
}
