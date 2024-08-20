import { notifications } from "@mantine/notifications";
import { toastStyles } from "./common.css";

export default function popToast(title: string, message: string) {
  notifications.show({
    title,
    message,
    autoClose: 3000,
    classNames: toastStyles,
  });
}
