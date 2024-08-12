import TextInput from "@/components/inputs/text-input";
import { AddButton } from "@/components/buttons/common-buttons";
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
      <AddButton title="후보 일정 추가하기" />
    </PartLayout>
  );
};

export default ProductInfoForm;
