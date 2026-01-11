import { CircleUser } from "lucide-react";
import Image from "next/image";

export default function Favourite() {
  return (
    <div className="w-full border border-neutral-800 bg-neutral-900 rounded-2xl">
      <header className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <CircleUser size={20} />
          <p className="font-semibold">Shaik Ali</p>
        </div>
        <p className="text-neutral-400">2d ago</p>
      </header>
      <section className="p-5">
        <h2 className="text-xl py-2">
          Supermassive Black Hole Found Churning With 130 Million MPH Winds
        </h2>
        <section className="text-neutral-400">
          <p>
            Astronomers just caught a black hole doing something so excessive
            it’s actually mind-boggling. Inside a spiral galaxy 135 million
            light-years away, a supermassive black hole lit up and hurled out
            winds traveling over 130 million miles per hour.
          </p>
          <div className="grid md:grid-cols-2 gap-5 grid-cols-1 mt-3">
            <div className="rounded-xl overflow-hidden relative border border-neutral-800">
              <Image
                src={"/assets/images/1.jpg"}
                alt="Im"
                className="object-cover"
                fill
              />
            </div>
            <div className="rounded-xl overflow-hidden relative border border-neutral-800 h-60">
              <Image
                src={"/assets/images/3.jpg"}
                alt="Im"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
