import { SquareTerminal } from "lucide-react";

export default function Brand() {
  return (
    <div className="flex gap-2 text-lg items-center">
      <SquareTerminal color="#2f2f2f" />
      <h1 className="font-regular text-xl">
        dev<span className="font-bold">.</span>notes
      </h1>
    </div>
  );
}
