import React, { useState } from "react";
import Drawer from "react-modern-drawer";

export default function Header() {
  // All of the state
  const [isOpen, setIsOpen] = useState(false);

  // all of our side effects

  // All of my own functions
  function handleClick() {
    console.log("Hello from create new button");
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <nav>
      <h1>Business Cards</h1>
      <button onClick={handleClick}>Create new</button>
      <Drawer open={isOpen} onClose={handleClose} direction="right">
        <div>Hello World</div>
      </Drawer>
    </nav>
  );
}
