import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

export const NameContext = createContext();

function App() {
  const [appName, setAppName] = useState("Eivind");

  return (
    <NameContext.Provider value={{ appName: appName, setAppName: setAppName }}>
      <div className="App">
        <ChildA />
      </div>
    </NameContext.Provider>
  );
}

export default App;
