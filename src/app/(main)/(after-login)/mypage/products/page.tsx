import ProductList from "@/components/product/product-list";

const MyProductPage = () => {
  const productDatas = [
    { id: "a", image: "", isOpen: true, title: "상품 A", totalReservation: 5 },
    { id: "b", image: "", isOpen: true, title: "상품 A", totalReservation: 5 },
    { id: "c", image: "", isOpen: false, title: "상품 C", totalReservation: 5 },
    { id: "d", image: "", isOpen: true, title: "상품 A", totalReservation: 5 },
    { id: "e", image: "", isOpen: false, title: "상품 B", totalReservation: 5 },
  ];

  return (
    <div>
      <ProductList
        productDatas={productDatas.filter((data) => data.isOpen)}
        status="ACTIVE"
      />
      <ProductList
        productDatas={productDatas.filter((data) => !data.isOpen)}
        status="INACTIVE"
      />
    </div>
  );
};

export default MyProductPage;
