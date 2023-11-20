import React, { useState } from "react";
import Link from "next/link";

export default function user() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      user
      <Link href="/booking/room/blabla">go to blabla</Link>
      <input
        type="text"
        placeholder="controlled input test"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
