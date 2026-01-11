import Heading from "@/components/ui/heading";
import Post from "@/components/ui/post";
import Searchbar from "@/components/ui/searchbar";
import {
  Atom,
  Bookmark,
  ListFilter,
  Save,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

export default function Explore() {
  return (
    <section className="md:p-10">
      <main className="w-full min-h-screen bg-neutral-950 md:outline outline-neutral-900 grid md:grid-cols-[70%_30%] md:rounded-2xl">
        <div className="md:border-r border-neutral-900 flex flex-col">
          <div className="flex p-5 md:p-15 md:pb-0 pb-0 md:hidden">
            <Searchbar />
          </div>
          <section className="p-6 md:p-15 md:py-10 flex flex-col gap-3 border-b border-neutral-900">
            <Heading className={"text-2xl md:text-4xl mb-2 text-center"}>
              The space is so peak, it's just needs an oscar, but for space.
            </Heading>
          </section>
          <section className="border-b border-neutral-900 flex text-neutral-300">
            <button className="md:px-15  md:py-5 md:text-lg p-5 px-8  cursor-pointer border-r border-neutral-900 flex items-center gap-2 transition-colors hover:text-neutral-100 hover:bg-neutral-900">
              <ListFilter size={20} />
              Filter
            </button>
            <button className="md:px-15  md:py-5 md:text-lg p-5 cursor-pointer px-5 border-r border-neutral-900  transition-colors hover:bg-neutral-900 hover:text-neutral-100">
              <Bookmark color="#d4d4d4" />
            </button>
            <input
              placeholder="Keywords..."
              type="text"
              className="w-full pl-5.5 outline-0"
            />
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </section>
        </div>
        <section>
          <div className="hidden md:flex p-5 md:pb-0 pb-0">
            <div
              className="
                    flex items-center w-full
                    bg-neutral-900
                    border-2 border-neutral-900
                    rounded-xl
                    focus-within:border-neutral-700
                  "
            >
              <div className="px-3.5 text-neutral-400">
                <Search size={22} />
              </div>

              <input
                type="text"
                placeholder="Search anything..."
                className="
                        w-full bg-transparent
                        px-5 py-3 pl-0
                        outline-none
                        text-neutral-100
                      "
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
