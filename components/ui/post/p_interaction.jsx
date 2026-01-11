import { Heart } from "lucide-react";

export default function PInteraction({ children }) {
  return (
    <div className="flex gap-2">
      {children} <span>230</span>
    </div>
  );
}
