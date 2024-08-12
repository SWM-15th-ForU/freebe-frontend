import Dropdown from "@/components/common/dropdown";
import { Option } from "product-types";
import PartLayout from "./part-layout";

const SelectOptionForm = ({ options }: { options: Option[] }) => {
  return (
    <PartLayout title="추가 옵션">
      <Dropdown datas={[]} />
    </PartLayout>
  );
};

export default SelectOptionForm;
