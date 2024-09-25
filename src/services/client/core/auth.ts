import popToast from "@/components/common/toast";

export const logout = async () => {
  const response = await fetch("/auth", { method: "DELETE" });
  if (!response.ok) {
    popToast("다시 시도해 주세요.", "로그아웃에 실패했습니다.");
  } else {
    localStorage.removeItem("url");
  }
  return response;
};
