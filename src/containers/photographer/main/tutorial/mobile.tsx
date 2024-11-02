import { CSSProperties, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FocusTrap, Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import {
  mobileTutorialModalStyles,
  mobileTutorialStyles,
} from "./tutorial.css";

const TUTORIAL_LEVELS: {
  caption?: string;
  modalPosition?: CSSProperties;
  link?: string;
  title?: string;
  content?: string;
  maskX?: {
    start: number;
    end: number;
  };
  maskY?: {
    start: number;
    end: number;
  };
  maskImage?: string;
}[] = [
  {
    caption: "튜토리얼은 PC 환경에 최적화되어 있습니다.",
    title: "작가님, 반갑습니다!",
    content:
      "사진작가님을 위한 든든한 업무 파트너, 프리비입니다.\n프리비가 처음이시라면 다음 안내를 따라 설정을 진행해보세요.",
  },
  {
    caption: "프리비 시작하기 1/4",
    modalPosition: { top: 160 },
    title: "촬영 상품을 등록해주세요!",
    content: "작가님의 촬영 방식에 꼭 맞춘 상품을 등록할 수 있어요.",
    maskX: {
      start: 15,
      end: 310,
    },
    maskY: {
      start: 100,
      end: 150,
    },
  },
  {
    caption: "프리비 시작하기 2/4",
    modalPosition: { top: 200 },
    title: "프로필 설정하기",
    content:
      "고객에게 보일 프로필을 설정해보세요. 나만의 페이지를 원하는 대로 구성할 수 있어요.",
    maskX: {
      start: 15,
      end: 310,
    },
    maskY: {
      start: 140,
      end: 190,
    },
  },
  {
    caption: "프리비 시작하기 3/4",
    modalPosition: { top: 240 },
    title: "예약 페이지 공유하기",
    content:
      "설정이 완료되었다면, 링크를 복사하고 작가님의 인스타그램 등 원하시는 채널에 공유해보세요. 프리비 링크로 고객들이 바로 예약을 시작할 수 있어요.",
    maskX: {
      start: 15,
      end: 310,
    },
    maskY: {
      start: 180,
      end: 230,
    },
  },
  {
    caption: "프리비 시작하기 4/4",
    title: "신청서 확인하기",
    content:
      "새롭게 접수된 신청서는 메인페이지에서 확인할 수 있어요. 신청서가 접수될 때마다 알림톡을 보내드려요!",
  },
  {
    caption: "PC 환경에서 더 편리하게 프리비를 사용해보세요!",
    content:
      "튜토리얼은 언제든지 다시 확인할 수 있어요. 사용중 어려운 점이 있다면 고객센터로 문의해주세요. 프리비와 함께 더 자유로운 촬영 되세요!",
  },
];

const TUTORIAL_COUNT = 6;

const MobileTutorial = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [index, setIndex] = useState(0);

  function getMaskImageValue(targetIndex: number) {
    const { maskX, maskY } = TUTORIAL_LEVELS[targetIndex];
    if (maskX && maskY) {
      return `linear-gradient(to left, black ${maskX.start}px, transparent ${maskX.start}px ${maskX.end}px, black ${maskX.end}px), linear-gradient(black ${maskY.start}px, transparent ${maskY.start}px ${maskY.end}px, black ${maskY.end}px)`;
    }
    return undefined;
  }

  function handleClose() {
    close();
    setIndex(0);
  }

  return (
    <Modal
      onClose={close}
      opened={opened}
      closeOnClickOutside={false}
      withCloseButton={false}
      centered
      lockScroll={false}
      overlayProps={{
        style: {
          maskImage:
            TUTORIAL_LEVELS[index]?.maskImage || getMaskImageValue(index),
          maskComposite: "add",
        },
      }}
      classNames={{ ...mobileTutorialModalStyles }}
      styles={{ content: { ...TUTORIAL_LEVELS[index]?.modalPosition } }}
    >
      <div className={mobileTutorialStyles.container}>
        <FocusTrap.InitialFocus />

        <div>
          <div className={mobileTutorialStyles.body}>
            <span className={mobileTutorialStyles.caption}>
              {TUTORIAL_LEVELS[index]?.caption}
            </span>
            <span className={mobileTutorialStyles.title}>
              {TUTORIAL_LEVELS[index]?.title}
            </span>
            <span className={mobileTutorialStyles.content}>
              {TUTORIAL_LEVELS[index]?.content}
            </span>
          </div>
        </div>
      </div>
      <div className={mobileTutorialStyles.buttonWrapper}>
        {index > 0 && (
          <button
            onClick={() => setIndex((prev) => prev - 1)}
            className={mobileTutorialStyles.navigation}
            type="button"
          >
            <Image
              width={13}
              height={13}
              alt="prev"
              src="/icons/left-blue.svg"
              style={{ paddingRight: 2 }}
            />
          </button>
        )}
        <CustomButton
          title="튜토리얼 닫기"
          size="sm"
          styleType="line"
          onClick={handleClose}
        />
        {TUTORIAL_LEVELS[index]?.link && (
          <Link href={TUTORIAL_LEVELS[index].link}>
            <CustomButton title="바로 가기" size="sm" styleType="primary" />
          </Link>
        )}
        {index + 1 < TUTORIAL_COUNT && (
          <button
            onClick={() => setIndex((prev) => prev + 1)}
            className={mobileTutorialStyles.navigation}
            type="button"
          >
            <Image
              width={13}
              height={13}
              alt="prev"
              src="/icons/left-blue.svg"
              style={{ paddingRight: 2, transform: "rotate(180deg)" }}
            />
          </button>
        )}
      </div>
    </Modal>
  );
};

export default MobileTutorial;
