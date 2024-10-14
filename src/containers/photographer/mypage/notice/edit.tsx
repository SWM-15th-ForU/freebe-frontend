import { useEffect, useState } from "react";
import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";
import { NoticeForm } from "profile-types";
import { Accordion } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import Chip from "@/components/common/chip";
import NoticeItem from "./notice-item";
import { accordionStyles, editStyles } from "./notice.css";

const SAMPLE_NOTICE = ["포트폴리오 사용", "보정본 작업 기간"];
const REQUIRED_NOTICES_BOUND = 2;

const NoticeEdit = () => {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext<NoticeForm>();
  const { remove, append } = useFieldArray<NoticeForm>({
    control,
    name: "notices",
  });
  const notices = watch("notices");
  const [openedAccordion, setOpenedAccordion] = useState<null | string>(null);

  useEffect(() => {
    if (errors.notices && Array.isArray(errors.notices)) {
      const firstErrorIndex = errors.notices.findLastIndex((error) => error);
      if (firstErrorIndex !== -1) {
        setOpenedAccordion(`${firstErrorIndex}`);
      } else {
        setOpenedAccordion(null);
      }
    }
  }, [errors]);

  function handleRemoveNotice(removeIndex: number) {
    remove(removeIndex);
  }

  function sampleNotIncluded() {
    return SAMPLE_NOTICE.filter(
      (value) => !notices.map((notice) => notice.title).includes(value),
    );
  }

  function addNotice(title: string) {
    append({ title, content: "" });
  }

  return (
    <div className={editStyles.container}>
      <div className={editStyles.header}>
        <span className={editStyles.title}>내 공지사항</span>
        <CustomButton
          styleType="primary"
          title="저장"
          size="xs"
          type="submit"
          style={{
            marginRight: 10,
            padding: "5px 10px",
          }}
        />
      </div>
      {sampleNotIncluded().length > 0 && (
        <div className={editStyles.chipWrapper}>
          <span className={editStyles.title}>예시 항목</span>
          {sampleNotIncluded().map((value) => (
            <Chip key={value} name={value} onClick={() => addNotice(value)}>
              <Image
                src="/icons/plus.svg"
                alt="추가하기"
                width={12}
                height={12}
              />
            </Chip>
          ))}
        </div>
      )}
      <Accordion
        value={openedAccordion}
        onChange={setOpenedAccordion}
        classNames={{
          ...accordionStyles,
        }}
      >
        {notices.map((notice, index) => (
          <NoticeItem
            key={index}
            notice={notice}
            index={index}
            required={index < REQUIRED_NOTICES_BOUND}
            onClickRemove={handleRemoveNotice}
            errors={errors}
          />
        ))}
      </Accordion>

      <CustomButton
        title="추가하기"
        onClick={() => append({ title: "새 공지사항", content: "" })}
        styleType="line"
        size="sm"
      />
    </div>
  );
};

export default NoticeEdit;
