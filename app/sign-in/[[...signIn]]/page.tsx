import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-700">
      <SignIn />
    </main>

);
}