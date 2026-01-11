import Image from "next/image";
import Heading from "../heading";

export default function TopPost() {
  return (
    <section className="p-5 md:flex gap-5 pt-5 bg-neutral-900 rounded-3xl border border-neutral-800 w-full">
      <div className="relative w-full md:h-80 h-90">
        <Image
          fill
          src={"/assets/images/9.jpg"}
          alt="Hello world"
          className="rounded-2xl md:m-0 object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-2 md:pt-2 pt-5 pb-0">
        <Heading className={"text-2xl"}>1. The most liked space post.</Heading>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}
