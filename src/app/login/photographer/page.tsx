import { IMAGE_STACK_SOURCES } from "@/constants/common/common";
import Login from "@/containers/photographer/login";
import { loginPageStyles } from "../page.css";

const Page = () => {
  return (
    <div className={loginPageStyles.background}>
      <Login images={IMAGE_STACK_SOURCES} />
    </div>
  );
};

export default Page;
