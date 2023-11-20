import { createContext, useContext } from "react";

export const MyContext = createContext(null);

const useMyContext = () => useContext(MyContext);

export default useMyContext;
