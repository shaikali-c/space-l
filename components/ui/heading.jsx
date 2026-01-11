import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
export default function Heading({ children, className }) {
  return (
    <header className={`${lora.className} ${className}`}>
      <h2>{children}</h2>
    </header>
  );
}
