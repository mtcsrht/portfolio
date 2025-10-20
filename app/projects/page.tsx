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

      <div>
        <h1 className="font-bold text-2xl">Cliphive Backend</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/Cliphive.Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                C# ASP.NET Core
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
            <li>
              <a
                href="https://jwt.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                JWT Authentication
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A modular and scalable Web API backend service that provides user authentication, content management, billing, and tagging capabilities. Features JWT-based authentication, MongoDB data storage, and RESTful API endpoints for a content sharing platform.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl">Lost Animal Project</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/lostanimal-project"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://laravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Laravel
              </a>
            </li>
            <li>
              <a
                href="https://www.php.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                PHP
              </a>
            </li>
            <li>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                MySQL
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A community-based lost animal finder web application that helps pet owners and finders connect. Users can view lost animals near them across Hungary, register to upload missing pet information, and use an integrated chat system to communicate with worried owners.
          </p>
        </div>
      </div>
    </div>
  );
}
