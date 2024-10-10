import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";
import { NoticeForm } from "profile-types";
import Chip from "@/components/common/chip";
import { guideStyles } from "./notice.css";

const SAMPLE_NOTICE = ["환불 규정", "취소 안내"];

const NoticeGuide = () => {
  const { watch, control } = useFormContext<NoticeForm>();
  const { append } = useFieldArray<NoticeForm>({ control, name: "notices" });
  const notices = watch("notices");

  function sampleNotIncluded() {
    return SAMPLE_NOTICE.filter(
      (value) => !notices.map((notice) => notice.title).includes(value),
    );
  }

  function addNotice(title: string) {
    append({ title, content: "" });
  }

  return (
    <div>
      <div className={guideStyles.chipWrapper}>
        <span className={guideStyles.title}>예시 항목</span>
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
      <div className={guideStyles.textWrapper}>
        <Image src="/icons/error.svg" alt="도움말" width={12} height={20} />
        <p className={guideStyles.text}>
          예약을 원하는 고객에게 전달할 공지사항을 작성해주세요. 환불 규정,
          촬영된 사진의 이용 범위, 촬영 일정의 변경 등 촬영 이전에 고객에게
          공유해야 할 내용을 등록해주시면 프리비가 고객에게 전달할게요.
        </p>
      </div>
    </div>
  );
};

export default NoticeGuide;
