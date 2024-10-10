import NoticeList from "@/containers/customer/notice";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getPhotographerNotices } from "@/services/server/customer/photographer";
import { PageParams } from "route-parameters";

const NoticePage = async ({
  params,
}: {
  params: Pick<PageParams, "profileName">;
}) => {
  const notices = await getPhotographerNotices(params.profileName);

  return (
    <ProductHeaderLayout header={{ title: "공지사항" }}>
      <NoticeList data={notices} />
    </ProductHeaderLayout>
  );
};

export default NoticePage;
