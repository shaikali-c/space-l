import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex items-center w-full bg-neutral-900 border-2 border-neutral-900 rounded-xl focus-within:border-neutral-700">
      <div className="px-3.5 text-neutral-400">
        <Search size={22} />
      </div>
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full bg-transparent px-5 py-3 pl-0 outline-none text-neutral-100"
      />
    </div>
  );
}
