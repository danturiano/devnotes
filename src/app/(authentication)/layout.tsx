import React from "react";
import Navigation from "./_components/Navigation";
import { Toaster } from "react-hot-toast";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col justify-center items-center">
        {children}
        <Toaster
          position="bottom-center"
          containerStyle={{
            top: 20,
            left: 20,
            bottom: 80,
            right: 20,
          }}
        />
      </div>
    </>
  );
}
