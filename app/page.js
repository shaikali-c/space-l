import Image from "next/image";
import SpaceImage from "@/public/assets/images/home.jpg";
import Link from "next/link";
import { ArrowUpRight, ChevronsRight, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[60vw_40vw] min-h-screen">
      <section className="relative">
        <header className="md:px-20 md:py-15 p-7 pt-0 text-lg flex justify-between items-start">
          <h2>SPACE.</h2>
          <div className="bg-neutral-900 p-3 rounded-full">
            <Search size={20} />
          </div>
        </header>
        <div className="md:absolute bottom-5 left-5 md:p-20 p-7 pb-0 flex flex-col gap-4">
          <h2 className="text-4xl max-w-150">
            We were never meant to fit under one sky, we were meant to build our
            own among the stars.
          </h2>
          <p className="max-w-80 text-neutral-400">
            Share your space posts. Explore others. Interact, comment, and
            connect with people who share your interests.
          </p>
          <Link
            href={"/"}
            className="bg-neutral-900 px-6 rounded-md py-3 w-fit flex items-center gap-1.5 hover:bg-neutral-100 hover:text-neutral-950"
          >
            Explore
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <section className="">
        <Image
          src={"/assets/images/home.jpg"}
          width={5780}
          height={5047}
          alt="Space Image"
          className="h-full w-full object-cover"
        />
      </section>
    </main>
  );
}
