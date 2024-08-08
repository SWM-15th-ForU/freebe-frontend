import Link from "next/link";
import { LinkType } from "profile-types";
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

export const LinkButton = ({
  name,
  src,
  selected = false,
}: LinkType & { selected?: boolean }) => {
  return (
    <Link href={src}>
      <div
        className={style.LinkContainer}
        style={selected ? { backgroundColor: "#a9a9a9" } : {}}
      >
        <Body15SB>{name}</Body15SB>
      </div>
    </Link>
  );
};
