import { NoticeForm } from "profile-types";
import apiClient from "../../core";

export async function putNewNotices(data: NoticeForm) {
  await apiClient.put("photographer/notice", {
    json: data.notices,
  });
}
