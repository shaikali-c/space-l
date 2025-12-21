import Favourite from "@/components/ui/fav";
import { Search, ThumbsDown, ThumbsUp } from "lucide-react";

export default function Create() {
  return (
    <section className="bg-neutral-950 md:border-l border-t md:border-t-0 border-neutral-800 min-h-screen md:max-h-screen overflow-y-auto">
      <section className="p-5 pb-3">
        <Favourite />
      </section>
      <section className="p-5 border-t border-neutral-800 mt-5">
        <div className="flex flex-col gap-1 mb-5">
          <h2 className="text-xl">Choose what you like</h2>
          <p className="text-neutral-400">
            Astronomers just caught a black hole doing something so excessive
            it’s actually mind-boggling. Inside a spiral galaxy 135 million
            light-years away, a supermassive black hole lit up and hurled out
            winds traveling over 130 million miles per hour.
          </p>
        </div>
        <div className="flex items-center border border-neutral-800 rounded-t-xl outline-none bg-neutral-900 pl-5">
          <Search />
          <input
            type="text"
            placeholder="Search your fav topics"
            className="w-full p-5 outline-none"
          />
        </div>
        <div className="bg-neutral-900 border border-neutral-800 border-t-0 h-80 w-full rounded-b-2xl max-h-80 overflow-y-auto">
          <div className="flex items-center bg-neutral-900 px-5 py-5 gap-5 border-neutral-800 border-b">
            <ThumbsUp size={20} className="text-sky-500" />
            <ThumbsDown size={20} className="text-red-500" />
            <span className="ml-2">Black holes</span>
          </div>
          <div className="flex items-center bg-neutral-900 px-5 py-5 gap-5 border-neutral-800 border-b">
            <ThumbsUp size={20} className="text-sky-500" />
            <ThumbsDown size={20} className="text-red-500" />
            <span className="ml-2">Super massive black holes</span>
          </div>
        </div>
      </section>
    </section>
  );
}
