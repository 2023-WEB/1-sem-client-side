import React, { useState } from "react";
import Drawer from "react-modern-drawer";

export default function Header() {
  // All of the state
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [website, setWebsite] = useState("");

  // all of our side effects

  // All of my own functions
  function handleClick() {
    console.log("Hello from create new button");
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleJobChange(event) {
    setJob(event.target.value);
  }

  function handleWebsiteChange(event) {
    setWebsite(event.target.value);
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
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="job"
            placeholder="job title"
            value={job}
            onChange={handleJobChange}
          />
          <input
            type="text"
            name="website"
            placeholder="website"
            value={website}
            onChange={handleWebsiteChange}
          />
        </form>
      </Drawer>
    </nav>
  );
}
