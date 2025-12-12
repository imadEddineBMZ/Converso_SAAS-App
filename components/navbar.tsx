import Link from "next/link"
import Image from "next/image"
import NavItems from "./navItmes"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navber = () => {
  return (
    <section className="navbar border-b border-b-violet-200">
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="Converso Logo"
              width={46}
              height={46}
            />
          </div>
        </Link>
        <div className="flex items-center gap-8 cursor-pointer">
          <NavItems />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="border border-black rounded-xl font-bold px-4 py-2 hover:bg-black hover:text-white transition">
              <SignInButton />
            </div>
          </SignedOut>
        </div>
    </section>
  )
}

export default Navber