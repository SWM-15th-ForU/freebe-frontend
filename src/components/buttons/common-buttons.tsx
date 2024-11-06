import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  MouseEventHandler,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkType } from "profile-types";
import buttonStyles, { loaderStyle } from "./buttons.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

interface ButtonOptions {
  size: "xs" | "sm" | "md" | "lg";
  styleType: "primary" | "secondary" | "line" | "danger";
  link?: string;
  loading?: boolean;
}

export const CustomButton = ({
  onClick = () => {},
  title,
  size,
  styleType,
  disabled,
  children,
  link,
  loading,
  ...props
}: ButtonProps & ButtonOptions) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${disabled || loading ? buttonStyles.disabled : buttonStyles[styleType]} ${buttonStyles[size]}`}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      {loading ? (
        <Image
          src="/icons/loading.svg"
          width={30}
          height={30}
          alt="now loading"
          className={loaderStyle}
        />
      ) : (
        title
      )}
      {link && <Link href={link} className={buttonStyles.linkArea} />}
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

export const BottomButton = ({
  title,
  onClick,
  disabled,
  type,
  loading,
  ...props
}: ButtonProps & { loading?: boolean }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`${disabled || loading ? buttonStyles.bottomDisabled : buttonStyles.bottom}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Image
          src="/icons/loading.svg"
          width={30}
          height={30}
          alt="now loading"
          className={loaderStyle}
        />
      ) : (
        title
      )}
    </button>
  );
};
