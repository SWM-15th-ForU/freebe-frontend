import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { LinkType } from "profile-types";
import { texts } from "@/styles/text.css";
import buttonStyles from "./buttons.css";
import { Body15SB } from "../texts/texts";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  title: string;
}

export const AddButton = ({ onClick = () => {}, title }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={buttonStyles.add}>
      {title}
    </button>
  );
};

export const SubmitButton = ({
  onClick = () => {},
  title,
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={buttonStyles.submit} {...props}>
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
        className={buttonStyles.link}
        style={selected ? { backgroundColor: "#a9a9a9" } : {}}
      >
        <Body15SB>{name}</Body15SB>
      </div>
    </Link>
  );
};

export const BottomButton = ({ title, onClick }: ButtonProps) => {
  return (
    <div className={buttonStyles.bottom} onClick={onClick} role="presentation">
      <span className={texts.button1}>{title}</span>
    </div>
  );
};
