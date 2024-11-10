import { auth } from "@/app/(authentication)/_lib/auth";
import React from "react";

export default async function WelcomeMessage() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <h1 className="font-medium text-xl text-center">
      Hello! {session.user.name}
    </h1>
  );
}
