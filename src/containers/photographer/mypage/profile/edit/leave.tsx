import { leaveStyles } from "./edit.css";

const Leave = () => {
  return (
    <div className={leaveStyles.container}>
      <button className={leaveStyles.button} type="button">
        서비스 탈퇴하기
      </button>
    </div>
  );
};
export default Leave;
