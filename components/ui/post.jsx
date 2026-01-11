import { CircleUserRound, Heart, Send } from "lucide-react";
import SpcImage from "./image";
import PInteraction from "./post/p_interaction";

export default function Post({ id }) {
  return (
    <div className="max-w-110 pb-0 border-b md:border-b md:border-neutral-900 border-neutral-800 md:not-nth-[3n]:border-r">
      <header className="flex items-center py-5 pb-3 px-6 justify-between">
        <div className="flex items-center gap-2">
          <CircleUserRound />
          <h2 className="font-semibold">Shaik Ali </h2>
        </div>
        <p className="text-neutral-400 text-sm">Matrices</p>
      </header>
      <div className="px-5 py-2">
        <SpcImage src={"/assets/images/1.jpg"} alt={"Image"} />
        <section className="py-3 px-1">
          <div className="flex gap-2 py-1.5 font-bold text-neutral-200">
            <PInteraction>
              <Heart />
            </PInteraction>
            <PInteraction>
              <Send />
            </PInteraction>
          </div>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. {id}
          </p>
        </section>
      </div>
    </div>
  );
}
