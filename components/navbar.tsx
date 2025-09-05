export default function Navbar() {
  return (
      <nav className="pt-5">
        <ul className="grid grid-cols-4 mx-auto justify-items-center">
          <li className="hover:underline">
            <a href="/">home</a>
          </li>
          <li className="hover:underline">
            <a href="/about">about</a>
          </li>
          <li className="hover:underline">
            <a href="/projects">projects</a>
          </li>
          <li className="hover:underline">
            <a href="/resume">resume</a>
          </li>
        </ul>
      </nav>
  );
}
