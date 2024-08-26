import Image from "next/image";

export default function Loading() {
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <Image
        src="/images/loading.png"
        width={72}
        height={72}
        alt="now loading"
      />
    </div>
  );
}
