import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pt-5 mx-auto w-full max-w-xs sm:max-w-none">
      <ul className="grid grid-cols-4 mx-auto justify-items-center">
        <li className="hover:underline">
          <Link href="/">home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">about</Link>
        </li>
        <li className="hover:underline">
          <Link href="/projects">projects</Link>
        </li>
        <li className="hover:underline">
          <Link href="/resume">resume</Link>
        </li>
      </ul>
    </nav>
  );
}
