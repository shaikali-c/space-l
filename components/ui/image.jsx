import Image from "next/image";
export default function SpcImage({ src, alt, className }) {
  return (
    <div
      className={`relative w-full border border-neutral-900 rounded-md overflow-hidden shrink-0 h-fit ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={900}
        className="object-cover"
      />
    </div>
  );
}
