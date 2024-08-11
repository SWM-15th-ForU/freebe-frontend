import TextInputStyles from "./text-input.css";

interface TextInputProps {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput = ({
  title,
  placeholder = "내용을 입력해주세요.",
  disabled,
}: TextInputProps) => {
  return (
    <div className={TextInputStyles.container}>
      {title && <span className={TextInputStyles.title}>{title}</span>}
      <div className={TextInputStyles.inputWrapper}>
        <input className={TextInputStyles.input} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default TextInput;
