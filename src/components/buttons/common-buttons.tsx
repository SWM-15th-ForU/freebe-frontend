import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { LinkType } from "profile-types";
import { texts } from "@/styles/text.css";
import buttonStyles from "./buttons.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  title: string;
}

interface ButtonOptions {
  size: "sm" | "md";
  styleType: "primary" | "secondary" | "line";
}

export const CustomButton = ({
  onClick = () => {},
  title,
  size,
  styleType,
  disabled,
  ...props
}: ButtonProps & ButtonOptions) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={disabled ? buttonStyles.disabled : buttonStyles[styleType]}
      style={{ height: size === "sm" ? 48 : 56 }}
      disabled={disabled}
      {...props}
    >
      {title}
    </button>
  );
};

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
    <button
      type="submit"
      onClick={onClick}
      className={buttonStyles.submit}
      {...props}
    >
      {title}
    </button>
  );
};

export const FinishButton = ({
  onClick = () => {},
  title,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyles.submit}
      {...props}
    >
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
    <Link href={src} style={{ textDecoration: "none" }}>
      <div
        className={buttonStyles.link}
        style={selected ? { backgroundColor: "#a9a9a9" } : {}}
      >
        {name}
      </div>
    </Link>
  );
};

export const LinkTab = ({
  name,
  src,
  selected = false,
}: LinkType & { selected?: boolean }) => {
  return (
    <Link href={src} style={{ textDecoration: "none" }}>
      <div className={selected ? buttonStyles.selectedTab : buttonStyles.tab}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export const BottomButton = ({ title, onClick, disabled }: ButtonProps) => {
  return (
    <div
      className={`${buttonStyles.bottom} ${disabled && buttonStyles.disabled}`}
      onClick={disabled ? () => {} : onClick}
      role="presentation"
    >
      {title}
    </div>
  );
};
