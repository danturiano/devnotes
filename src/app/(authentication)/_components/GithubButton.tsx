import { Button } from "@/components/Button";
import React from "react";
import { signInWithGithub } from "../_lib/actions";

export default function GithubButton() {
  return (
    <form action={signInWithGithub} className="w-full">
      <Button className="w-full" variant="outline" type="submit">
        <div className="flex gap-2 items-center">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="https://authjs.dev/img/providers/github.svg"
            alt="Google logo"
            height="14"
            width="14"
          />
          <span>Github</span>
        </div>
      </Button>
    </form>
  );
}
