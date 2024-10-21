import { notifications } from "@mantine/notifications";
import { toastStyles } from "./common.css";

export default function popToast(
  message: string,
  title?: string,
  isError?: boolean,
) {
  notifications.show({
    title,
    message,
    autoClose: 3000,
    classNames: {
      ...toastStyles,
      root: isError ? toastStyles.error : toastStyles.root,
    },
  });
}
