export default function Projects() {

  
  return (
    <div className="grid grid-cols-1 gap-30 justify-items-center mx-auto mt-5 p-8">
      <div>
        <h1 className="font-bold text-2xl">URL Shortener</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/urlshortener-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            frontend&#39;s repository
          </a>
          <a
            href="https://github.com/mtcsrht/UrlShortenerAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            backend&#39;s repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Next.Js
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Express.Js
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                MongoDB
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A simple URL shortening application that tries to mimic how url shortener services might work.
          </p>
        </div>
      </div>
    </div>
  );
}
