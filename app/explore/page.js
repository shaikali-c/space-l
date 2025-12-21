import { Images } from "lucide-react";

export default function Explore() {
  return (
    <section className="bg-neutral-900 border-neutral-800 md:border-l md:border-t-0 border-t p-5 min-h-screen flex justify-center items-center">
      <div className="flex justify-center flex-col items-center text-neutral-400 gap-3 text-center max-w-80">
        <Images size={32} />
        <h2>Sign in to save favorites pictures and upload them...</h2>
      </div>
    </section>
  );
}
