import { Details } from "reservation-types";
import TextInput from "@/components/inputs/text-input";
import { fieldStyles } from "../section.css";

interface FieldProps {
  isEditing?: boolean;
  optionIndex: number;
}

const OptionField = ({ isEditing = false, optionIndex }: FieldProps) => {
  return (
    <div className={fieldStyles.option}>
      <TextInput<Details>
        disabled
        inputSize="sm"
        formField={`options.${optionIndex}.title`}
        container={{ flex: 1, margin: 0, width: "35%", minWidth: 0 }}
      />
      <TextInput<Details>
        placeholder="0"
        disabled={!isEditing}
        inputSize="sm"
        formField={`options.${optionIndex}.quantity`}
        container={{ flex: 0.6, margin: 0, width: "25%", minWidth: 0 }}
      />
      <TextInput<Details>
        disabled
        inputSize="sm"
        formField={`options.${optionIndex}.price`}
        container={{ flex: 1, margin: 0, width: "35%", minWidth: 0 }}
      />
    </div>
  );
};

export default OptionField;