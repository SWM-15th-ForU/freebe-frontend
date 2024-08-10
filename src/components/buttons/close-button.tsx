import Image from "next/image";

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      style={{ zIndex: 3, position: "absolute", top: 4, right: 4 }}
      onClick={onClick}
      role="presentation"
    >
      <Image
        src="/icons/close.svg"
        width={24}
        height={24}
        alt="close"
        style={{ color: "white" }}
      />
    </div>
  );
};

export default CloseButton;
