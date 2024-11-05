import React from "react";
import HeroBackground from "./HeroBackground";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-balance flex-col container">
      <HeroBackground />
      <div className="space-y-12">
        <span className="type-words flex justify-center text-5xl">‎</span>
        <h1 className="text-5xl text-start font-bold text-primary md:text-6xl xl:text-8xl md:text-center md:font-extrabold">
          Your Modern Developer Knowledge Hub
        </h1>
        <p className="text-pretty md:text-center font-normal text-md md:text-2xl md:text-balance xl:text-3xl">
          <span className="font-semibold">Create,</span>{" "}
          <span className="font-semibold">organize,</span> and{" "}
          <span className="font-semibold">share</span> your coding notes with
          syntax highlighting and real-time collaboration.
        </p>
        <div className="flex items-center justify-start gap-4 md:justify-center">
          <Button className="text-lg h-12">Get Started</Button>
          <Button variant={"outline"} className="text-lg h-12">
            View Demo
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
