import { Notice, NoticeForm } from "profile-types";
import { Accordion } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import { editStyles } from "./notice.css";

const NoticeItem = ({
  notice,
  index,
  onClickRemove,
}: {
  notice: Notice;
  index: number;
  onClickRemove: (index: number) => void;
}) => {
  return (
    <Accordion.Item key={index} value={`${notice.title} ${index}`}>
      <Accordion.Control>
        <div className={editStyles.controller}>
          <span className={editStyles.name}>{notice.title}</span>

          <CustomButton
            styleType="line"
            title="삭제"
            size="xs"
            onClick={() => onClickRemove(index)}
            style={{
              marginLeft: "auto",
              marginRight: 10,
              padding: "5px 10px",
            }}
          />
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <TextInput<NoticeForm>
          title="제목"
          formField={`notices.${index}.title`}
        />
        <TextInput<NoticeForm>
          title="내용"
          formField={`notices.${index}.content`}
          multiline
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default NoticeItem;
