import Image from "next/image";
import { FieldErrors } from "react-hook-form";
import { Notice, NoticeForm } from "profile-types";
import { Accordion } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import { editStyles } from "./notice.css";

const NoticeItem = ({
  notice,
  index,
  onClickRemove,
  errors,
  required,
}: {
  notice: Notice;
  index: number;
  onClickRemove: (index: number) => void;
  errors: FieldErrors<NoticeForm>;
  required?: boolean;
}) => {
  return (
    <Accordion.Item key={index} value={`${index}`}>
      <Accordion.Control>
        <div className={editStyles.controller}>
          <span className={editStyles.name}>{notice.title}</span>
          {errors.notices?.[index] && (
            <Image
              src="/icons/error-pink.svg"
              alt="에러"
              width={24}
              height={12}
            />
          )}
          <CustomButton
            styleType="line"
            title="삭제"
            size="xs"
            onClick={() => onClickRemove(index)}
            style={{
              marginLeft: "auto",
              marginRight: 10,
              padding: "5px 10px",
              visibility: required ? "hidden" : "visible",
            }}
          />
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <div>
          <TextInput<NoticeForm>
            title="제목"
            formField={`notices.${index}.title`}
            container={{ margin: 0 }}
            disabled={required}
          />
          {errors.notices?.[index]?.title && (
            <span className={editStyles.error}>
              {errors.notices?.[index]?.title.message}
            </span>
          )}
        </div>
        <div>
          <TextInput<NoticeForm>
            title="내용"
            formField={`notices.${index}.content`}
            container={{ margin: 0 }}
            multiline
          />
          {errors.notices?.[index]?.content && (
            <span className={editStyles.error}>
              {errors.notices?.[index]?.content.message}
            </span>
          )}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default NoticeItem;
