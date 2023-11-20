import "@/styles/globals.css";
import "react-modern-drawer/dist/index.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { MyContext } from "@/context/MyContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // All of the state
  const [userInfo, setUserInfo] = useState("Mathias");
  const [cardData, setCardData] = useState([]);

  const contextValue = {
    userInfo,
    setUserInfo,
    cardData,
    setCardData,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <DefaultLayout>
        <Component {...pageProps} />;
      </DefaultLayout>
    </MyContext.Provider>
  );
}
