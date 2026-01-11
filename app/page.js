import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, Star } from "lucide-react";
import Heading from "@/components/ui/heading";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[60vw_40vw] min-h-screen">
      <section className="relative md:mb-0">
        <header className="md:px-20 md:py-17 p-7 text-lg flex justify-between items-center">
          <h2>SPACE.</h2>
          <div className="bg-neutral-900 p-3 rounded-full">
            <Star fill="#f2f2f2" size={20} />
          </div>
        </header>
        <div className="md:absolute bottom-5 left-5 md:p-22 p-9 pt-7 pb-0 flex flex-col gap-5.5">
          <Heading className={"max-w-150 text-4xl"}>
            It's just a space, or may be an extraordinary space for some extra
            people.
          </Heading>
          <p className="max-w-150 text-neutral-400">
            Share your space posts. Explore others. Interact, comment, and
            connect with people who share your interests. All the above is the
            best as always. Hello world happy.
          </p>
          <Link
            href={"/explore"}
            className="bg-neutral-900 px-6 rounded-full border border-neutral-800 py-3 md:w-fit flex items-center gap-1.5 hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-950 text-center justify-center"
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
