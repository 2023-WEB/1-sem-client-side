import React from "react";
import useMyContext from "@/context/MyContext";

export default function blabla() {
  const value = useMyContext();

  console.log(value.userInfo);

  return <div>blabla</div>;
}
