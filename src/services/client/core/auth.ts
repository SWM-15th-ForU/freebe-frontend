import popToast from "@/components/common/toast";

export const logout = async () => {
  try {
    const response = await fetch("/auth", { method: "DELETE" });
    if (response.redirected) {
      localStorage.removeItem("url");
      return response.url;
    }
    throw new Error();
  } catch {
    popToast("다시 시도해 주세요.", "로그아웃에 실패했습니다.");
  }
};
