import React from "react";
import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
    </div>
  );
}
