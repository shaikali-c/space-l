import { Atom, Sparkles } from "lucide-react";

export default function ChoiceBtns() {
  return (
    <div className="flex px-5 md:hidden">
      <button className="px-5 justify-center w-full border border-neutral-800 py-3 flex items-center gap-2.5 border-r-0 rounded-l-full bg-neutral-900">
        <Sparkles size={18} className="text-sky-600" />
        Casual
      </button>
      <button className="px-5 justify-center w-full border border-neutral-800 py-3 flex items-center gap-2.5 rounded-r-full">
        <Atom size={18} className="text-emerald-600" />
        Astrophysics
      </button>
    </div>
  );
}
