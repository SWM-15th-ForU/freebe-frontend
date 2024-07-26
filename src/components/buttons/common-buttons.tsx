import * as style from "./buttons.css";

interface ButtonProps {
  onClick?: () => void;
  title: string;
}

export const AddButton = ({ onClick = () => {}, title }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={style.AddContainer}>
      {title}
    </button>
  );
};

export const SubmitButton = ({ onClick = () => {}, title }: ButtonProps) => {
  return (
    <button type="submit" onClick={onClick} className={style.SubmitContainer}>
      {title}
    </button>
  );
};
