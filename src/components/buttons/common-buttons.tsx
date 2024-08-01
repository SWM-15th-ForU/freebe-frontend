import Link from "next/link";
import { Link as LinkProp } from "profile-types";
import * as style from "./buttons.css";
import { Body15SB } from "../texts/texts";

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

export const LinkButton = ({ name, src }: LinkProp) => {
  return (
    <Link href={src}>
      <div className={style.LinkContainer}>
        <Body15SB>{name}</Body15SB>
      </div>
    </Link>
  );
};
