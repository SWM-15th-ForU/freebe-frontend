import TextInput from "@/components/inputs/text-input";
import { Path } from "react-hook-form";
import { DetailsField } from "reservation-types";

interface FieldProps {
  name: string;
  isEditing?: boolean;
  formField: Path<DetailsField>;
}

const Field = ({ name, isEditing = false, formField }: FieldProps) => {
  return (
    <TextInput<DetailsField>
      title={name}
      disabled={!isEditing}
      formField={formField}
    />
  );
};

export default Field;
