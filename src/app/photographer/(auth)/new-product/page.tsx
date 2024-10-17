import NewProduct from "@/containers/photographer/product/new-product";
import { getCurrentNotices } from "@/services/server/photographer/mypage/notice";

export default async function NewProductPage() {
  const baseNotice = await getCurrentNotices();

  return <NewProduct baseNotice={baseNotice} />;
}
