import Confirm from "./confirm";
import { containerStyle } from "./control.css";
import PhotographerMemo from "./memo";

const Control = () => {
  return (
    <div className={containerStyle}>
      <Confirm />
      <PhotographerMemo />
    </div>
  );
};

export default Control;
