import { createContext } from "react";

const defaultValue = {};
const AppContext = createContext(defaultValue);
const WarehouseContext = createContext(defaultValue);

export { AppContext, WarehouseContext };
