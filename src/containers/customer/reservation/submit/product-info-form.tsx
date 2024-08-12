import TextInput from "@/components/inputs/text-input";
import { Item, reservation } from "product-types";
import PartLayout from "./part-layout";

const ProductInfoForm = ({ items }: { items: Item[] }) => {
  return (
    <PartLayout title="촬영 정보">
      {items.map((item, index) => {
        return (
          <TextInput
            key={index}
            title={item.title}
            disabled
            value={item.content}
          />
        );
      })}
      <TextInput<reservation.FormType>
        title="촬영 일정"
        formField="schedules"
      />
    </PartLayout>
  );
};

export default ProductInfoForm;
