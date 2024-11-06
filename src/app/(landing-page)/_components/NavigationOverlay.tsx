import Link from "next/link";

export default function NavigationOverlay() {
  return (
    <div className="max-h-screen flex items-start flex-col mt-20 ml-10 gap-4 font-medium text-muted-foreground">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Pricing</Link>
      <Link href={"/"} className="mt-2">
        Sign in
      </Link>
      <Link href={"/"}>Sign up</Link>
    </div>
  );
}
