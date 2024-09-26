import ProductDetails from "@/containers/photographer/product/product-details";
import { getCurrentProductDetails } from "@/services/server/photographer/mypage/products";
import { PageParams } from "route-parameters";

export default async function ProductDetailPage({
  params,
}: {
  params: Pick<PageParams, "productId">;
}) {
  const productDetails = await getCurrentProductDetails(params.productId);

  return <ProductDetails {...productDetails} />;
}
