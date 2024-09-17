import { preparingStyle } from "./ui.css";

const Preparing = () => {
  return (
    <div className={preparingStyle.container}>
      <p>준비 중인 서비스입니다. 조금만 기다려 주세요!</p>
    </div>
  );
};

export default Preparing;
