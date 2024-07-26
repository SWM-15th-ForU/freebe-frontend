import { Control, UseFormRegister } from "react-hook-form";

export interface FieldArrayProps {
  formControl: Control<Product>;
  formRegister: UseFormRegister<Product>;
}
