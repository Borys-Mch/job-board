import Link from "next/link";

export default function Header() {
    return (
        <header>
        <div className="flex items-center justify-between mx-auto">
        <Link href={'/'} className="font-bold text-xl">Job Board</Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
          <Link href={'/login'} className="bg-gray-200">Login</Link>
          <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a job</Link>
        </nav>
        </div>
      </header>
    );
}