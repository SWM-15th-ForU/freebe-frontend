import { notifications } from "@mantine/notifications";
import { toastStyles } from "./common.css";

export default function popToast(message: string, title?: string) {
  notifications.show({
    title,
    message,
    autoClose: 3000,
    classNames: toastStyles,
  });
}
