import TextInput from "@/components/inputs/text-input";
import { Path } from "react-hook-form";
import { Details } from "reservation-types";
import { fieldStyles } from "../section.css";

interface FieldProps {
  name: string;
  isEditing?: boolean;
  formField: Path<Details>;
}

const Field = ({ name, isEditing = false, formField }: FieldProps) => {
  return (
    <div className={fieldStyles.text}>
      <TextInput<Details>
        title={name}
        disabled={!isEditing}
        formField={formField}
        container={{ marginBottom: 0 }}
      />
    </div>
  );
};

export default Field;
