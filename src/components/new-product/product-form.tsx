import { Product } from "product-types";
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const defaultValues: Product = {
    title: undefined,
    subtitle: undefined,
    images: [],
    items: [],
    options: [],
  };
  const { handleSubmit, control } = useForm<Product>({
    defaultValues,
  });

  return <div />;
};

export default ProductForm;
