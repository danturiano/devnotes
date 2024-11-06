import HeroBackground from "@/app/(landing-page)/_components/HeroBackground";
import Authentication from "../_components/Authentication";
import CredentialsForm from "../_components/CredentialsForm";

export default function SignUpPage() {
  return (
    <>
      <HeroBackground />
      <Authentication>
        <CredentialsForm />
      </Authentication>
    </>
  );
}
