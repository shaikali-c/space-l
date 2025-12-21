import Image from "next/image";

export default function Post({ id }) {
  return (
    <div className="h-120 min-w-80 md:h-150 md:min-w-100 bg-neutral-800 rounded-2xl relative overflow-hidden border border-neutral-900 hover:border-neutral-800">
      <Image
        src={`/assets/images/${id}.jpg`}
        fill
        alt="a"
        className="object-cover"
        key={id}
      />
    </div>
  );
}
