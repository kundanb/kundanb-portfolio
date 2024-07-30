import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo-light.svg'
import { Routes } from '@/lib/consts'

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="container h-16 flex justify-between items-center">
        <Link href={Routes.Home}>
          <Image src={Logo} alt="KundanB Logo" height={24} />
        </Link>

        <nav className="flex gap-6">
          <Link href={Routes.Blog} className="btn0 btn-t-accent">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
