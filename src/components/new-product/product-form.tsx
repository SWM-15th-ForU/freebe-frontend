import { useForm } from "react-hook-form";

const ProductForm = () => {
  const defaultValues = {
    title: undefined,
    subtitle: undefined,
    images: [],
    item: [],
    option: [],
  };
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  return <div />;
};

export default ProductForm;
