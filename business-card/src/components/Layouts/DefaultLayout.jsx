import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Business Cards</h1>
      </nav>
      {children}
      <footer>
        contact information
        <p>mtnl@cphbusiness.dk</p>
      </footer>
    </>
  );
}
