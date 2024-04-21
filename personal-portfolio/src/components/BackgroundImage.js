import Image from "next/image";

export default function BackgroundImage() {
  return (
    <Image
      src="/background.png"
      alt="Background image"
      fill
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
