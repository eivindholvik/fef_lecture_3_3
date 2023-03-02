import { NameContext } from "../App";
import NameForm from "./NameForm";

function ChildB() {
  return (
    <NameContext.Consumer>
      {(value) => (
        <>
          <div className="B">My name is {value.appName}</div>
          <NameForm />
        </>
      )}
    </NameContext.Consumer>
  );
}

export default ChildB;
