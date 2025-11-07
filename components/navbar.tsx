import Link from "next/link"
import Image from "next/image"
import NavItems from "./navItmes"
const Navber = () => {
  return (
    <nav className="navbar border-b border-b-violet-200">
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
        <div className="flex items-center gap-8">
          <NavItems />
        </div>
    </nav>
  )
}

export default Navber