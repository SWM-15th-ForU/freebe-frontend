import { CSSProperties, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FocusTrap, Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { tutorialModalStyles, tutorialStyles } from "./tutorial.css";

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
    title: "작가님, 반갑습니다!",
    content:
      "사진작가님을 위한 든든한 업무 파트너, 프리비입니다.\n프리비가 처음이시라면 다음 안내를 따라 설정을 진행해보세요.",
  },
  {
    caption: "프리비 시작하기 1/4",
    modalPosition: { top: 150, left: 260 },
    link: "/photographer/new-product",
    title: "촬영 상품을 등록해주세요!",
    content: "작가님의 촬영 방식에 꼭 맞춘 상품을 등록할 수 있어요.",
    maskX: {
      start: 10,
      end: 240,
    },
    maskY: {
      start: 150,
      end: 200,
    },
  },
  {
    caption: "프리비 시작하기 2/4",
    modalPosition: { top: 190, left: 260 },
    link: "/photographer/profile",
    title: "프로필 설정하기",
    content:
      "고객에게 보일 프로필을 설정해보세요. 나만의 페이지를 원하는 대로 구성할 수 있어요.",
    maskX: {
      start: 10,
      end: 240,
    },
    maskY: {
      start: 190,
      end: 240,
    },
  },
  {
    caption: "프리비 시작하기 3/4",
    modalPosition: { top: 230, left: 260 },
    title: "링크 공유하기",
    content:
      "설정이 완료되었다면, 링크를 복사하고 작가님의 인스타그램 등 원하시는 채널에 공유해보세요. 프리비 링크로 고객들이 바로 예약을 시작할 수 있어요.",
    maskX: {
      start: 10,
      end: 240,
    },
    maskY: {
      start: 230,
      end: 280,
    },
  },
  {
    caption: "프리비 시작하기 4/4",
    modalPosition: { bottom: 50, right: 50 },
    title: "신청서 확인하기",
    content:
      "새롭게 접수된 신청서는 메인페이지에서 확인할 수 있어요. 신청서가 접수될 때마다 알림톡을 보내드려요!",
    maskImage:
      "linear-gradient(to right, black 270px, transparent 270px), linear-gradient(to left, black 30px, transparent 30px),linear-gradient(black 140px, transparent 140px 600px, black 600px)",
  },
  {
    content:
      "튜토리얼은 메인페이지에서 언제든지 다시 확인할 수 있어요. 사용중 어려운 점이 있다면 고객센터로 문의해주세요. 프리비와 함께 더 자유로운 촬영 되세요!",
  },
];

const TUTORIAL_COUNT = 6;

const Tutorial = ({
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
      return `linear-gradient(to right, black ${maskX.start}px, transparent ${maskX.start}px ${maskX.end}px, black ${maskX.end}px), linear-gradient(black ${maskY.start}px, transparent ${maskY.start}px ${maskY.end}px, black ${maskY.end}px)`;
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
      classNames={{ ...tutorialModalStyles }}
      styles={{ content: { ...TUTORIAL_LEVELS[index]?.modalPosition } }}
    >
      <div className={tutorialStyles.container}>
        <FocusTrap.InitialFocus />
        {index > 0 && (
          <button
            onClick={() => setIndex((prev) => prev - 1)}
            className={tutorialStyles.navigation}
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
        <div>
          <div className={tutorialStyles.body}>
            <span className={tutorialStyles.caption}>
              {TUTORIAL_LEVELS[index]?.caption}
            </span>
            <span className={tutorialStyles.title}>
              {TUTORIAL_LEVELS[index]?.title}
            </span>
            <span className={tutorialStyles.content}>
              {TUTORIAL_LEVELS[index]?.content}
            </span>
          </div>
        </div>
        {index + 1 < TUTORIAL_COUNT && (
          <button
            onClick={() => setIndex((prev) => prev + 1)}
            className={tutorialStyles.navigation}
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
      <div className={tutorialStyles.buttonWrapper}>
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
      </div>
    </Modal>
  );
};

export default Tutorial;
