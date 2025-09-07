export default function Home() {
  return (
    <div className="mx-auto p-8 grid grid-cols-1 justify-items-center container">
      <div className="mt-8">
        <h1 className="font-bold text-2xl text-center">Máté Cserháti</h1>
        <h2 className=" underline">computer science student</h2>
      </div>
      <div className="mt-5">
        <ul className="font-mono flex flex-row mx-auto gap-5">
          <li>
            <a
              href="https://github.com/mtcsrht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-yellow-200 hover:underline"
              >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/máté-cserháti-7a654a295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-yellow-200 hover:underline"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/mtcsrht/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-yellow-200 hover:underline"
            >
              leetcode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
