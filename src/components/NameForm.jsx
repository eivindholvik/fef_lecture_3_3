import { useState } from "react";
import { NameContext } from "../App";
import { useContext } from "react";

function NameForm() {
  const [displayName, setDisplayName] = useState("");

  const value = useContext(NameContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    value.setAppName(displayName);
    setDisplayName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <button type="submit">Change Name</button>
    </form>
  );
}

export default NameForm;
