import popToast from "@/components/common/toast";

export const logout = async () => {
  const response = await fetch("/auth", { method: "DELETE" });
  if (!response.ok) {
    // TODO: 수정된 매개변수 반영 필요
    popToast("로그아웃에 실패했습니다.", "다시 시도해 주세요.");
  }

  return response;
};
