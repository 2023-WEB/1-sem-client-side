import React from "react";
import Header from "../molecules/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>
        contact information
        <p>mtnl@cphbusiness.dk</p>
      </footer>
    </>
  );
}
